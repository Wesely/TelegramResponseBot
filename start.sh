#!/bin/sh

while ! ping -c 1 -W 1 github.com; do
    echo "Waiting for github - network interface might be down..."
    sleep 1
done

cd /home/wesley/worksapce/SideProjects/TelegramBots/colorDog &&  git pull

/usr/bin/node /home/wesley/worksapce/SideProjects/TelegramBots/colorDog/index.js
