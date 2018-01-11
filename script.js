function Phone(brand, price, color) {
    this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");

	var addDiv = document.createElement('div');
	addDiv.innerHTML += "The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." ;
	document.getElementsByClassName('phones')[0].appendChild(addDiv);
}
var SamsungGalaxyS6 = new Phone("Samsung", 2000, "black");
var iPhone6S = new Phone("Apple", 2250, "silver");
var OnePlusOne = new Phone("OnePlus", 1900, "black");
SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();


