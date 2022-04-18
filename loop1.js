var a=require('readline-sync')
var b=a.questionInt("enter a number::")
if (b<0){
    console.log("negative",b)
}else{
    console.log("positive",b)
}
