/* ================================================
   BEST OF TASTE / RESTO SOUP - MAIN APPLICATION LOGIC
   WITH FULL MULTILINGUAL SUPPORT (ENGLISH, BADINI, SORANI, ARABIC)
   ================================================ */

(function () {
    'use strict';

    // ================================================
    // TRANSLATIONS DICTIONARY
    // ================================================
    const TRANSLATIONS = {
        English: {
            dir: 'ltr',
            restoSubtitle: 'Resto Soup & Dining',
            chooseDishes: 'Choose Dishes',
            searchPlaceholder: 'Search food, coffee, soup...',
            sortDefault: 'Line up (Default)',
            sortLow: 'Price: Low to High',
            sortHigh: 'Price: High to Low',
            sortRating: 'Top Rated',
            allDishes: 'All Dishes',
            hotDishes: 'Hot Dishes',
            coldDishes: 'Cold Dishes',
            soup: 'Soup',
            grill: 'Grill',
            appetizer: 'Appetizer',
            dessert: 'Dessert',
            drinks: 'Drinks',
            bowlsAvailable: 'Bowls available',
            popular: 'Popular',
            spicy: 'Spicy',
            price: 'Price',
            addToCart: 'Add to Cart',
            fullMenuHeader: 'Our Full Gourmet Menu',
            fullMenuTitle: 'Taste the Masterpiece',
            fullMenuDesc: 'Prepared daily using wild ingredients, wood-fired applewood smoke, and authentic spices.',
            shoppingCart: 'Your Shopping Cart',
            emptyCart: 'Your cart is currently empty',
            emptyCartDesc: 'Explore our dishes and order fresh meals!',
            subtotal: 'Subtotal',
            deliveryTax: 'Delivery & Tax (5%)',
            total: 'Total',
            checkout: 'Proceed to Checkout',
            bookTable: 'Book Table',
            home: 'Home',
            menu: 'Menu',
            aboutUs: 'About Us',
            contact: 'Contact',
            selectLanguage: 'Select Language',
            poweredBy: 'Powered by',
            addedToCart: 'Added to cart!',
            langChanged: 'Language updated to',
        },
        Badini: {
            dir: 'rtl',
            restoSubtitle: 'چێشتخانا باشترین تام',
            chooseDishes: 'خوارنان هه‌لبژێره‌',
            searchPlaceholder: 'ل خوارنێ، ئاڤێ یا قه‌هوێ بگه‌ڕیا...',
            sortDefault: 'به‌رده‌وام (ئیفتیراضی)',
            sortLow: 'بها: ژ كێم بۆ زێده‌',
            sortHigh: 'بها: ژ زێده‌ بۆ كێم',
            sortRating: 'بلندترین قه‌در',
            allDishes: 'هه‌می خوارن',
            hotDishes: 'خوارنێن گرم',
            coldDishes: 'خوارنێن سارد',
            soup: 'شوربه‌',
            grill: 'كه‌باب و گۆشت',
            appetizer: 'مقبلات',
            dessert: 'شریناهی',
            drinks: 'ڤه‌خوارن',
            bowlsAvailable: 'مایینه‌',
            popular: 'ناڤدار',
            spicy: 'تژار',
            price: 'بها',
            addToCart: 'زێده‌كره‌ سه‌بته‌ئێ',
            fullMenuHeader: 'قائیما مه‌ یا كامل',
            fullMenuTitle: 'تام بكه‌ ژ چێشتێن مه‌',
            fullMenuDesc: 'رۆژانه‌ ب گۆشت و كه‌سكێت تازه‌ دهێته‌ دروستكرن ب باشترین ئاگرێ دارا.',
            shoppingCart: 'سه‌بتا ته‌ یا خوارنێ',
            emptyCart: 'سه‌بتا ته‌ یا ڤالا دایه‌',
            emptyCartDesc: 'خوارنه‌كێ هه‌لبژێره‌ دا بۆ ته‌ بگهینین!',
            subtotal: 'كۆمێ گشتی',
            deliveryTax: 'گه‌هاندن و باج (5%)',
            total: 'كۆم',
            checkout: 'داواكاریێ ته‌مام بكه‌',
            bookTable: 'مێزێ حجز بكه‌',
            home: 'سه‌ره‌كی',
            menu: 'مێنیو',
            aboutUs: 'ده‌ربارێ مه‌',
            contact: 'په‌یوه‌ندی',
            selectLanguage: 'زمانى هه‌لبژێره‌',
            poweredBy: 'دروستكرن ژلایێ',
            addedToCart: 'زێده‌بوو بۆ سه‌بتا كڕینێ!',
            langChanged: 'زمان هاته‌ گوهرین بۆ',
        },
        Sorani: {
            dir: 'rtl',
            restoSubtitle: 'چێشتخانەی باشترین تام',
            chooseDishes: 'خواردنەکان هەڵبژێرە',
            searchPlaceholder: 'گەڕان بۆ خواردن، قاوە، سوپ...',
            sortDefault: 'ئاسایی (بنەڕەتی)',
            sortLow: 'نرخ: لە کەمەوە بۆ زۆر',
            sortHigh: 'نرخ: لە زۆرەوە بۆ کەم',
            sortRating: 'بەرزترین پلەبەند',
            allDishes: 'هەموو خواردنەکان',
            hotDishes: 'خواردنی گەرم',
            coldDishes: 'خواردنی سارد',
            soup: 'سوپ و شۆربا',
            grill: 'گۆشتی برژاو',
            appetizer: 'مەقبلات',
            dessert: 'شیرینی',
            drinks: 'خواردنەوەکان',
            bowlsAvailable: 'دەستدەکەوێت',
            popular: 'بەناوبانگ',
            spicy: 'تیژ',
            price: 'نرخ',
            addToCart: 'زیادکردن بۆ سەبەتە',
            fullMenuHeader: 'مێنیوی تەواوی ئێمە',
            fullMenuTitle: 'تامی باشترین خواردن بکە',
            fullMenuDesc: 'ڕۆژانە بە سەوزەواتی تازە و گۆشتی بێگەرد دروست دەکرێت.',
            shoppingCart: 'سەبەتەی کڕینەکانت',
            emptyCart: 'سەبەتەکەت بەتاڵە',
            emptyCartDesc: 'خواردنێک هەڵبژێرە تا بۆت بنێرین!',
            subtotal: 'کۆی گشتی',
            deliveryTax: 'گەیاندن و باج (5%)',
            total: 'کۆ',
            checkout: 'داواکاری تەواو بکە',
            bookTable: 'داواکردنی مێز',
            home: 'سەرەکی',
            menu: 'مێنیو',
            aboutUs: 'دەربارەی ئێمە',
            contact: 'پەیوەندی',
            selectLanguage: 'زمان هەڵبژێرە',
            poweredBy: 'دروستکراوە لەلایەن',
            addedToCart: 'زیادکرا بۆ سەبەتە!',
            langChanged: 'زمان گۆڕدرا بۆ',
        },
        Arabic: {
            dir: 'rtl',
            restoSubtitle: 'مطعم أطيب المأكولات',
            chooseDishes: 'اختر الوجبات',
            searchPlaceholder: 'إبحث عن الوجبات، الحساب، الحساء...',
            sortDefault: 'الافتراضي',
            sortLow: 'السعر: من الأقل للأعلى',
            sortHigh: 'السعر: من الأعلى للأقل',
            sortRating: 'الأعلى تقييماً',
            allDishes: 'جميع الوجبات',
            hotDishes: 'أطباق ساخنة',
            coldDishes: 'أطباق باردة',
            soup: 'حساء وشوربة',
            grill: 'مشويات عل الفحم',
            appetizer: 'مقبلات',
            dessert: 'حلويات',
            drinks: 'مشروبات',
            bowlsAvailable: 'وجبة متوفرة',
            popular: 'الأكثر طلباً',
            spicy: 'حار',
            price: 'السعر',
            addToCart: 'إضافة للسلة',
            fullMenuHeader: 'قائمة الطعام الكاملة',
            fullMenuTitle: 'تذوق روائع طهاتنا',
            fullMenuDesc: 'تُحضر يومياً بأجود المكونات الطازجة والمطهوة على حطب التفاح.',
            shoppingCart: 'سلة المشتريات',
            emptyCart: 'سلتك فارغة حالياً',
            emptyCartDesc: 'استكشف أطباقنا واطلب وجبتك الآن!',
            subtotal: 'المجموع الفرعي',
            deliveryTax: 'التوصيل والضريبة (5%)',
            total: 'المجموع الكلي',
            checkout: 'إتمام الطلب',
            bookTable: 'حجز طاولة',
            home: 'الرئيسية',
            menu: 'القائمة',
            aboutUs: 'من نحن',
            contact: 'تواصل معنا',
            selectLanguage: 'اختر اللغة',
            poweredBy: 'تم التطوير بواسطة',
            addedToCart: 'تمت الإضافة إلى السلة!',
            langChanged: 'تم تغيير اللغة إلى',
        }
    };

    // ================================================
    // MULTILINGUAL DISHES DATASET
    // ================================================
    const DISHES_DATA = [
        {
            id: 1,
            category: "soup",
            price: 2.49,
            available: 20,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop",
            spicy: true,
            popular: true,
            name: {
                English: "Spicy seasoned seafood noodles",
                Badini: "نودلزێن ده‌ریایی ب بهاراتێن تژار",
                Sorani: "نودڵزی دەریا بە بەهاراتی تیژ",
                Arabic: "نودلز المأكولات البحرية الحارة"
            },
            desc: {
                English: "Rich spicy broth, tiger prawns, handmade ramen noodles, scallions & soft boiled egg.",
                Badini: "مڕقێ تژار، ڕوبیانێت مەزن، نودلزێت دەستی، پیازێن کەسک و هێکا کەلاندی.",
                Sorani: "سوپی تیژ، ڕوبیانی گەورە، نودڵزی دەستساز، پیازی سەوز و هێلکەی کوڵاو.",
                Arabic: "مرق حار غني، روبيان تايجر، نودلز رامين مصنوعة يدوياً، بصل أخضر وبيض مسلوق."
            }
        },
        {
            id: 2,
            category: "hot-dishes",
            price: 3.50,
            available: 11,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=800&auto=format&fit=crop",
            spicy: false,
            popular: false,
            name: {
                English: "Salted pasta with mushroom sauce",
                Badini: "پاستا ب سۆسا قارچكێ",
                Sorani: "پاستا بە سۆسی قارچک",
                Arabic: "باستا متبلة بصلصة الفطر"
            },
            desc: {
                English: "Al dente tagliatelle tossed in wild mushroom reduction, truffle oil & freshly grated parmesan.",
                Badini: "تاگلیاتیلی ب سۆسا قارچکێن کێڤی، زەیتا تروفل و پەنیرێ پارمیزان.",
                Sorani: "پاستای تالیاتیلی بە سۆسی قارچکی کێوی، زەیتی ترافڵ و پەنیری پارمیزان.",
                Arabic: "تاغلياتيلي مع خلاصة الفطر البري، زيت الكمأة وجبن البارْمِيجانو المبشور."
            }
        },
        {
            id: 3,
            category: "soup",
            price: 3.80,
            available: 16,
            rating: 4.95,
            image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=800&auto=format&fit=crop",
            spicy: true,
            popular: true,
            name: {
                English: "Beef dumpling in hot and sour soup",
                Badini: "دامپلینگێ گۆشتی د شوربا تژار دا",
                Sorani: "دامپلینگی گۆشت لە سوپی ترش و تیژ",
                Arabic: "دمبلنغ اللحم في الشوربة الحارة والحامضة"
            },
            desc: {
                English: "Handcrafted wagyu beef dumplings steeped in chili oil, black vinegar & cilantro broth.",
                Badini: "دامپلینگێن گۆشتێ واگیو یێ دەستچێکەر د ڕۆنێ بیبەرێ تژار و سرکا ڕەش دا.",
                Sorani: "دامپلینگی گۆشتی واگیو لە زەیتی بیبەری تیژ و سرکەی ڕەشدا.",
                Arabic: "دمبلنغ لحم الواغيو الفاخر في زيت الفلفل الحار والخل الأسود والكزبرة."
            }
        },
        {
            id: 4,
            category: "hot-dishes",
            price: 3.20,
            available: 22,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=800&auto=format&fit=crop",
            spicy: false,
            popular: false,
            name: {
                English: "Healthy noodle with spinach leaf",
                Badini: "نودلزێن ساخلەم ب پاڵکێ",
                Sorani: "نودڵزی تەندروست بە سپێناخ",
                Arabic: "نودلز صحي بأوراق السبانخ"
            },
            desc: {
                English: "Organic green spinach wheat noodles, roasted sesame seeds, edamame & dashi broth.",
                Badini: "نودلزێت پاڵکێن سروشتی، کنجیێن برژاندنی و مڕقێ فِرێش.",
                Sorani: "نودڵزی نۆکی سپێناخی ئۆرگانیک، کونجی برژاو و ئیدامامی.",
                Arabic: "نودلز القمح والسبانخ العضوية، سمسم محمص، إيدامامي ومرق الداشي."
            }
        },
        {
            id: 5,
            category: "soup",
            price: 2.99,
            available: 19,
            rating: 4.85,
            image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop",
            spicy: true,
            popular: true,
            name: {
                English: "Spicy instant noodle with special omelete",
                Badini: "نودلزێن تژار ب هێکا تایتانیک",
                Sorani: "نودڵزی تیژ بە ئۆملێتی تایبەت",
                Arabic: "نودلز حار مع أومليت خافق"
            },
            desc: {
                English: "Custom blend chili pepper noodles topped with crispy fluffy soufflé omelete & chili flakes.",
                Badini: "نودلزێت بیبەرا تژار دگەل هێکا ئۆملێتا نەرما کریسپی.",
                Sorani: "نودڵزی بیبەری تیژ لەگەڵ ئۆملێتی نەرم و ئاڵتونی.",
                Arabic: "نودلز بالفلفل الحار يعلوه أومليت سوفليه مقرمش وهش."
            }
        },
        {
            id: 6,
            category: "grill",
            price: 3.10,
            available: 13,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
            spicy: true,
            popular: true,
            name: {
                English: "Hot spicy fried rice with omelet",
                Badini: "برنجێ سۆرتکریێ تژار ب هێکێ",
                Sorani: "برنجی سوورەکراوی تیژ بە هێلکە",
                Arabic: "أرز مقلي حار مع الأومليت"
            },
            desc: {
                English: "Wok-hei smoked jasmine rice, diced chicken, sambal sauce, crispy onions & tornado egg.",
                Badini: "برنجێ یاسمین یێ دووکەلی، گۆشتێ مریشکێ، سۆسا سامبال و پیازێن کریسپی.",
                Sorani: "برنجی یاسمینی دوووکەلاو، گۆشتی مریشک، سۆسی سامبال و پیازی کریسپی.",
                Arabic: "أرز الياسمين المدخن بالواك، قطع الدجاج، صلصة السامبال والبصل المقرمش."
            }
        },
        {
            id: 7,
            category: "grill",
            price: 8.50,
            available: 8,
            rating: 5.0,
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
            spicy: false,
            popular: true,
            name: {
                English: "Charred Flame Tomahawk Ribeye",
                Badini: "ستیکێ تۆماهۆک یێ سۆرتکری ل سەر ئاگڕی",
                Sorani: "ستیکی تۆماهۆک لەسەر خەڵووز",
                Arabic: "ستيك توماهوك المشوي على الفحم"
            },
            desc: {
                English: "Wood-fired charcoal ribeye, smoked garlic rosemary butter, sea salt & charred veggies.",
                Badini: "گۆشتێ ریبای یێ سۆرتکری، کەرێ سیرێ دووکەلی و خوێیا دەریا.",
                Sorani: "گۆشتی ڕیبای برژاو لەسەر خەڵووز، کەرەی سیری دووکەلاو و سەوزەی برژاو.",
                Arabic: "ستيك ريب آي مشوي على حطب التفاح، زبدة الثوم والروزماري المدخنة وخضار مشوية."
            }
        },
        {
            id: 8,
            category: "cold-dishes",
            price: 4.20,
            available: 14,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
            spicy: false,
            popular: false,
            name: {
                English: "Chilled Tuna Tartare Avocado Bowl",
                Badini: "کاسا تۆنایێ ب ئەڤۆکادۆکێ",
                Sorani: "کاسەی تۆنا بە ئەڤۆکادۆ",
                Arabic: "وعاء التونا البارد مع الأفوكادو"
            },
            desc: {
                English: "Fresh bluefin tuna dice, crushed hass avocado, ponzu glaze & wonton crisps.",
                Badini: "گۆشتێ ماسییا تونایێ یا فرێش، ئەڤۆکادۆیا هێڕکری و سۆسا پۆنزۆ.",
                Sorani: "ماسی تۆنای تازە، ئەڤۆکادۆیی خەست و سۆسی پۆنزۆ.",
                Arabic: "قطع تونا التونة الزرقاء الطازجة، أفوكادو هاس المهروس، صلصة البونزو ومقرمشات الوون تون."
            }
        },
        {
            id: 9,
            category: "appetizer",
            price: 2.10,
            available: 25,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop",
            spicy: false,
            popular: false,
            name: {
                English: "Crispy Golden Spring Roll Platter",
                Badini: "بورکێن زێڕینیێن کریسپی",
                Sorani: "بوراکی ئاڵتونی کریسپی",
                Arabic: "طبق سبرينغ رول الذهبي المقرمش"
            },
            desc: {
                English: "Glass noodles, wood ear mushrooms & sweet chili plum dipping sauce.",
                Badini: "نودلزێت شووشەیی، قارچک و سۆسا بیبەرا شرین.",
                Sorani: "نودڵزی شووشەیی، قارچک و سۆسی شیرین و تیژ.",
                Arabic: "نودلز الزجاج، فطر أذن الخشب وصلصة الفلفل الحلو والخوخ."
            }
        },
        {
            id: 10,
            category: "dessert",
            price: 3.40,
            available: 12,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
            spicy: false,
            popular: true,
            name: {
                English: "Matcha Lava Cake & Mango Sorbet",
                Badini: "کێکا ماتشا دگەل سۆربێت مانگۆ",
                Sorani: "کێکی ماتشا بە سۆربێتی مانگۆ",
                Arabic: "كيكة كعكة الماتشا وسوربيه المانجو"
            },
            desc: {
                English: "Uji matcha molten center cake served with artisanal mango sorbet & candied berries.",
                Badini: "کێکا چایا کەسکا ماتشا دگەل ئایسکریما مانگۆیێ دەرەجە ئێک.",
                Sorani: "کێکی ماتشای بەتام لەگەڵ ئایسکرێمی مانگۆ و میوەی شیرینکراو.",
                Arabic: "كيكة الماتشا اليابانية ذات المركز الذائب تقدم مع سوربيه المانجو الطبيعي."
            }
        },
        {
            id: 11,
            category: "drinks",
            price: 1.99,
            available: 30,
            rating: 4.85,
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
            spicy: false,
            popular: false,
            name: {
                English: "Smoked Hibiscus Dragonfruit Elixir",
                Badini: "شەربەتا دراگۆن فرۆت دگەل کەژێ",
                Sorani: "خواردنەوەی دراگۆن فرووت و گەزدەنگ",
                Arabic: "إكسير الكركديه وفاكهة التنين المدخن"
            },
            desc: {
                English: "Fresh dragonfruit puree, organic hibiscus tea, lime juice & sparkling mineral water.",
                Badini: "میوەیا دراگۆن فرۆتا سەدا سەد، چایا کەرکەدێ و ئاڤا لیمۆنێ.",
                Sorani: "دراگۆن فرووتی تازە، چای گەزدەنگی ئۆرگانیک و ئاوی گازی.",
                Arabic: "بيوريه فاكهة التنين الطازجة، شاي الكركديه العضوي، عصير الليمون والماء الفوار."
            }
        },
        {
            id: 12,
            category: "drinks",
            price: 2.25,
            available: 28,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop",
            spicy: false,
            popular: true,
            name: {
                English: "Iced Salted Caramel Espresso Latte",
                Badini: "ئایس لاتێ کارامێل یێ سەرد",
                Sorani: "ئایس لاتێ کارامێلی سارد",
                Arabic: "آيس لاتيه بالكاراميل المملح والأسبرسو"
            },
            desc: {
                English: "Double shot arabica espresso, sea salt caramel sauce & oat milk over ice.",
                Badini: "قهوا ئەسپریسۆ یا عەرەبی، سۆسا کارامێلا سەرد و شیرێ دروستکری.",
                Sorani: "ئەسپریسۆی عەرەبی بە کارامێلی سوێراو و شیری ئۆت.",
                Arabic: "جرعة مضاعفة من أسبرسو الأرابيكا، صلصة الكاراميل المملح وشير الشوفان مع الثلج."
            }
        }
    ];

    // ================================================
    // GLOBAL STATE
    // ================================================
    let currentLang = localStorage.getItem('bot_lang') || 'English';
    let currentSlide = 0;
    let activeCategory = 'all';
    let searchQuery = '';
    let sortOption = 'default';
    let cart = [];
    let activeModalDishId = null;

    // Read language from URL param if available e.g., ?lang=Badini
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && TRANSLATIONS[langParam]) {
        currentLang = langParam;
        localStorage.setItem('bot_lang', currentLang);
    }

    // ================================================
    // DOM ELEMENTS
    // ================================================
    const dom = {
        navbar: document.getElementById('navbar'),
        mobileHamburgerBtn: document.getElementById('mobile-hamburger-btn'),
        mobileMenuDrawer: document.getElementById('mobile-menu-drawer'),
        mobileMenuBackdrop: document.getElementById('mobile-menu-backdrop'),
        mobileMenuClose: document.getElementById('mobile-menu-close'),

        heroSlideTitle: document.getElementById('hero-slide-title'),
        heroSlideSubtitle: document.getElementById('hero-slide-subtitle'),
        heroSlideImg: document.getElementById('hero-slide-img'),
        heroSlideImgMobile: document.getElementById('hero-slide-img-mobile'),
        heroBadgeText: document.getElementById('hero-badge-text'),
        heroBadgeReviews: document.getElementById('hero-badge-reviews'),
        heroCategoryTag: document.getElementById('hero-category-tag'),

        menuGrid: document.getElementById('menu-grid'),
        menuSearch: document.getElementById('menu-search'),
        sortSelect: document.getElementById('sort-select'),
        noResults: document.getElementById('no-results'),

        cartBtn: document.getElementById('cart-btn'),
        cartBadge: document.getElementById('cart-badge'),
        cartDrawer: document.getElementById('cart-drawer'),
        cartBackdrop: document.getElementById('cart-backdrop'),
        cartCloseBtn: document.getElementById('cart-close-btn'),
        cartItemsContainer: document.getElementById('cart-items'),
        cartSubtotal: document.getElementById('cart-subtotal'),
        cartTax: document.getElementById('cart-tax'),
        cartTotal: document.getElementById('cart-total'),
        checkoutBtn: document.getElementById('checkout-btn'),

        languageModal: document.getElementById('language-modal'),
        dishDetailModal: document.getElementById('dish-detail-modal'),
        modalDishImg: document.getElementById('modal-dish-img'),
        modalDishName: document.getElementById('modal-dish-name'),
        modalDishDesc: document.getElementById('modal-dish-desc'),
        modalDishPrice: document.getElementById('modal-dish-price'),
        modalDishCategory: document.getElementById('modal-dish-category'),
        modalDishRating: document.getElementById('modal-dish-rating'),
        modalDishAvailable: document.getElementById('modal-dish-available'),
        modalAddToCartBtn: document.getElementById('modal-add-to-cart-btn'),

        reservationModal: document.getElementById('reservation-modal'),
        loginModal: document.getElementById('login-modal'),
        toastContainer: document.getElementById('toast-container'),
    };

    // ================================================
    // INITIALIZATION & LUCIDE ICONS
    // ================================================
    function initIcons() {
        if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons();
        }
    }

    // ================================================
    // MULTILINGUAL UI RE-RENDER
    // ================================================
    function applyLanguage(lang) {
        if (!TRANSLATIONS[lang]) lang = 'English';
        currentLang = lang;
        localStorage.setItem('bot_lang', currentLang);

        const t = TRANSLATIONS[currentLang];
        document.documentElement.dir = t.dir;

        // Category Pills UI Translation
        const catMap = {
            'all': t.allDishes,
            'hot-dishes': t.hotDishes,
            'cold-dishes': t.coldDishes,
            'soup': t.soup,
            'grill': t.grill,
            'appetizer': t.appetizer,
            'dessert': t.dessert,
            'drinks': t.drinks
        };

        document.querySelectorAll('.category-pill').forEach(pill => {
            const catKey = pill.dataset.category;
            if (catMap[catKey]) {
                const icon = pill.querySelector('i');
                const iconHTML = icon ? icon.outerHTML : '';
                pill.innerHTML = `${iconHTML} ${catMap[catKey]}`;
            }
        });

        if (dom.menuSearch) dom.menuSearch.placeholder = t.searchPlaceholder;

        if (dom.sortSelect && dom.sortSelect.options.length >= 4) {
            dom.sortSelect.options[0].text = t.sortDefault;
            dom.sortSelect.options[1].text = t.sortLow;
            dom.sortSelect.options[2].text = t.sortHigh;
            dom.sortSelect.options[3].text = t.sortRating;
        }

        // Render Menu Cards in selected language
        renderMenu();
    }

    // ================================================
    // MOBILE NAVIGATION DRAWER
    // ================================================
    function initMobileMenu() {
        const openMobileDrawer = () => {
            if (dom.mobileMenuDrawer) dom.mobileMenuDrawer.classList.add('open');
            if (dom.mobileMenuBackdrop) dom.mobileMenuBackdrop.classList.add('open');
            document.body.style.overflow = 'hidden';
        };

        const closeMobileDrawer = () => {
            if (dom.mobileMenuDrawer) dom.mobileMenuDrawer.classList.remove('open');
            if (dom.mobileMenuBackdrop) dom.mobileMenuBackdrop.classList.remove('open');
            document.body.style.overflow = '';
        };

        if (dom.mobileHamburgerBtn) {
            dom.mobileHamburgerBtn.addEventListener('click', openMobileDrawer);
        }
        if (dom.mobileMenuClose) {
            dom.mobileMenuClose.addEventListener('click', closeMobileDrawer);
        }
        if (dom.mobileMenuBackdrop) {
            dom.mobileMenuBackdrop.addEventListener('click', closeMobileDrawer);
        }

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            if (!link.classList.contains('menu-trigger-link')) {
                link.addEventListener('click', closeMobileDrawer);
            }
        });
    }

    // ================================================
    // LANGUAGE SELECTION MODAL LOGIC & MENU REDIRECT
    // ================================================
    function initLanguageModal() {
        document.querySelectorAll('.menu-trigger-link').forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                if (dom.mobileMenuDrawer) dom.mobileMenuDrawer.classList.remove('open');
                if (dom.mobileMenuBackdrop) dom.mobileMenuBackdrop.classList.remove('open');

                if (dom.languageModal) {
                    dom.languageModal.classList.add('open');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        document.querySelectorAll('.lang-option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const selectedLang = btn.dataset.lang;
                if (dom.languageModal) dom.languageModal.classList.remove('open');
                document.body.style.overflow = '';

                // Store language preference & redirect to menu.html page
                localStorage.setItem('bot_lang', selectedLang);

                // If currently on index.html, redirect to menu.html with lang param
                if (!window.location.pathname.endsWith('menu.html')) {
                    window.location.href = `menu.html?lang=${selectedLang}`;
                } else {
                    applyLanguage(selectedLang);
                    showToast(`${TRANSLATIONS[selectedLang].langChanged} ${selectedLang}! 🌐`);
                }
            });
        });
    }

    // ================================================
    // HERO SLIDER LOGIC
    // ================================================
    function initHeroSlider() {
        const dotContainers = document.querySelectorAll('.hero-slide-dots');
        if (!dotContainers || dotContainers.length === 0) return;

        dotContainers.forEach(container => {
            container.innerHTML = `
                <button class="w-6 sm:w-8 h-2.5 sm:h-3 rounded-full bg-primary-red" data-slide="0"></button>
                <button class="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-white/20" data-slide="1"></button>
                <button class="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-white/20" data-slide="2"></button>
            `;
        });
    }

    // ================================================
    // DISH DETAIL MODAL LOGIC
    // ================================================
    function openDishDetailModal(dishId) {
        const dish = DISHES_DATA.find(d => d.id === dishId);
        if (!dish || !dom.dishDetailModal) return;

        activeModalDishId = dishId;
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.English;

        const dishName = dish.name[currentLang] || dish.name.English;
        const dishDesc = dish.desc[currentLang] || dish.desc.English;

        if (dom.modalDishImg) dom.modalDishImg.src = dish.image;
        if (dom.modalDishName) dom.modalDishName.textContent = dishName;
        if (dom.modalDishDesc) dom.modalDishDesc.textContent = dishDesc;
        if (dom.modalDishPrice) dom.modalDishPrice.textContent = `$ ${dish.price.toFixed(2)}`;
        if (dom.modalDishCategory) dom.modalDishCategory.textContent = dish.category.replace('-', ' ');
        if (dom.modalDishRating) {
            dom.modalDishRating.innerHTML = `<i data-lucide="star" class="w-3.5 h-3.5 fill-accent-gold text-accent-gold"></i> <span>${dish.rating}</span>`;
        }
        if (dom.modalDishAvailable) dom.modalDishAvailable.textContent = `${dish.available} ${t.bowlsAvailable}`;

        initIcons();
        dom.dishDetailModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function initDishDetailModal() {
        if (dom.modalAddToCartBtn) {
            dom.modalAddToCartBtn.addEventListener('click', () => {
                if (activeModalDishId !== null) {
                    addToCart(activeModalDishId);
                    if (dom.dishDetailModal) dom.dishDetailModal.classList.remove('open');
                    document.body.style.overflow = '';
                }
            });
        }
    }

    // ================================================
    // MENU FILTERING, SEARCH, & FAST RENDERING
    // ================================================
    function renderMenu() {
        if (!dom.menuGrid) return;

        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.English;

        let filtered = DISHES_DATA.filter(dish => {
            const matchesCategory = activeCategory === 'all' || dish.category === activeCategory;
            const dishName = (dish.name[currentLang] || dish.name.English).toLowerCase();
            const dishDesc = (dish.desc[currentLang] || dish.desc.English).toLowerCase();
            const matchesSearch = searchQuery === '' ||
                dishName.includes(searchQuery) ||
                dishDesc.includes(searchQuery);
            return matchesCategory && matchesSearch;
        });

        if (sortOption === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'rating') {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        if (filtered.length === 0) {
            dom.menuGrid.innerHTML = '';
            if (dom.noResults) dom.noResults.classList.remove('hidden');
            return;
        }

        if (dom.noResults) dom.noResults.classList.add('hidden');

        dom.menuGrid.innerHTML = filtered.map(dish => {
            const name = dish.name[currentLang] || dish.name.English;
            const desc = dish.desc[currentLang] || dish.desc.English;

            return `
                <div class="dish-card group" data-id="${dish.id}">
                    <div class="dish-card-img-wrap">
                        <img src="${dish.image}" alt="${name}" class="dish-card-img" loading="lazy" decoding="async">
                        <span class="absolute top-3 left-3 sm:top-4 sm:left-4 portion-badge">
                            ${dish.available} ${t.bowlsAvailable}
                        </span>
                        ${dish.popular ? `<span class="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary-red text-white text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full uppercase tracking-wider">${t.popular}</span>` : ''}
                    </div>
                    <div class="p-4 sm:p-6">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs font-semibold text-accent-gold uppercase tracking-wider flex items-center gap-1">
                                <i data-lucide="star" class="w-3.5 h-3.5 fill-accent-gold text-accent-gold"></i>
                                ${dish.rating}
                            </span>
                            <span class="text-xs text-text-muted capitalize flex items-center gap-1">
                                ${dish.spicy ? `<i data-lucide="flame" class="w-3.5 h-3.5 text-primary-red"></i> ${t.spicy}` : ''}
                            </span>
                        </div>
                        <h3 class="font-bold text-base sm:text-lg text-text-main mb-1.5 line-clamp-1 group-hover:text-primary-red transition-colors">
                            ${name}
                        </h3>
                        <p class="text-xs text-text-muted leading-relaxed mb-4 line-clamp-2">
                            ${desc}
                        </p>
                        <div class="flex items-center justify-between pt-2 border-t border-white/5">
                            <div>
                                <span class="text-[10px] sm:text-xs text-text-faint block">${t.price}</span>
                                <span class="text-lg sm:text-xl font-extrabold text-white">$ ${dish.price.toFixed(2)}</span>
                            </div>
                            <button class="add-to-cart-btn btn-primary-red py-2 px-3.5 sm:py-2.5 sm:px-4 text-xs font-semibold" data-id="${dish.id}">
                                <i data-lucide="plus" class="w-3.5 h-3.5 sm:w-4 sm:h-4"></i> ${t.addToCart}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        initIcons();

        gsap.fromTo('.dish-card',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.35, stagger: 0.03, ease: 'power2.out', overwrite: 'auto' }
        );

        dom.menuGrid.querySelectorAll('.dish-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const addBtn = e.target.closest('.add-to-cart-btn');
                const dishId = parseInt(card.dataset.id);

                if (addBtn) {
                    e.stopPropagation();
                    addToCart(dishId);
                } else {
                    openDishDetailModal(dishId);
                }
            });
        });
    }

    function initCategoryTabs() {
        document.querySelectorAll('.category-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                activeCategory = pill.dataset.category;
                renderMenu();
            });
        });

        if (dom.menuSearch) {
            dom.menuSearch.addEventListener('input', (e) => {
                searchQuery = e.target.value.toLowerCase().trim();
                renderMenu();
            });
        }

        if (dom.sortSelect) {
            dom.sortSelect.addEventListener('change', (e) => {
                sortOption = e.target.value;
                renderMenu();
            });
        }
    }

    // ================================================
    // SHOPPING CART DRAWER SYSTEM
    // ================================================
    function addToCart(dishId) {
        const dish = DISHES_DATA.find(d => d.id === dishId);
        if (!dish) return;

        const name = dish.name[currentLang] || dish.name.English;
        const existing = cart.find(item => item.id === dishId);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ id: dish.id, name: name, price: dish.price, image: dish.image, qty: 1 });
        }

        updateCartUI();
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.English;
        showToast(`${t.addedToCart} "${name}"`);

        if (dom.cartBtn) {
            gsap.fromTo(dom.cartBtn, { scale: 1.25 }, { scale: 1, duration: 0.35, ease: 'back.out(1.5)' });
        }
    }

    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        if (dom.cartBadge) {
            dom.cartBadge.textContent = totalItems;
            if (totalItems > 0) dom.cartBadge.classList.remove('hidden');
            else dom.cartBadge.classList.add('hidden');
        }

        const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        const tax = subtotal * 0.05;
        const total = subtotal + tax;

        if (dom.cartSubtotal) dom.cartSubtotal.textContent = `$ ${subtotal.toFixed(2)}`;
        if (dom.cartTax) dom.cartTax.textContent = `$ ${tax.toFixed(2)}`;
        if (dom.cartTotal) dom.cartTotal.textContent = `$ ${total.toFixed(2)}`;

        if (!dom.cartItemsContainer) return;

        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.English;

        if (cart.length === 0) {
            dom.cartItemsContainer.innerHTML = `
                <div class="text-center py-16 px-4 text-text-muted">
                    <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto mb-3 opacity-30"></i>
                    <p class="font-medium text-sm">${t.emptyCart}</p>
                    <p class="text-xs opacity-60 mt-1">${t.emptyCartDesc}</p>
                </div>
            `;
            initIcons();
            return;
        }

        dom.cartItemsContainer.innerHTML = cart.map(item => `
            <div class="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5">
                <img src="${item.image}" alt="${item.name}" class="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover">
                <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-xs sm:text-sm text-text-main truncate">${item.name}</h4>
                    <p class="text-xs text-primary-red font-bold mt-0.5">$ ${item.price.toFixed(2)}</p>
                </div>
                <div class="flex items-center gap-1.5 sm:gap-2 bg-black/40 px-2 py-1 rounded-full border border-white/10">
                    <button class="cart-qty-btn p-1 text-text-muted hover:text-white" data-id="${item.id}" data-action="dec">
                        <i data-lucide="minus" class="w-3.5 h-3.5"></i>
                    </button>
                    <span class="text-xs font-bold w-4 text-center text-white">${item.qty}</span>
                    <button class="cart-qty-btn p-1 text-text-muted hover:text-white" data-id="${item.id}" data-action="inc">
                        <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                    </button>
                </div>
            </div>
        `).join('');

        initIcons();

        dom.cartItemsContainer.querySelectorAll('.cart-qty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                const action = btn.dataset.action;
                const item = cart.find(i => i.id === id);
                if (item) {
                    if (action === 'inc') item.qty += 1;
                    else if (action === 'dec') {
                        item.qty -= 1;
                        if (item.qty <= 0) {
                            cart = cart.filter(i => i.id !== id);
                        }
                    }
                    updateCartUI();
                }
            });
        });
    }

    function initCartDrawer() {
        if (dom.cartBtn) {
            dom.cartBtn.addEventListener('click', () => {
                if (dom.cartDrawer) dom.cartDrawer.classList.add('open');
                if (dom.cartBackdrop) dom.cartBackdrop.classList.add('open');
                document.body.style.overflow = 'hidden';
            });
        }

        const closeCart = () => {
            if (dom.cartDrawer) dom.cartDrawer.classList.remove('open');
            if (dom.cartBackdrop) dom.cartBackdrop.classList.remove('open');
            document.body.style.overflow = '';
        };

        if (dom.cartCloseBtn) dom.cartCloseBtn.addEventListener('click', closeCart);
        if (dom.cartBackdrop) dom.cartBackdrop.addEventListener('click', closeCart);

        if (dom.checkoutBtn) {
            dom.checkoutBtn.addEventListener('click', () => {
                if (cart.length === 0) {
                    showToast('Your cart is empty!', 'warning');
                    return;
                }
                closeCart();
                showToast('Thank you! Your order has been placed successfully. 🚀', 'success');
                cart = [];
                updateCartUI();
            });
        }
    }

    // ================================================
    // TOAST NOTIFICATIONS
    // ================================================
    function showToast(message, type = 'info') {
        if (!dom.toastContainer) return;

        const toast = document.createElement('div');
        toast.className = 'toast-msg';

        let iconName = 'check-circle-2';
        if (type === 'warning') iconName = 'alert-circle';

        toast.innerHTML = `
            <i data-lucide="${iconName}" class="w-5 h-5 text-primary-red flex-shrink-0"></i>
            <span>${message}</span>
        `;

        dom.toastContainer.appendChild(toast);
        initIcons();

        setTimeout(() => {
            gsap.to(toast, {
                opacity: 0,
                y: -10,
                duration: 0.25,
                onComplete: () => toast.remove()
            });
        }, 3000);
    }

    // ================================================
    // MODALS HANDLING
    // ================================================
    function initModals() {
        document.querySelectorAll('[data-modal]').forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = trigger.dataset.modal;
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.add('open');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay || e.target.closest('.modal-close')) {
                    overlay.classList.remove('open');
                    document.body.style.overflow = '';
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal-overlay.open').forEach(modal => {
                    modal.classList.remove('open');
                });
                if (dom.cartDrawer && dom.cartDrawer.classList.contains('open')) {
                    dom.cartDrawer.classList.remove('open');
                    if (dom.cartBackdrop) dom.cartBackdrop.classList.remove('open');
                }
                document.body.style.overflow = '';
            }
        });
    }

    // ================================================
    // NAVBAR SCROLL SHRINK & BLUR LOGIC
    // ================================================
    function initNavbarScroll() {
        const handleScroll = () => {
            if (dom.navbar) {
                if (window.scrollY > 20) {
                    dom.navbar.classList.add('scrolled');
                } else {
                    dom.navbar.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    // ================================================
    // INIT APPLICATION
    // ================================================
    function init() {
        initIcons();
        initNavbarScroll();
        initMobileMenu();
        initHeroSlider();
        initCategoryTabs();
        initLanguageModal();
        initDishDetailModal();
        initCartDrawer();
        initModals();
        applyLanguage(currentLang);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
