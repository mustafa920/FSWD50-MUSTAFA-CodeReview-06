class res  {
	city:"";
	image:"";
	ZIP_code:"";
	address:"";
	reservation:"";
	link:"";
	time:"";
	phone:"";
	

	
constructor(city,image,ZIP_code,address,reservation,link,time,phone) {
	this.city = city;
	this.image = image;
	this.ZIP_code = ZIP_code;
	this.address = address;
	this.reservation = reservation;
	this.link = link ; 
	this.time= time;
	this.phone=phone;
	}
show2(){
	return `
	
		<div class='col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12'>
            <h1 id="h1">${this.city}</h1>
            <img id='img' src='${this.image}'>
            <p id="paro">
            place : ${this.address}. <br> 
            ZIP_code :${this.ZIP_code} .<br> 
            VIP reservation :${this.reservation}$ extra pay .<br>
            visit us :<a href='${this.link}'>${this.link}<a/> .<br>
            open : from 8 am till ${this.time}.<br>
            Tel :<a href="${this.phone}">${this.phone} .</a><br>
            <p id="call"></p>
            </p>
            </div>
        
			`
}
}
var restaurant = new res("Royal","https://www.wien.info/media/images/41993-das-loft-sofitel-so-vienna-19to1.jpeg","Schönbrunner Schloßstraße 47","1130 Wien",17,"https://www.schoenbrunn.at/","20 pm","03558879756");
var restaurant1 = new res("Wien","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEeLtyB9MeW2BvJ5t54mJ4dndy0GVg-LWxCpjF0WbOlXAYWIpU","Wien Museum 8"," 1040 Wien",10,"https://www.wienmuseum.at/","20 pm","03558879756");
var restaurant2 = new res("Pizza","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczBYuonsTHeXwTO3Y1XL95xfpAbIUsVT2idyvlKSLRBl1YPv_","Prinz Eugen-Straße 27","1030 Wien",10,"https://www.belvedere.at/de","15 pm","03558879756");
var restaurant3 = new res("Cave","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7eZQfpnaPf8znjonbxVYTtOe0UDuNlY8cSta3bH_1YP2PIsY","Albertinaplatz 1","1010 Wien",17,"https://www.albertina.at/","21 pm","03558879756");
var restaurant4 = new res("Royal","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswXjybKedDv-DjnyTN_h-OH7wK2obfC9jipavhtSeY1Ucr80l","Schönbrunner Schloßstraße 47","1130 Wien",17,"https://www.schoenbrunn.at/","20 pm","03558879756");
var restaurant5 = new res("Nodel ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bgtzXsv5_VLhpFOL0gXVutAyB9JWn-l_z0RAovKLxDmInTirPw","Wien Museum 8"," 1040 Wien",10,"https://www.wienmuseum.at/","19 pm","03558879756");
var restaurant6 = new res("China","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafkCGbeJhPsOWVnS9ofJeg6-9NqGzOhREqNE0Zp5iKZCCKxpgiw","Prinz Eugen-Straße 27","1030 Wien",10,"https://www.belvedere.at/de","15 pm","03558879756");
var restaurant7 = new res("Rice","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62J33Y_DMjmgYhZ9ejM5tOfPk8T5uX3D1yrLnZQHRY7M05Ydq","Albertinaplatz 1","1010 Wien",17,"https://www.albertina.at/","20 pm","03558879756");
var restaurant8 = new res("Royal","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLS-pT-OscgqUh6dByU4nfqMzJS-TtKm31leYKkv3TVwrjnjw","Schönbrunner Schloßstraße 47","1130 Wien",17,"https://www.schoenbrunn.at/","18 pm","03558879756");
var restaurant9 = new res("Paper ","https://media-cdn.tripadvisor.com/media/photo-s/04/c2/52/53/ganges-indian-restaurant.jpg","Wien Museum 8"," 1040 Wien",10,"https://www.wienmuseum.at/","20 pm","03558879756");
var restaurant10 = new res("Green","https://nebula.wsimg.com/dc0ad0517a71eade6e09c4dc66661ad8?AccessKeyId=1E21AAB2BFD4C529EDD5&disposition=0&alloworigin=1","Prinz Eugen-Straße 27","1030 Wien",10,"https://www.belvedere.at/de","15 pm","03558879756");
var restaurant11 = new res("Dance","https://media-cdn.tripadvisor.com/media/photo-s/0b/63/b0/70/widely-enjoyed-in-tbilisi.jpg","Albertinaplatz 1","1010 Wien",17,"https://www.albertina.at/","20 pm","03558879756");
document.getElementById('restaurant').innerHTML+=restaurant.show2();
document.getElementById('restaurant').innerHTML+=restaurant1.show2();
document.getElementById('restaurant').innerHTML+=restaurant2.show2();
document.getElementById('restaurant').innerHTML+=restaurant3.show2();

document.getElementById('restaurant1').innerHTML+=restaurant4.show2();
document.getElementById('restaurant1').innerHTML+=restaurant5.show2();
document.getElementById('restaurant1').innerHTML+=restaurant6.show2();
document.getElementById('restaurant1').innerHTML+=restaurant7.show2();

document.getElementById('restaurant2').innerHTML+=restaurant8.show2();
document.getElementById('restaurant2').innerHTML+=restaurant9.show2();
document.getElementById('restaurant2').innerHTML+=restaurant10.show2();
document.getElementById('restaurant2').innerHTML+=restaurant11.show2();