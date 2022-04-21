function Printer(_nivo_tonera, _dvostrano_ispisivanje, name)
{
    if(_nivo_tonera <= 100 && _nivo_tonera >= 0)
    {
        this.nivoTonera = _nivo_tonera;
    }
    else
    {
        console.log(name + ": nivo tonera mora biti u rangu 0-100");
        this.nivoTonera = "Nepoznat";
    }
    this.dvostranoIspisivanje = _dvostrano_ispisivanje;
    this.ukupanBrojStranica = 0;
}
var PrinterInfo =
{
    getUkupanBrojStranica: function(Printer)
    {
        return "Ukupan broj isprintanih stranica: " + parseInt(Printer.ukupanBrojStranica);
    },
    getNivoTonera: function(Printer)
    {
        if(Printer.nivoTonera == "Nepoznat")
        {
            return  "Nivo tonera je nepoznat";
        }
        else
        {
            return "Nivo tonera: " + parseInt(Printer.nivoTonera);
        }
    }
}

Object.prototype.dodajBoju = function(nivo_tonera)
{
    var dodanoBoje = 0;
    parseInt(nivo_tonera);
    console.log("Stanje tonera prije dodavanje boje: " + nivo_tonera);
    switch(true)
    {
        case (nivo_tonera < 100 && nivo_tonera >= 0):
            {
                dodanoBoje = 100-nivo_tonera;
                nivo_tonera +=dodanoBoje;
                console.log("Dodano je: " + dodanoBoje);
                return this.nivoTonera += dodanoBoje;
            }
            break;
        case(nivo_tonera == 100):
            {
                console.log("Toner boje je pun, nismo dodali boju");
            }
            break;
        default:
            {
                console.log("Nemoguće dodati boju zbog nepoznatih parametara!")
            }
            break;
    }
    console.log("Stanje tonera nakon dodavanje boje: " + nivo_tonera);
    return nivo_tonera;
}
Object.prototype.Printaj = function(broj_stranica)
{
    if(this.nivoTonera == "Nepoznat")
    {
        console.log("Nemoguce je printati stranice zbog nepoznate kolicine tonera")
    }
    else
    {
        console.log("Zeljeni broj stranica za isprintati: " + broj_stranica);
        var isprintani_broj_stranica = 0;
        if(this.dvostranoIspisivanje == true)
        {
            console.log("Obostrno printanje");
            for(var brojac = 0; brojac < broj_stranica; brojac++)
            {
                if((this.nivoTonera - .1) >= 0)
                {
                    isprintani_broj_stranica += 1;
                    this.nivoTonera = (this.nivoTonera -= .1).toFixed(2);
                }
                else
                {
                    console.log("Ponestalo je boje u toneru, isprintani broj stranica je: " +isprintani_broj_stranica);
                    isprintani_broj_stranica = Math.round(isprintani_broj_stranica/2);
                    this.ukupanBrojStranica += isprintani_broj_stranica;
                    this.nivoTonera = parseInt(this.nivoTonera);
                    break;
                }
            }
            if(broj_stranica == isprintani_broj_stranica)
            {
                console.log("isprintane su sve stranice, broj stranica: " + isprintani_broj_stranica);
                this.ukupanBrojStranica += isprintani_broj_stranica;
            }
            this.nivoTonera = parseInt(this.nivoTonera);
            return isprintani_broj_stranica;
        }
        else
        {
            for(var brojac = 0; brojac < broj_stranica; brojac++)
            {
                if((this.nivoTonera - .1) >= 0)
                {
                    isprintani_broj_stranica += 1;
                    this.nivoTonera = (this.nivoTonera -= .1).toFixed(2);
                }
                else
                {
                    console.log("Ponestalo je boje u toneru, isprintani broj stranica je: " +isprintani_broj_stranica);
                    this.ukupanBrojStranica += isprintani_broj_stranica;
                    this.nivoTonera = parseInt(this.nivoTonera);
                    break;
                }
            }
            if(broj_stranica == isprintani_broj_stranica)
            {
                console.log("isprintane su sve stranice, broj stranica: " + isprintani_broj_stranica);
                this.ukupanBrojStranica += isprintani_broj_stranica;
            }
            this.nivoTonera = parseInt(this.nivoTonera);
            return isprintani_broj_stranica;
        }
    }
}



var Samsung_M283x = new Printer(20, false, "Samsung_M283x");
var Epson_Sx105 = new Printer(62, true, "Epson_Sx105");
var Cannon_Pixma = new Printer(100, false, "Cannon_Pixma");
var HP_Smart_tank_500 = new Printer(500, true, "HP_Smart_tank_500");

console.log(PrinterInfo.getNivoTonera(HP_Smart_tank_500));

Samsung_M283x.dodajBoju(Samsung_M283x.nivoTonera);
console.log(PrinterInfo.getNivoTonera(Samsung_M283x));


Epson_Sx105.Printaj(621);
console.log(PrinterInfo.getNivoTonera(Epson_Sx105));
console.log(PrinterInfo.getUkupanBrojStranica(Epson_Sx105));

