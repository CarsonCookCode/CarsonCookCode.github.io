
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');





var redPriest = document.getElementById('red-priest');
var bluePriest = document.getElementById('blue-priest');
var greenPriest = document.getElementById('green-priest');
var yellowPriest = document.getElementById('yellow-priest');


var redGeneral = document.getElementById('red-general');
var blueGeneral = document.getElementById('blue-general');
var greenGeneral = document.getElementById('green-general');
var yellowGeneral = document.getElementById('yellow-general');


var redBerzerker = document.getElementById('red-berzerker');
var blueBerzerker = document.getElementById('blue-berzerker');
var greenBerzerker = document.getElementById('green-berzerker');
var yellowBerzerker = document.getElementById('yellow-berzerker');


var redBoot = document.getElementById('red-boot');
var blueBoot = document.getElementById('blue-boot');
var greenBoot = document.getElementById('green-boot');
var yellowBoot = document.getElementById('yellow-boot');


var redCatapult = document.getElementById('red-catapult');
var blueCatapult = document.getElementById('blue-catapult');
var greenCatapult = document.getElementById('green-catapult');
var yellowCatapult = document.getElementById('yellow-catapult');


var redGoliath = document.getElementById('red-goliath');
var blueGoliath = document.getElementById('blue-goliath');
var greenGoliath = document.getElementById('green-goliath');
var yellowGoliath = document.getElementById('yellow-goliath');


var redMage = document.getElementById('red-mage');
var blueMage = document.getElementById('blue-mage');
var greenMage = document.getElementById('green-mage');
var yellowMage = document.getElementById('yellow-mage');



var redShiv = document.getElementById('red-shiv');
var blueShiv = document.getElementById('blue-shiv');
var greenShiv = document.getElementById('green-shiv');
var yellowShiv = document.getElementById('yellow-shiv');


var redHammer = document.getElementById('red-hammer');
var blueHammer = document.getElementById('blue-hammer');
var greenHammer = document.getElementById('green-hammer');
var yellowHammer = document.getElementById('yellow-hammer');



var redHatchet = document.getElementById('red-hatchet');
var redSword = document.getElementById('red-sword');
var redShield= document.getElementById('red-shield');
var redBow = document.getElementById('red-bow');
var redDagger = document.getElementById('red-dagger');
var redKnight = document.getElementById('red-knight');
var redConq = document.getElementById('red-conq');

var blueHatchet = document.getElementById('blue-hatchet');
var blueSword = document.getElementById('blue-sword');
var blueShield = document.getElementById('blue-shield');
var blueBow = document.getElementById('blue-bow');
var blueDagger = document.getElementById('blue-dagger');
var blueKnight = document.getElementById('blue-knight');
var blueConq = document.getElementById('blue-conq');

var greenHatchet = document.getElementById('green-hatchet');
var greenSword = document.getElementById('green-sword');
var greenShield = document.getElementById('green-shield');
var greenBow = document.getElementById('green-bow');
var greenDagger = document.getElementById('green-dagger');
var greenKnight = document.getElementById('green-knight');
var greenConq = document.getElementById('green-conq');

var yellowHatchet = document.getElementById('yellow-hatchet');
var yellowSword = document.getElementById('yellow-sword');
var yellowShield = document.getElementById('yellow-shield');
var yellowBow = document.getElementById('yellow-bow');
var yellowDagger= document.getElementById('yellow-dagger');
var yellowKnight = document.getElementById('yellow-knight');
var yellowConq= document.getElementById('yellow-conq');

var castle = document.getElementById('castle');




//#8080ff
var researchColor1 = '#ccccff';
var researchColor2 = '#8080ff';

var cultureColor1 = '#e0b3ff';
var cultureColor2 = '#ad33ff';

var growthColor1 = '#80ff80';
var growthColor2 = '#00cc00';

var goldColor1 = '#ffff80';
var goldColor2 = '#cccc00';

var militaryColor1 = '#ff9999';
var militaryColor2 = '#ff0000';

var testTeam = 0;
var chosenTeam = 0;




var color1 = '#eadbc8';
var color2 = '#86592d';
var hpColor = 'white';
var hpFont = '20px Arial'


var team = 0;
var unitType = 0;

var unitHealth = '0';

var playerTeam = 0;
var placedUnit = 0;

var aiTeam = 0;

function chooseAITeam () {
  if (team === 'red') {aiTeam = 'blue'}
  else if (team === 'blue') {aiTeam = 'green'}
 else if (team === 'green') {aiTeam = 'yellow'}
 else if (team === 'yellow') {aiTeam = 'red'}
 else {};
}




function aiBlue () {
  for (var i = 0; i < squareArrayLength; i++) {
    if (squareArray[i].team === 0 && placedUnit === 0) {
      team = aiTeam;
      unitType = 'warrior'
      squareArray[i].team = team;
      squareArray[i].unit = unitType;
      squareArray[i].hp = '40'
      squareArray[i].att = '5'
      placeUnit('x', 'y', infoArray[i].locX, infoArray[i].locY, infoArray[i].color);
      team = playerTeam;
      placedUnit = 1;
    } else {}
  }
  placedUnit = 0;
}









var css1 = 'unit:hover span{ display: none }';


function question () {
  document.getElementsByClassName('unit').style.display = 'none'
}





function restoreTeam () {
  for (i = 0; i < 4; i++) {
    document.getElementsByClassName('teamStyle')[i].style.backgroundColor = '#9494b8';
      document.getElementsByClassName('teamStyle')[i].style.color = 'black';
  }
}


function red () {
  if (chosenTeam === 0 || testTeam === 1) {
  chosenTeam = 1;
  playerTeam = 'red'
  team = 'red';
  restoreTeam();
  document.getElementById('redTeam').style.backgroundColor = 'red';
    document.getElementById('redTeam').style.color = 'white';
  playClick();
} else {playErr();}
}

function blue () {
  if (chosenTeam === 0 || testTeam === 1) {
  chosenTeam = 1;
  playerTeam = 'blue';
  team = 'blue';
    restoreTeam();
  document.getElementById('blueTeam').style.backgroundColor = 'blue';
    document.getElementById('blueTeam').style.color = 'white';
  playClick();
  } else {playErr();}
}

function green () {
  if (chosenTeam === 0 || testTeam === 1) {
  chosenTeam = 1;
  playerTeam = 'green';
  team = 'green';
    restoreTeam();
  document.getElementById('greenTeam').style.backgroundColor = 'green';
    document.getElementById('greenTeam').style.color = 'white';
  playClick();
  } else {playErr();}
}

function yellow () {
  if (chosenTeam === 0 || testTeam === 1) {
  chosenTeam = 1;
  playerTeam = 'yellow';
  team = 'yellow';
    restoreTeam();
  document.getElementById('yellowTeam').style.backgroundColor = 'yellow';
    document.getElementById('yellowTeam').style.color = 'white';
  playClick();
  } else {playErr();}
}

var unitSelectBackgroundColor = 'black'
var unitSelectBorder = '3px solid red'

function peon () {
  if (citizen >= peonCitizen && gold >= peonGold) {
  citizenCost = peonCitizen;
  goldCost = peonGold;
  unitType = 'peon'
  checkUnitSelect();
  document.getElementById('peon').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('peon').style.border = unitSelectBorder;
  playClick();
  display();
} else {playErr();}
}

function warrior () {
  if (citizen >= warriorCitizen && gold >= warriorGold) {
  citizenCost = warriorCitizen;
  goldCost = warriorGold;
  unitType = 'warrior'
  checkUnitSelect();
  document.getElementById('warrior').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('warrior').style.border = unitSelectBorder;
  playClick();
  display();
  } else {playErr();}
}

function archer () {
 if (archerDone === 1 && citizen >= archerCitizen && gold >= archerGold) {
  citizenCost = archerCitizen;
  goldCost = archerGold;
  unitType = 'archer'
  checkUnitSelect();
  document.getElementById('archer').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('archer').style.border = unitSelectBorder;
  display();
  playClick();
} else {playErr();}
}

function ranger () {
  if (rangerDone === 1 && citizen >= rangerCitizen && gold >= rangerGold) {
    citizenCost = rangerCitizen;
    goldCost = rangerGold;
  unitType = 'ranger'
  checkUnitSelect();
  document.getElementById('ranger').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('ranger').style.border = unitSelectBorder;
  playClick();
  display();
} else {playErr();}
}

function footman () {
  if (footmanDone === 1 && citizen >= footmanCitizen && gold >= footmanGold) {
    citizenCost = footmanCitizen;
    goldCost = footmanGold;
  unitType = 'footman'
  checkUnitSelect();
  document.getElementById('footman').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('footman').style.border = unitSelectBorder;
  playClick();
  display();
} else {playErr();}
}

function shield () {
  if (bruteDone === 1 && citizen >= bruteCitizen && gold >= bruteGold) {
    citizenCost = bruteCitizen;
    goldCost = bruteGold;
  unitType = 'brute'
  checkUnitSelect();
  document.getElementById('brute').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('brute').style.border = unitSelectBorder;
  playClick();
  display();
} else {playErr();}
}


function scout () {
  if (scoutDone === 1 && citizen >= scoutCitizen && gold >= scoutGold) {
    citizenCost = scoutCitizen;
    goldCost = scoutGold;
  unitType = 'scout'
  checkUnitSelect();
  document.getElementById('scout').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('scout').style.border = unitSelectBorder;
  playClick();
  display();
} else {playErr();}
}


function knight () {
  if (knightDone === 1 && citizen >= knightCitizen && gold >= knightGold) {
    citizenCost = knightCitizen;
    goldCost = knightGold;
  unitType = 'knight'
  checkUnitSelect();
  document.getElementById('knight').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('knight').style.border = unitSelectBorder;
  playClick();
  display();
} else {playErr();}
}

function conquerer () {
  if (conquererDone === 1 && citizen >= conquererCitizen && gold >= conquererGold) {
    citizenCost = conquererCitizen;
    goldCost = conquererGold;
  unitType = 'conquerer'
  checkUnitSelect();
  document.getElementById('conquerer').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('conquerer').style.border = unitSelectBorder;
  playClick();
  display();
} else {playErr();}
}

function catapult () {
  if (catapultDone === 1 && citizen >= catapultCitizen && gold >= catapultGold) {
    citizenCost = catapultCitizen;
    goldCost = catapultGold;
  unitType = 'catapult'
  checkUnitSelect();
  document.getElementById('catapult').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('catapult').style.border = unitSelectBorder;
  playClick();
  display();
} else {playErr();}
}

function goliath () {
  if (goliathDone === 1 && citizen >= goliathCitizen && gold >= goliathGold) {
    citizenCost = goliathCitizen;
    goldCost = goliathGold;
  unitType = 'goliath'
  checkUnitSelect();
  document.getElementById('goliath').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('goliath').style.border = unitSelectBorder;
  playClick();
  display();
} else {playErr();}
}

function mage () {
  if (mageDone === 1 && citizen >= mageCitizen && gold >= mageGold) {
    citizenCost = mageCitizen;
    goldCost = mageGold;
  unitType = 'mage'
  checkUnitSelect();
  document.getElementById('mage').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('mage').style.border = unitSelectBorder;
  playClick();
  display();
} else {playErr();}
}

function shiv () {
  if (infiltratorDone === 1 && citizen >= infiltratorCitizen && gold >= infiltratorGold) {
    citizenCost = infiltratorCitizen;
    goldCost = infiltratorGold;
  unitType = 'infiltrator'
  checkUnitSelect();
  document.getElementById('infiltrator').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('infiltrator').style.border = unitSelectBorder;
  playClick();
  display();
} else {playErr();}
}

function priest () {
  if (priestDone === 1 && citizen >= priestCitizen && gold >= priestGold) {
    citizenCost = priestCitizen;
    goldCost = priestGold;
  unitType = 'priest'
  checkUnitSelect();
  document.getElementById('priest').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('priest').style.border = unitSelectBorder;
  playClick();
  display();
} else {playErr();}
}

function general () {
  if (generalDone === 1 && citizen >= generalCitizen && gold >= generalGold) {
    citizenCost = generalCitizen;
    goldCost = generalGold;
  unitType = 'general'
  checkUnitSelect();
  document.getElementById('general').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('general').style.border = unitSelectBorder;
  playClick();
  display();
} else {playErr();}
}

function berzerker () {
  if (berzerkerDone === 1 && citizen >= berzerkerCitizen && gold >= berzerkerGold) {
    citizenCost = berzerkerCitizen;
    goldCost = berzerkerGold;
  unitType = 'berzerker'
  checkUnitSelect();
  display();
  document.getElementById('berzerker').style.backgroundColor = unitSelectBackgroundColor;
  document.getElementById('berzerker').style.border = unitSelectBorder;
  playClick();
} else {playErr();}
}




var unitAttack = '0';
var unitDefense = '0';
var unitAdj = '0';




var target = 0;


function InfoSquare(locX, locY, color, oneHit, redWalk, blueWalk, greenWalk, yellowWalk) {
  this.locX = locX;
  this.locY = locY;
  this.color = color;
  this.oneHit = oneHit;
  this.redWalk = redWalk;
  this.blueWalk = blueWalk;
  this.greenWalk = greenWalk;
  this.yellowWalk = yellowWalk;
}



var a8 = new InfoSquare(0, 0, color1, 0, 0, 0, 0, 0)
var b8 = new InfoSquare(87.5, 0, color2, 0, 0, 0, 0, 0)
var c8 = new InfoSquare(175, 0, color1, 0, 0, 0, 0, 0)
var d8 = new InfoSquare(262.5, 0, growthColor2, 0, 0, 0, 0, 0)
var e8 = new InfoSquare(350, 0, growthColor1, 0, 0, 0, 0, 0)
var f8 = new InfoSquare(437.5, 0, color2, 0, 0, 0, 0, 0)
var g8 = new InfoSquare(525, 0, color1, 0, 0, 0, 0, 0)
var h8 = new InfoSquare(612.5, 0, color2, 0, 0, 0, 0, 0)

var a7 = new InfoSquare(0, 87.5, color2, 0, 0, 0, 0, 0)
var b7 = new InfoSquare(87.5, 87.5, color1, 0, 0, 0, 0, 0)
var c7 = new InfoSquare(175, 87.5, color2, 0, 0, 0, 0, 0)
var d7 = new InfoSquare(262.5, 87.5, growthColor1, 0, 0, 0, 0, 0)
var e7 = new InfoSquare(350, 87.5, growthColor2, 0, 0, 0, 0, 0)
var f7 = new InfoSquare(437.5, 87.5, color1, 0, 0, 0, 0, 0)
var g7 = new InfoSquare(525, 87.5, color2, 0, 0, 0, 0, 0)
var h7 = new InfoSquare(612.5, 87.5, color1, 0, 0, 0, 0, 0)

var a6 = new InfoSquare(0, 175, color1, 0, 0, 0, 0, 0)
var b6 = new InfoSquare(87.5, 175, color2, 0, 0, 0, 0, 0)
var c6 = new InfoSquare(175, 175, color1, 0, 0, 0, 0, 0)
var d6 = new InfoSquare(262.5, 175, color2, 0, 0, 0, 0, 0)
var e6 = new InfoSquare(350, 175, color1, 0, 0, 0, 0, 0)
var f6 = new InfoSquare(437.5, 175, color2, 0, 0, 0, 0, 0)
var g6 = new InfoSquare(525, 175, color1, 0, 0, 0, 0, 0)
var h6 = new InfoSquare(612.5, 175, color2, 0, 0, 0, 0, 0)

var a5 = new InfoSquare(0, 262.5, researchColor2, 0, 0, 0, 0, 0)
var b5 = new InfoSquare(87.5, 262.5, researchColor1, 0, 0, 0, 0, 0)
var c5 = new InfoSquare(175, 262.5, color2, 0, 0, 0, 0, 0)
var d5 = new InfoSquare(262.5, 262.5, militaryColor1, 0, 0, 0, 0, 0)
var e5 = new InfoSquare(350, 262.5, militaryColor2, 0, 0, 0, 0, 0)
var f5 = new InfoSquare(437.5, 262.5, color1, 0, 0, 0, 0, 0)
var g5 = new InfoSquare(525, 262.5, goldColor2, 0, 0, 0, 0, 0)
var h5 = new InfoSquare(612.5, 262.5, goldColor1, 0, 0, 0, 0, 0)

var a4 = new InfoSquare(0, 350, researchColor1, 0, 0, 0, 0, 0)
var b4 = new InfoSquare(87.5, 350, researchColor2, 0, 0, 0, 0, 0)
var c4 = new InfoSquare(175, 350, color1, 0, 0, 0, 0, 0)
var d4 = new InfoSquare(262.5, 350, militaryColor2, 0, 0, 0, 0, 0)
var e4 = new InfoSquare(350, 350, militaryColor1, 0, 0, 0, 0, 0)
var f4 = new InfoSquare(437.5, 350, color2, 0, 0, 0, 0, 0)
var g4 = new InfoSquare(525, 350, goldColor1, 0, 0, 0, 0, 0)
var h4 = new InfoSquare(612.5, 350, goldColor2, 0, 0, 0, 0, 0)

