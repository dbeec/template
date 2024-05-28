interface Cards {
  card: Card[]
}

interface Card {
  xs?: number;
  title?: string;
  text?: string;
}


const data_cards: Cards = {
  card: [
    {
      xs: 3,
      title: "Boletos disponibles",
      text: "78",
    },
    {
      xs: 3,
      title: "Boletos disponibles",
      text: "738",
    },
    {
      xs: 3,
      title: "Boletos disponibles",
      text: "738",
    },
    {
      xs: 3,
      title: "Boletos disponibles",
      text: "738",
    },
  ]
}

export default data_cards;