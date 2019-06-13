import React from 'react';

const QuestionOne = () => (
  <div className="content-container">
    <div className="card">
      <h3 className="question_title"> Liste erros que você tenha encontrado no código disponibilizado para cada teste:</h3>

      <h5 className="question_subTitle">Teste 1</h5>

      <p className="answer">Dentro da tag style, existe referência a uma classe ".col-4" que não foi definida no código html. Outro ponto talvez importante são os atributos "border", "width" e "height" aplicados na tag da tabela.</p>

      <h5 className="question_subTitle">Teste 2</h5>

      <p className="answer">Erro de digitação: A tag body está fechada de forma errada, faltando o > no final.</p>

      <h5 className="question_subTitle">Teste 5</h5>

      <p className="answer">Erro de digitação: Na segunda questão "Liste" está repetido no começo da frase.</p>
    </div>
  </div>
);

export default QuestionOne;