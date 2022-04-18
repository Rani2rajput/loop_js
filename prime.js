var a=require('readline-sync')
var b=a.questionInt("eneter any of the num::: ")
i=1
count=0
while (i<=a){
    if (a%i==0);{
        count=count+1
    i=i+1
}if (count==2){
    console.log("prime")
}else{
    console.log("not prime")
}
}




