let abates: number = Number(prompt("digite o numeros de abates feitos"));
let assistencia: number = Number(prompt("digite o numeros de assistencia"));
let mortes: number = Number (prompt("digite o numeros de morte"));
let resultado: number = 0;

resultado = (abates + assistencia) / mortes;

console.log(`${resultado}`);
