var link = document.getElementById('endTurn');

document.onkeydown = function (e) {
    if (e.keyCode == 32) {
        link.click();
    }
};


var research = 3;

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





function clickMarket () {
  if (marketDone === 0) {
    marketStatus = 1;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 0;
    document.getElementById('techTree1').innerHTML = 'Market'
    document.getElementById('techTree2').innerHTML = marketProg + ' / 10'
    console.log('market = ' + marketStatus)
    console.log('footman = ' + footmanStatus)
    console.log('library = ' + libraryStatus)
    console.log('granary = ' + granaryStatus)
  } else { }
};

function clickFootman () {
  if (footmanDone === 0) {
    marketStatus = 0;
    footmanStatus = 1;
    libraryStatus = 0;
    granaryStatus = 0;
    document.getElementById('techTree1').innerHTML = 'Footman'
    document.getElementById('techTree2').innerHTML = footmanProg + ' / 8'
    console.log('market = ' + marketStatus)
    console.log('footman = ' + footmanStatus)
    console.log('library = ' + libraryStatus)
    console.log('granary = ' + granaryStatus)
  } else { }
};

function clickLibrary () {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 1;
    granaryStatus = 0;
    document.getElementById('techTree1').innerHTML = 'Library'
    document.getElementById('techTree2').innerHTML = libraryProg + ' / 12'
    console.log('market = ' + marketStatus)
    console.log('footman = ' + footmanStatus)
    console.log('library = ' + libraryStatus)
    console.log('granary = ' + granaryStatus)
};

function clickGranary () {
  if (marketDone === 1 && granaryDone === 0) {
    marketStatus = 0;
    footmanStatus = 0;
    libraryStatus = 0;
    granaryStatus = 1;
    document.getElementById('techTree1').innerHTML = 'Granary'
    document.getElementById('techTree2').innerHTML = granaryProg + ' / 14'
    console.log('market = ' + marketStatus)
    console.log('footman = ' + footmanStatus)
    console.log('library = ' + libraryStatus)
    console.log('granary = ' + granaryStatus)
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Brute'
    document.getElementById('techTree2').innerHTML = bruteProg + ' / 14'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Ranger'
    document.getElementById('techTree2').innerHTML = rangerProg + ' / 16'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Blood Sacrifice'
    document.getElementById('techTree2').innerHTML = bloodSacrificeProg + ' / 22'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Shrine'
    document.getElementById('techTree2').innerHTML = shrineProg + ' / 20'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Ritual'
    document.getElementById('techTree2').innerHTML = ritualProg + ' / 20'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Knight'
    document.getElementById('techTree2').innerHTML = knightProg + ' / 24'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Archer'
    document.getElementById('techTree2').innerHTML = archerProg + ' / 20'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'University'
    document.getElementById('techTree2').innerHTML = universityProg + ' / 40'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Classical Art'
    document.getElementById('techTree2').innerHTML = classicalArtProg + ' / 50'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Chants'
    document.getElementById('techTree2').innerHTML = chantsProg + ' / 24'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Harbor'
    document.getElementById('techTree2').innerHTML = harborProg + ' / 32'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Religion'
    document.getElementById('techTree2').innerHTML = religionProg + ' / 40'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Temple'
    document.getElementById('techTree2').innerHTML = templeProg + ' / 42'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Conquerer'
    document.getElementById('techTree2').innerHTML = conquererProg + ' / 60'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Catapult'
    document.getElementById('techTree2').innerHTML = catapultProg + ' / 60'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Law and Order'
    document.getElementById('techTree2').innerHTML = lawAndOrderProg + ' / 65'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Priest'
    document.getElementById('techTree2').innerHTML = priestProg + ' / 80'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Free Trade'
    document.getElementById('techTree2').innerHTML = freeTradeProg + ' / 120'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'General'
    document.getElementById('techTree2').innerHTML = generalProg + ' / 110'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Laboratory'
    document.getElementById('techTree2').innerHTML = laboratoryProg + ' / 130'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Food Silo'
    document.getElementById('techTree2').innerHTML = foodSiloProg + ' / 80'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Aqueduct'
    document.getElementById('techTree2').innerHTML = aqueductProg + ' / 160'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Cathedral'
    document.getElementById('techTree2').innerHTML = cathedralProg + ' / 200'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Treasury'
    document.getElementById('techTree2').innerHTML = treasuryProg + ' / 210'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Goliath'
    document.getElementById('techTree2').innerHTML = goliathProg + ' / 250'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Mage'
    document.getElementById('techTree2').innerHTML = mageProg + ' / 300'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Abstract Art'
    document.getElementById('techTree2').innerHTML = abstractArtProg + ' / 400'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Infiltrator'
    document.getElementById('techTree2').innerHTML = infiltratorProg + ' / 400'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Berzerker'
    document.getElementById('techTree2').innerHTML = berzerkerProg + ' / 400'
} else { }
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
    document.getElementById('techTree1').innerHTML = 'Enlightenment'
    document.getElementById('techTree2').innerHTML = enlightenmentProg + ' / 400'
} else { }
};

