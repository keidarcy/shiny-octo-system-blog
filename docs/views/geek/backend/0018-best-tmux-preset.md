---
title: 最简单的 tmux 配置方法
date: 2020-05-17
sidebar: false
categories:
  - technology
  - tmux
sticky: 1
tags:
  - tmux
publish: true
prev: ./0016-create-our-own-react-hook
# next: ../infra/0011-storing-using-secrets-github-action
---

## TMUX IS GREAT

tmux 功能真的很强大，普遍来说强大的工具同时意味着不平滑的学习曲线，用日语说叫 `使いこなせるか` 。
例如怎么复制内容就差点把我劝退了。

查了很多资料才把自己的 tmux 配置文件写好，可以用 vim 的按键移动，
clipboard 与系统和 vim 能通用 (需要另外安装reattach-to-user-namespace)
自己整一堆插件，去弄个好看的 statusbar。

但是当我发现了 [oh-my-tmux](https://github.com/gpakosz/.tmux) 之后，我就把之前所有的配置全删了，一行不需要，而且配置和我想要的完全一样 😳

## OH-MY-TMUX

https://github.com/gpakosz/.tmux

安装很简单，使用提供的配置文件 `.tmux.conf`, 在插入另一个适用于修改的配置文件 `.tmux.conf.local`, 所有在 `local` 内的配置都会覆盖原来的配置。

Key bindings 在 Readme 里很清楚，这里直接复制的

Bindings
--------

tmux may be controlled from an attached client by using a key combination of a
prefix key, followed by a command key. This configuration uses `C-a` as a
secondary prefix while keeping `C-b` as the default prefix. In the following
list of key bindings:
  - `<prefix>` means you have to either hit <kbd>Ctrl</kbd> + <kbd>a</kbd> or <kbd>Ctrl</kbd> + <kbd>b</kbd>
  - `<prefix> c` means you have to hit <kbd>Ctrl</kbd> + <kbd>a</kbd> or <kbd>Ctrl</kbd> + <kbd>b</kbd> followed by <kbd>c</kbd>
  - `<prefix> C-c` means you have to hit <kbd>Ctrl</kbd> + <kbd>a</kbd> or <kbd>Ctrl</kbd> + <kbd>b</kbd> followed by <kbd>Ctrl</kbd> + <kbd>c</kbd>

This configuration uses the following bindings:

 - `<prefix> e` opens `~/.tmux.conf.local` with the editor defined by the
   `$EDITOR` environment variable (defaults to `vim` when empty)
 - `<prefix> r` reloads the configuration
 - `C-l` clears both the screen and the tmux history

 - `<prefix> C-c` creates a new session
 - `<prefix> C-f` lets you switch to another session by name

 - `<prefix> C-h` and `<prefix> C-l` let you navigate windows (default
   `<prefix> n` and `<prefix> p` are unbound)
 - `<prefix> Tab` brings you to the last active window

 - `<prefix> -` splits the current pane vertically
 - `<prefix> _` splits the current pane horizontally
 - `<prefix> h`, `<prefix> j`, `<prefix> k` and `<prefix> l` let you navigate
   panes ala Vim
 - `<prefix> H`, `<prefix> J`, `<prefix> K`, `<prefix> L` let you resize panes
 - `<prefix> <` and `<prefix> >` let you swap panes
 - `<prefix> +` maximizes the current pane to a new window

 - `<prefix> m` toggles mouse mode on or off

 - `<prefix> U` launches Urlview (if available)
 - `<prefix> F` launches Facebook PathPicker (if available)

 - `<prefix> Enter` enters copy-mode
 - `<prefix> b` lists the paste-buffers
 - `<prefix> p` pastes from the top paste-buffer
 - `<prefix> P` lets you choose the paste-buffer to paste from



---

- [Github](https://github.com/xyyolab)
- [blog](https://blog.xyyolab.com)