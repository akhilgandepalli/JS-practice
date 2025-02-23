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
        let spec = document.createElement('p');
        let gend = document.createElement('p');
        let stat = document.createElement('p');
        card.classList.add("card");
        poke.innerHTML=`Name: ${el.name}`;
        spec.innerHTML=`Species: ${el.species}`;
        gend.innerHTML=`Gender: ${el.gender}`;
        stat.innerHTML=`status: ${el.status}`;
        img.src=el.image;
        card.appendChild(img);
        card.appendChild(poke);
        card.appendChild(spec);
        card.appendChild(gend);
        card.appendChild(stat);
        container.appendChild(card);
    })
    if(!details){
        return;
    }
}
renderCharacters();