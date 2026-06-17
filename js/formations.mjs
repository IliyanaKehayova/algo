/*Vous devez créer un objet littéral nommé  :  nosFormations
qui contient les paires clé valeur suivante : 
sachant que les valeurs seront stockés sous forme numérique :
ABC_I : 24  (ABC Informatique) 
ADRN : 8 (Agent de Dépannage et de Reconditionnement Numérique) ( niv3 CAP)
TIP : 20      (Technicien(ne) Informatique de Proximité) (niv4)
TRI : 7         ( Technicien(ne) Réseaux IP) ( niv4)
TSSR: 22       (Technicien(ne) Supérieur(e) Systèmes et Réseaux)( niv5)
AIS: 6    (Administrateur d’Infrastructures Sécurisées) (niv6)
AEC: 5    (Automaticien(ne) d’Études et Conception) (niv5)
DWWM: 21    (Développeur Web Web Mobile) (niv5)
CDA : 23  (Concepteur Développeur d’Applications) (niv6)
ISI : 4  (Ingénieur spécialité information – option Systèmes d’Information) (niv7)
Vous devez ensuite trier l'objet littéral  "formationsInfo" par formation (clé) en fonction de leur effectifs stagiaires  de manière décroissante. ( De la formation à l'effectif le plus nombreux à l'effectif le moins nombreux ) 
Définition de la méthode Sort() avec paramètres. ( pour info les chiffres sont fictifs mais vraissemblables). 
 */

import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
async function main() {

    const sc = new createInterface({ input, output });

    var nosformations= {};

    nosformations['ABC_I']=24;
      nosformations['ADRN']=8;
       nosformations['TIP']=20;
        nosformations['TRI']=7;
         nosformations['TSSR']=22;
          nosformations['AIS']=6;
           nosformations['AEC']=5;
            nosformations['DWWM']=21;
             nosformations['CDA']=23;
              nosformations['ISI']=4;
              
              
  
    console.log(nosformations);
    console.table(nosformations);
    console.log(afficherchaine(nosformations));


    let sortable = [];
    for (var element in nosformations) {
    sortable.push([element, nosformations[element]]);
                                    }

    sortable.sort(function(a, b) {
    return a[1] - b[1];
                                 });

    console.log(sortable);




    sc.close();
}
/**
 * 
 */
function afficherchaine(objet) {

      let tabaffichage="[";
    for (const key in objet) {
        tabaffichage+= key+ ':' +objet[key]+" ,";   
    }  
    tabaffichage=tabaffichage.substring(0,tabaffichage.length-1);        
    tabaffichage+="]";
    return tabaffichage;
                              }
   /* function compareNumbers(a, b, nosformations){
    return a - b;
                                 }*/

    

await main();