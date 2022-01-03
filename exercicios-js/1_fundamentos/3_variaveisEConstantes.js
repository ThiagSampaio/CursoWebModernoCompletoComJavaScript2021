/* O mundo da programação pode ser divido de maneira bem simplista em duas vertentes:
 * PROCESSAMENTO E DADOS.
 * Dados são processados e geram mais dados.
 * Então podemos separar em Algoritmos(processamento) e Dados.
 * DADOS são separados em estruturas de dados , essas estruturas ditam as regras de um 
 * certo conjunto de dados. Estruturas de dados não são os dados em si, mas ditam regras: inteiro,  
 * float. 
 * 
 * No algoritmo temos conjuntos de sentenças de código e essas sentenças de código inevitávelmente 
 * trabalham com  dados , seja na sua manipulação ou armazenamento. 
 * 
 * Nesta aula vamos aprender sobre variáveis e constantes. 
 */


//variáveis -> crie variáveis utilizando let
// Sempre estar atento aos nomes dados as variaveis e constantes (muito importante)
var a = 3 //Atribuição
let b = 4

var a = 30
b = 40

/* Quando eu trabalho com VAR posso redeclarar a variavel no mesmo escopo,
 * o que não ocorre na utilização do let 
 */
console.log(a, b)

a = 300
b = 400

console.log(a, b)

// Constantes
const c = 5
// c = 500 por se tratar de uma constante não mudar seu valor
console.log(c)
/* Obs
 * Quanto mais constantes presentes no programa, melhor para sua manutenção.
 */

