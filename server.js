'use strict'
const path = require('path')
const serveStatic = require('serve-static')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8081
const EXTENSION = ['/*.min.js', '/*.min.css', '*.png', '*.svg']
const EXTENSION_JS = 'js'
const EXTENSION_CSS = 'css'
const EXTENSION_PNG = 'png'
const EXTENSION_SVG = 'svg'

app.get(EXTENSION, (request, response, next) => {
  const extension = request.originalUrl.split('.').pop()

  request.url = `${request.url}.gz`

  response.set('Content-Encoding', 'gzip')

  switch (extension) {
    case EXTENSION_JS:
      response.set('Content-Type', 'text/javascript')
      break

    case EXTENSION_CSS:
      response.set('Content-Type', 'text/css')
      break

    case EXTENSION_PNG:
      response.set('Content-Type', 'image/png')
      break

    case EXTENSION_SVG:
      response.set('Content-Type', 'image/svg+xml')
      break

    default:
      break
  }

  next()
})

function setCustomCacheControl(res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}

const oneYear = 3600000 * 24 * 360 // un año

const CONFIG_FILES = {
  immutable: true,
  maxAge: oneYear,
  setHeaders: setCustomCacheControl
}

app.use(express.static('./public', CONFIG_FILES))

app.use('*', express.static(path.resolve(__dirname, 'public')))

app.listen(PORT, () => {
  console.log(`Server successful : http://127.0.0.1:${PORT}`)
})
