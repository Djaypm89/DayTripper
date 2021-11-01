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

destList = ['Brazil', 'Thailand', 'Spain', 'Turkey'];

function randDest (destList) {
    return destList[Math.floor(Math.random()*destList.length)];
}

let autoDest = randDest(destList);

alert(autoDest);

let likeDest = prompt("do you like your destination? Type Yes/No");
        if (likeDest == "yes") {
            console.log(autoDest);
        }           
            else {
                confirmDest;
            }

    let secondAutoDest = randDest(destList);

function confirmDest (destList) { 
    // let likeDest = prompt("do you like your destination? Type Yes/No");
    // let secondAutoDest = randDest(destList);
    // let secondAutoDest = [];
    // secondAutoDest = randDest(destList);
        // if (likeDest == "yes") {
        //         console.log(autoDest);
        //     }
        //     else {
        //         let secondAutoDest = randDest(destList);
        //         secondAutoDest = randDest(destList);
        //         return secondAutoDest;
            
        //     }
        // }
        return destList[Math.floor(Math.random()*destList.length)];
        
    }
        alert("bring a backpack and a gun, you're going to " + secondAutoDest);   
        console.log(secondAutoDest);

    




restList = ['tacos','pizza', 'ramen', 'burgers'];

function randRest (restList) {
    return restList[Math.floor(Math.random()*restList.length)];
}

let autoRest = randRest(restList);

console.log(autoRest);


transList = ['fly', 'drive', 'train', 'hoof it'];

function randTrans (transList) {
    return transList[Math.floor(Math.random()*transList.length)];
}

 let autoTrans = randTrans(transList);
 console.log(autoTrans);


 entList = ['movies', 'music', 'books', 'daydream'];

 function randEnt(entList) {
     return entList[Math.floor(Math.random()*entList.length)];
 }

let autoEnt = randEnt(entList);
console.log(autoEnt);



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