function removeEveryOther(arr){
    return arr.map((item, index) => {
        if(index %2 === 0){
            return item
        }
    }).filter((item) => item !== undefined)
}