#!/usr/bin/env node

// 请求commander库
const program = require('commander')

const updateChk = require('../lib/update')

// 请求 lib/mirror.js
const setMirror = require('../lib/mirror')

// 请求 lib/download.js
const dlTemplate = require('../lib/download')

// 从package.json 文件中请求 version 字段的值 ， -v 和 --version 是参数

program.version(require('../package.json').version, '-v, --version')

// 请求 lib/init.js
const initProject = require('../lib/init')

// upgrade
program
  .command('upgrade')
  .description('Check the demo-cli version')
  .action(() => {
    updateChk()
  })

// mirror 切换镜像链接
program
  .command('mirror <template_mirror>')
  .description('Set the template mirror.')
  .action((tplMirror) => {
    setMirror(tplMirror)
  })

// download
program
  .command('template')
  .description('Download template from mirror.')
  .action(() => {
    dlTemplate()
  })

//
program
  .name('js-plugin-cli')
  .usage('<commands> [options]')
  .command('init <project_name>')
  .description('Create a javascript plugin project.')
  .action((project) => {
    initProject(project)
  })

// 解析命令行参数
program.parse(process.argv)
