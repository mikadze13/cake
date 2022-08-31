const { json } = require("stream/consumers")

// cake cards  slider informations
class cakeCards {
    constructor(img,name,description,price,pricecount){
        this.img = img
        this.name = name
        this.description =description
        this.price = price
        this.pricecount=pricecount
    }
} 
class firebaseworker {
    firebaseref;
    constructor(){
        this.firebaseref = firebase.firestore()
    }
    async addCards(cards){ 
        var json = JSON.stringify(cards)
        var result = await this.firebaseref.collection("cards").add(JSON.parse(json)) 
    }
    async ReadCards(){
        var allCakecards = []
        var result = await this.firebaseref.collection("cards").get()
        result.forEach(i=>{
            var tmp = i.data()
            tmp.id = i.id
            allCakecards.push(tmp)
        })  
        for(var i of allCakecards){ 
        } 
    }
} 


 
// imgebs davamatebt
var card1 = new cakeCards("img/fowlc1.png", "chocolate","Land behold it created good saw after she'd our set.", 20,"I Order Now")
var card2 = new cakeCards("img/fowlc3.png", "Sweetheart","Land behold it created good saw after she'd our set.", 20,"I Order Now") 
var card3 = new cakeCards("img/fowlc2.png", "Blackforest","Land behold it created good saw after she'd our set.", 20,"I Order Now")
var fr =new firebaseworker()
 var k1=[card1,card2,card3]
// fr.addCards(card1)
// fr.addCards(card2)
// fr.addCards(card3)
fr.ReadCards() 

var owlcaro=document.querySelector(".owl-carousel")
for(var k of k1){ 

    var tmp=`
    <div class="card card1" style="width: 18rem;">
    <div class="imgwrapper"><img src="${k.img}" class="card-img-top img" alt="armushaobs"></div>
   <div class="card-body cardBody2">
     <h5 class="card-title">${k.name}</h5>
     <p class="card-text">${k.description}</p>
     <button class="bt1 btcd"><span>$${k.price}</span>
     <span>${k.pricecount}</span></button>
      
   </div>
 </div>
    `
    owlcaro.innerHTML+=tmp
    
 } 
 
 
//Fresh & Delicious 
class Fresh{
    constructor(img,header,adver,description1,buttext){
        this.img=img
        this.header=header
        this.adver=adver
        this.description1=description1
        this.buttext=buttext
    }
}
class firebaseworker1{
    firebaseref1;
    constructor(){
        this.firebaseref1=firebase.firestore()
    }
    async addTxt(txt){ 
        var json = JSON.stringify(txt)
        var result = await this.firebaseref1.collection("txt").add(JSON.parse(json)) 
    }
    async readTxt(){
        var alltxt = []
        var result = await this.firebaseref1.collection("txt").get()
        result.forEach(i=>{
            var tmp = i.data()
            tmp.id = i.id
            alltxt.push(tmp)
        })  
        // for(var i of alltxt){
        //     console.log(i.header)
        // } 
}
}
var txtcard = new Fresh("img/cake.webp", "Fresh & Delicious","A Simple Way to Eating Delicious",
 "Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip ex ea commodo conse quat is aute irure, quis nostrud exer.","Our Story")
var fr1 =new firebaseworker1()
// fr1.addTxt(txtcard)
fr1.readTxt()
var arr2=[txtcard]
var freshAndDelicious=document.querySelector(".freshAndDelicious")
for(var i of arr2){ 
    var tmp1=`
    <div class="fresh_leftside">
    <img src="${i.img}" class="img2" alt="armushaobs">
    </div> 
    <div class="fresh_rightside">
    <span class="sp1">${i.header}</span>
    <h2 class="h21">${i.adver}</h2>
    <p class="p1">${i.description1}</p>
    <button class="bt1 bt2">
     <span>${i.buttext}</span></button>
      
    </div>
    `
    freshAndDelicious.innerHTML+=tmp1
}


