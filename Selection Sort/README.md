# Selection Sort 선택 정렬
원소를 넣을 위치는 이미 정해져있고 어떤 원소를 넣을지 선택하는 알고리즘
자리를 선택하고 그 자리에 부합하는 값을 찾는다.

## 원리
주어진 배열에서 최소값을 찾는다.
그 값을 맨 앞과 교체한다.
처음 위치를 뺀 나머지 배열을 같은 방법으로 교체한다.

## 시간복잡도
최선, 평균, 최악 모두 시간복잡도가 O(n^2) 으로 동일함.

## 공간복잡도
다른 공간이 필요하지 않으므로 O(n)

## 장점
구현이 간단하고,  직관적임.
Bubble Sort 와 달리 많은 교환이 이루어 지지 않는다.
다른 메모리 공간을 필요로 하지 않는다.

## 단점
굉장히 비효율적인 알고리즘
불안정 정렬

## Code
```js
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
```