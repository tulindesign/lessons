/* 
  Реализовать методы увеличения и уменьшения баланса, при котором каждая операция сохраняется в массиве operations в виде
  {
    reason: 'Оплата налогов', sum: -100}
  }
    Возвращается true, если успешно и false, если не хватает баланса
    Также реализовать метод вывода числа операций по кошельку
*/

const wallet = {
  balance: 0,
  operations: [],
  increaseBalance(sum) {
    this.balance += sum;
    this.operations.push(
      {
        reason: 'Пополнение счета',
        sum
      }
    );
    return `${this.operations.at(-1).reason} на сумму ${this.operations.at(-1).sum}$. Баланс: ${this.balance}$`;
  },
  decreaseBalance(sum) {
    if (this.balance >= Math.abs(sum)) {
      this.balance -= Math.abs(sum);
      this.operations.push(
      {
        reason: 'Оплата',
        sum
      }
      );
      return `${this.operations.at(-1).reason} на сумму ${this.operations.at(-1).sum}$. Баланс: ${this.balance}$`;
    } else {
      return `Не достаточно средств для операции ${sum}. Баланс: ${wallet.balance}$`
    }
    
  }
} 


function addOperation(operationInput = +prompt('Введите сумма операции')) {
  if (operationInput > 0) {
    return wallet.increaseBalance(operationInput);
  }
  else {
    return wallet.decreaseBalance(operationInput)
  } 
}

console.log(addOperation());
console.log(addOperation());