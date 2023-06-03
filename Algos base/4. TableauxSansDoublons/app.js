function tableauxSansDoublons(...arrays) {
    let arrTemp=[];
    let arr=[];
    arrays.forEach( elt => {
        elt.forEach(item => arrTemp.push(item));
    });

    arrTemp.forEach(elt => {
        if(arr.indexOf(elt) == -1){
            arr.push(elt);
        }
    });

    return arr;
    
}


console.log(tableauxSansDoublons([5,5,4], [6,3,5])); // [5, 4, 6, 3]
console.log(tableauxSansDoublons(["a","b","z"],["z","e","a"])); // ["a", "b", "z", "e"]


// -----------------  Énoncé ------------------- //

// Créez un algorithme qui assemble tous les tableaux que l'on passe en argument, sans avoir de doublons(si il y a deux fois(ou plus) la même valeur, supprimez la).


// -----------------  Conseils ------------------- //

// Array.from(arguments)
// filter()
// forEach()
// push()
// indexOf







