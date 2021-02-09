var farm = 1;
var farmCost = 3;
var citizen = 10;
var citizenX = 1;

var merchant = 0;
var artist = 0;
var scholar = 0;


var gold = 0;
var goldX = 1;

var culture = 0;
var cultureX = 1;

var research = 0;
var researchX = 1;


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


var Array1 = []
var Array2 = []
var Array3 = []
var Array4 = []

function pushArray1(bld) {
  Array1.push(bld);
}
function pushArray2(bld) {
  Array2.push(bld);
}
function pushArray3(bld) {
  Array3.push(bld);
}
function pushArray4(bld) {
  Array4.push(bld);
}

function buildtInRow () {
  if (5 < 1) {
    console.log('it ran true');
  } else {
    console.log('it ran false');
  }
}

var lastCount;

function lastBuilt (count) {
  if (count = 1) {

  } else {

  }
  count++;


  farmCount = 0;
  citizenCount = 0;
  merchantCount = 0;
  artistCount = 0;
  scholarCount = 0;
  granaryCount = 0;
  fieldCount = 0;
  aqueductCount = 0;
  marketCount = 0;
  harborCount = 0;
  treasuryCount = 0;
  shrineCount = 0;
  templeCount = 0;
  cathedralCount = 0;
  libraryCount = 0;
  universityCount = 0;
  laboratoryCount = 0;
  this.count = 5;

  console.log(count)
  console.log(farmCount)
  console.log(granaryCount)
  console.log(fieldCount)
  console.log(aqueductCount)

}




function buildFarm () {
  if (citizen >= farmCost) {
  farm += 1;
  citizen -= farmCost;
  farmCost = (farm * 3);
  lastBuilt(farmCount);
  document.getElementById('message').innerHTML = 'You built a farm.'
  log();
  display();
  } else { }
}


function buildGranary () {
  if (citizen >= 10 && gold >= 30 && iCanGranary) {
    citizen -= 10;
    gold -= 30;
    citizenX *= 1.5;
    iCanGranary = false;
    lastBuilt(granaryCount);
    pushArray1('( Granary )');
    document.getElementById('granary').innerHTML = '-PURCHASED-'
    document.getElementById('message').innerHTML = 'You built a granary.'
    display();
  } else { };
}

function buildField () {
  if (citizen >= 50 && gold >= 200 && iCanField && !iCanGranary) {
    citizen -= 50;
    gold -= 200;
    citizenX *= 2;
    iCanField = false;
    lastBuilt(fieldCount);
    pushArray1('( Field )');
    document.getElementById('field').innerHTML = '-PURCHASED-'
    document.getElementById('message').innerHTML = 'You built a field.'
    display();
  } else { };
}

function buildAqueduct () {
  if (citizen >= 200 && gold >= 1000 && iCanAqueduct && !iCanField) {
    citizen -= 200;
    gold -= 1000;
    citizenX *= 3;
    iCanAqueduct = false;
    lastBuilt(fieldCount);
    pushArray1('( Aqueduct )');
    document.getElementById('aqueduct').innerHTML = '-PURCHASED-'
    document.getElementById('message').innerHTML = 'You built an aqueduct.'
    display();
  } else { };
}






function hireMerch () {
  if (citizen >= 1) {
    citizen--;
    merchant++;
    log();
    display();
    document.getElementById('message').innerHTML = 'You hired a merchant.'
  }
}





function buildMarket () {
  if (citizen >= 10 && gold >= 30 && iCanMarket) {
    citizen -= 10;
    gold -= 30;
    goldX *= 1.5;
    iCanMarket = false;
    pushArray2('( Market )');
    document.getElementById('market').innerHTML = '-PURCHASED-'
    document.getElementById('message').innerHTML = 'You built a market.'
    display();
  } else { };
}

function buildHarbor () {
  if (citizen >= 50 && gold >= 200 && iCanHarbor && !iCanMarket) {
    citizen -= 50;
    gold -= 200;
    goldX *= 2;
    iCanHarbor = false;
    pushArray2('( Harbor )');
    document.getElementById('harbor').innerHTML = '-PURCHASED-'
    document.getElementById('message').innerHTML = 'You built a harbor.'
    display();
  } else { };
}

function buildTreasury () {
  if (citizen >= 200 && gold >= 1000 && iCanTreasury && !iCanHarbor) {
    citizen -= 200;
    gold -= 1000;
    goldX *= 3;
    iCanTreasury = false;
    pushArray2('( Treasury )');
    document.getElementById('treasury').innerHTML = '-PURCHASED-'
    document.getElementById('message').innerHTML = 'You built a treasury.'
    display();
  } else { };
}




