const arr=[
    {
        ID:1,
        Name:"Ahmet",
        yas:20
    },
    {
        ID:2,
        Name:"Mehmet",
        yas:30
    }
];
//map biim verdiğimiz işleme göre dizinin içini değiştirir
//ındex 0 dan başlayıp birer birer artar
var newarr=arr.map(function(data,index){
  return{  ID:data.ID,
    Name:data.Name,
    yas:data.yas+index+1}

});
console.log(newarr);

//where benzer yas 20 den büyük olanları getirir
var newarrfilter=arr.filter(function(data,index){
    return data.yas>20;
  
  });
  console.log(newarrfilter);