function endTurn () {
  if (marketStatus === 1) {
    marketProg += research;
    mark();
 } else if (footmanStatus === 1) {
    footmanProg += research;
    foot();
  } else if (libraryStatus === 1) {
    libraryProg += research;
    lib();
  } else if (granaryStatus === 1) {
    granaryProg += research;
    gran();
  } else if (bruteStatus === 1) {
    bruteProg += research;
    brute();
  } else if (rangerStatus === 1) {
    rangerProg += research;
    rang();
  } else if (ritualStatus === 1) {
    ritualProg += research;
    rit();
  } else if (knightStatus === 1) {
    knightProg += research;
    kni();
  } else if (chantsStatus === 1) {
    chantsProg += research;
    cha();
  } else if (archerStatus === 1) {
    archerProg += research;
    arc();
  } else if (bloodSacrificeStatus === 1) {
    bloodSacrificeProg += research;
    blo();
  } else if (shrineStatus === 1) {
    shrineProg += research;
    shr();
  } else if (universityStatus === 1) {
    universityProg += research;
    uni();
  } else if (classicalArtStatus === 1) {
    classicalArtProg += research;
    cla();
  } else if (harborStatus === 1) {
    harborProg += research;
    har();
  } else if (religionStatus === 1) {
    religionProg += research;
    rel();
  } else if (templeStatus === 1) {
    templeProg += research;
    tem();
  } else if (conquererStatus === 1) {
    conquererProg += research;
    con();
  } else if (catapultStatus === 1) {
    catapultProg += research;
    cat();
  } else if (lawAndOrderStatus === 1) {
    lawAndOrderProg += research;
    law();
  } else if (priestStatus === 1) {
    priestProg += research;
    pri();
  } else if (foodSiloStatus === 1) {
    foodSiloProg += research;
    foo();
  } else if (freeTradeStatus === 1) {
    freeTradeProg += research;
    fre();
  } else if (generalStatus === 1) {
    generalProg += research;
    gen();
  } else if (laboratoryStatus === 1) {
    laboratoryProg += research;
    lab();
  } else if (aqueductStatus === 1) {
    aqueductProg += research;
    aqu();
  } else if (cathedralStatus === 1) {
    cathedralProg += research;
    cath();
  } else if (treasuryStatus === 1) {
    treasuryProg += research;
    tre();
  } else if (goliathStatus === 1) {
    goliathProg += research;
    gol();
  } else if (mageStatus === 1) {
    mageProg += research;
    mag();
  } else if (abstractArtStatus === 1) {
    abstractArtProg += research;
    abs();
  } else if (infiltratorStatus === 1) {
    infiltratorProg += research;
    inf();
  } else if (berzerkerStatus === 1) {
    berzerkerProg += research;
    ber();
  } else if (enlightenmentStatus === 1) {
    enlightenmentProg += research;
    enl();
  } else { }
};


function mark () {
  if (marketProg >= marketFinal) {
    document.getElementById('techTree2').innerHTML = marketProg + ' / 10'
    marketDone = 1;
    marketStatus = 0;
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
    document.getElementById('enlightenmentTech').style.backgroundColor = '#2d2d86';
    document.getElementById('enlightenmentTech').style.color = 'white';
    console.log('Scholars researched enlightenment.')
  } else {document.getElementById('techTree2').innerHTML = enlightenmentProg + ' / 400'}
}
