import React from 'react';

const QuestionTwo = () => (
  <div className="content-container">
    <div className="card">
      <h3 className="question_title">Liste melhorias e possíveis correções para o código disponibilizado nos testes:</h3>
      <p className="answer">Ainda em referência à calculadora,de acordo com a w3c Algumas propriedades das tabelas não possuem suporte no HTML 5, seria melhor definir coisas como altura, largura e borda usando CSS, de preferência em um arquivo separado.</p>

      <p className="answer">A calculadora na verdade poderia ter sido feita de outra forma que não fosse uma tabela e suas classes poderiam ter sido declaradas de uma forma melhor, que facilitasse usar tanto o css quanto o javascript pra lidar com os elementos.</p>

      <p className="answer">De resto, achei apenas dois erros de digitação, simples de corrigir. Acredito também que, no geral, separar a parte de css e js em arquivos diferentes e depois importar(linkar) eles no html facilita muito o trabalho de desenvolvimento.</p>
    </div>
  </div>
);

export default QuestionTwo;
