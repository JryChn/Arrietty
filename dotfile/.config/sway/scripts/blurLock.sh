#!/usr/bin/bash



screenSnipper=grim
editor=ffmpeg
tmpdir=/tmp



#generate a temper screenshot

$screenSnipper -o  $(swaymsg -t get_outputs | grep name | cut -d '"' -f4 | head -1) $tmpdir/tempScreenshot.png


if [ -a "$tmpdir/tempScreenshot.png" ]
then
  # edit the pic to blur
  $editor -y -loglevel fatal -i $tmpdir/tempScreenshot.png -vf "gblur=sigma=20" $tmpdir/blurScreenshot.png
fi


  swaylock --ignore-empty-password \
                --daemonize \
                -i /tmp/blurScreenshot.png \
                --color 1d2021 \
                --show-keyboard-layout \
                --font Inconsolata \
                --text-color 282828 \
                --ring-color 689d6a \
                --ring-clear-color ebdbb2 \
                --line-uses-ring \
