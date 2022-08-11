# task-traker 1.0

## Descrição
  Projeto oriundo do curso de formação em VueJs 3 da Alura.

## Observações
  - o css original foi modificado desde o início e será ainda mais para adequar ao que acho melhor;
  - em "Form.vue", o método 'substring' substitui o 'substr' já em desuso conforme pode ser visto <[nesse link do MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)>. Apesar de ainda funcionar no console do navegador, 'substr' não deve ser usado mais no código.
  - Apenas o core do projeto é igual ao do curso

### Possíveis Melhorias futuras (organizando em ordem de prioridade):
  ~- "trava" no contador para que não permita clicar novamente enquanto o tempo de uma tarefa estiver correndo.~
  - implementação do localstorage para persistência das tarefas inseridas.
  - ajuste da rolagem apenasd da lista de tarefas, deixando fixos a barra lateral e o campo de input de tarefas.
  - Ajuste de validação do input de tarefas para não aceitar iniciar o contador com o campo vazio. Provavelmente o botão de iniciar a contagem ficará bloqueado até que o campo de input seja preenchido.
  - CSS global, com variáveis.
  - responsividade.