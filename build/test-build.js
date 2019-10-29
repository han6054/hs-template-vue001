'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'testing'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.test.conf')

const spinner = ora({
  color: 'green',
  text: '正在打包（测试环境），请您耐心等待...'
})
spinner.start()

rm(path.join(config.test.assetsRoot, config.test.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
    console.log(chalk.cyan('应用打包完成.\n'))
  })
})
