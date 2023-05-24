---

---
# 新的数组api

findLast
反向迭代数组，并返回满足提供的测试函数的第一个元素的值, 如果没有找到返回`undefined`

```js
const isEven = number => number % 2 === 0
const numbers = [1, 2, 3, 4]
console.log(numbers.findLast(isEven)) // 4
```
