/* 19. Reversing Words in a String */
function reverseWords(str) {
    // chain method
    return str.split(" ").reverse().join(" ");
}
console.log(reverseWords("I am here"));
/* ==== 19. Reversing Words in a String (END) ==== */


console.log("#".repeat(20));


/* 20. Keep Hydrated */
function hydrated(hours) {
    return Math.floor(hours / 2);
}
console.log(hydrated(12.5));
/* ==== 20. Keep Hydrated (END) ==== */


console.log("#".repeat(20));


/*  21. Convert a Number to a String */
function numToStr(num) {
    return String(num);
}
console.log(numToStr(2));

// Another Soluiton
function numToStr2(num) {
    return num + "";
}
console.log(numToStr2(5));
/* ==== 21. Convert a Number to a String (END) ==== */


console.log("#".repeat(20));


/*  22. Calculate Average */
function avg(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
console.log(avg([1, 2, 3, 4, 5]));
/* ==== 22. Calculate Average (END) ==== */