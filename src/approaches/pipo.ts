
export const myApproach = function getMajorityNumber(arr:number[]):number|false{

  let candidates:{[key:number]:number} = {};
  let check:number = Math.floor(arr.length / 2) + 1;

  for(let i = 0; i < arr.length; i++){

    let current = arr[i];

    // candidates[ current ] = candidates[ current ] ? candidates[ current ]+1 : 0;
    if( !candidates[ current ] ){
        candidates[ current ] = 0;
    }

    candidates[ current ]++;

    if( candidates[ current ] >= check ){
        return current;
}

  }

  return false;
}