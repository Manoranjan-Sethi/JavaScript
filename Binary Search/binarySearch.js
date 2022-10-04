let arr = [1,2,3,4,5];
let k = 4;

function binarySearch(arr,k){
    let low = 0;
    let high = arr.length-1;

    while(low<=high){
    let mid = Math.floor(low+(high-low)/2);

        if(arr[mid]==k){
            return mid;
        }else if(arr[mid]<k){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    // return
}

console.log(binarySearch(arr,k))