/* realisation d'une carte aléatoire Muses et orcales 
inspiration de la carte 
https://digitalpainting.school/forum/topic/3218-%F0%9F%92%A1-muses-oracles/
*/
var tabmots = ['chef', 'Maison', 'Tortue', 'Fleur', 'Arbre', 'Coquille', 'Vehicule', 'Bateau', 'Tente', 'Déchets',
'Béquilles', 'Environnement', 'Chateau', 'Animal', 'Pont', 'Dieu', 'Pnj', 'Amour', 'Amant', 'Arbre', 'Pont',
 'Cheval', 'Artefact', ' Magie', 'Chien', 'Loup', 'Mechant', 'Haine', 'Domestique', 'Jardin', 'Chateau', 'déduction',
'arrogant', 'adhésif', 'miel', 'gonfler', 'coiffeur',  'premier', 'diabolatry', 'crasher', 'tambour', 'spot', 'alcoolique',
 ' barnburner', 'réservoir', 'éthique', 'avancement', 'pervers', 'danseur', 'oreille', 'arrière', 'saut', 'cabane', 'poulain',
'zéro', 'croire', 'la biologie', 'absorbant', 'cirque', 'évoquer', 'crucifiant', 'vacances', 'sous', 'sol',  'coyotes',
 'spot', 'création', 'impur', 'ailette', 'divin', 'aplatir', 'mission', 'battre', 'mortel', 'agressif', 'dormir', 'babiller',
'accessoires', 'amulette', 'négligent', 'journal', 'intime', 'charmant', 'ciguë', 'blond', 'coton', 'phonétique', 'lustre', 'réfugié',
'banane', 'hybride', 'hickory', 'chef','clan', 'fournisseur', 'illimité', 'saleté', 'bastion', 'agression', 'mode', 'choléra',
'dérive', 'confiance', 'cerceau', 'délicat', 'frapper', 'élastique', 'faux', 'baby-sitter', 'marie', 'troupeau', 'impur', 'captivité',
'treed', 'mal',  'décodeur', 'fiasco', 'navré',  'humain', 'extensif', 'dynamitage', 'nationale', 'appel', 'arrêt', 'porc', 'cola',
  'dense', 'robot', 'solitude', 'courbe', 'récipient', 'peu', 'département', 'rage', 'barnburner', 'biens', 'décapitation', 'corruption',
  'point', 'récent', 'trouver', 'risqué', 'épouvantable', 'danseur', 'drone', 'érotique', 'foudroyé', 'diagonale', 'patrimoine', 'biberonner', 
  'premier-né', 'binoculaire', 'élargir', 'incroyable', 'volume', 'cas', 'citron', 'vert', 'éliminer', 'nervure', 'la chair', 'caoutchouc', 
  'tornade', 'altercation', 'avoir', 'pour', 'but', 'moitié', 'colère', 'confus', 'primate', 'sang', 'cirque', 'pays','pâle', 'capsule', 'fatal', 
  'industriel', 'chirurgien', 'car', 'exactitude', 'lune', 'pictural', 'flèche', 'tactique', 'horrible', 'journal', 'intime', 'mal', 'tête', 
  'cruauté', 'douzaine', 'moustache', 'bénir', 'sabot', 'conte', 'fée', 'champion', 'faible', 'risqué', 'martyr', 'frilosité', 'agent',
  'avocat', 'têtu', 'prostituée', 'poisson', 'rouge', 'apparent', 'horreurs', 'sans', 'avenir', 'vol', 'corne', 'virtuel', 'double', 'détonateur',
   'géométrique', 'ennemis', 'animal', 'croire', "Un sac", "Une cage", "Un pantalon", "Une boîte en métal", "Une boîte en carton", "Une plume",
               "Une clé", "Un ruban", "Une potion", "Une pancarte", "Un parchemin", "Un sérum", "Une livre ancien", "Un jeux de l'oie",
               "Un disque métal", "Un collant", "Un faux nez", "Un jeux de cartes", "Une carte routière", "Une carte des montagnes",
               "Une boussole", "Une casserole", "Un mât", "Un parfum", "Une vieille bobine de fil", "Un pot de teinture", "Un calendrier",
               "Une radio", "Une bougie rouge", "Un cierge", "poudre", "Un livre de magicien", "Une jonquille", "Un cadre", "Un miroir",
               "De la soie", "Un pan de velours", "Une comète écrasée sur terre", "Un calice", "Un luth", "Un tableau", "Un éventail", "Une plume",
               "Une corbeille à papier", "Un journal", "Une minaudière", "Une hâche", "Du talc", "Un os", "Un peigne", "Une baguette magique",
               "Une icône", "Une balance", "Une théière", "Un drapeau", "Une boîte de nougat", "Une poudre", "Une montre", "Un discours", "Une cheminée",
               "Un nuage", "Un foulard", "Des bottines à paillettes", "Une objet de cristal"]

