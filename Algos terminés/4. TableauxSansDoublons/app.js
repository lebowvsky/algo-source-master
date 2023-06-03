// function tableauxSansDoublons() {

//   let nvTab = [];

//   const arrDeArgs = Array.from(arguments);
//   // console.log(arrDeArgs);

//   arrDeArgs.forEach(el => {
//     for(i = 0; i < el.length; i++){
//       nvTab.push(el[i]);
//     }
//   })
 
//   console.log(nvTab);
  
//   // filtrer

//   const tableauClean = nvTab.filter((item, index) => nvTab.indexOf(item) === index);

//   return tableauClean;

// }

function tableauxSansDoublons(...arrays) {
console.log(arrays);

let nvTab = [];

arrays.forEach(item => {
  nvTab = [...nvTab, ...item]
})

// console.log(new Set(nvTab));

return Array.from(new Set(nvTab))

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







