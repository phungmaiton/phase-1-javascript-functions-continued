// code your solution here
function saturdayFun(activity = 'roller-skate') {
     return `This Saturday, I want to ${activity}!`;
}

function mondayWork(weekdayActivity = 'go to the office') {
    return `This Monday, I will ${weekdayActivity}.`;
}

function wrapAdjective(decoration = '*'){
    return function (descriptor = 'special') {
        return `You are ${decoration}${descriptor}${decoration}!`;
    }
}

