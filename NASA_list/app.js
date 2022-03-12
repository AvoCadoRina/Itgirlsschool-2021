let jsondata;
fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY').then(
    function(u) { return u.json(); }
).then(
    function(json) {
        jsondata = json.near_earth_objects["2015-09-07"];
        console.log(jsondata)
        for (let i = 0; i < jsondata.length; i++) {
            $("#nasa").append("<div>" + jsondata[i].name + "<img src=" + jsondata[i].nasa_jpl_url + ">" + "</div");
        }
    }
)