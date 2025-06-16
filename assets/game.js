//config
let gameClock = 10;
let ascending = false;

let totalGoldID = document.querySelector("#total-gold");
let totalGloryID = document.querySelector("#total-glory");
let ascendID = document.querySelector("#ascend");
let ascendCostID = document.querySelector(".ascend-cost");

let getGold = document.querySelector("#get-gold");

let goldPerClick = document.querySelector(".gold-per-click");

let totalPlatID = document.querySelector("#total-plat");
let totalGemsID = document.querySelector("#total-gems");

let goldPerSecID = document.querySelector(".gold-per-sec");
let gloryPerSecID = document.querySelector(".glory-per-sec");

let peasentGoldPerSecID = document.querySelector(".peasent-gold-per-sec");
let merchentGoldPerSecID = document.querySelector(".merchent-gold-per-sec");
let scholarGoldPerSecID = document.querySelector(".scholar-gold-per-sec");
let knightGoldPerSecID = document.querySelector(".knight-gold-per-sec");

let knightGloryPerSecID = document.querySelector(".knight-glory-per-sec");

let priestGloryPerSecID = document.querySelector(".priest-glory-per-sec");

let totalPeasentsID = document.querySelector("#total-peasents");
let peasentCostID = document.querySelector(".peasent-cost");

let totalMerchentsID = document.querySelector("#total-merchents");
let merchentCostID = document.querySelector(".merchent-cost");

let totalScholarsID = document.querySelector("#total-scholars");
let scholarCostID = document.querySelector(".scholar-cost");

let totalKnightsID = document.querySelector("#total-knights");
let knightCostID = document.querySelector(".knight-cost");

let totalPriestsID = document.querySelector("#total-priests");
let priestCostID = document.querySelector(".priest-cost");

let peasentBuy = document.querySelector("#buy-peasent");
let merchentBuy = document.querySelector("#buy-merchent");
let scholarBuy = document.querySelector("#buy-scholar");
let knightBuy = document.querySelector("#buy-knight");
let priestBuy = document.querySelector("#buy-priest");


let goldCard = document.querySelector(".gold-card");
let gloryCard = document.querySelector(".glory-card");
let gloryTb = document.querySelector(".glory-tb");

let peasentCard = document.querySelector(".peasent-card");
let peasentTb = document.querySelector(".peasent-tb");
let farmCard = document.querySelector(".farm-card");
let farmTb = document.querySelector(".farm-tb");

let merchentCard = document.querySelector(".merchent-card");
let merchentTb = document.querySelector(".merchent-tb");
let marketCard = document.querySelector(".market-card");
let marketTb = document.querySelector(".market-tb");

let scholarCard = document.querySelector(".scholar-card");
let scholarTb = document.querySelector(".scholar-tb");
let alchCard = document.querySelector(".alch-card");
let alchTb = document.querySelector(".alch-tb");

let knightCard = document.querySelector(".knight-card");
let knightTb = document.querySelector(".knight-tb");
let warCard = document.querySelector(".war-card");
let warTb = document.querySelector(".war-tb");

let priestCard = document.querySelector(".priest-card");
let priestTb = document.querySelector(".priest-tb");
let cathedralCard = document.querySelector(".cathedral-card");
let cathedralTb = document.querySelector(".cathedral-tb");

let godCard = document.querySelector(".god-card");



let allStartBtns = document.querySelectorAll(".start-button");

let farm_wheat = document.getElementById('wheat');
let farm_barley = document.getElementById('barley');

let farm_sheep = document.getElementById('sheep');
let farm_oxen = document.getElementById('oxen');


let market_addMerchent = document.querySelector("#add-merchent");
let market_removeMerchent = document.querySelector("#remove-merchent");
let market_transferGold = document.querySelector("#transfer-market-gold");
let market_merchentsAtMarketID = document.querySelector(".total-merchents-at-market");
let market_merchentsAtMarket = 0;

let market_goldID = document.querySelector("#total-market-gold");
let marketGoldPerSecID = document.querySelector(".market-gold-per-sec");
let market_gold = 0;

let alchProgressBarPlat = document.querySelector(".alch-card .progress-plat");
let alchProgressPlat = 0;

let alchProgressBarGems = document.querySelector(".alch-card .progress-gems");
let alchProgressGems = 0;

