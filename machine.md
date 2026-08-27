```js
ALGORITHME Distributeur_Cafe


VARIABLES
    prix_cafe est un FLOAT
    argent_insere est un FLOAT
    rendu_monnaie est un FLOAT
    monnaie est un BOOLEAN //l'argent disponible dans la machine
    eau est un FLOAT
    capt_gobelet est un BOOLEAN
    compteur_gobelet INT
    etat_machine est un BOOLEAN

    choix_utilisateur est un STRING
    prix_choix_utilisateur est un DECIMAL

    TABLEAU : 
    [
        STRING : boisson
        BOOLEAN : disponibilité
        DECIMAL : prix
        TABLEAU:  [
        //tableau des ingrédients

                  ]: ingredients 
    ]: tab_boissons

 
DEBUT

    //Vérification des stocks
    TRY
        FONCTION : verifier_les_stocks_boisson(ref tab_boissons)
        FONCTION : choisir_boisson(ref choix_utilisateur, ref prix_choix_utilisateur)
    CATCH (Error)
        NOTIFIER Error.message
        AFFICHER 'Erreur : Machine hors service'
        EXIT

FIN




### Annexe fonctions

DEBUT

VARS:
    TABLEAU
    [
        STR : nom
        ENTIER : quantité
    ] : tab_stocks



FONCTION verifierLesStocksBoisson(ref tab_boissons)
DEBUT
    POUR CHAQUE ligne DANS tab_stocks
        SI ligne [quantité] <= quantité * 10/100 //change me later
            THROW Error ("Error vérification des stocks : ligne" + ligne [nom]) 
        SINON  tab_boissons



FONCTION choix_utilisateur(ref choix_utilisateur, ref prix_choix_utilisateur)
    AFFICHER 'Veuillez choisir boisson'
    LIRE choix_utilisateur



FIN


```