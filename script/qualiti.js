const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')
const fiveth = document.getElementById('fiveth')
const sixth = document.getElementById('sixth')
const seventh = document.getElementById('seventh')
const eighth = document.getElementById('eighth')
const info = document.querySelector(".info")
let infoContent = document.querySelector(".infoContent")
const hide = document.querySelector(".hide")
let informationContent = document.querySelector(".informationContent")
let information = document.querySelector(".information")
const textContent = {
    textFirst:"Самое частое требование к кандидату на должность сисадмина. Оно и не удивительно. Ведь человек на самом деле должен серьёзно относиться к доверенной ему структуре и понимать все риски и сложности.",
    textSecond:"Дисциплины от своих работников ждёт любой работодатель, но тут она прям очень важна. Дисциплина для системного администратора — это и пунктуальность, и умение организовать своё время, и много чего ещё. Что уже говорить про экстренные ситуации, когда компании теряют огромные деньги из-за простоев?",
    textThird:"Мы с вами каждый день видим, какими темпами развиваются технологии. Такими же темпами они внедряются в компании, а компании ищут сотрудников, которые этими технологиями владеют. Помните о том, что нужно не хотеть учиться, а учиться. Свои знания нужно постоянно поддерживать и улучшать, а то рынок труда вас съест.",
    textFourth:"Системный администратор — это технический специалист. Любому человеку нужна логика. А техническому специалисту — нужнее всех. Без комментариев.",
    textFiveth:"Огонь в глазах гореть должен! Только так можно хорошо делать свою работу. Настоящий системный администратор так увлечён своим делом, что на первый взгляд его техническая профессия становится прям творческой.",
    textSixth:"Не бывает невнимательных системных администраторов. У невнимательного администратора упущенная сегодня мелочь через месяц ломает всю систему. А после того, как компанию парализует на три дня, системный администратор перестаёт им быть и начинает искать новую работу.",
    textSeventh:"Дедлайны — наше всё. Если сисадмин не делает свою работу в сроки и в нужном количестве, то пиши пропало. Системному администратору нельзя говорить одно, а делать другое — ну не работается так эта работа.",
    textEighth:"“Беда не приходит одна” — именно так можно описать работу системного администратора. Чем больше система, тем больше с ней проблем, поэтому вы обязаны уметь решать несколько проблем сразу и расставлять приоритеты в их решении.",
}
setTimeout(() => {
    hide.style.width="0px"
    hide.style.height="0px"
}, 2000);
function textIn (block,content){
    block.addEventListener('mouseover',()=>{
             informationContent.innerHTML=`${content}` 
               informationContent.style.opacity="1"  
               infoContent.style.opacity="1"
               information.style.transform="scale(1)"
        })

    }
    
function textOut (block,nameOfBlock){
    block.addEventListener('mouseout',()=>{
        informationContent.style.opacity="0"  
        block.innerHTML=nameOfBlock 
         infoContent.style.opacity="0" 
         information.style.transform="scale(0)"
         hide.style.width="100%"
         hide.style.height="100%"
        setTimeout(() => {
            hide.style.width="0px"
            hide.style.height="0px"
        }, 400);
        })
    }



function allFn(block,content,nameOfBlock){
    textIn(block,content)
    textOut(block,nameOfBlock)
}

allFn(first,textContent.textFirst,'Ответственность')
allFn(second,textContent.textSecond,'Дисциплина')
allFn(third,textContent.textThird,'Саморазвитие')
allFn(fourth,textContent.textFourth,'Логика')
allFn(fiveth,textContent.textFiveth,'Увлеченность')
allFn(sixth,textContent.textSixth,'Внимательность')
allFn(seventh,textContent.textSeventh,'Исполнительность')
allFn(eighth,textContent.textEighth,'Многозадачность')

