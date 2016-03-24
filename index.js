module.exports=function(options){
  if(!options || !options.version || options.version=='random'){
    options={version:parseInt(Math.random()*10000)}
  }
  var version=options.version
  
  var app=require('express')()

  var current_version='v' + version
  app.get(/^\/(v[0-9]+)?(\/|$)(.*)/g,function(req,res,next){
    console.log('get current_version: ',current_version)
    console.log('asked version:' ,req.params[0])
    if (req.params[0]!=current_version){
      console.log('redirect')
      res.redirect('/' + current_version + '' + req.params[1] + req.params[2])
    }
    else{
      next()
    }
  })
  app.use('/',function(req,res,next){
    var match=req.url.match(/^\/v[0-9]+(\/|$)/)
    console.log('use current_version: ',current_version)
    console.log('match',match)
    if(match){
      req.url=req.url.replace(/^\/v[0-9]+(\/|$)/,'\/')
      console.log('new req',req.url)
      return next()
    }
    else{
      res.redirect('/' + current_version + req.url )
    }
  })  

  return function(){
      app.apply(this,arguments)
  }
}



