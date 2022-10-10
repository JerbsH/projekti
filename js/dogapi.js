//Tehnyt: Juho, päivitetty 9.10.2022
'use strict'


const apiurl = "https://dog.ceo/api/breeds/image/random/8";

let apiKysely;


const koiranappi = document.getElementById("koiranappi");
const divElem = document.querySelector("div");
const refreshkuva = document.getElementById("kuvat");

function refresh() {
    refreshkuva.replaceChildren();
    haeApi();
}

koiranappi.addEventListener("click", refresh);



function haeApi() {
    divElem.innerhtml=``
    apiKysely = apiurl;
    console.log("kysely: " + apiKysely);

    teeHaku(apiKysely);

}

function teeHaku(apiKysely) {

    fetch(apiKysely).then(function(response){
        return response.json();
    }).then(function(json) {
        naytaKuva(json);
    }).catch(function(error){
        console.log(error);
    });

}

function naytaKuva(jsonData) {
    console.log(jsonData);


    for (let i = 0; i < jsonData.message.length; i++) {
        let htmlKoodi = `
            <article>
                <figure>
                    <img src = ${jsonData.message[i]}>
                </figure>

           </article> `;

        divElem.innerHTML += htmlKoodi;

    }
}