//Our Features
class Feature{
    constructor(header,description,icon,cardsheader,cardsdescription){
        this.header=header
        this.description=description
        this.icon=icon
        this.cardsheader=cardsheader
        this.cardsdescription=cardsdescription
    }
}
class firebaseworker2{
    firebaseref;
    constructor(){
        this.firebaseref=firebase.firestore()
    }
    async addDescr(desc){
        var json=JSON.stringify(desc)
        var result= await this.firebaseref.collection("Feature").add(JSON.parse(json))

    }
    async readDescr(){
        var allDesc=[]
        var result=await this.firebaseref.collection("Feature").get()
        result.forEach(i=>{
            var tmp=i.data()
            tmp.id=i.id
            allDesc.push(tmp)
        })
        // for(var i of allDesc){
        //     console.log(i.cardsdescription)
        // } 
    }
}
var featureCard=new Feature("Our Features","Quality is Our First Priority","icon/icon1.svg","Pet Boarding","consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.")
var featureCard1=new Feature("Our Features","Quality is Our First Priority","icon/icon2.svg","Pet Boarding","consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.")
var featureCard2=new Feature("Our Features","Quality is Our First Priority","icon/icon3.svg","Pet Boarding","consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.")
var fr2=new firebaseworker2()
// fr2.addDescr(featureCard)
// fr2.addDescr(featureCard1)
// fr2.addDescr(featureCard2)
fr2.readDescr()
var ourfeatures = document.querySelector(".featurecards")
var featurecardsarr = [featureCard,featureCard1,featureCard2]
for (var i of featurecardsarr){ 
    var tmpfeaturecards = `
    
      <div class="fetcard" >
      <div class="cardimgmother">
        <img src="${i.icon}" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
        <h3 class="namee">${i.cardsheader}</h3>
          <p class="card-text crdtxt">${i.cardsdescription}</p>
        </div>
      </div>
   
    `
    ourfeatures.innerHTML+=tmpfeaturecards

}




// video 
class Video{
    constructor(img){
        this.img=img
    }
}
class firebaseworker3{
    firebaseref;
    constructor(){
        this.firebaseref=firebase.firestore()
    }
    async addVideo(vid){
        var json=JSON.stringify(vid)
        var result= await this.firebaseref.collection("Video").add(JSON.parse(json))
    }
    async readVideo(){
        var allvideo=[]
        var result=await this.firebaseref.collection("Video").get()
        result.forEach(i=>{
            var tmp=i.data()
            tmp.id=i.id
            allvideo.push(tmp)
        })
        // for(var i of allvideo){
        //     console.log(i.img)
        // } 
    }
}
var backphoto= new Video("img/cakeFvd.webp")
var fr3=new firebaseworker3()
// fr3.addVideo(backphoto)
fr3.readVideo()



// Testimonial
var carousel2=document.querySelector(".carousel2")
class Testimonial{
    constructor(cardstext,cardphoto,name,profession){
        // this.header=header
        // this.description=description
        this.cardstext=cardstext
        this.cardphoto=cardphoto
        this.name=name
        this.profession=profession
    }
}
class firebaseworker4{
    firebaseref;
    constructor(){
        this.firebaseref=firebase.firestore()
    }
    async addInfo(info){ 
        var json=JSON.stringify(info)
        var result= await this.firebaseref.collection("Info").add(JSON.parse(json))
    }
    async readInfo(){
        var allInfo=[]
        var result=await this.firebaseref.collection("Info").get()
        result.forEach(i=>{
            var tmp=i.data()
            tmp.id=i.id
            allInfo.push(tmp)
        })
        
    } 
}
var information= new Testimonial("Leather detail shoulder contrastic colour contour stunning silhouette working peplum.Statement buttons cover-up tweaks patch.",
"personimg/oliva.webp","Oliva jems","UIX designer")
var information1= new Testimonial("Leather detail shoulder contrastic colour contour stunning silhouette working peplum.Statement buttons cover-up tweaks patch.",
"personimg/oliva2.png","Oliva jems","UIX designer")
var fr4=new firebaseworker4()
// fr4.addInfo(information)
// fr4.addInfo(information1)
fr4.readInfo()
var seccarouselarr=[information,information1]
for (var i of seccarouselarr){
    var tmp = `
    <div class="crd2">

    <div class="card-body">
      <p class="card-text xcv">${i.cardstext}</p>
      <div class="imgspandiv">
        <div class="imgdiv"><img src="${i.cardphoto}" alt=""></div>
        <div class="spandiviko">
          <h4>${i.name}</h4>
          <span>${i.profession}</span>
        </div>
      </div>
    </div>
  </div>
    `
    carousel2.innerHTML += tmp
}



