const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 < 0 || num2 < 0){
        return 'ERROR';
    }
    if(typeof(num1) != typeof(num2)){
        return 'ERROR';
    }
    if (num1 < num2){
        for (let i = num1; i <= num2; i++){
            sum+=i;
        }
    }
    else if(num2 < num1){
        for (let i = num2; i <= num1; i++){
            sum+=i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
