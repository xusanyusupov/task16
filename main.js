
let wrap = document.querySelector('.wrap')
let tgg = document.querySelector('.telegram')
let bottm = document.querySelector('.bottom')
let bar = document.getElementById('bar')
let saidbar = document.querySelector('.saidbar')
let yop = document.querySelector('#clos')

bar.addEventListener('click', () => {
    saidbar.style.left = '0px';    
});
yop.addEventListener('click', () => {
    saidbar.style.left = '-400px'
});

wrap.addEventListener('dblclick', () => {
    tgg.style.display = 'block';
});
bottm.addEventListener('click', () => {
    tgg.style.display = 'none'
});

let clElements = document.querySelectorAll('.cl');
let clock = document.querySelector('.clock');
function updateClock() {
    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    clock.textContent = hours + ':' + minutes
    clElements.forEach((cl) => {
        cl.textContent = hours + ':' + minutes
    });
}
setInterval(updateClock, 60000);
updateClock();

let botLIST = [
    'Assalomu aleykum',
    'tanishganimdan hursandman',
    'yaxshimisiz',
    'ertaga ko`rishguncha',
    'vaqtim yo`q haliroq gaplashamiz',
    'men ishdaman Siz qayerdasiz ?',
    'Najot talimda ko`rishguncha'
]

let men = document.querySelector('.men')
let robot = document.querySelector('.robot')
let yubor = document.querySelector('.send')
let inp = document.querySelector('#input')
let msgWRP = document.querySelector('.msg_wrapper')
let frm = document.querySelector('.form')

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    let inpval = inp.value
    if(inpval === ''){
        return null
    }
    let wrapperMSG = document.createElement('div')
    let soat = document.createElement('span');
    soat.classList.add('cl'); 
    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    soat.textContent = hours + ':' + minutes

    wrapperMSG.classList.add("msg", "me")
    wrapperMSG.innerHTML = `
        <p class="men">${inpval}</p>
    `
    wrapperMSG.appendChild(soat)
    msgWRP.appendChild(wrapperMSG)
    inp.value = '';
    setTimeout(() => {
        bot()
    }, 2500);
});

function bot() {
    let random = Math.floor(Math.random() * botLIST.length);
    let randomMessage = botLIST[random]
    let wrapperMSG = document.createElement('div')
    let soat = document.createElement('span')
    soat.classList.add('cl')
    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes;
    soat.textContent = hours + ':' + minutes;
    wrapperMSG.classList.add("msg", "robot")
    wrapperMSG.innerHTML = `
        <p class="robot">${randomMessage}</p>
    `;
    wrapperMSG.appendChild(soat); 
    let msgWRP = document.querySelector('.msg_wrapper')
    msgWRP.appendChild(wrapperMSG)
}



