// Paradise Nursery — plant catalog
// Each plant has a stable id, name, category, price, short blurb,
// and an `illustration` key consumed by <PlantIllustration variant={...} />

export const categories = [
  {
    id: 'easy-care',
    name: 'Easy-Care Foliage',
    blurb: 'Forgiving green companions for first-time growers.',
  },
  {
    id: 'flowering',
    name: 'Flowering & Fragrant',
    blurb: 'Bloomers that bring color and scent indoors.',
  },
  {
    id: 'statement',
    name: 'Statement & Rare',
    blurb: 'Architectural specimens for a room\'s focal point.',
  },
]

export const plants = [
  {
    id: 'pothos-marble-queen',
    name: 'Marble Queen Pothos',
    category: 'easy-care',
    price: 18,
    blurb: 'Trailing vines marbled in cream and green. Thrives on neglect.',
    illustration: 'pothos',
  },
  {
    id: 'snake-plant-laurentii',
    name: "Snake Plant 'Laurentii'",
    category: 'easy-care',
    price: 24,
    blurb: 'Upright sculptural blades with golden-edged stripes.',
    illustration: 'snake',
  },
  {
    id: 'zz-plant',
    name: 'ZZ Plant',
    category: 'easy-care',
    price: 22,
    blurb: 'Glossy waxed leaflets that tolerate low light with ease.',
    illustration: 'zz',
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    category: 'flowering',
    price: 26,
    blurb: 'Deep green leaves crowned by white sail-shaped blooms.',
    illustration: 'peacelily',
  },
  {
    id: 'jasmine-vine',
    name: 'Star Jasmine Vine',
    category: 'flowering',
    price: 20,
    blurb: 'Twining stems studded with small, sweetly scented stars.',
    illustration: 'jasmine',
  },
  {
    id: 'anthurium-red',
    name: 'Red Anthurium',
    category: 'flowering',
    price: 28,
    blurb: 'Glossy heart-shaped blooms in lacquer red, nearly year-round.',
    illustration: 'anthurium',
  },
  {
    id: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    category: 'statement',
    price: 38,
    blurb: 'Iconic split leaves that grow larger and more fenestrated with age.',
    illustration: 'monstera',
  },
  {
    id: 'fiddle-leaf-fig',
    name: 'Fiddle Leaf Fig',
    category: 'statement',
    price: 45,
    blurb: 'Tall, violin-shaped leaves with bold, prominent veining.',
    illustration: 'fiddle',
  },
  {
    id: 'calathea-orbifolia',
    name: 'Calathea Orbifolia',
    category: 'statement',
    price: 32,
    blurb: 'Broad, silver-striped leaves that fold up at night.',
    illustration: 'calathea',
  },
]
