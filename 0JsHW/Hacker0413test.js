var Product={
    Iphone:{
        Detail:{
            productName:'iPhone 11',
            baseImgUrl:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;.v=1567022175704'
        },
        Case:[
            {color:'白色',colorValue:'#F9F6EF',imgUrl:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-white-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956148115'},
            {color:'黑色',colorValue:'#1F2120',imgUrl:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-black-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144418'},
            {color:'綠色',colorValue:'#ADE0CD',imgUrl:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-green-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144838'},
            {color:'黃色',colorValue:'#FFE681',imgUrl:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-yellow-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1568141245782'},
            {color:'紫色',colorValue:'#D1CDDB',imgUrl:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-purple-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566960958082'},
            {color:'紅色',colorValue:'#BA0C2F',imgUrl:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-red-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144763'},
        ],
        Spec:{
            Storage:[
                {size:'64',price:'19900'},
                {size:'128',price:'21500'},
                {size:'256',price:'25000'}
            ]
        }
    },
    // IPad:{},
    // Mac:{}
}
Product.Iphone.Spec.Storage.forEach((item)=>{
    let gb=`${item.size}GB**`;
    console.log(gb);

    let stor_pri=`NT${item.price}`;
    console.log(stor_pri);
})


let name=Product.Detail.productName;
console.log(name);

Product.Iphone.Case.forEach((item,index)=>{
    // let btn_name=document.createElement("p");
    btn_name=item.color;
    console.log(btn_name);
})