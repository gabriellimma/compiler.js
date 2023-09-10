const LETTERS = /[a-z]/i;
const WHITESPACE = /\s/;
const NUMBERS = /\d/;

module.exports = function tokenizer(input) {
  const tokens = [];
  let current = 0;

  // iteração sob todos os caracteres do input
  while(current < input.length) {
    let char = input[current];
    // condiçõe de aceite
    if(char === '(' || char === ')') {
      tokens.push({
        type: 'paren',
        value: char
      });
      current++
      continue;
    }
    if(LETTERS.test(char)) {
      let value = '';
      while(LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({
        type: 'name',
        value
      });
      continue;
    }
    if(WHITESPACE.test(char)) {
      current++;
      continue;
    }
    if(NUMBERS.test(char)) {
      let value = '';
      while(NUMBERS.test(char)) {
        value += char;
        char = char[++current];
      }
      tokens.push({
        type: 'number',
        value
      });
      continue;
    }
    // se nenhuma condição for atendida:
    throw new TypeError(`Caractere desconhecido: '${char}'`);
  }

  return tokens;
}