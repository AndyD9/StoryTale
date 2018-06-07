
// Stockage des données

var data = {
  statement0: [
      {
          index: 0,
          ref: 'statement-0',
          content: 'Dans cette histoire vous incarnez un jeune forgeron prometteur du nom de Muramasa, pour devenir le meilleur forgeron du japon et obtenir la grâce du shogun, vous décidez de lancer un défis à votre maître, Masamune, se défis consiste à créer la meilleur lame possible puis de comparer leurs tranchant et leurs âmes afin de devenir le meilleur forgeron de l’ère Edo. De nombreuse saison sont passées chacun dans son atelier créant le travail de toute une vie',
      },
  ],
  ask0: [
      {
          index: 0,
          ref : 'ask-0',
          content: 'L\'heure est pour vous de confectionner votre lame ! Vous devez faire le choix entre la pureté ou le mal.',
      },
  ],
  answer1: [
      {
          index: 0,
          ref : 'answer-0',
          content: '',
      },
      {
          index: 1,
          ref : 'answer-1',
          content: 'Le bien !',
      },
      {
          index: 2,
          ref : 'answer-2',
          content: 'Le Mal !',
      },
  ],
  statement1: [
      {
          index: 0,
          ref: 'statement1-0',
          content: 'Vous mettez tout votre coeur à l\'oeuvre pour confectionner une lame a double tranchant d\'une longueur de 90cm ! Après 24h de travail acharnée, une lame blanche et dont les reflets semblaient remplis de sérénité. Au toucher, elle était chaude et agréable et s’accordait avec douceur aux mains de son porteur ; pour cette raison, vous décidez de l’appeler « La Lame des Tendres Mains ».',
      },
      {
          index: 1,
          ref: 'statement1-0',
          content: 'Vous mettez tout votre coeur à l\'oeuvre pour confectionner une lame a simple tranchant d\'une longueur de 110cm ! une lame sombre, qui brillait d’un éclat majestueux. Elle était froide et langoureuse comme une multitude d’hivers, c’est pourquoi vous décidez de l’appeler « La Lame des Dix Milles Hivers ».',
      },
  ],
  ask1: [
      {
          index: 0,
          ref : 'ask1-0',
          content: 'Chacun avec son œuvre, maître et disciple se rendirent au bord d’une rivière pour voir laquelle de ces deux armes serait la meilleure. Il s’agissait pour chacun, à tour de rôle, de plonger sa création dans l’onde, tranchant orienté vers l’amont.',
      },
  ],
  answer2: [
       {
          index: 0,
          ref : 'answer2-0',
          content: 'Vous y aller en premier !',
       },
      {
          index: 1,
          ref : 'answer2-1',
          content: 'Vous y aller en premier !',
      },
      {
          index: 2,
          ref : 'answer2-2',
          content: 'Vous laissez votre maître y aller !',
      },
  ],
  statement2: [
      {
          index: 0,
          ref: 'statement2-0',
          content: 'Vous vous engager',
      },
      {
          index: 1,
          ref: 'statement2-1',
          content: 'LePpay s\'engage',
      },
  ],
  ask2: [
      {
          index: 0,
          ref: 'ask2-0',
          content: 'Un duel est annoncé ! Vous avez le choix entre deux potion ...(Attention une des potions possèdent un effet dont vous ignorer la capacitée)',
      },
  ],
  answer3: [
      {
          index: 0,
          ref: 'answer3-0',
          content: 'Prendre la potion du dragon'
      },
      {
          index: 1,
          ref: 'answer3-1',
          content: 'Prendre la potion du Cobra'
      },
  ],
  statement3: [
      {
          index: 0,
          ref: 'statement3-0',
          content: 'Vous avez choisit la potion du dragon, votre lame s\'entourera d\'une halo de feu !'
      },
      {
          index: 1,
          ref: 'statement3-1',
          content: 'Vous avez choisit la potion du cobra, votre lame sera aussi mortel qu\'une morsure de cobra',
      },

  ],
  statement4: [
    {
        index: 0,
        ref: 'statement4-0',
        content: 'Malgré le pouvoir du venin, vous vous êtes affaiblit vous ne tenez plus debout et votre adversaire finit par vous achevée. '
    },
    {
        index: 1,
        ref: 'statement4-1',
        content: 'Le pouvoir des dieux du feu est avec vous êtes au maximum de votre force vous êtes si fort que le Dieu Ariel se bats à votre cotée pour vaincre cotre adversaire !',
    },

],


}
// Déclaration des varaibale
var content = document.querySelector('.boxCont');
var cttClass = 'boxCont ';
var next = document.querySelector('.btnContNext');
var choice1 = document.querySelector('.choose1');
var choice2 = document.querySelector('.choose2');
var apassa = document.querySelector('.storyBox_choices_apassa');
var winnez = document.querySelector('.storyBox_choices_winnez');

