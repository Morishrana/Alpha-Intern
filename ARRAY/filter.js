,const arr=[-4,-5,4,2,-3,-9,4,6]
// const a = arr.filter(num=>num>0)
const a = arr.filter(num=>num<0)
// console.log(a)

//even number
let arr1=[24,4,45,6,3,3,6,2,246,66,5,75,74,3,4]
const c=arr1.filter(n=>n%2===0)
// console.log(c)

//array of string
let arr2=[1,"hii",3,"micheal",5,"hey"]
let d=arr2.filter(item=>typeof item==="string")
// console.log(d)

//filter the item who start with a

let arr3=["app" , "jagsfm" , "aaj" , "nvf" , "aajbhi"]
let e=arr3.filter(word=>word.startsWith("a"))
console.log(e)