var tabomen = ['Non et', 'Non mais', 'Non', 'Oui', 'Oui mais','Oui et']

var tabverbe = ['Courir', 'Terminer', 'Traversser','Semer', 'enraciner','Payer', 'Penser', 'reflechir', 'Soigner',
 'Gagner', 'Ignorer', 'Manger', 'Grimper', 'Travailler', 'Seduire', 'Parier', 'Reculer', 'Prier', 'Chercher', 'Commander',
'S\'opposer', 'Prendre', 'Communiquer', 'Protéger', 'Déplacement', 'Assister', 'Blesser', 'Transformer', 'Créer', 'Tromper', 'Réveler',
'devenir', 'poser', 'réussir', 'avoir', 'jouer', 'essayer', 'répondre', 'servir', 'suivre', 'reconnaître',
'retrouver', 'tirer', 'tirer', 'accepter', 'agir', 'appartenir', 'exister', 'appeler', 'travailler', 'produire', 'passer', 'laisser', 'partir', 
 'occuper', 'voir', 'défendre', 'Compter', 'Venir']

var tabqualite = ['*', '* *', '* * *', '* * * *', '* * * * *']

var tablieux = ['Foret', 'Bois', 'Chateau', 'Chemin', 'Riviere', 'Champs', 'Maison', 'Batiment', 'Chapelle',
"Un entrepôt désaffecté", "Un lac", "Un lac féerique","Une montagne magique","Une montagne perdue", "Des tours en pierre", "Une maison à moitié démoli", "Une ferme", "Une rue pavée sinueuse", "Un lavoir", "Une forêt de pins", 
"Une forêt de chêne", "Un désert", "Un atelier", "Une prison", "Une loge", "Une grande route perdue", "Un sous-sol", "Un grenier", "Une chambre de princesse", "Une niche", "Une place fleurie", "Un cul-de-sac", "Une prairie de fleurs", "sauvages", "Un placard à balai", "Un living room bourgeois", "Une scène de théâtre/opéra/etc", "Un théâtre caché", "Une auberge", "Un château du moyen âge", "Un temple", "Une salle d'attente", "Un lit", "Une écurie", "Un cimetière", 
"Un endroit abandonné", "Sous un pont", "Sous la terre", "Sous l'eau", "Un port", "A droite", "A gauche", "Au dessus", "Droit devant", "Une volière", "Une serre", "Un élevage", "Un balcon", "Au fond d'un jardin", 
"Une cabane dans un arbre", "Une bibliothèque millénaire", "Un parc", "Un couloir", "Derrière une porte", "Une boutique d'antiquaire", "Un centre astronomique"]

var tabmetier = ['Charpentier', 'Ferronnier', 'Guide', 'Troubadour', 'Marchand', 'Transporteur', 'Sorceleur',
'Magicien', 'Barde', 'Apothicaire', 'Architecte', 'Armurier', 'Aubergiste', 'Tanneur', 'Barbier', 'Bibliothécaire',
 'Bijoutier', 'Boucher', 'Boulanger', 'Bourrelier/Sellier', 'Boursier/Gantier', 'Brasseur', 'Cartographe', 'Chandelier',
  'Charbonnier', 'Charpentier', 'Charpentier', 'Cordier', 'Cordonnier', 'Coursier/Messager', 'Coutelier', 'Crieur',
  'Forgeron', 'Fourreur', 'Joueur professionnel', 'Maçon', 'Menuisier', 'Papetier', 'Pêcheur', 'Peintre', 'Poissonnier',
'Porteur d eau', 'Potier', 'Ramoneur', 'Relieur', 'Rémouleur', 'Scribe', 'Serrurier', 'Souffleur de verre', 'Tailleur de pierre',
'Tapissier', 'Tanneur', 'Tavernier', 'Terrassier', 'Tisserand', 'Tonnelier', 'Tonnelier', 'Usurier/Prêteur sur gages', 'Veilleur de nuit']

var tabobjet = ['Table', 'Chaise', 'Chandelier', 'Arbre', 'Epée', 'Bijoux', 'Pierre', 'Cailloux', 'Balot de paille', 'Fer a cheval', 
'Feux de camp', 'Cofre', 'Tombe', 'Monument', 'Cadran']

var tabsentiment = ['Triste', 'Heureux', 'Joyeux', 'Mélancolique', 'Inquiet', 'Amoureux', 'Béliqueux', 'Confiant', 'Timide', 'Deception']

