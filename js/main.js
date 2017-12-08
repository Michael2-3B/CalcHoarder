//build 12/8/17 1:57AM CST
var totalCalculators = document.getElementById("totalCalculators"),
    totalSellers = document.getElementById("totalSellers"),
    totalGeeks = document.getElementById("totalGeeks"),
    totalWizards = document.getElementById("totalWizards"),
    totalGurus = document.getElementById("totalGurus"),
    totalMartians = document.getElementById("totalMartians"),
    totalOverclockers = document.getElementById("totalOverclockers");
    
var button2 = document.getElementById("button2"),
    button3 = document.getElementById("button3"),
    button4 = document.getElementById("button4"),
    button5 = document.getElementById("button5"),
    button6 = document.getElementById("button6"),
    button7 = document.getElementById("button7"),
    perSecond = document.getElementById("perSecond");

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
    cPS = 0;

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
	if (calculators >= nextSeller && button2.style.visibility == 'hidden') {
		button2.style.visibility = 'visible';
	}
	if (calculators >= nextGeek && button3.style.visibility == 'hidden') {
		button3.style.visibility = 'visible';
	}
	if (calculators >= nextWizard && button4.style.visibility == 'hidden') {
		button4.style.visibility = 'visible';
	}
	if (calculators >= nextGuru && button5.style.visibility == 'hidden'){
		button5.style.visibility = 'visible';
	}
	if (calculators >= kermMartian && button6.style.visibility == 'hidden'){
		button6.style.visibility = 'visible';
	}
	if (calculators >= nextOverclock && button7.style.visibility == 'hidden'){
		button7.style.visibility = 'visible';
	}
}

function getAutoCalculators() {
	calculators += cPS/100;
	totalCalculators.innerHTML = Math.floor(calculators) + " Calculators";
	makeVisible();
}

function getSeller() {
	if (calculators >= nextSeller) {
		calculators -= nextSeller;
		sellers += 1;
		totalCalculators.innerHTML = calculators + " Calculators";
		totalSellers.style.visibility = 'visible';
		totalSellers.innerHTML = sellers + " Sellers";
		nextSeller *= 1.15;
		button2.innerHTML = "Get a Seller (" + Math.floor(nextSeller) + " Calculators)";
		cPS += sellerOutput * 100;
		perSecond.innerHTML = "(" + cPS.toFixed(1) + " calculators per second)";
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
		button3.innerHTML = "Befriend a Geek (" + Math.floor(nextGeek) + " Calculators)";
		cPS += geekOutput * 100;
		perSecond.innerHTML = "(" + cPS.toFixed(1) + " calculators per second)";
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
		button4.innerHTML = "Find a Wizard (" + Math.floor(nextWizard) + " Calculators)";
		cPS += wizardOutput * 100;
		perSecond.innerHTML = "(" + cPS.toFixed(1) + " calculators per second)";
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
		button5.innerHTML = "Harness Guru Power (" + Math.floor(nextGuru) + " Calculators)";
		cPS += guruOutput * 100;
		perSecond.innerHTML = "(" + cPS.toFixed(1) + " calculators per second)";
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
		button6.innerHTML = "Discover Martian Life (" + Math.floor(kermMartian) + " Calculators)";
		cPS += martianOutput * 100;
		perSecond.innerHTML = "(" + cPS.toFixed(1) + " calculators per second)";
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
		button7.innerHTML = "The Ultimate Overclocking. (" + Math.floor(nextOverclock) + " Calculators)";
		cPS += overclockOutput * 100;
		perSecond.innerHTML = "(" + cPS.toFixed(1) + " calculators per second)";
	}
}

window.onload = function () {
	setInterval('getAutoCalculators()', 10);
}
