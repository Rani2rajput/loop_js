var a=require('readline-sync')
var b=a.question("enter a number::")
s=" "
i=0
while (i<b.length){
    if (b[i]==="1")
    {
    s=s+" one"
    }
    else if (b[i]==="2")
    {
    s=s+" two"
    }
    else if (b[i]==="3")
    {
    s=s+" three"
    }
    else if (b[i]==="4")
    {
    s=s+" four"
    }
    else if (b[i]==="5"){
    s=s+" five"
    }
    else if (b[i]==="6"){
    s=s+" six"
    }
    else if (b[i]==="7")
    {
    s=s+" seven"
    }
    else if (b[i]==="8"){
    s=s+" eight"
    }
    else if (b[i]==="9"){
    s=s+" nine"
    }
    else if (b[i]==="0"){
    s=s+" zero"
    }
    i=i+1

}
console.log(s)
