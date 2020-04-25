---
title: Some mac tips
date: 2020-03-28
sidebar: false
navbar: true
categories:
  - geek
  - other
tags:
  - MacOs
  - English
publish: true
isShowComments: false
permalink: /mac
# prev: ../infra/0012-how-to-build-this-blog
# next: 0011-storing-using-secrets-github-action
---

## get HOSTNAME with scutil

```bash
$ scutil --get ComputerName
HOKARI-no-MacBook-Pro
$ scutil --get LocalHostName
HOKARI-no-MacBook-Pro
$ scutil --get HostName
HostName: not set

$ sudo scutil --set ComputerName mbp2014mid
$ sudo scutil --set LocalHostName mbp2014mid

$ scutil --get ComputerName
mbp2014mid
$ scutil --get LocalHostName
mbp2014mid
$ scutil --get HostName
HostName: not set
```

## open app with a broken system message

```bash
sudo xattr -r -d com.apple.quarantine

// example
sudo xattr -r -d com.apple.quarantine /Applications/Dash.app
```

## show full path in finder

```
defaults write com.apple.finder _FXShowPosixPathInTitle -bool YES
```

## change Alfred default terminal to iterm2

```bash
curl --silent 'https://raw.githubusercontent.com/stuartcryan/custom-iterm-applescripts-for-alfred/master/custom_iterm_script_iterm_3.1.1.applescript' | pbcopy
```

[detail](https://github.com/vitorgalvao/custom-iterm-scripts-for-alfred)
