" language mapping used for coc
" NOTICE: this mapping conflict with original mapping if lang#layer is open
"
"
function! cocMapping#before() abort
  " CocCommand go.install.gomodifytags
  " CocCommand go.install.goplay
  " CocCommand go.install.gopls
  " CocCommand go.install.gotests
  " CocCommand go.install.impl
  " CocCommand go.install.tools
  "

  " language reference
  "-----------build------------
  call SpaceVim#custom#LangSPC('go','nmap', ['a'], '<Plug>(coc-codeaction)', 'Actions', 0)
  call SpaceVim#custom#LangSPC('go','xmap', ['a'], '<Plug>(coc-codeaction-selected)', 'Actions', 0)
  call SpaceVim#custom#LangSPC('java','nmap', ['a'], '<Plug>(coc-codeaction)', 'Actions', 0)
  call SpaceVim#custom#LangSPC('java','xmap', ['a'], '<Plug>(coc-codeaction-selected)', 'Actions', 0)
  call SpaceVim#custom#LangSPC('c','nmap', ['a'], '<Plug>(coc-codeaction)', 'Actions', 0)
  call SpaceVim#custom#LangSPC('c','xmap', ['a'], '<Plug>(coc-codeaction-selected)', 'Actions', 0)
  call SpaceVim#custom#LangSPC('python','nmap', ['a'], '<Plug>(coc-codeaction)', 'Actions', 0)
  call SpaceVim#custom#LangSPC('python','xmap', ['a'], '<Plug>(coc-codeaction-selected)', 'Actions', 0)
  "-----------build------------
  " call SpaceVim#custom#LangSPC('go','nmap', ['b'],
        " \ '<Plug>(go-build)',
        " \ 'go build', 0)
  "-----------run------------
  call SpaceVim#plugins#runner#reg_runner('go', 'go run %s')
  call SpaceVim#custom#LangSPC('go','nmap', ['r'], 'call SpaceVim#plugins#runner#open()', 'execute current file', 1)
  "-----------import------------
  call SpaceVim#custom#LangSPC('go','nmap', ['i'],
        \ 'call CocAction(''runCommand'', ''editor.action.organizeImport'')',
        \ 'auto import package', 1)
  "-----------refactor------------
  call SpaceVim#custom#LangSPCGroupName('go',['R'],'Refactor')
  call SpaceVim#custom#LangSPCGroupName('java',['R'],'Refactor')
  call SpaceVim#custom#LangSPCGroupName('python',['R'],'Refactor')
  call SpaceVim#custom#LangSPCGroupName('c',['R'],'Refactor')
  "rename
  call SpaceVim#custom#LangSPC('go','nmap', ['R','r'],
        \ '<Plug>(coc-rename)',
        \ 'rename', 0)
  call SpaceVim#custom#LangSPC('java','nmap', ['R'],
        \ '<Plug>(coc-rename)',
        \ 'rename', 1)
  call SpaceVim#custom#LangSPC('python','nmap', ['R'],
        \ '<Plug>(coc-rename)',
        \ 'rename', 1)
  call SpaceVim#custom#LangSPC('c','nmap', ['R'],
        \ '<Plug>(coc-rename)',
        \ 'rename', 1)
  "other
  "-----------specify------------
  "golang
  call SpaceVim#custom#LangSPC('go','nmap', ['I'],
        \ ':CocCommand go.impl.cursor',
        \ 'impl stubs', 1)
  call SpaceVim#custom#LangSPC('go','nmap', ['h'],
        \ ':CocCommand go.version',
        \ 'go version', 0)
  call SpaceVim#custom#LangSPCGroupName('go',['t'],'+Tags')
  call SpaceVim#custom#LangSPC('go','nmap', ['t','a'],
        \ ':CocCommand go.tags.add',
        \ 'add tags to struct fileds', 1)
  call SpaceVim#custom#LangSPC('go','nmap', ['t','a'],
        \ ':CocCommand go.tags.add',
        \ 'add tags to struct fileds', 1)
  call SpaceVim#custom#LangSPC('go','nmap', ['t','l'],
        \ ':CocCommand go.tags.add.line',
        \ 'add tags to struct fileds in current line', 1)
  call SpaceVim#custom#LangSPC('go','nmap', ['t','p'],
        \ ':CocCommand go.tags.add.prompt',
        \ 'add tags to struct fileds(prompt)', 1)
  call SpaceVim#custom#LangSPC('go','nmap', ['t','c'],
        \ ':CocCommand go.tags.clear',
        \ 'remove all tags from struct fields', 1)
  call SpaceVim#custom#LangSPC('go','nmap', ['t','L'],
        \ ':CocCommand go.tags.clear.line',
        \ 'remove all tags from struct fields in current line', 1)
  call SpaceVim#custom#LangSPC('go','nmap', ['t','P'],
        \ ':CocCommand go.tags.clear.prompt',
        \ 'remove all tags from struct fields(prompt)', 1)
  call SpaceVim#custom#LangSPCGroupName('go',['T'],'+TestGroup')
  call SpaceVim#custom#LangSPC('go','nmap', ['T','g'],
        \ ':CocCommand go.test.generate.export',
        \ 'Generate unit tests for exported function', 1)
  call SpaceVim#custom#LangSPC('go','nmap', ['T','F'],
        \ ':CocCommand go.test.generate.file',
        \ 'Generate unit tests for file', 1)
  call SpaceVim#custom#LangSPC('go','nmap', ['T','f'],
        \ ':CocCommand go.test.generate.function',
        \ 'Generate unit tests for current function', 1)
  call SpaceVim#custom#LangSPC('go','nmap', ['T','t'],
        \ ':CocCommand go.test.toggle',
        \ 'Toggle test file', 1)
endfunction
