export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    doSort(array,animations);
    // console.log(animations);
    return animations;
};

function doSort(array,animations){
    let l=0 ;
    let h=array.length;
    quickSort(array,l,h,animations);
}

function quickSort(array,l,h,animations){
    if(l<h){
        let j=partition(array,l,h,animations)
        quickSort(array,l,j,animations)
        quickSort(array,j+1,h,animations)
    }
}

function partition(array,l,h,animations){
    let pivot = array[l];
    let i=l;
    let j=h;
    while(i<j){
        do{
            // animations.push([l,i]);
            // animations.push([l,i]);
            // animations.push([l,pivot]);
            // animations.push([i,array[i]]);
            i++;
        }while(array[i]<pivot);
        do{
            j--;
            // animations.push([l,j]);
            // animations.push([l,j]);
            // animations.push([l,pivot]);
            // animations.push([j,array[j]]);
        }while(array[j]>pivot);
        if(i<j){
            swap(array,i,j,animations);
        }
    }
    swap(array,l,j,animations);
    return(j);
}

function swap(array,i,j,animations){
    let temp;
    animations.push([i,j]);
    animations.push([i,j]);
    animations.push([i,array[j]]);
    animations.push([j,array[i]]);
    temp=array[i]
    array[i]=array[j]
    array[j]=temp
}