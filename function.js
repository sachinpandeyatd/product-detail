function fact(n){

    f=1;
    for(let i=1;i<=n;i++){
        f=f*i;
    }

var x="inside function";
console.log(x)

    return f;
}
const factv2=(n) =>{
    ans2=factv2(10);
}
ans=fact(7);
console.log(ans);