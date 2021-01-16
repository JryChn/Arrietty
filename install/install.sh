#!/bin/bash
# ====================================================
#   Copyright (C)2019 All rights reserved.
#
#   Author        : Jeremy Chen
#   Email         : jeremychen@djeremychen.com
#   File Name     : install.sh Last Modified : 2020-08-08 11:03 Describe      :
#
# ====================================================

#need install ##====================================== ##operating system

efibootmgr -c --disk /dev/sdx --part x --label "xxxxx" -u "rw initrd= root=/dev/sdx" -l "\efi\boot\bootx64.efi"
emerge -avuDN networkmanager-qt alsa-utils alsa-lib pulseaudio layman wayland
vim laptop-mode-tools layman sddm fontawesome zsh fish fcitx ranger
fcitx-configtool fcitx-rime dev-vcs/git curl wget tmux rofi trojan qutebrowser
virt-manager qemu edk2-ovmf libvirt firewalld vlc libmpdclient wqy-microhei
grim ffmpeg gui-apps/mako pavucontrol google-chrome light w3m sudo nodejs
proxychains x11-terms/termite media-fonts/nerd-fonts gui-apps/gammastep waybar
clang htop neofetch yarn gdb sway
layman -a thegreatmcpain sorrow gig gentoo-zh curl -sLf
https://spacevim.org/install.sh | bash 