let platinumRadio = document.querySelector(".alch-card #platinum-radio");
let gemsRadio = document.querySelector(".alch-card #gems-radio");

let convertPlatBtn = document.querySelector('#convert-plat');
let convertGemsBtn = document.querySelector('#convert-gems');



let warRoom_targetPage = document.querySelector('.target-page');
let warRoom_AttackingPage = document.querySelector('.attacking-page');
let warRoom_AttackingBtns = document.querySelectorAll(".attack-btn");

let warRoom_AttackLowRiskBtn = document.querySelector("#attack-low-risk-target");
let warRoom_AttackMedRiskBtn = document.querySelector("#attack-med-risk-target");
let warRoom_AttackHighRiskBtn = document.querySelector("#attack-high-risk-target");

let warRoom_ResultsPage = document.querySelector(".results-page");
let warRoom_Collect = document.querySelector("#collect");

let warRoom_lowRisk_supplyCostGold_ID = document.querySelector(".low-risk-gold-cost");
let warRoom_lowRisk_supplyCostGlory_ID = document.querySelector(".low-risk-glory-cost");

let warRoom_medRisk_supplyCostGold_ID = document.querySelector(".med-risk-gold-cost");
let warRoom_medRisk_supplyCostGlory_ID = document.querySelector(".med-risk-glory-cost");

let warRoom_highRisk_supplyCostGold_ID = document.querySelector(".high-risk-gold-cost");
let warRoom_highRisk_supplyCostGlory_ID = document.querySelector(".high-risk-glory-cost");


let warRoom_lowRisk_supplyRewardGold_ID = document.querySelector(".low-risk-gold-reward");
let warRoom_lowRisk_supplyRewardGlory_ID = document.querySelector(".low-risk-glory-reward");

let warRoom_medRisk_supplyRewardGold_ID = document.querySelector(".med-risk-gold-reward");
let warRoom_medRisk_supplyRewardGlory_ID = document.querySelector(".med-risk-glory-reward");

let warRoom_highRisk_supplyRewardGold_ID = document.querySelector(".high-risk-gold-reward");
let warRoom_highRisk_supplyRewardGlory_ID = document.querySelector(".high-risk-glory-reward");

let warRoom_ResultsPage_winLose_ID = document.querySelector("#win-lose");
let warRoom_ResultsPage_collectAccept_ID = document.querySelector("#collect");

let warRoom_ResultsPage_gold_ID = document.querySelector("#results-page-gold");
let warRoom_ResultsPage_glory_ID = document.querySelector("#results-page-glory");


let warRoom_Progress = 0;
let warRoom_ProgressBar = document.querySelector('.progress-attacking');


let cathedral_gold = 0;
let cathedral_offerGold = document.querySelector('#offer-cathedral-gold');
let totalCathedralGoldID = document.querySelector("#total-cathedral-gold");

let cathedralGoldPerSecID = document.querySelector(".cathedral-gold-per-sec");
let cathedralGloryPerSecID = document.querySelector(".cathedral-glory-per-sec");


let gold = 0;
let glory = 0;
let plat = 0;
let gems = 0;
let attacking = false;
let warRoom_costsLoaded = false;

let warRoom_win = false;

let warRoom_riskTarget = null;
let warRoom_riskWeighting = 0;

let warRoom_lowRisk_supplyCostGold = 0;
let warRoom_lowRisk_supplyCostGlory = 0;
let warRoom_lowRisk_rewardGold = 0;
let warRoom_lowRisk_rewardGlory = 0;

let warRoom_medRisk_supplyCostGold = 0;
let warRoom_medRisk_supplyCostGlory = 0;
let warRoom_medRisk_rewardGold = 0;
let warRoom_medRisk_rewardGlory = 0;

let warRoom_highRisk_supplyCostGold = 0;
let warRoom_highRisk_supplyCostGlory = 0;
let warRoom_highRisk_rewardGold = 0;
let warRoom_highRisk_rewardGlory = 0;


let totalPeasents = 0;
let peasentCost = 30;
let peasentOneTime = false;

let totalMerchents = 0;
let merchentCost = 1500;
let merchentOneTime = false;

let totalScholars = 0;
let scholarCost = 11000;
let scholarOneTime = false;

let totalKnights = 0;
let knightCost = 36000;
let knightOneTime = false;

let totalPriests = 0;
let priestCost = 136000;
let priestOneTime = false;

