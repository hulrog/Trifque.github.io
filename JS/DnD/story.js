const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame(){
   state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id ===
        textNodeIndex)
        textElement.innerText = textNode.text
        while(optionButtonsElement.firstChild){
           optionButtonsElement.removeChild(optionButtonsElement.firstChild) 
        }

   textNode.options.forEach(option =>{
       if (showOption(option)){
const button = document.createElement('button')
button.innerText = option.text
button.classList.add('btn')
button.addEventListener('click', () => selectOption(option))
optionButtonsElement.appendChild(button)
}
   })    
}

function showOption(option){
    return option.requiredState== null || option.requiredState(state)
}

function selectOption(option){
const nextTextNodeId = option.nextText
if(nextTextNodeId <=0){
    return startGame()
}
state = Object.assign(state, option.setState)
showTextNode(nextTextNodeId)
}

const textNodes =[
    {
        id: 1,
        text: 'Šetaš se gustom šumom i nailaziš na veliko drvo jabuke',
        options:[
            {
                text:'Uberi par jabuka',
                setState: {jabuke:true},
                nextText: 2
            },
            {
                text: 'Nastavi dalje niz put',
                nextText:2
            }
        ]
    
    },
    {
        id :2,
        text:'Nastavljaš dalje gde u jednom trenutku čuješ poziv upomoć van puta desno od sebe',
        options:[
            {
                text:'Sići sa puta i istražiti šta se dešava',
                nextText: 3
            },
            {
                text: 'Ignorisati i nastaviti da pratiš put',
                nextText: 4
            }
        ]

    },

{
    id: 3,
    text: 'Nakon nekog vremena nailaziš na staricu kojoj su se prevrnula kolica i konji su joj pojeli jabuke. Žena jauče:"Deca nemadu šta da mi jedu sada"',
    options:[
        {
        text:'Ponuditi gospodji novac za hranu i podići kolica',
        nextText:5
        },
        {
            text:'Ponuditi jabuke i podići kolica',
            requiredState: (currentState) => currentState.jabuke,
            setState:{jabuke: false},
            nextText: 5
            
        },
        {
            text:'Samo podići kolica',
            nextText:8
        },
        {
            text:'Nasmejati se i reći:"Žao mi je baba" i nastaviti dalje.',
            nextText:7
        }
    ]
},{
        id:5,
        text:'"Hvala ti sinko" , i baka ti da jedan interesantan mač u znak zahvalnosti i nastavi dalje svojim putem.',
        options:[
        {text:'Prihvatiti mač',
            setState:{mac:true},
            nextText:8
        },
        {
            text:'Odbiti mac',
            nextText:8
        }
        ]
},
{
    id:8,
    text:'Primetio si da je baka povredjana.'
    ,options:[
        {text:'Ponuditi da ispratis baku',
        setState:{baka:true},
        nextText:10
    },
    {
        text:'Pozdraviti se sa bakom i nastaviti svojim putem'
        ,
        nextText:10
    }

    ]
},
{
    id:7,
    text:'Baka krene da te proklinje mracom magijom i nastavi svojim putem.',
    options:[
        {
            text:'Nastavis svojim putem zbunjeno.'
            ,nextText:11
        },{
            text:'Nastavis svojim putem zadovoljno.'
            ,nextText:11
        },
        {
            text:'Nastavis svojim putem uplaseno.'
            ,nextText:11
        },
        {
            text:'Nastavis svojim putem.'
            ,nextText:11
        },  
    ]
},
{
    id:10,
    text:'Nakon nekog vremena iskoci besan trol na putu.',
    options:[
        {
            text:'Ubiti ga sa macem',
            requiredState: (currentState) => currentState.mac,
            nextText:19
        },
        {
            text:'Ponuditi mu jabuke',
            requiredState: (currentState) => currentState.jabuke,
            nextText:12
        },
        {
            text:'Ponuditi mu baku',
            requiredState: (currentState) => currentState.baka,
            setState:{baka:false},
            nextText:13
        },
        {
            text:'Krenes da bezis',
            nextText:14
        }
    ]
},
{
    id:11,
    text:'Posle nekog vremena ti iskoci trol na sred puta',
    options:[
        {
            text:'Ponuditi mu jabuke',
            requiredState: (currentState) => currentState.jabuke,
            setState:{jabuke:false},
            nextText:12
        },
        {
            text:'Prihvatiti smrt',
            nextText:17
        }
    ]
},
{
    id:12,
    text:'Trol se zahvali i dopusti dalji prolaz',
    options:[
        {
            text:'Pozdravis se i nastavis putem',
            nextText:15
        }
    ]
},
{
    id:13,
    text:'Trol se zahvali i dopusti dalji prolaz.',
    options:[
        {
            text:'Nastaviti dalje sa krivicom.',
            nextText:15
        },
        {
            text:'Nastaviti dalje srecan sto si ziv',
            nextText:15
        }
    ]
},
{
    id:14,
    text:'Trol se posle nekog vremena umori i prestane da juri.',
    options:[
        {
            text:'Nastaviti sa bakom.',
            requiredState: (currentState) => currentState.baka,
            nextText:15
        },
        {
            text:'Reci babi da je losa sreca i nastaviti sam',
            requiredState: (currentState) => currentState.baka,
            setState:{baka:false},
            nextText:15
        },
        {
            text:'Nastavis sam prema gradu',
            setState:{baka:false},
            nextText:15
        }
    ]
},
{
    id:15,
    text:'Posle dugog puta stizes u grad. Umoran od puta odlazis u svoju kucu i pozdravljas se sa decom i zenom. I nakon vecere legnes da spavas govoreci sebi "Vise nikada necu krociti u tu sumu"',
    options:[
        {
            text:'Zaspis',
            nextText:17
        }
    ]
},
{
    id:17,
    text:'Kraj puta.',
    options:[
        {
            text:'Ponovo?',
            nextText:-1
        }
    ]   
},
{
    id:4,
    text:'Divis se lepom danu i setas ka svojoj kuci',
    options:[
        {
            text:'Misliti u sebi kako si mozda dopustio da neko nastrada',
            nextText:15
        },
        {
            text:'Praviti se da nisi nista cuo i uzivati u lepom danu',
            nextText:18
        }
    ]}
    ,
    {
        id:18,
        text:'Posle dugog puta stizes u grad. Umoran od puta odlazis u svoju kucu i pozdravljas se sa decom i zenom. I nakon vecere legnes da spavas govoreci sebi "Bas mi je lepo bilo danas, mozda svratim opet nekad"',
        options:[
            {
                text:'Ponovo?',
                nextText:-1
            }
        ]
    },
    {
        id:19,
        text:'"Kako si hrabar" kaze ti baka i zahvaliti se jos jednom sto si je spasio.',
        options:[
            {
                text:'To je posao junaka bako.',
                nextText:15
            },
            {
                text:'Vas mac je dosta pomogao',
                nextText:15
            }
        ]
    }
]

function start(){
    let nesto=document.getElementById("igra");
    nesto.style.display="flex"; 

    let nazad=document.getElementById("KRAJ");
    nazad.style.display="none";
}



startGame();