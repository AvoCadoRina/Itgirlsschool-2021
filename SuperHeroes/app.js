let button = document.getElementById("button");

function heroesApp() {
    $.getJSON('heroes.json', function(data) {
        var scores = [1, 2, 3, 4, 5];
        for (var j = 0; j < 5; j++) {}
        $.each(data.superheroes, function(i, f) {
            $("#Superhero").append("<div class=\"alldata\">" + "<img src=" + f.Photo + " >" + "<h2>" + "Имя: " + f.name + "</h2>" + "<select id=" + f.name + ">" + "<option value=\"1\">" + scores[0] + "</option>" + "<option value=\"2\">" + scores[1] + "</option>" + "<option value=\"3\">" + scores[2] + "</option>" + "<option value=\"4\">" + scores[3] + "</option>" + "<option value=\"5\">" + scores[4] + "</option>" + "</select>" + "<p>" + "Вселенная: " + f.world + "</p>" + "<p>" + "Альтер-эго: " + f.alter_ego + "</p>" + "<p>" + "Род деятельности: " + f.work + "</p>" + "<p>" + "Друзья: " + f.friends + "</p>" + "<p>" + "Супер способности: " + f.SuperPower + "</p>" + "<p>" + f.AddInfo + "</p>" + "</div>")
        });
    });
};
window.addEventListener('load', heroesApp);

function fff() {
    var selects = document.querySelectorAll('select');
    for (var i = 0; i < selects.length; i++) {
        let j = selects[i];


        let value = j.options[j.selectedIndex].text;
        localStorage.setItem(j.id, value);
    };
};

button.addEventListener('click', fff);