let ascendCost = 1000000;


//click events
getGold.addEventListener("click", function (e) {
  goldClick();
	checkPurchases();
	formatText();
});

convertPlatBtn.addEventListener("click", function (e) {
  
  plat = plat-5;
  gold += 8000;

  checkPurchases();
  formatText();
});

convertGemsBtn.addEventListener("click", function (e) {
  
  gems = gems-5;
  glory += 1500;

  checkPurchases();
  formatText();
});

warRoom_Collect.addEventListener("click", function (e) {
  
  if (warRoom_win) {

    if (warRoom_riskTarget == "low") {
      gold += warRoom_lowRisk_rewardGold;
      glory += warRoom_lowRisk_rewardGlory;
    }
    else if(warRoom_riskTarget == "med"){
      gold += warRoom_medRisk_rewardGold;
      glory += warRoom_medRisk_rewardGlory;
    }
    else if(warRoom_riskTarget == "high"){
      gold += warRoom_highRisk_rewardGold;
      glory += warRoom_highRisk_rewardGlory;
    }

  }

  warRoom_ResultsPage.classList.toggle("hidden");
  warRoom_targetPage.classList.toggle("hidden");

  //reset weighting
  warRoom_riskWeighting = 0;
  //reset random rewards
  warRoom_costsLoaded = false;
  //reset win
  warRoom_win = false;
  //reset 
  warRoom_riskTarget = null;

  checkPurchases();
  formatText();
});

ascendID.addEventListener("click", function (e) {
  
  if (glory >= ascendCost) {
    console.log(`
     ┏┳┓┓     ┓           ┏        ┓    •    
      ┃ ┣┓┏┓┏┓┃┏  ┓┏┏┓┓┏  ╋┏┓┏┓  ┏┓┃┏┓┓┏┓┏┓┏┓
      ┻ ┛┗┗┻┛┗┛┗  ┗┫┗┛┗┻  ┛┗┛┛   ┣┛┗┗┻┗┫┗┛┗┗┫
                   ┛             ┛     ┛    ┛
     ┓┏┓•      ┏┓  ┏┓                        
     ┃┫ ┓┏┓┏┓  ┣╋  ┃ ┏┓┓┏┏┓╋┏┓┓┏             
     ┛┗┛┗┛┗┗┫  ┗┻  ┗┛┗┛┗┻┛┗┗┛ ┗┫             
            ┛                  ┛ 
    `);

    ascendID.classList.add("hidden");
    ascendCostID.classList.add("hidden");
    ascending = true;

  }

});

function goldClick() {

  //farm
  if(farm_wheat.checked && farm_sheep.checked) {
   gold = gold+( (totalPeasents/2) *8);
  }
  else if(farm_wheat.checked || farm_sheep.checked) {
   gold = gold+( (totalPeasents/2) *3);
  }
  else{
    gold = gold+1;
  }

}

//war room page toggle
for (let i = 0; i < warRoom_AttackingBtns.length; i++) {
  warRoom_AttackingBtns[i].addEventListener("click", function (e) {

    if (this.id == "attack-low-risk-target") {
      warRoom_riskWeighting = 90;
      warRoom_riskTarget = "low";

      gold -= warRoom_lowRisk_supplyCostGold;
      glory -= warRoom_lowRisk_supplyCostGlory;

    }
    else if (this.id == "attack-med-risk-target") {
      warRoom_riskWeighting = 55;
      warRoom_riskTarget = "med";

      gold -= warRoom_medRisk_supplyCostGold;
      glory -= warRoom_medRisk_supplyCostGlory;
    }
    else if (this.id == "attack-high-risk-target") {
      warRoom_riskWeighting = 30;
      warRoom_riskTarget = "high";

      gold -= warRoom_highRisk_supplyCostGold;
      glory -= warRoom_highRisk_supplyCostGlory;
    }

    warRoom_targetPage.classList.toggle("hidden");
    warRoom_AttackingPage.classList.toggle("hidden");
    attacking = true;
  });
}



