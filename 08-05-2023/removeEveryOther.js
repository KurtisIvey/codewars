function removeEveryOther(arr){
    return arr.map((item, index) => {
        if(index %2 === 0){
            return item
        }
        // must attach filter as index %2 != 0 is returned undefined
    }).filter((item) => item !== undefined)
}