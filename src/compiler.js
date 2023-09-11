const tokenizer = require('./tokenizer.js');
const parser = require('./parser.js');
const transformer = require('./transformer.js');
const generateCode = require('./generateCode');

module.exports = function compiler(input) {
  // 1. Análise Lexical
  const tokens = tokenizer(input);
  // 2. Análise Sintática
  //    Transforma os tokens (arrays de objetos) em uma AST Abstract
  //    Syntax Tree (árvore de objetos) que representa nosso programa
  const lispAST = parser(tokens);
  // 3. Transformação
  //    Transforma nossa AST original em Lisp na
  //    nossa linguagem target (js)
  const jsAST = transformer(lispAST);
  // 4. 'Geração' de código
  //     Transforma nossa AST em código (string)
  const jsCode = generateCode(jsAST);
  return jsCode
}