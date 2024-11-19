function longestCommonPrefix(strs: string[]): string {
    let t = []

    for(let i = 0;i<strs.length;i++){
        for(let j=0;j<strs[i].length;j++)
        {
            if( strs[i+1])
            if(strs[i][j]==strs[i+1][j]){
                console.log(strs[i][j],strs[i+1][j])
                if(t.indexOf(strs[i][j]) == -1)
                    t.push(strs[i][j])
            }
        }
    }
    console.log(t)
    return t.join("");
};

console.log(longestCommonPrefix(["taro","tadd","tamo"]))    