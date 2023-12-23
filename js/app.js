const clientsWrapper = document.querySelector(".clients-wrapper") 
const aboutWrapper = document.querySelector(".about-content")
const aboutWrapperSecond = document.querySelector(".about-content.second")
const aboutBtn = document.querySelector(".about-btn")

for (let i = 1; i < 17; i++) {
    clientsWrapper.innerHTML += `
    <img src="./assets/icons/clients/${i}.svg" alt="partner">
    `;
}

let aboutList = [
    {
        id:0,
        img:1,
        text:'The Mentoring Club',
    },
    {
        id:1,
        img:2,
        text:'La Nebbia Winery',
    },
    {
        id:2,
        img:3,
        text:'Aehr Test Systems',
    },
    {
        id:3,
        img:4,
        text:'UASTPA',
    },
    {
        id:4,
        img:5,
        text:'Omnicell',
    },
    {
        id:5,
        img:6,
        text:'ChronousCloud',
    },
]
let aboutListSec = [
    {
        id:0,
        img:1,
        text:'The Mentoring Club',
    },
    {
        id:1,
        img:2,
        text:'La Nebbia Winery',
    },
    {
        id:2,
        img:3,
        text:'Aehr Test Systems',
    }, 
]

for (let i = 0; i < aboutList.length; i++) {
    aboutWrapper.innerHTML += `
    <div class="about-block">
        <img src="./assets/img/about/${aboutList[i].img}.png" alt="partner">
        <p class="about-text">${aboutList[i].text}</p>
    </div> 
    `;
}  

let more = false;

aboutBtn.addEventListener("click", () => {
    more = !more;
    console.log('itme');
    if (more) {
        for (let i = 0; i < aboutListSec.length; i++) {
            aboutWrapperSecond.innerHTML += `
            <div class="about-block">
                <img src="./assets/img/about/${aboutListSec[i].img}.png" alt="partner">
                <p class="about-text">${aboutListSec[i].text}</p>
            </div> 
            `;
        } 
    } else {
        aboutWrapperSecond.innerHTML = ''
    }
    
    console.log('itme');
})

 