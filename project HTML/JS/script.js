function ShowAlert(){
    alert("مرحبا في موقعنا الالكتروني")
}
function ShowConfirm(){
   let m = confirm("هل انت متاكد انك تريد المتابعه؟؟؟")
   if(m==true){
document.write('شكرا على التقييم');
   }
   if(m==false){
    document.getElementById('result').textContent="ارجو اعادة التقييم";
       } 
}
function Showprompt(){
    let r = prompt("enter your name","")
    if(r){
document.getElementById('result').textContent="hello  "+r+"!";
    }
    else{
     document.getElementById('result').textContent="enter your name again";
        } 
 }
 function Showupdate(){
let lastmodifid=new Date(document.lastModified);
document.getElementById('last-update').textContent='اخر تحديث'+lastmodifid;

 }
 function changecolor(){
    document.getElementById('box').style.backgroundColor=" rgb(60, 27, 90)";
 }
 function resetcolor(){
    document.getElementById('box').style.backgroundColor="rgb(179, 151, 206)";
 }