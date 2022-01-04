// vamos ver um pouco de string

const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // valor na tabela unicode
console.log(escola.indexOf('3')) //  qual índice da palavra 

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace('3', 'e'))

console.log('Ana,Maria,Pedro'.split(',')) 