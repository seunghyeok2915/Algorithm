# 거품 정렬 Bubble Sort
서로 인접한 두 원소의 대소를 비교한후, 앞자리가 뒷자리보다 크다면 둘이 교환하는 알고리즘
## 원리
1회전 하면 제일 큰수는 맨뒤로 가게된다.

맨 뒤에서 부터 범위를 좁혀 나가며 계속 회전하면 오름차순 정렬이 된다.

## 시간복잡도
최선, 평균, 최악 모두 시간복잡도가 O(n^2) 으로 동일함.

## 공간복잡도
다른 공간이 필요하지 않으므로 O(n)

## 장점
구현이 간단하고,  직관적임.
다른 메모리 공간을 쓰지 않는다.
안정 정렬이다.

## 단점
굉장히 비효율적인 알고리즘

## Code
```js
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
```