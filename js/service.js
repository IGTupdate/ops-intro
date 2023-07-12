
let btns = document.querySelector('.image');
let closeBtn = document.querySelector(".close");

// var slide_index = 0;
const caseSwiper = new Swiper('.caseSwiper', {
    loop: true,
    slidesPerView: 1,
    initialSlide:0,
    effect: "fade",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function showPopUp(n){
    document.documentElement.classList.add('overflow_hide');
    document.querySelector("#modals").style.display = 'block';
    // ------- assigning the index number of slider to start slider from that slide 
    let slide_index = n;
    caseSwiper.slideTo(slide_index+1,2,false);
}

function hidePopUp(){
    document.documentElement.classList.remove('overflow_hide');
    document.querySelector("#modals").style.display = 'none';
}

// services tab box
let arr = document.querySelectorAll('.lead-booster-info');
let btn1 = document.querySelector('#pink-btn');
let btn2 = document.querySelector('#orange-btn');
let btn3 = document.querySelector("#white-btn");

let arr_1 = document.querySelectorAll(".nav-link");
let arr_2 = document.querySelectorAll(".price");
let arr_3 = document.querySelectorAll(".mobie-view");

// ------- window screen size ----------
let x = window.matchMedia("(max-width: 567px)");

let txt1 = "READY TO BOOST YOUR NUMBER OF CLIENTS? We build and launch your campaigns delivering a flurry of HOT leads into your inbox & DM's. Real genuine conversation builders beased on our service and when we've qualified them based on your criteria we'll hand them over to you ! Simple. We don't call it the Client LEAD BOOSTER for nothing !";

let txt2 ="WANT A JAMMED-PACKED SALES CALENDAR? We nurture your HOT Leads through your campaigns by delivering your sales message and unique brand selling point> getting them officially BOOKED into your calendar ready to talk business with you. Interested, nothing from strach & INCLUDED everything in our Lead Booster Pakages !";

let text = document.querySelector("#lead-text");

const show = (id) => {
    document.getElementById("sales_show").style.display = 'block';
    document.getElementById('sales_hide').style.display = 'none';
    localStorage.setItem('id', id);

    // ---------- hide all content box ----------
    arr.forEach((item) => {
        item.classList.add('hide1');
    });

    // ---------- removing active class from all content box ----------
    arr.forEach((item) => {
        item.classList.remove('active');
    }); 
    // ----------- adding background clr to all price btn
    arr_2.forEach((item)=>{item.style.backgroundColor='whitesmoke'});
    // adding display block to that particular lead booster content box
    document.querySelector(id).classList.add('active');
 
    if (id == '#lead-starter') { 
        text.innerText = txt1;
        arr_1.forEach((item)=>{item.style.backgroundColor='white'}); // adding bgColor to all btn
        document.getElementById("blue_bg").style.backgroundColor = "#3aa4d8"; // adding bgcolor to particular btn
        document.getElementById("pink-btn").style.backgroundColor = "#3aa4d8"; // adding bgcolor to particular btn
        document.getElementById("pink-btns").style.backgroundColor = "#3aa4d8";

        if(x.matches){
            arr_1.forEach((item)=>{item.style.display = 'none'}); // removing all btn
            arr_3.forEach((item)=>{item.style.display = 'block'}); // showing all price btn
            document.getElementById("blue_bg").style.display = "block"; //adding bgColor to highlight btn
        }

    } else if (id == '#appointment-starter') {
        text.innerText = txt2;
        arr_1.forEach((item)=>{item.style.backgroundColor='white'});
        document.getElementById("orng_bg").style.backgroundColor = "#ff9027";
        document.getElementById("pink-btn").style.backgroundColor = "#ff9027";
        document.getElementById("pink-btns").style.backgroundColor = "#ff9027";

        if(x.matches){
            arr_1.forEach((item)=>{item.style.display = 'none'});
            arr_3.forEach((item)=>{item.style.display = 'block'});
            document.getElementById("orng_bg").style.display = "block";
        }

    } else if (id == '#closer-starter') {
        text.innerText = txt1;
        arr_1.forEach((item)=>{item.style.backgroundColor='white'});
        document.getElementById("prple_bg").style.backgroundColor = "#ad7bc0";      
        document.getElementById("pink-btn").style.backgroundColor = "#ad7bc0";
        document.getElementById("pink-btns").style.backgroundColor = "#ad7bc0";

        if(x.matches){
            arr_1.forEach((item)=>{item.style.display = 'none'});
            arr_3.forEach((item)=>{item.style.display = 'block'});
            document.getElementById("prple_bg").style.display = "block";
        }
        
    } else{
        arr_1.forEach((item)=>{item.style.backgroundColor='white'});
        document.getElementById("lprple_bg").style.backgroundColor = "#dec7e6";
        document.getElementById("sales_show").style.display = 'none';
        document.getElementById('sales_hide').style.display = 'block';

        if(x.matches){
            arr_1.forEach((item)=>{item.style.display = 'none'});
            document.getElementById("lprple_bg").style.display = "block";
        }
    }
};

function starter() {
    let id = localStorage.getItem('id');
    if(id===null){
        arr.forEach((item) => {
            item.classList.add('hide1');
        });
        arr.forEach((item) => {
            item.classList.remove('active');
        });
        document.querySelector("#lead-starter").classList.add('active');
    }else{
        arr.forEach((item) => {
            item.classList.add('hide1');
        });
        arr.forEach((item) => {
            item.classList.remove('active');
        });
        arr_2.forEach((item)=>{item.style.backgroundColor='whitesmoke'});
        if (id === '#lead-starter') {
            btn1.style.backgroundColor = '#3aa4d8';
            document.getElementById("pink-btns").style.backgroundColor = "#3aa4d8";
            document.querySelector('#lead-starter').classList.add('active');
        } else if (id === '#appointment-starter') {
            btn1.style.backgroundColor = '#ff9027';
            document.getElementById("pink-btns").style.backgroundColor = "#ff9027";
            document.querySelector('#appointment-starter').classList.add('active');
        } else if (id === '#closer-starter') {
            btn1.style.backgroundColor = '#ad7bc0';
            document.getElementById("pink-btns").style.backgroundColor = "#ad7bc0";
            document.querySelector('#closer-starter').classList.add('active');
        } else {
            document.querySelector(id).classList.add('active');
        }
    }
}

function pro() {
    let id = localStorage.getItem('id');
    if(id===null){
        arr.forEach((item) => {
            item.classList.add('hide1');
        });
        arr.forEach((item) => {
            item.classList.remove('active');
        });
        document.querySelector("#lead-pro").classList.add('active');
    }else{
        arr.forEach((item) => {
            item.classList.add('hide1');
        });
        arr.forEach((item) => {
            item.classList.remove('active');
        });
        arr_2.forEach((item)=>{item.style.backgroundColor='whitesmoke'});
        if (id === '#lead-starter') {
            btn2.style.backgroundColor = '#3aa4d8';
            document.getElementById("orange-btns").style.backgroundColor = "#3aa4d8";
            document.querySelector('#lead-pro').classList.add('active');
        }else if (id === '#appointment-starter') {
            btn2.style.backgroundColor = '#ff9027';
            document.getElementById("orange-btns").style.backgroundColor = "#ff9027";
            document.querySelector('#appointment-pro').classList.add('active');
        } else if (id === '#closer-starter') {
            btn2.style.backgroundColor = '#ad7bc0';
            document.getElementById("orange-btns").style.backgroundColor = "#ad7bc0";
            document.querySelector('#closer-pro').classList.add('active');
        } else {
            document.querySelector(id).classList.add('active');
        }
    }
}

function premium() {
    let id = localStorage.getItem('id');
    if(id===null){
        arr.forEach((item) => {
            item.classList.add('hide1');
        });
        arr.forEach((item) => {
            item.classList.remove('active');
        });
        document.querySelector('#lead-premium').classList.add('active');
    }else{
        arr.forEach((item) => {
            item.classList.add('hide1');
        });
        arr.forEach((item) => {
            item.classList.remove('active');
        });
        arr_2.forEach((item)=>{item.style.backgroundColor='whitesmoke'});
        if (id === '#lead-starter') {
            btn3.style.backgroundColor = '#3aa4d8';
            document.getElementById("white-btns").style.backgroundColor = '#3aa4d8';
            document.querySelector('#lead-premium').classList.add('active');
        } else if (id === '#appointment-starter') {
            btn3.style.backgroundColor = '#ff9027';
            document.getElementById("white-btns").style.backgroundColor = "#ff9027";
            document.querySelector('#appointment-premium').classList.add('active');
        } else if (id === '#closer-starter') {
            btn3.style.backgroundColor = '#ad7bc0';
            document.getElementById("white-btns").style.backgroundColor = "#ad7bc0";
            document.querySelector('#closer-premium').classList.add('active');
        } else {
            document.querySelector(id).classList.add('active');
        }
    }
}

function goBack(){
    arr_3.forEach((item)=>{item.style.display = 'none'});
    arr_1.forEach((item)=>{item.style.display = 'block'});
}

// ----------- carousle ------------
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     console.log(n);
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     console.log(n)
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     console.log(n)
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
