#!/bin/bash

#change a new Wallpaper
WALLPAPER=`ls $HOME/.config/sway/wallpapers | sort -R | head -n 1`
echo $WALLPAPER
swaymsg "output * bg $HOME/.config/sway/wallpapers/'$WALLPAPER'  stretch"

#Get some pics in some condition
LINECOUNTS=`ls $HOME/.config/sway/wallpapers | wc -l`
if [ $LINECOUNTS -le 10 ]
then
  for loop in 1 2 3 4 5
  do
    wget -qb -P $HOME/.config/sway/wallpapers "https://source.unsplash.com/1920x1080/?wallpapers,nature"
  done
fi




#Delete some politics
if [ $LINECOUNTS -ge 10 ]
then
  echo `ls $HOME/.config/sway/wallpapers | sort -R | head -n 1`
  for loop in 1 2 3 4 5
  do
    rm $HOME/.config/sway/wallpapers/`ls $HOME/.config/sway/wallpapers | sort -R | head -n 1`
  done
fi