var a3 = new InfoSquare(0, 437.5, color2, 0, 0, 0, 0, 0)
var b3 = new InfoSquare(87.5, 437.5, color1, 0, 0, 0, 0, 0)
var c3 = new InfoSquare(175, 437.5, color2, 0, 0, 0, 0, 0)
var d3 = new InfoSquare(262.5, 437.5, color1, 0, 0, 0, 0, 0)
var e3 = new InfoSquare(350, 437.5, color2, 0, 0, 0, 0, 0)
var f3 = new InfoSquare(437.5, 437.5, color1, 0, 0, 0, 0, 0)
var g3 = new InfoSquare(525, 437.5, color2, 0, 0, 0, 0, 0)
var h3 = new InfoSquare(612.5, 437.5, color1, 0, 0, 0, 0, 0)

var a2 = new InfoSquare(0, 525, color1, 0, 0, 0, 0, 0)
var b2 = new InfoSquare(87.5, 525, color2, 0, 0, 0, 0, 0)
var c2 = new InfoSquare(175, 525, color1, 0, 0, 0, 0, 0)
var d2 = new InfoSquare(262.5, 525, cultureColor2, 0, 0, 0, 0, 0)
var e2 = new InfoSquare(350, 525, cultureColor1, 0, 0, 0, 0, 0)
var f2 = new InfoSquare(437.5, 525, color2, 0, 0, 0, 0, 0)
var g2 = new InfoSquare(525, 525, color1, 0, 0, 0, 0, 0)
var h2 = new InfoSquare(612.5, 525, color2, 0, 0, 0, 0, 0)

var a1 = new InfoSquare(0, 612.5, color2, 0, 0, 0, 0, 0)
var b1 = new InfoSquare(87.5, 612.5, color1, 0, 0, 0, 0, 0)
var c1 = new InfoSquare(175, 612.5, color2, 0, 0, 0, 0, 0)
var d1 = new InfoSquare(262.5, 612.5, cultureColor1, 0, 0, 0, 0, 0)
var e1 = new InfoSquare(350, 612.5, cultureColor2, 0, 0, 0, 0, 0)
var f1 = new InfoSquare(437.5, 612.5, color1, 0, 0, 0, 0, 0)
var g1 = new InfoSquare(525, 612.5, color2, 0, 0, 0, 0, 0)
var h1 = new InfoSquare(612.5, 612.5, color1, 0, 0, 0, 0, 0)








function Square(team, unit, hp, att, def, tar, peon) {
  this.team = team;
  this.unit = unit;
  this.hp = hp;
  this.att = att;
  this.def = def;
  this.tar = tar;
  this.peon = peon;
}

var A8 = new Square(0, 0, 0, 0, 0, 'none', 1);
var B8 = new Square(0, 0, 0, 0, 0, 'none', 1);
var C8 = new Square(0, 0, 0, 0, 0, 'none', 1);
var D8 = new Square(0, 0, 0, 0, 0, 'none', 1);
var E8 = new Square(0, 0, 0, 0, 0, 'none', 1);
var F8 = new Square(0, 0, 0, 0, 0, 'none', 1);
var G8 = new Square(0, 0, 0, 0, 0, 'none', 1);
var H8 = new Square(0, 0, 0, 0, 0, 'none', 1);

var A7 = new Square(0, 0, 0, 0, 0, 'none', 1);
var B7 = new Square(0, 0, 0, 0, 0, 'none', 0);
var C7 = new Square(0, 0, 0, 0, 0, 'none', 0);
var D7 = new Square(0, 0, 0, 0, 0, 'none', 0);
var E7 = new Square(0, 0, 0, 0, 0, 'none', 0);
var F7 = new Square(0, 0, 0, 0, 0, 'none', 0);
var G7 = new Square(0, 0, 0, 0, 0, 'none', 0);
var H7 = new Square(0, 0, 0, 0, 0, 'none', 1);

var A6 = new Square(0, 0, 0, 0, 0, 'none', 1);
var B6 = new Square(0, 0, 0, 0, 0, 'none', 0);
var C6 = new Square(0, 0, 0, 0, 0, 'none', 0);
var D6 = new Square(0, 0, 0, 0, 0, 'none', 0);
var E6 = new Square(0, 0, 0, 0, 0, 'none', 0);
var F6 = new Square(0, 0, 0, 0, 0, 'none', 0);
var G6 = new Square(0, 0, 0, 0, 0, 'none', 0);
var H6 = new Square(0, 0, 0, 0, 0, 'none', 1);

var A5 = new Square(0, 0, 0, 0, 0, 'none', 1);
var B5 = new Square(0, 0, 0, 0, 0, 'none', 0);
var C5 = new Square(0, 0, 0, 0, 0, 'none', 0);
var D5 = new Square(0, 0, 0, 0, 0, 'none', 0);
var E5 = new Square(0, 0, 0, 0, 0, 'none', 0);
var F5 = new Square(0, 0, 0, 0, 0, 'none', 0);
var G5 = new Square(0, 0, 0, 0, 0, 'none', 0);
var H5 = new Square(0, 0, 0, 0, 0, 'none', 1);

var A4 = new Square(0, 0, 0, 0, 0, 'none', 1);
var B4 = new Square(0, 0, 0, 0, 0, 'none', 0);
var C4 = new Square(0, 0, 0, 0, 0, 'none', 0);
var D4 = new Square(0, 0, 0, 0, 0, 'none', 0);
var E4 = new Square(0, 0, 0, 0, 0, 'none', 0);
var F4 = new Square(0, 0, 0, 0, 0, 'none', 0);
var G4 = new Square(0, 0, 0, 0, 0, 'none', 0);
var H4 = new Square(0, 0, 0, 0, 0, 'none', 1);

var A3 = new Square(0, 0, 0, 0, 0, 'none', 1);
var B3 = new Square(0, 0, 0, 0, 0, 'none', 0);
var C3 = new Square(0, 0, 0, 0, 0, 'none', 0);
var D3 = new Square(0, 0, 0, 0, 0, 'none', 0);
var E3 = new Square(0, 0, 0, 0, 0, 'none', 0);
var F3 = new Square(0, 0, 0, 0, 0, 'none', 0);
var G3 = new Square(0, 0, 0, 0, 0, 'none', 0);
var H3 = new Square(0, 0, 0, 0, 0, 'none', 1);

var A2 = new Square(0, 0, 0, 0, 0, 'none', 1);
var B2 = new Square(0, 0, 0, 0, 0, 'none', 0);
var C2 = new Square(0, 0, 0, 0, 0, 'none', 0);
var D2 = new Square(0, 0, 0, 0, 0, 'none', 0);
var E2 = new Square(0, 0, 0, 0, 0, 'none', 0);
var F2 = new Square(0, 0, 0, 0, 0, 'none', 0);
var G2 = new Square(0, 0, 0, 0, 0, 'none', 0);
var H2 = new Square(0, 0, 0, 0, 0, 'none', 1);

var A1 = new Square(0, 0, 0, 0, 0, 'none', 1);
var B1 = new Square(0, 0, 0, 0, 0, 'none', 1);
var C1 = new Square(0, 0, 0, 0, 0, 'none', 1);
var D1 = new Square(0, 0, 0, 0, 0, 'none', 1);
var E1 = new Square(0, 0, 0, 0, 0, 'none', 1);
var F1 = new Square(0, 0, 0, 0, 0, 'none', 1);
var G1 = new Square(0, 0, 0, 0, 0, 'none', 1);
var H1 = new Square(0, 0, 0, 0, 0, 'none', 1);












canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  allClick(x, y);

});

var peonCitizen = 1;
var peonGold = 0;

var warriorCitizen = 1;
var warriorGold = 3;

var footmanCitizen = 3;
var footmanGold = 10;

var bruteCitizen = 5;
var bruteGold = 5;

var rangerCitizen = 3;
var rangerGold = 12;

var knightCitizen = 3;
var knightGold = 15;

var archerCitizen = 2;
var archerGold = 10;

var scoutCitizen = 6;
var scoutGold = 10;

var conquererCitizen = 8;
var conquererGold = 20;

var catapultCitizen = 5;
var catapultGold = 30;

var goliathCitizen = 10;
var goliathGold = 30;

var mageCitizen = 5;
var mageGold = 50;

var infiltratorCitizen = 8;
var infiltratorGold = 60;

var priestCitizen = 10;
var priestGold = 30;

var generalCitizen = 10;
var generalGold = 30;


var berzerkerCitizen =  10;
var berzerkerGold = 50;

var citizenCost = 0;
var goldCost = 0;



function allClick (xmouse, ymouse) {



  for (var i = 0; i < squareArrayLength; i++) {

      if (unitType !== 0 && team !== 0 && (xmouse > infoArray[i].locX && xmouse < infoArray[i].locX + 87.5 && ymouse > infoArray[i].locY && ymouse < infoArray[i].locY + 87.5) &&
      (((team === 'red' && infoArray[i].redWalk >= 1) || (team === 'blue' && infoArray[i].blueWalk >= 1) || (team === 'green' && infoArray[i].greenWalk >= 1) || (team === 'yellow' && infoArray[i].yellowWalk >= 1)
      || (unitType === 'peon' && squareArray[i].peon === 1) || (team === squareArray[i].team )) && (team === squareArray[i].team || squareArray[i].team === 0))
      ) {
        citizen -= citizenCost;
        gold -= goldCost;
        c.lineWidth = 3;
        display();
        checkUnitSelect();
        c.fillStyle = infoArray[i].color;
        placeUnit(xmouse, ymouse, infoArray[i].locX, infoArray[i].locY, infoArray[i].color)
        squareArray[i].team = team;
        squareArray[i].unit = unitType;
        squareArray[i].hp = unitHealth;
        squareArray[i].att = unitAttack;
        squareArray[i].def = unitDefense;
        squareArray[i].tar = 'none';
        unitType = 0;
        zoneCheck();
      } else { };

  }



}





function placeUnit (xmouse, ymouse, locX, locY, color) {
  if (xmouse > locX && xmouse < locX + 87.5 && ymouse > locY && ymouse < locY + 87.5 || xmouse === 'x' || ymouse === 'y') {
    c.beginPath();
    c.lineWidth = 3;
    c.fillStyle = color;
    c.fillRect(locX, locY, 87.5, 87.5);
    resetSquare();
    drawUnit(locX, locY);
    c.strokeStyle = 'black';
    c.strokeText(unitHealth, locX + 32,  locY + 50);
    c.fillText(unitHealth, locX + 32,  locY + 50);
} else { };
};




function teamPeon (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redHammer, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueHammer, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenHammer, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowHammer, x1, y1, 80, 80
    )
  } else { }
}


function teamWarrior (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redHatchet, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueHatchet, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenHatchet, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowHatchet, x1, y1, 80, 80
    )
  } else { }
}


function teamArcher (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redBow, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueBow, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenBow, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowBow, x1, y1, 80, 80
    )
  } else { }
}

function teamRanger (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redDagger, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueDagger, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenDagger, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowDagger, x1, y1, 80, 80
    )
  } else { }
}

function teamFootman (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redSword, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueSword, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenSword, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowSword, x1, y1, 80, 80
    )
  } else { }
}

function teamBrute (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redShield, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueShield, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenShield, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowShield, x1, y1, 80, 80
    )
  } else { }
}

function teamKnight (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redKnight, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueKnight, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenKnight, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowKnight, x1, y1, 80, 80
    )
  } else { }
}

function teamScout (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redBoot, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueBoot, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenBoot, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowBoot, x1, y1, 80, 80
    )
  } else { }
}

function teamConquerer (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redConq, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueConq, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenConq, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowConq, x1, y1, 80, 80
    )
  } else { }
}

function teamCatapult (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redCatapult, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueCatapult, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenCatapult, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowCatapult, x1, y1, 80, 80
    )
  } else { }
}

function teamGoliath (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redGoliath, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueGoliath, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenGoliath, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowGoliath, x1, y1, 80, 80
    )
  } else { }
}

function teamMage (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redMage, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueMage, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenMage, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowMage, x1, y1, 80, 80
    )
  } else { }
}

function teamInfiltrator (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redShiv, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueShiv, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenShiv, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowShiv, x1, y1, 80, 80
    )
  } else { }
}

function teamPriest (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redPriest, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      bluePriest, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenPriest, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowPriest, x1, y1, 80, 80
    )
  } else { }
}

function teamGeneral (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redGeneral, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueGeneral, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenGeneral, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowGeneral, x1, y1, 80, 80
    )
  } else { }
}

function teamBerzerker (x1, y1, teem) {
  if (teem === 'red') {
    c.drawImage(
      redBerzerker, x1, y1, 80, 80
    )
  } else if (teem === 'blue') {
    c.drawImage(
      blueBerzerker, x1, y1, 80, 80
    )
  } else if (teem === 'green') {
    c.drawImage(
      greenBerzerker, x1, y1, 80, 80
    )
  } else if (teem === 'yellow') {
    c.drawImage(
      yellowBerzerker, x1, y1, 80, 80
    )
  } else { }
}







function drawUnit (x1, y1) {
  if (unitType === 'peon') {
    teamPeon(x1, y1, team);
    c.fillStyle = 'white'
    c.font = '20px Arial'
    unitHealth = 20;
    unitAttack = 1;

  } else if (unitType === 'warrior') {
    teamWarrior(x1, y1, team);
    c.fillStyle = 'white'
    c.font = '20px Arial'
    unitHealth = 40;
    unitAttack = 5;

  } else if (unitType === 'archer') {
    teamArcher(x1, y1, team)
    c.fillStyle = 'white'
    c.font = '20px Arial'
    unitHealth = 30;
    unitAttack = 5;


  } else if (unitType === 'footman') {
      teamFootman(x1, y1, team)
        c.fillStyle = 'white'
        c.font = '20px Arial'
        unitHealth = 50;
        unitAttack = 10;

} else if (unitType === 'ranger') {
  teamRanger(x1, y1, team);
  c.fillStyle = 'white'
  c.font = '20px Arial'
  unitHealth = 30;
  unitAttack = 15;

} else if (unitType === 'brute') {
  teamBrute(x1, y1, team);
  c.fillStyle = 'white'
  c.font = '20px Arial'
  unitHealth = 80;
  unitAttack = 5;

} else if (unitType === 'knight') {
  teamKnight(x1, y1, team);
  c.fillStyle = 'white'
  c.font = '20px Arial'
  unitHealth = 60;
  unitAttack = 10;

} else if (unitType === 'scout') {
  teamScout(x1, y1, team);
  c.fillStyle = 'white'
  c.font = '20px Arial'
  unitHealth = 20;
  unitAttack = 1;

} else if (unitType === 'conquerer') {
  teamConquerer(x1, y1, team);
  c.fillStyle = 'white'
  c.font = '20px Arial'
  unitHealth = 60;
  unitAttack = 12;

} else if (unitType === 'catapult') {
  teamCatapult(x1, y1, team);
  c.fillStyle = 'white'
  c.font = '20px Arial'
  unitHealth = 30;
  unitAttack = 10;

} else if (unitType === 'goliath') {
  teamGoliath(x1, y1, team);
  c.fillStyle = 'white'
  c.font = '20px Arial'
  unitHealth = 80;
  unitAttack = 20;

} else if (unitType === 'mage') {
  teamMage(x1, y1, team);
  c.fillStyle = 'white'
  c.font = '20px Arial'
  unitHealth = 50;
  unitAttack = 15;

} else if (unitType === 'infiltrator') {
  teamInfiltrator(x1, y1, team);
  c.fillStyle = 'white'
  c.font = '20px Arial'
  unitHealth = 40;
  unitAttack = 20;

} else if (unitType === 'priest') {
  teamPriest(x1, y1, team);
  c.fillStyle = 'white'
  c.font = '20px Arial'
  unitHealth = 30;
  unitAttack = 0;

} else if (unitType === 'general') {
  teamGeneral(x1, y1, team);
  c.fillStyle = 'white'
  c.font = '20px Arial'
  unitHealth = 50;
  unitAttack = 0;

} else if (unitType === 'berzerker') {
  teamBerzerker(x1, y1, team);
  c.fillStyle = 'white'
  c.font = '20px Arial'
  unitHealth = 50;
  unitAttack = 0;



} else { }

};



var a8Walk = [b8, b7, a7];
var b8Walk = [c8, c7, b7, a7, a8];
var c8Walk = [d8, d7, c7, b7, b8];
var d8Walk = [e8, e7, d7, c7, c8];
var e8Walk = [f8, f7, e7, d7, d8];
var f8Walk = [g8, g7, f7, e7, e8];
var g8Walk = [h8, h7, g7, f7, f8];
var h8Walk = [h7, g7, g8];

