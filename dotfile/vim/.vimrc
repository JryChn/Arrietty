"
"
"
"
"                 JeremyChen
"                      2018.5.5
"
"======================================================
"
"
"
"
"设置映射
let mapleader = ","
"
"快速应用.vimrc
map <silent> <leader>ss :source ~/.vimrc<cr>
"快速编辑.vimrc
map <silent> <leader>ee :e ~/.vimrc<cr>
"编辑完.vimrc时自动载入内存使用
autocmd! bufwritepost .vimrc source ~/.vimrc 
"
"
"
"
"
"
"去除vi的一致性,开启vim插件
set nocompatible
"
"显示行号
set nu
"
"显示标尺，就是在右下角显示光标位置
set ruler
"
"启动时隐去援助提示
set shortmess=atI
"
"语法高亮
syntax on
"
"使用vim的键盘模式
"set nocompatible
"
"不需要备份
set nobackup
"
"没有保存或文件只读时弹出确认
set confirm
"
"鼠标可用
set mouse=a
"
"tab缩进
set tabstop=4
set shiftwidth=4
set expandtab
set smarttab
"
"文件自动检测外部更改
set autoread
"
"c文件自动缩进
set cindent
"
"自动对齐
set autoindent
"
"智能缩进
set smartindent
"
"高亮查找匹配
set hlsearch
"
"背景色
set background=dark
"
"显示匹配
set showmatch
"
"允许折叠
set foldenable
"""""""""""""""""设置折叠"""""""""""""""""""""
"
"根据语法折叠
set fdm=syntax
"
"手动折叠
"set fdm=manual
"
"设置键盘映射，通过空格设置折叠
nnoremap <space> @=((foldclosed(line('.')<0)?'zc':'zo'))<CR>
""""""""""""""""""""""""""""""""""""""""""""""
"
"启动显示状态行
set laststatus=2
"
"浅色显示当前行
autocmd InsertLeave * se nocul
"
"用浅色高亮当前行
autocmd InsertEnter * se cul
"
"显示输入的命令
set showcmd
"
"被分割窗口之间显示空白
set fillchars=vert:/
"
set fillchars=stl:/
"
set fillchars=stlnc:/
