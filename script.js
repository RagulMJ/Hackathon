let body = document.body;

let contdiv = document.createElement('div');
contdiv.classList.add('container');
let rowdiv = document.createElement('div');
rowdiv.classList.add('row');
rowdiv.setAttribute('id', 'content')
let tithd = document.createElement('h1');
tithd.classList.add('text-center', 'p-5')
tithd.style.fontFamily = 'cursive';
tithd.innerText = 'Makeup API'
body.append(contdiv)
contdiv.appendChild(tithd)
contdiv.appendChild(rowdiv)

let paraHead1 = document.createElement('p');
paraHead1.classList.add('col-2', 'text-center');
let spanHead1 = document.createElement('span');
spanHead1.classList.add('h4','fs-2');
spanHead1.style.fontFamily = 'Gruppo';
spanHead1.innerText = "Name";
rowdiv.appendChild(paraHead1).appendChild(spanHead1);

let paraHead2 = document.createElement('p');
paraHead2.classList.add('col-2', 'text-center');
let spanHead2 = document.createElement('span');
spanHead2.classList.add('h4','fs-2');
spanHead2.style.fontFamily = 'Gruppo';
spanHead2.innerText = "Brand";
rowdiv.appendChild(paraHead2).appendChild(spanHead2);

let paraHead3 = document.createElement('p');
paraHead3.classList.add('col-2', 'text-center');
let spanHead3 = document.createElement('span');
spanHead3.classList.add('h4','fs-2');
spanHead3.style.fontFamily = 'Gruppo';
spanHead3.innerText = "Product Link";
rowdiv.appendChild(paraHead3).appendChild(spanHead3);

let paraHead4 = document.createElement('p');
paraHead4.classList.add('col-4', 'text-center');
let spanHead4 = document.createElement('span');
spanHead4.classList.add('h4','fs-2');
spanHead4.style.fontFamily = 'Gruppo';
spanHead4.innerText = "Description";
rowdiv.appendChild(paraHead4).appendChild(spanHead4);

let paraHead5 = document.createElement('p');
paraHead5.classList.add('col-2', 'text-center');
let spanHead5 = document.createElement('span');
spanHead5.classList.add('h4','fs-2');
spanHead5.style.fontFamily = 'Gruppo';
spanHead5.innerText = "Price";
rowdiv.appendChild(paraHead5).appendChild(spanHead5);

let parntdiv = document.getElementById('content');

fetch("http://makeup-api.herokuapp.com/api/v1/products.json??_page=1&_limit=5")
.then((x) => x.json())
.then((response) => {

    response.map((x) => {
        let para1 = document.createElement('p');
        para1.classList.add('col-2', 'text-center');
        let span1 = document.createElement('span');
        span1.classList.add('h5');
        span1.innerText = x.name;
        console.log(x.name);
        parntdiv.appendChild(para1).appendChild(span1)

        let para2 = document.createElement('p');
        para2.classList.add('col-2', 'text-center');
        let span2 = document.createElement('span');
        span2.classList.add('h5');
        span2.innerText = x.brand;
        parntdiv.appendChild(para2).appendChild(span2)

        let para3 = document.createElement('p');
        para3.classList.add('col-2', 'text-center');
        let anc = document.createElement('a');
        anc.classList.add('h5');
        anc.setAttribute('href', x.product_link)
        anc.innerText = "link";
        parntdiv.appendChild(para3).appendChild(anc)

        let para4 = document.createElement('p');
        para4.classList.add('col-4', 'text-center');
        let span4 = document.createElement('span');
        span4.classList.add('h5', 'text-wrap');
        span4.innerText = x.description;
        parntdiv.appendChild(para4).appendChild(span4)

        let para5 = document.createElement('p');
        para5.classList.add('col-2', 'text-center');
        let span5 = document.createElement('span');
        span5.classList.add('h5', 'primary');
        span5.innerText = x.price_sign + x.price;
        parntdiv.appendChild(para5).appendChild(span5)
    })



})
.catch((er) => console.error(er));



 