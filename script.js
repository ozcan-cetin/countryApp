const url = "https://restcountries.com/v3/all";

const regionButtonsDiv = document.querySelector('.btn-group');
const select = document.querySelector('select');
const flagsDiv = document.querySelector('.flags');
const cardContainer = document.querySelector('.card-container');
const regions = [];
// console.log(flagsDiv);

const fetchCountries = async ()=>{
    try {
        const res = await fetch(url);
        const countries = await res.json();
        console.log(countries); // verilerin  geldiğini görmek için consolda yazmak lazım bu 3 satırı
        cardContainer.innerHTML = '';
        countries.forEach((country)=>{
            select.innerHTML += `<option value="${country.name.common}">${country.name.common}</option>`;
            if(!regions.includes(country.region)){
                regions.push(country.region);
                regionButtonsDiv.innerHTML +=
                `<button type="button" class="btn rounded-3 btn-primary m-2">${country.region}</button>`;
            }
        })


    } catch (error) {
        console.log(error);
    }
}
