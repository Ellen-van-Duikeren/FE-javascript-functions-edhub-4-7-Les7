/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Goedemorgen"
function morningGreeter() {
  return "Goedemorgen";
}

const greeting = morningGreeter();

console.log(greeting);

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"
console.log("\nOpdracht 1")
function getSchool() {
  return "Novi Hogeschool";
}
console.log(getSchool());


/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"
console.log("\nOpdracht 2")
function compliment() {
  return "Lekker bezig met die functies, Ellen."
}
console.log(compliment());

/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]
console.log("\nOpdracht 3")
function getGrades() {
  return [8, 8.5, 6, 7]
}
console.log(getGrades());

/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }
console.log("\nOpdracht 4")
const getDetails = () => {
  return {
    firstName: "Ellen",
    lastName: "van Duikeren"
  }
}
console.log(getDetails());