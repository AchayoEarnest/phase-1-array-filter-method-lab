// Code your solution here
function findMatching(driverName, nameString){
    return driverName.filter(function(string){
        return((string.toLowerCase()) === nameString.toLowerCase())
    })
}

function fuzzyMatch(driverName, letters){
    return driverName.filter(function(pLetter){
        if((pLetter.indexOf(letters)) === 0){
            return true;
        }else if (pLetter.indexOf(letters)>0){
            return false;
        }
    })
}

function matchName(driverArr, string){
    return driverArr.filter(function(element){
        return element.name === string;
    })
}



