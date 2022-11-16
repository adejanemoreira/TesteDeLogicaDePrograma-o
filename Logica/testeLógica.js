// Teste de lógica de programação

/* 1 Question - Desenvolva um programa para papelaria que receberá o valor de um produto. Então, conte 
 de 1 a 10 unidades do produto, e para cada unidade do produto você terá um acréscimo de 5%
 de desconto, ou seja, 1 produto 5%, 2 produtos 10%, 3 produtos 15% e assim por diante.
 A saida deve ser a quantidade do produto, o preço unitário e o total.*/

const PERCENTINCREASE = 0.05;
const COUNTTIMES = 10;

const fn = (value) => {
  for (let index = 1; index <= COUNTTIMES; index++) {
    const valueWithDiscount = value - value * (PERCENTINCREASE * index);
    const total = valueWithDiscount * index;
    console.log(
      `${index} ${Math.round(valueWithDiscount * 100) / 100} ${
        Math.round(total * 100) / 100
      }`
    );
  }
};

fn(2.0);

/* 2 Question - Amanda é dona da Kiddeo corp. uma loja de acessorios infantis. Existem duas 
categorias de itens com um número de identificação associado a eles, como segue:

- Se o primeiro digito no id for 1, custo do item será 50 cada
- Se o primeiro digitado no id for 2, o custo do item será 100 cada

Ele também oferece um desconto de 10% se o custo total da compra for superior a 5.000
Dado o id e a quantidade de itens, exibe o valor total a ser pago pelo cliente

ENTRADA: Linha unica contendo o ID do item seguido pelo número de itens. Ambos os valores devem 
receber espaços separados
SAIDA: Numero interio unico exibindo o valor total a ser pago*/

const DISCOUNT = 0.1;
const DIGITVALUES = {
  1: 50,
  2: 100
};

/**
 * @param {string} param
 * @returns
 */
const fnParm = (param) => {
  const [id, qtd] = param.split(' ');
  const [digit, ...rest] = id;

  const calc = DIGITVALUES[digit] * Number(qtd);
  return applyDiscount(calc);
};

const applyDiscount = (value) => {
  if (value <= 5000) return value;

  const discountValue = value * DISCOUNT;
  return value - discountValue;
};

console.log(fn('26951 60'));
