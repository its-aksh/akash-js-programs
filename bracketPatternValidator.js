function bracketPatternValidator(input){
    const opening = ['(', '{', '['];
    const closing = [')', '}', ']'];
    let validator_array = [];
    for (let i=0; i<input.length; i++){
        if (!validator_array.length && closing.indexOf(input[i]) > -1){
            return false;
        }
        if (opening.indexOf(input[i]) > -1){
            validator_array.push(input[i]);
        }
        if(closing.indexOf(input[i]) > -1 && validator_array[validator_array.length-1] === opening[closing.indexOf(input[i])]){
            validator_array.pop();
        }
    }
    return !validator_array.length;
}
console.log(bracketPatternValidator("{{{{[][][]}}}}"));
