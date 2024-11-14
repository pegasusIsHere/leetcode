function isPalindrome(x: number): boolean {
        let s =x.toString()
    let t = true
    for(let i = 0; i<s.length/2;i++){
        console.log(i,s[i], s[s.length-1-i])
        if(s[i] != s[s.length-1-i])
            t = false
    }
    
    return t;
};

console.log("result",isPalindrome(4324))
