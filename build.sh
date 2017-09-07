#!/usr/bin/env bash
set -e

docker build -t adamsandor83/easykube-$1:$2 ./$1