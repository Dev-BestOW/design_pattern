// 반복자 패턴 ?  반복자 가 컨테이너를 순회하고 컨테이너의 요소에 액세스하는 데 사용 되는 디자인 패턴 입니다 .

function reverseArrayIterator(array) {
  let index = array.length - 1;
  return {
    next: () => {
      if(index >= 0) {
        return array[index--]
      }
    },
    done: () => { return index < 0 }
  }
}

const test = reverseArrayIterator([3,2,1]);

console.log(test.next()) // 1
console.log(test.done()) // false
console.log(test.next()) // 2
console.log(test.done()) // false
console.log(test.next()) // 3
console.log(test.done()) // true

function factorial() {
  let count = 1;
  let cur = 1;
  return {
    next:() => {
      [count, cur] = [count + 1, cur * count];
      return { done: false, value: cur };
    }
  }
};