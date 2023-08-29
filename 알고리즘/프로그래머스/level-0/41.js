//최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
  const newObject = {}
  let a = []
  array.forEach((x) => {
    newObject[x] = (newObject[x] || 0) + 1
  })

  let newArr = Object.values(newObject)
  let max = Math.max(...newArr)
  // console.log(newArr)
  if (newArr.indexOf(max) !== newArr.lastIndexOf(max)) {
    return -1
  } else {
    return newArr.indexOf(max) + 1
  }
}
