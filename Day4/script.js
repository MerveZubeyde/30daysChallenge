/* DAY4 : CHALLENGE
anagrams
Write a function, anagrams, that takes in two strings as arguments. 
The function should return a boolean indicating whether or not the strings are anagrams.
 Anagrams are strings that contain the same characters, but in any order. */

 function anagrams(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(anagrams('listen', 'silent'));
console.log(anagrams('sayy', 'yes'));
console.log(anagrams('Dormitory', 'Dirty room'));