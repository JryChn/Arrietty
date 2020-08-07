#!/usr/bin/bash

export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx

export $(dbus-launch | head  -n 1)
