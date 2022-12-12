const firstBlock = document.getElementById('block1')
const secondBlock = document.getElementById('block2')
const thirdBlock = document.getElementById('block3')
const fourthblock = document.getElementById('block4')
const fifthBlock = document.getElementById('block5')
function animation(block){
if(block.classList!=('hoverStile')){
    block.classList.add('hoverStile')
}}
firstBlock.addEventListener('mouseover',()=>{
animation(firstBlock)
    })
secondBlock.addEventListener('mouseover',()=>{
    animation(secondBlock)
    })
thirdBlock.addEventListener('mouseover',()=>{
animation(thirdBlock)
})
fourthblock.addEventListener('mouseover',()=>{
    animation(fourthblock)
    })
fifthBlock.addEventListener('mouseover',()=>{
animation(fifthBlock)
})
