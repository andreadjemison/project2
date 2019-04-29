const ailment = require('../api/ailments.js')
// const ObjectId = mongoose.Schema.Types.ObjectId

let newAilments = [
    {
        ailmentName: 'Acne',
        description: 'Acne is a chronic, inflammatory skin condition that causes spots and pimples, especially on the face, shoulders, back, neck, chest, and upper arms.',
        img: 'acne.jpg',
        herbId: 'Acne',
        oilId: 'Acne',
        supId:  'Acne',
        //     // inStock: Boolean{
    }, {
        ailmentName: 'ADHD',
        description: 'ADHD is a disorder that makes it difficult for a person to pay attention and control impulsive behaviors. He or she may also be restless and almost constantly active. ADHD is not just a childhood disorder. Although the symptoms of ADHD begin in childhood, ADHD can continue through adolescence and adulthood.',
    img: 'adhd.jpg',
    herbId: 'ADHD',
    oilId: 'ADHD',
    supId:  'ADHD',
    //     // inStock: Boolean
    }, {
        ailmentName: 'Arthritis',
        description: 'Arthritis is inflammation of one or more of your joints. The main symptoms of arthritis are joint pain and stiffness, which typically worsen with age. ',
    img: 'arthritis.jpg',
    // herbId: [{
    //     ailmentName: `${herb.id}`,
    //       ref: 'Herb'
    //     }],
    // oilId: [{
    //     ailmentName: `${oil.id}`,
    //     ref: 'Oil'
    //   }],
    // supId:  [{
    //     ailmentName: `${sup.id}`,
    //     ref: 'Supplements'
    //   }],
    //     // inStock: Boolean
    }, {
        ailmentName: 'Allergies',
        description: 'Allergies occur when your immune system reacts to a foreign substance — such as pollen, bee venom or pet dander — or a food that doesn\'t cause a reaction in most people. Your immune system produces substances known as antibodies. When you have allergies, your immune system makes antibodies that identify a particular allergen as harmful, even though it isn\'t. When you come into contact with the allergen, your immune system\'s reaction can inflame your skin, sinuses, airways or digestive system.',
        img: 'allergies.gif',
        // herbId: [{
        //     ailmentName: `${herb.id}`,
        //       ref: 'Herb'
        //     }],
        // oilId: [{
        //     ailmentName: `${oil.id}`,
        //     ref: 'Oil'
        //   }],
        // supId:  [{
        //     ailmentName: `${sup.id}`,
        //     ref: 'Supplements'
        //   }],
    //     //     // inStock: Boolean
    }, {
        ailmentName: 'Alzheimer\'s',
        description: 'Sweet violet is sometimes applied directly to the skin for skin disorders and as a skin cleanser. In herbal combinations, sweet violet is used for breathing problems including sudden (acute) and ongoing (chronic) bronchitis, asthma, emphysema, “dust-damaged” lungs, swelling (inflammation) of the respiratory tract, cold and flu symptoms, hoarseness, cough, and chest congestion. These herbal combinations are also used for involuntary urination (incontinence) in older people, bed-wetting, irritable bladder, and prostate conditions.',
        img: 'alzheimer.jpg',
    //     ailmentName: [
    //         'Inflammation',
    //         'Insomnia',
    //         'Heartburn',
    //         'Gas',
    //         'Hot Flashes',
    //         'Depression',
    //         'Irritability'
    //     ],
    //     price: 20,
    //     //     // inStock: Boolean
    // }, {
    //     name: 'Anti-Aging',
    //     description: 'Healing clays like bentonite have a high concentration of minerals including silica, calcium, magnesium, sodium, iron, and potassium. It also absorbs and removes toxins, heavy metals, impurities, and chemicals. Because of this, bentonite clay is a common ingredient in detox and cleansing products. Common external uses include poultices, mud packs, detox baths, and skin care recipes. Some (including myself) even use it internally. It has an alkalizing effect on the body and when taken correctly, it can help balance gut bacteria.',
    //     img: 'clay.jpg',
    //     ailmentName: [
    //         'Digestion',
    //         'Allergies',
    //         'Detox',
    //         'Oral Health',
    //         'Speed Healing',
    //         'Nausea',
    //         'Cancer'
    //     ],
    //     price: 20,
    //     // inStock: Boolean
    //     }, {
    //         name: 'Bronchitis',
    //         description: 'Bladderwrack, like many sea plants, contains varying amounts of iodine, which is used to prevent or treat some thyroid disorders. Bladderwrack products may contain varying amounts of iodine, which makes it an inconsistent source of iodine. Bladderwrack also contains algin, which can act as a laxative to help the stool pass through the bowels.',
    //         img: 'bladderwrack.jpg',
    //         ailmentName: [
    //             'Inflammation',
    //             'Brain Function',
    //             'Erectile Dysfunction',
    //             'Immune Boost',
    //             'Cancer',
    //             'Fatigue',
    //             'Diabetes'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Boost Testorerone',
    //         description: 'Burdock root has been used for centuries in holistic medicine to treat a variety of different conditions. Traditionally, it was most commonly used as a diuretic and a digestive aid.',
    //         img: 'burdock.jpg',
    //         ailmentName: [
    //             'Diabetes',
    //             'Infections',
    //             'Blood Purifier',
    //             'Diuretic',
    //             'Cancer',
    //             'Inflammation'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Birth Control',
    //         description: 'Burdock root has been used for centuries in holistic medicine to treat a variety of different conditions. Traditionally, it was most commonly used as a diuretic and a digestive aid.',
    //         img: 'burdock.jpg',
    //         ailmentName: [
    //             'Diabetes',
    //             'Infections',
    //             'Blood Purifier',
    //             'Diuretic',
    //             'Cancer',
    //             'Inflammation'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Brain Booster',
    //         description: 'Burdock root has been used for centuries in holistic medicine to treat a variety of different conditions. Traditionally, it was most commonly used as a diuretic and a digestive aid.',
    //         img: 'burdock.jpg',
    //         ailmentName: [
    //             'Diabetes',
    //             'Infections',
    //             'Blood Purifier',
    //             'Diuretic',
    //             'Cancer',
    //             'Inflammation'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Blood Purifier',
    //         description: 'Activated charcoal is a fine black powder made from bone char, coconut shells, peat, petroleum coke, coal, olive pits or sawdust. The charcoal is activated by processing it at very high temperatures. The high temperatures change its internal structure, reducing the size of its pores and increasing its surface area.',
    //         img: 'charcoal.jpeg',
    //         ailmentName: [
    //             'Anti-Aging',
    //             'Cholesterol',
    //             'Detox',
    //             'Digestion',
    //             'Gas',
    //             'Gum Disease',
    //             'Heart Health',
    //             'Hangovers',
    //             'Toxin Remover',
    //             'Whiten Teeth'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Cancer',
    //         description: 'Chlorella is a single-cell green algae containing the green photosynthetic pigments chlorophyll-a and -b in its chloroplast.',
    //         img: 'chlorella.jpg',
    //         ailmentName: [
    //             'Cancer', 
    //             'detoxification', 
    //             'fibromyalgia', 
    //             'radiation treatment side effects', 
    //             'stimulates the immune system', 
    //             'colds', 
    //             'protecting the body against toxic metals', 
    //             'slowing the aging process'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Cholesterol',
    //         description: 'Chlorella is a single-cell green algae containing the green photosynthetic pigments chlorophyll-a and -b in its chloroplast.',
    //         img: 'chlorella.jpg',
    //         ailmentName: [
    //             'Cancer', 
    //             'detoxification', 
    //             'fibromyalgia', 
    //             'radiation treatment side effects', 
    //             'stimulates the immune system', 
    //             'colds', 
    //             'protecting the body against toxic metals', 
    //             'slowing the aging process'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Colds',
    //         description: 'Chlorella is a single-cell green algae containing the green photosynthetic pigments chlorophyll-a and -b in its chloroplast.',
    //         img: 'chlorella.jpg',
    //         ailmentName: [
    //             'Cancer', 
    //             'detoxification', 
    //             'fibromyalgia', 
    //             'radiation treatment side effects', 
    //             'stimulates the immune system', 
    //             'colds', 
    //             'protecting the body against toxic metals', 
    //             'slowing the aging process'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Chemical Imbalance',
    //         description: 'Echinacea is one of the most widely known herbs in American folk herbalism. Used extensively by traditional herbalists and Native Americans alike in North America for generations, echinacea eventually gained popularity in Europe in the 1900\'s. One of its main uses is to support healthy immune function, although many of its historical uses were related to topical applications. It is now one of the most available dietary supplements in health food stores and continues to be a subject of many scientific studies investigating its immune support properties.',
    //         img: 'echinacea.jpg',
    //         ailmentName: [
    //             'Inflammation', 
    //             'Brain Function', 
    //             'Erectile Dysfunction', 
    //             'Immune Boost', 
    //             'Cancer', 
    //             'Fatigue', 
    //             'Diabetes'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Diabetes',
    //         description: 'Ginseng has been used in traditional Chinese medicine for centuries. This slow-growing, short plant with fleshy roots can be classified three ways, depending on how long it is grown: fresh, white or red.        Fresh ginseng is harvested before 4 years, while white ginseng is harvested between 4–6 years and red ginseng is harvested after 6 or more years.',
    //         img: 'ginseng.jpg',
    //         ailmentName: [
    //             'Inflammation', 
    //             'Brain Function', 
    //             'Erectile Dysfunction', 
    //             'Immune Boost', 
    //             'Cancer', 
    //             'Fatigue', 
    //             'Diabetes'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Depression',
    //         description: 'As one of the three ingredients in the Ayurvedic super formula Triphala, haritaki (Terminalia chebula) is considered to be one of the best herbs for balancing vata dosha. Supporting the body\'s innate cleansing process, it gently removes accumulated natural toxins in the gastrointestinal tract. As a rejuvenative, it strengthens and nourishes the tissues and supports the proper function of the colon, lungs, liver, and spleen. Haritaki is traditionally used as a remedy for all vata-related imbalances. It maintains regular elimination, helps promote healthy body mass, and supports comfortable and complete digestion. Haritaki is highly revered in India, as it is believed to increase energy, intelligence, and awareness.',
    //         img: 'haritaki.jpg',
    //         ailmentName: [
    //             'ADHD', 
    //             'Cystic Fibrosis', 
    //             'Anti-Aging', 
    //             'Sexual Function', 
    //             'Constipation', 
    //             'Digestion', 
    //             'Diabetes'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Detoxification',
    //         description: 'Irish sea moss is a source of potassium chloride, a nutrient which helps to dissolve catarrhs (inflammation and phlegm in the mucous membranes), which cause congestion. It contains compounds which act as a natural antimicrobial and antiviral agents, helping to boost immunity and get rid of any infections.',
    //         img: 'seamoss.jpg',
    //         ailmentName: [
    //             'Cholesterol', 
    //             'Thyroid', 
    //             'Respiratory', 
    //             'Digestion', 
    //             'Pain Reliever', 
    //             'Skin', 
    //             'Tuberculosis'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Dandruff',
    //         description: 'Maca (Lepidium meyenii) is the root of a vegetable native to the Andes region of Peru. Known as "Peruvian ginseng" (even though it doesn\'t belong to the same botanical family as ginseng), maca is consumed as a food and is said to boost energy and libido.',
    //         img: 'maca.jpg',
    //         ailmentName: [
    //             'Sexual Function', 
    //             'Libido', 
    //             'Fertility', 
    //             'Depression', 
    //             'Chemical Balance'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Dementia',
    //         description: 'Mucuna\'s Pruriens contains a principle ingredient: L-Dopa, a naturally occurring amino acid which transforms into Dopamine in the Brain. Dopamine is a neurotransmitter which allows the dynamic functioning of the brain. Higher levels of Dopamine have been linked with sound sleep and an expanded sense of well-being. Mucuna has a reputation for reliably lifting mood and enhancing sexual function.',
    //         img: 'mucuna.jpg',
    //         ailmentName: [
    //             'Stress', 
    //             'ADHD', 
    //             'Depression', 
    //             'Fertility', 
    //             'Low Libido', 
    //             'Insomnia', 
    //             'Fatigue'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Diarrhea',
    //         description: 'An oil made from the flowers of the mullein plant is very commonly used to treat the pain and inflammation associated with earaches for children and adults alike. Mullein might even be able to fight influenza, herpes viruses and some bacteria that cause respiratory infections. <br> Traditional use of mullein in its various forms includes the treatment of bruises, burns, hemorrhoids and gout. Preparations of mullein can be ingested, applied topically and even smoked. In the Appalachia region of the United States, the plant has historically been used to treat colds and upper airway infections. Additionally, mullein leaves have been applied topically to soften and protect the skin.',
    //         img: 'mullein.jpg',
    //         ailmentName: [
    //             'Cough', 
    //             'Diarrhea', 
    //             'Antiseptic', 
    //             'Antiviral', 
    //             'Earaches', 
    //             'Mouth Ulcers', 
    //             'Sunburn', 
    //             'Postpartum Healing'
    //         ],
    //         price: 15,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Digestion',
    //         description: 'The primary purpose of neem leaves is the treatment of vaata disorders or neuromuscular pains. Then come the other benefits: purify the blood, prevent damage caused by free radicals in the body, remove toxins, treat insect bites and ulcers. Neem leaves have anti-bacterial properties which is why it works wonders on infections, burns and any kind of skin problems. It destroys the bacteria that causes infections, stimulates the immune system and encourages rapid healing. We tell you some benefits of neem.',
    //         img: 'neem.jpg',
    //         ailmentName: [
    //             'Inflammation', 
    //             'Detox', 
    //             'Antibacterial', 
    //             'Dandruff', 
    //             'Cancer', 
    //             'Acne', 
    //             'Oral Health', 
    //             'Malaria', 
    //             'Diabetes', 
    //             'Digestion', 
    //             'Birth Control'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Diuretic',
    //         description: 'Long used in traditional medicine, olive leaf extract comes from the leaves of the olive tree (Olea europaea) and has a variety of health benefits. Research shows oleuropein, the main component in olive leaf extract, has antioxidant, antibacterial, antimicrobial, anti-inflammatory, and immune-stimulating properties.',
    //         img: 'oliveleaf.jpg',
    //         ailmentName: ['Diabetes', 'High Blood Pressure', 'Viruses', 'Inflammation', 'Cancer', 'Alzheimers', 'Diabetes', 'Fatigue'],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Erectile Dysfunction',
    //         description: 'Rose hip is the fruit that develops from the blossoms of the wild rose plant. It ranges in color from orange to purplish black and usually develops in the latter part of the growing season, around late summer to autumn. A common ingredient in herbal teas, rose hip is also available in supplement and powdered forms. Rose hip contains a number of important antioxidants (including vitamin C, vitamin E, beta-carotene, and lycopene) that are beneficial to your health. Alternative practitioners also believe that rose hip can prevent or treat a wide range of gastrointestinal and inflammatory symptoms.',
    //         img: 'rosehips.jpg',
    //         ailmentName: [
    //             'Diarrhea', 
    //             'Constipation', 
    //             'Gallstones', 
    //             'Stretch Marks', 
    //             'UTI', 
    //             'Gout', 
    //             'Diabetes', 
    //             'Sciatica'
    //         ],
    //         price: 12,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Fibromyalgia',
    //         description: 'Spirulina is a natural “algae” (cyanbacteria) powder that is incredibly high in protein and a good source of antioxidants, B-vitamins and other nutrients. When harvested correctly from non-contaminated ponds and bodies of water, it is one of the most potent nutrient sources available.',
    //         img: 'spirulina.jpg',
    //         ailmentName: [
    //             'erectile dysfunction', 
    //             'low libido', 
    //             'depression', 
    //             'hair loss', 
    //             'menopause'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Flu',
    //         description: 'Turmeric is a spice that comes from the turmeric plant. It is commonly used in Asian food. You probably know turmeric as the main spice in curry. It has a warm, bitter taste and is frequently used to flavor or color curry powders, mustards, butters, and cheeses. But the root of turmeric is also used widely to make medicine. It contains a yellow-colored chemical called curcumin, which is often used to color foods and cosmetics. Turmeric is used for arthritis, heartburn (dyspepsia), joint pain, stomach pain, Crohn\'s disease and ulcerative colitis, bypass surgery, hemorrhage, diarrhea, intestinal gas, stomach bloating, loss of appetite, jaundice, liver problems, Helicobacter pylori (H. pylori) infection, stomach ulcers, irritable bowel syndrome (IBS), gallbladder disorders, high cholesterol, a skin condition called lichen planus, skin inflammation from radiation treatment, and fatigue. It is also used for headaches, bronchitis, colds, lung infections, hay fever, fibromyalgia, leprosy, fever, menstrual problems, itchy skin, recovery after surgery, and cancers. Other uses include depression, Alzheimer\'s disease, swelling in the middle layer of the eye (anterior uveitis), diabetes, water retention, worms, an autoimmune disease called systemic lupus erythematosus (SLE), tuberculosis, urinary bladder inflammation, and kidney problems. Some people apply turmeric to the skin for pain, ringworm, sprains and swellings, bruising, leech bites, eye infections, acne, inflammatory skin conditions and skin sores, soreness inside of the mouth, infected wounds, and gum disease.',
    //         img: 'turmeric.jpg',
    //         ailmentName: [
    //             'Arthritis', 
    //             'Heartburn', 
    //             'Crohn\'s', 
    //             'Ulcerative Colitis', 
    //             'Hemorrhage', 
    //             'Diarrhea', 
    //             'Alzheimer\'s'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //             }, {
    //         name: 'Fatigue',
    //         description: 'Bladderwrack, like many sea plants, contains varying amounts of iodine, which is used to prevent or treat some thyroid disorders. Bladderwrack products may contain varying amounts of iodine, which makes it an inconsistent source of iodine. Bladderwrack also contains algin, which can act as a laxative to help the stool pass through the bowels.',
    //         img: 'bladderwrack.jpg',
    //         ailmentName: [
    //             'Inflammation',
    //             'Brain Function',
    //             'Erectile Dysfunction',
    //             'Immune Boost',
    //             'Cancer',
    //             'Fatigue',
    //             'Diabetes'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Fertility',
    //         description: 'Burdock root has been used for centuries in holistic medicine to treat a variety of different conditions. Traditionally, it was most commonly used as a diuretic and a digestive aid.',
    //         img: 'burdock.jpg',
    //         ailmentName: [
    //             'Diabetes',
    //             'Infections',
    //             'Blood Purifier',
    //             'Diuretic',
    //             'Cancer',
    //             'Inflammation'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Hair-Growth',
    //         description: 'Burdock root has been used for centuries in holistic medicine to treat a variety of different conditions. Traditionally, it was most commonly used as a diuretic and a digestive aid.',
    //         img: 'burdock.jpg',
    //         ailmentName: [
    //             'Diabetes',
    //             'Infections',
    //             'Blood Purifier',
    //             'Diuretic',
    //             'Cancer',
    //             'Inflammation'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Inflammation',
    //         description: 'Burdock root has been used for centuries in holistic medicine to treat a variety of different conditions. Traditionally, it was most commonly used as a diuretic and a digestive aid.',
    //         img: 'burdock.jpg',
    //         ailmentName: [
    //             'Diabetes',
    //             'Infections',
    //             'Blood Purifier',
    //             'Diuretic',
    //             'Cancer',
    //             'Inflammation'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Immune Booster',
    //         description: 'Activated charcoal is a fine black powder made from bone char, coconut shells, peat, petroleum coke, coal, olive pits or sawdust. The charcoal is activated by processing it at very high temperatures. The high temperatures change its internal structure, reducing the size of its pores and increasing its surface area.',
    //         img: 'charcoal.jpeg',
    //         ailmentName: [
    //             'Anti-Aging',
    //             'Cholesterol',
    //             'Detox',
    //             'Digestion',
    //             'Gas',
    //             'Gum Disease',
    //             'Heart Health',
    //             'Hangovers',
    //             'Toxin Remover',
    //             'Whiten Teeth'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Labor Inducer',
    //         description: 'Chlorella is a single-cell green algae containing the green photosynthetic pigments chlorophyll-a and -b in its chloroplast.',
    //         img: 'chlorella.jpg',
    //         ailmentName: [
    //             'Cancer', 
    //             'detoxification', 
    //             'fibromyalgia', 
    //             'radiation treatment side effects', 
    //             'stimulates the immune system', 
    //             'colds', 
    //             'protecting the body against toxic metals', 
    //             'slowing the aging process'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Low-Libido',
    //         description: 'Chlorella is a single-cell green algae containing the green photosynthetic pigments chlorophyll-a and -b in its chloroplast.',
    //         img: 'chlorella.jpg',
    //         ailmentName: [
    //             'Cancer', 
    //             'detoxification', 
    //             'fibromyalgia', 
    //             'radiation treatment side effects', 
    //             'stimulates the immune system', 
    //             'colds', 
    //             'protecting the body against toxic metals', 
    //             'slowing the aging process'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Menopause',
    //         description: 'Chlorella is a single-cell green algae containing the green photosynthetic pigments chlorophyll-a and -b in its chloroplast.',
    //         img: 'chlorella.jpg',
    //         ailmentName: [
    //             'Cancer', 
    //             'detoxification', 
    //             'fibromyalgia', 
    //             'radiation treatment side effects', 
    //             'stimulates the immune system', 
    //             'colds', 
    //             'protecting the body against toxic metals', 
    //             'slowing the aging process'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Men Fertility',
    //         description: 'Echinacea is one of the most widely known herbs in American folk herbalism. Used extensively by traditional herbalists and Native Americans alike in North America for generations, echinacea eventually gained popularity in Europe in the 1900\'s. One of its main uses is to support healthy immune function, although many of its historical uses were related to topical applications. It is now one of the most available dietary supplements in health food stores and continues to be a subject of many scientific studies investigating its immune support properties.',
    //         img: 'echinacea.jpg',
    //         ailmentName: [
    //             'Inflammation', 
    //             'Brain Function', 
    //             'Erectile Dysfunction', 
    //             'Immune Boost', 
    //             'Cancer', 
    //             'Fatigue', 
    //             'Diabetes'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Parkinson\'s',
    //         description: 'Ginseng has been used in traditional Chinese medicine for centuries. This slow-growing, short plant with fleshy roots can be classified three ways, depending on how long it is grown: fresh, white or red.        Fresh ginseng is harvested before 4 years, while white ginseng is harvested between 4–6 years and red ginseng is harvested after 6 or more years.',
    //         img: 'ginseng.jpg',
    //         ailmentName: [
    //             'Inflammation', 
    //             'Brain Function', 
    //             'Erectile Dysfunction', 
    //             'Immune Boost', 
    //             'Cancer', 
    //             'Fatigue', 
    //             'Diabetes'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Schizophrenia',
    //         description: 'As one of the three ingredients in the Ayurvedic super formula Triphala, haritaki (Terminalia chebula) is considered to be one of the best herbs for balancing vata dosha. Supporting the body\'s innate cleansing process, it gently removes accumulated natural toxins in the gastrointestinal tract. As a rejuvenative, it strengthens and nourishes the tissues and supports the proper function of the colon, lungs, liver, and spleen. Haritaki is traditionally used as a remedy for all vata-related imbalances. It maintains regular elimination, helps promote healthy body mass, and supports comfortable and complete digestion. Haritaki is highly revered in India, as it is believed to increase energy, intelligence, and awareness.',
    //         img: 'haritaki.jpg',
    //         ailmentName: [
    //             'ADHD', 
    //             'Cystic Fibrosis', 
    //             'Anti-Aging', 
    //             'Sexual Function', 
    //             'Constipation', 
    //             'Digestion', 
    //             'Diabetes'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Sinusitis',
    //         description: 'Irish sea moss is a source of potassium chloride, a nutrient which helps to dissolve catarrhs (inflammation and phlegm in the mucous membranes), which cause congestion. It contains compounds which act as a natural antimicrobial and antiviral agents, helping to boost immunity and get rid of any infections.',
    //         img: 'seamoss.jpg',
    //         ailmentName: [
    //             'Cholesterol', 
    //             'Thyroid', 
    //             'Respiratory', 
    //             'Digestion', 
    //             'Pain Reliever', 
    //             'Skin', 
    //             'Tuberculosis'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Thyroid',
    //         description: 'Maca (Lepidium meyenii) is the root of a vegetable native to the Andes region of Peru. Known as "Peruvian ginseng" (even though it doesn\'t belong to the same botanical family as ginseng), maca is consumed as a food and is said to boost energy and libido.',
    //         img: 'maca.jpg',
    //         ailmentName: [
    //             'Sexual Function', 
    //             'Libido', 
    //             'Fertility', 
    //             'Depression', 
    //             'Chemical Balance'
    //         ],
    //         price: 20,
    //         // inStock: Boolean
    //     }, {
    //         name: 'Tuberculosis',
    //         description: 'Mucuna\'s Pruriens contains a principle ingredient: L-Dopa, a naturally occurring amino acid which transforms into Dopamine in the Brain. Dopamine is a neurotransmitter which allows the dynamic functioning of the brain. Higher levels of Dopamine have been linked with sound sleep and an expanded sense of well-being. Mucuna has a reputation for reliably lifting mood and enhancing sexual function.',
    //         img: 'mucuna.jpg',
    //         ailmentName: [
    //             'Stress', 
    //             'ADHD', 
    //             'Depression', 
    //             'Fertility', 
    //             'Low Libido', 
    //             'Insomnia', 
    //             'Fatigue'
    //         ],
    //         price: 20,
    //         //     // inStock: Boolean
    //     }, {
    //         name: 'Yeast Infections',
    //         description: 'An oil made from the flowers of the mullein plant is very commonly used to treat the pain and inflammation associated with earaches for children and adults alike. Mullein might even be able to fight influenza, herpes viruses and some bacteria that cause respiratory infections. <br> Traditional use of mullein in its various forms includes the treatment of bruises, burns, hemorrhoids and gout. Preparations of mullein can be ingested, applied topically and even smoked. In the Appalachia region of the United States, the plant has historically been used to treat colds and upper airway infections. Additionally, mullein leaves have been applied topically to soften and protect the skin.',
    //         img: 'mullein.jpg',
    //         ailmentName: [
    //             'Cough', 
    //             'Diarrhea', 
    //             'Antiseptic', 
    //             'Antiviral', 
    //             'Earaches', 
    //             'Mouth Ulcers', 
    //             'Sunburn', 
    //             'Postpartum Healing'
    //         ],
    //         price: 15,
            //     // inStock: Boolean
    },
]

// for(let i=0; i<herbApi.allHerbs().length; i++){
//     console.log(herbApi.allHerbs().length)
//     if (ailment.ailmentName === herb.ailmentName){
//       return herbCollection.find()
//     }

//   }


// ailment.deleteMany()
ailment.newAilment(newAilments)
    .then(ailments => {
        console.log('Saved Ailments', ailments)
    })