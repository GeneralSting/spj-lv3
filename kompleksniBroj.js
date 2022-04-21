function KompleksniBroj(realni_dio, imaginarni_dio)
{
    this.imaginarni = imaginarni_dio;
    this.realni = realni_dio;
    function ispisiKompleksniBroj()
    {
        console.log(this.realni + " " + this.imaginarni);
    }
}

var oKompleksniBroj = new KompleksniBroj(2, 3);
var oKompleksniBroj_2 = new KompleksniBroj(-3,-4);
var oKompleksniBroj_3 = new KompleksniBroj(0,12);
var oKompleksniBroj_4 = new KompleksniBroj(5.4,1.7);
var oKompleksniBroj_5 = new KompleksniBroj(0,0);  

var rezultat_realni_dio = 0;
var rezultat_imaginarni_dio = 0;


var _kb = {
    ispisiKompleksniBroj: function(oKompleksniBroj)
    {
        if(oKompleksniBroj.realni == "" && oKompleksniBroj.imaginarni == "")
        {
            console.log("z = 0");
        }
        else
        {
            console.log("z = " + oKompleksniBroj.realni + " + " + oKompleksniBroj.imaginarni+"i");
        }
    },
    zbroji: function(oKB_1, oKB_2)
    {
        var zbroj_realni = oKB_1.realni + oKB_2.realni;
        rezultat_realni_dio = zbroj_realni;
        var zbroj_imaginarni = oKB_1.imaginarni + oKB_2.imaginarni;
        rezultat_imaginarni_dio = zbroj_imaginarni;
        if(zbroj_imaginarni == 0)
        {
            console.log("z = " + zbroj_realni);
            return "z = " + zbroj_realni

        }
        else if(zbroj_realni == 0)
        {
            if(zbroj_imaginarni == 1)
            {
                console.log("z = " + "i");
                return "z = " + "i"
            }
            else
            {
                console.log("z = "+ zbroj_imaginarni + "i");
                return "z = "+ zbroj_imaginarni + "i"
            }
        }
        else
        {
            if(zbroj_imaginarni == 1)
            {
                console.log("z = " + zbroj_realni + " + " + "i");
                return "z = " + zbroj_realni + " + " + "i"
            }
            else
            {
                console.log("z = " + zbroj_realni + " + " + zbroj_imaginarni + "i");
                return "z = "+ zbroj_realni + " + " + zbroj_imaginarni + "i";
            }
        }
    },
    pomnozi: function(oKB_1, oKB_2)
    {
        var realni_dio_1 = oKB_1.realni*oKB_2.realni;
        var realni_dio_2 = -(oKB_1.imaginarni*oKB_2.imaginarni);
        var imaginarni_dio_1 = oKB_1.realni * oKB_2.imaginarni;
        var imaginarni_dio_2 = oKB_1.imaginarni * oKB_2.realni;
        var realni_dio = realni_dio_1 + realni_dio_2;
        var imaginarni_dio = imaginarni_dio_1 + imaginarni_dio_2;
        realni_dio = (Math.round(realni_dio * 100) / 100).toFixed(1);
        imaginarni_dio = (Math.round(imaginarni_dio* 100) / 100).toFixed(1);
        rezultat_imaginarni_dio = imaginarni_dio;
        rezultat_realni_dio = realni_dio;
        if(imaginarni_dio == 0)
        {
            console.log("z = " + realni_dio);
            return "z = " + realni_dio

        }
        else if(realni_dio == 0)
        {
            if(imaginarni_dio == 1)
            {
                console.log("z = " + "i");
                return "z = " + "i"
            }
            else
            {
                console.log("z = "+ imaginarni_dio + "i");
                return "z = "+ imaginarni_dio + "i"
            }
        }
        else
        {
            if(imaginarni_dio == 1)
            {
                console.log("z = " + realni_dio + " + " + "i");
                return "z = " + realni_dio + " + " + "i"
            }
            else
            {
                console.log("z = " + realni_dio + " + " + imaginarni_dio + "i");
                return "z = " + realni_dio + " + " + imaginarni_dio + "i";
            }
        }
    }
}

//_kb.ispisiKompleksniBroj(oKompleksniBroj_4);
//_kb.pomnozi(oKompleksniBroj, oKompleksniBroj_2);

var dogadaj = document.getElementById('odabir_operacije');
dogadaj.addEventListener('mouseup',  function() 
{   
    var rez = document.getElementById('rezultat');
    var oPrviBroj = new KompleksniBroj(parseFloat(document.getElementById('prvi_broj_realni').value), parseFloat(document.getElementById('prvi_broj_imaginarni').value));
    var oDrugiBroj = new KompleksniBroj(parseFloat(document.getElementById('drugi_broj_realni').value), parseFloat(document.getElementById('drugi_broj_imaginarni').value));
    if(dogadaj.value == 'Zbrajanje')
    {
        rez.value = _kb.zbroji(oPrviBroj, oDrugiBroj);
        document.getElementById('realni_dio').value = rezultat_realni_dio;
        document.getElementById('imaginarni_dio').value = rezultat_imaginarni_dio;
        //document.getElementById('rezultat').value = _kb.zbroji(oPrviBroj, oDrugiBroj);
    }
    if(dogadaj.value == 'Mnozenje')
    {
        rez.value = _kb.pomnozi(oPrviBroj, oDrugiBroj);
        document.getElementById('realni_dio').value = rezultat_realni_dio;
        document.getElementById('imaginarni_dio').value = rezultat_imaginarni_dio;
        //document.getElementById('rezultat').value = _kb.zbroji(oPrviBroj, oDrugiBroj);
    }
    rezultat_imaginarni_dio = 0;
    rezultat_realni_dio = 0;
})


