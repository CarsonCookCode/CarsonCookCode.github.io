

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');





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







var color1 = '#999999';
var color2 = 'black';






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
    playBs();
    display();
  } else { playErr();  };
}



function endTurn () {
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
c.fillStyle = color2
c.fillRect(262.5, 0, 87.5, 87.5);
c.fillStyle = color1;
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
c.fillStyle = color1;
c.fillRect(262.5, 87.5, 87.5, 87.5);
c.fillStyle = color2;
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

c.fillStyle = color2;
c.fillRect(0, 262.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(87.5, 262.5, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(175, 262.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(262.5, 262.5, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(350, 262.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(437.5, 262.5, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(525, 262.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(612.5, 262.5, 87.5, 87.5);

c.fillStyle = color1;
c.fillRect(0, 350, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(87.5, 350, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(175, 350, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(262.5, 350, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(350, 350, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(437.5, 350, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(525, 350, 87.5, 87.5);
c.fillStyle = color2;
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
c.fillStyle = color2;
c.fillRect(262.5, 525, 87.5, 87.5);
c.fillStyle = color1;
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
c.fillStyle = color1;
c.fillRect(262.5, 612.5, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(350, 612.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(437.5, 612.5, 87.5, 87.5);
c.fillStyle = color2;
c.fillRect(525, 612.5, 87.5, 87.5);
c.fillStyle = color1;
c.fillRect(612.5, 612.5, 87.5, 87.5);
};
draw();







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


















/*
function insertImage () {
  document.getElementById('wonderBlood').innerHTML = "<img class='wonder' src='images/blood-sacrifice.png'>"
}

function insertImage2 () {
  document.getElementById('wonderRitual').innerHTML = "<img class='wonder' src='images/ritual.png'>"
}
*/


//Don't know how to math.ceil() research
