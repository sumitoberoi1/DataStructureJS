const insertionSort = (arr = [358,618,953,105,390,195,60,431,381,543,73,929]) => {
    for (let i=1; i<arr.length; i+=1) {
       for (let j=0; j < i; j+=1) {
            if (arr[i] < arr[j]) {
                let element = arr.splice(i,1)
                arr.splice(j,0,element[0])
            } 
       }
    }
    return arr
}
console.log(insertionSort())