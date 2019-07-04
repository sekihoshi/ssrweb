const path = require('path')

const fs = require('fs')
const express = require('express')
const ReactSSR = require('react-dom/server')

const isDev = process.env.NODE_ENV == 'devlopment'

const app = express();

if(!isDev) {
    const serverEntry = require('../dist/server-entry.js').default
    console.log(serverEntry.toString())
    const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf8')
    console.log(template)
    app.use('/public',express.static(path.join(__dirname, '../dist')))

    app.get('*',(req,res) => {
      let serverEntryString  = ReactSSR.renderToString(serverEntry);
      //console.log(serverEntryString)
      let html = template;
      res.status(200).send(html.replace('<app></app>',serverEntryString).toString())
    })
}


app.listen(3333,()=>{
    console.log('App is running')
})