var a7Walk = [a8, b8, b7, b6, a6];
var b7Walk = [b8, c8, c7, c6, b6, a6, a7, a8];
var c7Walk = [c8, d8, d7, d6, c6, b6, b7, b8];
var d7Walk = [d8, e8, e7, e6, d6, c6, c7, c8];
var e7Walk = [e8, f8, f7, f6, e6, d6, d7, d8];
var f7Walk = [f8, g8, g7, g6, f6, e6, e7, e8];
var g7Walk = [g8, h8, h7, h6, g6, f6, f7, f8];
var h7Walk = [h8, h6, g6, g7, g8];

var a6Walk = [a7, b7, b6, b5, a5];
var b6Walk = [b7, c7, c6, c5, b5, a5, a6, a7];
var c6Walk = [c7, d7, d6, d5, c6, b5, b6, b7];
var d6Walk = [d7, e7, e6, e5, d5, c5, c6, c7];
var e6Walk = [e7, f7, f6, f5, e5, d5, d6, d7];
var f6Walk = [f7, g7, g6, g5, f5, e5, e6, e7];
var g6Walk = [g7, h7, h6, h5, g5, f5, f6, f7];
var h6Walk = [h7, h5, g5, g6, g7];

var a5Walk = [a6, b6, b5, b4, a4];
var b5Walk = [b6, c6, c5, c4, b4, a4, a5, a6];
var c5Walk = [c6, d6, d5, d4, c4, b4, b5, b6];
var d5Walk = [d6, e6, e5, e4, d4, c4, c5, c6];
var e5Walk = [e6, f6, f5, f4, e4, d4, d5, d6];
var f5Walk = [f6, g6, g5, g4, f4, e4, e5, e6];
var g5Walk = [g6, h6, h5, h4, g4, f4, f5, f6];
var h5Walk = [h6, h4, g4, g5, g6];

var a4Walk = [a5, b5, b4, b3, a3];
var b4Walk = [b5, c5, c4, c3, b3, a3, a4, a5];
var c4Walk = [c5, d5, d4, d3, c3, b3, b4, b5];
var d4Walk = [d5, e5, e4, e3, d3, c3, c4, c5];
var e4Walk = [e5, f5, f4, f3, e3, d3, d4, d5];
var f4Walk = [f5, g5, g4, g3, f3, e3, e4, e5];
var g4Walk = [g5, h5, h4, h3, g3, f3, f4, f5];
var h4Walk = [h5, h3, g3, g4, g5];

var a3Walk = [a4, b4, b3, b2, a2];
var b3Walk = [b4, c4, c3, c2, b2, a2, a3, a4];
var c3Walk = [c4, d4, d3, d2, c2, b2, b3, b4];
var d3Walk = [d4, e4, e3, e2, d2, c2, c3, c4];
var e3Walk = [e4, f4, f3, f2, e2, d2, d3, d4];
var f3Walk = [f4, g4, g3, g2, f2, e2, e3, e4];
var g3Walk = [g4, h4, h3, h2, g2, f2, f3, f4];
var h3Walk = [h4, h2, g2, g3, g4];

var a2Walk = [a3, b3, b2, b1, a1];
var b2Walk = [b3, c3, c2, c1, b1, a1, a2, a3];
var c2Walk = [c3, d3, d2, d1, d1, b1, b2, b3];
var d2Walk = [d3, e3, e2, e1, d1, c1, c2, c3];
var e2Walk = [e3, f3, f2, f1, e1, d1, d2, d3];
var f2Walk = [f3, g3, g2, g1, f1, e1, e2, e3];
var g2Walk = [g3, h3, h2, h1, g1, f1, f2, f3];
var h2Walk = [h3, h1, g1, g2, g3];

var a1Walk = [a2, b2, b1];
var b1Walk = [b2, c2, c1, a1, a2];
var c1Walk = [c2, d2, d1, b1, b2];
var d1Walk = [d2, e2, e1, c1, c2];
var e1Walk = [e2, f2, f1, d1, d2];
var f1Walk = [f2, g2, g1, e1, e2];
var g1Walk = [g2, h2, h1, f1, f2];
var h1Walk = [h2, g1, g2];


var walkArray =

[

a8Walk, b8Walk, c8Walk, d8Walk, e8Walk, f8Walk, g8Walk, h8Walk,
a7Walk, b7Walk, c7Walk, d7Walk, e7Walk, f7Walk, g7Walk, h7Walk,
a6Walk, b6Walk, c6Walk, d6Walk, e6Walk, f6Walk, g6Walk, h6Walk,
a5Walk, b5Walk, c5Walk, d5Walk, e5Walk, f5Walk, g5Walk, h5Walk,
a4Walk, b4Walk, c4Walk, d4Walk, e4Walk, f4Walk, g4Walk, h4Walk,
a3Walk, b3Walk, c3Walk, d3Walk, e3Walk, f3Walk, g3Walk, h3Walk,
a2Walk, b2Walk, c2Walk, d2Walk, e2Walk, f2Walk, g2Walk, h2Walk,
a1Walk, b1Walk, c1Walk, d1Walk, e1Walk, f1Walk, g1Walk, h1Walk,

]

var walkArrayLength = walkArray.length;












function walk () {


    for (var i = 0; i < walkArrayLength; i++) {



      if (squareArray[i].team === 'red') {
        console.log('red')

      for (var j = 0; j < walkArray[i].length; j++) {
        walkArray[i][j].redWalk += 1;
}

      } else if (squareArray[i].team === 'blue') {

        for (var j = 0; j < walkArray[i].length; j++) {
          walkArray[i][j].blueWalk += 1;
  }

      } else if (squareArray[i].team === 'green') {

        for (var j = 0; j < walkArray[i].length; j++) {
          walkArray[i][j].greenWalk += 1;
  }

      } else if (squareArray[i].team === 'yellow') {

        for (var j = 0; j < walkArray[i].length; j++) {
          walkArray[i][j].yellowWalk += 1;
  }

      } else { }


  }
}

/*

function resetWalk () {

  for (var i = 0; i < arrArrayLength; i++) {
  for (var j = 0; j < arrArray[i].length; j++) {

    arrArray[i][j].redWalk = 0;
    arrArray[i][j].blueWalk = 0;
    arrArray[i][j].greenWalk = 0;
    arrArray[i][j].yellowWalk = 0;

    }
  }


}
*/

function resetWalk () {

  for (var i = 0; i < walkArrayLength; i++) {
  for (var j = 0; j < walkArray[i].length; j++) {

    walkArray[i][j].redWalk = 0;
    walkArray[i][j].blueWalk = 0;
    walkArray[i][j].greenWalk = 0;
    walkArray[i][j].yellowWalk = 0;

    }
  }


}

var a8War = [B8, A7]
var b8War = [C8, B7, A8]
var c8War = [D8, C7, B8]
var d8War = [E8, D7, C8]
var e8War = [F8, E7, D8]
var f8War = [G8, F7, E8]
var g8War = [H8, G7, F8]
var h8War = [H7, G8]

var a7War = [A8, B7, A6]
var b7War = [B8, C7, B6, A7]
var c7War = [C8, D7, C6, B7]
var d7War = [D8, E7, D6, C7]
var e7War = [E8, F7, E6, D7]
var f7War = [F8, G7, F6, E7]
var g7War = [G8, H7, G6, F7]
var h7War = [H8, H6, G7]

var a6War = [A7, B6, A5]
var b6War = [B7, C6, B5, A6]
var c6War = [C7, D6, C5, B6]
var d6War = [D7, E6, D5, C6]
var e6War = [E7, F6, E5, D6]
var f6War = [F7, G6, F5, E6]
var g6War = [G7, H6, G5, F6]
var h6War = [H7, H5, G6]

var a5War = [A6, B5, A4]
var b5War = [B6, C5, B4, A5]
var c5War = [C6, D5, C4, B5]
var d5War = [D6, E5, D4, C5]
var e5War = [E6, F5, E4, D5]
var f5War = [F6, G5, F4, E5]
var g5War = [G6, H5, G4, F5]
var h5War = [H6, H4, G5]

var a4War = [A5, B4, A3]
var b4War = [B5, C4, B3, A4]
var c4War = [C5, D4, C3, B4]
var d4War = [D5, E4, D3, C4]
var e4War = [E5, F4, E3, D4]
var f4War = [F5, G4, F3, E4]
var g4War = [G5, H4, G3, F4]
var h4War = [H5, H3, G4]

var a3War = [A4, B3, A2]
var b3War = [B4, C3, B2, A3]
var c3War = [C4, D3, C2, B3]
var d3War = [D4, E3, D2, C3]
var e3War = [E4, F3, E2, D3]
var f3War = [F4, G3, F2, E3]
var g3War = [G4, H3, G2, F3]
var h3War = [H4, H2, G3]

var a2War = [A3, B2, A1]
var b2War = [B3, C2, B1, A2]
var c2War = [C3, D2, C1, B2]
var d2War = [D3, E2, D1, C2]
var e2War = [E3, F2, E1, D2]
var f2War = [F3, G2, F1, E2]
var g2War = [G3, H2, G1, F2]
var h2War = [H3, H1, G2]

var a1War = [A2, B1]
var b1War = [B2, C1, A1]
var c1War = [C2, D1, B1]
var d1War = [D2, E1, C1]
var e1War = [E2, F1, D1]
var f1War = [F2, G1, E1]
var g1War = [G2, H1, F1]
var h1War = [H2, G1]


var warArray = [a8War, b8War, c8War, d8War, e8War, f8War, g8War, h8War,
 a7War, b7War, c7War, d7War, e7War, f7War, g7War, h7War,
 a6War, b6War, c6War, d6War, e6War, f6War, g6War, h6War,
 a5War, b5War, c5War, d5War, e5War, f5War, g5War, h5War,
 a4War, b4War, c4War, d4War, e4War, f4War, g4War, h4War,
 a3War, b3War, c3War, d3War, e3War, f3War, g3War, h3War,
 a2War, b2War, c2War, d2War, e2War, f2War, g2War, h2War,
 a1War, b1War, c1War, d1War, e1War, f1War, g1War, h1War]

var warArrayLength = warArray.length



var a8Ran = [B7]
var b8Ran = [C7, A7]
var c8Ran = [D7, B7]
var d8Ran = [E7, C7]
var e8Ran = [F7, D7]
var f8Ran = [G7, E7]
var g8Ran = [H7, F7]
var h8Ran = [G7]

var a7Ran = [B8, B6]
var b7Ran = [C8, C6, A6, A8]
var c7Ran = [D8, D6, B6, B8]
var d7Ran = [E8, E6, C6, C8]
var e7Ran = [F8, F6, D6, D8]
var f7Ran = [G8, G6, E6, E8]
var g7Ran = [H8, H6, F6, F8]
var h7Ran = [G6, G8]

var a6Ran = [B7, B5]
var b6Ran = [C7, C5, A5, A7]
var c6Ran = [D7, D5, B5, B7]
var d6Ran = [E7, E5, C5, C7]
var e6Ran = [F7, F5, D5, D7]
var f6Ran = [G7, G5, E5, E7]
var g6Ran = [H7, H5, F5, F7]
var h6Ran = [G5, G7]

var a5Ran = [B6, B4]
var b5Ran = [C6, C4, A4, A6]
var c5Ran = [D6, D4, B4, B6]
var d5Ran = [E6, E4, C4, C6]
var e5Ran = [F6, F4, D4, D6]
var f5Ran = [G6, G4, E4, E6]
var g5Ran = [H6, H4, F4, F6]
var h5Ran = [G4, G6]

var a4Ran = [B5, B3]
var b4Ran = [C5, C3, A3, A5]
var c4Ran = [D5, D3, B3, B5]
var d4Ran = [E5, E3, C3, C5]
var e4Ran = [F5, F3, D3, D5]
var f4Ran = [G5, G3, E3, E5]
var g4Ran = [H5, H3, F3, F5]
var h4Ran = [G3, G5]

var a3Ran = [B4, B2]
var b3Ran = [C4, C2, A2, A4]
var c3Ran = [D4, D2, B2, B4]
var d3Ran = [E4, E2, C2, C4]
var e3Ran = [F4, F2, D2, D4]
var f3Ran = [G4, G2, E2, E4]
var g3Ran = [H4, H2, F2, F4]
var h3Ran = [G2, G4]

var a2Ran = [B3, B1]
var b2Ran = [C3, C1, A1, A3]
var c2Ran = [D3, D1, B1, B3]
var d2Ran = [E3, E1, C1, C3]
var e2Ran = [F3, F1, D1, D3]
var f2Ran = [G3, G1, E1, E3]
var g2Ran = [H3, H1, F1, F3]
var h2Ran = [G1, G3]

var a1Ran = [B2]
var b1Ran = [C2, A2]
var c1Ran = [D2, B2]
var d1Ran = [E2, C2]
var e1Ran = [F2, D2]
var f1Ran = [G2, E2]
var g1Ran = [H2, F2]
var h1Ran = [G2]


var ranArray = [ a8Ran, b8Ran, c8Ran, d8Ran, e8Ran, f8Ran, g8Ran, h8Ran,
a7Ran, b7Ran, c7Ran, d7Ran, e7Ran, f7Ran, g7Ran, h7Ran,
a6Ran, b6Ran, c6Ran, d6Ran, e6Ran, f6Ran, g6Ran, h6Ran,
a5Ran, b5Ran, c5Ran, d5Ran, e5Ran, f5Ran, g5Ran, h5Ran,
a4Ran, b4Ran, c4Ran, d4Ran, e4Ran, f4Ran, g4Ran, h4Ran,
a3Ran, b3Ran, c3Ran, d3Ran, e3Ran, f3Ran, g3Ran, h3Ran,
a2Ran, b2Ran, c2Ran, d2Ran, e2Ran, f2Ran, g2Ran, h2Ran,
a1Ran, b1Ran, c1Ran, d1Ran, e1Ran, f1Ran, g1Ran, h1Ran]

var ranArrayLength = ranArray.length;





var a8Arc = [B8, A7, C8, A6]
var b8Arc = [C8, B7, A8, D8, B6]
var c8Arc = [D8, C7, B8, E8, C6, A8]
var d8Arc = [E8, D7, C8, F8, D6, B8]
var e8Arc = [F8, E7, D8, G8, E6, C8]
var f8Arc = [G8, F7, E8, H8, F6, D8]
var g8Arc = [H8, G7, F8, G6, E8]
var h8Arc = [H7, G8, H6, F8]

var a7Arc = [A8, B7, A6, C7, A5]
var b7Arc = [B8, C7, B6, A7, D7, B5]
var c7Arc = [C8, D7, C6, B7, E7, C5, A7]
var d7Arc = [D8, E7, D6, C7, F7, D5, B7]
var e7Arc = [E8, F7, E6, D7, G7, E5, C7]
var f7Arc = [F8, G7, F6, E7, H7, F5, D7]
var g7Arc = [G8, H7, G6, F7, G5, E7]
var h7Arc = [H8, H6, G7, H5, F7]

var a6Arc = [A7, B6, A5, A8, C6, A4]
var b6Arc = [B7, C6, B5, A6, B8, D6, B4]
var c6Arc = [C7, D6, C5, B6, C8, E6, C4, A6]
var d6Arc = [D7, E6, D5, C6, D8, F6, D4, B6]
var e6Arc = [E7, F6, E5, D6, E8, G6, E4, C6]
var f6Arc = [F7, G6, F5, E6, F8, H6, F4, D6]
var g6Arc = [G7, H6, G5, F6, G8, G4, E6]
var h6Arc = [H7, H5, G6, H8, H4, F6]

var a5Arc = [A6, B5, A4, A7, C5, A3]
var b5Arc = [B6, C5, B4, A5, B7, D5, B3]
var c5Arc = [C6, D5, C4, B5, C7, E5, C3, A5]
var d5Arc = [D6, E5, D4, C5, D7, F5, D3, B5]
var e5Arc = [E6, F5, E4, D5, E7, G5, E3, C5]
var f5Arc = [F6, G5, F4, E5, F7, H5, F3, D5]
var g5Arc = [G6, H5, G4, F5, G7, G3, E5]
var h5Arc = [H6, H4, G5, H7, H3, F5]

var a4Arc = [A5, B4, A3, A6, C4, A2]
var b4Arc = [B5, C4, B3, A4, B6, D4, B2]
var c4Arc = [C5, D4, C3, B5, C6, E4, C2, A4]
var d4Arc = [D5, E4, D3, C4, D6, F4, D2, B4]
var e4Arc = [E5, F4, E3, D4, E6, G4, E2, C4]
var f4Arc = [F5, G4, F3, E4, F6, H4, F2, D4]
var g4Arc = [G5, H4, G3, F4, G6, G2, E4]
var h4Arc = [H5, H3, G4, H6, H2, F4]