//toggle windows
for (let i = 0; i < allStartBtns.length; i++) {
  allStartBtns[i].addEventListener("click", function (e) {

    this.classList.toggle("active");

    if (this.classList.contains("gold-tb")) {
      goldCard.classList.toggle("hidden");
    }
    if (this.classList.contains("glory-tb")) {
      gloryCard.classList.toggle("hidden");
    }

    if (this.classList.contains("peasent-tb")) {
      peasentCard.classList.toggle("hidden");
    }
    if (this.classList.contains("merchent-tb")) {
      merchentCard.classList.toggle("hidden");
    }
    if (this.classList.contains("scholar-tb")) {
      scholarCard.classList.toggle("hidden");
    }
    if (this.classList.contains("knight-tb")) {
      knightCard.classList.toggle("hidden");
    }
    if (this.classList.contains("priest-tb")) {
      priestCard.classList.toggle("hidden");
    }


    if (this.classList.contains("farm-tb")) {
      farmCard.classList.toggle("hidden");
    }
    if (this.classList.contains("market-tb")) {
      marketCard.classList.toggle("hidden");
    }
    if (this.classList.contains("alch-tb")) {
      alchCard.classList.toggle("hidden");
    }
    if (this.classList.contains("war-tb")) {
      warCard.classList.toggle("hidden");
    }
    if (this.classList.contains("cathedral-tb")) {
      cathedralCard.classList.toggle("hidden");
    }

  });

}
//end for


//buying
peasentBuy.addEventListener("click", function (e) {

	if(peasentCost <= gold){
		gold = gold-peasentCost;

		totalPeasents++;
		peasentCost = Math.ceil(peasentCost*1.3);

		totalPeasentsID.textContent = totalPeasents;

    formatText();
	}

});

merchentBuy.addEventListener("click", function (e) {

	if(merchentCost <= gold){
		gold = gold-merchentCost;

		totalMerchents++;
		merchentCost = Math.ceil(merchentCost*1.5);
		console.log("totalMerchents: "+totalMerchents);

		totalMerchentsID.textContent = totalMerchents;

    formatText();
	}

});

scholarBuy.addEventListener("click", function (e) {

  if(scholarCost <= gold){
    gold = gold-scholarCost;

    totalScholars++;
    scholarCost = Math.ceil(scholarCost*1.6);

    totalScholarsID.textContent = totalScholars;

    formatText();
  }

});
knightBuy.addEventListener("click", function (e) {

  if(knightCost <= gold){
    gold = gold-knightCost;

    totalKnights++;
    knightCost = Math.ceil(knightCost*1.8);
    console.log("totalKnights: "+totalKnights);

    totalKnightsID.textContent = totalKnights;

    formatText();
  }

});

priestBuy.addEventListener("click", function (e) {

  if(priestCost <= gold){
    gold = gold-priestCost;

    totalPriests++;
    priestCost = Math.ceil(priestCost*1.9);
    totalPriestsID.textContent = totalPriests;

    formatText();
  }

});

//market buying
market_addMerchent.addEventListener("click", function (e) {

  if(totalMerchents >= 1){
    totalMerchents--;
    market_merchentsAtMarket++;

    totalMerchentsID.textContent = totalMerchents;

    formatText();
  }

});

market_removeMerchent.addEventListener("click", function (e) {

  if(market_merchentsAtMarket >= 1){
    totalMerchents++;
    market_merchentsAtMarket--;

    totalMerchentsID.textContent = totalMerchents;

    formatText();
  }

});

market_transferGold.addEventListener("click", function (e) {

  if(market_gold >= 10000){
    market_gold = market_gold-10000;
    gold = gold+10000;

    formatText();
  }

});

cathedral_offerGold.addEventListener("click", function (e) {

  if(gold >= 50000){
    cathedral_gold = cathedral_gold+50000;
    gold = gold-50000;

    formatText();
  }

});


