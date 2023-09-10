const tokenizer = require('./tokenizer.js');

module.exports = function compiler(input) {
  // 1. Análise Lexical
  const tokens = tokenizer(input);
  // 2. Análise Sintática
  // 3. Transformação
  // 4. 'Geração' de código
  // retorno do código em js
  return tokens
}