var a3Arc = [A4, B3, A2, A5, C3, A1]
var b3Arc = [B4, C3, B2, A3, B5, D3, B1]
var c3Arc = [C4, D3, C2, B3, C5, E3, C1, A3]
var d3Arc = [D4, E3, D2, C3, D5, F3, D1, B3]
var e3Arc = [E4, F3, E2, D3, E5, G3, E1, C3]
var f3Arc = [F4, G3, F2, E3, F5, H3, F1, D3]
var g3Arc = [G4, H3, G2, F3, G5, G1, E3]
var h3Arc = [H4, H2, G3, H5, H1, F3]

var a2Arc = [A3, B2, A1, A4, C2]
var b2Arc = [B3, C2, B1, A2, B4, D2]
var c2Arc = [C3, D2, C1, B2, C4, E2, A2]
var d2Arc = [D3, E2, D1, C2, D4, F2, B2]
var e2Arc = [E3, F2, E1, D2, E4, G2, C2]
var f2Arc = [F3, G2, F1, E2, F4, H2, D2]
var g2Arc = [G3, H2, G1, F2, G4, E2]
var h2Arc = [H3, H1, G2, H4, F2]

var a1Arc = [A2, B1, A3, C1]
var b1Arc = [B2, C1, A1, B3, D1]
var c1Arc = [C2, D1, B1, C3, E1, A1]
var d1Arc = [D2, E1, C1, D3, F1, B1]
var e1Arc = [E2, G1, D1, E3, G1, C1]
var f1Arc = [F2, G1, E1, F3, H1, D1]
var g1Arc = [G2, H1, F1, G3, E1]
var h1Arc = [H2, G1, H3, F1]


var arcArray =

[

a8Arc, b8Arc, c8Arc, d8Arc, e8Arc, f8Arc, g8Arc, h8Arc,
a7Arc, b7Arc, c7Arc, d7Arc, e7Arc, f7Arc, g7Arc, h7Arc,
a6Arc, b6Arc, c6Arc, d6Arc, e6Arc, f6Arc, g6Arc, h6Arc,
a5Arc, b5Arc, c5Arc, d5Arc, e5Arc, f5Arc, g5Arc, h5Arc,
a4Arc, b4Arc, c4Arc, d4Arc, e4Arc, f4Arc, g4Arc, h4Arc,
a3Arc, b3Arc, c3Arc, d3Arc, e3Arc, f3Arc, g3Arc, h3Arc,
a2Arc, b2Arc, c2Arc, d2Arc, e2Arc, f2Arc, g2Arc, h2Arc,
a1Arc, b1Arc, c1Arc, d1Arc, e1Arc, f1Arc, g1Arc, h1Arc


]



var a8Cat = [C8, C7, B6, A6]
var b8Cat = [D8, D7, C6, B6, A6]
var c8Cat = [E8, E7, D6, C6, B6, A7, A8]
var d8Cat = [F8, F7, E6, D6, C6, B7, B8]
var e8Cat = [G8, G7, F6, E6, D6, C7, C8]
var f8Cat = [H8, H7, G6, G6, E6, D7, D8]
var g8Cat = [H6, G6, F6, E7, E8]
var h8Cat = [H6, G6, F7, F8]

var a7Cat = [C8, C7, C6, B5, A5]
var b7Cat = [D8, D7, D6, C5, B5, A5]
var c7Cat = [E8, E7, E6, D5, C5, B5, A6, A7, A8]
var d7Cat = [F8, F7, F6, E5, D5, C5, B6, B7, B8]
var e7Cat = [G8, G7, G6, F5, E5, D5, C6, C7, C8]
var f7Cat = [H8, H7, H6, G5, F5, E5, D6, D7, D8]
var g7Cat = [H5, G5, F5, E6, E7, E8]
var h7Cat = [H5, G5, F6, F7, F8]

var a6Cat = [A8, B8, C7, C6, C5, B4, A4]
var b6Cat = [B8, C8, D7, D6, D5, C4, B4, A4, A8]
var c6Cat = [C8, D8, E7, E6, E5, D4, C4, B4, A5, A6, A7, B8]
var d6Cat = [D8, E8, F7, F6, F5, E4, D4, C4, B5, B6, B7, C8]
var e6Cat = [E8, F8, G7, G6, G5, F4, E4, D4, C5, C6, C7, D8]
var f6Cat = [F8, G8, H7, H6, H5, G4, F4, E4, D5, D6, D7, E8]
var g6Cat = [G8, H8, H4, G4, F4, E5, E6, E7, F8]
var h6Cat = [H8, H4, G4, F5, F6, F7, G8]

var a5Cat = [A7, B7, C6, C5, C4, B3, A3]
var b5Cat = [B7, C7, D6, D5, D4, C3, B3, A3, A7]
var c5Cat = [C7, D7, E6, E5, E4, D3, C3, B3, A4, A5, A6, B7]
var d5Cat = [D7, E7, F6, F5, F4, E3, D3, C3, B4, B5, B6, C7]
var e5Cat = [E7, F7, G6, G5, G4, F3, E3, D3, C4, C5, C6, D7]
var f5Cat = [F7, G7, H6, H5, H4, G3, F3, E3, D4, D5, D6, E7]
var g5Cat = [G7, H7, H3, G3, F3, E4, E5, E6, F7]
var h5Cat = [H7, H3, G3, F4, F5, F6, G7]

var a4Cat = [A6, B6, C5, C4, C3, B2, A2]
var b4Cat = [B6, C6, D5, D4, D3, C2, B2, A2, A6]
var c4Cat = [C6, D6, E5, E4, E3, D2, C2, B2, A3, A4, A5, B6]
var d4Cat = [D6, E6, F5, F4, F3, E2, D2, C2, B3, B4, B5, C6]
var e4Cat = [E6, F6, G5, G4, G3, F2, E2, D2, C3, C4, C5, D6]
var f4Cat = [F6, G6, H5, H4, H3, G2, F2, E2, D4, D5, D6, E7]
var g4Cat = [G6, H6, H2, G2, F2, E3, E4, E5, F6]
var h4Cat = [H6, H2, G2, F3, F4, F5, G6]

var a3Cat = [A5, B5, C4, C3, C2, B1, A1]
var b3Cat = [B5, C5, D4, D3, D2, C1, B1, A1, A5]
var c3Cat = [C5, D5, E4, E3, E2, D1, C1, B1, A2, A3, A4, B5]
var d3Cat = [D5, E5, F4, F3, F2, E1, D1, C1, B2, B3, B4, C5]
var e3Cat = [E5, F5, G4, G3, G2, F1, E1, D1, C2, C3, C4, D5]
var f3Cat = [F5, G5, H4, H3, H2, G1, F1, E1, D2, D3, D4, E5]
var g3Cat = [G5, H5, H1, G1, F1, E2, E3, E4, F5]
var h3Cat = [H5, H1, G1, F2, F3, F4, G5]

var a2Cat = [A4, B4, C3, C2, C1]
var b2Cat = [B4, C4, D3, D2, D1, A4]
var c2Cat = [C4, D4, E3, E2, E1, A1, A2, A3, B4]
var d2Cat = [D4, E4, F3, F2, F1, B1, B2, B3, C4]
var e2Cat = [E4, F4, G3, G2, G1, C1, C2, C3, D4]
var f2Cat = [F4, G4, H3, H2, H1, D1, D2, D3, E4]
var g2Cat = [G4, H4, E1, E2, E3, F4]
var h2Cat = [H4, F1, F2, F3, G4]

var a1Cat = [A3, B3, C2, C1]
var b1Cat = [B3, C3, D2, D1, A3]
var c1Cat = [C3, D3, E2, E1, A1, A2, B3]
var d1Cat = [D3, E3, F2, F1, B1, B2, C3]
var e1Cat = [E3, F3, G2, G1, C1, C2, D3]
var f1Cat = [F3, G3, H2, H1, D1, D2, E3]
var g1Cat = [G3, H3, E1, E2, F3]
var h1Cat = [H3, F1, F2, G3]

var catArray =

[
a8Cat, b8Cat, c8Cat, d8Cat, e8Cat, f8Cat, g8Cat, h8Cat,
a7Cat, b7Cat, c7Cat, d7Cat, e7Cat, f7Cat, g7Cat, h7Cat,
a6Cat, b6Cat, c6Cat, d6Cat, e6Cat, f6Cat, g6Cat, h6Cat,
a5Cat, b5Cat, c5Cat, d5Cat, e5Cat, f5Cat, g5Cat, h5Cat,
a4Cat, b4Cat, c4Cat, d4Cat, e4Cat, f4Cat, g4Cat, h4Cat,
a3Cat, b3Cat, c3Cat, d3Cat, e3Cat, f3Cat, g3Cat, h3Cat,
a2Cat, b2Cat, c2Cat, d2Cat, e2Cat, f2Cat, g2Cat, h2Cat,
a1Cat, b1Cat, c1Cat, d1Cat, e1Cat, f1Cat, g1Cat, h1Cat
]






function combat () {


for (var i = 0; i < squareArrayLength; i++) {

if (squareArray[i].unit === 'peon' || squareArray[i].unit === 'warrior' || squareArray[i].unit === 'footman' || squareArray[i].unit === 'brute'
 || squareArray[i].unit === 'knight' || squareArray[i].unit === 'scout' || squareArray[i].unit === 'conquerer' || squareArray[i].unit === 'goliath') {

for (var j = 0; j < warArray[i].length; j++) {


  if (warArray[i][j].team !== squareArray[i].team && warArray[i][j].team !== 0 && squareArray[i].tar === 'none') {
    squareArray[i].tar = warArray[i][j];

        if (infoArray[i].oneHit === 0) {
        squareArray[i].tar.hp -= squareArray[i].att;
        infoArray[i].oneHit = 1;
        } else { };


    } else if (warArray[i][j].team !== 0 && warArray[i][j].team !== squareArray[i].team) {

        if (infoArray[i].oneHit === 0) {
            squareArray[i].tar.hp -= squareArray[i].att;
            infoArray[i].oneHit = 1;
            } else { };
          } else { }

}

} else if (squareArray[i].unit === 'ranger' || squareArray[i].unit === 'infiltrator') {

for (var j = 0; j < ranArray[i].length; j++) {



  if (ranArray[i][j].team !== squareArray[i].team && ranArray[i][j].team !== 0 && squareArray[i].tar === 'none') {
    squareArray[i].tar = ranArray[i][j];

        if (infoArray[i].oneHit === 0) {
        squareArray[i].tar.hp -= squareArray[i].att;
        infoArray[i].oneHit = 1;
        } else { };


    }  else if (ranArray[i][j].team !== 0 && ranArray[i][j].team !== squareArray[i].team) {

        if (infoArray[i].oneHit === 0) {
            squareArray[i].tar.hp -= squareArray[i].att;
            infoArray[i].oneHit = 1;
            } else { };
          } else { }


}



} else if (squareArray[i].unit === 'archer' || squareArray[i].unit === 'mage') {

for (var j = 0; j < arcArray[i].length; j++) {



  if (arcArray[i][j].team !== squareArray[i].team && arcArray[i][j].team !== 0 && squareArray[i].tar === 'none') {
    squareArray[i].tar = arcArray[i][j];

        if (infoArray[i].oneHit === 0) {
        squareArray[i].tar.hp -= squareArray[i].att;
        infoArray[i].oneHit = 1;
        } else { };


    }  else if (arcArray[i][j].team !== 0 && arcArray[i][j].team !== squareArray[i].team) {

        if (infoArray[i].oneHit === 0) {
            squareArray[i].tar.hp -= squareArray[i].att;
            infoArray[i].oneHit = 1;
            } else { };
          } else { }


}

} else if (squareArray[i].unit === 'catapult') {

for (var j = 0; j < catArray[i].length; j++) {



  if (catArray[i][j].team !== squareArray[i].team && catArray[i][j].team !== 0 && squareArray[i].tar === 'none') {
    squareArray[i].tar = catArray[i][j];

        if (infoArray[i].oneHit === 0) {
        squareArray[i].tar.hp -= squareArray[i].att;
        infoArray[i].oneHit = 1;
        } else { };


    }  else if (catArray[i][j].team !== 0 && catArray[i][j].team !== squareArray[i].team) {

        if (infoArray[i].oneHit === 0) {
            squareArray[i].tar.hp -= squareArray[i].att;
            infoArray[i].oneHit = 1;
            } else { };
          } else { }


}


} else { };

  }

}






function resetHit () {
  for (i = 0; i < infoArrayLength; i++)
  infoArray[i].oneHit = 0;
}

function kill () {
  for (i = 0; i < squareArrayLength; i++)

        if (squareArray[i].hp <= 0) {
          squareArray[i].team = 0;
          squareArray[i].unit = 0;
          squareArray[i].hp = 0;
          squareArray[i].att = 0;
          squareArray[i].tar = 'none'
      } else {}

}

function resetTar () {
    for (i = 0; i < squareArrayLength; i++)

  if (squareArray[i].tar.hp <= 0) {
    squareArray[i].tar = 'none'
  }
}

function test () {
  farm = 1000;
  merchant = 1000;
  artist = 1000;
  scholar = 1000;
  footmanDone = 1;
  bruteDone = 1;
  rangerDone = 1;
  knightDone = 1;
  archerDone = 1;
  scoutDone = 1;
  conquererDone = 1;
  catapultDone = 1;
  goliathDone = 1;
  mageDone = 1;
  infiltratorDone = 1;
  priestDone = 1;
  generalDone = 1;
  berzerkerDone = 1;
  showBuildings();
  testTeam = 1;
}

function showBuildings () {
document.getElementById('granaryPic').style.visibility = 'visible'
document.getElementById('aqueductPic').style.visibility = 'visible'

document.getElementById('libraryPic').style.visibility = 'visible'
document.getElementById('universityPic').style.visibility = 'visible'
document.getElementById('laboratoryPic').style.visibility = 'visible'

document.getElementById('merchantPic').style.visibility = 'visible'
document.getElementById('marketPic').style.visibility = 'visible'
document.getElementById('harborPic').style.visibility = 'visible'
document.getElementById('treasuryPic').style.visibility = 'visible'


document.getElementById('farmPic').style.visibility = 'visible'
document.getElementById('shrinePic').style.visibility = 'visible'
document.getElementById('templePic').style.visibility = 'visible'
document.getElementById('cathedralPic').style.visibility = 'visible'
document.getElementById('siloPic').style.visibility = 'visible'
};




function checkMilitaryWin () {
  if (A8.team !== 0 && A8.team === H8.team && H8.team === A1.team && A1.team === H1.team) {
    alert(A8.team + ' team wins by military victory!');

  }
}



function endTurn () {
  if (chosenTeam === 1) {
  endTurnCiv();
  combat();
  resetHit();
  kill();
  resetTar();
  resetWalk();
  walk();
  draw();
  redrawUnit();
resetSquare();
fillHP();
checkMilitaryWin();
zoneCheck();
chooseAITeam();
aiBlue();
} else {playErr();}
}



var hpShadowColor = 'black'


function fillHP () {
  for (var i = 0; i < squareArrayLength; i++) {
    c.fillStyle = hpColor;
    c.font = hpFont;
    c.strokeStyle = hpShadowColor;
    c.lineWidth = 3;
    if (squareArray[i].hp > 0) {
    c.strokeText(squareArray[i].hp, infoArray[i].locX + 32, infoArray[i].locY + 50);
    c.fillText(squareArray[i].hp, infoArray[i].locX + 32, infoArray[i].locY + 50);
  } else { };


  }
}







function resetSquare () {
for (var i = 0; i < squareArrayLength; i++) {


  if (squareArray[i].hp <= 0) {
    c.fillStyle = infoArray[i].color;
    c.fillRect(infoArray[i].locX, infoArray[i].locY, 87.5, 87.5);

    if (squareArray[i] === A8) {
      c.drawImage(
        castle, 0, 0, 80, 80
      )
    }
    if (squareArray[i] === H8) {
      c.drawImage(
        castle, 612.5, 0, 80, 80
      )
    }
    if (squareArray[i] === A1) {
      c.drawImage(
        castle, 0, 612.5, 80, 80
      )
    }
    if (squareArray[i] === H1) {
      c.drawImage(
        castle, 612.5, 612.5, 80, 80
      )
    } else {};




    squareArray[i].team = 0;
    squareArray[i].unit = 0;
    squareArray[i].hp = 0;
    squareArray[i].att = 0;
    squareArray[i].def = 0;
    squareArray[i].tar = 'none';
  }
}
}

var squareArray =

