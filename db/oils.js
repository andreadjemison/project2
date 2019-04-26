let oil = require('../api/oils.js')

let newOils = [
    {
        name: 'Ginger',
        description: 'The health benefits of ginger essential oil are nearly identical to the medicinal health benefits of fresh ginger; in fact, the most potent form of ginger is the essential oil because it contains the highest levels of gingerol. The essential oil is the best way to use ginger as medicine. It can be taken internally to treat health conditions or rubbed topically with a carrier oil on an area of pain. Today, ginger essential oil is used to treat nausea, upset stomach, menstrual disorders, inflammation and respiratory conditions. When used as aromatherapy, it’s also known to bring on feelings of courageousness and self-assurance, which is why it’s known as the oil of empowerment.',
        img: 'ginger.jpeg',
        ailmentName: ['cancer prevention', 'detoxification', 'fibromyalgia', 'radiation treatment side effects', 'stimulates the immune system', 'colds', 'protecting the body against toxic metals', 'slowing the aging process'],
        price: 20,
        // inStock: Boolean
    },    {
        name: 'Peppermint',
        description: 'Peppermint has a number of therapeutic properties. It is a cooling agent that enhances mood, sharpens focus, combats irritation and redness, alleviates symptoms of congestion, and aids in digestion.',
        img: 'peppermint.jpeg',
        ailmentName: ['erectile dysfunction', 'low libido', 'depression', 'hair loss', 'menopause'],
        price: 20,
        // inStock: Boolean
    },    {
        name: 'Marjoram',
        description: 'One of this essential oils therapeutic properties is to calm hyperactivity and relieve anxiety. Marjoram was a popular plant used by the Greeks in medicines and also helps with digestion issues such as constipation and cramps. ',
        img: 'marjoram.jpg',
        ailmentName: ['Sexual Function', 'Libido', 'Fertility', 'Depression', 'Chemical Balance'],
        price: 20,
        // inStock: Boolean
    },    {
        name: 'Patchouli',
        description: 'Patchouli serves as a powerful skin care agent; it even promotes skin cell growth when applied directly to the skin. Patchouli helps to relieve anxiety, depression, fatigue, curb addiction, reduce cellulite and bloating. ',
        img: 'patchouli.png',
        ailmentName: ['Diabetes', 'Infections', 'Blood Purifier', 'Diuretic', 'Cancer', 'Inflammation'],
        price: 20,
    //     // inStock: Boolean
    },    {
        name: 'Chamomile',
        description: 'Chamomile is a powerful calming agent, as well as antibiotic, antiseptic, antidepressant and overall mood lifter. The German variety is often better suited to battle inflammation, specifically urinary tract and digestive inflammation. Both also have analgesic properties and can help to eliminate acne. ',
        img: 'chamomile.jpg',
        ailmentName: ['Diabetes', 'Cancer', 'Stress', 'Anxiety', 'Depression', 'Boost Testosterone', 'Men Fertility', 'Inflammation'],
        price: 20,
    //     // inStock: Boolean
    },    {
        name: 'Jasmine',
        description: 'Jasmine has been known to ease depression and childbirth, in addition to enhance libido. Its great for respiratory problems, addiction issues, and reducing tension and stress. ',
        img: 'jasmine.jpg',
        ailmentName: ['Inflammation', 'Brain Function', 'Erectile Dysfunction', 'Immune Boost', 'Cancer', 'Fatigue', 'Diabetes'],
        price: 20,
        // inStock: Boolean
    },     {
        name: 'Tea Tree',
        description: ' Not only is it a natural immune booster, but it also fights all three kinds of infection. It works to heal skin conditions, burns and cuts, and also works as an insecticide. In addition, it helps to soothe and treat cold sores, respiratory conditions, muscle aches, the flu, Athletes foot and dandruff. Its uses are vast and its healing power is quick.',
        img: 'teatree.jpg',
        ailmentName: ['Cholesterol', 'Thyroid', 'Respiratory', 'Digestion', 'Pain Reliever', 'Skin', 'Tuberculosis'],
        price: 20,
        // inStock: Boolean
    },     {
        name: 'Ylang Ylang',
        description: 'Bladderwrack, like many sea plants, contains varying amounts of iodine, which is used to prevent or treat some thyroid disorders. Bladderwrack products may contain varying amounts of iodine, which makes it an inconsistent source of iodine. Bladderwrack also contains algin, which can act as a laxative to help the stool pass through the bowels.',
        img: 'ylang.jpg',
        ailmentName: ['Inflammation', 'Brain Function', 'Erectile Dysfunction', 'Immune Boost', 'Cancer', 'Fatigue', 'Diabetes'],
        price: 20,
        // inStock: Boolean
    },     {
        name: 'Lemon',
        description: 'Lemon oil is a multifaceted essential oil. It helps with everything from skin irritation to digestion to circulation problems. It is a natural immunity booster and can even help reduce cellulite! Lemon oil helps to alleviate headaches and fever, and is a quick mood enhancer. ',
        img: 'lemon.jpg',
        ailmentName: ['Inflammation', 'Brain Function', 'Erectile Dysfunction', 'Immune Boost', 'Cancer', 'Fatigue', 'Diabetes'],
        price: 20,
    //     // inStock: Boolean
    },     {
        name: 'Eucalyptus',
        description: 'It\s best used for sore throats, cough, seasonal allergies and headaches. Eucalyptus oil benefits are due to its ability to stimulate immunity, provide antioxidant protection and improve respiratory circulation. You can disinfect your home naturally, or repel rats that are managing to get inside.',
        img: 'eucalyptus.jpg',
        ailmentName: ['Asthma', 'Bronchitis', 'Sinusitis', 'Flu', 'Allergies', 'Inflammation', 'Mental Clarity'],
        price: 20,
        // inStock: Boolean
    },     {
        name: 'Mullein',
        description: 'An oil made from the flowers of the mullein plant is very commonly used to treat the pain and inflammation associated with earaches for children and adults alike. Mullein might even be able to fight influenza, herpes viruses and some bacteria that cause respiratory infections. <br> Traditional use of mullein in its various forms includes the treatment of bruises, burns, hemorrhoids and gout. Preparations of mullein can be ingested, applied topically and even smoked. In the Appalachia region of the United States, the plant has historically been used to treat colds and upper airway infections. Additionally, mullein leaves have been applied topically to soften and protect the skin.',
        img: 'mullein.jpg',
        ailmentName: ['Cough', 'Diarrhea', 'Antiseptic', 'Antiviral', 'Earaches', 'Mouth Ulcers', 'Sunburn', 'Postpartum Healing'],
        price: 15,
    //     // inStock: Boolean
    },      {
        name: 'Neem',
        description: 'The primary purpose of neem leaves is the treatment of vaata disorders or neuromuscular pains. Then come the other benefits: purify the blood, prevent damage caused by free radicals in the body, remove toxins, treat insect bites and ulcers. Neem leaves have anti-bacterial properties which is why it works wonders on infections, burns and any kind of skin problems. It destroys the bacteria that causes infections, stimulates the immune system and encourages rapid healing. We tell you some benefits of neem.',
        img: 'neem.jpg',
        ailmentName: ['Inflammation', 'Detox', 'Antibacterial', 'Dandruff', 'Cancer', 'Acne', 'Oral Health', 'Malaria', 'Diabetes', 'Digestion', 'Birth Control'],
        price: 20,
        // inStock: Boolean
    },     {
        name: 'Olive Leaf',
        description: 'Long used in traditional medicine, olive leaf extract comes from the leaves of the olive tree (Olea europaea) and has a variety of health benefits. Research shows oleuropein, the main component in olive leaf extract, has antioxidant, antibacterial, antimicrobial, anti-inflammatory, and immune-stimulating properties.',
        img: 'oliveleaf.jpg',
        ailmentName: ['Diabetes', 'High Blood Pressure', 'Viruses', 'Inflammation', 'Cancer', 'Alzheimers', 'Diabetes', 'Fatigue'],
        price: 20,
        // inStock: Boolean
    },     {
        name: 'Rosehips',
        description: 'Rose hip is the fruit that develops from the blossoms of the wild rose plant. It ranges in color from orange to purplish black and usually develops in the latter part of the growing season, around late summer to autumn. A common ingredient in oilal teas, rose hip is also available in supplement and powdered forms. Rose hip contains a number of important antioxidants (including vitamin C, vitamin E, beta-carotene, and lycopene) that are beneficial to your health. Alternative practitioners also believe that rose hip can prevent or treat a wide range of gastrointestinal and inflammatory symptoms.',
        img: 'rosehips.jpg',
        ailmentName: ['Diarrhea', 'Constipation', 'Gallstones', 'Stretch Marks', 'UTI', 'Gout', 'Diabetes', 'Sciatica'],
        price: 12,
        // inStock: Boolean
    },     {
        name: 'Mucuna',
        description: 'Mucuna\'s Pruriens contains a principle ingredient: L-Dopa, a naturally occurring amino acid which transforms into Dopamine in the Brain. Dopamine is a neurotransmitter which allows the dynamic functioning of the brain. Higher levels of Dopamine have been linked with sound sleep and an expanded sense of well-being. Mucuna has a reputation for reliably lifting mood and enhancing sexual function.',
        img: 'mucuna.jpg',
        ailmentName: ['Stress', 'ADHD', 'Depression', 'Fertility', 'Low Libido', 'Insomnia', 'Fatigue'],
        price: 20,
    //     // inStock: Boolean
    },     {
        name: 'Haritaki',
        description: 'As one of the three ingredients in the Ayurvedic super formula Triphala, haritaki (Terminalia chebula) is considered to be one of the best oils for balancing vata dosha. Supporting the body\'s innate cleansing process, it gently removes accumulated natural toxins in the gastrointestinal tract. As a rejuvenative, it strengthens and nourishes the tissues and supports the proper function of the colon, lungs, liver, and spleen. Haritaki is traditionally used as a remedy for all vata-related imbalances. It maintains regular elimination, helps promote healthy body mass, and supports comfortable and complete digestion. Haritaki is highly revered in India, as it is believed to increase energy, intelligence, and awareness.',
        img: 'haritaki.jpg',
        ailmentName: ['ADHD', 'Cystic Fibrosis', 'Anti-Aging', 'Sexual Function', 'Constipation', 'Digestion', 'Diabetes'],
        price: 20,
    //     // inStock: Boolean
    },     {
        name: 'Banafsha',
        description: 'Sweet violet is sometimes applied directly to the skin for skin disorders and as a skin cleanser. In oilal combinations, sweet violet is used for breathing problems including sudden (acute) and ongoing (chronic) bronchitis, asthma, emphysema, “dust-damaged” lungs, swelling (inflammation) of the respiratory tract, cold and flu symptoms, hoarseness, cough, and chest congestion. These oilal combinations are also used for involuntary urination (incontinence) in older people, bed-wetting, irritable bladder, and prostate conditions.',
        img: 'banafsha.jpg',
        ailmentName: ['Inflammation', 'Insomnia', 'Heartburn', 'Gas', 'Hot Flashes', 'Depression', 'Irritability'],
        price: 20,
    //     // inStock: Boolean
    },   {
        name: 'Bentonite Clay',
        description: 'Healing clays like bentonite have a high concentration of minerals including silica, calcium, magnesium, sodium, iron, and potassium. It also absorbs and removes toxins, heavy metals, impurities, and chemicals. Because of this, bentonite clay is a common ingredient in detox and cleansing products. Common external uses include poultices, mud packs, detox baths, and skin care recipes. Some (including myself) even use it internally. It has an alkalizing effect on the body and when taken correctly, it can help balance gut bacteria.',
        img: 'clay.jpg',
        ailmentName: ['Digestion', 'Allergies', 'Detox', 'Oral Health', 'Speed Healing', 'Nausea', 'Cancer'],
        price: 20,
        // inStock: Boolean
    }, 
]

// oil.deleteMany()
oil.newOil(newOils)
  .then(oils => {
    console.log('Saved Oils', oils)
  })