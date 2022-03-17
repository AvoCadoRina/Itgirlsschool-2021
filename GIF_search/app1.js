let button = document.getElementById("Search");

function SearchGif() {
    let searchWord = document.getElementById("gifs").value;
    let searchTerm = searchWord.trim().replace(/ /g, "+");
    let url = 'https://api.giphy.com/v1/gifs/search?api_key=wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb&q=' + searchTerm + '&limit=5&offset=0';
    let response = await fetch(url);
    let result = await response.json();
    for (let i = 0; i < result.length; i++) {
        $("#Find").append("<div>" + result[i] + "</div");
    }
}
button.addEventListener("click", SearchGif);