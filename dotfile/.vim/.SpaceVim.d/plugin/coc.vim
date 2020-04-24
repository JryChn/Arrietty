set hidden


set nobackup
set nowritebackup

call coc#config('coc.preferences',{
  \"autoTrigger": "always",
  \"maxCompleteItemCount": 10,
  \ "codeLens.enable": 1,
  \"diagnostic.virtualText": 1,
  \})


call coc#config("languageserver", {
      \"clangd": {
      \"command": "clangd",
      \"rootPatterns": ["compile_flags.txt", "compile_commands.json"],
      \"filetypes": ["c", "cpp", "objc", "objcpp"]
      \},
      \"bash": {
      \  "command": "bash-language-server",
      \  "args": ["start"],
      \  "filetypes": ["sh"],
      \  "ignoredRootPaths": ["~"]
      \},
      \"cmake": {
      \"command": "cmake-language-server",
      \"filetypes": ["cmake"],
      \"rootPatterns": [
      \"build/"
      \ ],
      \"initializationOptions": {
      \"buildDirectory": "build"
      \ }
      \}
      \})

let g:coc_global_extensions = [
      \ 'coc-go',
      \ 'coc-clangd',
      \ 'coc-tabnine',
      \ 'coc-python',
      \ 'coc-java',
      \ 'coc-json',
      \ 'coc-css',
      \ 'coc-html',
      \ 'coc-word',
      \ 'coc-cmake',
      \ 'coc-dictionary',
      \ 'coc-rls',
      \ 'coc-vimlsp',
      \ 'coc-ci',
      \ 'coc-snippets',
      \ 'coc-tsserver',
      \ 'coc-neosnippet',
      \]

inoremap <silent><expr> <TAB>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()
inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"

function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

inoremap <expr> <cr> pumvisible() ? "\<C-y>" : "\<C-g>u\<CR>"

" Remap keys for gotos
 nmap <silent> gd <Plug>(coc-definition)
 nmap <silent> gy <Plug>(coc-type-definition)
 nmap <silent> gi <Plug>(coc-implementation)
 nmap <silent> gr <Plug>(coc-references)

 " Use K for show documentation in preview window
 nnoremap <silent> K :call <SID>show_documentation()<CR>

 function! s:show_documentation()
   if &filetype == 'vim'
       execute 'h '.expand('<cword>')
   else
       call CocAction('doHover')
   endif
endfunction

nmap <leader>rn <Plug>(coc-rename)
