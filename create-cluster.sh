#!/usr/bin/env bash

gcloud container clusters create easykube --num-nodes=3

kubectl create configmap backend-config --from-literal=DB_USER=easykube-backend --from-literal=DB_PASSWORD=easykubepwd