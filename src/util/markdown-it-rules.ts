import type MarkdownIt from 'markdown-it'

export function applyMarkdownRules(md: MarkdownIt) {
  const rules = md.renderer.rules

  // ── Headings ──────────────────────────────
  // Add scroll-margin so anchor jumps don't hide under a sticky header,
  // plus size/weight since Tailwind preflight resets these to inherit.
  const headingClasses: Record<string, string> = {
    h1: 'text-3xl font-bold mt-8 mb-4 scroll-mt-20',
    h2: 'text-2xl font-bold mt-8 mb-3 scroll-mt-20',
    h3: 'text-xl font-semibold mt-6 mb-2 scroll-mt-20',
    h4: 'text-lg font-semibold mt-4 mb-2 scroll-mt-20',
    h5: 'text-base font-semibold mt-4 mb-2 scroll-mt-20',
    h6: 'text-sm font-semibold mt-4 mb-2 scroll-mt-20 text-gray-500',
  }

  rules.heading_open = (tokens, idx, options, _env, self) => {
    const token = tokens[idx]
    const tag = token!.tag

    token?.attrJoin('class', headingClasses[tag] ?? '')
    return self.renderToken(tokens, idx, options)
  }

  // ── Paragraphs ────────────────────────────
  rules.paragraph_open = () => '<p class="my-4 leading-relaxed">'
  rules.paragraph_close = () => '</p>'

  // ── Lists ─────────────────────────────────
  rules.bullet_list_open = () => '<ul class="list-disc pl-6 space-y-1 my-4">'
  rules.ordered_list_open = () => '<ol class="list-decimal pl-6 space-y-1 my-4">'
  rules.list_item_open = () => '<li class="leading-relaxed">'

  // ── Blockquote ────────────────────────────
  rules.blockquote_open = () =>
    '<blockquote class="border-l-4 border-orange-400 pl-4 italic my-4 text-gray-400">'

  // ── Horizontal rule ───────────────────────
  rules.hr = () => '<hr class="my-8 border-gray-700" />'

  // ── Inline code (not fenced blocks) ───────
  rules.code_inline = (tokens, idx) => {
    const content = md.utils.escapeHtml(tokens[idx]!.content)
    return `<code class="px-1.5 py-0.5 rounded bg-[var(--ui-bg-muted)] text-primary text-sm">${content}</code>`
  }

  // indented code block
  rules.code_block = (tokens, idx) => {
    const content = md.utils.escapeHtml(tokens[idx]!.content)
    return `<code class="px-1.5 py-0.5 rounded bg-[var(--ui-bg-muted)] txt-sm">${content}</code>`
  }

  // ── Links ─────────────────────────────────
  rules.link_open = (tokens, idx, options, _env, self) => {
    const token = tokens[idx]
    const hrefIndex = token!.attrIndex('href')
    const href = hrefIndex >= 0 ? token!.attrs![hrefIndex]![1] : ''
    const isExternal = /^https?:\/\//.test(href)

    token!.attrSet('class', 'text-orange-400 hover:underline underline-offset-2')
    if (isExternal) {
      token!.attrSet('target', '_blank')
      token!.attrSet('rel', 'noopener noreferrer')
    }
    return self.renderToken(tokens, idx, options)
  }

  // ── Images ────────────────────────────────
  rules.image = (tokens, idx, options, _env, self) => {
    const token = tokens[idx]
    token!.attrSet('class', 'rounded-lg my-6 max-w-full mx-auto')
    token!.attrSet('loading', 'lazy')
    return self.renderToken(tokens, idx, options)
  }

  // ── Tables (GFM) ──────────────────────────
  rules.table_open = () =>
    '<div class="overflow-x-auto my-6"><table class="w-full border-collapse text-sm">'
  rules.table_close = () => '</table></div>'
  rules.thead_open = () => '<thead class="bg-[#1f2430]">'
  rules.th_open = () => '<th class="border border-gray-700 px-3 py-2 text-left font-semibold">'
  rules.td_open = () => '<td class="border border-gray-700 px-3 py-2">'

  // ── Strong / Em (optional, usually fine as-is) ──
  rules.strong_open = () => '<strong class="font-bold">'
  rules.em_open = () => '<em class="italic">'
}
