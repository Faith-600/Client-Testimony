let myBtn = document.getElementById("mbtn");
let myFbtn = document.getElementById("fbtn");
let myLbtn = document.getElementById("lbtn");
let myH3 = document.getElementById("myH3");
let myH6 = document.getElementById("myH6");
let myP = document.getElementById("myP");
let myImage = document.getElementById("img");
let storeItem = 0;

const storeName = [
    { name:"Kimberly Morgan",
        job:"UI/UX DESIGNER",
        img:"../image1.jpeg",
        test:`I can’t say enough about how knowledgeable 
        Toinette Rorie is in the area of Web Development. She indeed is a
         developer and can build a site from scratch. She understands functionality and is great at constructing a site that is robust and fully functioning.
          She listens to her clients and delivers an outstanding product in a timely fashion that surpasses your initial desires. My company website, doallthingswithjoy.com,
           was wholly designed and developed by her, 
        and I couldn’t be happier with its design and function.`,
    },

    {
        name:"Ishika Allen",
        job:"NODE JS DEVELOPER",
        img:"../image3.png",
        test:`I just wanted to thank you for the 
        excellent job you have done on our website. 
        I am very pleased with the final product.
         I had the opportunity to work with a large 
         national website design company,
          but I’m so glad I selected Premier Web Design Solutions instead. You made it a pleasure
           to work with you from the initial conversation of the concept of my website, through content development and page layout to the final roll out of the site. The part I enjoyed best was your professionalism and your ability to get things turned around in a timely fashion. I have been pleased to continue to use your services to monitor and tweak my website to make it indeed a valuable asset for my business.

 `
},
{
  name:"Shelton Russel",
  job:"FULL STACK DEVELOPER",
  img:"../image5.webp",
  test:`Premier Web Design Solutions, LLC has been a valuable web development asset to the NCDOT-BOWD. They are extremely professional to work with, and their work displays their creative abilities and great attention to detail. They have exceeded my expectations when comes to their timely completion and delivery of web projects. I highly recommend Premier Web Design Solutions as a company for your web solutions and would be happy to work
   with them on future web project needs.`  
},
{
    name:"Puskar Adhikari",
    job:"FROT-END DEVELOPER",
    img:"../image.jpeg",
    test:`Monk tech did a great job developing our website. Whether providing direct development support or giving us the opportunity to make our development updates, Monk Tech expertise and support services were top notch! It didn't take long to stand up our website, and we were pleased with the design and layout of the graphics and information. We look forward to engaging with Toinette again, especially
     as we look to build out our site services.`
},

{
    name:"Weller R. Thomas",
    job:"CEO",
    img:"../image2.avif",
    test:`I have been fortunate to use the services of Premier Web Design Solutions for the past four years. In this ever changing world of technology, Premier Web Design Solutions has provided quality and timely service to my company. Premier has not only provided great service but provided consultation on best practices for my media company. Pathfinders uses Premier to maintain our website, advertisement banners and update video
     content and digitizing our print publication.`
}
];
 

function getStoreItems(mainReviewItems){
    let review = storeName[mainReviewItems];
    myH3.textContent = review.name;
    myH6.textContent = review.job;
    myP.textContent = review.test;
    myImage.src = review.img;
}

myFbtn.onclick = ()=>{
    storeItem--;
    if(storeItem < 0){
        storeItem = storeName.length-1;
    }
    getStoreItems(storeItem);
}
myLbtn.onclick = ()=>{
    storeItem++;
    if(storeItem >  storeName.length-1){
        storeItem = 0;
    }
    getStoreItems(storeItem);
}


myBtn.onclick= ()=>{
  storeItem = Math.floor(Math.random()*storeName.length);
  getStoreItems(storeItem);
};

