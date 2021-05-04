
function $g(value) {
    //判斷是否為id selector
    //如果傳進來的東西裡面有包含#（就是id的意思），那麼我們很明確它是指定 一個 東西 所以可以使用querySelector
    if (value.includes('#') && !value.includes(' ')) {
        //回傳Element
        return document.querySelector(value);
    }

    //回傳NodeList集合
    //但如果傳進來的東西裡面沒有包含#，就表示可能是選擇tag（可能會有1個，或以上）所以用querySelectorAll會比較好
    //再根據集合裡面的數量去做回傳
    var nodelist = document.querySelectorAll(value);
    
    //當整個網頁只有一個的時候（h1）,不要用回傳 整個集合，而是去選擇回傳 一個，所以才會選擇回傳第一個nodelist
    return nodelist.length == 1 ? nodelist[0] : nodelist;
}

function genul(liArray){
    let ul = document.createElement("ul");

    liArray.forEach((item,index)=>{
        let li=document.createElement("li");
        li.innerText=item;
        ul.appendChild(li);
    })
    
    return ul;
}

function getRandom(myMin,myMax){
    return Math.floor(Math.random()* myMax + myMin);
}

//這個c 是給template用哦
//裡面主要就是做 建立一個“輸入”的element後，如果有輸入text就放進去，沒有就直接建立element就好了
function $c(element, text){
    let el=document.createElement(element);

    //防呆
    if(text!==null && text!==undefined &&text.length>0){
        el.innerText= text;
    }

    return el;
}

//有import就一定會有export(所以每次更新function後 記得要export！)
//如果在這裡沒有export該模組，那麼其他就不能引用它！
export {$g,genul,getRandom,$c};