const flag = document.querySelector('.flag2')
const form = document.querySelector('form');
const country = document.querySelector('.country');
const population = document.querySelector('.pop');
const countryCapital = document.querySelector('.rajdhani')
const nativeName = document.querySelector('.nativeName')
const domain = document.querySelector('.Top')
const countryName = document.querySelector('.country')
const language = document.querySelector('.Language')
const Region = document.querySelector('.Region')
const subRegion = document.querySelector('.SubRegion');
const Currency = document.querySelector('.Currency')


form.addEventListener('submit', function(e){
    e.preventDefault();
    const input = document.querySelector('.input-box').value;
   
    fetch(`https://restcountries.com/v3.1/name/${input}`)
    .then(function(data){
         return data.json();
     })
    .then(function(jsondata){
        const flagUrl = jsondata[0].flags.png;
        flag.src = flagUrl;

        countryName.innerHTML = jsondata[0].name.common;
         const countryPopulation = jsondata[0].population;
         population.innerHTML = countryPopulation;

        //  language.innerHTML = jsondata[0].languages[];
         Region.innerHTML = jsondata[0].region;
     
         subRegion.innerHTML = jsondata[0].subregion;

   
            
        domain.innerHTML = jsondata[0].tld;
        
        const countrycapital = jsondata[0].capital[0]
        countryCapital.innerHTML = jsondata[0].capital[0];
        console.log(countrycapital);

        let nativeNameKey=Object.keys(jsondata[0].name.nativeName)[0];
        
        nativeName.innerHTML=jsondata[0].name.nativeName[nativeNameKey].common;

        
        let languageKey = Object.keys(jsondata[0].languages)[0];
        // console.log(languageKey)
        language.innerHTML = jsondata[0].languages[languageKey];

        let countryCurrency = Object.keys(jsondata[0].currencies)[0];

        Currency.innerHTML = jsondata[0].currencies[countryCurrency].symbol;
        // console.log(countryCurrency)
    });
});


// fetch(`https://restcountries.com/v3.1/name/${input}`)
//     .then(function(data){
//         return data.json();
//     })
//     .then(function(jsondata){
//         console.log(jsondata)
//     });
// });