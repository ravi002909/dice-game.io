var randomnumber1=Math.round(Math.random()*5+1);
var p="dice" + randomnumber1 +  ".png"
var d=document.querySelectorAll("img")[0];
d.setAttribute("src",p);

var randomnumber2=Math.round(Math.random()*5+1);
var ef="dice" + randomnumber2 +  ".png"
var r=document.querySelectorAll("img")[1];
r.setAttribute("src",ef);

if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if(randomnumber2> randomnumber1)
{
    document.querySelector("h1").innerHTML="🚩 Player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML="🚩 Draw";
}
