/*

p: weather of string, chance of float
r: return boolean if conditions pass or fail
ep:
    if statement conditions

*/

function takeUmbrella(weather, chance){
    if(weather === 'cloudy' && chance > .20){
        return true
    }
    if(weather === 'rainy' && chance > .20 || weather === 'rainy'){
        return true
    }
    if(weather === 'sunny' && chance > .5){return true}
    return false
}