[A8, B8, C8, D8, E8, F8, G8, H8,
A7, B7, C7, D7, E7, F7, G7, H7,
A6, B6, C6, D6, E6, F6, G6, H6,
A5, B5, C5, D5, E5, F5, G5, H5,
A4, B4, C4, D4, E4, F4, G4, H4,
A3, B3, C3, D3, E3, F3, G3, H3,
A2, B2, C2, D2, E2, F2, G2, H2,
A1, B1, C1, D1, E1, F1, G1, H1];


var squareArrayLength = squareArray.length;


var infoArray =

[a8, b8, c8, d8, e8, f8, g8, h8,
a7, b7, c7, d7, e7, f7, g7, h7,
a6, b6, c6, d6, e6, f6, g6, h6,
a5, b5, c5, d5, e5, f5, g5, h5,
a4, b4, c4, d4, e4, f4, g4, h4,
a3, b3, c3, d3, e3, f3, g3, h3,
a2, b2, c2, d2, e2, f2, g2, h2,
a1, b1, c1, d1, e1, f1, g1, h1]


var infoArrayLength = infoArray.length;



function redrawUnit () {
  for (var i = 0; i < infoArrayLength; i++) {
    if (squareArray[i].unit === 'peon') {
      teamPeon(infoArray[i].locX, infoArray[i].locY, squareArray[i].team);
    }  else if (squareArray[i].unit === 'warrior') {
      teamWarrior(infoArray[i].locX, infoArray[i].locY, squareArray[i].team);
    } else if (squareArray[i].unit === 'archer') {
      teamArcher(infoArray[i].locX, infoArray[i].locY, squareArray[i].team);
    } else if (squareArray[i].unit === 'ranger') {
      teamRanger(infoArray[i].locX, infoArray[i].locY, squareArray[i].team);
    } else if (squareArray[i].unit === 'footman') {
      teamFootman(infoArray[i].locX, infoArray[i].locY, squareArray[i].team)
    } else if (squareArray[i].unit === 'brute') {
      teamBrute(infoArray[i].locX, infoArray[i].locY, squareArray[i].team)
    }  else if (squareArray[i].unit === 'knight') {
      teamKnight(infoArray[i].locX, infoArray[i].locY, squareArray[i].team)
    }  else if (squareArray[i].unit === 'scout') {
      teamScout(infoArray[i].locX, infoArray[i].locY, squareArray[i].team)
    }  else if (squareArray[i].unit === 'conquerer') {
      teamConquerer(infoArray[i].locX, infoArray[i].locY, squareArray[i].team)
    }  else if (squareArray[i].unit === 'catapult') {
      teamCatapult(infoArray[i].locX, infoArray[i].locY, squareArray[i].team)
    }  else if (squareArray[i].unit === 'goliath') {
      teamGoliath(infoArray[i].locX, infoArray[i].locY, squareArray[i].team)
    }  else if (squareArray[i].unit === 'mage') {
      teamMage(infoArray[i].locX, infoArray[i].locY, squareArray[i].team)
    }  else if (squareArray[i].unit === 'infiltrator') {
      teamInfiltrator(infoArray[i].locX, infoArray[i].locY, squareArray[i].team)
    }  else if (squareArray[i].unit === 'priest') {
      teamPriest(infoArray[i].locX, infoArray[i].locY, squareArray[i].team)
    }  else if (squareArray[i].unit === 'general') {
      teamGeneral(infoArray[i].locX, infoArray[i].locY, squareArray[i].team)
    }  else if (squareArray[i].unit === 'berzerker') {
      teamBerzerker(infoArray[i].locX, infoArray[i].locY, squareArray[i].team)

  }  else { }
  }

}




var buildSound = document.getElementById('bs');

function playBs() {
  buildSound.play();
}

var errorSound = document.getElementById('err')

function playErr() {
  errorSound.play();
}

var click = document.getElementById('click')

function playClick() {
  click.play();
}

var lowSound = document.getElementById('low-tone')
 function playTurn() {
   lowSound.play();
 }

var threeTaps = document.getElementById('wonderSound')
  function playWonder() {
    threeTaps.play();
  }

var multipleClicks = document.getElementById('multiple-clicks')
  function playClicks() {
    multipleClicks.play();
  }


  var endTurnLink = document.getElementById('endTurn');
  var oneXLink = document.getElementById('mult1');
  var tenXLink = document.getElementById('mult10');
  var hundXLink = document.getElementById('mult100');



document.onkeydown = function (e) {
    if (e.keyCode == 69) {
        endTurnLink.click();
    } else if (e.keyCode == 49) {
        oneXLink.click();
    } else if (e.keyCode == 50) {
      tenXLink.click();
    } else if (e.keyCode == 51) {
      hundXLink.click();
    }
};





//spacebar keyCode is 32
//Building Variables

var farm = 1;
var farmCost = 3;
var citizen = 10;
var citizenX = 1;

var floorFarm = Math.floor(farm);

var floorCitizen = Math.floor(citizen)


var merchant = 0;
var floorMerchant = Math.floor(merchant)

var artist = 0;
var floorArtist = Math.floor(artist)

var scholar = 0;
var floorScholar = Math.floor(scholar)


var gold = 0;
var goldX = 1;

var floorGold = Math.floor(gold);

var culture = 0;
var cultureX = 1;

var floorCulture = Math.floor(culture);

var research = 0;
var researchX = 1;

var floorResearch = Math.floor(research);


var currentBuildings = ''
var amtOfBuildings = 0;

var iCanMarket = true;
var iCanHarbor = true;
var iCanTreasury = true;

var iCanGranary = true;
var iCanField = true;
var iCanAqueduct = true;

var iCanShrine = true;
var iCanTemple = true;
var iCanCathedral = true;

var iCanLibrary = true;
var iCanUni = true;
var iCanLab = true;

var farmCount = 0;
var citizenCount = 0;
var merchantCount = 0;
var artistCount = 0;
var scholarCount = 0;

var granaryCount = 0;
var fieldCount = 0;
var aqueductCount = 0;

var marketCount = 0;
var harborCount = 0;
var treasuryCount = 0;

var shrineCount = 0;
var templeCount = 0;
var cathedralCount = 0;

var libraryCount = 0;
var universityCount = 0;
var laboratoryCoun = 0;


var turn = 1
var researchCache = 0;

var Array1 = []
var Array2 = []
var Array3 = []
var Array4 = []



//Tech Tree Variables


var marketStatus = 0;
var marketProg = 0;
var marketFinal = 10;
var marketDone = 0;

var footmanStatus = 0;
var footmanProg = 0;
var footmanFinal = 8;
var footmanDone = 0;

var libraryStatus = 0;
var libraryProg = 0;
var libraryFinal = 12;
var libraryDone = 0;

var granaryStatus = 0;
var granaryProg = 0;
var granaryFinal = 14;
var granaryDone = 0;

var bruteStatus = 0;
var bruteProg = 0;
var bruteFinal = 14;
var bruteDone = 0;

var rangerStatus = 0;
var rangerProg = 0;
var rangerFinal = 16;
var rangerDone = 0;

var ritualStatus = 0;
var ritualProg = 0;
var ritualFinal = 20;
var ritualDone = 0;

var knightStatus = 0;
var knightProg = 0;
var knightFinal = 24;
var knightDone = 0;

var chantsStatus = 0;
var chantsProg = 0;
var chantsFinal = 24;
var chantsDone = 0;

var archerStatus = 0;
var archerProg = 0;
var archerFinal = 20;
var archerDone = 0;

var bloodSacrificeStatus = 0;
var bloodSacrificeProg = 0;
var bloodSacrificeFinal = 22;
var bloodSacrificeDone = 0;

var shrineStatus = 0;
var shrineProg = 0;
var shrineFinal = 20;
var shrineDone = 0;

var universityStatus = 0;
var universityProg = 0;
var universityFinal = 40;
var universityDone = 0;

var classicalArtStatus = 0;
var classicalArtProg = 0;
var classicalArtFinal = 50;
var classicalArtDone = 0;

var harborStatus = 0;
var harborProg = 0;
var harborFinal = 32;
var harborDone = 0;

var religionStatus = 0;
var religionProg = 0;
var religionFinal = 40;
var religionDone = 0;

var templeStatus = 0;
var templeProg = 0;
var templeFinal = 42;
var templeDone = 0;

var conquererStatus = 0;
var conquererProg = 0;
var conquererFinal = 60;
var conquererDone = 0;

var catapultStatus = 0;
var catapultProg = 0;
var catapultFinal = 60;
var catapultDone = 0;

var lawAndOrderStatus = 0;
var lawAndOrderProg = 0;
var lawAndOrderFinal = 65;
var lawAndOrderDone = 0;

var priestStatus = 0;
var priestProg = 0;
var priestFinal = 80;
var priestDone = 0;

var foodSiloStatus = 0;
var foodSiloProg = 0;
var foodSiloFinal = 80;
var foodSiloDone = 0;

var freeTradeStatus = 0;
var freeTradeProg = 0;
var freeTradeFinal = 120;
var freeTradeDone = 0;

var generalStatus = 0;
var generalProg = 0;
var generalFinal = 110;
var generalDone = 0;

var laboratoryStatus = 0;
var laboratoryProg = 0;
var laboratoryFinal = 130;
var laboratoryDone = 0;

var aqueductStatus = 0;
var aqueductProg = 0;
var aqueductFinal = 160;
var aqueductDone = 0;

var cathedralStatus = 0;
var cathedralProg = 0;
var cathedralFinal = 200;
var cathedralDone = 0;

var treasuryStatus = 0;
var treasuryProg = 0;
var treasuryFinal = 210;
var treasuryDone = 0;

var goliathStatus = 0;
var goliathProg = 0;
var goliathFinal = 250;
var goliathDone = 0;

var mageStatus = 0;
var mageProg = 0;
var mageFinal = 300;
var mageDone = 0;

var abstractArtStatus = 0;
var abstractArtProg = 0;
var abstractArtFinal = 400;
var abstractArtDone = 0;

var infiltratorStatus = 0;
var infiltratorProg = 0;
var infiltratorFinal = 400;
var infiltratorDone = 0;

var berzerkerStatus = 0;
var berzerkerProg = 0;
var berzerkerFinal = 400;
var berzerkerDone = 0;

var enlightenmentStatus = 0;
var enlightenmentProg = 0;
var enlightenmentFinal = 400;
var enlightenmentDone = 0;

var victoryPoint = 0;
var victoryPPT = 0;

var bloodSacrificeComp = 0;
var ritualComp = 0;
var chantsComp = 0;
var religionComp = 0;
var classicalArtComp = 0;
var lawAndOrderComp = 0;
var freeTradeComp = 0;
var abstractArtComp = 0;
var enlightenmentComp = 0;

function checkUnitSelect  () {
  for (var i = 0; i < 16; i++) {
  document.getElementsByClassName('unit')[i].style.backgroundColor = '#9494b8';
  document.getElementsByClassName('unit')[i].style.border = '2px solid black';
};
}


function cheat () {
  farm = 1000;
  merchant = 1000;
  artist = 1000;
  scholar = 1000;

}

var wind = 0;

function checkWin () {
  if (victoryPoint >= 100 && wind === 0) {
    alert('YOU WIND')
    wind = 1;
  } else { };
}




function calcVictoryPoints () {
  victoryPoint += victoryPPT;
  document.getElementById('victory-points').innerHTML = '= ' + victoryPoint;
}




function bloodSacrificeWonder () {
  if (culture >= 50 && bloodSacrificeComp === 0 && bloodSacrificeDone === 1) {
    victoryPPT += 1;
    culture -= 50;
    bloodSacrificeComp = 1;
    playWonder();
    display();
    document.getElementById('bloodSacrifice').style.color = 'white'
    document.getElementById('bloodSacrifice').style.backgroundColor = 'black'
  } else { playErr();  }
}

function ritualWonder () {
  if (culture >= 50 && ritualComp === 0 && ritualDone === 1) {
    victoryPPT += 1;
    culture -= 50;
    ritualComp = 1;
    playWonder();
    display();
    document.getElementById('ritual').style.color = 'white'
    document.getElementById('ritual').style.backgroundColor = 'black'
  } else { playErr();  }
}

function chantsWonder () {
  if (culture >= 50 && chantsComp === 0 && chantsDone === 1) {
    victoryPPT += 1;
    culture -= 50;
    chantsComp = 1;
    playWonder();
    display();
    document.getElementById('chants').style.color = 'white'
    document.getElementById('chants').style.backgroundColor = 'black'
  } else { playErr();  }
}

function religionWonder () {
  if (culture >= 200 && religionComp === 0 && religionDone === 1) {
    victoryPPT += 2;
    culture -= 200;
    religionComp = 1;
    playWonder();
    display();
    document.getElementById('religion').style.color = 'white'
    document.getElementById('religion').style.backgroundColor = 'black'
  } else { playErr();  }
}
function classicalArtWonder () {
  if (culture >= 200 && classicalArtComp === 0 && classicalArtDone === 1) {
    victoryPPT += 2;
    culture -= 200;
    classicalArtComp = 1;
    playWonder();
    display();
    document.getElementById('classicalArt').style.color = 'white'
    document.getElementById('classicalArt').style.backgroundColor = 'black'
  } else { playErr();  }
}
function lawAndOrderWonder () {
  if (culture >= 200 && lawAndOrderComp === 0 && lawAndOrderDone === 1) {
    victoryPPT += 2;
    culture -= 200;
    lawAndOrderComp = 1;
    playWonder();
    display();
    document.getElementById('lawAndOrder').style.color = 'white'
    document.getElementById('lawAndOrder').style.backgroundColor = 'black'
  } else { playErr();  }
}
function freeTradeWonder () {
  if (culture >= 500 && freeTradeComp === 0 && freeTradeDone === 1) {
    victoryPPT += 3;
    culture -= 500;
    freeTradeComp = 1;
    playWonder();
    display();
    document.getElementById('freeTrade').style.color = 'white'
    document.getElementById('freeTrade').style.backgroundColor = 'black'
  } else { playErr();  }
}
function abstractArtWonder () {
  if (culture >= 500 && abstractArtComp === 0 && abstractArtDone === 1) {
    victoryPPT += 3;
    culture -= 500;
    abstractArtComp = 1;
    playWonder();
    display();
    document.getElementById('abstractArt').style.color = 'white'
    document.getElementById('abstractArt').style.backgroundColor = 'black'
  } else { playErr();  }
}
function enlightenmentWonder () {
  if (culture >= 500 && enlightenmentComp === 0 && abstractArtDone === 1) {
    victoryPPT += 3;
    culture -= 500;
    enlightenmentComp = 1;
    playWonder();
    display();
    document.getElementById('enlightenment').style.color = 'white'
    document.getElementById('enlightenment').style.backgroundColor = 'black'
  } else { playErr(); }
}





function clickMarket () {
  if (marketDone === 0) {
    marketStatus = 1;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Market'
    document.getElementById('techTree2').innerHTML = marketProg + ' / 10'
    console.log('market = ' + marketStatus)
    console.log('footman = ' + footmanStatus)
    console.log('library = ' + libraryStatus)
    console.log('granary = ' + granaryStatus)
  } else { playErr(); }
};

function clickFootman () {
  if (footmanDone === 0) {
    marketStatus = 0;
    footmanStatus = 1;
    libraryStatus = 0;
    granaryStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Footman'
    document.getElementById('techTree2').innerHTML = footmanProg + ' / 8'
    console.log('market = ' + marketStatus)
    console.log('footman = ' + footmanStatus)
    console.log('library = ' + libraryStatus)
    console.log('granary = ' + granaryStatus)
  } else {  playErr(); }
};

function clickLibrary () {
  if (libraryDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 1;
    granaryStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Library'
    document.getElementById('techTree2').innerHTML = libraryProg + ' / 12'
    console.log('market = ' + marketStatus)
    console.log('footman = ' + footmanStatus)
    console.log('library = ' + libraryStatus)
    console.log('granary = ' + granaryStatus)
  } else { playErr(); }
};

function clickGranary () {
  if (marketDone === 1 && granaryDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 1;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Granary'
    document.getElementById('techTree2').innerHTML = granaryProg + ' / 14'
    console.log('market = ' + marketStatus)
    console.log('footman = ' + footmanStatus)
    console.log('library = ' + libraryStatus)
    console.log('granary = ' + granaryStatus)
} else { playErr();  }
};


var techBackgroundColor = '#00e6e6'
var techBorder = '2px solid black'
//checkTechStatus();
//document.getElementById('').style.backgroundColor = techBackgroundColor
//document.getElementById('').style.border = techBorder


function checkTechStatus () {
  for (i = 0; i < 35; i++) {
  document.getElementsByClassName('tech')[i].style.backgroundColor = '#9494b8';
  document.getElementsByClassName('tech')[i].style.border = '2px solid #00e6e6';
};

}

function clickBrute () {
  if (footmanDone === 1 && bruteDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 1;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Brute'
    document.getElementById('techTree2').innerHTML = bruteProg + ' / 14'
} else { playErr();  }
};

