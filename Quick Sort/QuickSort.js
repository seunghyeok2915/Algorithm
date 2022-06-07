function quickSort(array, start, end) {
    if (start >= end) return;

    let key = start;
    let i = start + 1;
    let j = end;
    let temp;

    while (i <= j) {
        while (i <= end && array[i] <= array[key]) {
            i++;
        }
        while (j > start && array[j] >= array[key]) {
            j--;
        }

        if (i > j) {
            temp = array[j];
            array[j] = array[key];
            array[key] = temp;
        } else {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    quickSort(array, start, j - 1);
    quickSort(array, j + 1, end);

    return array;
}

console.log(quickSort([6, 4, 8, 2, 1], 0, 4));
//Output : [1, 2, 4, 6, 8]