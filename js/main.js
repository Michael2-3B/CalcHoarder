var autoSaveIntervalID,
		saveControlPanelVisible = false;

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
	totalCalculators.innerHTML = format(calculators, 0, "Calculator");
	makeVisible();
}

function makeVisible(){
	if (calculators >= nextUpgrade && button7.style.visiblity == 'hidden'){
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
		upgrade.innerHTML = "New feature at " + nextUpgrade + " calculators.";
		if (calculators >= nextOverclock && button7.style.visibility == 'hidden'){
			button7.style.visibility = 'visible';
			upgrade.innerHTML = "All features unlocked.";
		}
	}
}

function getAutoCalculators() {
	calculators += cps/100;
	totalCalculators.innerHTML = format(calculators, 0, "Calculator");
	perSecond.innerHTML = "(" + format(cps, 1, "calculator", true) + " per second)";
	window.document.title = format(calculators, 0, "calc", true) + " | Calculator Hoarder"
	makeVisible();
	buttonChecker();
}

function getSeller() {
	if (calculators >= nextSeller) {
		calculators -= nextSeller;
		sellers += 1;
		totalCalculators.innerHTML = format(calculators, 0, "Calculator");
		totalSellers.style.visibility = 'visible';
		totalSellers.innerHTML = format(sellers, 0, "Seller");
		nextSeller *= 1.1;
		button2.innerHTML = "Partner with a seller (+" + (sellerOutput * 100) + " cps)" + "<br>(" + format(nextSeller, 0, "Calculator") + ")";
		cps += sellerOutput * 100;
	}
}

function befriendGeek() {
	if (calculators >= nextGeek) {
		calculators -= nextGeek;
		geeks += 1;
		totalCalculators.innerHTML = format(calculators, 0, "Calculator");
		totalGeeks.style.visibility = 'visible';
		totalGeeks.innerHTML = format(geeks, 0, "Geek");
		nextGeek *= 1.15;
		button3.innerHTML = "Befriend a Geek (+" + (geekOutput * 100) + " cps)" + "<br>(" + format(nextGeek, 0, "Calculator") + ")";
		cps += geekOutput * 100;
	}
}

function findWizard() {
	if (calculators >= nextWizard) {
		calculators -= nextWizard;
		wizards += 1;
		totalCalculators.innerHTML = format(calculators, 0, "Calculator");
		totalWizards.style.visibility = 'visible';
		totalWizards.innerHTML = format(wizards, 0, "Wizard");
		nextWizard *= 1.2;
		button4.innerHTML = "Find a Wizard (+" + (wizardOutput * 100) + " cps)" + "<br>(" + format(nextWizard, 0, "Calculator") + ")";
		cps += wizardOutput * 100;
	}
}
    
function harnessGuruPower() {
	if (calculators >= nextGuru){
		calculators -= nextGuru;
		gurus += 1;
		totalCalculators.innerHTML = format(calculators, 0, "Calculator");
		totalGurus.style.visibility = 'visible';
		totalGurus.innerHTML = format(gurus, 0, "Guru");
		nextGuru *= 1.3;
		button5.innerHTML = "Harness Guru Power (+" + (guruOutput * 100) + " cps)" + "<br>(" + format(nextGuru, 0, "Calculator") + ")";
		cps += guruOutput * 100;
	}
}

function discoverMartians() {
	if (calculators >= kermMartian){
		calculators -= kermMartian;
		martians += 1;
		totalCalculators.innerHTML = format(calculators, 0, "Calculator");
		totalMartians.style.visibility = 'visible';
		totalMartians.innerHTML = format(martians, 0, "Martian");
		kermMartian *= 1.35;
		button6.innerHTML = "Discover Martian Life (+" + (martianOutput * 100) + " cps)" + "<br>(" + format(kermMartian, 0, "Calculator") + ")";
		cps += martianOutput * 100;
	}
}
  
function ultimateOverclock() {
	if (calculators >= nextOverclock){
		calculators -= nextOverclock;
		overclocks += 1;
		totalCalculators.innerHTML = format(calculators, 0, "Calculator");
		totalOverclockers.style.visibility = 'visible';
		totalOverclockers.innerHTML = format(overclocks, 0, "Overclocker");
		nextOverclock *= 1.4;
		button7.innerHTML = "The Ultimate Overclocking. (+" + (overclockOutput * 100) + " cps)" + "<br>(" + format(nextOverclock, 0, "Calculator") + ")";
		cps += overclockOutput * 100;
	}
}

