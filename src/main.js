let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 你好，我叫小郑
 * 接下来我来演示一个简单项目
 * 首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我要把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 需要把它变成一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 然后加两个神秘的小球
 **/
#div1::before{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
}
#div1::after{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
}
/* 嘻嘻，完成啦
 **/
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      //如果是回车就加回车
      string2 += "<br>";
    } else if (string[n] === " ") {
      //如果是空格就加空格
      string2 += "&nbsp";
    } else {
      //如果不是都不是就照搬
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      //如果n不是最后一个就继续
      n += 1;
      step();
    }
  }, 50);
};

step();
