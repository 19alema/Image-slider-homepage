const closeBtn = document.querySelector('.close-icon');
const menuBtn = document.querySelector('.menu');
const navBar = document.querySelector('.navigation');


menuBtn.onclick = function () {
    navBar.classList.toggle('show-nav');
   
}

closeBtn.onclick = function () {
    navBar.classList.remove('show-nav');
}



const obj = [
    {
        img: 'images/mobile-image-hero-1.jpg ',
       
        heading: ' Discover innovative ways to decorate',
        info: '  We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your  own style with our collection and make your property a reflection of you and what you love.'
    },
    {
        img: 'images/mobile-image-hero-2.jpg',
        heading: 'We are available all across the globe',
        info: " With stores all over the world, it's easy for you to find furniture for your home or place of business.  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        img: 'images/mobile-image-hero-3.jpg',
        heading: 'Manufactured with the best materials',
        info: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    }
]


let currentItem = 0;

let img = document.querySelector('.hero-img');
const head = document.querySelector('.intro');

const para = document.querySelector('.para');

const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');



window.addEventListener('DOMContentLoaded', function () {
  showObj()
});

right.addEventListener('click', function () {
    currentItem ++;
    if (currentItem > obj.length-1) {
        currentItem = 0
    }
    showObj()
    
})


left.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = 2;
    }
    showObj();
    
})


function showObj() {
   let item = obj[currentItem];
    img.src = item.img;
    head.innerText = item.heading;
    para.innerText = item.info;
}

showObj()