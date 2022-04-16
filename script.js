/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const checked = 'images/checked.png';
const unchecked = 'images/unchecked.png';
var r1, r2, r3;
var risposte = 0;

var titolo;
var paragrafo;
var bottone;


function onClick (event)
{
    const ck = event.currentTarget;
    const choice = ck.dataset.choiceId;
    const question = ck.dataset.questionId;
    console.log(choice);
    console.log(question);

    for(let i of check)
    {
        const ciclochoice = i.dataset.choiceId;
        const cicloquestion = i.dataset.questionId;
        const cicloId = i.dataset.divId;

        if (choice === ciclochoice && question === cicloquestion)
        {
            i.classList.add('selected');
            const image = i.querySelector('.checkbox');
            image.src=checked;
            i.classList.remove('unselected');
            inserisciElemento(ciclochoice, cicloquestion);
        }
        else if (choice !== ciclochoice && question === cicloquestion)
        {
            i.classList.add('unselected');
            i.classList.remove('selected');
            const image = i.querySelector('.checkbox');
            image.src=unchecked;
        }
    }
}

function inserisciElemento(ciclochoice, cicloquestion){
  if(cicloquestion === "one"){
    r1 = ciclochoice;
    risposte++;
    console.log(risposte);
  }
  if(cicloquestion === "two"){
    r2 = ciclochoice;
    risposte++;
    console.log(risposte);
  }
  if(cicloquestion === "three"){
    r3 = ciclochoice;
    risposte++;
    console.log(risposte);
  }
  if(risposte === 3){
    stampaElemento(r1, r2, r3);
    stop();
  }
}

function stampaElemento(r1, r2, r3){
var parola;
  if(r1 !== r2 && r1 !== r3 && r2 !== r3)
  {
      parola = r1;
      blocco(parola);
  }
  if (r1 === r2 && r1 === r3 && r2 === r3)
  {
    parola = r1;
    blocco(parola);
  }
    if ( r1 === r2) {
        parola = r1;
        blocco(parola);
    }
    if ( r2 === r3 ) {
        parola = r2;
        blocco(parola);
    }
    if ( r1 === r3) {
        parola = r1;
        blocco(parola);
    }
}

function blocco(parola) {
    const bloccoGenerale = document.querySelector('.result');
    titolo = document.createElement('h1');
    paragrafo = document.createElement('p');
    bottone = document.createElement('button');
    titolo.textContent = RESULTS_MAP[parola].title;
    paragrafo.textContent = RESULTS_MAP[parola].contents;
    bottone.textContent = 'Ricomincia il quiz';

    bloccoGenerale.appendChild(titolo);
    bloccoGenerale.appendChild(paragrafo);
    bottone.classList.add('botton');
    bloccoGenerale.appendChild(bottone);

    bottone.addEventListener('click', ricomincia);
}

function stop(){
  for(const ck of check){
    ck.removeEventListener('click', onClick);
  }
}

function ricomincia(event) {
    for(const ck of check){ 
        const image = ck.querySelector('.checkbox');
        image.src=unchecked;
        ck.classList.remove('selected');
        ck.classList.remove('unselected');

        titolo.remove();
        paragrafo.remove();
        bottone.remove();
        risposte = 0;
        window.scrollTo(0, 0);
        ck.addEventListener('click', onClick);
    }
}

const check = document.querySelectorAll('section div');
for (const ck of check)
{
    ck.addEventListener('click', onClick);
}
