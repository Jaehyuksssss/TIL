function solution(my_string) {
  // let a = [my_string]
  // let b = [...a.join().split('').map((v)=>parseInt(v))]
  // console.log(b)
  // for(let i = 0; i<b.length; i++){
  return my_string
    .split('')
    .filter((v) => !/[a-z]/i.test(v))
    .map((v) => parseInt(v))
    .sort((a, b) => a - b)
}
