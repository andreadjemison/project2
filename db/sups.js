const sup = require('../api/sups.js')

let newSups = [
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
        ailmentName: ['erectile dysfunction', 'low libido', 'depression', 'hair loss', 'menopause'],
        price: 20,
        // inStock: Boolean
    },    {
        name: 'Maca Root',
        description: 'Maca (Lepidium meyenii) is the root of a vegetable native to the Andes region of Peru. Known as "Peruvian ginseng" (even though it doesn\'t belong to the same botanical family as ginseng), maca is consumed as a food and is said to boost energy and libido.',
        img: '../imgs/maca.jpg',
        ailmentName: ['Sexual Function', 'Libido', 'Fertility', 'Depression', 'Chemical Balance'],
        price: 20,
        // inStock: Boolean
    },    {
        name: 'Burdock Root',
        description: 'Burdock root has been used for centuries in holistic medicine to treat a variety of different conditions. Traditionally, it was most commonly used as a diuretic and a digestive aid.',
        img: '../imgs/burdock.jpg',
        ailmentName: ['Diabetes', 'Infections', 'Blood Purifier', 'Diuretic', 'Cancer', 'Inflammation'],
        price: 20,
    //     // inStock: Boolean
    },    {
        name: 'Ashwagandha Root',
        description: 'Ashwagandha is an incredibly healthy medicinal sup. It’s classified as an "adaptogen," meaning that it can help your body manage stress. Ashwagandha also provides all sorts of other benefits for your body and brain.',
        img: '../imgs/ashwagansha.jpg',
        ailmentName: ['Diabetes', 'Cancer', 'Stress', 'Anxiety', 'Depression', 'Boost Testosterone', 'Men Fertility', 'Inflammation'],
        price: 20,
    //     // inStock: Boolean
    },    {
        name: 'Ginseng',
        description: 'Ginseng has been used in traditional Chinese medicine for centuries. This slow-growing, short plant with fleshy roots can be classified three ways, depending on how long it is grown: fresh, white or red.        Fresh ginseng is harvested before 4 years, while white ginseng is harvested between 4–6 years and red ginseng is harvested after 6 or more years.',
        img: '../imgs/ginseng.jpg',
        ailmentName: ['Inflammation', 'Brain Function', 'Erectile Dysfunction', 'Immune Boost', 'Cancer', 'Fatigue', 'Diabetes'],
        price: 20,
        // inStock: Boolean
    },     {
        name: 'Sea Moss',
        description: 'Irish sea moss is a source of potassium chloride, a nutrient which helps to dissolve catarrhs (inflammation and phlegm in the mucous membranes), which cause congestion. It contains compounds which act as a natural antimicrobial and antiviral agents, helping to boost immunity and get rid of any infections.',
        img: '../imgs/seamoss.jpg',
        ailmentName: ['Cholesterol', 'Thyroid', 'Respiratory', 'Digestion', 'Pain Reliever', 'Skin', 'Tuberculosis'],
        price: 20,
        // inStock: Boolean
    },     {
        name: 'Bladderwrack',
        description: 'Bladderwrack, like many sea plants, contains varying amounts of iodine, which is used to prevent or treat some thyroid disorders. Bladderwrack products may contain varying amounts of iodine, which makes it an inconsistent source of iodine. Bladderwrack also contains algin, which can act as a laxative to help the stool pass through the bowels.',
        img: '../imgs/bladderwrack.jpg',
        ailmentName: ['Inflammation', 'Brain Function', 'Erectile Dysfunction', 'Immune Boost', 'Cancer', 'Fatigue', 'Diabetes'],
        price: 20,
        // inStock: Boolean
    },     {
        name: 'Echinacea',
        description: 'Echinacea is one of the most widely known sups in American folk supalism. Used extensively by traditional supalists and Native Americans alike in North America for generations, echinacea eventually gained popularity in Europe in the 1900\'s. One of its main uses is to support healthy immune function, although many of its historical uses were related to topical applications. It is now one of the most available dietary supplements in health food stores and continues to be a subject of many scientific studies investigating its immune support properties.',
        img: '../imgs/echinacea.jpg',
        ailmentName: ['Inflammation', 'Brain Function', 'Erectile Dysfunction', 'Immune Boost', 'Cancer', 'Fatigue', 'Diabetes'],
        price: 20,
    //     // inStock: Boolean
    },     {
        name: 'Turmeric',
        description: 'Turmeric is a spice that comes from the turmeric plant. It is commonly used in Asian food. You probably know turmeric as the main spice in curry. It has a warm, bitter taste and is frequently used to flavor or color curry powders, mustards, butters, and cheeses. But the root of turmeric is also used widely to make medicine. It contains a yellow-colored chemical called curcumin, which is often used to color foods and cosmetics. Turmeric is used for arthritis, heartburn (dyspepsia), joint pain, stomach pain, Crohn\'s disease and ulcerative colitis, bypass surgery, hemorrhage, diarrhea, intestinal gas, stomach bloating, loss of appetite, jaundice, liver problems, Helicobacter pylori (H. pylori) infection, stomach ulcers, irritable bowel syndrome (IBS), gallbladder disorders, high cholesterol, a skin condition called lichen planus, skin inflammation from radiation treatment, and fatigue. It is also used for headaches, bronchitis, colds, lung infections, hay fever, fibromyalgia, leprosy, fever, menstrual problems, itchy skin, recovery after surgery, and cancers. Other uses include depression, Alzheimer\'s disease, swelling in the middle layer of the eye (anterior uveitis), diabetes, water retention, worms, an autoimmune disease called systemic lupus erythematosus (SLE), tuberculosis, urinary bladder inflammation, and kidney problems. Some people apply turmeric to the skin for pain, ringworm, sprains and swellings, bruising, leech bites, eye infections, acne, inflammatory skin conditions and skin sores, soreness inside of the mouth, infected wounds, and gum disease.',
        img: '../imgs/turmeric.jpg',
        ailmentName: ['Arthritis', 'Heartburn', 'Crohn\'s', 'Ulcerative Colitis', 'Hemorrhage', 'Diarrhea', 'Alzheimer\'s'],
        price: 20,
    //     // inStock: Boolean
    },     {
        name: 'Mullein',
        description: 'An sup made from the flowers of the mullein plant is very commonly used to treat the pain and inflammation associated with earaches for children and adults alike. Mullein might even be able to fight influenza, herpes viruses and some bacteria that cause respiratory infections. <br> Traditional use of mullein in its various forms includes the treatment of bruises, burns, hemorrhoids and gout. Preparations of mullein can be ingested, applied topically and even smoked. In the Appalachia region of the United States, the plant has historically been used to treat colds and upper airway infections. Additionally, mullein leaves have been applied topically to soften and protect the skin.',
        img: '../imgs/mullein.jpg',
        ailmentName: ['Cough', 'Diarrhea', 'Antiseptic', 'Antiviral', 'Earaches', 'Mouth Ulcers', 'Sunburn', 'Postpartum Healing'],
        price: 15,
    //     // inStock: Boolean
    }, 
]

// sup.deleteMany()
sup.newSup(newSups)
  .then(sups => {
    console.log('Saved Supplements', sups)
  })