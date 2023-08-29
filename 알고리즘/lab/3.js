function solution(D, T) {
  const Tlist = [
    ['M', 0],
    ['P', 0],
    ['G', 0],
  ]
  const TsplitArr = T.map((v) => v.split('')).reverse()
  for (let i = 0; i < Tlist.length; i++) {
    for (let j = 0; j < D.length; j++) {
      const haveT = TsplitArr[j].filter((v) => v === Tlist[i][0])
      if (!haveT.length && Tlist[i][1] === 0) continue
      else {
        Tlist[i][1] += D[j] * 2 + haveT.length
      }
    }
  }
  return Math.max(...Tlist.flat().filter((v) => /[0-9]/.test(v)))
}
