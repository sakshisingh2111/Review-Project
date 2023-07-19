const reviews= [
    {
        id:1,
        Person_name:"susan smith",
        job: "web developer",
        img:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK7Os2YW_6OfJJGh9rvPUSbNYqUwQXZce6mMIrqMasLen8sg4BDbHwN-UMOAV6Q_lXdvqdhbY-NqCTcGA",
        text: 
        "Provide any additional comments or suggestions for improvement (if applicable)"
    },

    {
        id:2,
        Person_name:"Alia Bhatt",
        job: "actor",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKirpSQQc0Jkzp2sKIO2P60IP6cWwz6WpjREXuvKXMa95GGUhz66A933M89wFAMxP6h0s&usqp=CAU",
        text: 
        "A love song very close to my heart 💖"
    },

    {
        id:3,
        Person_name:"Deepika",
        job: "banker",
        img: "https://filmfare.wwmindia.com/content/2020/sep/deepikapadukoneempire41599659066.jpg",
        text: 
        "Deepika Padukone is an Indian actress who works predominantly in Hindi films. She is one of the highest-paid actresses in India"
    }
];

//select items

const img= document.getElementById("person-img")
const author= document.getElementById("author")
const job= document.getElementById("job")
const info= document.getElementById("info")


const prevBtn= document.querySelector(".prev-btn");
const nextBtn= document.querySelector(".next-btn");
const randomBtn=  document.querySelector(".random-btn");

//set starting item
let currentItem= 0;
 //load intial item
 window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem)
 })

 //show person based on item

 function showPerson(person) {
    const item= reviews[person];
    img.src= item.img;
    author.textContent =item.Person_name;
    job.textContent=item.job;
    info.textContent=item.text; 
 }

 //show next person

 nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
 })

 prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
 })