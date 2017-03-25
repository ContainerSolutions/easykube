#!/usr/bin/env bash

echo "Deploying module [$1] version [$2]"

for f in $1/kube/*.yaml
do
    sed -e "s/VERSION/$2/g" $f | kubectl apply -f -
done