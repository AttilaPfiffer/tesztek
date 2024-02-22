import { parose } from "./fuggveny.js";

console.log(parose(5))

/* tesztelési esetek */

/* 1. teszteset szám = 0 */
console.log(`1. teszteset: szam = 0  || várteredmény: true`)
console.log(`1. teszteset: szam = 0  || kapott eredmény: ${parose(0)}`)
console.log(`1. teszteset: szam = 0  || vart: true || kapott eredmény: ${parose(0)} || ${true == parose(0) ? "Jó" : "Hibás"}`)
/* 2. teszteset szám = 4 */ // equivalencia osztály, azon értékek halmaza, amelyek azonosteszteseteket eredeményez, mivel az várhatóan a függvény ugyan azokat fogja kiadni.
console.log(`2. teszteset: szam = 4  || vart: true || kapott eredmény: ${parose(4)} || ${true == parose(0) ? "Jó" : "Hibás"}`)
/* 3. teszteset szám = 5 */
console.log(`3. teszteset: szam = 5  || vart: true || kapott eredmény: ${parose(5)} || ${false == parose(0) ? "Jó" : "Hibás"}`)
/* 4. teszteset szám = -4 */
console.log(`4. teszteset: szam = -4  || vart: true || kapott eredmény: ${parose(-4)} || ${true == parose(0) ? "Jó" : "Hibás"}`)
/* 5. teszteset szám = -5 */
console.log(`5. teszteset: szam = -5  || vart: true || kapott eredmény: ${parose(-5)} || ${false == parose(0) ? "Jó" : "Hibás"}`)
/* 6. teszteset szám = 2.5, pi, 1/3 */
console.log(`6. teszteset: szam = 2.5  || vart: nem egész szám || kapott eredmény: ${parose(2.5)} || ${"nem egész szám" == parose(0) ? "Jó" : "Hibás"}`)
/* 7. teszteset szám = 40000000000000000 */
console.log(`7. teszteset: szam = 400000000000  || vart: true || kapott eredmény: ${parose(400000000000)} || ${false == parose(0) ? "Jó" : "Hibás"}`)
console.log(`8. teszteset: szam = 400000000001  || vart: false || kapott eredmény: ${parose(400000000000)} || ${false == parose(0) ? "Jó" : "Hibás"}`)
/* 8. teszteset szám = -40000000000000000 */
/* 9. teszteset szám = "valami" */
console.log(`9. teszteset: szam = "valami"  || vart: "ez nem szám" || kapott eredmény: ${parose("valami")} || ${false == parose(0) ? "Jó" : "Hibás"}`)
/* 10. teszteset szám = "7" */
console.log(`10. teszteset: szam = "7"  || vart: false || kapott eredmény: ${parose("7")} || ${false == parose(0) ? "Jó" : "Hibás"}`)


