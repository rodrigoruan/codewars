function validSolution(arr){
  for(let i = 0; i < 9; i += 1) {
    const arr1 = [], arr2 = [];
    for(let j = 0; j < 9; j += 1) {
      arr1.push(arr[i][j]);
      arr2.push(arr[j][i]);
    }
    if([...new Set(arr1)].length !== 9 || [...new Set(arr2)].length !== 9) return false;
  }
  
  for(let i = 0; i < 9; i += 3) {
    let arr1 = [];
    for(let j = 0; j < 9; j += 3) {
      arr1.push(arr[i].slice(j, j+3));
      arr1.push(arr[i+1].slice(j, j+3));
      arr1.push(arr[i+2].slice(j, j+3));
      if([...new Set(arr1.reduce((acc, curr) => [...acc, ...curr], []))].length !== 9) {
        return false;
      }
      arr1 = [];
    }
  }
  
  return true;
}