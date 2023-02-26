var randomnum1=Math.floor(Math.random()*6)+1;

var randomdiceimage="dice"+randomnum1+".png";

var randomImageSource="images/"+randomdiceimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomnum2=Math.floor(Math.random()*6)+1;

var randomImageSource2="images/dice"+randomnum2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomnum1>randomnum2)
{
    document.querySelector("h1").innerHTML="Player 1 is win...!!!";
}
else if(randomnum1<randomnum2)
{
    document.querySelector("h1").innerHTML="Player 2 is win...!!!";
}
else
{
    document.querySelector("h1").innerHTML="Match draw..!";
}