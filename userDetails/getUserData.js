//created a function to fetch data from api
const fetchData = async() =>{
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}
//created a function to display required data in html
const renderData = async()=>{
    let table = document.querySelector('table');
    let userData = await fetchData();
    console.log(userData);
    userData.forEach(el => {
        let tableRow = document.createElement('tr');
        let tableDir1 = document.createElement('td');
        let tableDir2 = document.createElement('td');
        let tableDir3 = document.createElement('td');
        let tableDir4 = document.createElement('td');
        let tableDir5 = document.createElement('td');
        tableDir1.innerHTML=el.id;
        tableDir2.innerHTML=el.name;
        tableDir3.innerHTML=el.username;
        tableDir4.innerHTML=el.email;
        tableDir5.innerHTML=el.company.name;
        tableRow.appendChild(tableDir1);
        tableRow.appendChild(tableDir2);
        tableRow.appendChild(tableDir3);
        tableRow.appendChild(tableDir4);
        tableRow.appendChild(tableDir5);
        table.appendChild(tableRow);
    });

}
renderData();