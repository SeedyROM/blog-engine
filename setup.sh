#!/usr/bin/env bash
git clone --depth=1 --branch=master https://github.com/SeedyROM/blog-engine $1;
rm -rf $1/.git;
