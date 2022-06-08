const people = [
    {
        id: 1,
        name: 'John Smith',
        job: 'Driver',
        icon: '<i class="fa-solid fa-bus-simple"></i> ',
        img: 'https://i.insider.com/61f14a0ce996470011907119?width=600&format=jpeg&auto=webp',
        text: 'A person whose occupation is driving · Chauffeur, a person who drives an automobile as a job; Motorman (locomotive), an electric vehicle driver'
    },
    {
        id: 2,
        name: 'Jamie Caroll',
        job: 'Builder',
        icon: '<i class="fa-solid fa-person-digging"></i> ',
        img: 'https://ichef.bbci.co.uk/images/ic/640x360/p097sm6d.jpg',
        text: 'Builders carry out construction, maintenance, repair, renovation and remodelling work in the residential, commercial, institutional and industrial sectors.'
    },
    {
        id: 3,
        name: 'Sara Williams',
        job: 'Web Desing',
        icon: '<i class="fa-solid fa-brush"></i> ',
        img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg?quality=75&width=982&height=726&auto=webp',
        text: 'Web design is a profession where a person designs a web page or a web site. The web page can have graphics, music, animations, and many other things on it..'
    },
    {
        id: 4,
        name: 'Mery Shaw',
        job: 'Swift Developer',
        icon: '<i class="fa-brands fa-swift"></i> ',
        img: 'https://bitcoinist.com/wp-content/uploads/2019/10/shutterstock_1481652248.jpg',
        text: 'The Society for Worldwide Interbank Financial Telecommunication (SWIFT), legally S.W.I.F.T. SC, is a Belgian cooperative society providing services related ...'
    },

];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

// grab the buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// let startint person 
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});


// show person info function 
function showPerson(person){
    const item = people[person];
    img.src = item.img;
    author.textContent = item.name;
    job.innerHTML = item.icon + item.job;
    text.textContent = item.text;
}

// show prev person

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = people.length -1;
    }
    showPerson(currentItem);
});

// show next person

nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > people.length -1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function(){
    currentItem =  Math.floor(Math.random() * people.length);

   showPerson(currentItem);
})

