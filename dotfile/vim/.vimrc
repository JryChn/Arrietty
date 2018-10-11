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
  syntax enable            " 开启语法高亮功能
  syntax on   "语法高亮
  filetype plugin on    "允许根据文件类型选择插件
  set fencs=utf-8,ucs-bom,shift-jis,gb18030,gbk,gb2312,cp936     "字体设置
  set t_Co=256             " 开启256色支持
  set termencoding=utf-8    " 终端编码设置
  set encoding=utf-8    "编码设置
  set fileencodings=ucs-bom,utf-8,cp936   "编码设置
  set fileencoding=utf-8    "编码设置
"显示设置
  set nu    "显示行号
  set relativenumber  "当前行号
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
  set incsearch   " 开启实时搜索功能
  set ignorecase  "搜索忽略大小写
  set completeopt=longest,preview,menu  "代码补全显示补全列表
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
" inoremap jjk <esc>    "用jjk代替esc
"========================================================
"
"
"
"
"======================== 高级设置 =======================
"折叠
  set foldenable   "允许折叠  
"缩进
  set tabstop=4   "tab缩进长度
  set shiftwidth=4    "移动宽度
  set expandtab   "用空格代替tab
  set smarttab    "在行段开始处智能缩进
  set autoindent  "自动缩进
  set cindent   "c语言智能缩进
  set smartindent   "智能缩进
"快捷键设置
  nnoremap <F2> :g/^\s*$/d<CR>    "去空行  

"设置中文help
if version >= 603
    set helplang=cn
    set encoding=utf-8
endif
"========================================================
"
"
"
"
"
"======================== 插件设置 =======================
"插件管理器
if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
    
"插件
call plug#begin()

" 文件，代码搜索工具
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }

"自动补全引号、圆括号、花括号
Plug 'jiangmiao/auto-pairs'

" 自动补全
Plug 'Valloric/YouCompleteMe', { 'do': './install.py' }

" 代码检测, 代码格式化
"Plug

"插入文件头
Plug 'aperezdc/vim-template'

"代码资源管理器
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }

call plug#end()
    
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif
"========================================================
"nnoremap <silent> <leader>n :NERDTreeToggle<cr>
inoremap <silent> <leader>n <esc> :NERDTreeToggle<cr>
let g:NERDTreeFileExtensionHighlightFullName = 1
let g:NERDTreeExactMatchHighlightFullName = 1
let g:NERDTreePatternMatchHighlightFullName = 1
let g:NERDTreeHighlightFolders = 1         
let g:NERDTreeHighlightFoldersFullName = 1 
let g:NERDTreeDirArrowExpandable='▷'
let g:NERDTreeDirArrowCollapsible='▼'

" YCM
let g:ycm_confirm_extra_conf = 0 
let g:ycm_error_symbol = '✗'
let g:ycm_warning_symbol = '✗'
let g:ycm_seed_identifiers_with_syntax = 1 
let g:ycm_complete_in_comments = 1 
let g:ycm_complete_in_strings = 1 
let g:ycm_server_python_interpreter = '/usr/bin/python'
let g:ycm_python_binary_path = 'python'
nnoremap <leader>u :YcmCompleter GoToDeclaration<cr>
nnoremap <leader>i :YcmCompleter GoToDefinition<cr> 
nnoremap <leader>o :YcmCompleter GoToInclude<cr>
nnoremap <leader>ff :YcmCompleter FixIt<cr>
nmap <F5> :YcmDiags<cr>


"template 
let g:email='jeremychen@djeremychen.com'
let g:username='Jeremy Chen'
