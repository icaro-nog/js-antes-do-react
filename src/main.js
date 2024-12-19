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
const array = [1, 2, 3, 4, 5];

// for(const i of array){
//   document.body.innerText += i;
// }

// const novoArray = [];

// array.forEach(item => {
//   novoArray.push(item * 2);
// })

const novoArray = array.map(item => {
  return item * 2
})

document.body.innerText = JSON.stringify(novoArray);