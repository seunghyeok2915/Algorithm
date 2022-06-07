function selectionSort(array) {
    let indexMin, temp;
    for (let i = 0; i < array.length - 1; i++) {
        indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
        }
        temp = array[indexMin];
        array[indexMin] = array[i];
        array[i] = temp;
    }
    return array;
}

console.log(selectionSort([6, 4, 8, 2, 1]));
//Output : [1, 2, 4, 6, 8]