class Validator{
    stringValid(inputString, isRequire, isCANstartFromSpace, isOnlyLetters, 
                isOnlyNumbersAndLetters, isISBNformat){
        let Error = '';
        
        if(isRequire){
            if(inputString.length === 0){
                Error = 'Require';
                return Error;
            }
        }
        if(!isRequire){
            if(inputString.length === 0){
                return Error;
            }
        }
        if(!isCANstartFromSpace){
            if(inputString[0] === ' '){
                Error = 'Space at the beginning is not allowed';
                return Error;
            }
        }
        if(isOnlyLetters){
            if(!(/^[a-zA-Z\s]*$/.test(inputString))){
                Error = 'Must be only valid letters';
                return Error;
            }
        }
        if(isOnlyNumbersAndLetters){
            if(!(/^[A-Za-z0-9\s]*$/.test(inputString))){
                Error = 'Must be only letters and numbers';
                return Error;
            }
        }

        if(isISBNformat){
            const matches_arr = [...inputString.matchAll(/[0-9]/g)];
            //only numbers, '-' and 13 or 10 in length. First check length then by redex content
            if((matches_arr.length !== 10) && (matches_arr.length !== 13)){
                Error = 'Invalid length';
            }else if(!(/^[0-9-]*$/.test(inputString))){
                Error = 'Invalid ISBN format';
            }
            return Error;
        }

        return Error;
    }
}

export default new Validator()