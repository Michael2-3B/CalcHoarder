//build 12/8/17 10:29PM CST
var totalCalculators = document.getElementById("totalCalculators"),
    totalSellers = document.getElementById("totalSellers"),
    totalGeeks = document.getElementById("totalGeeks"),
    totalWizards = document.getElementById("totalWizards"),
    totalGurus = document.getElementById("totalGurus"),
    totalMartians = document.getElementById("totalMartians"),
    totalOverclockers = document.getElementById("totalOverclockers"),
    perSecond = document.getElementById("perSecond"),
    upgrade = document.getElementById("upgrade");
    
var button2 = document.getElementById("button2"),
    button3 = document.getElementById("button3"),
    button4 = document.getElementById("button4"),
    button5 = document.getElementById("button5"),
    button6 = document.getElementById("button6"),
    button7 = document.getElementById("button7");

var calculators = 0,
    sellers = 0,
    geeks = 0,
    wizards = 0,
    gurus = 0,
    martians = 0,
    overclocks = 0,
    nextSeller = 15,
    nextGeek = 100,
    nextWizard = 1000,
    nextGuru = 12000,
    kermMartian = 130000,
    nextOverclock = 1400000,
    nextUpgrade = nextSeller,
    cps = 0;

var sellerOutput = 0.001,
    geekOutput = 0.01,
    wizardOutput = 0.1,
    guruOutput = 1,
    martianOutput = 10,
    overclockOutput = 100;

function getCalculators() {
	calculators += 1;
	totalCalculators.innerHTML = Math.floor(calculators) + " Calculators";
	makeVisible();
}

function makeVisible(){
	if (calculators >= nextUpgrade){
		if (calculators >= nextSeller && button2.style.visibility == 'hidden') {
			button2.style.visibility = 'visible';
			nextUpgrade = nextGeek;
		}
		if (calculators >= nextGeek && button3.style.visibility == 'hidden') {
			button3.style.visibility = 'visible';
			nextUpgrade = nextWizard;
		}
		if (calculators >= nextWizard && button4.style.visibility == 'hidden') {
			button4.style.visibility = 'visible';
			nextUpgrade = nextGuru;
		}
		if (calculators >= nextGuru && button5.style.visibility == 'hidden'){
			button5.style.visibility = 'visible';
			nextUpgrade = kermMartian;
		}
		if (calculators >= kermMartian && button6.style.visibility == 'hidden'){
			button6.style.visibility = 'visible';
			nextUpgrade = nextOverclock;
		}
		if (calculators >= nextOverclock && button7.style.visibility == 'hidden'){
			button7.style.visibility = 'visible';
		}
		upgrade.innerHTML = "New feature at " + nextUpgrade + " calculators.";
	}
}

function getAutoCalculators() {
	calculators += cps/100;
	totalCalculators.innerHTML = Math.floor(calculators) + " Calculators";
	perSecond.innerHTML = "(" + cps.toFixed(1) + " calculators per second)";
	makeVisible();
	buttonChecker();
}

function getSeller() {
	if (calculators >= nextSeller) {
		calculators -= nextSeller;
		sellers += 1;
		totalCalculators.innerHTML = calculators + " Calculators";
		totalSellers.style.visibility = 'visible';
		totalSellers.innerHTML = sellers + " Sellers";
		nextSeller *= 1.15;
		button2.innerHTML = "Partner with a seller (+" + (sellerOutput * 100) + " cps)" + "<br>(" + Math.floor(nextSeller) + " Calculators)";
		cps += sellerOutput * 100;
	}
}

function befriendGeek() {
	if (calculators >= nextGeek) {
		calculators -= nextGeek;
		geeks += 1;
		totalCalculators.innerHTML = calculators + " Calculators";
		totalGeeks.style.visibility = 'visible';
		totalGeeks.innerHTML = geeks + " Geeks";
		nextGeek *= 1.15;
		button3.innerHTML = "Befriend a Geek (+" + (geekOutput * 100) + " cps)" + "<br>(" + Math.floor(nextGeek) + " Calculators)";
		cps += geekOutput * 100;
	}
}

