//NOT AT ALL TO REMEMBER ANY OF THIS CODE!

const req = new XMLHttpRequest();

req.onload = function () {
    console.log('IT LOAD!!');
    const data = JSON.parse(this.responseText)
    console.log(data);
    console.log(data.name, data.height);
    // console.log(this.responseText);
};

req.onerror = function () {
    console.log('ERROR!!');
    console.log(this);
}

// req.open("GET","http://goweather.xyz/weather/Mumbai");
req.open("GET", "https://swapi.dev/api/");
req.send();