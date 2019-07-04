const path = require('path')
const axios = require('axios')
const MemoryFs = require('memory-fs')
const webpack = require('webpack')
const proxy = require('http-proxy-middleware')
const ReactSSR = require('react-dom/server')
const webpackConfig = require('../../build/webpack.config.server')

const ms = new MemoryFs();
const Module = module.constructor
let serverBundle;

let serverComplier = webpack(webpackConfig);
serverComplier.outputFileSystem = ms;

serverComplier.watch({},(err,status)=>{
   if(err) throw err;
   status = status.toJson();
   status.errors.forEach(error => console.log(error))
   status.warnings.forEach(error => console.log(error))

   let m = new Module();
   let buildPath = path.join(webpackConfig.output.path,webpackConfig.output.filename);
   let budle = ms.readFileSync(buildPath,'utf8');
   m._compile(budle,'server-entry.js')
   serverBundle = m.exports.default
})


const templatePromise = new Promise((res,rej)=>{
   axios.get('http://localhost:3000/public/index.html')
   .then(resp => {
      res(resp.data)
   })
   .catch(err => {
      rej(err)
   })
})


module.exports = function (app) {
   app.use('/public',proxy({target: 'http://localhost:3000'}))
   app.get('*',(req,res)=>{
      templatePromise.then( data =>{
        
         const appString = ReactSSR.renderToString(serverBundle)
         res.status(200).send(data.replace('<app></app>',appString)) 
      })
      .catch(err => {
         console.log(err)
      })
   })
}