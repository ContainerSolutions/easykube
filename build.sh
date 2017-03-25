#!/usr/bin/env bash
set -e
eval $(minikube docker-env)

docker build -t container-solutions/easykube-$1:$2 ./$1