function addGold(afkCounter){

 	afkCounter = afkCounter || 1;

  let peasentMultiplier = 0.02;
  let merchentMultiplier = 0.1;

  let farm_barleyMuliplier = 1;
  let farm_oxenMuliplier = 1;

  //farm
  if(farm_barley.checked) {
   farm_barleyMuliplier = 2;
  }

  if(farm_oxen.checked) {
   farm_oxenMuliplier = 2;
  }

  let ADDpeasents = (totalPeasents* (peasentMultiplier*farm_barleyMuliplier) );
  let ADDmerchents = (totalMerchents* (merchentMultiplier*farm_oxenMuliplier) );
  let ADDscholars = (totalScholars*0.8 );
  let ADDknights = (totalKnights*2.1 );

  gold += (ADDpeasents + ADDmerchents + ADDscholars + ADDknights)* afkCounter;

  let goldPerSec =
  (
    (
      ADDpeasents + ADDmerchents + ADDscholars + ADDknights
    )
  *100
  ).toFixed(0);


  let peasentGoldPerSec =
  (
    (
      ADDpeasents
    )
  *100
  ).toFixed(0);

  let merchentGoldPerSec =
  (
    (
      ADDmerchents
    )
  *100
  ).toFixed(0);

  let scholarGoldPerSec =
  (
    (
      ADDscholars
    )
  *100
  ).toFixed(0);

  let knightGoldPerSec =
  (
    (
      ADDknights
    )
  *100
  ).toFixed(0);


  goldPerSecID.textContent = goldPerSec;
  peasentGoldPerSecID.textContent = peasentGoldPerSec;
  merchentGoldPerSecID.textContent = merchentGoldPerSec;
  scholarGoldPerSecID.textContent = scholarGoldPerSec;
  knightGoldPerSecID.textContent = knightGoldPerSec;

}

function addGlory(afkCounter){

  afkCounter = afkCounter || 1;

  let ADDknightsGlory = (totalKnights*0.32 );
  let ADDPriestsGlory = (totalPriests*2.15 );

  //cathedral
  let cofferDrain = (totalPriests*5)* afkCounter;
  let gloryMultiplier = (totalPriests*3)* afkCounter;

  if (cathedral_gold > 0) {
    cathedral_gold -= cofferDrain;

    glory += gloryMultiplier;


    let cofferDrainGoldPerSec =
    (
      (
        cofferDrain
      )
    *100
    ).toFixed(0);
    
    let gloryMultiplierPerSec =
    (
      (
        gloryMultiplier
      )
    *100
    ).toFixed(0);

    cathedralGloryPerSecID.textContent = gloryMultiplierPerSec;
    cathedralGoldPerSecID.textContent = cofferDrainGoldPerSec;

  }
  else{
    cathedralGloryPerSecID.textContent = 0;
    cathedralGoldPerSecID.textContent = 0;

    gloryMultiplier = 0;
    cathedral_gold = 0;
  }



  glory += (ADDknightsGlory + ADDPriestsGlory)* afkCounter;

  let gloryPerSec =
  (
    (
      ADDknightsGlory + ADDPriestsGlory + gloryMultiplier
    )
  *100
  ).toFixed(0);

  let knightGloryPerSec =
  (
    (
      ADDknightsGlory
    )
  *100
  ).toFixed(0);

  let priestGloryPerSec =
  (
    (
      ADDPriestsGlory
    )
  *100
  ).toFixed(0);


  gloryPerSecID.textContent = gloryPerSec;
  knightGloryPerSecID.textContent = knightGloryPerSec;
  priestGloryPerSecID.textContent = priestGloryPerSec;

}

