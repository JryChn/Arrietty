#!/bin/bash
# ====================================================
#   Copyright (C)2019 All rights reserved.
#
#   Author        : Jeremy Chen
#   Email         : jeremychen@djeremychen.com
#   File Name     : install.sh
#   Last Modified : 2020-08-08 11:03
#   Describe      :
#
# ====================================================

#need install
##======================================
##operating system
#layman (+gig,+gentoo-zh,+wayfire-desktop)
#sysklogd,cronie,alsa-lib,alsa-utils,pulseaudio,wayland,termite,laptop-mode-tools networkmanager-qt
##desktop enviorment
#sway(waybar),sddm,fontawesome,zsh(oh-my-zsh),vimpython,fcitx,plymouth,ranger,fcitx-configtool,fcitx-rime
##working tools
#dev-vcs/git,curl,wget,tmux,rofi,trojan,qutebrowser,virt-manager,qemu,ovmf libvirt firewall looking-glass
##other tools
#vlc,libmpdclient,wqy-microhei,grim,ffmpeg,mako,pavucontrol,telegram-desktop-bin,light,gammastep,nerd-fonts,noto-fonts,w3m
emerge -avuDN networkmanager-qt alsa-utils alsa-lib pulseaudio layman wayland vim laptop-mode-tools layman sddm fontawesome zsh fish fcitx ranger fcitx-configtool fcitx-rime dev-vcs/git curl wget tmux rofi trojan qutebrowser virt-manager qemu edk2-ovmf libvirt firewalld vlc libmpdclient wqy-microhei grim ffmpeg gui-apps/mako pavucontrol google-chrome light w3m sudo nodejs proxychains x11-terms/termite media-fonts/nerd-fonts gui-apps/gammastep
layman -a thegreatmcpain sorrow gig gentoo-zh
