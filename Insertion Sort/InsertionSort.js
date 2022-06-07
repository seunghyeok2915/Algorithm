function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let prev = i - 1;
        while ((prev >= 0) && (array[prev] > temp)) {
            array[prev + 1] = array[prev];
            prev--;
        }
        array[prev + 1] = temp;
    }
    return array;
}

console.log(insertionSort([6, 4, 8, 2, 1]));
//Output : [1, 2, 4, 6, 8]