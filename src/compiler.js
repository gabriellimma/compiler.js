const tokenizer = require('./tokenizer.js');
const parser = require('./parser.js');

module.exports = function compiler(input) {
  // 1. Análise Lexical
  const tokens = tokenizer(input);
  // 2. Análise Sintática
  //    Transforma os tokens (arrays de objetos) em uma AST Abstract
  //    Syntax Tree (árvore de objetos) que representa nosso programa
  const lispAST = parser(tokens);
  // 3. Transformação
  // 4. 'Geração' de código
  // retorno do código em js
  return lispAST
}