export const dietPlans = {
  shred: {
    title: "Precision Anabolic Recomposition",
    description: "Aggressive fat loss with zero muscle atrophy using strict time-restricted windows.",
    calories: "1,960 kcal",
    water: "4.5 - 5.0 Liters Daily",
    macros: {
      protein: "220g",
      carbs: "170g",
      fats: "45g"
    },
    meals: [
      {
        title: "Fast Breaker & Anabolic Signal",
        timing: "10:00 AM",
        calories: "450",
        items: [
          { name: "Grilled Chicken Breast (herb & pepper)", portion: "120g" },
          { name: "Couscous with Peas & Corn (cooked)", portion: "80g" },
          { name: "Roasted Veggies (Broccoli, Zucchini, Sweet Potato, Bell Pepper)", portion: "100g" },
          { name: "Avocado, Spinach, Tomato & Cucumber Salad", portion: "90g" },
          { name: "Mixed Berries (Blueberry, Raspberry)", portion: "40g" },
          { name: "Olive Oil (for roasting)", portion: "5g" }
        ],
        note: "Squeeze lime over the chicken and salad. Roast the veggies with minimal oil."
      },
      {
        title: "Core Protein & Micronutrient Load",
        timing: "01:30 PM",
        calories: "500",
        items: [
          { name: "Creamy Rajma (Kidney Beans)", portion: "100g" },
          { name: "Chole (Chickpea Curry)", portion: "80g" },
          { name: "Steamed Jasmine Rice", portion: "100g" },
          { name: "Whole Wheat Roti / Flatbread", portion: "1 (30g)" },
          { name: "Mint Chutney", portion: "15g" },
          { name: "Onion & Cucumber Salad with Lime", portion: "60g" }
        ],
        note: "Keep the rice portion fixed, and eat the salad first for better satiety."
      }
    ]
  },
  lean: {
    title: "Mediterranean Vitality & Clean Mass",
    description: "Sustainable lean muscle growth and longevity using anti-inflammatory whole foods.",
    calories: "2,400 - 2,600 kcal",
    water: "3.5 - 4 Liters Daily",
    macros: {
      protein: "180g",
      carbs: "250g",
      fats: "75g"
    },
    meals: [
      {
        title: "Avocado & Whole Egg Sourdough Toast",
        timing: "08:00 AM",
        calories: "600",
        items: [
          { name: "Pasture-raised whole eggs", portion: "3 eggs" },
          { name: "Hass avocado", portion: "1/2 avocado" },
          { name: "Artisan sourdough bread", portion: "2 slices" }
        ]
      }
    ]
  },
  maintenance: {
    title: "Metabolic Reset",
    description: "High satiety using standard pantry staples maximizing thermal effect of food.",
    calories: "1,900 - 2,100 kcal",
    water: "3.5 Liters Daily",
    macros: {
      protein: "160g",
      carbs: "190g",
      fats: "55g"
    },
    meals: [
      {
        title: "Cinnamon & Nut Butter Protein Oats",
        timing: "08:00 AM",
        calories: "480",
        items: [
          { name: "Rolled oats", portion: "50g" },
          { name: "Chocolate protein powder", portion: "1.5 scoops" },
          { name: "Natural peanut butter", portion: "1 tbsp" }
        ]
      }
    ]
  }
};

export const homeDiets = [
  {
    id: 'home-diet-01',
    title: 'Mediterranean Vitality & Clean Mass Plan',
    category: 'Home Diet',
    targetGoal: 'Sustainable Lean Muscle Growth & Longevity',
    estimatedCalories: '2,400 - 2,600 kcal/day',
    description: 'A kitchen-friendly meal structure based on anti-inflammatory whole foods, healthy fats, and high-quality protein sources.',
    meals: [
      {
        mealName: 'Breakfast (08:00 AM)',
        title: 'Avocado & Whole Egg Sourdough Toast',
        ingredients: ['3 pasture-raised whole eggs', '1/2 ripe Hass avocado', '2 slices artisan sourdough bread', '1 cup wild berries'],
        notes: 'Drizzle eggs with extra virgin olive oil and season with sea salt and black pepper.',
      },
      {
        mealName: 'Lunch (01:00 PM)',
        title: 'Grilled Salmon & Quinoa Grain Bowl',
        ingredients: ['180g wild-caught salmon fillet', '1 cup cooked white quinoa', 'Steamed asparagus & zucchini', '1 tbsp pumpkin seeds'],
        notes: 'Rich in Omega-3 fatty acids to lower systemic inflammation.',
      },
      {
        mealName: 'Afternoon Snack (04:30 PM)',
        title: 'Greek Yogurt & Almond Protein Crunch',
        ingredients: ['200g plain 0% Greek yogurt', '1 scoop unflavored whey/plant protein', '15g raw almonds', '1 tsp raw honey'],
        notes: 'Provides sustained amino acid release leading into evening training.',
      },
      {
        mealName: 'Dinner (08:00 PM)',
        title: 'Herbed Chicken Breast & Roasted Sweet Potatoes',
        ingredients: ['200g organic chicken breast', '150g baked sweet potato wedges', 'Large green salad with olive oil dressing'],
        notes: 'Complex carbohydrates replenish muscle glycogen for next-day recovery.',
      },
    ],
  },
  {
    id: 'home-diet-02',
    title: 'Everyday High-Protein Metabolic Reset',
    category: 'Home Diet',
    targetGoal: 'Fat Loss & Lean Muscle Retention',
    estimatedCalories: '1,900 - 2,100 kcal/day',
    description: 'Designed for high satiety using standard pantry staples, maximizing thermal effect of food (TEF) without complex prepping.',
    meals: [
      {
        mealName: 'Breakfast (08:00 AM)',
        title: 'Cinnamon & Nut Butter Protein Oats',
        ingredients: ['50g rolled oats', '1.5 scoops chocolate protein powder', '1 tbsp natural peanut butter', '1/2 banana sliced'],
        notes: 'Cook oats with water or unsweetened almond milk before stirring in protein powder.',
      },
      {
        mealName: 'Lunch (01:30 PM)',
        title: 'Turkey & Spinach Whole Wheat Wrap',
        ingredients: ['180g lean roasted turkey breast', '1 large whole wheat/spinach tortilla', 'Handful baby spinach', '2 tbsp hummus'],
        notes: 'Quick assembly meal with low saturated fat and high lean protein.',
      },
      {
        mealName: 'Dinner (07:30 PM)',
        title: 'Pan-Seared Lean Beef Stir-Fry',
        ingredients: ['180g extra-lean beef strips (93/7)', '1.5 cups mixed bell peppers & broccoli', '1/2 cup cooked jasmine rice', 'Low-sodium soy sauce'],
        notes: 'Provides bioavailable iron and zinc for optimal hormone production.',
      },
    ],
  },
];

