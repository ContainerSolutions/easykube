#!/usr/bin/env bash
set -e

docker build -t containersol/easykube-$1:$2 ./$1

