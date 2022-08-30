let unsortedArray = [213, 1, 51, 2, 11, 90, 100]


function selectionSort(unsorted){
    for(let x = 0; x < unsorted.length - 1; x++){
        let smallest = x;
        for(let y = x; y < unsorted.length; y++){
            if(unsorted[smallest] >= unsorted[y]){
                smallest = y;
            }
        }
        if(smallest != x){
            let temp = unsorted[x];
            unsorted[x] = unsorted[smallest];
            unsorted[smallest] = temp;
        }
    }

    return unsorted;
}
let sorted = selectionSort(unsortedArray)
console.log(sorted);