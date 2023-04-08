//nav bar
let navBar = document.getElementById('navigation');
let toggleBar = document.getElementById('toggle-menu');


toggleBar.addEventListener('click', function(){
    toggleBar.classList.toggle('toggleActive');
    navBar.classList.toggle('overlay');
}) 

const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

let data = [
    {
        id: 1,
        imageUrl:  "./images/slider/1.jpg",
      },
      {
        id: 2,
        imageUrl:
          "./images/slider/2.jpg",
      },
      {
        id: 3,
        imageUrl:
        "./images/slider/3.jpg",
      },
      {
        id: 4,
        imageUrl:
        "./images/slider/4.jpg",
      },
];


const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const sliderContent = document.getElementById("slider-content");
let dotsChildElement = document.getElementsByClassName('child');
let sliderIndex = 0;

function createDivTag(item){
    const divtag = document.createElement('div');
    divtag.classList.add('slide');

    return divtag;
}

function createImgTag(item){
    const tagImage= document.createElement('img');
    tagImage.setAttribute('src', item.imageUrl);
    tagImage.setAttribute('alt', item.title);
    tagImage.classList.add('image-slider');

    
    return tagImage
}

function createH3Tag(item){
    const h3title=document.createElement('h3');
    h3title.innerHTML = item.title;

    return h3title
}

function createDots(){
    const dots = document.createElement('div');
    dots.classList.add('dots-parent');

    data.forEach(element => {
        const childDot =document.createElement('div')
        childDot.classList.add('child');
        childDot.setAttribute('data-id', element.id -1);
        dots.appendChild(childDot);

        childDot.addEventListener('click', function(event){
          let id = event.target.getAttribute('data-id');
          sliderIndex = id;
          setSlide();
        })
    });

    return dots;
}

function setSlide(){
    sliderContent.innerHTML ="";
   const slideItem =createDivTag(data[sliderIndex]);
   const imgTag = createImgTag(data[sliderIndex]);
   const dots = createDots();

   slideItem.appendChild(imgTag);
   sliderContent.appendChild(slideItem);
   sliderContent.appendChild(dots);

   currentDotActive();
}
function currentDotActive (){
  dotsChildElement[sliderIndex].classList.add('activeDot');
}

function arrowLeftClick(){
    if (sliderIndex == 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
      }
      sliderIndex -= 1;
      setSlide();
}
function arrowndRightClick(){
    if (sliderIndex == data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
      }
      sliderIndex += 1;
      setSlide();
}

arrowLeft.addEventListener('click', arrowLeftClick);
arrowRight.addEventListener('click', arrowndRightClick);

setInterval( () =>{
    arrowndRightClick();
}, 4000)

setSlide();

//contact

let RegistrationForm=document.getElementById('registration-form');

RegistrationForm.addEventListener('submit', function(event){
    event.preventDefault();
    let errors={

    };
    let formElement=event.target;



    //username
    let usernameValue = document.getElementById('username').value;

    if (usernameValue==""){
        errors.myusername="Username field can not be empty"
    }
    if (usernameValue.length <5){
         errors.myusername="Username field can not be empty"
    }
});

let emailField = document.getElementById('myemail');

emailField.addEventListener('keydown', function(){
    let emailValue =document.getElementById('myemail').value;
    let text=document.getElementById('text');
    let pattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailValue.match(pattern)){
        emailField.style.border ="2px solid green";
        text.innerText='Your email is valid';
        text.style.color = 'green';

    }else{
        emailField.style.border ="2px solid red";
        text.innerText='Your email is invalid';
        text.style.color = 'red';
    }
});