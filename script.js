var randomButton = document.querySelector(".random")
randomButton.addEventListener('click', newData)
function loading()
{
randomButton.textContent="Loading"
}
function newData()
{
    loading();
var randomNumber=Math.round(Math.random() * 50)+1;
var url="https://swapi.dev/api/people/"+ randomNumber;
fetch(url)
.then(Response => Response.json())
.then(data => {
     console.log(data);
    
document.querySelector(".name span").textContent= data['name'];
document.querySelector(".height span").textContent= data['height'] + " cm ";
document.querySelector(".mass span").textContent= data['mass'] + " kg ";
document.querySelector(".eye_color span").textContent= data['eye_color'];
})
setTimeout(function() {
    randomButton.textContent = "Random";
}, 350);
}