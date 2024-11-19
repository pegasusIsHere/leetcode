function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }

    let reverse = 0;
    let xcopy = x;

    while (x > 0) {
        reverse = (reverse * 10) + (x % 10);
        console.log(x,reverse * 10,x % 10)
        x = Math.floor(x / 10);
        console.log("new x:",x)
    }

    return reverse === xcopy;    
};

console.log("result",isPalindrome(4324))

function myPalindrome(x: number): boolean {
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
