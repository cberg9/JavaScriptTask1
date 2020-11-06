let workBalance = 0;
let bankBalance = 0;
let newTransferBalance = 0;
let count = 0;
let cArray = []
let X = null;
let bankLoan;

let outOne = document.getElementById("payOutput");
let outTwo = document.getElementById("bankOutput");

function getWork() {
    workBalance += 100;
    outOne.innerHTML = "Pay: " + workBalance + "Kr";
}
function getBank() {
    bankBalance += workBalance;
    workBalance = newTransferBalance;
    outTwo.innerHTML = "Balance: " + bankBalance;
    outOne.innerHTML = "Pay: " + workBalance + "Kr";
}
function getLoan() {
    bankLoan = prompt("Enter amount: ");
    bankLoan = parseInt(bankLoan);
    if (bankLoan <= (bankBalance * 2) && count == 0 && bankBalance > 0 && bankLoan >=0 )  {
        count++;
        window.alert("The loan was accepted!")
        bankBalance += bankLoan;

        document.getElementById("bankloan").innerHTML = "Your current loan is: " + bankLoan + "Kr";
        document.getElementById("bankOutput").innerHTML = bankBalance + " Kr";

    } else if (count != 0) {
        window.alert("You can not apply for another loan!")
    }
    else {
        window.alert("The requested loan was not accepted!")
    }
}
function getLoanPayOff() {
    let payOfLoan = prompt("Enter amount: ");
    payOfLoan = parseInt(payOfLoan);
    if (payOfLoan == bankLoan && count != 0 && payOfLoan >=0) {
        bankLoan = 0;
        count = 0;
        document.getElementById("bankloan").innerHTML = "You paid off your loan! Apply for a new one! ";

    } else if (payOfLoan < bankLoan && count != 0 && payOfLoan >=0) {
        bankLoan = bankLoan - payOfLoan;
        document.getElementById("bankloan").innerHTML = "Your current loan is: " + bankLoan + "Kr";

    } else if (payOfLoan > bankLoan && count != 0 && payOfLoan >=0) {
        let newMoney = payOfLoan - bankLoan;
        count = 0;
        bankBalance = bankBalance + newMoney;
        document.getElementById("bankloan").innerHTML = "You paid off your loan! Apply for a new one!";
        document.getElementById("bankOutput").innerHTML = bankBalance + " Kr";
    
    }else if (payOfLoan <=0){
        window.alert("You cant enter a negative value...")
    }
    else {
        window.alert("You don't have a loan!")
    }
}
function firstPage() {

    const Hp = new Computer("HP 255 G7 Ryzen 5", 1700, "Perfect for gamers!", "Images/HP.webp", "An external key board is included.");
    const Acer = new Computer("Acer Swift 5", 2500, "Perfect for your home office!", "Images/ACER.webp", "Buy one get two!");
    const Msi = new Computer("MSI GF63", 1300, "Perfect for indie-games!", "Images/MSI.webp", "Some keys might be missing...");
    const Dell = new Computer("Dell Xps 15", 3000, "Powerful laptop that's perfect for big softwares", "Images/DELL.jpg", "The screen is broken...");

    cArray.push(Hp);
    cArray.push(Acer);
    cArray.push(Msi);
    cArray.push(Dell);

    let name = cArray[0].cName;
    let price = cArray[0].cPrice;
    let description = cArray[0].description;
    let image = cArray[0].image;
    let feature = cArray[0].features;

    document.getElementById("computer").innerHTML = description;
    document.getElementById("pictures").src = image;
    document.getElementById("featurelist").innerHTML = feature;
    document.getElementById("titlename").innerHTML = name + " : " + price + "Kr";
    X = "Hp";

}
function showComputer(value) {

    if (value == 1) {
        let name = cArray[0].cName;
        let price = cArray[0].cPrice;
        let description = cArray[0].description;
        let image = cArray[0].image;
        let feature = cArray[0].features;

        document.getElementById("computer").innerHTML = description;
        document.getElementById("pictures").src = image;
        document.getElementById("featurelist").innerHTML = feature;
        document.getElementById("titlename").innerHTML = name + " : " + price + "Kr";;
        X = "Hp";
    }
    else if (value == 2) {
        let name = cArray[1].cName;
        let price = cArray[1].cPrice;
        let description = cArray[1].description;
        let image = cArray[1].image;
        let feature = cArray[1].features;

        document.getElementById("computer").innerHTML = description;
        document.getElementById("pictures").src = image;
        document.getElementById("featurelist").innerHTML = feature;
        document.getElementById("titlename").innerHTML = name + " : " + price + "Kr";;
        X = "Acer";
    }
    else if (value == 3) {
        let name = cArray[2].cName;
        let price = cArray[2].cPrice;
        let description = cArray[2].description;
        let image = cArray[2].image;
        let feature = cArray[2].features;

        document.getElementById("computer").innerHTML = description;
        document.getElementById("pictures").src = image;
        document.getElementById("featurelist").innerHTML = feature;
        document.getElementById("titlename").innerHTML = name + " : " + price + "Kr";;
        X = "Msi";
    }
    else if (value == 4) {
        let name = cArray[3].cName;
        let price = cArray[3].cPrice;
        let description = cArray[3].description;
        let image = cArray[3].image;
        let feature = cArray[3].features;

        document.getElementById("computer").innerHTML = description;
        document.getElementById("pictures").src = image;
        document.getElementById("featurelist").innerHTML = feature;
        document.getElementById("titlename").innerHTML = name + " : " + price + "Kr";;
        X = "Dell";
    }

}
function buyNewComputer() {
    if (X == "Hp" && bankBalance >= cArray[0].cPrice) {
        bankBalance = bankBalance - cArray[0].cPrice
        outTwo.innerHTML = "Balance: " + bankBalance;
        window.alert("Congratulations! You've just bought a new computer.");
    }
    else if (X == "Acer" && bankBalance >= cArray[1].cPrice) {
        bankBalance = bankBalance - cArray[1].cPrice
        outTwo.innerHTML = "Balance: " + bankBalance;
        window.alert("Congratulations! You've just bought a new computer.");
    }
    else if (X == "Msi" && bankBalance >= cArray[2].cPrice) {
        bankBalance = bankBalance - cArray[2].cPrice
        outTwo.innerHTML = "Balance: " + bankBalance;
        window.alert("Congratulations! You've just bought a new computer.");
    }
    else if (X == "Dell" && bankBalance >= cArray[3].cPrice) {
        bankBalance = bankBalance - cArray[3].cPrice
        outTwo.innerHTML = "Balance: " + bankBalance;
        window.alert("Congratulations! You've just bought a new computer.");
    }
    else {
        window.alert("This computer is too expensive for you! Work harder or apply for a loan!!")
    }
}
