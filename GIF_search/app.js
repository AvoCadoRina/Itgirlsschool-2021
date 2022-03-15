var button = document.getElementById("Search");

function SearchGif() {
    let searchWord = document.getElementById("gifs").value;
    $("#Find").append("<a href=\"https://api.giphy.com/v1/gifs/search?api_key=e09RMy99QnReIE2de9gcvTYC6FhYev4O&q=" + searchWord + "&limit=5&offset=0&rating=g&lang=en\"> Показать результаты </a>");
};

button.addEventListener("click", SearchGif);