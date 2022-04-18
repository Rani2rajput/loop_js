var i=1
while (i<=20){
    if (i%3==0){
        console.log(i,"nav")
    }else if (i%5==0){
        console.log(i,"gurukul")
    }else if (i%3==0 && i%5==0){
        console.log(i,"navgurukul")

    }else{
        console.log(i,"no other")
    }
    i=i+1


}