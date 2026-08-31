---
title: Systemd explained
description: Simple and brief explanation of the systemd
meta: ["30 August, 2026", "10 MINUTE READ"]
tags: ["Linux"]
---

<PostHeader
  :title="frontmatter.title"
  :description="frontmatter.description"
  :meta="frontmatter.meta"
/>

<style scoped>
</style>

<div class="blogBody">

# What is systemd 
It's a system and service manager for linux operating system, It's the default initialization system for
most Linux distributions (Ubuntu, Fedora, Arch).It owns PID(Process ID) 1 because it runs as the first process on boot,
and all the processes are started by systemd.
Systemd was created by Lennart Poettering and Kay Sievers in 2010 to replace
the Linux's conventional System V init(SysVinit).
SysVinit handles system startup sequentially using shell scripts, while systemd uses declarative unit files and allows more processes(services) to run
concurrently or in parallel during system boot which resulting in faster boot.

# Boot Process (simple)
To understand systemd is better to have the full picture for the boot process:
- BIOS (Basic I/O System): Check the integrity of the hardware
- Boot Loader: BIOS searchs in the MBR for a boot loader (usually in /dev/sda or /dev/hda or in USB).
Boot loader examples are LILO, GRUP, GRUP2. 
- Linux Kernel: It interfaces with hardware and is loaded by the boot loader.
- Systemd: Linux kernal loads systemd to:
  - Run all other initializations.
  - Activates all target units that are dependencies of default.target.

# Unit file
Unit is the object that systemd tracks and knows how to operate and manage. Unit is defined by creating a unit file configuration. Unit file
uses a declarative language, which consists of sections that have simple declarative syntax:
```bash
# example
[Section]
directive1=value
directive2=value
```
## Unit file directory & priority
1. /etc/systemd/system
2. /run/systemd/system
3. /usr/lib/systemd/system
- Most of the packages install services in `/lib/systemd/system` to allow editing them in `/etc/systemd/system`
- `User` service files are located in `/etc/systemd/user/` or `$HOME/.config/systemd/user/`

## Unit file sections
- [Unit]
  - Usually placed at the top of the file
  - Metadata of the unit file
  - Configure the relationship of unit file with other units (order)
    - These relationship evaluated when service is running (active)
```bash
# Apache Unit section
[Unit]
Description=The Apache HTTP Server
After=network.target remote-fs.target nss-lookup.target
Documentation=man:httpd(8)
Documentation=man:apachectl(8)
```
- [Service][Path][Socket]...
  - Contains directive specified to the respective type.
  - Unit file type defined in the file extention `.service`  `.slice`  `.socket`
- [Install]
  - Behavior of unit file when it's enabled/disabled
  - Dependency relationship (on other related units or targets)
    - example: `WantedBy=multi-user.target`
      - Enabling the service create a symlink in target for this unit
      - Symlink in `.wants` directory of the target, like `/etc/systemd/system/multi-user.target.wants` 
      - So the multi-user target want this service and will started when the target start
```bash
# other Install section directive
WantedBy=multi-user.target
  # when you enable this unit, systemd creates a symlink so that multi-user.target "wants" your unit 
	# — meaning your unit gets started when that target starts 
Also= #when enabling this unit, also enable the listed units.
Alias= #extra name(s) for this unit.
```
    
## Unit dependencies & order
Systemd has two types of depenedencies:
- requirement dependency: specifies which units start or stop when activating the unit.
  - Wants: The required unit's state has no effect (whether it starts successfuly or not) 
  - Requires: The required unit must start successfuly
- Order dependency: Specify the order in which units must be started. (only control order)
  - Before: `Before=unit B` unit A executed fully before unit B
  - After: `After=unit B` unit B executed fully before unit A

## Unit file types
1. `.service` describes how to manage a service or application.
2. `.target` provide synchronization for other units during boot (combin several units to reach a target)
3. `.path` systemd watch a specific path for new files to start a service 
4. `.timer` systemd start a service on a specified time (used in backup)
5. `.socket` describe a network, IPC socket or a FIFO buffer
  - Systemd can open up the required port and handle it across to the service when required.
  This is helpful in the boot process; for example instead of starting the daemon of httpd (Apache)
  and bind it to a socket, httpd.socket can start early and handled by systemd until a connection appears then it handled by the service "httpd".

# Commands overview
```bash
# -- Info
systemctl daemon-reload # re-read unit files
systemctl list-units # show if uniot are loaded/active
systemctl list-unit-files # show unit files and their states

# -- Service
# add --user for related user services
systemctl start # start a service
systemctl stop # stop a running service
systemctl status <service> # show service state & info 
systemctl restart # restart a running service
systemctl reload # reload service config files 'if supported by service'
systemctl enable # enable a service to start on boot
systemctl disable # disable a service to not start on boot

# -- Edit
systemctl edit <service> # edit a service (create snippit) 'partial edit'
systemctl edit --full <service> # edit entire unit file for a service

# -- Journal
journalctl # show all logs
journalctl -f # follow new logs
journalctl -u <service> # logs for a service
journalctl -u <service> --since today # logs from today "--since '10 min ago'"
journalctl --user # current user journal
journalctl -u nginx -o json-pretty > nginx.json # export unit logs as JSON
```
</div>
