console.log(topla(3,2));//sıralamanın bir önemi yok
function topla(a,b){
    return a+b;
}

//console.log(cikart(12,3)) burda çalışmaz. Sıralama çnemlidir çünkü yeni bir nesne oluşturuyoruz ve işlem  yaptırıyoruz. Hata verir
var cikart=function(a,b){
    return a-b;
}// değişkenlere fonksiyon atayabiliriz
console.log(cikart(12,3))

var myajax=function(reqObject){
    //ilgili url le iligili data ile sorgu atıp sonucu alır.
    let basarilimi=true;
    setTimeout(()=>{
    if(basarilimi){
         reqObject.success({
            sonuc:"sonuc"
        });
    }else{
        reqObject.error();
    }

    },100);
}
myajax({
    url:"/",
    data:"",
    method:"Post",
    success:function(d){
        console.log(d);
    },
    error:function(){
        console.log("hata");
    }
});// calback denir burada ki işleme
/*
$.ajax({
url:"",
data:"",
method:"",
success:function(d){
}
});*/

function islem(a,b,c,d){
    console.log(a);//gelen değer boş ise undefined hatası verir
    console.log("selam");
}
islem();//parametre yollamadanda çağırabiliriz, içdeki yapı hata vermiyorsa değer yollayıp yollamaman önemli değil

function islems2(){
   //Arguments diye bir şey var parametre almasa bile gelen değer varsa dönebilirsin
   //illa ki karşılığı olmak zorunda değil 
    console.log("selam");
}
islems2(2,4,5,3);

class Insan{
    constructor(TC,Ad,Soyad)
    {
        this.TC=TC;
        this.Ad=Ad;
        this.Soyad=Soyad;
        this.Uc=function(){
            return this.Ad+" Uctum";
        }
    }
    Kos(){
        return this.Ad+" Kostum";
    }
}
var Insan1=new Insan("1321564","Ahmet","Soylu");
console.log(Insan1.Uc());
console.log(Insan1.Kos());
console.log(Insan1);
//console.log(Insan.prototype.Kos);//Kos un Tipini gösteriyor



///////////////////////////
class customer{
    constructor(type){
        this.type=type;
        this.IndirimHesapla=function(fiyat){
            return fiyat;
        }
    }
}
const customer1=new customer(1);
console.log(customer1.IndirimHesapla(2000));

//extend c#'daki : anlamına gelir
class GoldCustomer extends customer{
constructor(){
    //extend kullanırken super kullanman lazım
    // ana nesnenin constructor ın da değer istiyor(type) o yüzden değer yolladık 2 yazarak
    super(2);
    // Bir methodu ezdik c# daki virtual
    this.IndirimHesapla=function(fiyat){
return fiyat-200;
    }
}
}
const goldcustomer=new GoldCustomer();
console.log(goldcustomer.IndirimHesapla(3000));