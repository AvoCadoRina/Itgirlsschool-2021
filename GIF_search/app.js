'use strict'
var button = document.getElementById("Search");
let jsondata;

function searchGif() {
    let UserWord = document.getElementById('gifs').value;
    let url = 'https://api.giphy.com/v1/gifs/search?api_key=wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb&q=' + UserWord + 'go&limit=20&offset=0';
    fetch(url).then(
        function(u) { return u.json(); }
    ).then(
        function(json) {
            jsondata = json.data;
            console.log(json);
            for (let i = 0; i < 5; i++) {
                $("#Find").append("<div>" + "<img src=" + jsondata[i].url + ">" + "</div");
            }
        }
    )
};

button.addEventListener("click", searchGif);