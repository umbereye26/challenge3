function demo(){
    document.getElementById("heading5").style.textDecoration ='none'
}
function demo1(){
    document.getElementById("heading5").style.textDecoration ='underline  rgb(43, 242, 16)'
    document.getElementById("heading5").style.cursor ='pointer'
}
function demo2(){
    document.getElementById("words").style.textDecoration ='none'
}
function demo3(){
    document.getElementById("words").style.textDecoration ='underline  rgb(43, 242, 16)'
    document.getElementById("words").style.cursor ='pointer'
}
function view(){
    document.getElementById("body1").style.display ='flex'
    document.getElementById("btn").style.cursor ='pointer'
}
function changeImage(x,image1){
  if(x==1){
    image1.src ="pexels-photo-removebg-preview (3).png" 
  }
  if(x==2){
    image1.src ="pexel-photo.jpg"
  }
}