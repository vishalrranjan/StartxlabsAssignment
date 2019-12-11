// 1. Get number of hours, minutes and seconds from number of seconds.
// For example :  If number of seconds provided are 129 , then number of hours will be 0 , minutes 2, seconds 9.
// Input :  Number of seconds.
// Output : “Hours = ‘number of hours’, minutes = ‘number of minutes’ , seconds = ‘number of seconds’ ”

// Solution :

const convert = (seconds) => {
    var Hours = (seconds / 3600);
    var totalHours = Math.floor(Hours);
    var totalMinutes = Math.floor((seconds % 3600) / 60);
    var totalSeconds = seconds % 60;
    return "Hours = " + totalHours + ", " + "Minutes = " + totalMinutes + ", " + "Seconds = " + totalSeconds;
}

//   2. You are given two numbers L and R,
    // you have to find if XOR of all the numbers in range L to R (L,R both inclusive) is odd or even.

// Solutioin :
const findXor = (l,r) => {
    let xor;
    for (let i=l; i <= r; i++)
    {
        xor ^= i;
    }
    if (xor % 2 == 0)
    {
        console.log("even");
    }
    else 
    {
        console.log("odd");
    }
}


//   3. You are given with T number of strings. You need to sort the strings according to their first character.

// Solution :

const sortString = ( stringArr) => {
    stringArr.sort();
return stringArr;
}

//sortString(["hello","joy","nope","aweful"]);