 console.clear();
/*1 Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
*/
const nr1 = 3;
console.log(nr1);

const nr2 = 198;
console.log(nr2);

const nr3 = 30;
console.log(nr3);

/*Susumuoti visus skaičiaus tipo kintamuosius
*/

const suma = nr1 + nr2 + nr3
console.log(suma)

/*2*/
const pvd = 'masina';
console.log(pvd)
const pvd1 = 'zalias';
console.log(pvd1)
const  pvd2 = 'mersas';
console.log(pvd2)

/*Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
*/

const text = pvd + ' ' + pvd1 + ' ' + pvd2;
console.log(text);

/*Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas*/
const text1 =  pvd2 + ', ' + pvd1+ ', ' + pvd;
console.log(text1);



/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
*/
const k = [1, 2, 3, 4, 5];
console.log(k);
const l = [5, 8, 4, 9, 3];
console.log(l);
const m = [4, 8, 5, 1, 7];
console.log(m);


console.log('k','l','m');

/*Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5*/





console.log('-----');
/*Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”*/

let a = 5;
let b = 7;


if (a > b) {
    console.log('Pomidoras');

} else  {
    console.log('Bandykite dar kartą')
}

if (a < b) {
    console.log('Pomidoras');

} else  {
    console.log('Bandykite dar kartą')
}

if (a === b) {
    console.log('Pomidoras');

} else  {
    console.log('Bandykite dar kartą')
}

if (a !== b) {
    console.log('Pomidoras');

} else  {
    console.log('Bandykite dar kartą')
}

let Text1 = "Tekstas";

let Text2 = "Tekstas1";

console.log(Text1.length);
console.log(Text2.length);

 let text1Length = Text1.length;
 let text2Length = Text2.length;

if (text1Length > text2Length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (text1Length < text2Length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}


if (text1Length === text2Length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}


if (text1Length !== text2Length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}


if (text1Length >= text2Length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if (text1Length <= text2Length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

const orai = ['lietus', 'sauleta', 'giedra', 'puga' ];
const kur = ['kaime', 'mieste', 'vienkiemi' ];
 
const orai1 = orai.length;
const kur1 = kur.length;

console.log(orai1, kur1);

const orai2 = orai[0].length;
const orai3 = orai[1].length;
const orai4 = orai[2].length;
const orai5 = orai[3].length;


console.log(orai2, orai3, orai4, orai5);

if (kur1 > orai1) {
    console.log('pomidoras');
}
else {
    console.log('Bandykite dar kartą');
}

/* Funkcijos */ 

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());


