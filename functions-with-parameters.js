/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
  return a + b;
}

const result = add(1, 4);
console.log(result);

/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"
console.log("\nOpdracht 1")
function greeter(name) {
  return "Hoi, " + name + "!";
}
console.log(greeter("Ellen"));


/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380
console.log("\nOpdracht 2")
const minutesToSeconds = (minutes) => {return minutes * 60};
console.log(minutesToSeconds(1));
console.log(minutesToSeconds(3));
console.log(minutesToSeconds(23));


/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"
console.log("\nOpdracht 3")
function merge (string1, string2) {
  return string1 + string2;
}
console.log(merge("abra", "cadabra"));
console.log(merge("zoet", "sappig"));


/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."
console.log("\nOpdracht 4")
function calculateDogYears(dogAge) {
  return dogAge * 7;
}
console.log("Jouw hond is " + calculateDogYears(6) + " jaar oud in mensenjaren.");
console.log("Jouw hond is " + calculateDogYears(2) + " jaar oud in mensenjaren.");


/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"
console.log("\nOpdracht 5")
const wrapper =  (word, character) => character + word + character;
console.log(wrapper("bril", "*"));
console.log(wrapper("beep", "_"));
console.log(wrapper("kaas", "Q"));


/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."
console.log("\nBonusopdracht")
function createDetailString({firstName, lastName, profession}) {
  return "Het beroep van " + firstName + " " + lastName + " is " + profession +"."
}
console.log(createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}));
console.log(createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}));
