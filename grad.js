function Grad(naziv_grada, broj_stanovnika, lat, long)
{
    this.nazivGrada = naziv_grada;
    this.brojStanovnika = broj_stanovnika;
    this.latitudaGrada = lat;
    this.longitudaGrada = long;
}

Grad.prototype.dajVelicinuGrada = function(grad)
{
    switch(true)
    {
        case (grad.brojStanovnika < 30000):
            console.log("Kategorija 1: grad ima manje od 30000 stanovnika");
        break;

        case (grad.brojStanovnika >= 30000 && grad.brojStanovnika <= 200000):
        console.log("Kategorija 2: grad ima broj stanovnika između 30000 i 200000");
        break;

        default:
            console.log("Kategorija 3: grad ima više od 200000 stanovnika");
        break;
    }
}

function dajUdaljenost(grad_1, grad_2) 
  {
    var R = 6371; // km
    var dLat = toRad(grad_2.latitudaGrada-grad_1.latitudaGrada);
    var dLon = toRad(grad_2.longitudaGrada-grad_1.longitudaGrada);
    var lat1 = toRad(grad_1.latitudaGrada);
    var lat2 = toRad(grad_2.latitudaGrada);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    //alert(d);
    return d;
  }
// Converts numeric degrees to radians
function toRad(Value) 
{
  return Value * Math.PI / 180;
}



var oVirovitica = new Grad("Virovitica", 20000, 45.840, 17.400);
var oSlatina = new Grad("Slatina", 14000, 45.700, 17.710);
var oBjelovar = new Grad ("Bjelovar", 30000, 45.910, 16.840);
var oOsijek = new Grad("Osijek", 100000, 45.562, 18.700);
var oZagreb = new Grad("Zagreb", 800000, 45.812, 15.981);


console.log(dajUdaljenost(oVirovitica, oZagreb));

oSlatina.dajVelicinuGrada(oZagreb);

