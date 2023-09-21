const carVar = "Car"
const busVar = "Public Transport"
const bikeVar = "Bike"
const poolVar = "Car Pool"
const yesVar = "Donation made"
const noVar = "Donation not made"
const newClothesVar = "New Clothes"
const oldClothesVar = "Second-hand clothes"
const recycledClothesVar = "New sustainable clothes"
const newBuildVar = "New-build Gym"
const warehouseVar = "Warehouse Gym"
const oldBuildVar = "Re-purposed Gym"
const resoleVar = "Resoled Shoes"
const newShoeVar = "New Shoes"
const leaveVar = "Litter it"
const takeVar = "Bin it"
const recycleLitterVar = "Recycle it"
const newGearVar = "New gear"
const recycledGearVar = "New sustainable gear"
const secondGearVar = "Second-hand gear"
const oldGearVar = "Okay, don't do that"


function carFunc() {
   document.getElementById('transportP').innerText = carVar;
}
function busFunc() {
   document.getElementById('transportP').innerText = busVar;
}
function bikeFunc() {
   document.getElementById('transportP').innerText = bikeVar;
}
function poolFunc() {
   document.getElementById('transportP').innerText = poolVar;
}
function yesFunc() {
   document.getElementById('charityP').innerText = yesVar;
}
function noFunc() {
   document.getElementById('charityP').innerText = noVar;
}
function poolFunc() {
   document.getElementById('transportP').innerText = poolVar;
}
function newClothesFunc() {
   document.getElementById('clothesP').innerText = newClothesVar;
}
function oldClothesFunc() {
   document.getElementById('clothesP').innerText = oldClothesVar;
}
function recycledClothesFunc() {
   document.getElementById('clothesP').innerText = recycledClothesVar;
}
function newBuildFunc() {
   document.getElementById('buildingP').innerText = newBuildVar;
}
function warehouseFunc() {
   document.getElementById('buildingP').innerText = warehouseVar;
}
function oldBuildFunc() {
   document.getElementById('buildingP').innerText = oldBuildVar;
}
function resoleFunc() {
   document.getElementById('shoesP').innerText = resoleVar;
}
function newShoeFunc() {
   document.getElementById('shoesP').innerText = newShoeVar;
}
function leaveFunc() {
   document.getElementById('litterP').innerText = leaveVar;
}
function takeFunc() {
   document.getElementById('litterP').innerText = takeVar;
}
function recycleLitterFunc() {
    document.getElementById('litterP').innerText = recycleLitterVar;
}
function newGearFunc() {
   document.getElementById('gearP').innerText = newGearVar;
}
function recycledGearFunc() {
    document.getElementById('gearP').innerText = recycledGearVar;
}
function secondGearFunc() {
   document.getElementById('gearP').innerText = secondGearVar;
}
function oldGearFunc() {
    document.getElementById('gearP').innerText = oldGearVar;
}

let score = 0;

function submit() {
    /*get form values*/
    let transportElements = document.forms.form1.elements;
    let charityElements = document.forms.form2.elements;
    let clothesElements = document.forms.form3.elements;
    let buildingElements = document.forms.form4.elements;
    let shoesElements = document.forms.form5.elements;
    let litterElements = document.forms.form6.elements;
    let gearElements = document.forms.form7.elements;
    
    let transportAnswer = transportElements.transport.value;
    let charityAnswer = charityElements.charity.value;
    let clothesAnswer = clothesElements.clothes.value;
    let buildingAnswer = buildingElements.building.value;
    let shoesAnswer = shoesElements.shoes.value;
    let litterAnswer = litterElements.litter.value;
    let gearAnswer = gearElements.gear.value;
    /*update score based on values */
    /*reset score*/ 
    score = 0;
    /*form1 */

    if (transportAnswer == "car") {
        score = score + 1;
    }
    else if (transportAnswer == "bus") {
        score = score + 3;
    }
    else if (transportAnswer == "bike") {
        score = score + 4;
    }
    else if (transportAnswer == "pool") {
        score = score + 2;
    }
    else {}
    /*form2 */
    if (charityAnswer == "yes") {
        score = score + 4;
    }
    else if (charityAnswer == "no") {
        score = score + 1;
    }
    else {}
    /*form3 */
    if (clothesAnswer == "newClothes") {
        score = score + 1;
    }
    else if (clothesAnswer == "old") {
        score = score + 4;
    }
    else if (clothesAnswer == "recycledClothes") {
        score = score + 3;
    }
    else {}
    /*form4 */
    if (buildingAnswer == "newBuild") {
        score = score + 1;
    }
    else if (buildingAnswer == "warehouse") {
        score = score + 3;
    }
    else if (buildingAnswer == "oldBuild") {
        score = score + 4;
    }
    else {}
    /*form5 */
    if (shoesAnswer == "resole") {
        score = score + 4;
    }
    else if (shoesAnswer == "newShoe") {
        score = score + 1;
    }
    else {}
    /*form6 */
    if (litterAnswer == "leave") {
        score = score + 1;
    }
    else if (litterAnswer == "take") {
        score = score + 3;
    }
    else if (litterAnswer == "recycleLitter") {
        score = score + 4;
    }
    else {}
    /*form7 */
    if (gearAnswer == "newGear") {
        score = score + 2;
    }
    else if (gearAnswer == "recycledGear") {
        score = score + 3;
    }
    else if (gearAnswer == "secondGear") {
        score = score + 4;
    }
    else if (gearAnswer == "oldGear") {
        score = score + 1;
    }
    else {}

    /*change width of results bar depending on score */
    
    let resultsBar = document.getElementById("resultsBarDiv");

    if (score < 10) {
        resultsBar.style.width = "20%";
        document.getElementById("resultsBarResponse").innerText = "You are a horribly unsustainable climber.";
    }
    else if (score < 17) {
        resultsBar.style.width = "40%";
        document.getElementById("resultsBarResponse").innerText = "You are a kinda unsustainable climber.";
    }
    else if (score < 22) {
        resultsBar.style.width = "60%";
        document.getElementById("resultsBarResponse").innerText = "You are a pretty sustainable climber.";
    }
    else if (score == 28) {
        resultsBar.style.width = "80%";
        document.getElementById("resultsBarResponse").innerText = "You are the epitomy of sustainability you legend.";
    }
    else if (score > 21) {
        resultsBar.style.width = "75%";
        document.getElementById("resultsBarResponse").innerText = "You are an extremely sustainable climber.";
    }
    else{};

    console.log(score);
}





