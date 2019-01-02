const bubbleSort = (arr = [3,5,64,66,44,2,4,5,56,2,4,9,8]) => {
    let isSwapped = false
    do {
        isSwapped = false
        for (let j=0; j < arr.length; j+=1) {
            if (arr[j]>arr[j+1]) {
                isSwapped = true
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            } 
        }
    } while(isSwapped)
    return arr
}
console.log(bubbleSort())