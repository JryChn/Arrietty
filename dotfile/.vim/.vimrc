
"   Copyright (C)2019 All rights reserved.
"
"   Author        : Jeremy Chen
"   Email         : jeremychen@djeremychen.com
"   File Name     : .vimrc
"   Last Modified : 2019-11-15 16:16
"   Describe      : the config file of vim
"
" ====================================================


"=====================Basic option====================
    let mapleader = ";"
    filetype on
    filetype plugin on
    filetype indent on
    set nocompatible
    set t_Co=256
    set encoding=UTF-8
    set number
    set ruler
    set cmdheight=2
    set tabstop=4
    set shiftwidth=4
    set softtabstop=4
    set expandtab
    set smarttab
    filetype indent on
    set autoindent
    set cindent
    set smartindent
    set smarttab
    set cursorline
    set cursorcolumn
    set hlsearch
    set nowrap
    set foldmethod=syntax
    syntax enable
    syntax on
    set background=dark
    let g:onedark_termcolors=256
    if !empty(glob('~/.vim/colors/onedark.vim'))
    colorscheme onedark
    endif
"=====================================================
"
"=====================================================
    if has("gui_runing")
        set guifont=Droid\ Sans\ Mono\ Nerd\ Font\ Complete:h18
        set guioptions-=m
        set guioptions-=T
        set guioptions-=L
        set guioptions-=r
        set guioptions-=b
        set guioptions-=0
        set guicursor=n-v-c:ver5
    endif
"=====================================================
"
"=====================Map option======================
    map <silent> <leader>ss :source ~/.vimrc<cr>
    map <silent> <leader>ee :e ~/.vimrc<cr>
    autocmd! bufwritepost .vimrc source /.vimrc
    nmap <leader><leader>s :w<CR>
    nnoremap <leader><leader>q :q<cr>
    nnoremap <leader><cr> :split<cr>
    nnoremap <leader>j <c-w>j
    nnoremap <leader>k <c-w>k
    nnoremap <leader>h <c-w>h
    nnoremap <leader>l <c-w>l
    vnoremap <leader>y "+y
    nmap <leader>p "+p
"=====================================================
"
"
"====================Plug option======================

if empty(glob('~/.vim/autoload/plug.vim'))
    silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
endif
if empty(glob('~/.vim/colors/onedark.vim'))
    silent !curl -fLo ~/.vim/colors/onedark.vim --create-dirs https://raw.githubusercontent.com/joshdick/onedark.vim/master/colors/onedark.vim
endif




    call plug#begin('~/.vim/plugged')


    Plug 'nine2/vim-copyright'  "copy-right header of the file
    Plug 'flazz/vim-colorschemes'   "color schemes collection
    Plug 'zxqfl/tabnine-vim' ,{'do':'./install.py'} "auto completation
    Plug 'google/vim-codefmt'   "code auto format
    Plug 'google/vim-maktaba'
    Plug 'google/vim-glaive'
    Plug 'SirVer/ultisnips'
    Plug 'rhysd/vim-grammarous'
    Plug 'ryanoasis/vim-devicons'
    Plug 'scrooloose/nerdtree',{'on':'NERDTreeToggle'}  "file bar 
    Plug 'tiagofumo/vim-nerdtree-syntax-highlight'  "nerd tree file bar enhance
    Plug 'Xuyuanp/nerdtree-git-plugin'  "nerd tree file bar ehance git function
    Plug 'jiangmiao/auto-pairs' "auto add pairs
    Plug 'vim-airline/vim-airline'  "beautiful airline bar
    Plug 'vim-airline/vim-airline-themes'   "airline bar scheme
    Plug 'tpope/vim-endwise'
    Plug 'tpope/vim-fugitive'
    Plug 'junegunn/gv.vim'
    Plug 'mhinz/vim-startify'
    Plug 'haya14busa/incsearch.vim'
    Plug 'godlygeek/tabular'
    Plug 'nathanaelkane/vim-indent-guides'
    Plug 'iamcco/markdown-preview.vim'
    Plug 'tpope/vim-commentary' "auto comment stuff
    Plug 'dense-analysis/ale'
    Plug 'Yggdroot/LeaderF',{'do':'./install.sh'}   "fuzzy search plugin


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
"vim-commentary
    nnoremap <c-/> gcc
    vnoremap <c-/> gc
"colorscheme
    nnoremap <silent><F12> :colorscheme random<cr>
"markdown-preview
    nmap <silent> <F8> :MarkdownPreview<cr>
    nmap <silent> <F9> :MarkdownPreviewStop<cr>
"vim-codefmt
    nnoremap <silent><F5> :%FormatLines<CR>
    augroup autoformat_settings
    autocmd FileType bzl AutoFormatBuffer buildifier
    autocmd FileType c,cpp,proto,javascript AutoFormatBuffer clang-format
    autocmd FileType dart AutoFormatBuffer dartfmt
    autocmd FileType go AutoFormatBuffer gofmt
    autocmd FileType gn AutoFormatBuffer gn
    autocmd FileType html,css,sass,scss,less,json AutoFormatBuffer js-beautify
    autocmd FileType java AutoFormatBuffer google-java-format
    autocmd FileType python AutoFormatBuffer yapf
    autocmd FileType vue AutoFormatBuffer prettier
    au BufWrite * :Autoformat
    augroup END
"vim-copyright
    nnoremap <leader><leader>h :CopyrightAdd<cr>
    " autocmd VimEnter * :CopyrightUpdate<cr>
    let g:file_copyright_email='jeremychen@djeremychen.com'
    let g:file_copyright_name='Jeremy Chen'
"vim-grammarous
    nnoremap <F2> :GrammarousCheck<cr>
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
"nerdtree
    let NERDTreeWinPos="left"
    nnoremap <silent> <leader>n :NERDTreeToggle<cr>
    " autocmd VimEnter * NERDTreeToggle
    let g:NERDTreeFileExtensionHighlightFullName=1
    let NERDTreeQuitOnOpen=1
    let g:NERDTreeExactMatchHighlightFullName=1
    let g:NERDTreePatternMatchHighlightFullName=1
    let g:NERDTreeHighlightFolders=1
    let g:NERDTreeHighlightFoldersFullName=1
    let g:NERDTreeDirArrowExpandable='▷'
    let g:NERDTreeDirArrowCollapsible='▼'
"nerdtree-git-plugin
    let g:NERDTreeIndicatorMapCustom = {
    \ "Modified"  : "✹",
    \ "Staged"    : "✚",
    \ "Untracked" : "✭",
    \ "Renamed"   : "➜",
    \ "Unmerged"  : "═",
    \ "Deleted"   : "✖",
    \ "Dirty"     : "✗",
    \ "Clean"     : "✔︎",
    \ 'Ignored'   : '☒',
    \ "Unknown"   : "?"
    \ }
"gv
    nnoremap <leader>g :GV<cr>
    nnoremap <leader>G :GV!<cr>
    nnoremap <leader>gg :GV><cr>
"incsearch
    map / <Plug>(incsearch-forward)
    map ? <Plug>(incsearch-backward)
    map g/ <Plug>(incsearch-stay)
"vim-indent-guides
    let g:indent_guides_enable_on_vim_startup=1
    let g:indent_guides_start_level=2
    let g:indent_guides_guide_size=1
"=====================================================
