export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    doSort(array,animations);
    return animations;
};

function doSort(array,animations){
    let swap;
    for(let i =0;i<array.length-1;i++){
        for(let j =i+1;j<array.length;j++){
            animations.push([i,j]);
            animations.push([i,j]);
            if(array[i]<array[j]){
                animations.push([i,array[i]]);
            }else{
                animations.push([i,array[j]]);
                swap=array[i]
                array[i]=array[j]
                array[j]=swap
            }
        }
    }
}