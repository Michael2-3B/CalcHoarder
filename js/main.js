var totalCalculators = document.getElementById("totalCalculators");
var totalSellers = document.getElementById("totalSellers");
var totalGeeks = document.getElementById("totalGeeks");
var totalWizards = document.getElementById("totalWizards");
var totalGurus = document.getElementById("totalGurus");
var totalMartians = document.getElementById("totalMartians");
var totalOverclockers = document.getElementById("totalOverclockers");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var perSecond = document.getElementById("perSecond");

var calculators = 0;
var sellers = 0;
var geeks = 0;
var wizards = 0;
var gurus = 0;
var martians = 0;
var overclocks = 0;
var nextSeller = 25;
var nextGeek = 100;
var nextWizard = 500;
var nextGuru = 2500;
var kermMartian = 10000;
var nextOverclock = 100000;
var calculatorsPerSecond = 0;

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
    button7.style.visibilty = 'visible';
  }
}

function getAutoCalculators() {
  calculators += (0.002 * sellers) + (0.01 * geeks) + (0.1 * wizards) + (1 * gurus) + (10 * martians) + (100 * overclocks);
  totalCalculators.innerHTML = Math.floor(calculators) + " Calculators";
  makeVisibile();
  calculatorsPerSecond = (sellers / 5) + geeks + (wizards * 10) + (gurus * 100) + (martians * 1000) + (overclocks * 10000);
  perSecond.innerHTML = "(" + calculatorsPerSecond + " Calculators per second)";
}

function getSeller() {
  if (calculators >= nextSeller) {
    calculators -= nextSeller;
    sellers += 1;
    totalCalculators.innerHTML = calculators + " Calculators";
    totalSellers.style.visibility = 'visible';
    totalSellers.innerHTML = sellers + " Sellers";
    nextSeller += 1.25 * sellers;
    button2.innerHTML = "Get a Seller (" + Math.floor(nextSeller) + " Calculators)";
    calculatorsPerSecond += 0.2;
    perSecond.innerHTML = "(" + calculatorsPerSecond + " Calculators per second)";
  }
}

function befriendGeek() {
  if (calculators >= nextGeek) {
    calculators -= nextGeek;
    geeks += 1;
    totalCalculators.innerHTML = calculators + " Calculators";
    totalGeeks.style.visibility = 'visible';
    totalGeeks.innerHTML = geeks + " Geeks";
    nextGeek += 1.5 * geeks;
    button3.innerHTML = "Befriend a Geek (" + Math.floor(nextGeek) + " Calculators)";
  }
}

function findWizard() {
  if (calculators >= nextWizard) {
    calculators -= nextWizard;
    wizards += 1;
    totalCalculators.innerHTML = calculators + " Calculators";
    totalWizards.style.visibility = 'visible';
    totalWizards.innerHTML = wizards + " Wizards";
    nextWizard += 1.75 * wizards;
    button4.innerHTML = "Find a Wizard (" + Math.floor(nextWizard) + " Calculators)";
  }
  
  function harnessGuruPower(){
    if (calculators >= nextGuru){
      calculators -= nextGuru;
      gurus += 1;
      totalCalculators.innerHTML = calculators + " Calculators";
      totalGurus.style.visibility = 'visible';
      totalGurus.innerHTML = gurus + " Gurus";
      nextGuru += 2 * gurus;
      button5.innerHTML = "Harness Guru Power (" + Math.floor(nextGuru) + " Calculators)";
    }
  }
  
  function discoverMartians(){
    if (calculators >= kermMartian){
      calculators -= kermMartian;
      martians += 1;
      totalCalculators.innerHTML = calculators + " Calculators";
      totalMartians.style.visibility = 'visible';
      totalMartians.innerHTML = martians + " Martians";
      kermMartian += 2.25 * martians;
      button6.innerHTML = "Discover Martian Life (" + Math.floor(kermMartian) + " Calculators)";
    }
  }
  
  function ultimateOverclock(){
    if (calculators >= nextOverclock){
      calculators -= nextOverclock;
      overclocks += 1;
      totalCalculators.innerHTML = calculators + " Calculators";
      totalOverclockers.style.visibility = 'visible';
      totalOverclockers.innerHTML = overclocks + " Overclockers";
      nextOverclock += 3 * overclocks;
      button7.innerHTML = "The Ultimate Overclocking. (" + Math.floor(nextOverclock) + " Calculators)";
    }
  }

}

window.onload = function () {
  setInterval('getAutoCalculators()', 10);
}
