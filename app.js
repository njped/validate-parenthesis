const submit = document.addEventListener('keyup', checkSubmit);

function checkSubmit(e) {
    // captilize enter to make it work
    if (e.key === 'Enter' || e.key === 'Return') {
        checkValidation();
        let showMessage = checkValidation();
        document.querySelector('span').textContent = showMessage;
    }
}

function checkValidation() {
    let input = document.getElementById('textInput').value;

    const arrayOfSymbols = [];
    let arrayLen = arrayOfSymbols.length;


    for (let i = 0; i < input.length; i++) {
        if(input[i] === '(' || input[i] === '{' ||input[i] === '[') {
            arrayOfSymbols.push(input[i]);
        }

        else if (input[i] === ')' && arrayLen !== 0 && arrayOfSymbols[arrayLen - 1] === '(')
        {
            arrayOfSymbols.pop()
        }

        else if (input[i] === '}' && arrayLen !== 0 && arrayOfSymbols[arrayLen - 1] === '{')
        {
            arrayOfSymbols.pop()
        }

        else if (input[i] === ']' && arrayLen !== 0 && arrayOfSymbols[arrayLen - 1] === '[') {
            arrayOfSymbols.pop()
        }

        else
        return showMessage = false
        
    }
    return arrayLen === 0;
}






// var isValid = function (s) {
//     // Stack to store left symbols
//     const leftSymbols = [];
//     // Loop for each character of the string
//     for (let i = 0; i < s.length; i++) {
//         // If left symbol is encountered
//         if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
//             leftSymbols.push(s[i]);
//         }
//         // If right symbol is encountered
//         else if (s[i] === ')' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '(') {
//             leftSymbols.pop();
//         } else if (s[i] === '}' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '{') {
//             leftSymbols.pop();
//         } else if (s[i] === ']' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '[') {
//             leftSymbols.pop();
//         }
//         // If none of the valid symbols is encountered
//         else {
//             return false;
//         }
//     }
//     return leftSymbols.length === 0;
// };

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("([)]"));
// console.log(isValid("{[]}"));