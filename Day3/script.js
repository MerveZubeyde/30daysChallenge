function anagrams(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    const charCount = {};
    for (const char of str1.toLowerCase()) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str2.toLowerCase()) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}


console.log(anagrams('listen', 'silent'));
console.log(anagrams('sayy', 'yes'));
console.log(anagrams('Dormitory', 'Dirty room'));
