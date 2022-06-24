const url = "https://restcountries.com/v3/all";

const regionButtonsDiv = document.querySelector('.btn-group');
const select = document.querySelector('select');
const flagsDiv = document.querySelector('.flags');
const cardContainer = document.querySelector('.card-container');
const regions = [];
console.log(cardContainer);

const fetchCountries = async ()=>{
    try {
        const res = await fetch(url);
        const countries = await res.json();
        console.log(countries); // verilerin  geldiğini görmek için consolda yazmak lazım bu 3 satırı
        cardContainer.innerHTML = '';



    } catch (error) {
        console.log(error);
    }
}
