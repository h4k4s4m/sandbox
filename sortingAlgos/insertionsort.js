let unsortedArray = [213, 1, 51, 2, 11, 90, 100]


function insertionSort(unsorted){
    for(let x = 1; x < unsorted.length; x++){
        let temp = unsorted[x];
        let y = x-1;
        while(y>=0 && temp<unsorted[y]){
            unsorted[y+1] = unsorted[y];
            y--;
        }
        unsorted[y+1] = temp;
    }

    return unsorted;
}
let sorted = insertionSort(unsortedArray)
console.log(sorted);