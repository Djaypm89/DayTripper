"use Strict"

// let userDestination = prompt("Enter 3 destinations");

// let userRestaraunt = prompt("Enter 3 restaurants");

// let userTransportation = prompt("Enter 3 modes of transportation");

// let userEntertainment = prompt("Enter 3 forms of entertainment");


// function destination (userDestination) {
//     let destArr = [];
//     for (let i = 0; i < destArr; i++) {
//         destArr += userDestination[i];
//     }
// }

// userChoices = [];


// destList = ['Brazil', 'Thailand', 'Spain', 'Morocco'];

// function randDest (destList) {
//     return destList[Math.floor(Math.random()*destList.length)];
// }

// let autoDest = randDest(destList);

// alert(autoDest);

// confirmDest = prompt("do you like your destination? Type Yes/No");
//     if (confirmDest == "yes") {
//         autoDest += userChoices;
//         console.log(userChoices);
//     }
//     else if (confirmDest == "no") {
//         randDest ++;
//     }

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

    }



    // else if (confirmDest == "no") {
    //     randDest++;
    //     confirmDest;
    // }
        // confirmDest;

    // while (confirmDest != "yes") {
    //     confirmDest = randDest;
    // }    

    // if (confirm == "yes") {
    //     console.log(autoDest)
    // }
    

    // while(confirmDest != "yes") {
    //     randDest ++;
    //         if(confirmDest == "yes") {
    //             console.log(autoDest);
    //         }

    // }

/////////////////////////////////////////////////////////////////