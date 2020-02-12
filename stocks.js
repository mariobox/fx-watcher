// Set up our table container
let html = '';

let d = new Date();

// Get last day of last year for YTD devaluation calculation
let ly = new Date();
ly.setFullYear(d.getFullYear()-1);
ly.setMonth(11); // months start at 0 in JS so December would be 11
ly.setDate(31);

let formattedLastYear = `${ly.getFullYear()}-${ly.getMonth()+1}-${ly.getDate()}`;


// Assign our API endpoints to variables to use in AJAX call
const url1 = 
    `https://api.worldtradingdata.com/api/v1/forex?base=USD&api_token=onH6cZpUDVXChT9cbQ6jHuCkgoWPjCmBNRz0Sy5hs4icLbqds5ta1VF0pDpl`;

const url2 = 
    `https://api.worldtradingdata.com/api/v1/forex_single_day?base=USD&date=${formattedLastYear}&api_token=onH6cZpUDVXChT9cbQ6jHuCkgoWPjCmBNRz0Sy5hs4icLbqds5ta1VF0pDpl`;

// Set up our global variables
let countries = ["ARG", "AUS", "BRA", "CAN", "CHI", "CHN", "COL", "EUR", "GBR", "IND", "JAP", "MEX", "PER", "RUS"];
let flags =["img/arg.png", "img/aus.png", "img/bra.png", "img/can.png", "img/chi.png", "img/chn.png", "img/col.png", "img/eur.png", "img/gbr.png", "img/ind.png", "img/jap.png", "img/mex.png", "img/per.png", "img/rus.png"];
let exchanges = [];
let exchangesly = [];


// Make our AJAX calls
const fetchExchange = async () => {
    const res = await fetch(url1);
    const rates = await res.json();

    const resly = await fetch(url2);
    const ratesly = await resly.json();

// Update our arrays with exchange rate data return from fetch calls
    exchanges = [
    parseFloat(rates.data["ARS"]),
    parseFloat(rates.data["AUD"]),
    parseFloat(rates.data["BRL"]),
    parseFloat(rates.data["CAD"]),
    parseFloat(rates.data["CLP"]),
    parseFloat(rates.data["CNY"]),
    parseFloat(rates.data["COP"]),
    parseFloat(rates.data["EUR"]),
    parseFloat(rates.data["GBP"]),
    parseFloat(rates.data["INR"]),
    parseFloat(rates.data["JPY"]),
    parseFloat(rates.data["MXN"]),
    parseFloat(rates.data["PEN"]),
    parseFloat(rates.data["RUB"])
    ];

    exchangesly = [
    parseFloat(ratesly.data["ARS"]),
    parseFloat(ratesly.data["AUD"]),
    parseFloat(ratesly.data["BRL"]),
    parseFloat(ratesly.data["CAD"]),
    parseFloat(ratesly.data["CLP"]),
    parseFloat(ratesly.data["CNY"]),
    parseFloat(ratesly.data["COP"]),
    parseFloat(ratesly.data["EUR"]),
    parseFloat(ratesly.data["GBP"]),
    parseFloat(ratesly.data["INR"]),
    parseFloat(ratesly.data["JPY"]),
    parseFloat(ratesly.data["MXN"]),
    parseFloat(ratesly.data["PEN"]),
    parseFloat(ratesly.data["RUB"])
    ];

// Build the rows where each currency info will be displayed
  // Automate color background of devaluation %VLY
let bkchangely = '';
let l = countries.length;
for (let i = 0; i < l; i++) {
      exchanges[i] - exchangesly[i] < 0 ? bkchangely = "#00CC00": bkchangely = "#FF0000";
      
      html += `
    		<tr>
      		<th scope="row"><img src="${flags[i]}" width="25px"</th>
      		<td><strong>${countries[i]}</strong></td>
      		<td><strong>${exchanges[i].toFixed(2)}</strong></td>
      		<td><p class="change" style="background-color:${bkchangely}"><strong>${(((exchanges[i] - exchangesly[i])/exchanges[i])*100*(-1)).toFixed(2)}%</strong></p></td>
    		</tr>`
} 

// Build our table
html = `<table class="table table-dark"><tbody>${html}</tbody></table>`;

// Display our table
document.getElementById("root").innerHTML = html;
}

// Make magic
fetchExchange();







