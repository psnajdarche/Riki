const cont=document.querySelector(".container")


function uzimanje(data)
{
    const brisi=document.querySelectorAll('.kartice');

    brisi.forEach(b=>b.remove());
    
    data.results.map((el,i,arr)=>{
       
        const card=document.createElement('div');
        const slika=document.createElement('img');
        const name=document.createElement('p');
        const dugme=document.createElement('button')
        slika.setAttribute('src',el.image) 
        dugme.classList.add("dugme")
        name.textContent=(el.name)
        dugme.textContent='LIKE'
        dugme.style.color="white"
        card.appendChild(slika);
        card.appendChild(name);
        card.appendChild(dugme)
        cont.appendChild(card);
        card.classList.add("kartice")
        dugme.addEventListener('click',pokreni=>{
            sessionStorage.setItem("user",el.id)
            window.open("./nova.html","_self")
            
        })
        
    })
   
    
}


window.addEventListener('load',fetchDate)



//PAGINACIJA

const slider=document.querySelector(".plag")
const levastrela=document.createElement('button');
levastrela.textContent='<'
slider.appendChild(levastrela)

let trenutnastr=1;
var HELP;
const broj=5;
let nizstrana=[];


    for(let i=1;i<=broj;i++)
    {
     nizstrana[i-1]=document.createElement('button');
        slider.appendChild(nizstrana[i-1])
        nizstrana[i-1].textContent=i;
        nizstrana[i-1].addEventListener('click',()=>{
            trenutnastr=parseInt(nizstrana[i-1].textContent)
            paginacija()
            fetchDate()
        })
            
        
    }

const desnastrela=document.createElement('button');
desnastrela.textContent='>'
slider.appendChild(desnastrela)





function paginacijadesno(){
        HELP=trenutnastr
    if(HELP>3 && HELP<41)
    {
            for(let i=0;i<nizstrana.length;i++)
            {
                nizstrana[i].textContent=HELP+1
                HELP++;
            }  
            
        
    }
}
function paginacijalevo(){
    HELP=trenutnastr
if(HELP>1 && HELP<41)
{
        for(let i=0;i<nizstrana.length;i++)
        {
            nizstrana[i].textContent=HELP-1
            HELP++;
        }  
        
    
}
}
desnastrela.addEventListener('click',()=>{
    pomeridesno();
    paginacijadesno();
    fetchDate();
})
levastrela.addEventListener('click',()=>{
    pomerilevo();
    paginacijalevo();
    fetchDate();
})
function pomeridesno(){
    return trenutnastr++;
}
function pomerilevo(){
    return trenutnastr--;
}

function paginacija(){
    HELP=trenutnastr
    if(HELP<4){
        for(let i=0,j=1;i<5,j<6;i++,j++){
            nizstrana[i].textContent=j;
        }
    }
    if(HELP>3 && HELP<41)
    {
        for(let i=0;i<nizstrana.length;i++)
        {
            nizstrana[i].textContent=HELP-2;
            HELP++;
        }
    }
}
function fetchDate(){
    fetch('https://rickandmortyapi.com/api/character/?page='+trenutnastr)
    .then(res=> res.json())
    .then(res=> uzimanje(res))
}