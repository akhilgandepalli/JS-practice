//created a function to fetch data from api
const fetchDetails = async()=>{
    try{
        let response = await fetch("https://rickandmortyapi.com/api/character");
        let data = await response.json();
        return data.results;
    }
    catch(err){
        console.log(err);
    }
}
//created a function to display required data in html
const renderCharacters = async()=>{
    let container = document.querySelector('.cont');
    let details = await fetchDetails();
    console.log(details);
    details.forEach(el =>{
        let card = document.createElement('div');
        let poke = document.createElement('h4');
        let img = document.createElement('img');
        card.classList.add("card");
        poke.innerHTML=`Name: ${el.name}`;
        img.src=el.image;
        card.appendChild(img);
        card.appendChild(poke);
        container.appendChild(card);
    })
    if(!details){
        return;
    }
}
renderCharacters();