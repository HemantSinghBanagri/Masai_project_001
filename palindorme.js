// check whether the string is palindrome or not 

function checkPalindrome(N, str) {
    
    let newString='';
    for(let i=N-1;i>=0;i--){
        newString=newString+str[i];
    }
    
    if(str==newString){
        console.log("String is Palindrome");
    }else{
        console.log("Not a Palindrome");
    
    }

}
checkPalindrome(3,"mom");