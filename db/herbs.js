let herb = require('../api/herbs.js')

let newHerbs = [
    {
        name: 'Chlorella',
        description: 'Chlorella is a single-cell green algae containing the green photosynthetic pigments chlorophyll-a and -b in its chloroplast.',
        img: '../imgs/chlorella.jpg',
        ailmentName: ['cancer prevention', 'detoxification', 'fibromyalgia', 'radiation treatment side effects', 'stimulates the immune system', 'colds', 'protecting the body against toxic metals', 'slowing the aging process'],
        price: 20,
        // inStock: Boolean
    },    {
        name: 'Spirulina',
        description: 'Spirulina is a natural “algae” (cyanbacteria) powder that is incredibly high in protein and a good source of antioxidants, B-vitamins and other nutrients. When harvested correctly from non-contaminated ponds and bodies of water, it is one of the most potent nutrient sources available.',
        img: '../imgs/spirulina.jpg',
        ailmentName: ['Balance Blood Sugar', 'Antioxidants', 'Allegeries', 'Removes Heavy Metals', 'Muscle & Endurance Benefits', 'colds', 'protecting the body against toxic metals', 'slowing the aging process'],
        price: 02,
        // inStock: Boolean
    // },    {
    //     name: 'Chlorella',
    //     description: 'Chlorella is a single-cell green algae containing the green photosynthetic pigments chlorophyll-a and -b in its chloroplast.',
    //     img: 'chlorella.jpg',
    //     ailmentName: ['cancer prevention', 'detoxification', 'fibromyalgia', 'radiation treatment side effects', 'stimulates the immune system', 'colds', 'protecting the body against toxic metals', 'slowing the aging process'],
    //     price: 20,
    //     // inStock: Boolean
    // },    {
    //     name: 'Chlorella',
    //     description: 'Chlorella is a single-cell green algae containing the green photosynthetic pigments chlorophyll-a and -b in its chloroplast.',
    //     img: 'chlorella.jpg',
    //     ailmentName: ['cancer prevention', 'detoxification', 'fibromyalgia', 'radiation treatment side effects', 'stimulates the immune system', 'colds', 'protecting the body against toxic metals', 'slowing the aging process'],
    //     price: 20,
    //     // inStock: Boolean
    // },    {
    //     name: 'Chlorella',
    //     description: 'Chlorella is a single-cell green algae containing the green photosynthetic pigments chlorophyll-a and -b in its chloroplast.',
    //     img: 'chlorella.jpg',
    //     ailmentName: ['cancer prevention', 'detoxification', 'fibromyalgia', 'radiation treatment side effects', 'stimulates the immune system', 'colds', 'protecting the body against toxic metals', 'slowing the aging process'],
    //     price: 20,
    //     // inStock: Boolean
    },
]

// herb.deleteMany()
herb.newHerb(newHerbs)
  .then(herbs => {
    console.log('Saved Donuts', herbs)
  })