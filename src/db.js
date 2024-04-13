const cardsDB = [
  {
    id:0,
    name: "Житная Ул.",
    rent:50,
    monopolyRent:100,
    oneHouse:200,
    twoHouse:600,
    threeHouse:1400,
    fourHouse:1700,
    hotel:2000,
    priceForHouse:200,
    priceForHotel:200,
    color:"#B53102",
    // pledge:,
    // repayment:,
  },
  {
    id:1,
    name: "Нагатинская ул.",
    rent:50,
    monopolyRent:100,
    oneHouse:200,
    twoHouse:600,
    threeHouse:1400,
    fourHouse:1700,
    hotel:2000,
    priceForHouse:200,
    priceForHotel:200,
    color:"#B53102",
    // pledge:,
    // repayment:,
  },
  {
    id:2,
    name: "Варшавское Шоссе",
    rent:30,
    monopolyRent:90,
    oneHouse:200,
    twoHouse:600,
    threeHouse:1400,
    fourHouse:1700,
    hotel:2000,
    priceForHouse:200,
    priceForHotel:200,
    color:"#C3E3EB",
    // pledge:,
    // repayment:,
  },
  {
    id:3,
    name: "Ул. Огарево",
    rent:30,
    monopolyRent:90,
    oneHouse:200,
    twoHouse:600,
    threeHouse:1400,
    fourHouse:1700,
    hotel:2000,
    priceForHouse:200,
    priceForHotel:200,
    color:"#C3E3EB",
    // pledge:,
    // repayment:,
  },
  {
    id:4,
    name: "Первая Парковая Ул.",
    rent:30,
    monopolyRent:90,
    oneHouse:200,
    twoHouse:600,
    threeHouse:1400,
    fourHouse:1700,
    hotel:2000,
    priceForHouse:200,
    priceForHotel:200,
    color:"#C3E3EB",
    // pledge:,
    // repayment:,
  },
];

let usersDB = [
    {
        name:"BOB",
        cards:[
            {
                id:0,
                houses:3, /* Дернуть значение threehous */
            },
            {
                id:1,
                houses:3, /* Дернуть значение threehous */
            },
            
        ],
        
    },
    {
        name:"BOB2",
        cards:[
            {
                id:2,
                houses:3, /* Дернуть значение threehous */
            },
            {
                id:3,
                houses:3, /* Дернуть значение threehous */
            },
        ],
    },
];




export{cardsDB, usersDB}