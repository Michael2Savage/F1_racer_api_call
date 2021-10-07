/*
JavaScript and APIs (Axios)
*/

/*
How this project will function:
1. User submits form
2. Form data is brought in and saved
3. If name has previously submitted form, display welcome back message
4. Query API for a CatFact
5. Ignore whether or not the user wants the CatFact
6. Display the CatFact for the user in the HTML
*/

let form = document.getElementById('only form');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let season = event.path[0][0].value;
    let round = event.path[0][1].value;

    loadData(season, round);
});


let getData = async (input, input2) => {
    console.log(input);
    console.log(input2);
    let response = await axios.get(`https://ergast.com/api/f1/${input}/${input2}/driverStandings.json`);
    console.log(response)
    return response
}

let loadData = async (input, input2) => {
    let data = await getData(input, input2);
    console.log(data)
    let i = 0
    while(i < 7){
        let nested_data = data.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i]
        let html = `<p> Driver ID: ${nested_data.Driver.driverId}, Points: ${nested_data.points}, Position: ${nested_data.Driver.position}</p>`;
        document.querySelector('#racer_info').insertAdjacentHTML('afterend', html);
    i++;
    
    
    
    }
}