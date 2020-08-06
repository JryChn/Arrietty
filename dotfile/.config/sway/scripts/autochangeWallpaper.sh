#!/bin/bash

#Get some pics in some condition
LINECOUNTS=`ls $HOME/.config/sway/wallpapers | wc -l`
if [ $LINECOUNTS -le 10 ]
then
  for loop in 1 2 3 4 5
  do
    wget -qb  -O "$HOME/.config/sway/wallpapers/wallpaper$RANDOM.jpg" "https://source.unsplash.com/1920x1080/?wallpapers,nature"
  done
fi



WALLPAPER=`ls $HOME/.config/sway/wallpapers | sort -R | head -n 1`
swaymsg "output * bg $WALLPAPER  stretch"

#Delete some politics
if [ $LINECOUNTS -ge 10 ]
then
  for loop in 1 2 3 4 5
  do
    rm `ls $HOME/.config/sway/wallpapers | sort -R | head -n 1`
  done
fi
