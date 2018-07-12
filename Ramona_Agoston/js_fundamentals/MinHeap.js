var heap=[]
function inMinHeap(heap,val){
    if(heap.length<1){
        console.log("Empty Array")
        heap[1]=val
    }
    else{
        for(var i=1;i<heap.length;i++){
            if(heap[i]<val && heap[i+1]>val){
                var indx=i+1
            }
        }

        for(var j=heap.length;j>indx;j--){
            heap[j]=heap[j-1];
        }
        heap[indx]=val
    }
}
inMinHeap([],13);
console.log(heap);
inMinHeap(heap)
inMinHeap(heap, 7);
heap=[heap,3, 8, 10, 11, 9, 20, 14]
console.log(heap)
