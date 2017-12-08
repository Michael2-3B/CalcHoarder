var totalCalculators = document.getElementById("totalCalculators");
var totalSellers = document.getElementById("totalSellers");
var totalGeeks = document.getElementById("totalGeeks");
var totalWizards = document.getElementById("totalWizards");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var perSecond = document.getElementById("perSecond");

var calculators = 0;
var sellers = 0;
var geeks = 0;
var wizards = 0;
var sellerPrice = 25;
var geekTrust = 100;
var wizardMagic = 500;
var calculatorsPerSecond = 0;

function getCalculators() {
  calculators += 1;
  totalCalculators.innerHTML = Math.floor(calculators) + " Calculators";
  if (calculators >= sellerPrice && button3.style.visibility == 'hidden') {
    button2.style.visibility = 'visible';
  }
  if (calculators >= geekTrust && button3.style.visibility == 'hidden') {
    button3.style.visibility = 'visible';
  }
  if (calculators >= wizardMagic && button4.style.visibility == 'hidden') {
    button4.style.visibility = 'visible';
  }
}

function getAutoCalculators() {
  calculators += (0.002 * sellers) + (0.01 * geeks) + (0.1 * wizards);
  totalCalculators.innerHTML = Math.floor(calculators) + " Calculators";
  if (calculators >= geekTrust && button3.style.visibility == 'hidden') {
    button3.style.visibility = 'visible';
  }
  if (calculators >= wizardMagic && button4.style.visibility == 'hidden') {
    button4.style.visibility = 'visible';
  }

  calculatorsPerSecond = geeks + sellers / 5 + wizards * 10;
  perSecond.innerHTML = "(" + calculatorsPerSecond + " Calculators per second)";
}

function getSeller() {
  if (calculators >= sellerPrice) {
    calculators -= sellerPrice;
    sellers += 1;
    totalCalculators.innerHTML = calculators + " Calculators";
    totalSellers.style.visibility = 'visible';
    totalSellers.innerHTML = sellers + " Sellers";
    sellerPrice += 1.25 * sellers;
    button2.innerHTML = "Get a Seller (" + Math.floor(sellerPrice) + " Calculators)";
  }
}

function befriendGeek() {
  if (calculators >= geekTrust) {
    calculators -= geekTrust;
    geeks += 1;
    totalCalculators.innerHTML = calculators + " Calculators";
    totalGeeks.style.visibility = 'visible';
    totalGeeks.innerHTML = geeks + " Geeks";
    geekTrust += 1.5 * geeks;
    button3.innerHTML = "Befriend a Geek (" + Math.floor(geekTrust) + " Calculators)";
  }
}

function findWizard() {
  if (calculators >= wizardMagic) {
    calculators -= wizardMagic;
    wizards += 1;
    totalCalculators.innerHTML = calculators + " Calculators";
    totalWizards.style.visibility = 'visible';
    totalWizards.innerHTML = wizards + " Wizards";
    wizardMagic += 1.75 * wizards;
    button4.innerHTML = "Find a Wizard (" + Math.floor(wizardMagic) + " Calculators)";
  }

}

window.onload = function () {
  setInterval('getAutoCalculators()', 10);
}
