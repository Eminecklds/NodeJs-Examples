const arr=[
    {
        ID:1,
        Name:"Ahmet"
    },
    {
        ID:2,
        Name:"Mehmet"
    }
];
arr.push({ID:1,Name:"Veli"});

var more=[
    {
        ID:4,
        Name:"Ayşe"
    },
    {
        ID:5,
        Name:"Elif"
    }
];
//iki diziyi birleştirdik.
var newarr=arr.concat(more);
console.log(newarr);

// bu şekilde iki diizi ve bir elemanı birleştirdik
var newarr2=[...arr,...more,{
    ID:5,
    Name:"Elif"
}];
console.log(newarr2);
