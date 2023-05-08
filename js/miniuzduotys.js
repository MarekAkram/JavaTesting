 console.clear();
/*1 Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
*/
const amzius = 39;
console.log(amzius);

const metai = 1984;
console.log(metai);

const diena = 30;
console.log(diena);

/*Susumuoti visus skaičiaus tipo kintamuosius
*/

const suma = amzius + metai +diena
console.log(suma)

/*2*/
const spalva = 'geltona';
console.log(spalva)
const spalva1 = 'zalia';
console.log(spalva1)
const  spalva2 = 'raudona';
console.log(spalva2)

/*Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
*/

const text = spalva + ' ' + spalva1 + ' ' + spalva2;
console.log(text);

/*Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas*/
const text1 =  spalva2 + ', ' + spalva1 + ', ' + spalva;
console.log(text1);



/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
*/
const v = [1, 2, 3, 4, 5];
console.log(v);
const d = [5, 8, 4, 9, 3];
console.log(d);
const t = [4, 8, 5, 1, 7];
console.log(t);

console.log('v','d','t');

/*Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5*/
const tipai = v - d + t
console.log(tipai)




console.log('-----');
/*Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”*/

const a = 5;
const b = 7;
const c = 2;

if (a > b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
if (a < b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (a === b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (a !== b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (a <= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (a >= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}



