
function bubbleSort(arr : number[]) {
    let n = arr.length
    let swapped ;
    let i, j, temp: number
    // console.log(n)
    // let arr : number[]
    for (i = 0; i < n - 1 ; i++) {
        swapped = false
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]){
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                // console.log(temp)
            } 
        }

        if (swapped == false){
            break;
        }

    }
}

function printArray(arr : number[]){
    let size = arr.length
    let i;
    let array =[]
    for (i = 0; i < size; i++){
        // console.log(arr[i] + " ");
        array.push(arr[i])
        // console.log(array)
    }
    return array
        
}

 export function merge(collection1 : number[], collection2 : number[], collection3 : number[] ){
    let collector : number[]= [];
    collector = collector.concat(collection1, collection2, collection3)
    // console.log(collector)
    bubbleSort(collector)
    let result = printArray(collector)
    return result
}

// let result = merge([23, 67], [1, 3],[11, 6, 8])
// bubbleSort(result);
// console.log(printArray(result))