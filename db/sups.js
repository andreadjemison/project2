const sup = require('../api/sups.js')

let newSups = [
    {
        name: 'Black Seed Oil',
        description: 'Historically, black seed has been used for headache, toothache, nasal congestion, asthma, arthritis, and intestinal worms. It has also been used for "pink eye" (conjunctivitis), pockets of infection (abscesses), and parasites. Today, black seed is most commonly used for asthma, diabetes, hypertension, weight loss, and many other conditions. There is some scientific evidence to suggest that black seed might help boost the immune system, fight cancer, prevent pregnancy, reduce swelling, and lessen allergic reactions by acting as an antihistamine, but there isn\'t enough information in humans yet.',
        img: 'blackseedoil.jpg',
        ailmentName: ['Alzheimer\'s', 'Autism', 'Glaucoma', 'Dementia', 'Schizophrenia', 'Parkinson\'s', 'Diabetes', 'Cancer'],
        price: 2,
    }, {
        name: 'Castor Oil',
        description: 'Castor Oil was used to treat eye irritations and as a powerful natural skin care remedy. Skin-healing, digestive-soothing, antibacterial properties. It\’s commonly used in traditional Ayurvedic medicine practices. At the first sign of illness, many parents and grandparents would immediately turn to giving their children castor oil either topically or internally to naturally boost immune function and speed up healing.',
        img: 'castoroil.jpg',
        ailmentName: ['Laxative', 'Moisturizer', 'Anti-Inflammatory', 'Acne', 'Anti-Fungal', 'Labor Inducer', 'Hair-Growth', 'Cramps', 'Styes', 'Diabetes'],
        price: 1,
    }, {
        name: 'Colloidal Silver',
        description: 'Mixing silver powder with plants was used to help alleviate rabies, nosebleed and edema4 (swelling caused by trapped fluid in the body’s tissues). Colloidal silver was also used to help alleviate various health conditions and diseases such as epilepsy, stomach ulcer and mental illnesses. In the form of colloidal silver supplement, it’s known today as an alternative all-around germ fighter.',
        img: 'colloidalsilver.jpg',
        ailmentName: ['Oxidizer', 'Antibacterial', 'Pink-Eye', 'Antiviral', 'Inflammation', 'Sinusitis', 'Pneumonia', 'Flu'],
        price: 5,
    }, {
        name: 'Moringa Oil',
        description: 'The Moringa oil benefits are numerous. India’s ancient tradition of Ayurveda says that the properties in the various parts of the Moringa tree prevent 300 diseases. Modern science confirms the basic notion, as the leaves are packed with health promoting properties. Scientific research has proven that it has a very high nutritional value. Moringa contains 90 different types of nutrients, 46 antioxidants, proteins and 36 anti-inflammatory agents.',
        img: 'moringa.jpg',
        ailmentName: ['Moisturizer', 'Anti-Aging', 'Even Skin Tone', 'Stretch Marks', 'Inflammation', 'Dark Circles', 'Sunburn', 'Dandruff'],
        price: 12,
    }, {
        name: 'Oregano Oil',
        description: 'Oregano oil is a powerful, plant-derived essential oil that may rival antibiotics when it comes to treating or preventing various infections. In fact, it contains properties that are antibacterial, antiviral and antifungal.  And oregano essential oil is unlikely to cause many of the harmful side effects that are commonly attributed to high use of antibiotics — such as increased risk for antibiotic resistance, poor gut health due to destroying beneficial probiotic bacteria, reduced vitamin absorption and leaky gut syndrome due to damage of the GI tract’s lining.',
        img: 'oregano.jpg',
        ailmentName: ['Gingivitis', 'Yeast Infections', 'UTI', 'Bronchitis', 'Sinusitis', 'Inflammation', 'Allergies', 'Parasites', 'Virus'],
        price: 20,
    },
]

// sup.deleteMany()
sup.newSup(newSups)
    .then(sups => {
        console.log('Saved Supplements', sups)
    })