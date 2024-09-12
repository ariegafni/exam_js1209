function Mission1(array1,array2)
{
    for(let i=0;i<array1.length;i++)
        {
            if(array1[i] %2==0){array2.push(array1[i])}                
        }
        return array2

}

function Mission2(myString)
{
    let count =0;
    const array = myString.trim().split(/\s+/);
    for(let i=0;i<array.length;i++)
        {
            if(array[i].length==4){count+=1}
        }
        return count
    

}

function Mission4(array)
{
    for(let i=0;i<array.length;i++)
        {
            if(array[i]<array[i+1]){return 1}
            else if(array[i]>array[i+1]){return 2} 
            else return 0;           
        }
}

function Mission5(keyArray, valueArray) {
    const mergedArray = keyArray.map((key, index) => {
        return { [key]: valueArray[index] };
    });
    return mergedArray;
}


module.exports={
    Mission1,
    Mission2,
    Mission4,
    Mission5
    //without Mission3
}
console.log(Mission1([1,2,3,4,5,6],[]))
console.log("The number of words with 4 letters:" ,Mission2(" word with four letters"));
console.log(Mission4([1,2,3]))
console.log(Mission5([1, 2, 3], ['one', 'too', 'three']));