var tabmeteo = ['nuageux', 'Vent', 'Vent glacé', 'neigeux', 'Tempete de neige', 'Avalanche', 'Ciel Bleu', 'Orage', 'Tempete', 
                'Ciel couvert', 'Tempete de poussiere', 'pluie légère', 'ensoleillé', 'Pluie violente', 'Grele', 'Grelons']

var tabdisposition = ['Pas rassuré', 'Confiant', 'Aucune Confiance', 'Attend de voir', 'A l ecoute', 'Rassuré']

var tabapparence = ['Begaie', 'Boite', 'Parle fort', 'Trés maigre', 'Cadavérique', 'Gros', 'Mince', 'Zozote', 'Vieux', 'Jeune', 
'Visage buriné', 'Borgne', 'Ivre', 'Bucolique']

var tabmotivation = ['Mener un Criminel devant la justice', 'Se venger', 'Gagner de l\'or', 'Trouver le trésor', 'Monter en compétence', 
'Obtenir Justice', 'Eliminer une menace', 'Découvrir la vérité', 'Récupérer quelque chose de précieux', 'Escorter ou livrer en toute sécurité', 'Restaurer quelque chose de cassé',
'Sauver un allié en péril']

var tabtrait = ['Chafouin', 'Psychopathe', 'Oisif', 'Orgeuilleux', 'Ambitieux', 'Jaloux', 'Leader', 'Mystique', 'Hors la loi', 'Specialiste', 'Seigneur',
               'Arstiste']

var tabsecret = ['Alcoolique','A une Queue', 'Cleptoman', 'A des cornes', 'Telekinesie', 'Tatouages','chasseur de prime', 'Controle les animaux',
                'Guerisseur']

var tabrelation = ['Connaissance', 'Inconnu', 'Compagnon d\'arme', 'Ennemie', 'Amoureux', 'Detestable', 'Ami', 'Ennemi', 'Parent', 'Cousin']

var tabadjectif = ['Batant', 'Astral', 'Délicieux', 'Long', 'Gouteux', 'Glissant', 'Salissant', 'Petit', 'Répugnant', 'Large', 'Spécialisé', 'Ancien',
'Inattendu', 'Nouveau', 'Exotique', 'Banal', 'Digne', 'Simple', 'Unique', 'Complexe', 'âgé', 'beau', 'bel', 'bon', 'bonne', 'confiant', 'courageux', 
'égoiste', 'énergique', 'énorme', 'faible', 'fin', 'fort', 'fou', 'gigantesque', 'grand', 'gros', 'idéaliste', 'intelligent', 'inventif', 'jeune', 
'mince', 'nouveau', 'optimiste', 'original', 'passionné', 'pessimiste', 'petit', 'peureux', 'prétentieux', 'sérieux', 'sincère', 'sportif', 'sportive', 'stupide', 'vieux']

var tabmath = ['+', '-', '=', '<', '>', '>=', '<=', '*', '/']
var tabnumbercent = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]


// ✅ Change (replace) the content with HTML
//span.innerHTML = `<span style="background-color: coral">Replacement HTML</span>`;

// ✅ Append / Prepend text to the span
//span.insertAdjacentText('beforeend', ' appended text');



function premier()
{
    document.getElementById('btnTest').onclick = function() { second(); }; 
}
 
function second()
{
    motcle()
    motcle1()
    motcle2()
    motcle3()
    motcle4()
    motcle5()
    motcle6()
    motcle7()
    motcle8()
    motcle9()
    omen()
    qualite()
    verbe()
    lieux()
    metier()
    objet()
    sentiment()
    meteo()
    disposition()
    apparence()
    motivation()
    trait()
    secret()
    relation()
    adjectif()
    math()
   numbercent()
    image()
}

function motcle() {
const span = document.getElementById('motcle');
var rand = Math.floor(Math.random()*tabmots.length);
var rValue = tabmots[rand];
// ✅ Change (replace) the text of the span
span.textContent = rValue;

}

