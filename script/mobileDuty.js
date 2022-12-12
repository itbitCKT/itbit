let elFirst = document.querySelector('.elips1')
let elSecond = document.querySelector('.elips2')
let elThird = document.querySelector('.elips3')
let menu = document.querySelector('.menuImg')
let menuBack = document.querySelector('.menuBackImg')
let nav = document.querySelector('.nav')
let menuDiv=document.querySelector('.menu')
let menuDivBack=document.querySelector('.menuBack')
let body =  document.querySelector('.body')
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    console.log('mob')
}
else{
    menuDiv.remove()
    menuDivBack.remove()
}
menu.addEventListener('touchend',()=>{
    console.log('sdfds')
    nav.style.opacity="1"
    nav.style.display="flex"
    menuDivBack.style.top="0"
    menuDivBack.style.display="block"
    menuDivBack.style.opacity="1"
    
})
menuBack.addEventListener('touchend',()=>{
    nav.style.opacity="0"
    nav.style.display="none"
    menuDivBack.style.opacity="0"
    menuDivBack.style.display="none"
})
setTimeout(() => {
    body.style.overflowX="hidden"
}, 1000);