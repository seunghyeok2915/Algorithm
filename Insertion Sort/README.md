# Insertion Sort 삽입 정렬
손으로 카드를 정렬하는 방법과 유사함

Selection Sort 와 유사하지만, 조금 더 효율적임.

각 숫자를 적절한 위치에 삽입하는 알고리즘

## 시간복잡도
최선의 경우 O(n) (미리 정렬되어 있는 경우)
평균, 최악 시간복잡도가 O(n^2)

## 공간복잡도
다른 공간이 필요하지 않으므로 O(n)

## 장점
단순하다.
원소정렬 상태에 따라 효율적일 수 있다.                                                                 
다른 메모리 공간이 필요하지 않다.
안정 정렬이다.
다른 O(n^2) 알고리즘에 비해 빠르다.

## 단점
평균과 최악의 시간 복잡도가 O(n^2) 으로 비효율적
배열의 길이가 길어질수록 비효율적

## Code
```js
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
```
