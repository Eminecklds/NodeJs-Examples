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
const insan1=new Insan("tc","ad","sıyad");
console.log(insan1.Uc());
console.log(insan1.Kos());


var FnKos=insan1.Uc;
//bu durmda Uc function Insan içinden alınıp annesiz kalır
//this de undefined olur
//console.log(FnKos());

//burada insan1 içindeki uc fonksiyonunu aldık ama hala 
//funkos2 içindeki insan1 i işart etsin
var FnKos2=insan1.Uc.bind(Insan1);