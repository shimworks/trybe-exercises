const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const delivery = order.order.delivery.deliveryPerson
  const to = order.name
  const phone = order.phoneNumber
  const address = `${order.address.street}, N:${order.address.number}, Ap: ${order.address.apartment}`
  
  console.log(`Olá ${delivery}, ${to}, Telefone: ${phone}, ${address}`)
}

customerInfo(order);

const orderModifier = (order) => {
  const newPerson = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newValue = order.payment.total = 50;

console.log(`Olá ${newPerson}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${newValue},00`);
}

orderModifier(order);