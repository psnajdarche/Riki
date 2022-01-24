const id =sessionStorage.getItem("user");
const heder=document.querySelector(".heder")
function podaci(e){
    // console.log(data);

    const card=document.createElement('div');
    const slika=document.createElement('img');
    const name=document.createElement('p');
    slika.setAttribute("src",e.image)
    name.textContent=e.name
    card.appendChild(slika)
    card.appendChild(name)
    heder.appendChild(card)

}
function   fec(){
    fetch("https://rickandmortyapi.com/api/character/"+id)
    .then(res=>res.json())
    .then(res=>podaci(res))

}
window.addEventListener('load',fec)



