class place  {
	city:"";
	image:"";
	ZIP_code:"";
	address:"";
	price:"";
	link:"";
	time:"";
	phone:"";
	

	
constructor(city,image,ZIP_code,address,price,link,time,phone) {
	this.city = city;
	this.image = image;
	this.ZIP_code = ZIP_code;
	this.address = address;
	this.price = price;
	this.link = link ; 
	this.time= time;
	this.phone=phone;
	}
show(){
	return `
	
		<div class='col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12'>
            <h1 id="h1">${this.city}</h1>
            <img id='img' src='${this.image}'>
            <p id="par">
            place : ${this.address}. <br> 
            ZIP_code :${this.ZIP_code} .<br> 
            price :${this.price} Euro .<br>
            visit us :<a href='${this.link}'>${this.link}<a/> .<br>
            open : from 8 am till ${this.time}.<br>
            Tel :<a href="${this.phone}">${this.phone} .</a><br>
            <button id="btn">read more</button>
            </p>
            </div>
        
			`
}
}
var placee = new place("schoenbrunn","https://cache-graphicslib.viator.com/graphicslib/destination/innsbruck-133179.jpg","Schönbrunner Schloßstraße 47","1130 Wien",17,"https://www.schoenbrunn.at/","20 pm","03558879756");
var placee1 = new place("Wien Museum","https://cdn.pixabay.com/photo/2016/11/13/21/46/vienna-1822138_960_720.jpg","Wien Museum 8"," 1040 Wien",10,"https://www.wienmuseum.at/","20 pm","03558879756");
var placee2 = new place("Belvedere","https://www.belvedere.at/jart/prj3/belvedere/images/cache/fe5bfeacc1478eabf35c925a9f134616/0xDDD33B0F8102FDDD360914E3F591904A.jpeg","Prinz Eugen-Straße 27","1030 Wien",10,"https://www.belvedere.at/de","15 pm","03558879756");
var placee3 = new place("Albertina","https://upload.wikimedia.org/wikipedia/commons/f/f8/Albertina1.JPG","Albertinaplatz 1","1010 Wien",17,"https://www.albertina.at/","20 pm","03558879756");
var placee4 = new place("schoenbrunn","https://www.globalgrasshopper.com/wp-content/uploads/2013/04/Hallstatt.jpg","Schönbrunner Schloßstraße 47","1130 Wien",17,"https://www.schoenbrunn.at/","20 pm","03558879756");
var placee5 = new place("Wien Museum","http://www.karwendel-holidays-alps.com/typo3temp/pics/8a966bbd6d.jpg","Wien Museum 8"," 1040 Wien",10,"https://www.wienmuseum.at/","20 pm","03558879756");
var placee6 = new place("Belvedere","https://data.whicdn.com/images/108190467/large.jpg","Prinz Eugen-Straße 27","1030 Wien",10,"https://www.belvedere.at/de","15 pm","03558879756");
var placee7 = new place("Albertina","https://thumbs.dreamstime.com/z/innsbruck-places-austria-tirol-mariahilf-strasse-colored-houses-inn-river-snowy-mountains-background-67850282.jpg","Albertinaplatz 1","1010 Wien",17,"https://www.albertina.at/","20 pm","03558879756");
var arr =[placee,placee1,placee2,placee3,placee4,placee5,placee6,placee7];
for (var placee of arr) {
document.getElementById('place2').innerHTML+=placee.show();
}

