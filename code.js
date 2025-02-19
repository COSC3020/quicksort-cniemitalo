function quicksort(array) {
    var low = 0; 
    var high = array.length - 1; 

    //create array to store each side of array to be sorted
    var stack = new Array(high - low + 1); 
    stack.fill(0); 

    var top = -1; 

    stack[++top] = low; 
    stack[++top] = high; 

    while (top >= 0) {
        //find next section of array to sort
        high = stack[top--]; 
        low = stack[top--]; 

        //sort array and return when pivot value lies
        let pivot = sort(array, low, high); 

        //if there is still parts to be sorted, add values to stack
        if (pivot - 1 > low) {
            stack[++top] = low; 
            stack[++top] = pivot - 1; 
        }

        if (pivot + 1 < high) {
            stack[++top] = pivot + 1; 
            stack[++top] = high; 
        }
    }
    return array; 
}

function sort(array, low, high) {
    pivot = low; 
    //check every value against the pivot
    //lower values to the left, high values to the right 
    for (var i = pivot + 1; i < high + 1; i++) {
        if (array[pivot] > array[i]) {
            var tmp = array[i]; 
            index = i; 
            while (index != pivot) {
                array[index] = array[index - 1]; 
                index--; 
            }
            array[pivot] = tmp; 
            pivot++; 
        }
    }
    //return pivot's correct position
    return pivot;
}