function clickRanger () {
  if (libraryDone === 1 && rangerDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 1;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Ranger'
    document.getElementById('techTree2').innerHTML = rangerProg + ' / 16'
} else { playErr();  }
};
var scoutStatus = 0;
var scoutProg = 0;
var scoutFinal = 22;
var scoutDone = 0;
function clickScout () {
  if (libraryDone === 1 && scoutDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    scoutStatus = 1;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Scout'
    document.getElementById('techTree2').innerHTML = scoutProg + ' / 22'
} else { playErr();  }
};
function clickBloodSacrifice () {
  if (granaryDone === 1 && bloodSacrificeDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 1;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Blood Sacrifice'
    document.getElementById('techTree2').innerHTML = bloodSacrificeProg + ' / 22'
} else { playErr();  }
};

function clickShrine () {
  if (granaryDone === 1 && shrineDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 1;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Shrine'
    document.getElementById('techTree2').innerHTML = shrineProg + ' / 20'
} else { playErr();  }
};

function clickRitual () {
  if (marketDone === 1 && ritualDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 1;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Ritual'
    document.getElementById('techTree2').innerHTML = ritualProg + ' / 20'
} else { playErr();  }
};

function clickKnight () {
  if (footmanDone === 1 && knightDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 1;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Knight'
    document.getElementById('techTree2').innerHTML = knightProg + ' / 24'
} else { playErr();  }
};

function clickArcher () {
  if (libraryDone === 1 && archerDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 1;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Archer'
    document.getElementById('techTree2').innerHTML = archerProg + ' / 20'
} else { playErr();  }
};

function clickUniversity () {
  if (ritualDone === 1 && universityDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 1;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'University'
    document.getElementById('techTree2').innerHTML = universityProg + ' / 40'
} else { playErr();  }
};

function clickClassicalArt () {
  if (ritualDone === 1 && knightDone === 1 && archerDone === 1 && classicalArtDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 1;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Classical Art'
    document.getElementById('techTree2').innerHTML = classicalArtProg + ' / 50'
} else { playErr();  }
};

function clickChants () {
  if (knightDone === 1 && chantsDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 1;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Chants'
    document.getElementById('techTree2').innerHTML = chantsProg + ' / 24'
} else { playErr();  }
};

function clickHarbor () {
  if (archerDone === 1 && harborDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 1;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Harbor'
    document.getElementById('techTree2').innerHTML = harborProg + ' / 32'
} else { playErr();  }
};

function clickReligion () {
  if (templeDone === 1 && religionDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 1;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Religion'
    document.getElementById('techTree2').innerHTML = religionProg + ' / 40'
} else { playErr();  }
};

function clickTemple () {
  if (universityDone === 1 && templeDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 1;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Temple'
    document.getElementById('techTree2').innerHTML = templeProg + ' / 42'
} else { playErr();  }
};

function clickConquerer () {
  if (classicalArtDone === 1 && conquererDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 1;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Conquerer'
    document.getElementById('techTree2').innerHTML = conquererProg + ' / 60'
} else { playErr();  }
};

function clickCatapult () {
  if (harborDone === 1 && catapultDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 1;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Catapult'
    document.getElementById('techTree2').innerHTML = catapultProg + ' / 60'
} else { playErr();  }
};

function clickLawAndOrder () {
  if (harborDone === 1 && lawAndOrderDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 1;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Law and Order'
    document.getElementById('techTree2').innerHTML = lawAndOrderProg + ' / 65'
} else { playErr();  }
};

function clickPriest () {
  if (templeDone === 1 && priestDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 1;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Priest'
    document.getElementById('techTree2').innerHTML = priestProg + ' / 80'
} else { playErr();  }
};

function clickFreeTrade () {
  if (templeDone === 1 && conquererDone === 1 && freeTradeDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 1;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Free Trade'
    document.getElementById('techTree2').innerHTML = freeTradeProg + ' / 120'
} else { playErr();  }
};

function clickGeneral () {
  if (catapultDone === 1 && generalDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 1;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'General'
    document.getElementById('techTree2').innerHTML = generalProg + ' / 110'
} else {  playErr(); }
};

function clickLaboratory () {
  if (lawAndOrderDone === 1 && laboratoryDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 1;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Laboratory'
    document.getElementById('techTree2').innerHTML = laboratoryProg + ' / 130'
} else {  playErr(); }
};

function clickFoodSilo () {
  if (lawAndOrderDone === 1 && foodSiloDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 1;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Food Silo'
    document.getElementById('techTree2').innerHTML = foodSiloProg + ' / 80'
} else {  playErr(); }
};

function clickAqueduct () {
  if (freeTradeDone === 1 && aqueductDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 1;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Aqueduct'
    document.getElementById('techTree2').innerHTML = aqueductProg + ' / 160'
} else { playErr();  }
};

function clickCathedral () {
  if (freeTradeDone === 1 && cathedralDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 1;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Cathedral'
    document.getElementById('techTree2').innerHTML = cathedralProg + ' / 200'
} else { playErr();  }
};

function clickTreasury () {
  if (freeTradeDone === 1 && treasuryDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 1;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Treasury'
    document.getElementById('techTree2').innerHTML = treasuryProg + ' / 210'
} else { playErr();  }
};

function clickGoliath () {
  if (freeTradeDone === 1 && generalDone === 1 && goliathDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 1;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Goliath'
    document.getElementById('techTree2').innerHTML = goliathProg + ' / 250'
} else { playErr();  }
};
function clickMage () {
  if (generalDone === 1 && laboratoryDone === 1 && mageDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 1;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Mage'
    document.getElementById('techTree2').innerHTML = mageProg + ' / 300'
} else { playErr();  }
};

function clickAbstractArt () {
  if (cathedralDone === 1 && abstractArtDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 1;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Abstract Art'
    document.getElementById('techTree2').innerHTML = abstractArtProg + ' / 400'
} else { playErr();  }
};

function clickInfiltrator () {
  if (treasuryDone === 1 && infiltratorDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 1;
    berzerkerStatus = 0;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Infiltrator'
    document.getElementById('techTree2').innerHTML = infiltratorProg + ' / 400'
} else { playErr();  }
};

function clickBerzerker () {
  if (goliathDone === 1 && berzerkerDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 1;
    enlightenmentStatus = 0;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Berzerker'
    document.getElementById('techTree2').innerHTML = berzerkerProg + ' / 400'
} else { playErr();  }
};

function clickEnlightenment () {
  if (mageDone === 1 && enlightenmentDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    bruteStatus = 0;
    rangerStatus = 0;
    bloodSacrificeStatus = 0;
    shrineStatus = 0;
    ritualStatus = 0;
    knightStatus = 0;
    archerStatus = 0;
    universityStatus = 0;
    classicalArtStatus = 0;
    chantsStatus = 0;
    harborStatus = 0;
    religionStatus = 0;
    templeStatus = 0;
    conquererStatus = 0;
    catapultStatus = 0;
    lawAndOrderStatus = 0;
    priestStatus = 0;
    freeTradeStatus = 0;
    generalStatus = 0;
    laboratoryStatus = 0;
    foodSiloStatus = 0;
    aqueductStatus = 0;
    cathedralStatus = 0;
    treasuryStatus = 0;
    goliathStatus = 0;
    mageStatus = 0;
    abstractArtStatus = 0;
    infiltratorStatus = 0;
    berzerkerStatus = 0;
    enlightenmentStatus = 1;
    playClick();
    document.getElementById('techTree1').innerHTML = 'Enlightenment'
    document.getElementById('techTree2').innerHTML = enlightenmentProg + ' / 400'
} else { playErr();  }
};




function mark () {
  if (marketProg >= marketFinal) {
    document.getElementById('techTree2').innerHTML = marketProg + ' / 10'
    marketDone = 1;
    marketStatus = 0;
    research = 0;
    document.getElementById('marketTech').style.backgroundColor = '#2d2d86';
    document.getElementById('marketTech').style.color = 'white';
    console.log('Scholars researched market.')
  } else {document.getElementById('techTree2').innerHTML = marketProg + ' / 10'}
}

function foot () {
  if (footmanProg >= footmanFinal) {
    document.getElementById('techTree2').innerHTML = footmanProg + ' / 8'
    footmanDone = 1;
    footmanStatus = 0;
    research = 0;
    document.getElementById('footmanTech').style.backgroundColor = '#2d2d86';
    document.getElementById('footmanTech').style.color = 'white';
    console.log('Scholars researched footman.')
  } else {document.getElementById('techTree2').innerHTML = footmanProg + ' / 8'}
}

function lib () {
  if (libraryProg >= libraryFinal) {
    document.getElementById('techTree2').innerHTML = libraryProg + ' / 12'
    libraryDone = 1;
    libraryStatus = 0;
    research = 0;
    document.getElementById('libraryTech').style.backgroundColor = '#2d2d86';
    document.getElementById('libraryTech').style.color = 'white';
    console.log('Scholars researched library.')
  } else {document.getElementById('techTree2').innerHTML = libraryProg + ' / 12'}
}

function gran () {
  if (granaryProg >= granaryFinal) {
    document.getElementById('techTree2').innerHTML = granaryProg + ' / 14'
    granaryDone = 1;
    granaryStatus = 0;
    research = 0;
    document.getElementById('granaryTech').style.backgroundColor = '#2d2d86';
    document.getElementById('granaryTech').style.color = 'white';
    console.log('Scholars researched granary.')
  } else {document.getElementById('techTree2').innerHTML = granaryProg + ' / 14'}
}

function brute () {
  if (bruteProg >= bruteFinal) {
    document.getElementById('techTree2').innerHTML = bruteProg + ' / 14'
    bruteDone = 1;
    bruteStatus = 0;
    research = 0;
    document.getElementById('bruteTech').style.backgroundColor = '#2d2d86';
    document.getElementById('bruteTech').style.color = 'white';
    console.log('Scholars researched brute.')
  } else {document.getElementById('techTree2').innerHTML = bruteProg + ' / 14'}
}

function rang () {
  if (rangerProg >= rangerFinal) {
    document.getElementById('techTree2').innerHTML = rangerProg + ' / 16'
    rangerDone = 1;
    rangerStatus = 0;
    research = 0;
    document.getElementById('rangerTech').style.backgroundColor = '#2d2d86';
    document.getElementById('rangerTech').style.color = 'white';
    console.log('Scholars researched ranger.')
  } else {document.getElementById('techTree2').innerHTML = rangerProg + ' / 16'}
}

function scou () {
  if (scoutProg >= scoutFinal) {
    document.getElementById('techTree2').innerHTML = scoutProg + ' / 22'
    scoutDone = 1;
    scoutStatus = 0;
    research = 0;
    document.getElementById('scoutTech').style.backgroundColor = '#2d2d86';
    document.getElementById('scoutTech').style.color = 'white';
    console.log('Scholars researched scout.')
  } else {document.getElementById('techTree2').innerHTML = scoutProg + ' / 22'}
}

function rit () {
  if (ritualProg >= ritualFinal) {
    document.getElementById('techTree2').innerHTML = ritualProg + ' / 20'
    ritualDone = 1;
    ritualStatus = 0;
    research = 0;
    document.getElementById('ritualTech').style.backgroundColor = '#2d2d86';
    document.getElementById('ritualTech').style.color = 'white';
    console.log('Scholars researched ritual.')
  } else {document.getElementById('techTree2').innerHTML = ritualProg + ' / 20'}
}

function kni () {
  if (knightProg >= knightFinal) {
    document.getElementById('techTree2').innerHTML = knightProg + ' / 24'
    knightDone = 1;
    knightStatus = 0;
    research = 0;
    document.getElementById('knightTech').style.backgroundColor = '#2d2d86';
    document.getElementById('knightTech').style.color = 'white';
    console.log('Scholars researched knight.')
  } else {document.getElementById('techTree2').innerHTML = knightProg + ' / 24'}
}

function cha () {
  if (chantsProg >= chantsFinal) {
    document.getElementById('techTree2').innerHTML = chantsProg + ' / 24'
    chantsDone = 1;
    chantsStatus = 0;
    research = 0;
    document.getElementById('chantsTech').style.backgroundColor = '#2d2d86';
    document.getElementById('chantsTech').style.color = 'white';
    console.log('Scholars researched chants.')
  } else {document.getElementById('techTree2').innerHTML = chantsProg + ' / 24'}
}

function arc () {
  if (archerProg >= archerFinal) {
    document.getElementById('techTree2').innerHTML = archerProg + ' / 20'
    archerDone = 1;
    archerStatus = 0;
    research = 0;
    document.getElementById('archerTech').style.backgroundColor = '#2d2d86';
    document.getElementById('archerTech').style.color = 'white';
    console.log('Scholars researched archer.')
  } else {document.getElementById('techTree2').innerHTML = archerProg + ' / 20'}
}

function blo () {
  if (bloodSacrificeProg >= bloodSacrificeFinal) {
    document.getElementById('techTree2').innerHTML = bloodSacrificeProg + ' / 22'
    bloodSacrificeDone = 1;
    bloodSacrificeStatus = 0;
    research = 0;
    document.getElementById('bloodSacrificeTech').style.backgroundColor = '#2d2d86';
    document.getElementById('bloodSacrificeTech').style.color = 'white';
    console.log('Scholars researched bloodSacrifice.')
  } else {document.getElementById('techTree2').innerHTML = bloodSacrificeProg + ' / 22'}
}

function shr () {
  if (shrineProg >= shrineFinal) {
    document.getElementById('techTree2').innerHTML = shrineProg + ' / 20'
    shrineDone = 1;
    shrineStatus = 0;
    research = 0;
    document.getElementById('shrineTech').style.backgroundColor = '#2d2d86';
    document.getElementById('shrineTech').style.color = 'white';
    console.log('Scholars researched shrine.')
  } else {document.getElementById('techTree2').innerHTML = shrineProg + ' / 20'}
}

function uni () {
  if (universityProg >= universityFinal) {
    document.getElementById('techTree2').innerHTML = universityProg + ' / 40'
    universityDone = 1;
    universityStatus = 0;
    research = 0;
    document.getElementById('universityTech').style.backgroundColor = '#2d2d86';
    document.getElementById('universityTech').style.color = 'white';
    console.log('Scholars researched university.')
  } else {document.getElementById('techTree2').innerHTML = universityProg + ' / 40'}
}

function cla () {
  if (classicalArtProg >= classicalArtFinal) {
    document.getElementById('techTree2').innerHTML = classicalArtProg + ' / 50'
    classicalArtDone = 1;
    classicalArtStatus = 0;
    research = 0;
    document.getElementById('classicalArtTech').style.backgroundColor = '#2d2d86';
    document.getElementById('classicalArtTech').style.color = 'white';
    console.log('Scholars researched classical art.')
  } else {document.getElementById('techTree2').innerHTML = classicalArtProg + ' / 50'}
}

function har () {
  if (harborProg >= harborFinal) {
    document.getElementById('techTree2').innerHTML = harborProg + ' / 32'
    harborDone = 1;
    harborStatus = 0;
    research = 0;
    document.getElementById('harborTech').style.backgroundColor = '#2d2d86';
    document.getElementById('harborTech').style.color = 'white';
    console.log('Scholars researched harbor.')
  } else {document.getElementById('techTree2').innerHTML = harborProg + ' / 32'}
}

function rel () {
  if (religionProg >= religionFinal) {
    document.getElementById('techTree2').innerHTML = religionProg + ' / 40'
    religionDone = 1;
    religionStatus = 0;
    research = 0;
    document.getElementById('religionTech').style.backgroundColor = '#2d2d86';
    document.getElementById('religionTech').style.color = 'white';
    console.log('Scholars researched religion.')
  } else {document.getElementById('techTree2').innerHTML = religionProg + ' / 40'}
}

function tem () {
  if (templeProg >=templeFinal) {
    document.getElementById('techTree2').innerHTML = templeProg + ' / 42'
    templeDone = 1;
    templeStatus = 0;
    research = 0;
    document.getElementById('templeTech').style.backgroundColor = '#2d2d86';
    document.getElementById('templeTech').style.color = 'white';
    console.log('Scholars researched temple.')
  } else {document.getElementById('techTree2').innerHTML = templeProg + ' / 42'}
}

function con () {
  if (conquererProg >= conquererFinal) {
    document.getElementById('techTree2').innerHTML = conquererProg + ' / 60'
    conquererDone = 1;
    conquererStatus = 0;
    research = 0;
    document.getElementById('conquererTech').style.backgroundColor = '#2d2d86';
    document.getElementById('conquererTech').style.color = 'white';
    console.log('Scholars researched conquerer.')
  } else {document.getElementById('techTree2').innerHTML = conquererProg + ' / 60'}
}

