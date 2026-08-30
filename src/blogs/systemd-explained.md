---
title: Systemd explained
description: Simple and brief explination of the systemd
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
It's system and service manager for linux operating system, It's the default initialization system for
most of linux distribution (Ubuntu, Fedora, etc...).It own PID 1 (Process ID) because it runs as the first process on boot by kernal,
and all the processes are started by systemd.
Systemd created by Lennart Poettering and Kay Sievers in 2010 to replace
the Linux's conventional Systemd V init(SysVinit).
SysVinit handles system startup sequentially using shell scripts, while systemd allow more processes to run
concurrently or in parallel during system booting which resulting in fast boot up.

# Boot Process (simple)
To understand the systemd is better to have the full picture for the boot processes:
- BIOS (Basic I/O systemd): Check the integrity of hardware
- Boot Loader: Bios search in MBR for a boot loader (usually in /dev/sda or /dev/hda or in USB).
Boot loader examples are LIO, GRUP, GRUP2. 
- Linux Kernal: It inerfaces with hardware and loaded by boot loader.
- Systemd: Linux kernal loads systemd to:
  - Run all others initialization.
  - Activates all target units that are dependencies of default.target.

# Unit file
Unit is the object that systemd track and know how to operate and manage. Unit is defined by creating a unit fule configuration. unit file
use a declerative language, which consist of sections that have simple declarative syntax:
```
[Section]
directive1=value
directive2=value
```
## Unit file directory & priority
1. /etc/systemd/system
2. /run/systemd/system
3. lib/systemd/system
- Most of the packages install services in `/lib/systemd/system` to allow editing them in `/etc`
- `User` service files are located in `/etc/systemd/user/` or `$HOME/.config/systemd/user/`

## Unit file section
- [Unit]
  - Usually placed at the top of the file
  - Metadata of the unit file
  - Configure the relationship of unit file with other units (order)
    - These relationship evaluated when service is running (active)
```
[Unit]
Description=The Apache HTTP Server
After=network.target remote-fs.target nss-lookup.target
Documentation=man:httpd(8)
Documentation=man:apachectl(8)
```
- [Service][Path][Socket]...
  - Contains directive specified to the respectice type.
  - Unit file type defined in the file extention `.service`  `.slice`  `.socket`
- [Install]
  - Behavior of unit file when it's enabled/disabled
  - Dependency relationship (on other related units or targets)
    - `WantedBy=multi-user.target`
    - Enabling the service create a symlink for it
    - Symlink in `.wants` directory of the target, like `/etc/systemd/system/multi-user.target.wants` 
    - So the multi-user target want this service and will started when the target start
```
WantedBy=multi-user.target: when you enable this unit,
	systemd creates a symlink so that multi-user.target "wants" your unit 
	— meaning your unit gets started when that target starts. Weak dependency, 
	like Wants= but declared from the target's side.
RequiredBy=: same idea but stronger, like Requires= from the target's side.
Also=: when enabling this unit, also enable the listed units.
Alias=: extra name(s) for this unit.
```
    
## Unit dependencies & order
Systemd has two types of depenedencies:
- requirement dependency: specify which unit start or stop when activating the unit.
  - Wants: The required status unit have no effect (start successfuly or not) 
  - Requires: The required unit must start successfuly
- Order dependency: Specify the order in which units must be started.
  - Before: `Before=unit B` unit A executed fully before unit B
  - After: `After=unit B` unit B executed fully before unit A

## Unit file types
1. `.service` describes how to manage a service or application.
2. `.target` provide synchronization for other units during boot (combine several units to reach a target)
3. `.path` systemd watch a path for new files and start a service 
4. `.timer` systemd start a service on a specified time (used in backup)
5. `.socket` describe a network, IPC socket or a FIFO buffer
  - Systemd can open up the required port and handle it across ro the service when required.
  This is helpful in the boot process; for example instead of starting the daemon of httpd (Apache)
  and bind it to a socket, hhtpd.socket can start early and handled by systemd until a connection appears then it handled by the service "httpd".

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