// owl carousel
var xomagi1=document.querySelector(".yet")
class Owl{
    constructor(images){
        this.images=images
    }
}
class firebaseworker5{
    firebaseref;
    constructor(){
        this.firebaseref=firebase.firestore()
    }
    async addOwlPhoto(info){ 
        var json=JSON.stringify(info)
        var result= await this.firebaseref.collection("owlImages").add(JSON.parse(json))
    }
    async readOwlPhoto(){
        var owlImages=[]
        var result=await this.firebaseref.collection("owlImages").get()
        result.forEach(i=>{
            var tmp=i.data()
            tmp.id=i.id
            owlImages.push(tmp)
        })
        var arrimg=[]
        for(var i of owlImages){
            arrimg.push(i)
             
            //   xomagi1.src=i.images
        } 
         
   
    } 

}
  
var owlimg1= new Owl("img/c3.png")
var owlimg2= new Owl("img/c4.png")
var owlimg3= new Owl("img/c5.png")
var owlimg4= new Owl("img/c6.png") 
var fr5=new firebaseworker5()
// fr5.addOwlPhoto(owlimg1)
// fr5.addOwlPhoto(owlimg2)
// fr5.addOwlPhoto(owlimg3)
// fr5.addOwlPhoto(owlimg4)
fr5.readOwlPhoto()

// footer from database
class Footerleft{
    constructor(socialicon){
        this.socialicon=socialicon
    }
}
class Firebaseworker6{
    firebaseref;
    constructor(){
        this.firebaseref=firebase.firestore()
    }
    async addFooterleft(leftside){ 
        var json=JSON.stringify(leftside)
        var result= await this.firebaseref.collection("FooterLeft").add(JSON.parse(json))
    }
    async readFooterleft(){
        var footleft=[]
        var result=await this.firebaseref.collection("FooterLeft").get()
        result.forEach(i=>{
            var tmp=i.data()
            tmp.id=i.id
            footleft.push(tmp)
        })
}
}
var left1=new Footerleft("fa-brands fa-facebook-square")
var left2=new Footerleft("fa-brands fa-twitter-square")
var left3=new Footerleft("fa-brands fa-linkedin")
var left4=new Footerleft("fa-brands fa-pinterest-square")
var leftfotsocmediadiv=document.querySelector(".leftfotsocmediadiv")
 
 var footarr = [left1,left2,left3,left4]
var fr6=new Firebaseworker6()
// fr6.addFooterleft(left1)
// fr6.addFooterleft(left2)
// fr6.addFooterleft(left3)
// fr6.addFooterleft(left4)
// fr6.readFooterleft() 
for(var i of footarr){
    
    var tmp3=` 
  <i class="${i.socialicon} soc"></i>  
  
    `
    leftfotsocmediadiv.innerHTML+=tmp3
}
class FootermiddleLeft{
    constructor(information){
        this.information=information
    }
}

