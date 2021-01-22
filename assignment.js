// https://github.com/freelancernaim128992/basic-javascript

// Kilometer to meter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

// Budget Calculator

function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}

// Hotel Cost

function hotelCost(stayDay) {
    var totalMoney = 0;
    if (stayDay <= 10) {
        totalMoney = stayDay * 100;
    }
    else if (stayDay <= 20) {
        var firstPart = 10 * 100;
        var remaining = stayDay - 10;
        var secondPart = remaining * 80;
        totalMoney = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = stayDay - 20;
        var thirdPart = remaining * 50;
        totalMoney = firstPart + secondPart + thirdPart;
    }
    return totalMoney;
}

// Finding biggest string in array

function megaFriend(arr) {
    var strLength = 0;
    var biggestString;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > strLength) {
            strLength = arr[i].length;
            biggestString = arr[i];
        }
    }
    return biggestString;
}