let oil = require('../api/herbs.js')

let newOils = [
    {
        name: 'Bergamot',
        description: 'Bergamot oil is known for its calming effects, but it may also encourage a healthy body weight and help with vascular and heart health. Researchers aren’t yet sure how, but bergamot oil encourages normal cholesterol levels and blood sugar.',
        img: 'bergamot.jpg',
        ailmentName: [
            'Depression',
            'Anxiety',
            'Anti-Fungal',
            'Anti-Bacterial',
            'Cancer',
            'Menstruation',
            'Diabetes'
        ],
        price: 20,
    }, {
        name: 'Blue Chamomile',
        description: 'Chamomile has been used therapeutically for thousands of years by Greeks, Romans, and Egyptians to remedy everything from skin conditions and injuries to fever and insomnia. As a traditional medicine, blue chamomile oil may help with eczema, wounds, bruises, burns, canker sores, mastitis, and other conditions.',
        img: 'bluechamomile.png',
        ailmentName: [
            'Nervous System Booster',
            'Gas Reliever',
            'Pain Reliever',
            'Digestion',
            'Depression',
            'Boost Testosterone',
            'High Blood Pressure',
            'Inflammation'
        ],
        price: 20,
    }, {
        name: 'Chamomile',
        description: 'Chamomile is a powerful calming agent, as well as antibiotic, antiseptic, antidepressant and overall mood lifter. The German variety is often better suited to battle inflammation, specifically urinary tract and digestive inflammation. Both also have analgesic properties and can help to eliminate acne. ',
        img: 'chamomile.jpg',
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
        price: 20,
    }, {
        name: 'Copaiba',
        description: 'Copaiba oil contains copalic acid, which seems to halt the growth of common, but harmful, dental bacteria such as Streptococcus pyogenus, Streptococcus salivarius, and Streptococcus mutagens.Copaiba oil also has strong anti-inflammatory effects. Copaiba oil also helps prevent or alleviate swelling in the body.',
        img: 'copaiba.jpg',
        ailmentName: [
            'Kidney Health',
            'Anxiety',
            'Anti-Oxidant',
            'Sinusitis',
            'Lung Health',
            'Inflammation',
            'High-Blood Pressure'
        ],
        price: 20,
    }, {
        name: 'Eucalyptus',
        description: 'It\s best used for sore throats, cough, seasonal allergies and headaches. Eucalyptus oil benefits are due to its ability to stimulate immunity, provide antioxidant protection and improve respiratory circulation. You can disinfect your home naturally, or repel rats that are managing to get inside.',
        img: 'eucalyptus.jpg',
        ailmentName: [
            'Asthma',
            'Bronchitis',
            'Sinusitis',
            'Flu',
            'Allergies',
            'Inflammation',
            'Mental Clarity'
        ],
        price: 20,
    }, {
        name: 'Frankincense',
        description: 'Its popularity is not simply because of its aroma; frankincense actually helps promote youthful, healthy skin. Mixing the essential oil with liquids (especially distilled water) can yield a fragrant, spray-on skin toner. You can combine frankincense oil can with other products to impart its health-supporting properties.',
        img: 'frankincense.jpeg',
        ailmentName: [
            'Immune Booster',
            'Oral Health',
            'Astringent',
            'Menstruation',
            'Gas Releiver',
            'Digestion',
            'Cancer',
            'Anti-Aging',
            'Diuretic',
            'Stress',
        ],
        price: 20,
    }, {
        name: 'Ginger',
        description: 'The health benefits of ginger essential oil are nearly identical to the medicinal health benefits of fresh ginger; in fact, the most potent form of ginger is the essential oil because it contains the highest levels of gingerol. The essential oil is the best way to use ginger as medicine. It can be taken internally to treat health conditions or rubbed topically with a carrier oil on an area of pain. Today, ginger essential oil is used to treat nausea, upset stomach, menstrual disorders, inflammation and respiratory conditions. When used as aromatherapy, it’s also known to bring on feelings of courageousness and self-assurance, which is why it’s known as the oil of empowerment.',
        img: 'ginger.jpeg',
        ailmentName: [
            'cancer prevention',
            'detoxification',
            'fibromyalgia',
            'radiation treatment side effects',
            'stimulates the immune system',
            'colds',
            'protecting the body against toxic metals',
            'slowing the aging process'
        ],
        price: 20,
    }, {
        name: 'Jasmine',
        description: 'Jasmine has been known to ease depression and childbirth, in addition to enhance libido. Its great for respiratory problems, addiction issues, and reducing tension and stress. ',
        img: 'jasmine.jpg',
        ailmentName: [
            'Inflammation',
            'Brain Function',
            'Erectile Dysfunction',
            'Immune Boost',
            'Cancer',
            'Fatigue',
            'Diabetes'
        ],
        price: 20,
    }, {
        name: 'Jojoba',
        description: 'Jojoba oil is not a volatile oil, but still offers plenty of benefits, primarily to the skin. Researchers found that jojoba oil accelerates the closure of wounds at a cellular level. To improve skin appearance and reduce acne, incorporate jojoba oil into your skincare routine.',
        img: 'jojoba.jpg',
        ailmentName: [
            'Moisturizer',
            'Anti-Aging',
            'Acne',
            'Cracked Heels',
            'Dark Circles',
            'Stretch Marks',
            'Oral Health',
            'Hair-Growth',
            'Anti-Oxidant',
            'Eczema',
        ],
        price: 20,
    }, {
        name: 'Lavender',
        description: ' It appears to slow the activity of the central nervous system, improve sleep quality, promote better concentration, and help encourage hair regrowth in those suffering from alopecia areata, a type of hair loss.',
        img: 'lavender.jpg',
        ailmentName: [
            'Sunburn',
            'Stress',
            'Anxiety',
            'Lung Health',
            'Insomnia',
            'Acne',
            'Anti-Bacterial',
            'Pain Releiver',
            'Bug Repellent',
            'Digestion',
            'Cancer',
        ],
        price: 15,
    }, {
        name: 'Lemon',
        description: 'Lemon oil is a multifaceted essential oil. It helps with everything from skin irritation to digestion to circulation problems. It is a natural immunity booster and can even help reduce cellulite! Lemon oil helps to alleviate headaches and fever, and is a quick mood enhancer. ',
        img: 'lemon.jpg',
        ailmentName: [
            'Inflammation',
            'Brain Function',
            'Erectile Dysfunction',
            'Immune Boost',
            'Cancer',
            'Fatigue',
            'Diabetes'
        ],
        price: 20,
    }, {
        name: 'Marjoram',
        description: 'One of this essential oils therapeutic properties is to calm hyperactivity and relieve anxiety. Marjoram was a popular plant used by the Greeks in medicines and also helps with digestion issues such as constipation and cramps. ',
        img: 'marjoram.jpg',
        ailmentName: [
            'Sexual Function',
            'Libido',
            'Fertility',
            'Depression',
            'Chemical Balance'
        ],
        price: 20,
    }, {
        name: 'Neroli',
        description: 'Neroli oil is commonly added to diet pills due to it\'s ability to act as an appetite suppressant. One of the major benefits of Neroli oil is that it helps relieve symptoms associated with menopause and stress. It also boosts the actions of the endocrine system, fights harmful organisms, and soothes irritation.',
        img: 'neroli.jpg',
        ailmentName: [
            'Aphrodisiac',
            'Infections',
            'Sedative',
            'Deodorant',
            'Libido',
            'Cholera',
            'Digestion'
        ],
        price: 20,
    }, {
        name: 'Patchouli',
        description: 'Patchouli serves as a powerful skin care agent; it even promotes skin cell growth when applied directly to the skin. Patchouli helps to relieve anxiety, depression, fatigue, curb addiction, reduce cellulite and bloating. ',
        img: 'patchouli.png',
        ailmentName: [
            'Diabetes',
            'Infections',
            'Blood Purifier',
            'Diuretic',
            'Cancer',
            'Inflammation'
        ],
        price: 20,
    }, {
        name: 'Peppermint',
        description: 'Peppermint has a number of therapeutic properties. It is a cooling agent that enhances mood, sharpens focus, combats irritation and redness, alleviates symptoms of congestion, and aids in digestion.',
        img: 'peppermint.jpeg',
        ailmentName: [
            'erectile dysfunction',
            'low libido',
            'depression',
            'hair loss',
            'menopause'
        ],
        price: 20,
    }, {
        name: 'Pomegranate',
        description: 'Pomegranate oil is exceptionally rich in linolenic acid, an essential fatty acid. Animal research suggests pomegranate oil may even delay the development of colon cancer and skin cancer. The oil also enhances the immune system.',
        img: 'pomegranate.jpeg',
        ailmentName: [
            'Inflammation',
            'Anti-Oxidant',
            'Anti-Aging',
            'Oral Health',
            'Heart Health',
            'Acne',
            'Immune Booster',
            'Diabetes',
            'Cancer'
        ],
        price: 20,
    }, {
        name: 'Rose',
        description: 'Rose hip is the fruit that develops from the blossoms of the wild rose plant. It ranges in color from orange to purplish black and usually develops in the latter part of the growing season, around late summer to autumn. A common ingredient in oilal teas, rose hip is also available in supplement and powdered forms. Rose hip contains a number of important antioxidants (including vitamin C, vitamin E, beta-carotene, and lycopene) that are beneficial to your health. Alternative practitioners also believe that rose hip can prevent or treat a wide range of gastrointestinal and inflammatory symptoms.',
        img: 'rose.jpg',
        ailmentName: [
            'Depression',
            'Aphrodisiac',
            'Anti-Viral',
            'Inflammation',
            'Blood Purifier',
            'Cancer',
            'Menstruation',
            'Anti-Aging',
            'Liver Health'
        ],
        price: 12,
    }, {
        name: 'Tea Tree',
        description: ' Not only is it a natural immune booster, but it also fights all three kinds of infection. It works to heal skin conditions, burns and cuts, and also works as an insecticide. In addition, it helps to soothe and treat cold sores, respiratory conditions, muscle aches, the flu, Athletes foot and dandruff. Its uses are vast and its healing power is quick.',
        img: 'teatree.jpg',
        ailmentName: [
            'Cholesterol',
            'Thyroid',
            'Respiratory',
            'Digestion',
            'Pain Reliever',
            'Skin',
            'Tuberculosis'
        ],
        price: 20,
    }, {
        name: 'Ylang Ylang',
        description: 'In aromatherapy, inhaling the aroma of ylang ylang essential oil (or absorbing ylang ylang essential oil through the skin) is thought to transmit messages to a brain region involved in controlling emotions. Known as the limbic system, this brain region also influences the nervous system. Aromatherapy proponents suggest that essential oils may affect a number of biological factors, including heart rate, stress levels, blood pressure, breathing, and immune function.',
        img: 'ylang.jpg',
        ailmentName: [
            'Anxiety',
            'Athlete\'s Foot',
            'Colds',
            'Cough',
            'Depression',
            'Insomnia',
            'Sinusitis'
        ],
        price: 20,
    },
]

// oil.deleteMany()
oil.newOil(newOils)
    .then(oils => {
        console.log('Saved Oils', oils)
    })