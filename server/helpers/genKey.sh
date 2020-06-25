#!/bin/bash
# USAGE ./genKey.sh
# EXAMPLE ./genKey.sh

DATA_DIR="./"
ssh-keygen -m pem -t rsa -q -N "" -f $DATA_DIR$1.pk &&
ssh-keygen -e -m pem -t rsa -q -f $DATA_DIR$1.pk > $DATA_DIR$1.pem &&
UUID=$(cat /proc/sys/kernel/random/uuid)
PUB=$(cat $DATA_DIR$1.pem | sed -E ':a;N;$!ba;s/\r{0,1}\n/\\n/g')
PUBLIC_KEY=$(echo $(echo "$PUB"))

echo "JWT_PUBLIC_KEY = '$PUBLIC_KEY'"
echo "JWT_PRIVATE_KEY = '$(cat $DATA_DIR$1.pk | sed -E ':a;N;$!ba;s/\r{0,1}\n/\\n/g')'"
rm $DATA_DIR$1.pk.pub && rm $DATA_DIR$1.pem && rm $DATA_DIR$1.pk
