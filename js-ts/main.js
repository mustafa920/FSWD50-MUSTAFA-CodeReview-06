class location1 {
    constructor(image, ZIP_code, address, site) {
        this.image = image;
        this.ZIP_code = ZIP_code;
        this.address = address;
        this.site = site;
    }
    render() {
        return `<div class='col-md-4 col-xs-6 wow fadeOut'>
                        <a href='place.html' class='thumbnail'> <img class='img' alt='100%x180' style='height: 180px; width: 100%; 
                        display: block;'
                         src='${this.image}'></a>
                         <h4 id='h4'>Places</h4>
                         <p>zip-code : ${this.ZIP_code}<br>
                          address : ${this.address}<br>
                          site : <a href='${this.site}'> ${this.site}</a><br>
                         </p></div>
                    `;
    }
}
var firstone = new location1("https://cdn.pixabay.com/photo/2015/05/05/17/56/vancouver-754204__340.jpg", "1020", "vienna", "http://www.codefactory.wien/");
var secondone = new location1("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbPRE7Ajgf4PEEuugOFw02etd3m4ynTgpFopi8XeORugrVQ7v", "7655", "linz", "http://www.codefactory.wien/");
var thirdone = new location1("https://i.ytimg.com/vi/pEZI23xHkf8/maxresdefault.jpg", "1010", "dounau", "http://www.codefactory.wien/");
var ar11 = [firstone, secondone, thirdone];
for (var x of ar11) {
    document.getElementById('demo00').innerHTML += x.render();
}
class eventlocation extends location1 {
    constructor(image, ZIP_code, address, site, time, date) {
        super(image, ZIP_code, address, site);
        this.time = time;
        this.date = date;
    }
    again() {
        return `<div class='col-md-4 col-xs-6 wow fadeIn'>
                        <a href='event.html' class='thumbnail'> <img class='img' alt='100%x180' style='height: 180px; width: 100%; 
                        display: block;'
                         src='${this.image}'></a>
                         <h4 id='h4'>Events</h4>
                         <p>zip-code : ${this.ZIP_code}<br>
                          address : ${this.address}<br>
                          site : <a href='${this.site}'> ${this.site}</a><br>
                          time : ${this.time}<br>
                          date : ${this.date}
                         </p></div>`;
    }
}
var firstone1 = new eventlocation("https://media-cdn.tripadvisor.com/media/photo-s/09/b5/96/88/travel-shack-vienna.jpg", "1110", "simmring", "http://www.codefactory.wien/", "at 15h", "sun-18-2018");
var secondone2 = new eventlocation("https://pbs.twimg.com/media/DCUTpn4WsAAvjQH.jpg", "1030", "prater", "http://www.codefactory.wien/", "at 20h", "sat-11-2018");
var thirdone3 = new eventlocation("https://i.guim.co.uk/img/static/sys-images/Observer/Pix/pictures/2012/12/17/1355744079726/Christmas-in-Vienna-008.jpg?width=700&quality=85&auto=format&fit=max&s=cd2a9fcb1e225be3c54cf3e85d426ae4", "1040", "taubstummen gasse", "http://www.codefactory.wien/", "at 18h", "sat-12-2018");
var ar111 = [firstone1, secondone2, thirdone3];
for (var m of ar111) {
    document.getElementById('demo00').innerHTML += m.again();
}
class restaurantlocation extends location1 {
    constructor(image, ZIP_code, address, site, reservation) {
        super(image, ZIP_code, address, site);
        this.reservation = reservation;
    }
    printed() {
        return `<div class='col-md-4 col-xs-6 wow fadeOut'>
                        <a href='resturant.html' class='thumbnail'> <img class='img' alt='100%x180' style='height: 180px; width: 100%; 
                        display: block;'
                         src='${this.image}'></a>
                         <h4 id='h4'>Restaurant</h4>
                         <p>zip-code : ${this.ZIP_code}<br>
                          address : ${this.address}<br>
                          site : <a href='${this.site}'> ${this.site}</a><br>
                          reservation : ${this.reservation}<br>
                          
                         </p></div>`;
    }
}
var firstone11 = new restaurantlocation("https://images.indianexpress.com/2016/07/taj-7591.jpg", "1120", "karles platz", "http://www.codefactory.wien/", "able");
var secondone22 = new restaurantlocation("https://1000things-4xggq8fkph.netdna-ssl.com/wp-content/uploads/57-Restaurant-Lounge-fbook-2000x1333.jpg", "1100", "Raumen platz", "http://www.codefactory.wien/", "not able");
var thirdone33 = new restaurantlocation("https://media-cdn.tripadvisor.com/media/photo-s/02/c4/72/96/new-peking-duck-chinese.jpg", "1020", "schweden platz", "http://www.codefactory.wien/", "able");
var ar1111 = [firstone11, secondone22, thirdone33];
for (var mm of ar1111) {
    document.getElementById('demo00').innerHTML += mm.printed();
}
