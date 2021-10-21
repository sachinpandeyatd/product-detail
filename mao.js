nums=[1,2,3,4,5,6];
movies=['PK','DON2','DON3', 'SHERHAH' ,'ACDCD'];


new_nums=nums.map( (p)=>{return p*p} );

new_nums=movies.map(m=> m);
console.log(new_nums);
console.log(new_nums);

fitered_nums = nums.filter( (n) =>{return n%2==0} );
console.log(fitered_nums);

s = "a";
 filtered_movies=movies.filter( (mov) => {return s.toLowerCase()==mov.toLowerCase() });

 filtered_movies2 =movies.filter((mov)=>{return mov.toLowerCase().includes(s.toLowerCase())});

 console.log(filtered_movies2);



 