#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'blog.xyyolab.com' > CNAME

git init
git add -A
git commit -m 'ghpages'

git push -f git@github.com:xyyolab/blog.git master:gh-pages

cd -