function motcle1() {
  const span = document.getElementById('motcle1');
  var rand = Math.floor(Math.random()*tabmots.length);
  var rValue = tabmots[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
  
  }
  function motcle2() {
    const span = document.getElementById('motcle2');
    var rand = Math.floor(Math.random()*tabmots.length);
    var rValue = tabmots[rand];
    // ✅ Change (replace) the text of the span
    span.textContent = rValue;
    
    }
    function motcle3() {
      const span = document.getElementById('motcle3');
      var rand = Math.floor(Math.random()*tabmots.length);
      var rValue = tabmots[rand];
      // ✅ Change (replace) the text of the span
      span.textContent = rValue;
      
      }
      function motcle4() {
        const span = document.getElementById('motcle4');
        var rand = Math.floor(Math.random()*tabmots.length);
        var rValue = tabmots[rand];
        // ✅ Change (replace) the text of the span
        span.textContent = rValue;
        
        }
        function motcle5() {
          const span = document.getElementById('motcle5');
          var rand = Math.floor(Math.random()*tabmots.length);
          var rValue = tabmots[rand];
          // ✅ Change (replace) the text of the span
          span.textContent = rValue;
          
          }
          function motcle6() {
            const span = document.getElementById('motcle6');
            var rand = Math.floor(Math.random()*tabmots.length);
            var rValue = tabmots[rand];
            // ✅ Change (replace) the text of the span
            span.textContent = rValue;
            
            }
            function motcle7() {
              const span = document.getElementById('motcle7');
              var rand = Math.floor(Math.random()*tabmots.length);
              var rValue = tabmots[rand];
              // ✅ Change (replace) the text of the span
              span.textContent = rValue;
              
              }
              function motcle8() {
                const span = document.getElementById('motcle8');
                var rand = Math.floor(Math.random()*tabmots.length);
                var rValue = tabmots[rand];
                // ✅ Change (replace) the text of the span
                span.textContent = rValue;
                
                }
                function motcle9() {
                  const span = document.getElementById('motcle9');
                  var rand = Math.floor(Math.random()*tabmots.length);
                  var rValue = tabmots[rand];
                  // ✅ Change (replace) the text of the span
                  span.textContent = rValue;
                  
                  }

                function motcle10(){
                  const span = document.getElementById('motcle10');
                  var rand = Math.floor(Math.random()*tabnumbercent.length);
                  var rValue = tabnumbercent[rand];
                  // ✅ Change (replace) the text of the span
                  span.textContent = rValue;
                  }


function omen() {
  const span = document.getElementById('omen');
  var rand = Math.floor(Math.random()*tabomen.length);
  var rValue = tabomen[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function qualite() {
  const span = document.getElementById('qualite');
  var rand = Math.floor(Math.random()*tabqualite.length);
  var rValue = tabqualite[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function verbe() {
  const span = document.getElementById('verbe');
  var rand = Math.floor(Math.random()*tabverbe.length);
  var rValue = tabverbe[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function lieux() {
  const span = document.getElementById('lieux');
  var rand = Math.floor(Math.random()*tablieux.length);
  var rValue = tablieux[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function metier() {
  const span = document.getElementById('metier');
  var rand = Math.floor(Math.random()*tabmetier.length);
  var rValue = tabmetier[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function objet() {
  const span = document.getElementById('objet');
  var rand = Math.floor(Math.random()*tabobjet.length);
  var rValue = tabobjet[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function sentiment() {
  const span = document.getElementById('sentiment');
  var rand = Math.floor(Math.random()*tabsentiment.length);
  var rValue = tabsentiment[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function meteo() {
  const span = document.getElementById('meteo');
  var rand = Math.floor(Math.random()*tabmeteo.length);
  var rValue = tabmeteo[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function disposition() {
  const span = document.getElementById('disposition');
  var rand = Math.floor(Math.random()*tabdisposition.length);
  var rValue = tabdisposition[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function apparence() {
  const span = document.getElementById('apparence');
  var rand = Math.floor(Math.random()*tabapparence.length);
  var rValue = tabapparence[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function motivation() {
  const span = document.getElementById('motivation');
  var rand = Math.floor(Math.random()*tabmotivation.length);
  var rValue = tabmotivation[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function trait() {
  const span = document.getElementById('trait');
  var rand = Math.floor(Math.random()*tabtrait.length);
  var rValue = tabtrait[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function secret() {
  const span = document.getElementById('secret');
  var rand = Math.floor(Math.random()*tabsecret.length);
  var rValue = tabsecret[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function relation() {
  const span = document.getElementById('relation');
  var rand = Math.floor(Math.random()*tabrelation.length);
  var rValue = tabrelation[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function adjectif() {
  const span = document.getElementById('adjectif');
  var rand = Math.floor(Math.random()*tabadjectif.length);
  var rValue = tabadjectif[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function math() {
  const span = document.getElementById('math');
  var rand = Math.floor(Math.random()*tabmath.length);
  var rValue = tabmath[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;
                    
}

function numbercent() {
  const span = document.getElementById('numbercent');
  var rand = Math.floor(Math.random()*tabnumbercent.length);
  var rValue = tabnumbercent[rand];
  // ✅ Change (replace) the text of the span
  span.textContent = rValue;

}

function image() {
  efface("image")
  var img = document.createElement("img");
  var rand = Math.floor(Math.random()*70);
  img.src = "img/"+rand+".png";

  var div = document.getElementById("image");
  div.appendChild(img);
  //block.setAttribute("style", "text-align:center");
  //block.setAttribute("style", "text-align:center");
                    
}

function efface(image) { document.getElementById(image).innerHTML=""; }