function hireArtist () {
  if (citizen >= 1) {
    citizen--;
    artist++;
    log();
    display();
    document.getElementById('message').innerHTML = 'You hired an artist.'
  }
}



function buildShrine () {
  if (citizen >= 10 && gold >= 30 && iCanShrine) {
    citizen -= 10;
    gold -= 30;
    cultureX *= 1.5;
    iCanShrine = false;
    pushArray3('( Shrine )');
    document.getElementById('shrine').innerHTML = '-PURCHASED-'
    document.getElementById('message').innerHTML = 'You built a shrine.'
    display();
  } else { };
}

function buildTemple () {
  if (citizen >= 50 && gold >= 200 && iCanTemple && !iCanShrine) {
    citizen -= 50;
    gold -= 200;
    cultureX *= 2;
    iCanTemple = false;
    pushArray3('( Temple )');
    document.getElementById('temple').innerHTML = '-PURCHASED-'
    document.getElementById('message').innerHTML = 'You built a temple.'
    display();
  } else { };
}

function buildCathedral () {
  if (citizen >= 200 && gold >= 1000 && iCanCathedral && !iCanTemple) {
    citizen -= 200;
    gold -= 1000;
    cultureX *= 3;
    iCanCathedral = false;
    pushArray3('( Cathedral )');
    document.getElementById('cathedral').innerHTML = '-PURCHASED-'
    document.getElementById('message').innerHTML = 'You built a cathedral.'
    display();
  } else { };
}





function hireScholar () {
  if (citizen >= 1) {
    citizen--;
    scholar++;
    log();
    display();
    document.getElementById('message').innerHTML = 'You hired a scholar.'
  }
}



function buildLibrary () {
  if (citizen >= 10 && gold >= 30 && iCanLibrary) {
    citizen -= 10;
    gold -= 30;
    researchX *= 1.5;
    iCanLibrary = false;
    pushArray4('( Library )');
    document.getElementById('library').innerHTML = '-PURCHASED-'
    document.getElementById('message').innerHTML = 'You built a library.'
    display();
  } else { };
}

function buildUniversity () {
  if (citizen >= 50 && gold >= 200 && iCanUni && !iCanLibrary) {
    citizen -= 50;
    gold -= 200;
    researchX *= 2;
    iCanUni = false;
    pushArray4('( University )');
    document.getElementById('university').innerHTML = '-PURCHASED-'
    document.getElementById('message').innerHTML = 'You built a university.'
    display();
  } else { };
}

function buildLaboratory () {
  if (citizen >= 200 && gold >= 1000 && iCanLab && !iCanUni) {
    citizen -= 200;
    gold -= 1000;
    researchX *= 3;
    iCanLab = false;
    pushArray4('( Laboratory )');;
    document.getElementById('laboratory').innerHTML = '-PURCHASED-'
    document.getElementById('message').innerHTML = 'You built a laboratory.'
    display();
  } else { };
}







function endTurn () {
  citizen += (farm * citizenX);
  gold += (merchant * goldX);
  culture += (artist * cultureX);
  research += (scholar * researchX);
  turn++;
  log();
  display();
  document.getElementById('message').innerHTML = 'You ended your turn.'
}


function display() {
  document.getElementById('display').innerHTML =
'<br>&nbsp;&nbsp;'
+ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
+ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Turn: ' +
 turn + '<br>----------------------------------------------------------------<br>Farms(' + farmCost
+ ') = ' + farm + '<br>Citizens = ' + citizen +  '<br><br>Merchants = ' + merchant
 + '<br>Gold = ' + gold + '<br><br>' + 'Artists = ' + artist + '<br>Culture = '
 + culture + '<br><br>Scholars = ' + scholar + '<br>Research = ' + research
+ '<br>-----------------------Buildings:------------------------------<br>';
  document.getElementById('arr1').innerHTML = Array1;
  document.getElementById('arr2').innerHTML = Array2;
  document.getElementById('arr3').innerHTML = Array3;
  document.getElementById('arr4').innerHTML = Array4;

}
display();


function log () {
console.log('TURN: ' + turn)
console.log('----------------')
console.log('farms = ' + farm);
console.log('farmCost = ' + farmCost);
console.log('citizens = ' + citizen);
console.log('merchants = ' + merchant);
console.log('gold = ' + gold);
console.log('----------------')
}
log();
