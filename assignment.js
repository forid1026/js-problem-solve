
//https://github.com/forid1026/js-problem-solve

function kilometerToMeter(km){
    var meter =  km * 1000;
    if(km < 0){
        return 'this is not a valid input';
    }
    return meter;
}
var totalMeter = kilometerToMeter(100);
console.log(totalMeter);


function budgetCalculator(watch, phone, laptop){

    var watchPrice = 50; 
    var phonePrice = 100;
    var laptopPrice = 500;
    var totalWatchPrice = watchPrice * watch;
    var totalPhonePrice = phonePrice * phone;
    var totalLaptopPrice = laptopPrice * laptop;
    var total = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

    //validation part
    if(watch < 0 || phone < 0 || laptop < 0){
        return 'negative value not be countable.';

    }

    return total;
}
var totalBudget = budgetCalculator(5, 5, 5);
console.log(totalBudget);


function hotelCost(days){
    var cost = 0;
    if( days <= 10){
        cost = days * 100; 
    }
    else if(days <= 20){
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * (100 - 20); 
        cost = firstTenDays +  secondTenDays; 
    }
    else{
        var firstTenDays = 10 * 100; 
        var secondTenDays = 10 * (100 - 20); 
        var remaining = days - 20;
        var lastNumbersOfDays = remaining * 50;  
        cost = firstTenDays + secondTenDays + lastNumbersOfDays;

    }

    //validation part
    if(days < 0){
        return 'please enter a valid number! Negative value cannot accept';
    }
   
    return cost;
    
}

var totalCost = hotelCost(31);
console.log(totalCost);


function megaFriend(friendName){
    megaName= friendName[0];
    for( var i = 0; i < friendName.length; i++){
        var element = friendName[i];
        if( element.length > megaName.length){
            megaName = element;
        }

        //validation part
        if(friendName[i] == "" || friendName[i] == " "){
            return 'empty array not acceptable';
        }
    }
    return megaName;

}

var friendName = ['Nilima', 'Udhas', 'Shaba', 'Mahbub hosen', 'Niloy', 'Faisal', 'Nayeem Rahman'];
var name =  megaFriend(friendName);
console.log(name)