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
// function getMaxNumber(arr){
//     let max = arr[0]
//     for(let i =1;i<arr.length;i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(getMaxNumber([3,9,1,4,0]))
// problem 5
// function duplicateArray(arr){
//     let result = [];
//     for(let num of arr){
//         if(!result.includes(num)){
//             result.push(num)
//         }

//     }
//     return result
// }
// console.log(duplicateArray([1,2,2,34,4,5]))
// problem 6
// function sumArray(arr){
//     let sum = 0;
//     for(let num of arr){
//         sum += num
//     }
//     return sum
// }
// console.log(sumArray([1,2,3,4]))
// problem 7
// function findEvenNum(arr){
//     let number = [];
//     for(let n of arr){
//         if(n%2 ===0){
//             number.push(n)
//         }
//     }
//     return number;
// }
// console.log(findEvenNum([1,2,3,4,5,6]))
// problem 8
function capitalizeWord(str){
    const words = str.split('')
    let result = []
    for (let w of words){
        const capitalWord = w[0].toUpperCase()+w.slice(1)
        result.push(capitalWord)
    }
    return result.join('')

}
console.log(capitalizeWord('hello world'))