// Fonction utile
function init() {
    content.innerHTML = data.statement0[0].content;
    next.style.display = 'flex';
    apassa.style.display = 'none';
    winnez.style.display = 'none';
    choice1.innerHTML = data.answer1[1].content;
    choice2.innerHTML = data.answer1[2].content;
} 
function HideUserRep() {
    choice1.style.display = 'none';
    choice2.style.display = 'none';
    next.style.display = 'flex';
}
function NotHideUserRep() {
    choice1.style.display = 'flex';
    choice2.style.display = 'flex';
    next.style.display = 'none';
}
function apassaUser() {
    next.style.display = 'none';
    apassa.style.display = 'flex';
}
function youAreTheBoss() {
    next.style.display = 'none';
    winnez.style.display = 'flex';
}
// On init les fonctions 
init();
HideUserRep();

// Ecoute des évnèement

next.addEventListener('click', function() {
    // Debut
    if (content.classList.contains(data.statement0[0].ref)) {
        content.innerHTML = data.ask0[0].content;
        content.className = cttClass + data.ask0[0].ref;
        NotHideUserRep();
    }
    // Etape 1
    else if (content.classList.contains(data.statement1[0].ref)) {
        content.innerHTML = data.ask1[0].content;
        content.className = cttClass + data.ask1[0].ref;
        choice1.innerHTML = data.answer2[1].content;
        choice2.innerHTML = data.answer2[2].content;
        NotHideUserRep();
    }
    // Etape 2
    else if (content.classList.contains(data.statement2[0].ref)) {
        content.innerHTML = data.ask2[0].content;
        content.className = cttClass + data.ask2[0].ref;
        choice1.innerHTML = data.answer3[0].content;
        choice2.innerHTML = data.answer3[1].content;
        NotHideUserRep();
    }
    // Etape 2-0
    else if (content.classList.contains(data.statement2[1].ref)) {
        content.innerHTML = data.ask2[0].content;
        content.className = cttClass + data.ask2[0].ref;
        choice1.innerHTML = data.answer3[0].content;
        choice2.innerHTML = data.answer3[1].content;
        NotHideUserRep();
    }
    else if (content.classList.contains(data.statement3[0].ref)) {
        content.innerHTML = data.statement4[1].content;
        content.className = cttClass + data.statement4[1].ref;
        youAreTheBoss();
    }
    else if (content.classList.contains(data.statement3[1].ref)) {
        content.innerHTML = data.statement4[0].content;
        content.className = cttClass + data.statement4[0].ref;
        apassaUser();
    }
    // Etape 3
    else {
        apassaUser();
    }
});
choice1.addEventListener('click', function() {
    if (content.classList.contains(data.ask0[0].ref)) {
        content.innerHTML = data.statement1[0].content;
        content.className = cttClass + data.statement1[0].ref;
        HideUserRep();
    }
    else if (content.classList.contains(data.ask1[0].ref)) {
        content.innerHTML = data.statement2[0].content;
        content.className = cttClass + data.statement2[0].ref;
        HideUserRep();
    }
    else if (content.classList.contains(data.ask2[0].ref)) {
        content.innerHTML = data.statement3[0].content;
        content.className = cttClass + data.statement3[0].ref;
        HideUserRep();
    }
    else {
        content.innerHTML = 'WTF bro';
    }
});
choice2.addEventListener('click', function() {
    if (content.classList.contains(data.ask0[0].ref)) {
        content.innerHTML = data.statement1[1].ref + 
        ' _ ' + data.statement1[1].content;
        content.className = cttClass + data.statement1[1].ref;
        HideUserRep();
    }
    else if (content.classList.contains(data.ask1[0].ref)) {
        content.innerHTML = data.statement2[1].content;
        content.className = cttClass + data.statement2[1].ref;
        HideUserRep();
    }

    else if (content.classList.contains(data.ask2[0].ref)) {
        content.innerHTML = data.statement3[1].content;
        content.className = cttClass + data.statement3[1].ref;
        HideUserRep();
    }
    else {
        content.innerHTML = 'ERROR';
    }
});

