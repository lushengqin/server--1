console.log('我是第二个main.js')
//在js中请求css
const request = new XMLHttpRequest()
const btnSubmit = document.querySelector('#btnSubmit') //获取标签
btnSubmit.onclick = function () {
    request.open('GET', 'style.css')  //获取资源用GET 
    request.onload = () => {
        const cg = request.response // 获取返回结果打印出来看看是什么
        console.log('成功执行style.css')  
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)

    }
    request.onerror = () => {
        console.log('css文件执行失败')
    }
    request.send() //发送请求
}

// 在js中请求js
// 创建请求体
const requestJS = new XMLHttpRequest()

btnJS.onclick = function () {
    requestJS.open('GET', '2.js')
    requestJS.onload = () => {
        const script = document.createElement('script')
        script.innerText = requestJS.response
        document.body.appendChild(script)
    }
    requestJS.onerror = () => {
        
    }
    requestJS.send()
}

//// 在js中请求HTML
const requestHTML = new XMLHttpRequest()

btnHTML.onclick = function () {
    requestHTML.open('GET', '2.htm')
    requestHTML.onload = () => {
        console.log('成功')
        const html = document.createElement('html')
        html.innerText = requestHTML.response
        document.body.appendChild(html)
    }
    requestHTML.onerror = () => {
        console.log('失败')
    }
    requestHTML.send() //发送请求
}


//加载html文件 当文件加载失败时 上面不能满足需要 所以我们用到了onreadystatechange来代替onload   readyState来找到1234步骤是否执行完毕  执行完毕丘 执行status 来判断它的返回值是成功还是失败 一般成功2**  失败4** 或者5**
const requestH = new XMLHttpRequest()
btnHTML.onclick = function () {
    requestH.open('GET', '2.html')
    requestH.onreadystatechange = () => {
        // console.log(requestH.readyState)
        if (requestH.readyState === 4) {
            // console.log('成功') // 在这一步 如果我们的请求路径写错了 它还是不能执行失败信息 执行的还是成功信息 所以我们再加一个判断条件
            // console.log(requestH.status) // 得到它返回的错误码  404
            if (requestH.status >= 200 && requestH.status < 300) {
                //成功的状态码 是以200开头的 所以我们判断时 只要判断200开头的就行   失败的状态码可能是400 开头  或者 500开头
                const html = document.createElement('html')
                html.innerHTML = requestH.response
                document.body.appendChild(html)
            } else {
                //失败了就在这里来执行
                console.log('我是执行失败的')
            }
            
        }
    }
    requestH.send()
}


//请求加载 xml 文件
const requestXML = new XMLHttpRequest()
btnXML.onclick = () => {
    requestXML.open('GET', '1.xml')
    requestXML.onreadystatechange = () => {
        if (requestXML.readyState === 4 && requestXML.status >= 200 && requestXML.status < 300) {
        //    console.log(requestXML.responseXML)  // 自带responseXML API
            const xml = requestXML.responseXML //变量存储xml里面的内容 
            const text = xml.querySelector('warning').textContent  //找到<warning></warning>里面的内容
            console.log(text.trim()) //trim()去掉多的空格

        }
    }
    requestXML.send() //发送请求
}

//请求加载 JSON 文件
const requestJSON = new XMLHttpRequest()
btnJSON.onclick = () => {
    requestJSON.open('GET', '5.json')
    requestJSON.onreadystatechange = () => {
        if (requestJSON.readyState === 4 && requestJSON.status >= 200 && requestJSON.status < 300) {
            console.log(typeof requestJSON.response)//打印出数据
            const jsonObject = JSON.parse(requestJSON.response) //把json的string类型转换为Object 
            console.log(jsonObject)

            const name = document.querySelector('.name')
            name.textContent = jsonObject.name

        }
    }
    requestJSON.send()
}





