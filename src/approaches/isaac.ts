export const myApproach = function naiveMajorityNumber ( array: any ) {
  let keys: any = {}, max = array.length / 2, maj = false
  
  for (let i = 0;i < array.length; i++) {
    if (array[i] in keys) { keys[array[i]]++}
    else keys[array[i]] = 1
    if (keys[array[i]] > max) maj = array[i]
  }
  return maj
}