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
    nextSeller = 25,
    nextGeek = 100,
    nextWizard = 500,
    nextGuru = 2500,
    kermMartian = 10000,
    nextOverclock = 100000,
    calculatorsPerSecond = 0;

var sellerOutput = 0.002,
    geekOutput = 0.01,
    wizardOuput = 0.1,
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
    button7.style.visibilty = 'visible';
  }
}

function getAutoCalculators() {
  calculators += (sellerOutput * sellers) + (geekOutput * geeks) + (wizardOutput * wizards) + (guruOutput * gurus) + (martianOutput * martians) + (overclockOutput * overclocks);
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
    nextSeller += 1.25 * sellers;
    button2.innerHTML = "Get a Seller (" + Math.floor(nextSeller) + " Calculators)";
    calculatorsPerSecond += sellerOutput;
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
    calculatorsPerSecond += geekOutput;
    perSecond.innerHTML = "(" + calculatorsPerSecond + " Calculators per second)";
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
    calculatorsPerSecond += wizardOutput;
    perSecond.innerHTML = "(" + calculatorsPerSecond + " Calculators per second)";
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
      calculatorsPerSecond += guruOutput;
      perSecond.innerHTML = "(" + calculatorsPerSecond + " Calculators per second)";
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
      calculatorsPerSecond += martianOutput;
      perSecond.innerHTML = "(" + calculatorsPerSecond + " Calculators per second)";
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
      calculatorsPerSecond += overclockOutput;
      perSecond.innerHTML = "(" + calculatorsPerSecond + " Calculators per second)";
    }
  }

}

window.onload = function () {
  setInterval('getAutoCalculators()', 10);
}