class Firebaseworker7{
    firebaseref;
    constructor(){
        this.firebaseref=firebase.firestore()
    }
    async addFootermiddle(middleside){ 
        var json=JSON.stringify(middleside)
        var result= await this.firebaseref.collection("middleside").add(JSON.parse(json))
    }
    async readFootermiddle(){
        var middleside=[]
        var result=await this.firebaseref.collection("middleside").get()
        result.forEach(i=>{
            var tmp=i.data()
            tmp.id=i.id
            middleside.push(tmp)
        })
}
} 
var middleside2=new FootermiddleLeft("Home")
var middleside3=new FootermiddleLeft("About")
var middleside4=new FootermiddleLeft("Services")
var middleside5=new FootermiddleLeft("Blog")
var middleside6=new FootermiddleLeft("Contact")
var footmiddlearr=[middleside2,middleside3,middleside4,middleside5]
var fr7=new Firebaseworker7()
// fr7.addFootermiddle(middleside1) 
// fr7.addFootermiddle(middleside2) 
// fr7.addFootermiddle(middleside3) 
// fr7.addFootermiddle(middleside4) 
// fr7.addFootermiddle(middleside5) 
// fr7.addFootermiddle(middleside6) 
// fr7.readFootermiddle()
var leftmidfot=document.querySelector(".leftmidfot")
for(var i of footmiddlearr){
    var tmp4=`
    <a href="#"><span>${i.information}</span></a> 
    `
    leftmidfot.innerHTML+=tmp4
}
var middleside7=new FootermiddleLeft("Blackforest")
var middleside8=new FootermiddleLeft("Bodhubon")
var middleside9=new FootermiddleLeft("Rongdhonu")
var middleside10=new FootermiddleLeft("Meghrong")
var footMiddleLeftArr=[middleside7,middleside8,middleside9,middleside10]
// fr7.addFootermiddle(middleside7)
// fr7.addFootermiddle(middleside8)
// fr7.addFootermiddle(middleside9)
// fr7.addFootermiddle(middleside10)
// fr7.readFootermiddle()

var rightmidfot=document.querySelector(".rightmidfot")
for(var i of footMiddleLeftArr){
    var tmp5=`
    <a href="#"><span>${i.information}</span></a> 
    `
    rightmidfot.innerHTML+=tmp5
}
 
var leftside1=new FootermiddleLeft("76/A, Green Lane, Dhanmondi, NYC")
 
var footLeftside=[leftside1]
// fr7.addFootermiddle(leftside1)
// fr7.addFootermiddle(leftside2)
// fr7.readFootermiddle()
var rightfot=document.querySelector(".rightfot")
for(var i of footLeftside){
    var tmp5=`
    <span class="sp25">${i.information}</span>
    <span class="sp26">+10 (78) 738-9083</span>
    `
    rightfot.innerHTML+=tmp5
}
 





var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()}; 
function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
    mybutton.style.transition="all .4s ease-out 0s"
  } else {
    mybutton.style.display = "none";
  }
} 
function topFunction() { 
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    
  
}


//  var mynav1=document.querySelector(".mynav1")

// if(document.body.scrollTop>600||document.documentElement.scrollTop>600){
//     // mynav1.style.display="none"
//     // mynav1.style.top = "82px";
// }else{
//     //mynav1.style.position="fixed"; 
// }

 

// plusminus funqciko

var dropdown = document.querySelector(".v1")
var c = 0
var plusmin = document.querySelector(".plusmin")
plusmin.innerHTML = "+"
dropdown.addEventListener("click", function(){
     c++
        if(c%2==0){
            plusmin.innerHTML = "+"
        }else{
            plusmin.innerHTML = "-"
        }
        console.log(c)
    
    })


var play=document.querySelector(".videoicondiv")
var vid=document.querySelector(".vid")
var xoki=document.querySelector(".xoki")
play.addEventListener("click",function(){
    vid.style.display="block" 
    xoki.style.display="block"
})
xoki.addEventListener("click",function(){
    vid.style.display="none"
    xoki.style.display="none"
})