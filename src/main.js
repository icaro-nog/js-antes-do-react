// Importações
// import { soma, sub, PI } from "../lib/math";

// console.log(soma(1, 5))
// console.log(sub(1, 5))
// console.log(PI)

// import * as math from "../lib/math"

// console.log(math.soma(1, 3))

import { soma as sum } from "../lib/math";

console.log(sum(1, 2))

// const idade = 0;

// // 0, '', [], false, undefined, null (valores falsy)

// // valida somente null e undefined
// // Nullish Coalesing Operator
// document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informado')

// objetos
// const user = {
//   name: 'Ícaro',
//   nickname: 'teste',
//   idade: 22,
//   address: {
//     street: 'Rua teste',
//     number: 176
//   }
// };

// verificar se existe nome no objeto
// document.body.innerText = ('name' in user)

// retornar chaves do objeto
// document.body.innerText = Object.keys(user)

// retornar valores do objeto
// document.body.innerText = JSON.stringify(Object.values(user))

// retornar entradas do objeto
// document.body.innerText = JSON.stringify(Object.entries(user))

// desestruturação
// const { address, idade: age, nickname = 'Vanessa' } = user

// document.body.innerText = JSON.stringify({address, age, nickname})

// desestruturação em funções
// function mostraIdade({ idade, name }){

//   return idade + ' ' + name

// }

// document.body.innerText = mostraIdade(user)

// rest operator
// const { name, idade, ...rest } = user;
// document.body.innerText = JSON.stringify(rest)

// const array = [1, 2, 3, 4, 5, 6, 7];

// // pular o segundo indice
// const [primeiro, , terceiro, ...restArray] = array;

// document.body.innerText = JSON.stringify({ primeiro, terceiro, restArray })

// short syntax

// const name = 'Ícaro';
// const age = 22;

// const user = {
//   name,
//   age
// }

// document.body.innerText = JSON.stringify(user);

// optional chaining
// const user = {
//   name: 'Ícaro',
//   nickname: 'teste',
//   idade: 22,
//   address: {
//     street: 'Rua teste',
//     number: 176,
//     zip: {
//       code: '92330200',
//       city: 'Canoas'
//     },
//     showFullAddress(){
//       return 'ok';
//     }
//   }
// };

// document.body.innerText = user.address?.zip?.code ?? 'Não informado';

// document.body.innerText = user.address?.showFullAddress?.();

// métodos de array
// const array = [1, 2, 3, 4, 5];

// for(const i of array){
//   document.body.innerText += i;
// }

// const novoArray = [];

// array.forEach(item => {
//   novoArray.push(item * 2);
// })

// const novoArray = array.map(item => {
//   return item * 2
// })

// map, filter, every, some, find, findIndex, reduce

// const novoArray = array
//           .filter(item => item % 2 != 0) // filtrar itens não pares
//           .map(item => item * 10) // multiplicar cada item filtrado por 10

// verifica se todos itens do array satisfaz essa validação
// const todosItensSaoNumeros = array.every(item => typeof item == 'number')

// verificar se apenas um item é diferente de número no array
// const peloMenosUmItemNaoEUmNumero = array.some(item => {
//     return typeof item != 'number';
// })

// retorna o primeiro item que satisfaça essa condição
// const par = array.find(item => item % 2 == 0);

// retorna índice do primeiro item que satisfaça essa condição
// const index = array.findIndex(item => item % 2 == 0);

// const soma = array.reduce((acc, item) => {
//     return acc + item
// })

// document.body.innerText = JSON.stringify(soma);

// template literals
// const name = null;
// const message = `Bem-vindo, ${name ?? 'visitante'}`

// document.body.innerText = message;

// promises
// const somaDoisNumeros = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b);
//         }, 2000)
//     })
// }

// somaDoisNumeros(1, 3)
//     .then(soma => {
//         document.body.innerText = soma
//     })
//     .catch(err => {
//         console.log(err)
//     })

// .then / .catch
// fetch('https://api.github.com/users/icaro-nog')
//     .then(response => {
//         return response.json();
//     })
//     .then(body => {
//         console.log(body)
//     })
//     .catch(err => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log('deu')
//     })

// async function buscaDadosNoGithub() {

//     try{
//         const response = await fetch('https://api.github.com/users/icaro-nog');
//         const body = await response.json();
    
//         return body.bio;
//     } catch(err) {
//         console.log(err)
//     } finally {
//         console.log('acabouuuu')
//     }

// }

// buscaDadosNoGithub().then(bio => {
//     console.log(bio)
// });

