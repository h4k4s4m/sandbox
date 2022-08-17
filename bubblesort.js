function sort(unsortedArray){
    const N = unsortedArray.length;
    let swapped = false;
    for (let x = 0; x < N-1; x++){
        swapped = false;
        for (let y = 0; y < N-1-x; y++){
            if (unsortedArray[y]>unsortedArray[y+1]){
                let temp = unsortedArray[y];
                unsortedArray[y] = unsortedArray[y+1];
                unsortedArray[y+1] = temp;
		swapped = true;
            }
        }

	if(!swapped){
            break;
        }
    }
    return unsortedArray;
}

let unsorted = [1,7,4,3,5,6,4,2];
let sorted = sort(unsorted);

console.log(sorted); 
