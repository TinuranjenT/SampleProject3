let button1=document.getElementById("button");
button1.addEventListener("click", function(){
    let input=document.getElementById("input").value;
    document.getElementById("display").innerHTML=`Welcome Mr ${input}`;
})
