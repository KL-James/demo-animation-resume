/* 吧code写到#code和style标签里 */
function writeCode(prefix, code, fn){
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(()=>{
      n += 1
      domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
      styleTag.innerHTML = prefix + code.substring(0, n)
      domCode.scrollTop = domCode.scrollHeight
      if(n >= code.length){
        window.clearInterval(id)
        fn.call()
      }
    },50)
}
function writeMarkdown(markdown, fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(()=>{
      n += 1
      domPaper.innerHTML = markdown.substring(0, n)
      domPaper.scrollTop = domPaper.scrollHeight
      if(n >= markdown.length){
        window.clearInterval(id)
        fn.call()
      }
    },50)
}


var result = `
 /*
 
* hello，我是Iris张

* 过年了过年了，又到了写简历的时候！(随便找个理由(#^.^#))

* 说做就做，我也来写一份简历！
*/

/* 首先给所有元素加上过渡效果 */

*{
  transition: all 1s;
}

/* 白色背景太单调了，我们来点背景 */

html {
  background: rgb(222,222,222);
  font-size: 16px;
}

#code{
    border: 1px solid red;
    padding: 16px;
}

/* 我需要一点代码高亮 */

.token.selector{
    color: #690;
}

.token.property{
    color: #905;
}

.token.function{
    color: #DD4A68;
}

/* 加点3D效果 */

#code{
    transform: rotate(360deg);
}

/* 不玩了，我来介绍一下我自己吧 */

/* 我需要一张白纸 */
#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
}
#paper > .content{
    background-color: white;
    width: 100%;
    height: 100%;
}
`

var result2 = `
#paper{
}
/*
* 接下来把 Markdown 变成 HTML - marked.js        
*/
/*
* 给 HTML 添加样式
*/
/*
* 这就是我会动的简历 谢谢观看
*/
`
var md = `
    #自我介绍 

    我叫Iris张
    OnePlus 员工
    1998年2月26日出生
    霍格沃茨学院 格兰芬多组 毕业
    自学前端半年
    希望应聘前端开发岗位

    #技能介绍

    熟悉JavaScript CSS 
    touch fish

    #项目介绍

    1.Apple风格的轮播
    2.会动的简历(也就是本项目)
    3.Canvas画板
    
    #联系方式

    qq:1160832331
    Email:james.gjw@qq.com
    phoneNumber:13573498680
`
writeCode('',result,()=>{
    createPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md)
        })
    })
})



function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