function findWizard() {
	if (calculators >= nextWizard) {
		calculators -= nextWizard;
		wizards += 1;
		totalCalculators.innerHTML = calculators + " Calculators";
		totalWizards.style.visibility = 'visible';
		totalWizards.innerHTML = wizards + " Wizards";
		nextWizard *= 1.15;
		button4.innerHTML = "Find a Wizard (+" + (wizardOutput * 100) + " cps)" + "<br>(" + Math.floor(nextWizard) + " Calculators)";
		cps += wizardOutput * 100;
	}
}
    
function harnessGuruPower() {
	if (calculators >= nextGuru){
		calculators -= nextGuru;
		gurus += 1;
		totalCalculators.innerHTML = calculators + " Calculators";
		totalGurus.style.visibility = 'visible';
		totalGurus.innerHTML = gurus + " Gurus";
		nextGuru *= 1.15;
		button5.innerHTML = "Harness Guru Power (+" + (guruOutput * 100) + " cps)" + "<br>(" + Math.floor(nextGuru) + " Calculators)";
		cps += guruOutput * 100;
	}
}

function discoverMartians() {
	if (calculators >= kermMartian){
		calculators -= kermMartian;
		martians += 1;
		totalCalculators.innerHTML = calculators + " Calculators";
		totalMartians.style.visibility = 'visible';
		totalMartians.innerHTML = martians + " Martians";
		kermMartian *= 1.15;
		button6.innerHTML = "Discover Martian Life (+" + (martianOutput * 100) + " cps)" + "<br>(" + Math.floor(kermMartian) + " Calculators)";
		cps += martianOutput * 100;
	}
}
  
function ultimateOverclock() {
	if (calculators >= nextOverclock){
		calculators -= nextOverclock;
		overclocks += 1;
		totalCalculators.innerHTML = calculators + " Calculators";
		totalOverclockers.style.visibility = 'visible';
		totalOverclockers.innerHTML = overclocks + " Overclockers";
		nextOverclock *= 1.15;
		button7.innerHTML = "The Ultimate Overclocking. (+" + (overclockOutput * 100) + " cps)" + "<br>(" + Math.floor(nextOverclock) + " Calculators)";
		cps += overclockOutput * 100;
		perSecond.innerHTML = "(" + cps.toFixed(1) + " calculators per second)";
	}
}

window.onload = function () {
	setInterval('getAutoCalculators()', 10);
	setInterval('save()',30000);
	load();
}