function cat () {
  if (catapultProg >= catapultFinal) {
    document.getElementById('techTree2').innerHTML = catapultProg + ' / 60'
    catapultDone = 1;
    catapultStatus = 0;
    research = 0;
    document.getElementById('catapultTech').style.backgroundColor = '#2d2d86';
    document.getElementById('catapultTech').style.color = 'white';
    console.log('Scholars researched catapult.')
  } else {document.getElementById('techTree2').innerHTML = catapultProg + ' / 60'}
}

function law () {
  if (lawAndOrderProg >= lawAndOrderFinal) {
    document.getElementById('techTree2').innerHTML = lawAndOrderProg + ' / 65'
    lawAndOrderDone = 1;
    lawAndOrderStatus = 0;
    research = 0;
    document.getElementById('lawAndOrderTech').style.backgroundColor = '#2d2d86';
    document.getElementById('lawAndOrderTech').style.color = 'white';
    console.log('Scholars researched lawAndOrder.')
  } else {document.getElementById('techTree2').innerHTML = lawAndOrderProg + ' / 65'}
}

function pri () {
  if (priestProg >= priestFinal) {
    document.getElementById('techTree2').innerHTML = priestProg + ' / 80'
    priestDone = 1;
    priestStatus = 0;
    research = 0;
    document.getElementById('priestTech').style.backgroundColor = '#2d2d86';
    document.getElementById('priestTech').style.color = 'white';
    console.log('Scholars researched priest.')
  } else {document.getElementById('techTree2').innerHTML = priestProg + ' / 80'}
}

function foo () {
  if (foodSiloProg >= foodSiloFinal) {
    document.getElementById('techTree2').innerHTML = foodSiloProg + ' / 80'
    foodSiloDone = 1;
    foodSiloStatus = 0;
    research = 0;
    document.getElementById('foodSiloTech').style.backgroundColor = '#2d2d86';
    document.getElementById('foodSiloTech').style.color = 'white';
    console.log('Scholars researched foodSilo.')
  } else {document.getElementById('techTree2').innerHTML = foodSiloProg + ' / 80'}
}

function fre () {
  if (freeTradeProg >= freeTradeFinal) {
    document.getElementById('techTree2').innerHTML = freeTradeProg + ' / 120'
    freeTradeDone = 1;
    freeTradeStatus = 0;
    research = 0;
    document.getElementById('freeTradeTech').style.backgroundColor = '#2d2d86';
    document.getElementById('freeTradeTech').style.color = 'white';
    console.log('Scholars researched freeTrade.')
  } else {document.getElementById('techTree2').innerHTML = freeTradeProg + ' / 120'}
}

function gen () {
  if (generalProg >= generalFinal) {
    document.getElementById('techTree2').innerHTML = generalProg + ' / 110'
    generalDone = 1;
    generalStatus = 0;
    research = 0;
    document.getElementById('generalTech').style.backgroundColor = '#2d2d86';
    document.getElementById('generalTech').style.color = 'white';
    console.log('Scholars researched general.')
  } else {document.getElementById('techTree2').innerHTML = generalProg + ' / 110'}
}

function lab () {
  if (laboratoryProg >= laboratoryFinal) {
    document.getElementById('techTree2').innerHTML = laboratoryProg + ' / 130'
    laboratoryDone = 1;
    laboratoryStatus = 0;
    research = 0;
    document.getElementById('laboratoryTech').style.backgroundColor = '#2d2d86';
    document.getElementById('laboratoryTech').style.color = 'white';
    console.log('Scholars researched laboratory.')
  } else {document.getElementById('techTree2').innerHTML = laboratoryProg + ' / 130'}
}

function aqu () {
  if (aqueductProg >= aqueductFinal) {
    document.getElementById('techTree2').innerHTML = aqueductProg + ' / 160'
    aqueductDone = 1;
    aqueductStatus = 0;
    research = 0;
    document.getElementById('aqueductTech').style.backgroundColor = '#2d2d86';
    document.getElementById('aqueductTech').style.color = 'white';
    console.log('Scholars researched aqueduct.')
  } else {document.getElementById('techTree2').innerHTML = aqueductProg + ' / 160'}
}

function cath () {
  if (cathedralProg >= cathedralFinal) {
    document.getElementById('techTree2').innerHTML = cathedralProg + ' / 200'
    cathedralDone = 1;
    cathedralStatus = 0;
    research = 0;
    document.getElementById('cathedralTech').style.backgroundColor = '#2d2d86';
    document.getElementById('cathedralTech').style.color = 'white';
    console.log('Scholars researched cathedral.')
  } else {document.getElementById('techTree2').innerHTML = cathedralProg + ' / 200'}
}

function tre () {
  if (treasuryProg >= treasuryFinal) {
    document.getElementById('techTree2').innerHTML = treasuryProg + ' / 210'
    treasuryDone = 1;
    treasuryStatus = 0;
    research = 0;
    document.getElementById('treasuryTech').style.backgroundColor = '#2d2d86';
    document.getElementById('treasuryTech').style.color = 'white';
    console.log('Scholars researched treasury.')
  } else {document.getElementById('techTree2').innerHTML = treasuryProg + ' / 210'}
}

function gol () {
  if (goliathProg >= goliathFinal) {
    document.getElementById('techTree2').innerHTML = goliathProg + ' / 250'
    goliathDone = 1;
    goliathStatus = 0;
    research = 0;
    document.getElementById('goliathTech').style.backgroundColor = '#2d2d86';
    document.getElementById('goliathTech').style.color = 'white';
    console.log('Scholars researched goliath.')
  } else {document.getElementById('techTree2').innerHTML = goliathProg + ' / 250'}
}

function mag () {
  if (mageProg >= mageFinal) {
    document.getElementById('techTree2').innerHTML = mageProg + ' / 300'
    mageDone = 1;
    mageStatus = 0;
    research = 0;
    document.getElementById('mageTech').style.backgroundColor = '#2d2d86';
    document.getElementById('mageTech').style.color = 'white';
    console.log('Scholars researched mage.')
  } else {document.getElementById('techTree2').innerHTML = mageProg + ' / 300'}
}

function abs () {
  if (abstractArtProg >= abstractArtFinal) {
    document.getElementById('techTree2').innerHTML = abstractArtProg + ' / 400'
    abstractArtDone = 1;
    abstractArtStatus = 0;
    research = 0;
    document.getElementById('abstractArtTech').style.backgroundColor = '#2d2d86';
    document.getElementById('abstractArtTech').style.color = 'white';
    console.log('Scholars researched abstractArt.')
  } else {document.getElementById('techTree2').innerHTML = abstractArtProg + ' / 400'}
}

function inf () {
  if (infiltratorProg >= infiltratorFinal) {
    document.getElementById('techTree2').innerHTML = infiltratorProg + ' / 400'
    infiltratorDone = 1;
    infiltratorStatus = 0;
    research = 0;
    document.getElementById('infiltratorTech').style.backgroundColor = '#2d2d86';
    document.getElementById('infiltratorTech').style.color = 'white';
    console.log('Scholars researched infiltrator.')
  } else {document.getElementById('techTree2').innerHTML = infiltratorProg + ' / 400'}
}

function ber () {
  if (berzerkerProg >= berzerkerFinal) {
    document.getElementById('techTree2').innerHTML = berzerkerProg + ' / 400'
    berzerkerDone = 1;
    berzerkerStatus = 0;
    research = 0;
    document.getElementById('berzerkerTech').style.backgroundColor = '#2d2d86';
    document.getElementById('berzerkerTech').style.color = 'white';
    console.log('Scholars researched berzerker.')
  } else {document.getElementById('techTree2').innerHTML = berzerkerProg + ' / 400'}
}

function enl () {
  if (enlightenmentProg >= enlightenmentFinal) {
    document.getElementById('techTree2').innerHTML = enlightenmentProg + ' / 400'
    enlightenmentDone = 1;
    enlightenmentStatus = 0;
    research = 0;
    document.getElementById('enlightenmentTech').style.backgroundColor = '#2d2d86';
    document.getElementById('enlightenmentTech').style.color = 'white';
    console.log('Scholars researched enlightenment.')
  } else {document.getElementById('techTree2').innerHTML = enlightenmentProg + ' / 400'}
}







//building javascript




function buildGranary () {
  if (citizen >= 10 && gold >= 30 && iCanGranary && granaryDone === 1) {
    citizen -= 10;
    gold -= 30;
    citizenX = 1.5;
    iCanGranary = false;
    document.getElementById('granaryPic').style.visibility = 'visible'
    document.getElementById('granary').style.color = 'white';
    document.getElementById('granary').style.backgroundColor = 'green';
    document.getElementById('message').innerHTML = 'You built a granary.'
    display();
    playBs();
  } else { playErr();  };
}

function buildField () {
  if (citizen >= 50 && gold >= 200 && iCanField && !iCanGranary && foodSiloDone === 1) {
    citizen -= 50;
    gold -= 200;
    citizenX = 2;
    iCanField = false;
    document.getElementById('siloPic').style.visibility = 'visible'
    document.getElementById('field').style.color = 'white';
    document.getElementById('field').style.backgroundColor = 'green';
    document.getElementById('message').innerHTML = 'You built a field.'
    playBs();
    display();
  } else { playErr();  };
}

function buildAqueduct () {
  if (citizen >= 200 && gold >= 1000 && iCanAqueduct && !iCanField && aqueductDone === 1) {
    citizen -= 200;
    gold -= 1000;
    citizenX = 3;
    iCanAqueduct = false;
    document.getElementById('aqueduct').style.color = 'white';
    document.getElementById('aqueduct').style.backgroundColor = 'green';
    document.getElementById('message').innerHTML = 'You built an aqueduct.'
    document.getElementById('aqueductPic').style.visibility = 'visible'
    playBs();
    display();
  } else { playErr();  };
}

var mult = 1;

function mult1 () {
  playClick();
    mult = 1;
  document.getElementById('merchant').style.color = 'white';
  document.getElementById('artist').style.color = 'white';
  document.getElementById('scholar').style.color = 'white';
}

function mult10 () {
    playClick();
    mult = 10;
    document.getElementById('merchant').style.color = 'cyan';
    document.getElementById('artist').style.color = 'cyan';
    document.getElementById('scholar').style.color = 'cyan';}

function mult100 () {
    playClick();
    mult = 100;
    document.getElementById('merchant').style.color = 'red';
    document.getElementById('artist').style.color = 'red';
    document.getElementById('scholar').style.color = 'red';}

function hireMerch () {
  if (mult === 1) {
    hireMerch1();
  } else if (mult === 10) {
    hireMerch10();
  } else if (mult === 100) {
    hireMerch100();
  } else { };
}

function hireArtist () {
  if (mult === 1) {
    hireArtist1();
  } else if (mult === 10) {
    hireArtist10();
  } else if (mult === 100) {
    hireArtist100();
  } else { };
}

function hireScholar () {
  if (mult === 1) {
    hireScholar1();
  } else if (mult === 10) {
    hireScholar10();
  } else if (mult === 100) {
    hireScholar100();
  } else { };
}



function hireMerch1 () {
  if (citizen >= 1) {
    citizen--;
    merchant++;
    playClick();
    display();
    document.getElementById('merchantPic').style.visibility = 'visible'
    document.getElementById('message').innerHTML = 'You hired a merchant.'
  } else {playErr();}
}

function hireMerch10 () {
  if (citizen >= 10) {
    citizen -= 10;
    merchant += 10;
    playClicks();
    display();
      document.getElementById('merchantPic').style.visibility = 'visible'
    document.getElementById('message').innerHTML = 'You hired a merchant.'
  }  else {playErr();}
}

function hireMerch100 () {
  if (citizen >= 100) {
    citizen -= 100;
    merchant += 100;
    playClicks();
    display();
      document.getElementById('merchantPic').style.visibility = 'visible'
    document.getElementById('message').innerHTML = 'You hired a merchant.'
  } else {playErr();}
}


function buildFarm () {
  if (citizen >= farmCost) {
    citizen -= farmCost;
    farm++;
    farmCost += 3;
    playClick();
    display();
      document.getElementById('farmPic').style.visibility = 'visible'
    document.getElementById('message').innerHTML = 'You built a farm.'
  } else {playErr();}
}

function hireArtist1 () {
  if (citizen >= 1) {
    citizen--;
    artist++;
    culture++
    playClick();
    display();
    document.getElementById('farmPic').style.visibility = 'visible'
    document.getElementById('message').innerHTML = 'You hired a artist.'
  } else {playErr();}
}

function hireArtist10 () {
  if (citizen >= 10) {
    citizen -= 10;
    artist += 10;
    culture += 10;
    playClicks();
    display();
    document.getElementById('message').innerHTML = 'You hired a artist.'
  } else {playErr();}
}

function hireArtist100 () {
  if (citizen >= 100) {
    citizen -= 100;
    artist += 100;
    culture += 100;
    playClicks();
    display();
    document.getElementById('message').innerHTML = 'You hired a artist.'
  } else {playErr();}
}


function hireScholar1 () {
  if (citizen >= 1) {
    research += 1;
    citizen--;
    scholar++;
    playClick();
    display();
    document.getElementById('message').innerHTML = 'You hired a scholar.'
  } else {playErr();}
}

function hireScholar10 () {
  if (citizen >= 10) {
    research += 10;
    citizen -= 10;
    scholar += 10;
    playClicks();
    display();
    document.getElementById('message').innerHTML = 'You hired a scholar.'
  } else {playErr();}
}

function hireScholar100 () {
  if (citizen >= 100) {
    research += 100;
    citizen -= 100;
    scholar += 100;
    playClicks();
    display();
    document.getElementById('message').innerHTML = 'You hired a scholar.'
  } else {playErr();}
}



function buildMarket () {
  if (citizen >= 10 && gold >= 30 && iCanMarket && marketDone === 1) {
    citizen -= 10;
    gold -= 30;
    goldX = 2;
    iCanMarket = false;
    document.getElementById('market').style.color = 'white';
    document.getElementById('market').style.backgroundColor = '#b8860b';
    document.getElementById('message').innerHTML = 'You built a market.'
    document.getElementById('marketPic').style.visibility = 'visible'
    playBs();
    display();
  } else {playErr();};
}

function buildHarbor () {
  if (citizen >= 50 && gold >= 200 && iCanHarbor && !iCanMarket && harborDone === 1) {
    citizen -= 50;
    gold -= 200;
    goldX = 3;
    iCanHarbor = false;
    document.getElementById('harbor').style.color = 'white';
    document.getElementById('harbor').style.backgroundColor = '#b8860b';
    document.getElementById('message').innerHTML = 'You built a harbor.'
    document.getElementById('harborPic').style.visibility = 'visible'
    playBs();
    display();
  } else { playErr(); };
}

function buildTreasury () {
  if (citizen >= 200 && gold >= 1000 && iCanTreasury && !iCanHarbor && treasuryDone === 1) {
    citizen -= 200;
    gold -= 1000;
    goldX = 4;
    iCanTreasury = false;
    document.getElementById('treasury').style.color = 'white';
    document.getElementById('treasury').style.backgroundColor = '#b8860b';
    document.getElementById('message').innerHTML = 'You built a treasury.'
    document.getElementById('treasuryPic').style.visibility = 'visible'
    playBs();
    display();
  } else { playErr();  };
}





function buildShrine () {
  if (citizen >= 10 && gold >= 30 && iCanShrine && shrineDone === 1) {
    citizen -= 10;
    gold -= 30;
    cultureX = 2;
    iCanShrine = false;
    document.getElementById('shrinePic').style.visibility = 'visible'
    document.getElementById('shrine').style.color = 'white';
    document.getElementById('shrine').style.backgroundColor = 'purple';
    document.getElementById('message').innerHTML = 'You built a shrine.'
    playBs();
    display();
  } else { playErr();  };
}

function buildTemple () {
  if (citizen >= 50 && gold >= 200 && iCanTemple && !iCanShrine && templeDone === 1) {
    citizen -= 50;
    gold -= 200;
    cultureX = 3;
    iCanTemple = false;
    document.getElementById('templePic').style.visibility = 'visible'
    document.getElementById('temple').style.color = 'white';
    document.getElementById('temple').style.backgroundColor = 'purple';
    document.getElementById('message').innerHTML = 'You built a temple.'
    playBs();
    display();
  } else { playErr();  };
}

function buildCathedral () {
  if (citizen >= 200 && gold >= 1000 && iCanCathedral && !iCanTemple && cathedralDone === 1) {
    citizen -= 200;
    gold -= 1000;
    cultureX = 4;
    iCanCathedral = false;
    document.getElementById('cathedralPic').style.visibility = 'visible'
    document.getElementById('cathedral').style.color = 'white';
    document.getElementById('cathedral').style.backgroundColor = 'purple';
    document.getElementById('message').innerHTML = 'You built a cathedral.'
    playBs();
    display();
  } else { playErr();  };
}




