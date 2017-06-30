

export const myApproach = function findMajorityOptimized(arr: any){
  var candidate=getCandidate(arr)
  return validateOptimized(arr,candidate) ? candidate : false 
}

function getCandidate(arr2: any){
  var count=0;
  var majority=0;
  
  for(var i=0; i<arr2.length;i++){
    if(count===0){
      majority=arr2[i]
    }
    if(arr2[i]==majority){
      count++
    }else{
      count--
    }
  }
  if(count>0)return majority;
  return -1
}

function validateOptimized(arr3: any,candidate: any){
  var count=0;
  for(var j=0;j<arr3.length;j++){
    if(arr3[j]==candidate) count++
  }
  return count >= Math.floor(arr3.length/2)+1
}


//console.log("===> Result of [1,2,5,9,5,9,5,5,5]", findMajority(input1));
//console.log("===> Result of [3,1,7,1,3,7,3,7,1,7,7]", findMajority(input2));