export const strictDiets = [
  {
    id: 'strict-diet-01',
    protocolTitle: 'Precision Anabolic Recomposition (PAR)',
    tier: 'Strict Protocol',
    focus: 'Aggressive Fat Loss with Zero Muscle Atrophy',
    macroSplit: { protein: '45%', carbs: '35%', fats: '20%' },
    totalDailyMacros: { protein: '220g', carbs: '170g', fats: '45g', calories: '1,960 kcal' },
    waterRequirement: '4.5 - 5.0 Liters Daily',
    timingProtocol: 'Time-Restricted Window (10:00 AM - 06:00 PM)',
    guidelines: [
      'All proteins weighed raw on a digital scale to the nearest gram.',
      'Zero refined sugars, artificial sweeteners, or dairy milk permitted.',
      'Sodium maintained at a strict 3,500mg daily to stabilize fluid balance.',
      'Peri-workout nutrient window strictly enforced (50% of daily carbs consumed post-workout).',
    ],
    schedule: [
      {
        time: '10:00 AM (Meal 1)',
        label: 'Fast Breaker & Anabolic Signal',
        items: ['220g Egg Whites + 1 Whole Egg', '60g Cream of Rice (measured dry)', '5g Glutamine', '300ml Black Coffee'],
      },
      {
        time: '01:30 PM (Meal 2)',
        label: 'Core Protein & Micronutrient Load',
        items: ['200g Raw White Fish (Cod/Haddock)', '150g Steamed Jasmine Rice', '100g Steamed Broccoli', '3g Omega-3 Fish Oil'],
      },
      {
        time: '04:30 PM (Pre/Intra-Workout)',
        label: 'Glycogen Fuel & EAAs',
        items: ['10g Essential Amino Acids (EAAs) in 750ml water', '30g Highly Branched Cyclic Dextrin (during intense session)'],
      },
      {
        time: '06:00 PM (Post-Workout - Meal 3)',
        label: 'Insulin Spike & Tissue Repair',
        items: ['200g Grass-Fed Beef Mince (95/5)', '200g Baked White Potato', 'Green Salad with Apple Cider Vinegar'],
      },
    ],
  },
  {
    id: 'strict-diet-02',
    protocolTitle: 'Targeted Ketogenic Oxidative Protocol',
    tier: 'Strict Protocol',
    focus: 'Maximal Ketosis, Rapid Visceral Fat Oxidation & Autophagy',
    macroSplit: { protein: '30%', carbs: '5%', fats: '65%' },
    totalDailyMacros: { protein: '160g', carbs: '20g Net', fats: '150g', calories: '2,070 kcal' },
    waterRequirement: '5.0 Liters + Electrolyte Supplementation',
    timingProtocol: '20:4 Intermittent Fasting / Warrior Protocol',
    guidelines: [
      'Net carbs must not exceed 20g per day under any circumstance.',
      'Must supplement with 5,000mg Sodium, 1,000mg Potassium, and 400mg Magnesium Citrate daily to prevent keto flu.',
      'Ketone levels monitored via blood meter (Target: 1.5 - 3.0 mmol/L).',
    ],
    schedule: [
      {
        time: '02:00 PM (Break Fast)',
        label: 'Fat Oxidation & Ketone Boost',
        items: ['15g C8 MCT Oil in Black Coffee', '3 Whole Organic Eggs scrambled in 10g Grass-Fed Butter'],
      },
      {
        time: '05:00 PM (Main Refuel)',
        label: 'Dense Protein & Healthy Lipid Matrix',
        items: ['250g Ribeye Steak or Wild Salmon', '1 Whole Hass Avocado', '2 cups Raw Spinach sautéed in Extra Virgin Olive Oil'],
      },
      {
        time: '06:00 PM (Final Feeding)',
        label: 'Satiety & Sleep Priming Matrix',
        items: ['150g Macadamia nuts or Pecans', '40g Micellar Casein or Bone Broth', '400mg Glycinate Magnesium'],
      },
    ],
  },
];