function bubbleSort(array) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length - i; j++) {
            if (array[j - 1] > array[j]) {
                temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([6, 4, 8, 2, 1]));
//Output : [1, 2, 4, 6, 8]