var topBtn = document.getElementById('topBtn')
window.addEventListener('scroll' , function(){
    // console.log('window is scrolling')
    if(document.documentElement.scrollTop > 300) 
    topBtn.style.display = 'block'
    else topBtn.style.display = 'none' 
})

var email = document.getElementById("inputEmail")
var pass = document.getElementById("inputPassword")
var address = document.getElementById("inputAddress")

function myFunction(){
    var text;
    if (address.value == 0 || email.value==0 || pass.value == 0)  {
        text = "The field is required.";
    } else {
        text = " ";
    } 
    document.getElementById("emailValid").innerHTML = text;
    document.getElementById("addressValid").innerHTML = text;
    document.getElementById("passValid").innerHTML = text;
}