window.onload = function () {
	setInterval('getAutoCalculators()', 10);
	autoSaveIntervalID = setInterval('save()',30000);
	load();
}

function resetSave() {
	if (confirm("Are you sure you want to reset your save?\nThis cannot be undone"))
	{
		localStorage.removeItem("a");
		location.reload();
	}
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
			button2.innerHTML = "Partner with a seller (+" + (sellerOutput * 100) + " cps)" + "<br>(" + format(nextSeller, 0, "Calculator") + ")";
			totalSellers.style.visibility = 'visible';
			totalSellers.innerHTML = sellers + " Sellers";
		}
		if (geeks != 0) {
			button3.style.visibility = 'visible';
			button3.innerHTML = "Befriend a Geek (+" + (geekOutput * 100) + " cps)" + "<br>(" + format(nextGeek, 0, "Calculator") + ")";
			totalGeeks.style.visibility = 'visible';
			totalGeeks.innerHTML = geeks + " Geeks";
		}
		if (wizards != 0) {
			button4.style.visibility = 'visible';
			button4.innerHTML = "Find a Wizard (+" + (wizardOutput * 100) + " cps)" + "<br>(" + format(nextWizard, 0, "Calculator") + ")";
			totalWizards.style.visibility = 'visible';
			totalWizards.innerHTML = wizards + " Wizards";
		}
		if (gurus != 0){
			button5.style.visibility = 'visible';
			button5.innerHTML = "Harness Guru Power (+" + (guruOutput * 100) + " cps)" + "<br>(" + format(nextGuru, 0, "Calculator") + ")";
			totalGurus.style.visibility = 'visible';
			totalGurus.innerHTML = gurus + " Gurus";
		}
		if (martians != 0){
			button6.style.visibility = 'visible';
			button6.innerHTML = "Discover Martian Life (+" + (martianOutput * 100) + " cps)" + "<br>(" + format(kermMartian, 0, "Calculator") + ")";
			totalMartians.style.visibility = 'visible';
			totalMartians.innerHTML = martians + " Martians";
		}
		if (overclocks != 0){
			button7.style.visibility = 'visible';
			button7.innerHTML = "The Ultimate Overclocking. (+" + (overclockOutput * 100) + " cps)" + "<br>(" + format(nextOverclock, 0, "Calculator") + ")";
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
    n1.appendChild(document.createTextNode("Game Saved."));
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

function toggleAutoSave() {
	var button = document.getElementById("toggleAutoSave");
	if (autoSaveIntervalID)
	{
		clearInterval(autoSaveIntervalID);
		button.innerText = "Toggle Auto-Saving (Currently OFF)";
		button.className = "off";
		autoSaveIntervalID = null;
	}
	else
	{
		autoSaveIntervalID = setInterval('save()',30000);
		button.innerText = "Toggle Auto-Saving (Currently ON)";
		button.className = "on";
	}
}

function toggleSaveControlPanel() {
	var saveControlPanel = document.getElementById("saveControlPanel");
	if (saveControlPanelVisible) {
		saveControlPanel.style = "display: none; visibility: hidden;";
	}
	else
	{
		saveControlPanel.style = "display: block;";
	}
	saveControlPanelVisible = !saveControlPanelVisible;
}


/*
I (_iPhoenix_) am crazy proud of this function.

Syntax:
	value is the value you want to format
	numDecimals is the number of decimals you want to round to (to imitate Math.floor, make this 0.)
	unit is the unit you want to use.
	showTrailingZeros is optional, use it if you want to show trailing zeros. Defaults to false.

Here are some usage examples:
	format(12.25, 0, "pig") -> "12 pigs"
	format(3.141592, 3, "unit") -> "3.141 units"
	format(0.99, 0, "thing") -> "1 thing"
	format(2, 5, "thing") -> "2 things"
	format(2, 5, "thing", true) -> "2.00000 things"
*/
function format(value, numDecimals, unit, showTrailingZeros) {
	value = (showTrailingZeros) ? value.toFixed(numDecimals) : parseFloat(value.toFixed(numDecimals));
	var formattedValue = value + ' ' + ((value != 1) ? unit + 's' : unit);

	return formattedValue;
}
