$(
    function()
    {
    $("#RegrutujCarstvo").validate
    (
       {
           rules:
           {
               ime:
               {
                   required: true, 
                   nowhitespace: true,
                   lettersonly: true
               },
               prezime:
               {
                   required: true,
                   nowhitespace: true,
                   lettersonly: true
               },
               godine:
               {
                   required: true,
                   nowhitespace: true,
                   digits: true
               },
               visina:
               {
                   required: true,
                   nowhitespace: true,
                   digits: true
               },
               tezina:
               {
                   required: true,
                   nowhitespace: true,
                   digits: true
               },
               iskustvo:
               {
                   required: true
               }

           },
           messages:
           {
                ime:
                {
                    required:'Molimo Vas da unesete Vase ime!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    lettersonly:'Molimo Vas da unesete samo slova bez ikakvih znakova'
                },
                prezime:
                {
                    required:'Molimo vas unesite Vase prezime!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    lettersonly:'Molimo Vas da unesete samo slova bez ikakvih znakova'
                },
                godine:
                {
                    required:'Molimo Vas da unesete Vase godine!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    digits:'Molimo Vas da unesete validan broj (samo broj, a ne i mernu jedinicu)'
                },
                visina:
                {
                    required:'Molimo Vas da unesete Vasu visinu!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    digits:'Molimo Vas da unesete validan broj (samo broj, a ne i mernu jedinicu)'
                },
                tezina:
                {
                    required:'Molimo Vas da unesete Vasu tezinu!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    digits:'Molimo Vas da unesete validan broj (samo broj, a ne i mernu jedinicu)'
                },
                iskustvo:
                {
                    required:'Molimo Vas da odaberete opciju'
                }
           }
       }
    );

    $("#RegrutujPobunjenike").validate
    (
       {
           rules:
           {
               ime:
               {
                   required: true, 
                   nowhitespace: true,
                   lettersonly: true
               },
               prezime:
               {
                   required: true,
                   nowhitespace: true,
                   lettersonly: true
               },
               godine:
               {
                   required: true,
                   nowhitespace: true,
                   digits: true
               },
               visina:
               {
                   required: true,
                   nowhitespace: true,
                   digits: true
               },
               tezina:
               {
                   required: true,
                   nowhitespace: true,
                   digits: true
               },

           },
           messages:
           {
                ime:
                {
                    required:'Molimo Vas da unesete Vase ime!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    lettersonly:'Molimo Vas da unesete samo slova bez ikakvih znakova'
                },
                prezime:
                {
                    required:'Molimo vas unesite Vase prezime!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    lettersonly:'Molimo Vas da unesete samo slova bez ikakvih znakova'
                },
                godine:
                {
                    required:'Molimo Vas da unesete Vase godine!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    digits:'Molimo Vas da unesete validan broj (samo broj, a ne i mernu jedinicu)'
                },
                visina:
                {
                    required:'Molimo Vas da unesete Vasu visinu!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    digits:'Molimo Vas da unesete validan broj (samo broj, a ne i mernu jedinicu)'
                },
                tezina:
                {
                    required:'Molimo Vas da unesete Vasu tezinu!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    digits:'Molimo Vas da unesete validan broj (samo broj, a ne i mernu jedinicu)'
                },
           }
       }
    );

}


);


function pokazicarstvo()
{
    let carstvo = document.getElementById("RegrutujCarstvo");
    carstvo.style.display= "flex";
    let pobunjenici = document.getElementById("RegrutujPobunjenike");
    pobunjenici.style.display= "none";
}

function pokazipobunjenike()
{
    let pobunjenici = document.getElementById("RegrutujPobunjenike");
    pobunjenici.style.display= "flex";
    let carstvo = document.getElementById("RegrutujCarstvo");
    carstvo.style.display= "none";
}

function prikazirasu2()
{
    let rasa = document.getElementById("rasa2");
    rasa.style.display = "flex";
}