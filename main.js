var lire = 0;

function lireClick(number){
    lire = lire + number;
    document.getElementById("lire").innerHTML = lire;
};

document.getElementById('lire').innerHTML = prettify(lire);

var picciotti = 0;

function buyPic(){
    var PicCost = Math.floor(25 * Math.pow(1.1,picciotti));     //works out the cost of this unit
    if(lire >= PicCost){                                   //checks that the player can afford the unit
        picciotti = picciotti + 1;                                   //increases number of units
    	lire = lire - PicCost;                          //removes the currency spent
        document.getElementById('picciotti').innerHTML = picciotti;  //updates the number of units for the user
        document.getElementById('lire').innerHTML = lire;  //updates the number of currency for the user
    };
    var nextCost = Math.floor(25 * Math.pow(1.1,picciotti));       //works out the cost of the next unit
    document.getElementById('PicCost').innerHTML = nextCost;  //updates the unit cost for the user
};

window.setInterval(function(){
	
	lireClick(picciotti);
	
}, 1000);


var soldatos = 0;

function buySol(){
    var SolCost = Math.floor(100 * Math.pow(1.1,soldatos));     //works out the cost of this unit
    if(lire >= SolCost){                                   //checks that the player can afford the unit
        soldatos = soldatos + 1;                                   //increases number of units
    	lire = lire - SolCost;                          //removes the currency spent	`
        document.getElementById('soldatos').innerHTML = soldatos;  //updates the number of units for the user
        document.getElementById('lire').innerHTML = lire;  //updates the number of currency for the user
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,soldatos));       //works out the cost of the next unit
    document.getElementById('SolCost').innerHTML = nextCost;  //updates the unit cost for the user
};

window.setInterval(function(){
	
	lireClick(soldatos);
	
}, 200);

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}


	