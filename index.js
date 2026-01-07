// problem 1
// function reverseString(str){
//     return str.split("").reverse().join("")
// }
// console.log(reverseString('hello'))
// problem 2
// function getCount(str){
//     var vowelsCount = 0;
//     const vowels = ['a','e','i','o','u']
//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             vowelsCount++
//         }
//     }
//     return vowelsCount;

// }
// console.log(getCount('programming'))
//problem 3
// function isPalindrome(str){
//     const lowerString = str.toLowerCase();
//     const reversedStr = lowerString.split("").reverse().join('')
//     return lowerString === reversedStr
// }
// console.log(isPalindrome("madam")); 
// console.log(isPalindrome("hello")); 
// problem 4
function getMaxNumber(arr){
    let max = arr[0]
    for(let i =1;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(getMaxNumber([3,9,1,4,0]))
