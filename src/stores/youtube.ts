import { defineStore } from 'pinia'
import type { YoutubeVideo } from '@/types/youtube'
import { ref } from 'vue'

const YOUTUBE_API = import.meta.env.VITE_YOUTUBE_API_KEY
const UPLOADS_PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_UPLOADS_PLAYLIST_ID

const MAX_RESULTS = 3
const YOUTUBE_URI = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=${MAX_RESULTS}&key=${YOUTUBE_API}`

export const useYoutubeVideos = defineStore('youtube', () => {
  const videos = ref<YoutubeVideo[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchYoutubeData = async () => {
    try {
      loading.value = true
      const res = await fetch(YOUTUBE_URI)
      if (!res.ok) {
        throw new Error(`YouTube API error: ${res.status}`)
      }
      const data = await res.json()

      videos.value = data.items.map((item: any) => ({
        id: item.contentDetails.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        publishedAt: item.snippet.publishedAt,
        url: `https://www.youtube.com/watch?v=${item.contentDetails.videoId}`,
      }))
    } catch (e) {
      console.log(e)
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  return { videos, loading, error, fetchYoutubeData }
})
