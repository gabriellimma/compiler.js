# compiler.js

Compilador (extremamente básico) de Lisp para JavaScript.

A ideia principal é ter noção de como os compiladores funcionam e quais são os
steps básicos de funcionamento.

exemplo de compilação:

index.js
```js
const compiler = require('./compiler.js');
const input = '(add 2 (sub 4 3))'; // código em Lisp
const output = compiler(input); // chama o compiler
console.log(output);
```

compiler.js
```@js
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
```

para executar basta dar um `node index` dentro da pasta `src`.

criado seguindo o [create your own compiler](https://citw.dev/tutorial/create-your-own-compiler)
