// document.getElementById("url1").innerHTML = "<a href='https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1GTPM_enIN1030IN1030&oq=google&aqs=chrome.1.69i60j46i131i199i433i465i512j69i59j0i131i433i512l3j69i60j5.9429j0j7&sourceid=chrome&ie=UTF-8'>Google</a>";
// document.getElementById("url2").innerHTML = "<a href='https://www.codewithharry.com/'>CodeWithHarry</a>";
// document.getElementById("url3").innerHTML = "<a href='https://www.google.com/search?q=w3schools&rlz=1C1GTPM_enIN1030IN1030&oq=w3&aqs=chrome.1.69i59l2j69i57j46i67i199i433i465j69i60l4.2811j0j4&sourceid=chrome&ie=UTF-8'>w3School</a>";



let btn1 = document.getElementById("google");
let btn2 = document.getElementById("codewithharry");
let btn3 = document.getElementById("w3school");

btn1.addEventListener("click",function(){
    window.location = "https://google.com";
});

btn2.addEventListener("click",function(){
    window.location = "https://CodeWithHarry.com";
});

btn3.addEventListener("click",function(){
    window.location = "https://www.w3schools.com/js/";
});