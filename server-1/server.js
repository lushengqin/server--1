var http = require('http')
var fs = require('fs')
var url = require('url')
const { mainModule } = require('process')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

  if(path === '/index.html'){
    response.statusCode = 200
      response.setHeader('Content-Type', 'text/html;charset=utf-8')
      // const string = fs.readFileSync('server-1/public/index.html')
      // console.log(string)
    response.write(fs.readFileSync('server-1/public/index.html')) 
    // response.write(
    //     `<!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <title>AJAX</title>
            
    //     </head>
    //     <body>
    //         我是AJAX-demo333
    //         <script src="main.js"></script>
    //     </body>
    //     </html>`
    //   ) //把这个文件夹转换为字符串
    response.end()
  } else if (path === '/main.js') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync('server-1/public/main.js'))
    response.end()
   
  }else if (path === '/style.css') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(fs.readFileSync('server-1/public/style.css'))
    response.end()
   
  }else if (path === '/2.js') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync('server-1/public/2.js'))
    response.end()
   
  }else if (path === '/2.html') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(fs.readFileSync('server-1/public/2.html'))
    response.end()
   
  }else if (path === '/1.xml') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/xml;charset=utf-8')
    response.write(fs.readFileSync('server-1/public/1.xml'))
    response.end()
   
  }else if (path === '/5.json') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(fs.readFileSync('server-1/public/5.json'))
    response.end()
   
  }else {
    console.log(333)
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(`你输入的路径不存在对应的内容`)
    response.end()
    console.log(333)
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)