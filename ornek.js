console.log("Merhaba dünya");
for(var index=0;index<10;index++){
//console.log(index);
var a=index;
}
console.log(a);
//let ile lokal değişkenler tanımlayabiliriz.
 for(let index=0;index<10;index++){
     let v=index;
 }
 //console.log(v);//v lokal değişken oldu hata vericek sadece for içide kullanabiliriz

 const sayi=20;
//const ile sabit tanımladık, değeri değiştirilemez 

//dizi tanımlama c# daki list gibi obje alır, tip fark etmez
let arr=[1,2,3,4,"Selam",34];
arr.push("selam2");//diziye eleman ekledik

const dizim=[2,3,4,"Selam"];
//const tpinde dizi tanımlayıp değer ekleyebiliriz ve çıkarabiliriz
dizim.push(23);

//const diziye yeni bir dizi atarsak const hata verir
//dizim=[3,2,56,45];

var insan={
    ID:1,
    Name:"Ahmet",
    TC:"112255451"
};//insan diye obje oluşturduk
console.log(insan);

var insanlar=[
{
    ID:1,
    Name:"Ahmet",
    TC:"112255451"
},
{
    ID:1,
    Name:"Ahmet",
    TC:"112255451"
}

];
console.log(insanlar);
var araba={
    ID:1,
    Marka:"Bmv",
    EkOzelliker:["Ozellik1","Ozellik2"],
    MotorBilgileri:{
        No:"132456464",
        Guc:4343
    }
};//Nesnenin içine tekrar dizi ve nesneler ekleyebiliriz
