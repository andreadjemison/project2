const sup = require('../api/sups.js')

let newSups = [
    {
        name: 'Black Seed Oil',
        description: 'Historically, black seed has been used for headache, toothache, nasal congestion, asthma, arthritis, and intestinal worms. It has also been used for "pink eye" (conjunctivitis), pockets of infection (abscesses), and parasites. Today, black seed is most commonly used for asthma, diabetes, hypertension, weight loss, and many other conditions. There is some scientific evidence to suggest that black seed might help boost the immune system, fight cancer, prevent pregnancy, reduce swelling, and lessen allergic reactions by acting as an antihistamine, but there isn\'t enough information in humans yet.',
        img: 'blackseedoil.jpg',
        ailmentName: ['Alzheimer\'s', 'Autism', 'Glaucoma', 'Dementia', 'Schizophrenia', 'Parkinson\'s', 'Diabetes', 'Cancer'],
        price: 20,
        // inStock: Boolean
    },    {
        name: 'Moringa Oil',
        description: 'The Moringa oil benefits are numerous. India’s ancient tradition of Ayurveda says that the properties in the various parts of the Moringa tree prevent 300 diseases. Modern science confirms the basic notion, as the leaves are packed with health promoting properties. Scientific research has proven that it has a very high nutritional value. Moringa contains 90 different types of nutrients, 46 antioxidants, proteins and 36 anti-inflammatory agents.',
        img: 'moringa.jpg',
        ailmentName: ['Moisturizer', 'Anti-Aging', 'Even Skin Tone', 'Stretch Marks', 'Inflammation', 'Dark Cirles', 'Sunburn', 'Dandruff'],
        price: 20,
        // inStock: Boolean
    },    {
        name: 'Colloidal Silver',
        description: 'Mixing silver powder with plants was used to help alleviate rabies, nosebleed and edema4 (swelling caused by trapped fluid in the body’s tissues). Colloidal silver was also used to help alleviate various health conditions and diseases such as epilepsy, stomach ulcer and mental illnesses. In the form of colloidal silver supplement, it’s known today as an alternative all-around germ fighter.',
        img: 'colloidalsilver.jpg',
        ailmentName: ['Oxidizer', 'Antibacterial', 'Pink-Eye', 'Antiviral', 'Inflammation', 'Sinusitis', 'Pneumonia', 'Flu'],
        price: 20,
        // inStock: Boolean
    },    {
        name: 'Oregano Oil',
        description: 'Oregano oil is a powerful, plant-derived essential oil that may rival antibiotics when it comes to treating or preventing various infections. In fact, it contains properties that are antibacterial, antiviral and antifungal.  And oregano essential oil is unlikely to cause many of the harmful side effects that are commonly attributed to high use of antibiotics — such as increased risk for antibiotic resistance, poor gut health due to destroying beneficial probiotic bacteria, reduced vitamin absorption and leaky gut syndrome due to damage of the GI tract’s lining.',
        img: 'oregano.jpg',
        ailmentName: ['Gingivitis', 'Yeast Infections', 'UTI', 'Bronchitis', 'Sinitus', 'Inflammation', 'Allergies', 'Parasites', 'Virus'],
        price: 20,
    //     // inStock: Boolean
    },    {
        name: 'Castor Oil',
        description: 'Castor Oil was used to treat eye irritations and as a powerful natural skin care remedy. Skin-healing, digestive-soothing, antibacterial properties. It\’s commonly used in traditional Ayurvedic medicine practices. At the first sign of illness, many parents and grandparents would immediately turn to giving their children castor oil either topically or internally to naturally boost immune function and speed up healing.',
        img: 'castoroil.jpg',
        ailmentName: ['Laxative', 'Moisturizer', 'Anti-Inflammatory', 'Acne', 'Anti-Fungal', 'Labor Inducer', 'Hair-Growth', 'Cramps', 'Styes', 'Diabetes'],
        price: 20,
    //     // inStock: Boolean
    // },    {
    //     name: 'Ginseng',
    //     description: 'Ginseng has been used in traditional Chinese medicine for centuries. This slow-growing, short plant with fleshy roots can be classified three ways, depending on how long it is grown: fresh, white or red.        Fresh ginseng is harvested before 4 years, while white ginseng is harvested between 4–6 years and red ginseng is harvested after 6 or more years.',
    //     img: 'ginseng.jpg',
    //     ailmentName: ['Inflammation', 'Brain Function', 'Erectile Dysfunction', 'Immune Boost', 'Cancer', 'Fatigue', 'Diabetes'],
    //     price: 20,
    //     // inStock: Boolean
    // },     {
    //     name: 'Sea Moss',
    //     description: 'Irish sea moss is a source of potassium chloride, a nutrient which helps to dissolve catarrhs (inflammation and phlegm in the mucous membranes), which cause congestion. It contains compounds which act as a natural antimicrobial and antiviral agents, helping to boost immunity and get rid of any infections.',
    //     img: 'seamoss.jpg',
    //     ailmentName: ['Cholesterol', 'Thyroid', 'Respiratory', 'Digestion', 'Pain Reliever', 'Skin', 'Tuberculosis'],
    //     price: 20,
    //     // inStock: Boolean
    // },     {
    //     name: 'Bladderwrack',
    //     description: 'Bladderwrack, like many sea plants, contains varying amounts of iodine, which is used to prevent or treat some thyroid disorders. Bladderwrack products may contain varying amounts of iodine, which makes it an inconsistent source of iodine. Bladderwrack also contains algin, which can act as a laxative to help the stool pass through the bowels.',
    //     img: 'bladderwrack.jpg',
    //     ailmentName: ['Inflammation', 'Brain Function', 'Erectile Dysfunction', 'Immune Boost', 'Cancer', 'Fatigue', 'Diabetes'],
    //     price: 20,
    //     // inStock: Boolean
    // },     {
    //     name: 'Echinacea',
    //     description: 'Echinacea is one of the most widely known sups in American folk supalism. Used extensively by traditional supalists and Native Americans alike in North America for generations, echinacea eventually gained popularity in Europe in the 1900\'s. One of its main uses is to support healthy immune function, although many of its historical uses were related to topical applications. It is now one of the most available dietary supplements in health food stores and continues to be a subject of many scientific studies investigating its immune support properties.',
    //     img: 'echinacea.jpg',
    //     ailmentName: ['Inflammation', 'Brain Function', 'Erectile Dysfunction', 'Immune Boost', 'Cancer', 'Fatigue', 'Diabetes'],
    //     price: 20,
    // //     // inStock: Boolean
    // },     {
    //     name: 'Turmeric',
    //     description: 'Turmeric is a spice that comes from the turmeric plant. It is commonly used in Asian food. You probably know turmeric as the main spice in curry. It has a warm, bitter taste and is frequently used to flavor or color curry powders, mustards, butters, and cheeses. But the root of turmeric is also used widely to make medicine. It contains a yellow-colored chemical called curcumin, which is often used to color foods and cosmetics. Turmeric is used for arthritis, heartburn (dyspepsia), joint pain, stomach pain, Crohn\'s disease and ulcerative colitis, bypass surgery, hemorrhage, diarrhea, intestinal gas, stomach bloating, loss of appetite, jaundice, liver problems, Helicobacter pylori (H. pylori) infection, stomach ulcers, irritable bowel syndrome (IBS), gallbladder disorders, high cholesterol, a skin condition called lichen planus, skin inflammation from radiation treatment, and fatigue. It is also used for headaches, bronchitis, colds, lung infections, hay fever, fibromyalgia, leprosy, fever, menstrual problems, itchy skin, recovery after surgery, and cancers. Other uses include depression, Alzheimer\'s disease, swelling in the middle layer of the eye (anterior uveitis), diabetes, water retention, worms, an autoimmune disease called systemic lupus erythematosus (SLE), tuberculosis, urinary bladder inflammation, and kidney problems. Some people apply turmeric to the skin for pain, ringworm, sprains and swellings, bruising, leech bites, eye infections, acne, inflammatory skin conditions and skin sores, soreness inside of the mouth, infected wounds, and gum disease.',
    //     img: 'turmeric.jpg',
    //     ailmentName: ['Arthritis', 'Heartburn', 'Crohn\'s', 'Ulcerative Colitis', 'Hemorrhage', 'Diarrhea', 'Alzheimer\'s'],
    //     price: 20,
    // //     // inStock: Boolean
    // },     {
    //     name: 'Mullein',
    //     description: 'An sup made from the flowers of the mullein plant is very commonly used to treat the pain and inflammation associated with earaches for children and adults alike. Mullein might even be able to fight influenza, herpes viruses and some bacteria that cause respiratory infections. <br> Traditional use of mullein in its various forms includes the treatment of bruises, burns, hemorrhoids and gout. Preparations of mullein can be ingested, applied topically and even smoked. In the Appalachia region of the United States, the plant has historically been used to treat colds and upper airway infections. Additionally, mullein leaves have been applied topically to soften and protect the skin.',
    //     img: 'mullein.jpg',
    //     ailmentName: ['Cough', 'Diarrhea', 'Antiseptic', 'Antiviral', 'Earaches', 'Mouth Ulcers', 'Sunburn', 'Postpartum Healing'],
    //     price: 15,
    //     // inStock: Boolean
    }, 
]

// sup.deleteMany()
sup.newSup(newSups)
  .then(sups => {
    console.log('Saved Supplements', sups)
  })