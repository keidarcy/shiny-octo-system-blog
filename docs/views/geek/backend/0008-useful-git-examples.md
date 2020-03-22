---
title: A collection of userful git tips
date: 2019-10-21
sidebar: 'auto'
categories:
  - technology
  - backend
tags:
  - Git
  - English
publish: true
prev: 0007-useful-laravel-tips
# next: ../frontend/0009-css-preprocessor-comperation
---

## git commit

Fixing and amending commits

```bash
git add . && git commit --amend
```
it wouldn't commit again but fix first commit!


```bash
git commit --amend --reset-author
```
change author of git commit


## git reset

__doesn't leave any record__
Force to undo the last commit in a local repository, HEAD^ means return last one commit.
```bash
git reset --hard HEAD^
git reset --soft HEAD^
git reset --soft 8a15r31
```

`--hard` discard changes totally.
`--soft` keep changes.

## git revert

First undo last commit locally

```bash
git revert HEAD
git revert HEAD --no-commit
```

These will create a new commit to 'kill' the last commit, without --no-commit or -n, get into vi-mode to edit commit comment, if no editing comment will seem like

```bash
Revert "commit comment"
    This reverts commit d7795f88ebd5bf427c4c20faa9d372c997c8e490.
```

## git rebase

```bash
git rebase master
```
bring all you commits on the top of master branch

```bash
git rebase -i
```
interactive rebasing

if you want to 'reset' a wrong 'interactive rebasing' go
`git reflog` !

## git grep
search a pattern in repo by grep command
