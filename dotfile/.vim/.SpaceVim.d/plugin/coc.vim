set hidden


set nobackup
set nowritebackup

call coc#config("coc.preferences",{
  \"autoTrigger": "always",
  \"maxCompleteItemCount": 10,
  \ "codeLens.enable": 1,
  \"diagnostic.virtualText": 1,
  \})

call coc#config("explorer",{
      \"icon.enableNerdfont":1,
      \"keyMappingMode":"none",
      \"keyMappings":{
      \"i": 0, 
      \"k": "nodePrev",
      \"j": "nodeNext",
      \"gk": "expandablePrev",
      \"gj": "expandableNext",
      \"*": "toggleSelection",
      \"/": "actionMenu",
      \"h": "collapse",
      \"l": ["expandable?", "expand", "open"],
      \"J": ["toggleSelection", "nodeNext"],
      \"K": ["toggleSelection", "nodePrev"],
      \"gl": "expandRecursive",
      \"gh": "collapseRecursive",
      \"<2-LeftMouse>": [
      \"expandable?",
      \["expanded?", "collapse", "expand"],
      \"open"
      \],
      \"o": ["expanded?",
      \"collapse", "expand"],
      \"<cr>":
      \["expandable?",
      \"cd", "open"],
      \"e": "open",
      \"s":"open:split",
      \"S":"open:split:plain",
      \"E":"open:vsplit",
      \"t":"open:tab",
      \"<bs>":"gotoParent",
      \"gp":"preview:labeling",
      \"y":"copyFilepath",
      \"Y":"copyFilename",
      \"c":"copyFile",
      \"x":"cutFile",
      \"p":"pasteFile",
      \"d":"delete",
      \"D":"deleteForever",
      \"a":"addFile",
      \"A":"addDirectory",
      \"r":"rename",
      \".":"toggleHidden",
      \"R":"refresh",
      \"?":"help",
      \"q":"quit",
      \"<esc>":"esc",
      \"X":"systemExecute",
      \"gd":"listDrive",
      \"f":"search",
      \"F":"searchRecursive",
      \"gf":"gotoSource:file",
      \"gb":"gotoSource:buffer",
      \"[[":"sourcePrev",
      \"]]":"sourceNext",
      \"[d":"diagnosticPrev",
      \"]d":"diagnosticNext",
      \"[c":"gitPrev",
      \"]c":"gitNext",
      \"<<":"gitStage",
      \">>":"gitUnstage"
      \},
      \})


" call coc#config("languageserver", {
"       \"clangd": {
"       \"command": "clangd",
"       \"rootPatterns": ["compile_flags.txt", "compile_commands.json"],
"       \"filetypes": ["c", "cpp", "objc", "objcpp"]
"       \},
"       \"bash": {
"       \  "command": "bash-language-server",
"       \  "args": ["start"],
"       \  "filetypes": ["sh"],
"       \  "ignoredRootPaths": ["~"]
"       \},
"       \"cmake": {
"       \"command": "cmake-language-server",
"       \"filetypes": ["cmake"],
"       \"rootPatterns": [
"       \"build/"
"       \ ],
"       \"initializationOptions": {
"       \"buildDirectory": "build"
"       \ }
"       \}
"       \})

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
      \ 'coc-bookmark',
      \ 'coc-snippets',
      \ 'coc-tsserver',
      \ 'coc-neosnippet',
      \ 'coc-sh',
      \ 'coc-emoji',
      \ 'coc-yaml',
      \ 'coc-explorer',
      \ 'coc-markdownlint',
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


 " map the keys of bookmark
 nmap <silent> mm <Plug>(coc-bookmark-toggle)
 nmap <silent> ma :CocList bookmark<CR>
 nmap <silent> mn <Plug>(coc-bookmark-next)
 nmap <silent> mp <Plug>(coc-bookmark-prev)
 nmap <silent> mi <Plug>(coc-bookmark-annotate)
 nmap <silent> mc :CocCommand bookmark.clearForCurrentFile<CR>
 nmap <silent> mx :CocCommand bookmark.clearForAllFiles<CR>

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
nmap <F3> :CocCommand explorer<CR>