function buildLibrary () {
  if (citizen >= 10 && gold >= 30 && iCanLibrary && libraryDone === 1) {
    citizen -= 10;
    gold -= 30;
    researchX = 2;
    research = (scholar * researchX)
    iCanLibrary = false;
    document.getElementById('library').style.color = 'white';
    document.getElementById('library').style.backgroundColor = 'blue';
    document.getElementById('message').innerHTML = 'You built a library.'
    document.getElementById('libraryPic').style.visibility = 'visible';
    playBs();
    display();
  } else { playErr();  };
}

function buildUniversity () {
  if (citizen >= 50 && gold >= 200 && iCanUni && !iCanLibrary && universityDone === 1) {
    citizen -= 50;
    gold -= 200;
    researchX = 3;
    research = (scholar * researchX)
    iCanUni = false;
    document.getElementById('universityPic').style.visibility = 'visible'
    document.getElementById('university').style.color = 'white';
    document.getElementById('university').style.backgroundColor = 'blue';
    document.getElementById('message').innerHTML = 'You built a university.'
    playBs();
    display();
  } else { playErr();  };
}

function buildLaboratory () {
  if (citizen >= 200 && gold >= 1000 && iCanLab && !iCanUni && laboratoryDone === 1) {
    citizen -= 200;
    gold -= 1000;
    researchX = 4;
    research = (scholar * researchX)
    iCanLab = false;
    document.getElementById('laboratory').style.color = 'white';
    document.getElementById('laboratory').style.backgroundColor = 'blue';
    document.getElementById('message').innerHTML = 'You built a laboratory.'
    document.getElementById('laboratoryPic').style.visibility = 'visible'
    playBs();
    display();
  } else { playErr();  };
}



function endTurnCiv () {
  if (marketStatus === 1) {
    marketProg += research;
    mark();
    endTurnResources();
 } else if (footmanStatus === 1) {
    footmanProg += research;
    foot();
    endTurnResources();
  } else if (libraryStatus === 1) {
    libraryProg += research;
    lib();
    endTurnResources();
  } else if (granaryStatus === 1) {
    granaryProg += research;
    gran();
    endTurnResources();
  } else if (bruteStatus === 1) {
    bruteProg += research;
    brute();
    endTurnResources();
  } else if (rangerStatus === 1) {
    rangerProg += research;
    rang();
    endTurnResources();
  } else if (scoutStatus === 1) {
    scoutProg += research;
    scou();
    endTurnResources();
  } else if (ritualStatus === 1) {
    ritualProg += research;
    rit();
    endTurnResources();
  } else if (knightStatus === 1) {
    knightProg += research;
    kni();
    endTurnResources();
  } else if (chantsStatus === 1) {
    chantsProg += research;
    cha();
    endTurnResources();
  } else if (archerStatus === 1) {
    archerProg += research;
    arc();
    endTurnResources();
  } else if (bloodSacrificeStatus === 1) {
    bloodSacrificeProg += research;
    blo();
    endTurnResources();
  } else if (shrineStatus === 1) {
    shrineProg += research;
    shr();
    endTurnResources();
  } else if (universityStatus === 1) {
    universityProg += research;
    uni();
    endTurnResources();
  } else if (classicalArtStatus === 1) {
    classicalArtProg += research;
    cla();
    endTurnResources();
  } else if (harborStatus === 1) {
    harborProg += research;
    har();
    endTurnResources();
  } else if (religionStatus === 1) {
    religionProg += research;
    rel();
    endTurnResources();
  } else if (templeStatus === 1) {
    templeProg += research;
    tem();
    endTurnResources();
  } else if (conquererStatus === 1) {
    conquererProg += research;
    con();
    endTurnResources();
  } else if (catapultStatus === 1) {
    catapultProg += research;
    cat();
    endTurnResources();
  } else if (lawAndOrderStatus === 1) {
    lawAndOrderProg += research;
    law();
    endTurnResources();
  } else if (priestStatus === 1) {
    priestProg += research;
    pri();
    endTurnResources();
  } else if (foodSiloStatus === 1) {
    foodSiloProg += research;
    foo();
    endTurnResources();
  } else if (freeTradeStatus === 1) {
    freeTradeProg += research;
    fre();
    endTurnResources();
  } else if (generalStatus === 1) {
    generalProg += research;
    gen();
    endTurnResources();
  } else if (laboratoryStatus === 1) {
    laboratoryProg += research;
    lab();
    endTurnResources();
  } else if (aqueductStatus === 1) {
    aqueductProg += research;
    aqu();
    endTurnResources();
  } else if (cathedralStatus === 1) {
    cathedralProg += research;
    cath();
    endTurnResources();
  } else if (treasuryStatus === 1) {
    treasuryProg += research;
    tre();
    endTurnResources();
  } else if (goliathStatus === 1) {
    goliathProg += research;
    gol();
    endTurnResources();
  } else if (mageStatus === 1) {
    mageProg += research;
    mag();
    endTurnResources();
  } else if (abstractArtStatus === 1) {
    abstractArtProg += research;
    abs();
    endTurnResources();
  } else if (infiltratorStatus === 1) {
    infiltratorProg += research;
    inf();
    endTurnResources();
  } else if (berzerkerStatus === 1) {
    berzerkerProg += research;
    ber();
    endTurnResources();
  } else if (enlightenmentStatus === 1) {
    enlightenmentProg += research;
    enl();
    endTurnResources();
  } else {endTurnResources();}
};


function endTurnResources () {
  playTurn();
  citizen += (farm * citizenX);
  gold += (merchant * goldX);
  culture += (artist * cultureX);
  research = (scholar * researchX);
  calcVictoryPoints();
  checkWin();
  turn++;
  display();
  document.getElementById('message').innerHTML = 'You ended your turn.'
}


function display() {
document.getElementById('citizenResource').innerHTML = citizen;
document.getElementById('goldResource').innerHTML = gold;
document.getElementById('cultureResource').innerHTML = culture;
document.getElementById('researchResource').innerHTML = research;

document.getElementById('farm').innerHTML = '-' + farmCost + '-&nbsp;&nbsp;&nbsp;Farms: ' + farm;
document.getElementById('merchant').innerHTML = 'Merchants: ' + merchant;
document.getElementById('artist').innerHTML = 'Artists: ' + artist;
document.getElementById('scholar').innerHTML = 'Scholars: ' + scholar;
document.getElementById('indicator').innerHTML = 'Turn: ' + turn;


}
display();








function draw () {

c.fillStyle = color1
c.fillRect(0, 0, 87.5, 87.5);
c.fillStyle = color2
c.fillRect(87.5, 0, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(175, 0, 87.5, 87.5);
c.fillStyle = growthColor2
c.fillRect(262.5, 0, 87.5, 87.5);
c.fillStyle = growthColor1;
c.fillRect(350, 0, 87.5, 87.5);
c.fillStyle = color2
c.fillRect(437.5, 0, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(525, 0, 87.5, 87.5);
c.fillStyle = color2
c.fillRect(612.5, 0, 87.5, 87.5);

c.fillStyle = color2;
c.fillRect(0, 87.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(87.5, 87.5, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(175, 87.5, 87.5, 87.5);
c.fillStyle = growthColor1;
c.fillRect(262.5, 87.5, 87.5, 87.5);
c.fillStyle = growthColor2;
c.fillRect(350, 87.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(437.5, 87.5, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(525, 87.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(612.5, 87.5, 87.5, 87.5);

c.fillStyle = color1;
c.fillRect(0, 175, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(87.5, 175, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(175, 175, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(262.5, 175, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(350, 175, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(437.5, 175, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(525, 175, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(612.5, 175, 87.5, 87.5);

c.fillStyle = researchColor2;
c.fillRect(0, 262.5, 87.5, 87.5);
c.fillStyle = researchColor1;
c.fillRect(87.5, 262.5, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(175, 262.5, 87.5, 87.5);
c.fillStyle = militaryColor1;
c.fillRect(262.5, 262.5, 87.5, 87.5);
c.fillStyle = militaryColor2;
c.fillRect(350, 262.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(437.5, 262.5, 87.5, 87.5);
c.fillStyle = goldColor2;
c.fillRect(525, 262.5, 87.5, 87.5);
c.fillStyle = goldColor1;
c.fillRect(612.5, 262.5, 87.5, 87.5);

c.fillStyle = researchColor1;
c.fillRect(0, 350, 87.5, 87.5);
c.fillStyle = researchColor2;
c.fillRect(87.5, 350, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(175, 350, 87.5, 87.5);
c.fillStyle = militaryColor2;
c.fillRect(262.5, 350, 87.5, 87.5);
c.fillStyle = militaryColor1;
c.fillRect(350, 350, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(437.5, 350, 87.5, 87.5);
c.fillStyle = goldColor1;
c.fillRect(525, 350, 87.5, 87.5);
c.fillStyle = goldColor2;
c.fillRect(612.5, 350, 87.5, 87.5);

c.fillStyle = color2;
c.fillRect(0, 437.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(87.5, 437.5, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(175, 437.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(262.5, 437.5, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(350, 437.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(437.5, 437.5, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(525, 437.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(612.5, 437.5, 87.5, 87.5);

c.fillStyle = color1;
c.fillRect(0, 525, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(87.5, 525, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(175, 525, 87.5, 87.5);
c.fillStyle = cultureColor2;
c.fillRect(262.5, 525, 87.5, 87.5);
c.fillStyle = cultureColor1;
c.fillRect(350, 525, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(437.5, 525, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(525, 525, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(612.5, 525, 87.5, 1087.50);

c.fillStyle = color2;
c.fillRect(0, 612.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(87.5, 612.5, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(175, 612.5, 87.5, 87.5);
c.fillStyle = cultureColor1;
c.fillRect(262.5, 612.5, 87.5, 87.5);
c.fillStyle = cultureColor2;
c.fillRect(350, 612.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(437.5, 612.5, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(525, 612.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(612.5, 612.5, 87.5, 87.5);

c.drawImage(
  castle, 0, 0, 80, 80
)

c.drawImage(
  castle, 612.5, 0, 80, 80
)

c.drawImage(
  castle, 0, 612.5, 80, 80
)

c.drawImage(
  castle, 612.5, 612.5, 80, 80
)


//zoneCheck();
//c.lineWidth = 3;
};
draw();




function zoneCheck () {
growthZone();
goldZone();
cultureZone();
researchZone();
militaryZone();
}


function growthZone () {
  if (D8.team === 'red' && E8.team === 'red' && D7.team === 'red' && E7.team === 'red') {
  c.beginPath();
  c.rect(262.5, 0, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "red";
  c.stroke();
} else if (D8.team === 'blue' && E8.team === 'blue' && D7.team === 'blue' && E7.team === 'blue') {
  c.beginPath();
  c.rect(262.5, 0, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "blue";
  c.stroke();
}  else if (D8.team === 'green' && E8.team === 'green' && D7.team === 'green' && E7.team === 'green') {
      c.beginPath();
  c.rect(262.5, 0, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "green";
  c.stroke();
}  else if (D8.team === 'yellow' && E8.team === 'yellow' && D7.team === 'yellow' && E7.team === 'yellow') {
    c.beginPath();
  c.rect(262.5, 0, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "yellow";
  c.stroke();
} else {}

}


function goldZone () {
  if (G5.team === 'red' && H5.team === 'red' && G4.team === 'red' && H4.team === 'red') {
      c.beginPath();
  c.rect(525, 262.5, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "red";
  c.stroke();
} else if (G5.team === 'blue' && H5.team === 'blue' && G4.team === 'blue' && H4.team === 'blue') {
    c.beginPath();
  c.rect(525, 262.5, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "blue";
  c.stroke();
}  else if (G5.team === 'green' && H5.team === 'green' && G4.team === 'green' && H4.team === 'green') {
    c.beginPath();
  c.rect(525, 262.5, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "green";
  c.stroke();
}  else if (G5.team === 'yellow' && H5.team === 'yellow' && G4.team === 'yellow' && H4.team === 'yellow') {
    c.beginPath();
  c.rect(525, 262.5, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "yellow";
  c.stroke();
} else {}
}

function cultureZone () {
  if (D2.team === 'red' && E2.team === 'red' && D1.team === 'red' && E1.team === 'red') {
      c.beginPath();
  c.rect(262.5, 525, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "red";
  c.stroke();
} else if (D2.team === 'blue' && E2.team === 'blue' && D1.team === 'blue' && E1.team === 'blue') {
    c.beginPath();
  c.rect(262.5, 525, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "blue";
  c.stroke();
}  else if (D2.team === 'green' && E2.team === 'green' && D1.team === 'green' && E1.team === 'green') {
    c.beginPath();
  c.rect(262.5, 525, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "green";
  c.stroke();
}  else if (D2.team === 'yellow' && E2.team === 'yellow' && D1.team === 'yellow' && E1.team === 'yellow') {
    c.beginPath();
  c.rect(262.5, 525, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "yellow";
  c.stroke();
} else {}
}

function researchZone () {
  if (A5.team === 'red' && B5.team === 'red' && A4.team === 'red' && B4.team === 'red') {
      c.beginPath();
  c.rect(0, 262.5, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "red";
  c.stroke();
} else if (A5.team === 'blue' && B5.team === 'blue' && A4.team === 'blue' && B4.team === 'blue') {
    c.beginPath();
  c.rect(0, 262.5, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "blue";
  c.stroke();
}  else if (A5.team === 'green' && B5.team === 'green' && A4.team === 'green' && B4.team === 'green') {
    c.beginPath();
  c.rect(0, 262.5, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "green";
  c.stroke();
}  else if (A5.team === 'yellow' && B5.team === 'yellow' && A4.team === 'yellow' && B4.team === 'yellow') {
    c.beginPath();
  c.rect(0, 262.5, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "yellow";
  c.stroke();
} else {}
}

function militaryZone () {
  if (D5.team === 'red' && E5.team === 'red' && D4.team === 'red' && E4.team === 'red') {
      c.beginPath();
  c.rect(262.5, 262.5, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "red";
  c.stroke();
} else if (D5.team === 'blue' && E5.team === 'blue' && D4.team === 'blue' && E4.team === 'blue') {
    c.beginPath();
  c.rect(262.5, 262.5, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "blue";
  c.stroke();
}  else if (D5.team === 'green' && E5.team === 'green' && D4.team === 'green' && E4.team === 'green') {
    c.beginPath();
  c.rect(262.5, 262.5, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "green";
  c.stroke();
}  else if (D5.team === 'yellow' && E5.team === 'yellow' && D4.team === 'yellow' && E4.team === 'yellow') {
    c.beginPath();
  c.rect(262.5, 262.5, 175, 175);
  c.lineWidth = 5;
  c.strokeStyle = "yellow";
  c.stroke();
} else {}
}

/*
c.drawImage(
  redHatchet, 0, 0, 80, 80
)
c.drawImage(
  redSword, 87.5, 0, 80, 80
)
c.drawImage(
  redShield, 175, 0, 80, 80
)
c.drawImage(
  redBow, 262.5, 0, 80, 80
)
c.drawImage(
  redDagger, 350, 0, 80, 80
)
c.drawImage(
  redKnight, 437.5, 0, 80, 80
)
c.drawImage(
  redConq, 525, 0, 80, 80
)




c.drawImage(
  blueHatchet, 612.5, 0, 80, 80
)
c.drawImage(
  blueSword, 0, 87.5, 80, 80
)
c.drawImage(
  blueShield, 87.5, 87.5, 80, 80
)
c.drawImage(
  blueBow, 175, 87.5, 80, 80
)
c.drawImage(
  blueDagger, 262.5, 87.5, 80, 80
)
c.drawImage(
  blueKnight, 350, 87.5, 80, 80
)
c.drawImage(
  blueConq, 437.5, 87.5, 80, 80
)


c.drawImage(
  greenHatchet, 525, 87.5, 80, 80
)
c.drawImage(
  greenSword, 612.5, 87.5, 80, 80
)
c.drawImage(
  greenShield, 0, 175, 80, 80
)
c.drawImage(
  greenBow, 87.5, 175, 80, 80
)
c.drawImage(
  greenDagger, 175, 175, 80, 80
)
c.drawImage(
  greenKnight, 262.5, 175, 80, 80
)
c.drawImage(
greenConq, 350, 175, 80, 80
)


c.drawImage(
  yellowHatchet, 437.5, 175, 80, 80
)
c.drawImage(
  yellowSword, 525, 175, 80, 80
)
c.drawImage(
  yellowShield, 612.5, 175, 80, 80
)
c.drawImage(
  yellowBow, 0, 262.5, 80, 80
)
c.drawImage(
  yellowDagger, 87.5, 262.5, 80, 80
)
c.drawImage(
  yellowKnight, 175, 262.5, 80, 80
)
c.drawImage(
  yellowConq, 262.5, 262.5, 80, 80
)
*/
