const mergeSort = (arr = [358,618,953,105,390,195,60,431,381,543,73,929]) => {
    if (arr.length === 1) {
        return arr[0]
    }
    let left = arr.splice(0,Math.ceil(arr.length/2))
    let right = arr
    console.log(` Left ${left} isArray ${Array.isArray(left)}`)
    console.log(` Right ${right}`)
    return merge(mergeSort([left]),mergeSort([right])) 
}
const merge = (arr1,arr2) => {
    let mergedArray = []
    let i = 0 
    let j = 0
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            mergedArray.push(arr2[j])
            j+=1
        } else {
            mergedArray.push(arr1[i])
            i+=1
        }
    }
    
    return [...mergedArray,...arr1.splice(i,arr1.length),...arr2.splice(j,arr2.length)]
}
console.log(mergeSort())