function checkPurchases(){
	if (gold >= peasentCost && !peasentOneTime) {
		peasentCard.classList.remove("hidden");
		peasentTb.classList.remove("hidden");

    farmCard.classList.remove("hidden");
    farmTb.classList.remove("hidden");

    peasentOneTime = true;
	}

	if (gold >= merchentCost && !merchentOneTime) {
		merchentCard.classList.remove("hidden");
		merchentTb.classList.remove("hidden");

    marketCard.classList.remove("hidden");
    marketTb.classList.remove("hidden");
    merchentOneTime = true;
	}
  if (gold >= scholarCost && !scholarOneTime) {
    scholarCard.classList.remove("hidden");
    scholarTb.classList.remove("hidden");

    alchCard.classList.remove("hidden");
    alchTb.classList.remove("hidden");

    gloryCard.classList.remove("hidden");
    gloryTb.classList.remove("hidden");
    scholarOneTime = true;
  }
  if (gold >= knightCost && !knightOneTime) {
    knightCard.classList.remove("hidden");
    knightTb.classList.remove("hidden");

    warCard.classList.remove("hidden");
    warTb.classList.remove("hidden");
    knightOneTime = true;
  }
  if (gold >= priestCost && !priestOneTime) {
    priestCard.classList.remove("hidden");
    priestTb.classList.remove("hidden");
    
    cathedralCard.classList.remove("hidden");
    cathedralTb.classList.remove("hidden");
    priestOneTime = true;
  }


  //purchases
  if (gold >= peasentCost) {
    document.querySelector('#buy-peasent').disabled = false;
  }
  else{
    document.querySelector('#buy-peasent').disabled = true;
  }

  if (gold >= merchentCost) {
    document.querySelector('#buy-merchent').disabled = false;
  }
  else{
    document.querySelector('#buy-merchent').disabled = true;
  }

  if (gold >= scholarCost) {
    document.querySelector('#buy-scholar').disabled = false;
  }
  else{
    document.querySelector('#buy-scholar').disabled = true;
  }

  if (gold >= knightCost) {
    document.querySelector('#buy-knight').disabled = false;
  }
  else{
    document.querySelector('#buy-knight').disabled = true;
  }

  if (gold >= priestCost) {
    document.querySelector('#buy-priest').disabled = false;
  }
  else{
    document.querySelector('#buy-priest').disabled = true;
  }

  if (glory >= ascendCost) {
    document.querySelector('#ascend').disabled = false;
  }
  else{
    document.querySelector('#ascend').disabled = true;
  }

  //secondaries
  if (market_merchentsAtMarket != 0) {
    document.querySelector('#remove-merchent').disabled = false;
  }
  else{
    document.querySelector('#remove-merchent').disabled = true;
  }

  if (totalMerchents != 0) {
    document.querySelector('#add-merchent').disabled = false;
  }
  else{
    document.querySelector('#add-merchent').disabled = true;
  }

  if (market_gold >= 10000) {
    document.querySelector('#transfer-market-gold').disabled = false;
  }
  else{
    document.querySelector('#transfer-market-gold').disabled = true;
  }


  if (plat >= 5) {
    convertPlatBtn.disabled = false;
  }
  else{
    convertPlatBtn.disabled = true;
  }
  if (gems >= 5) {
    convertGemsBtn.disabled = false;
  }
  else{
    convertGemsBtn.disabled = true;
  }


  if (gold >= warRoom_lowRisk_supplyCostGold && glory >= warRoom_lowRisk_supplyCostGlory) {
    warRoom_AttackLowRiskBtn.disabled = false;
  }
  else{
    warRoom_AttackLowRiskBtn.disabled = true;
  }
  if (gold >= warRoom_medRisk_supplyCostGold && glory >= warRoom_medRisk_supplyCostGlory) {
    warRoom_AttackMedRiskBtn.disabled = false;
  }
  else{
    warRoom_AttackMedRiskBtn.disabled = true;
  }
  if (gold >= warRoom_highRisk_supplyCostGold && glory >= warRoom_highRisk_supplyCostGlory) {
    warRoom_AttackHighRiskBtn.disabled = false;
  }
  else{
    warRoom_AttackHighRiskBtn.disabled = true;
  }

  if (gold >= 50000) {
    cathedral_offerGold.disabled = false;
  }
  else{
    cathedral_offerGold.disabled = true;
  }

}

