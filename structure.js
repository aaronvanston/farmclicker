const constants = {
  CHICKEN: 'CHICKEN',
  EGGS: 'EGGS',
  FEATHERS: 'FEATHERS'
}

// product set
const products = [
  {
    name: constants.EGGS,
    qty: 1,
    sellPrice: 100,
    modifiers: []
  }, {
    name: constants.FEATHERS,
    qty: 1,
    buyPrice: 1000, // in cents
    modifiers: []
  }, {
    name: constants.CHICKEN,
    qty: 1,
    buyPrice: 10000, // in cents
    sellPrice: 10000, // in cents
    multiplier: 4, // this * qty + buyPrice
    modifiers: []
  },
]

// producer data set
const producers = [
  {
    name: constants.CHICKEN,
    modifiers: [{ name: 'barn', type: 'multiplication', amount: 2 }],
    activeModifiers: ['barn'],
    produces: [
      { 
        [constants.EGGS]: {
          rate: 0.1, // per tick
          modifiers: [{ name: 'fertilizer', type: 'multiplication', amount: 2 }],
          activeModifiers: ['fertilizer'],
        }
      }, { 
        [constants.FEATHERS]: {
          rate: 0.001, // per tick
          modifiers: []
        } 
      }
    ],
  }
]

const gameBoard = {
  tickRate: 60,
  income: 1000, // per s
  totalMoney: 1000000 //cents
}

// income is calculated by 
  // for each product, sellPrice (with modifier) * qty being sold


// Producers Modifier Types
  // multiplication by x (rate)

// Products Modifier Types
  // produce x more amount (qty)
  // sell for x times more (base price)


// Steps:

  // Set-up basic tick rate
  // click to product product per click
  // basic producers with set products per tick
  // modifiers
  // unlock requirements (price, asset)


// v1 set-up

// initial game settings
const gameSettings = {
  tickRate: 60,  
}

// Inventory, this can be hashed eventually or import/export save files
const inventory = {
  income: 1000, // per s
  totalMoney: 1000000, //cents
  producers: [
    { name: constants.CHICKEN, qty: 1 }
  ],
  products: [
    { name: constants.EGGS, qty: 1 }
  ]
}

// These can be preloaded/ initial state
// producer set
const producers = [
  {
    name: constants.CHICKEN,
    buyPrice: 10000, // in cents
    multiplier: 4, // this * qty + buyPrice
    produces: [
      { 
        [constants.EGGS]: {
          rate: 0.1, // per tick
        }
      }, { 
        [constants.FEATHERS]: {
          rate: 0.001, // per tick
        } 
      }
    ],
  }
]

// product set
const products = [
  {
    name: constants.EGGS,
    sellPrice: 100,
  }, {
    name: constants.FEATHERS,
    sellPrice: 1000, // in cents
  }
]


// Tick rate 1sec
// Each tick do:
  // "Produce" products
  // "Sell" products 