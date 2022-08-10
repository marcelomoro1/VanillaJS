//Color Flipper
const colors = ['green', 'red', 'Rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

//Reviews

const reviews = [
    {
        id: 1,
        name: 'Kleber Nascimento',
        job: 'Designer',
        img: 'https://pal-robotics.com/wp-content/uploads/2022/06/reem-c_foto.webp',
        text: '"Site brabissimo"',

    },
    {
        id: 2,
        name: 'Waldemyr Chadson',
        job: 'Lenhador',
        img: 'https://www.shitpostbot.com/img/sourceimages/gigachad-thinkpad-5d9ec412ac83a.jpeg',
        text: '"nota 10"',

    },
    {
        id: 3,
        name: 'Josué Machado',
        job: 'Vendedor',
        img: 'https://i.pinimg.com/originals/6b/51/54/6b515418f9e419143b6bb70219c2b1d6.jpg',
        text: '"Nada a comentar"',

    },

];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let currentItem = 0;


function mostraPessoa(){
    img.src = reviews[currentItem].img;
    author.textContent = reviews[currentItem].name;
    job.textContent = reviews[currentItem].job;
    info.textContent = reviews[currentItem].text;
}

window.addEventListener('DOMContentLoaded', function(){
    mostraPessoa();
});

nextBtn.addEventListener('click', function(){
    currentItem = currentItem + 1;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    mostraPessoa();
});
prevBtn.addEventListener('click', function(){
    currentItem = currentItem -1;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    mostraPessoa();

});

//PÁGINA 3 NAV BAR COM MEDIA QUERY
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-center2');
const ul = document.querySelector('.ul2');

navToggle.addEventListener('click', function(){
    if(links.classList.contains('adicionarNavBar')){
        links.classList.remove('adicionarNavBar');
        navToggle.classList.remove('buttonestilo');

    }
    else{
        links.classList.add('adicionarNavBar');
        navToggle.classList.add('buttonestilo');
    }
});
ul.addEventListener('click', function(){
    if(links.classList.contains('adicionarNavBar')){
        links.classList.remove('adicionarNavBar');
        navToggle.classList.remove('buttonestilo');
    }
})

//PÁGINA 4 SIDE BAR
const navtoggle3 = document.querySelector('.nav-toggle2');
const ul3 = document.querySelector('.centerul3');
navtoggle3.addEventListener('click', function (){
    if(ul3.classList.contains('AddNavBar3')){
        ul3.classList.remove('AddNavBar3');
    }
    else{
        ul3.classList.add('AddNavBar3');
    }
});


