let herb = require('../api/herbs.js')

let newHerbs = [
    {
        name: 'Ashwagandha Root',
        description: 'Ashwagandha is an incredibly healthy medicinal herb. It’s classified as an "adaptogen," meaning that it can help your body manage stress. Ashwagandha also provides all sorts of other benefits for your body and brain.',
        img: 'ashwagansha.jpg',
        ailmentName: [
            'Diabetes',
            'Cancer',
            'Stress',
            'Anxiety',
            'Depression',
            'Boost Testosterone',
            'Men Fertility',
            'Inflammation'
        ],
        price: 17.58,
        //     // inStock: Boolean{
    }, {
        name: 'Aloe Vera',
        description: 'Aloe vera produces two substances used for medicine: The gel is obtained from the cells in the center of the leaf, and the latex is obtained from the cells just beneath the leaf skin. For constipation take 100–200 milligrams of aloe vera daily. For wound healing, psoriasis and other skin infections, use 0.5 percent aloe extract cream three times daily. For dental plaque and gum disease, use a toothpaste that contains aloe vera for 24 weeks.',
        img: 'aloe.jpg',
        ailmentName: [
            'Sunburn',
            'Frostbite',
            'Psoriasis',
            'Cold Sores',
            'Arthritis',
            'Inflammtion',
            'Diabetes',
            'Depression'
        ],
        price: 26.52,
        // inStock: Boolean
    }, {
        name: 'Anise',
        description: 'The oil produced from star anise contains thymol, terpineol and anethole, which is used for treating cough and flu. Anise also helps improve digestion, alleviate cramps and reduce nausea. Consuming star anise tea after meals helps treat digestive ailments such as bloating, gas, indigestion and constipation. ',
        img: 'anise.jpeg',
        ailmentName: [
            'Hair Growth',
            'Menstruation',
            'Gas Reliever',
            'High Blood Pressure',
            'Toothache',
            'Digestion',
            'Inflammation',
            'Anti-Septic'
        ],
        price: 31.17,
        // inStock: Boolean
    }, {
        name: 'Banafsha',
        description: 'Sweet violet is sometimes applied directly to the skin for skin disorders and as a skin cleanser. In herbal combinations, sweet violet is used for breathing problems including sudden (acute) and ongoing (chronic) bronchitis, asthma, emphysema, “dust-damaged” lungs, swelling (inflammation) of the respiratory tract, cold and flu symptoms, hoarseness, cough, and chest congestion. These herbal combinations are also used for involuntary urination (incontinence) in older people, bed-wetting, irritable bladder, and prostate conditions.',
        img: 'banafsha.JPG',
        ailmentName: [
            'Inflammation',
            'Insomnia',
            'Heartburn',
            'Gas',
            'Hot Flashes',
            'Depression',
            'Irritability'
        ],
        price: 29.98,
        //     // inStock: Boolean
    }, {
        name: 'Bee Pollen',
        description: 'A complete protein, rich in vitamins, minerals, enzymes, amino acids and anti-oxidants, it is considered an immune system builder that will also enhance vitality. Bee pollen is a great brain booster, lifting brain fatigue, improving alertness and helping concentration levels over an extended period of time.',
        img: 'beepollen.jpg',
        ailmentName: [
            'Allergies',
            'Inflammation',
            'Liver Health',
            'Immune Booster',
            'Menopause',
            'Stress',
            'Alcoholism'
        ],
        price: 20.83,
        //     // inStock: Boolean
    }, {
        name: 'Bentonite Clay',
        description: 'Healing clays like bentonite have a high concentration of minerals including silica, calcium, magnesium, sodium, iron, and potassium. It also absorbs and removes toxins, heavy metals, impurities, and chemicals. Because of this, bentonite clay is a common ingredient in detox and cleansing products. Common external uses include poultices, mud packs, detox baths, and skin care recipes. Some (including myself) even use it internally. It has an alkalizing effect on the body and when taken correctly, it can help balance gut bacteria.',
        img: 'clay.jpg',
        ailmentName: [
            'Digestion',
            'Allergies',
            'Detox',
            'Oral Health',
            'Speed Healing',
            'Nausea',
            'Cancer'
        ],
        price: 9.92,
        // inStock: Boolean
    }, {
        name: 'Bladderwrack',
        description: 'Bladderwrack, like many sea plants, contains varying amounts of iodine, which is used to prevent or treat some thyroid disorders. Bladderwrack products may contain varying amounts of iodine, which makes it an inconsistent source of iodine. Bladderwrack also contains algin, which can act as a laxative to help the stool pass through the bowels.',
        img: 'bladderwrack.jpg',
        ailmentName: [
            'Inflammation',
            'Brain Function',
            'Erectile Dysfunction',
            'Immune Boost',
            'Cancer',
            'Fatigue',
            'Diabetes'
        ],
        price: 22.75,
        // inStock: Boolean
    }, {
        name: 'Burdock Root',
        description: 'Burdock root has been used for centuries in holistic medicine to treat a variety of different conditions. Traditionally, it was most commonly used as a diuretic and a digestive aid.',
        img: 'burdock.jpg',
        ailmentName: [
            'Diabetes',
            'Infections',
            'Blood Purifier',
            'Diuretic',
            'Cancer',
            'Inflammation'
        ],
        price: 24.93,
        //     // inStock: Boolean
    }, {
        name: 'Bramhi',
        description: 'Burdock root has been used for centuries in holistic medicine to treat a variety of different conditions. Traditionally, it was most commonly used as a diuretic and a digestive aid.',
        img: 'brahmi.jpg',
        ailmentName: [
            'Brain Function',
            'Stress',
            'Diabetes',
            'Lung Health',
            'Immune Booster',
            'Inflammation'
        ],
        price: 16.67,
        //     // inStock: Boolean
    }, {
        name: 'Cardamom',
        description: 'The health benefits of cardamom include gastrointestinal protection, cholesterol control, anti-cancer properties, relief from cardiovascular issues, and improvement of blood circulation in the body. It is useful for curing digestive problems, dental diseases, and urinary tract infections such as cystitis, nephritis, and gonorrhea. Cardamom possesses aphrodisiac properties and is also used as a cure for impotence, erectile dysfunction, and premature ejaculation.',
        img: 'cardamom.jpg',
        ailmentName: [
            'Sore Throat',
            'Infections',
            'Tuberculosis',
            'Lung Health',
            'Venom Antidote',
            'UTI',
            'Gonorrhea',
        ],
        price: 66.43,
        //     // inStock: Boolean
    }, {
        name: 'Charcoal',
        description: 'Activated charcoal is a fine black powder made from bone char, coconut shells, peat, petroleum coke, coal, olive pits or sawdust. The charcoal is activated by processing it at very high temperatures. The high temperatures change its internal structure, reducing the size of its pores and increasing its surface area.',
        img: 'charcoal.jpeg',
        ailmentName: [
            'Anti-Aging',
            'Cholesterol',
            'Detox',
            'Digestion',
            'Gas',
            'Gum Disease',
            'Heart Health',
            'Hangovers',
            'Toxin Remover',
            'Whiten Teeth'
        ],
        price: 17.58,
        //     // inStock: Boolean
    }, {
        name: 'Chlorella',
        description: 'Chlorella is a single-cell green algae containing the green photosynthetic pigments chlorophyll-a and -b in its chloroplast.',
        img: 'chlorella.jpg',
        ailmentName: [
            'Cancer',
            'Detoxification',
            'Fibromyalgia',
            'Radiation treatment side effects',
            'Immune Booster',
            'Colds',
            'Toxic Metals Detox',
            'Anti-Aging'
        ],
        price: 51.67,
        // inStock: Boolean
    }, {
        name: 'Cohosh',
        description: 'Black cohosh (Cimicifuga racemosa) is a plant commonly used in herbal medicine for the relief of menopausal symptoms. A member of the buttercup family, it has a long history of use in the treatment of arthritis and muscle pain. <br> Blue cohosh is used in alternative medicine to enhance women\’s health, there\’s also some concern that it may have harmful effects. Because blue cohosh is thought to suppress muscle spasms, it\’s often used in alternative medicine to soothe cramps, such as menstrual cramps and stomach cramps.',
        img: 'cohosh.jpg',
        ailmentName: [
            'Menopause',
            'Colic',
            'Menstruation',
            'Arthritis',
            'High Blood Pressure',
            'Insomnia',
            'Headaches',
            'Diabetes'
        ],
        price: 39.41,
        // inStock: Boolean
    }, {
        name: 'Dong Quai',
        description: 'Dong qui (also known as female ginseng) is rich in compounds with anti-inflammatory and immune-stimulating effects, among other healthful substances, it is said to aid in treating a host of issues from allergies to constipation, high blood pressure to premature ejaculation, and more.',
        img: 'dongquai.jpeg',
        ailmentName: [
            'Headaches',
            'Menstruation',
            'Arthritis',
            'Menopause',
            'Allergies',
            'Anemia',
            'High Blood Pressure',
            'Constipation'
        ],
        price: 37.92,
        // inStock: Boolean
    }, {
        name: 'Echinacea',
        description: 'Echinacea is one of the most widely known herbs in American folk herbalism. Used extensively by traditional herbalists and Native Americans alike in North America for generations, echinacea eventually gained popularity in Europe in the 1900\'s. One of its main uses is to support healthy immune function, although many of its historical uses were related to topical applications. It is now one of the most available dietary supplements in health food stores and continues to be a subject of many scientific studies investigating its immune support properties.',
        img: 'echinacea.jpg',
        ailmentName: [
            'Inflammation',
            'Brain Function',
            'Erectile Dysfunction',
            'Immune Boost',
            'Cancer',
            'Fatigue',
            'Diabetes'
        ],
        price: 42.75,
        //     // inStock: Boolean
    }, {
        name: 'Ginseng',
        description: 'Ginseng has been used in traditional Chinese medicine for centuries. This slow-growing, short plant with fleshy roots can be classified three ways, depending on how long it is grown: fresh, white or red.        Fresh ginseng is harvested before 4 years, while white ginseng is harvested between 4–6 years and red ginseng is harvested after 6 or more years.',
        img: 'ginseng.jpg',
        ailmentName: [
            'Inflammation',
            'Brain Function',
            'Erectile Dysfunction',
            'Immune Boost',
            'Cancer',
            'Fatigue',
            'Diabetes'
        ],
        price: 175.00,
        // inStock: Boolean
    }, {
        name: 'Haritaki',
        description: 'As one of the three ingredients in the Ayurvedic super formula Triphala, haritaki (Terminalia chebula) is considered to be one of the best herbs for balancing vata dosha. Supporting the body\'s innate cleansing process, it gently removes accumulated natural toxins in the gastrointestinal tract. As a rejuvenative, it strengthens and nourishes the tissues and supports the proper function of the colon, lungs, liver, and spleen. Haritaki is traditionally used as a remedy for all vata-related imbalances. It maintains regular elimination, helps promote healthy body mass, and supports comfortable and complete digestion. Haritaki is highly revered in India, as it is believed to increase energy, intelligence, and awareness.',
        img: 'haritaki.jpg',
        ailmentName: [
            'ADHD',
            'Cystic Fibrosis',
            'Anti-Aging',
            'Sexual Function',
            'Constipation',
            'Digestion',
            'Diabetes',
            'Brain Function'
        ],
        price: 26.45,
        //     // inStock: Boolean
    }, {
        name: 'Irish Sea Moss',
        description: 'Irish sea moss is a source of potassium chloride, a nutrient which helps to dissolve catarrhs (inflammation and phlegm in the mucous membranes), which cause congestion. It contains compounds which act as a natural antimicrobial and antiviral agents, helping to boost immunity and get rid of any infections.',
        img: 'seamoss.jpg',
        ailmentName: [
            'Cholesterol',
            'Thyroid',
            'Respiratory',
            'Digestion',
            'Pain Reliever',
            'Skin',
            'Tuberculosis'
        ],
        price: 35.42,
        // inStock: Boolean
    }, {
        name: 'Maca Root',
        description: 'Maca (Lepidium meyenii) is the root of a vegetable native to the Andes region of Peru. Known as "Peruvian ginseng" (even though it doesn\'t belong to the same botanical family as ginseng), maca is consumed as a food and is said to boost energy and libido.',
        img: 'maca.jpg',
        ailmentName: [
            'Sexual Function',
            'Libido',
            'Fertility',
            'Depression',
            'Chemical Balance'
        ],
        price: 18.25,
        // inStock: Boolean
    }, {
        name: 'Mucuna',
        description: 'Mucuna\'s Pruriens contains a principle ingredient: L-Dopa, a naturally occurring amino acid which transforms into Dopamine in the Brain. Dopamine is a neurotransmitter which allows the dynamic functioning of the brain. Higher levels of Dopamine have been linked with sound sleep and an expanded sense of well-being. Mucuna has a reputation for reliably lifting mood and enhancing sexual function.',
        img: 'mucuna.jpg',
        ailmentName: [
            'Stress',
            'ADHD',
            'Depression',
            'Fertility',
            'Low Libido',
            'Insomnia',
            'Fatigue'
        ],
        price: 18.75,
        //     // inStock: Boolean
    }, {
        name: 'Mullein',
        description: 'An oil made from the flowers of the mullein plant is very commonly used to treat the pain and inflammation associated with earaches for children and adults alike. Mullein might even be able to fight influenza, herpes viruses and some bacteria that cause respiratory infections. <br> Traditional use of mullein in its various forms includes the treatment of bruises, burns, hemorrhoids and gout. Preparations of mullein can be ingested, applied topically and even smoked. In the Appalachia region of the United States, the plant has historically been used to treat colds and upper airway infections. Additionally, mullein leaves have been applied topically to soften and protect the skin.',
        img: 'mullein.jpg',
        ailmentName: [
            'Cough',
            'Diarrhea',
            'Antiseptic',
            'Antiviral',
            'Earaches',
            'Mouth Ulcers',
            'Sunburn',
            'Postpartum Healing'
        ],
        price: 24.75,
        //     // inStock: Boolean
    }, {
        name: 'Neem',
        description: 'The primary purpose of neem leaves is the treatment of vaata disorders or neuromuscular pains. Then come the other benefits: purify the blood, prevent damage caused by free radicals in the body, remove toxins, treat insect bites and ulcers. Neem leaves have anti-bacterial properties which is why it works wonders on infections, burns and any kind of skin problems. It destroys the bacteria that causes infections, stimulates the immune system and encourages rapid healing. We tell you some benefits of neem.',
        img: 'neem.jpg',
        ailmentName: [
            'Inflammation',
            'Detox',
            'Antibacterial',
            'Dandruff',
            'Cancer',
            'Acne',
            'Oral Health',
            'Malaria',
            'Diabetes',
            'Digestion',
            'Birth Control'
        ],
        price: 16.25,
        // inStock: Boolean
    }, {
        name: 'Olive Leaf',
        description: 'Long used in traditional medicine, olive leaf extract comes from the leaves of the olive tree (Olea europaea) and has a variety of health benefits. Research shows oleuropein, the main component in olive leaf extract, has antioxidant, antibacterial, antimicrobial, anti-inflammatory, and immune-stimulating properties.',
        img: 'oliveleaf.jpg',
        ailmentName: [
            'Diabetes',
            'High Blood Pressure',
            'Viruses',
            'Inflammation',
            'Cancer',
            'Alzheimers',
            'Diabetes',
            'Fatigue'
        ],
        price: 22.67,
        // inStock: Boolean
    }, {
        name: 'Rosehips',
        description: 'Rose hip is the fruit that develops from the blossoms of the wild rose plant. It ranges in color from orange to purplish black and usually develops in the latter part of the growing season, around late summer to autumn. A common ingredient in herbal teas, rose hip is also available in supplement and powdered forms. Rose hip contains a number of important antioxidants (including vitamin C, vitamin E, beta-carotene, and lycopene) that are beneficial to your health. Alternative practitioners also believe that rose hip can prevent or treat a wide range of gastrointestinal and inflammatory symptoms.',
        img: 'rosehips.jpg',
        ailmentName: [
            'Diarrhea',
            'Constipation',
            'Gallstones',
            'Stretch Marks',
            'UTI',
            'Gout',
            'Diabetes',
            'Sciatica'
        ],
        price: 19.17,
        // inStock: Boolean
    }, {
        name: 'Spirulina',
        description: 'Spirulina is a natural “algae” (cyanbacteria) powder that is incredibly high in protein and a good source of antioxidants, B-vitamins and other nutrients. When harvested correctly from non-contaminated ponds and bodies of water, it is one of the most potent nutrient sources available.',
        img: 'spirulina.jpg',
        ailmentName: [
            'erectile dysfunction',
            'low libido',
            'depression',
            'hair loss',
            'menopause'
        ],
        price: 35.42,
        // inStock: Boolean
    }, {
        name: 'Turmeric',
        description: 'Turmeric is a spice that comes from the turmeric plant. It is commonly used in Asian food. You probably know turmeric as the main spice in curry. It has a warm, bitter taste and is frequently used to flavor or color curry powders, mustards, butters, and cheeses. But the root of turmeric is also used widely to make medicine. It contains a yellow-colored chemical called curcumin, which is often used to color foods and cosmetics. Turmeric is used for arthritis, heartburn (dyspepsia), joint pain, stomach pain, Crohn\'s disease and ulcerative colitis, bypass surgery, hemorrhage, diarrhea, intestinal gas, stomach bloating, loss of appetite, jaundice, liver problems, Helicobacter pylori (H. pylori) infection, stomach ulcers, irritable bowel syndrome (IBS), gallbladder disorders, high cholesterol, a skin condition called lichen planus, skin inflammation from radiation treatment, and fatigue. It is also used for headaches, bronchitis, colds, lung infections, hay fever, fibromyalgia, leprosy, fever, menstrual problems, itchy skin, recovery after surgery, and cancers. Other uses include depression, Alzheimer\'s disease, swelling in the middle layer of the eye (anterior uveitis), diabetes, water retention, worms, an autoimmune disease called systemic lupus erythematosus (SLE), tuberculosis, urinary bladder inflammation, and kidney problems. Some people apply turmeric to the skin for pain, ringworm, sprains and swellings, bruising, leech bites, eye infections, acne, inflammatory skin conditions and skin sores, soreness inside of the mouth, infected wounds, and gum disease.',
        img: 'turmeric.jpg',
        ailmentName: [
            'Arthritis',
            'Heartburn',
            'Crohn\'s',
            'Ulcerative Colitis',
            'Hemorrhage',
            'Diarrhea',
            'Alzheimer\'s'
        ],
        price: 11.53,
        //     // inStock: Boolean
    },
]



// herb.deleteMany()
herb.newHerb(newHerbs)
    .then(herbs => {
        console.log('Saved Herbs', herbs)
    })