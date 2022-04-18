// var i=1
// sum=0
// while (i<=100){
//     var a=require("readline-sync")
//     var b=a.questionInt("enter any num::")
//     sum=sum+b
//     i=i+1
//     console.log(sum)
// }


var i=1
sum=0
do{
    var a=require("readline-sync")
    var b=a.questionInt("enter any num::")
    sum=sum+b
    console.log(sum)
    i=i+1
    
}while (i<=5)
