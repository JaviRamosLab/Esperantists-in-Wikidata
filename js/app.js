let country; //Usono (Q30) 
let limit = 500;

function getEsperantists() {
     let a = document.forms["countryList"];
     let b = a.querySelectorAll('input[type="radio"]:checked');
     country = b[0].defaultValue;
    //  console.log(country);
    getData()
   }

function getData(){
fetch(`https://query.wikidata.org/sparql?query=SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22eo%2Cen%2Ces%22.%20%7D%0A%20%20%7B%0A%20%20%20%20SELECT%20DISTINCT%20%3Fitem%20WHERE%20%7B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Fitem%20p%3AP106%20%3Fstatement0.%0A%20%20%20%20%20%20%20%20%3Fstatement0%20(ps%3AP106%2F(wdt%3AP279*))%20wd%3AQ860918.%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20UNION%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Fitem%20p%3AP1412%20%3Fstatement1.%0A%20%20%20%20%20%20%20%20%3Fstatement1%20(ps%3AP1412%2F(wdt%3AP279*))%20wd%3AQ143.%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3Fitem%20p%3AP27%20%3Fstatement2.%0A%20%20%20%20%20%20%3Fstatement2%20(ps%3AP27%2F(wdt%3AP279*))%20wd%3A${country}.%0A%20%20%20%20%7D%0A%20%20%20%20LIMIT%20${limit}%0A%20%20%7D%0A%7D&format=json`)
    .then(res => res.json())
    // .then(res => console.log(res)) // okoko
    .then(res => fecthData(res))
    .catch(err => console.log(err))

const fecthData = (res) => {
    let rezulto = res.results.bindings
    // console.log(res.results.bindings.length); //okokok
    let totalo = res.results.bindings.length /////okokok
    let body = '';
    for (let i = 0; i < rezulto.length; i++) {
    console.log(rezulto[i].itemLabel.value);
    body += `<span><big>${i + 1}  - </big><big>${rezulto[i].itemLabel.value}</big>
            <a href="${rezulto[i].item.value}">${rezulto[i].item.value}</a><br>`
    }
    document.getElementById('totalo').innerHTML = 'Totalo: ' + totalo + ' sperantistoj<br>';
    document.getElementById('esperantistsWikidata').innerHTML = body
    // document.getElementById('esperantistsWikidata').innerHTML = 'Totalo: ' + totalo + ' sperantistoj<br>' + body ///////okokokoko
}
}


// .attr("selected")


// var ls = $.fn.polyglotLanguageSwitcher;
// ls.defaults = {
//     openMode:'click',
//     hoverTimeout:1500,
//     animSpeed:200,
//     effect:'slide',
//     paramName:'lang',
//     pagePrefix:'',
//     websiteType:'dynamic',
//     testMode:false,
//     onChange:NaN,
//     afterLoad:NaN,
//     beforeOpen:NaN,
//     afterOpen:NaN,
//     beforeClose:NaN,
//     afterClose:NaN
// };




//    function showEsperantists() {
//     country = document
//    }

// const primaryLang = 'en';

// country = document.querySelectorAll('.lando')
// country = document.querySelectorAll('.btnLando');
// country = document.querySelector('.btnLando');
// country = document.getElementsByClassName('btnLando');

// country.addEventListener('click', showEsperantists);

// function showEsperantists() {
// country = 
// }


// country.addEventListener('click', () => {
//     // country = country.value;
//     console.log('saluton');
    
//     FetchData();
// });

// addEventListener()

// document.getElementById('cu').onclick = function() {
//     let Kubo = document.getElementById("inputCu").value
//     console.log(Kubo);
// }

// function getUS() {
// country = 'Q30'
// getData()
// }