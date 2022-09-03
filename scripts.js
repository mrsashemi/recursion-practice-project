//Write a function that can iteratively calculate fibonacci
function iterateFib(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        (i === 0 || i === 1) ? arr.push(i) :  arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

//Write a function that recursively calculates fibonacci
function recursiveFib(arr, num, i) {
    (i < 2) ? arr[i] = i : arr[i] = arr[i-1] + arr[i-2];
    return (arr.length === num) ? arr : recursiveFib(arr, num, i+1)
}

// program to display fibonacci sequence using recursion
function fibonacci(num) {
    return (num < 2) ? num : fibonacci(num-1) + fibonacci(num - 2);
}

//recursive mergesort
function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = Math.floor(array.length / 2);

    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }