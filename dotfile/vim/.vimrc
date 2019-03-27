" ====================================================
"   Copyright (C)2019 All rights reserved.
"
"   Author        : Jeremy Chen
"   Email         : jeremychen@djeremychen.com
"   File Name     : .vimrc
"   Last Modified : 2019-03-27 14:41
"   Describe      : the config file of vim
"
" ====================================================


"=====================Basic option====================
    set noncompatible "not use vi feature but vim
    filetype on
    filetype plugin on "choose the plug from filetype
    let mapleader = "," "map the leader
    set t_Co=256
    set encoding=UTF-8
    set number
    set cmdheight=2
    set tabstop=4
    set shiftwidth=4
    set expandtab
    set smarttab
    set background=dark
    let g:onedark_termcolors=256
    colorscheme onedark
"=====================================================

"=====================Map option======================
    map <silent> <leader>ss :source ~/.vimrc<cr>
    map <silent> <leader>ee :e ~/.vimrc<cr>
    autocmd! bufwritepost .vimrc source /.vimrc
    nnoremap <silent> <F2> :g/^\s*$/d<CR>
    nnoremap <silent> <leader><F2> gg=G
    nnoremap <silent> <F3> :./^/\/\/g
    nnoremap <silent> <leader><F3> :./\/\//^/g
    inoremap <M-cr> <esc> :split<cr>
    nnoremap <M-cr> :split<cr>
    nnoremap <M-j> <c-w>j
    nnoremap <M-k> <c-w>k
    nnoremap <M-h> <c-w>h
    nnoremap <M-l> <c-w>l
"=====================================================
"
"
"====================Plug option======================
    call plug#begin('~/.vim/plugged')


    Plug 'nine2/vim-copyright'  "copy-right header of the file
    Plug 'Valloric/YouCompleteMe'   "code complete
    Plug 'ryanoasis/vim-devicons'
    Plug 'scrooloose/nerdtree'
    Plug 'tiagofumo/vim-nerdtree-syntax-highlight'
    Plug 'Xuyuanp/nerdtree-git-plugin'
    Plug 'majutsushi/tarbar'
    Plug 'jiangmiao/auto-pairs'
    Plug 'vim-airline/vim-airline'
    Plug 'vim-airline/vim-airline-themes'
    Plug 'tpope/vim-endwise'
    Plug 'godlygeek/tabular'
    Plug 'tpope/vim-fugitive'
    Plug 'junegunn/gv.vim'
    Plug 'mhinz/vim-startify'


    call plug#end()
"=====================================================
"
"
"====================Plug setting=====================
"
    nnoremap <leader><leader>i :PlugInstall<cr>
    nnoremap <leader><leader>u :PlugUpdate<cr>
    nnoremap <leader><leader>c :PlugClean<cr>
"
"vim-copyright
    nnoremap <leader>h :CopyrightAdd<cr>
    nnoremap <leader>H :CopyrightUpdate<cr>
    let g:file_copyright_email='jeremychen@djeremychen.com'
    let g:file_copyright_name='Jeremy Chen'
    let g:file_copyright_auto_filetype=['sh','c','h','cpp','java','vimrc']
"aireline
    let g:airline_theme="onedark"
    let g:airline_powerline_fonts=1
    let g:airline#extensions#tabline#enabled=1
    if !exists('g:airline_symbols')
        let g:airline_symbols={}
    endif
    let g:airline_left_sep=' '
    let g:airline_left_alt_sep=' '
    let g:airline_right_sep=' '
    let g:airline_right_alt_sep=' '
"YCM
"nerdtree
    nnoremap <silent> <leader>n :NERDTreeToggle<cr>
    let g:NERDTreeFileExtensionHighlightFullName=1
    let g:NERDTreeExactMatchHighlightFullName=1
    let g:NERDTreePatternMatchHighlightFullName=1
    let g:NERDTreeHighlightFolders=1
    let g:NERDTreeHighlightFoldersFullName=1
    let g:NERDTreeDirArrowExpandable='>'
    let g:NERDTreeDirArrowCollapsible='|'
"nerdtree-git-plugin
let g:NERDTreeIndicatorMapCustom={
    \ "Modified" : "*",
    \ "Staged"   : "+",
    \ "Untracked": "~",
    \ "Renamed"  : "R",
    \ "Unmerged" : "=",
    \ "Deleted"  : "D",
    \ "Dirty"    : "!",
    \ "Clean"    : "C",
    \ "Ingored"  : "I",
    \ "Unkown"   : "?",
    \}
"tarbar
    nnoremap <silent> <leader>t :TarbarToggle<cr>
"gv
    nnoremap <leader>g :GV<cr>
    nnoremap <leader>G :GV!<cr>
    nnoremap <leader>gg :GV><cr>
"=====================================================
