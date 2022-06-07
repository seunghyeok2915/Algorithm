# Quick Sort 퀵 정렬
하나의 큰 문제를 두 개의 작은 문제로 분할하는 방식
특정한 값을 기준으로 큰 숫자와 작은 숫자를 서로 교환한 뒤에 배열을 반으로 나눈다.

## 시간복잡도
평균 O(nlog₂n)

## 공간복잡도
다른 공간이 필요하지 않으므로 O(n)

## 장점
다른 O(nlog₂n) 알고리즘에 비해 빠르다.

## 단점
불안정 정렬
이미 정렬된 배열에선 느리다.

## Code
```js
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
```