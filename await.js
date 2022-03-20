(async() => {
    let userName = document.getElementById('UserName').value;
    let response = await fetch('https://api.github.com/users/${userName}')
    if (response.ok) {
        let json = await response.json();
    } else {
        alert("Такого пользователя не существует");
    }
})();