export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    doSort(array,animations);
    // console.log(array);
    return animations;
};

function doSort(array,animations){
    let swap;
    for(let i =0;i<array.length-1;i++){
        for(let j =0;j<array.length-i-1;j++){
            // animations.push([i,j]);
            // animations.push([i,j]);
            if(array[j]<array[j+1]){
                // animations.push([j,array[j]]);
                // animations.push([j+1,array[j+1]]);
            }else{
                animations.push([i,j]);
                animations.push([i,j]);
                animations.push([j,array[j+1]]);
                animations.push([j+1,array[j]]);
                swap=array[j]
                array[j]=array[j+1]
                array[j+1]=swap
            }
        }
    }
}