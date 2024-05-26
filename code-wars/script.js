//get the sum of 2  arrays output =
// expected '1,2,34,5,6' to equal 21
// ([1, 2, 3], [4, 5, 6]), 21
arr1=[1,5,3,8,3,2]
arr2=[8,8,3,4,0,4]

function arrayPlusArray(arr1,arr2) {
let newArray = arr1 + arr2 
let arr3 =[]
for(let i =0 ; i < newArray.length ;++i){
 sum = newArray.push("arr3")
}

return sum.reduce((a,b)=> a+b )

}
  console.log(arrayPlusArray(arr1,arr2))

//   arr1.reduce((a,b)=> a+b )