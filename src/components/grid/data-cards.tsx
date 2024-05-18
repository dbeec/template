interface Cards {
  card: Card[]
}

interface Card {
  spacing?: number;
  xs?: number;
  title?: string;
  text?: string;
}


const data_cards: Cards = {
  card: [
    {
      spacing: 2,
      xs: 3,
      title: "Boletos disponibles",
      text: "738",
    },
    {
      spacing: 2,
      xs: 3,
      title: "Boletos disponibles",
      text: "738",
    },
    {
      spacing: 2,
      xs: 3,
      title: "Boletos disponibles",
      text: "738",
    },
    {
      spacing: 2,
      xs: 3,
      title: "Boletos disponibles",
      text: "738",
    },
  ]
}

export default data_cards;