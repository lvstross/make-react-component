#!/bin/bash

# "npm unlink <package>" appears to no longer remove global package.
# This bash script locates the global path of the package and removes it manually.

pkg_to_unlink=$1
which_pkg=$(which $pkg_to_unlink 2>&1 | head -n 1)

if [ $# -eq 1 ]; then
    rm $which_pkg
    echo "Removed $pkg_to_unlink at path $which_pkg"
else
    echo "Please pass in your package name!"
    exit;
fi