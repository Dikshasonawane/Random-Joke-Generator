const display= document.getElementById("main");
const btn  = document.getElementById("btn1")


function getdata()
{

const api = "https://api.chucknorris.io/jokes/random";
fetch(api)

.then(Response => Response.json())
.then((object) => {
    //console.log(object)

    display.innerHTML = object.value

})
}
btn.addEventListener("click",getdata)