function formatText(){
	totalGoldID.textContent = gold.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  totalGloryID.textContent = glory.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  //farm
  if(farm_wheat.checked && farm_sheep.checked) {
   goldPerClick.textContent = ( (totalPeasents/2) *8).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  else if(farm_wheat.checked || farm_sheep.checked) {
   goldPerClick.textContent = ( (totalPeasents/2) *3).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  else{
    goldPerClick.textContent = 1;
  }


  totalPlatID.textContent = plat.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalGemsID.textContent = gems.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  market_goldID.textContent = market_gold.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  market_merchentsAtMarketID.textContent = market_merchentsAtMarket.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	peasentCostID.textContent = peasentCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	merchentCostID.textContent = merchentCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  scholarCostID.textContent = scholarCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  knightCostID.textContent = knightCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  priestCostID.textContent = priestCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


  warRoom_lowRisk_supplyCostGold_ID.textContent = warRoom_lowRisk_supplyCostGold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  warRoom_lowRisk_supplyCostGlory_ID.textContent = warRoom_lowRisk_supplyCostGlory.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  warRoom_medRisk_supplyCostGold_ID.textContent = warRoom_medRisk_supplyCostGold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  warRoom_medRisk_supplyCostGlory_ID.textContent = warRoom_medRisk_supplyCostGlory.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  warRoom_highRisk_supplyCostGold_ID.textContent = warRoom_highRisk_supplyCostGold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  warRoom_highRisk_supplyCostGlory_ID.textContent = warRoom_highRisk_supplyCostGlory.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


  warRoom_lowRisk_supplyRewardGold_ID.textContent = warRoom_lowRisk_rewardGold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  warRoom_lowRisk_supplyRewardGlory_ID.textContent = warRoom_lowRisk_rewardGlory.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  warRoom_medRisk_supplyRewardGold_ID.textContent = warRoom_medRisk_rewardGold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  warRoom_medRisk_supplyRewardGlory_ID.textContent = warRoom_medRisk_rewardGlory.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  warRoom_highRisk_supplyRewardGold_ID.textContent = warRoom_highRisk_rewardGold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  warRoom_highRisk_supplyRewardGlory_ID.textContent = warRoom_highRisk_rewardGlory.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  totalCathedralGoldID.textContent = cathedral_gold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function alchBar(progressAmount, afkCounter) {
  progressAmount = progressAmount || 0;

  if (platinumRadio.checked) {

    alchProgressPlat += progressAmount*afkCounter;
  
    if (alchProgressPlat >= 100) {
      alchProgressPlat = 0;
      plat++;
    }
  
    alchProgressBarPlat.style.width = alchProgressPlat + "%";
  }
  else if (gemsRadio.checked) {


    alchProgressGems += progressAmount*afkCounter;

    if (alchProgressGems >= 100) {
      alchProgressGems = 0;
      gems++;
    }

    alchProgressBarGems.style.width = alchProgressGems+ "%";

  }


}


function warRoom(progressAmount, afkCounter) {
  afkCounter = afkCounter || 1;

  progressAmount = progressAmount || 0;

  if (attacking) {

    warRoom_Progress += progressAmount*afkCounter;
    
    if (warRoom_Progress >= 100) {
      warRoom_Progress = 0;
      attacking = false;

      if (warRoom_riskWeighting >= random(0,100) ){
        warRoom_ResultsPage_winLose_ID.textContent = " Gained";
        warRoom_win = true;
        warRoom_ResultsPage_collectAccept_ID.textContent = "Collect";

        if (warRoom_riskTarget == "low") {
          warRoom_ResultsPage_gold_ID.textContent = warRoom_lowRisk_rewardGold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          warRoom_ResultsPage_glory_ID.textContent = warRoom_lowRisk_rewardGlory.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else if(warRoom_riskTarget == "med"){
          warRoom_ResultsPage_gold_ID.textContent = warRoom_medRisk_rewardGold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          warRoom_ResultsPage_glory_ID.textContent = warRoom_medRisk_rewardGlory.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else if(warRoom_riskTarget == "high"){
          warRoom_ResultsPage_gold_ID.textContent = warRoom_highRisk_rewardGold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          warRoom_ResultsPage_glory_ID.textContent = warRoom_highRisk_rewardGlory.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

      }
      else{
        warRoom_ResultsPage_winLose_ID.textContent = " Lost";
        warRoom_ResultsPage_collectAccept_ID.textContent = "Accept";

        if (warRoom_riskTarget == "low") {
          warRoom_ResultsPage_gold_ID.textContent = warRoom_lowRisk_supplyCostGold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          warRoom_ResultsPage_glory_ID.textContent = warRoom_lowRisk_supplyCostGlory.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else if(warRoom_riskTarget == "med"){
          warRoom_ResultsPage_gold_ID.textContent = warRoom_medRisk_supplyCostGold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          warRoom_ResultsPage_glory_ID.textContent = warRoom_medRisk_supplyCostGlory.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else if(warRoom_riskTarget == "high"){
          warRoom_ResultsPage_gold_ID.textContent = warRoom_highRisk_supplyCostGold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          warRoom_ResultsPage_glory_ID.textContent = warRoom_highRisk_supplyCostGlory.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      }

      warRoom_AttackingPage.classList.toggle("hidden");
      warRoom_ResultsPage.classList.toggle("hidden");
    }
    
    warRoom_ProgressBar.style.width = warRoom_Progress + "%";

  }
  else if (!warRoom_costsLoaded) {

    warRoom_lowRisk_supplyCostGold = random(200,500);
    warRoom_lowRisk_supplyCostGlory = random(40,80);

    warRoom_lowRisk_supplyCostGold = Math.round( (warRoom_lowRisk_supplyCostGold/ 100 ) )*100;
    warRoom_lowRisk_supplyCostGlory = Math.round( (warRoom_lowRisk_supplyCostGlory/ 100 ) )*100;

    warRoom_medRisk_supplyCostGold = random(3000,8000);
    warRoom_medRisk_supplyCostGlory = random(500,950);

    warRoom_medRisk_supplyCostGold = Math.round( (warRoom_medRisk_supplyCostGold/ 100 ) )*100;
    warRoom_medRisk_supplyCostGlory = Math.round( (warRoom_medRisk_supplyCostGlory/ 100 ) )*100;

    warRoom_highRisk_supplyCostGold = random(12000,69050);
    warRoom_highRisk_supplyCostGlory = random(3500,8200);

    warRoom_highRisk_supplyCostGold = Math.round( (warRoom_highRisk_supplyCostGold/ 100 ) )*100;
    warRoom_highRisk_supplyCostGlory = Math.round( (warRoom_highRisk_supplyCostGlory/ 100 ) )*100;



    warRoom_lowRisk_rewardGold = Math.round( (warRoom_lowRisk_supplyCostGold*1.5) / 100 )*100;
    warRoom_lowRisk_rewardGlory = Math.round( (warRoom_lowRisk_supplyCostGlory*1.5) / 100 )*100;

    warRoom_medRisk_rewardGold = Math.round( (warRoom_medRisk_supplyCostGold*2) / 100 )*100;
    warRoom_medRisk_rewardGlory = Math.round( (warRoom_medRisk_supplyCostGlory*2) / 100 )*100;

    warRoom_highRisk_rewardGold = Math.round( (warRoom_highRisk_supplyCostGold*4) / 100 )*100;
    warRoom_highRisk_rewardGlory = Math.round( (warRoom_highRisk_supplyCostGlory*4) / 100 )*100;

    warRoom_costsLoaded = true;
  }

}



function random(min,max) {
 return Math.floor((Math.random())*(max-min+1))+min;
}


function tradingMarket(afkCounter) {
  afkCounter = afkCounter || 1;
  market_gold += ((market_merchentsAtMarket*6.5)*0.05)* afkCounter;

  let marketGoldPerSec =
  (
    (
      (market_merchentsAtMarket*6.5)*0.05
    )
  *100
  ).toFixed(0);

  marketGoldPerSecID.textContent = marketGoldPerSec;
}


//dragable elements

let allCards = document.querySelectorAll(".card");
let globalZindex = 1;

for (var i = allCards.length - 1; i >= 0; i--) {
  dragElement(allCards[i]);
}


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (elmnt.querySelector(".card-header")) {
    // if present, the header is where you move the DIV from:
    elmnt.querySelector(".card-header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = "clamp(0px," + (elmnt.offsetTop - pos2) + "px, 85vh";
    elmnt.style.left = "clamp(0px," + (elmnt.offsetLeft - pos1) + "px, 90vw";
    elmnt.style.zIndex = 0 + globalZindex;
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    globalZindex++;
  }
}




//add Z index to card body also
for (let i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener("click", function (e) {
    this.style.zIndex = 0 + globalZindex;
    globalZindex++;
  });

}
//end for




//run the game
function gameloop(afkCounter){

  if (!ascending) {


    //add all gold
		addGold(afkCounter);
    //add all glory
    addGlory(afkCounter);
    //trading market
    tradingMarket(afkCounter);

    knightsAttackAmount = totalKnights/100;
    warRoom(knightsAttackAmount,afkCounter);

    checkPurchases();

    //alch
    scholarsAlchAmount = totalScholars/100;
    alchBar(scholarsAlchAmount, afkCounter);

    formatText();

  }
  else{
    ascend();
  }

}

function ascend(afkCounter) {
  afkCounter = afkCounter || 1;

  glory += Math.round ( ( glory * 1.1) * afkCounter );

  let gloryPerSec =
  (
    (
      glory * 1.2
    )
  *100
  ).toFixed(0);


  gloryPerSecID.textContent = gloryPerSec;
  totalGloryID.textContent = glory.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (glory === Infinity) {
    godCard.classList.remove("hidden");
  }
}


let lastUpdate = new Date().getTime();

setInterval(function(){
  let thisUpdate = new Date().getTime();
  let diff = (thisUpdate - lastUpdate);
  //10 i think is because of gamespeed?
  diff = Math.round(diff / 10);
  gameloop(diff);
  lastUpdate = thisUpdate;
}, gameClock);