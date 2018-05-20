"
"
"                 JeremyChen
"                      2018.5.20
"
"======================================================
"
"
"
"
"======================== 基础设置 =======================
"基本功能设置
  set nocompatible    "去除vi的一致性,开启vim插件
  syntax on   "语法高亮
  filetype plugin on    "允许根据文件类型选择插件
  set fencs=utf-8,ucs-bom,shift-jis,gb18030,gbk,gb2312,cp936     "字体设置
  set termencoding=utf-8    " 终端编码设置
  set encoding=utf-8    "编码设置
  set fileencodings=ucs-bom,utf-8,cp936   "编码设置
  set fileencoding=utf-8    "编码设置
"显示设置
  set nu    "显示行号
  set ruler   "右下角显示光标位置
  set shortmess=atI   "启动时隐去援助提示
  set showcmd   "显示当前的按键信息
  set background=dark   "设置背景色为黑色
  autocmd InsertEnter * se cul    "当插入时提示当前行 
  autocmd InsertLeave * se nocul  "离开时取消提示当前行
  set scrolloff=3   "光标移动到buffer的顶部和底部时保持3行距离  
  set showmatch   "匹配括号

"功能设置
  set mouse=a   "鼠标可用
  set confirm   "没有保存或文件只读时弹出确认
  set autoindent    "自动对齐
  set hlsearch     "高亮查找
  set ignorecase  "搜索忽略大小写
  set completeopt=longest,preview,menu  "代码补全
"========================================================
"
"
"
"
"======================== 设置映射 =======================
  let mapleader = ","   " 映射快捷键为，
  map <silent> <leader>ss :source ~/.vimrc<cr>    "快速应用.vimrc
  map <silent> <leader>ee :e ~/.vimrc<cr>   "快速编辑.vimrc
  autocmd! bufwritepost .vimrc source ~/.vimrc    "编辑完.vimrc时自动载入内存使用
  inoremap jjk <esc>    "用jjk代替esc
"========================================================
"
"
"
"
"======================== 高级设置 =======================
"折叠
  set foldenable   "允许折叠  
  set foldmethod=intend   "根据缩进自动折叠
"缩进
  set tabstop=4   "tab缩进长度
  set shiftwidth=4    "移动宽度
  set expandtab   "用空格代替tab
  set smarttab    "在行段开始处智能缩进
  set autoindent  "自动缩进
  set cindent   "c语言智能缩进
  set smartindent   "智能缩进
"自动补全括号
  inoremap ( ()<ESC>i
  inoremap ) <c-r>=ClosePair(')')<CR>
  inoremap { {<CR>}<ESC>O
  inoremap } <c-r>=ClosePair('}')<CR>
  inoremap [ []<ESC>i
  inoremap ] <c-r>=ClosePair(']')<CR>
  inoremap " ""<ESC>i
  inoremap ' ''<ESC>i
  function! ClosePair(char)
    if getline('.')[col('.') - 1] == a:char
        return "\<Right>"
    else
        return a:char
    endif
  endfunction
"快捷键设置
  nnoremap <F2> :g/^\s*$/d<CR>    "去空行  

"新建.c,.h,.sh,.java文件，自动插入文件头
autocmd BufNewFile *.cpp,*.[ch],*.sh,*.java exec ":call SetTitle()" 
"定义函数SetTitle，自动插入文件头 
func SetTitle() 
    "如果文件类型为.sh文件 
    if &filetype == 'sh' 
        call setline(1,"\#########################################################################") 
        call append(line("."), "\# File Name: ".expand("%")) 
        call append(line(".")+1, "\# Author: Jeremy Chen") 
        call append(line(".")+2, "\# mail: jeremychen@djeremychen.com") 
        call append(line(".")+3, "\# Created Time: ".strftime("%c")) 
        call append(line(".")+4, "\#########################################################################") 
        call append(line(".")+5, "\#!/bin/bash") 
        call append(line(".")+6, "") 
    else 
        call setline(1, "/*************************************************************************") 
        call append(line("."), "    > File Name: ".expand("%")) 
        call append(line(".")+1, "    > Author: Jeremy Chen") 
        call append(line(".")+2, "    > Mail: jeremychen@djeremychen.com ") 
        call append(line(".")+3, "    > Created Time: ".strftime("%c")) 
        call append(line(".")+4, " ************************************************************************/") 
        call append(line(".")+5, "")
    endif
    if &filetype == 'cpp'
        call append(line(".")+6, "#include<iostream>")
        call append(line(".")+7, "using namespace std;")
        call append(line(".")+8, "")
    endif
    if &filetype == 'c'
        call append(line(".")+6, "#include<stdio.h>")
        call append(line(".")+7, "")
    endif
    "新建文件后，自动定位到文件末尾
    autocmd BufNewFile * normal G
endfunc 
"设置中文help
if version >= 603
    set helplang=cn
    set encoding=utf-8
endif
"========================================================
