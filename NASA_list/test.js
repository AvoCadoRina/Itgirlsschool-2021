function getdata() {
    fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY', {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
        .then(function(res) {
            console.log(res);
            let newdata = res.near_earth_objects["2015-09-08"];
            let person = JSON.parse('newdata');
            $("#nasa").append("<div>" + person.name + "</div")
        });
}

window.addEventListener('load', getdata);