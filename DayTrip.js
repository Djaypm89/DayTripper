"use Strict"

// let userDestination = prompt("Enter 3 destinations");

// let userRestaraunt = prompt("Enter 3 restaurants");

// let userTransportation = prompt("Enter 3 modes of transportation");

// let userEntertainment = prompt("Enter 3 forms of entertainment");


///////////////////////////////////////////////////////

let destList = ['Brazil', 'Thailand', 'Spain', 'Turkey'];

function randDest (destList) {
    return destList[Math.floor(Math.random()*destList.length)];
}

let autoDest = randDest(destList);

let likeDest = prompt("The system choose you " + autoDest + "!! Do you like your destination? Type yes/no");
        if (likeDest === "yes") {
            console.log("Pack your bags, you're headed to " + autoDest);

        }           
            else {
               autoDest = randDest(destList);
               console.log("Pack your bags, you're headed to " + autoDest);
               alert("Pack your bags, you're headed to " + autoDest);
        
            }

            // let removedDest = destList.splice();
            // removedDest = randDest(removedDest);
            // console.log("Pack your bags, you're headed to " + removedDest);





let restList = ['tacos','pizza', 'ramen', 'burgers'];

function randRest (restList) {
    return restList[Math.floor(Math.random()*restList.length)];
}

let autoRest = randRest(restList);

let likeRest = prompt("The system choose you " + autoRest + "!! Do you like your food? Type yes/no");
        if (likeRest === "yes") {
            console.log("Hope you're hungry, you'll be eating " + autoRest);

        }           
            else {
               autoRest = randRest(restList);
               console.log("Hope you're hungry, you'll be eating " + autoRest);
               alert("Hope you're hungry, you'll be eating " + autoRest);
        
            }


transList = ['airplane', 'auto', 'train', 'hoofin it'];

function randTrans (transList) {
    return transList[Math.floor(Math.random()*transList.length)];
}

 let autoTrans = randTrans(transList);

 let likeTrans = prompt("The system choose you " + autoTrans + "!! Do you like your transportation? Type yes/no");
        if (likeTrans === "yes") {
            console.log("buckle up, you'll be travelling by " + autoTrans);

        }           
            else {
               autoTrans = randTrans(transList);
               console.log("buckle up, you'll be travelling by " + autoTrans);
               alert("buckle up, you'll be travelling by " + autoTrans);
        
            }


 entList = ['movies', 'music', 'books', 'daydream'];

 function randEnt(entList) {
     return entList[Math.floor(Math.random()*entList.length)];
 }

let autoEnt = randEnt(entList);

let likeEnt = prompt("The system choose you " + autoEnt + "!! Do you like your entertainent? Type yes/no");
if (likeEnt === "yes") {
    console.log("Hope you enjoy your " + autoEnt);

}           
    else {
       autoEnt = randEnt(entList);
       console.log("Hope you enjoy your " + autoEnt);
       alert("Hope you enjoy your " + autoEnt);

    }


let finalSelection = prompt("Do you like all of the choices listed?  Type yes/no.");
    if (finalSelection === "yes") {
        alert("Bon Voyage Brobewon! " 
        + '\n' + autoDest + '\n' + autoRest + '\n' + autoTrans + '\n' + autoEnt);
    }
        else {
            alert("We're sorry, no further changes allowed at this time! \nYour trip is displayed in the console. \nVisit our online help section to add further frustration to your experience. \nThanks for choosing Covid Travel Solutions.  Goodbye.");
            // finalSelection = randDest(destList);
            // tried tp return user to start selections over,
            // but it takes them to randDest then returns back to 
            // the bottom of the code after. 
        }

// randDest;
    

    

/////////////////////////////////////////////////////////////////