function load() {
	if (localStorage.getItem("a")) {
	  //Format:
	//variable = Number(localStorage.getItem("variableName"));

	  calculators = Number(localStorage.getItem("calculators"));
    sellers = Number(localStorage.getItem("sellers"));
    geeks = Number(localStorage.getItem("geeks"));
    wizards = Number(localStorage.getItem("wizards"));
    gurus = Number(localStorage.getItem("gurus"));
    martians = Number(localStorage.getItem("martians"));
    overclocks = Number(localStorage.getItem("overclocks"));
    nextSeller = Number(localStorage.getItem("nextSeller"));
    nextGeek = Number(localStorage.getItem("nextGeek"));
    nextWizard = Number(localStorage.getItem("nextWizard"));
    nextGuru = Number(localStorage.getItem("nextGuru"));
    kermMartian = Number(localStorage.getItem("kermMartian"));
    nextOverclock = Number(localStorage.getItem("nextOverclock"));
    nextUpgrade = Number(localStorage.getItem("nextUpgrade"));
    cps = Number(localStorage.getItem("cps"));
    sellerOutput = Number(localStorage.getItem("sellerOutput"));
    geekOutput = Number(localStorage.getItem("geekOutput"));
    wizardOutput = Number(localStorage.getItem("wizardOutput"));
    guruOutput = Number(localStorage.getItem("guruOutput"));
    martianOutput = Number(localStorage.getItem("martianOutput"));
    overclockOutput = Number(localStorage.getItem("overclockOutput"));

    if (sellers != 0) {
			button2.style.visibility = 'visible';
			button2.innerHTML = "Partner with a seller (+" + (sellerOutput * 100) + " cps)" + "<br>(" + Math.floor(nextSeller) + " Calculators)";
			totalSellers.style.visibility = 'visible';
			totalSellers.innerHTML = sellers + " Sellers";
		}
		if (geeks != 0) {
			button3.style.visibility = 'visible';
			button3.innerHTML = "Befriend a Geek (+" + (geekOutput * 100) + " cps)" + "<br>(" + Math.floor(nextGeek) + " Calculators)";
			totalGeeks.style.visibility = 'visible';
			totalGeeks.innerHTML = geeks + " Geeks";
		}
		if (wizards != 0) {
			button4.style.visibility = 'visible';
			button4.innerHTML = "Find a Wizard (+" + (wizardOutput * 100) + " cps)" + "<br>(" + Math.floor(nextWizard) + " Calculators)";
			totalWizards.style.visibility = 'visible';
			totalWizards.innerHTML = wizards + " Wizards";
		}
		if (gurus != 0){
			button5.style.visibility = 'visible';
			button5.innerHTML = "Harness Guru Power (+" + (guruOutput * 100) + " cps)" + "<br>(" + Math.floor(nextGuru) + " Calculators)";
			totalGurus.style.visibility = 'visible';
			totalGurus.innerHTML = gurus + " Gurus";
		}
		if (martians != 0){
			button6.style.visibility = 'visible';
			button6.innerHTML = "Discover Martian Life (+" + (martianOutput * 100) + " cps)" + "<br>(" + Math.floor(kermMartian) + " Calculators)";
			totalMartians.style.visibility = 'visible';
			totalMartians.innerHTML = martians + " Martians";
		}
		if (overclocks != 0){
			button7.style.visibility = 'visible';
			button7.innerHTML = "The Ultimate Overclocking. (+" + (overclockOutput * 100) + " cps)" + "<br>(" + Math.floor(nextOverclock) + " Calculators)";
			totalOverclockers.style.visibility = 'visible';
			totalOverclockers.innerHTML = overclocks + " Overclockers";
		}
		upgrade.innerHTML = "New feature at " + nextUpgrade + " calculators.";
  }
  else
  {
  	save();
  }
}

function save() {
		//dummy variable, for recall later. Checks if the site has been visited before, aka there's a save.
		localStorage.setItem("a",1);
		//Format:
	//localStorage.setItem("variableName",variable)
		localStorage.setItem("calculators",calculators);
    localStorage.setItem("sellers",sellers);
    localStorage.setItem("geeks",geeks);
    localStorage.setItem("wizards",wizards);
    localStorage.setItem("gurus",gurus);
    localStorage.setItem("martians",martians);
    localStorage.setItem("overclocks",overclocks);
    localStorage.setItem("nextSeller",nextSeller);
    localStorage.setItem("nextGeek",nextGeek);
    localStorage.setItem("nextWizard",nextWizard);
    localStorage.setItem("nextGuru",nextGuru);
    localStorage.setItem("kermMartian",kermMartian);
    localStorage.setItem("nextOverclock",nextOverclock);
    localStorage.setItem("nextUpgrade",nextUpgrade);
    localStorage.setItem("cps",cps);
		localStorage.setItem("sellerOutput",sellerOutput);
    localStorage.setItem("geekOutput",geekOutput);
    localStorage.setItem("wizardOutput",wizardOutput);
    localStorage.setItem("guruOutput",guruOutput);
    localStorage.setItem("martianOutput",martianOutput);
    localStorage.setItem("overclockOutput",overclockOutput);
    var n1 = document.createElement("P");
    n1.appendChild(document.createTextNode("Game Auto-Saved."));
		document.getElementById("messages").appendChild(n1);
		setTimeout(function() {document.getElementById('messages').children[0].remove()}, 5000);
}

function buttonChecker() {
	button2.disabled = !(calculators >= nextSeller);
	button3.disabled = !(calculators >= nextGeek);
	button4.disabled = !(calculators >= nextWizard);
	button5.disabled = !(calculators >= nextGuru);
	button6.disabled = !(calculators >= kermMartian);
	button7.disabled = !(calculators >= nextOverclock);
}


