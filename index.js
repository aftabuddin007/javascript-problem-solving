// problem 1
function reverseString(str){
    return str.split("").reverse().join("")
}
console.log(reverseString('hello'))
// problem 2
function getCount(str){
    var vowelsCount = 0;
    const vowels = ['a','e','i','o','u']
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            vowelsCount++
        }
    }
    return vowelsCount;

}
console.log(getCount('hELLo WorlD'))