import rerenderEntireTree from '../render'


let state = {
  shippings: [
    {
      number: "1", price: "9 772.20 ₽", mass: "2 T",
      type: "Сборный груз", distance: "93 км", time: "1 ч 33 мин",
      city1: "Калининград", region1: "Калининградская область",
      city2: "Вологда", region2: "Вологодская область", date: "13 апр."
    },
    {
      number: "2", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "11 апр."
    },
    {
      number: "3", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "12 апр."
    },
    {
      number: "4", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "5", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "9 апр."
    },
    {
      number: "6", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "7", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "8", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "9", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "10", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "11", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "12", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "13", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "14", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "15", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "16", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "17", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "18", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "19", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "20", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "21", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "22", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "23", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "24", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "25", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "26", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "27", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "28", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "29", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "30", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "31", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    },
    {
      number: "32", price: "5 490.00 ₽", mass: "20 T",
      type: "Сборный груз", distance: "36 км", time: "36 мин",
      city1: "Павловский посад", region1: "Московская область",
      city2: "Обухово", region2: "Московская область", date: "21 апр."
    }
  ]

}
;
export let sorted = () => state.shippings.sort((a, b) => parseInt(a.date.match(/\d+/)) < (b.date.match(/\d+/)) ? 1 : -1);
sorted();

export let currentDisplay = state.shippings.slice(0, 5)

export let shippingsNewPage = (number) => {
  currentDisplay =  state.shippings.slice(number, number + 5);
  rerenderEntireTree(state, currentDisplay, shippingsNewPage)
}

export default state;
