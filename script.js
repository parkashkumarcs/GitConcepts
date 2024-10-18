function myFunction(){
    const inputValue=document.getElementById("inputnumber").value;
    var heading;
    if(inputValue>=80 && inputValue<=100){
         heading=document.getElementById("myhead").innerHTML="A Grade";
    }else if(inputValue>=70 && inputValue<80){
        heading=document.getElementById("myhead").innerHTML="B Grade";
   }else if(inputValue>=60 && inputValue<70){
        heading=document.getElementById("myhead").innerHTML="C Grade";
    }else if(inputValue>=50 && inputValue<60){
        heading=document.getElementById("myhead").innerHTML="D Grade";
   }else if(inputValue<50){
        heading=document.getElementById("myhead").innerHTML="F Grade";
   }


    heading.textContent=inputValue;

}



/*var num=prompt("enter the number: ")
if(num%5==0){
    document.getElementById("myhead").innerHTML="Yes this "+num+" number is multiple of 5";
}else{
    document.getElementById("myhead").innerHTML="Not multiple of 5";
}*/


