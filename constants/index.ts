export const categories = [
  {
    category: "Bakery",
    categorySlug:"bakery",
},
  {
    category: "Fruit and vegetables",
    categorySlug:"fruit-vegetables",
},
  {
    category: "Meat and fish",
    categorySlug:"meat-fish",
},
  {
    category: "Drinks",
    categorySlug:"drinks",
},
  {
    category: "Kitchen",
    categorySlug:"kitchen",
},
  {
    category: "Baby",
    categorySlug:"baby",
},
  {
    category: "Pharmacy",
    categorySlug: "pharmacy",
  }
];
  
export const  LeftMenuCategory = {
  header: 'All categories',
  array: [
    "Bakery",
    "Fruit and Vegetables",
    "Meat and Fish",
    "Drinks",
    "Kitchen",
  ],
  slug: [
    "bakery",
    "fruit-vegetables",
    "meat-fish",
    "drinks",
    "kitchen",
  ],
  button: "More categories",
  link: "search?search="
};

export const  BestSellingProducts = {
  header: 'Our baking',
  array: [
    "Kitchen",
    "Bakery",
    "Meat and fish",
    "Pharmacy",
    "Drinks",
  ],
  slug: [
    "kitchen",
    "bakery",
    "meat-fish",
    "fruit-vegetables",
    "pharmacy",
    "drinks",
  ],
  button: "More products",
  link: "/bakery"
};

export const  BestFromFarmers = {
  header: 'Best from Farmers',
  array: [
    "Carrots",
    "Apples",
    "Broccoli",
    "Chicken",
    "Fish"
  ],
  slug: [
    "fruit-vegetables",
    "fruit-vegetables",
    "fruit-vegetables",
    "meat-fish",
    "meat-fish"
  ],
  button: "More products",
  link: "/fruit-vegetables"
};

export const BannerRecepies = {
  baner: "Banner subfocus",
  header: 'Recepies for you',
  link: "/"
}

export const footerLinks = [
  {
    header: "Get in touch", 
    array:["About Us", "Careers", "Press Releases", "Blog"]
  },
  {
    header: "Connections", 
    array:["Facebook", "Twitter", "Youtube", "LinkedIn"]
  },
  {
    header: "Earnings", 
    array:["Become an Affiliate", "Advertise your product", "Sell on Market"]
  },
  {
    header: "Account", 
    array:["Your account", "Returns Centre", "100 % purchase protection", "Chat with us", "Help"]
  },
]

export const bestSelling = {
  category: "Fruit and vegetables",
  limit: 3
}

export const bestFarmers = {
  category: "Meat and fish",
  name: "Wild-Caught Salmon"
}

export const blogPosts = [
  {
    title: "From Farm to Table: Fresh Ingredient Recipes",
    img: "/blog-sm-1.jpg"
  },
  {
    title: "Exploring International Flavors at Home",
    img: "/blog-sm-2.jpg"
  },
  {
    title: "The Art of Food Presentation",
    img: "/blog-sm-3.jpg"
  },
  {
    title: "Healthier Choices, Tastier Bites",
    img: "/blog-sm-4.jpg"
  },
  {
    title: "Culinary Adventures: Taste the World",
    img: "/blog-sm-6.jpg"
  },
  {
    title: "From Farm to Table: Fresh Ingredient Recipes",
    img: "/blog-sm-5.jpg"
  },
  {
    title: "Kitchen Magic: Creative Cooking Ideas",
    img: "/blog-sm-7.jpg"
  },
  {
    title: "Dessert Delights: Satisfy Your Sweet Tooth",
    img: "/blog-sm-8.jpg"
  },
]

export const culinaryJourney = {
  title: "Exploring International Flavors at Home: A Culinary Journey Worth Taking",
  introduction: "In our fast-paced world, where travel has become a luxury, one way to experience different cultures and traditions is through their cuisine. Food has the remarkable ability to transport us to far-off lands, to connect us with people we've never met, and to tell stories of heritage and history. If you're looking for an adventure that doesn't require a passport, join us on a culinary journey as we explore international flavors right from the comfort of your own kitchen.",
  sections: [
    {
      title: "The Allure of International Cuisine",
      content: "One of the most enticing aspects of international cuisine is its diversity. Each country, region, and even household has its own unique flavors, ingredients, and techniques. Whether you're a seasoned home cook or a novice in the kitchen, experimenting with international dishes can be a thrilling experience. Imagine savoring the rich spices of Indian curry, the delicate balance of umami in Japanese sushi, the hearty warmth of Italian pasta, or the fiery kick of Mexican salsa. These flavors not only delight the taste buds but also provide insight into the cultural tapestry of our world. They're a window into the soul of a people, revealing their history, geography, and traditions."
    },
    {
      title: "The Global Pantry: Where to Begin",
      content: "Embarking on this culinary journey begins with a well-stocked pantry. While you may not have every exotic spice and condiment at your disposal, there are several essential ingredients that can serve as a passport to the world of flavors. Here are a few to get you started: ..."
    },
    {
      title: "Embarking on Your Culinary Adventure",
      content: "Now that you've assembled your global pantry, it's time to embark on your culinary adventure. Here's how to get started: ..."
    },
    {
      title: "Recipes from Around the Globe",
      content: "To inspire your culinary journey, here are a few recipes from different corners of the world: ..."
    },
    {
      title: "Conclusion: The World on Your Plate",
      content: "Exploring international flavors at home is more than just cooking; it's a journey of discovery and connection. With each dish you prepare, you're not only bringing the world to your table but also celebrating the rich tapestry of human culture. So, step into your kitchen, put on an apron, and get ready for a culinary adventure that will not only tantalize your taste buds but also broaden your horizons. Bon appétit, buon appetito, guten Appetit, or as they say in every corner of the world, enjoy your meal!"
    }
  ]
};


export const subcategory = {
  "bakery": ["Bread", "Pastry", "Cookies"],
  "fruit-vegetables": ["Fruit", "Vegetable", "Grains", "Vegetables"],
  "meat-fish": ["Fish", "Meat"],
  "drinks": ["Tea", "Juice", "Coffee", "Water"],
  "kitchen": ["Cutlery", "Cookware", "Appliances", "Dining"],
  "baby": ["Diapers", "Hygiene"],
  "pharmacy": ["Pain Relief", "Cold & Flu"],
  "all": ["Bread", "Pastry", "Cookies", "Fruit", "Vegetable", "Grains", "Vegetables", "Fish", "Meat", "Tea", "Juice", "Coffee", "Water", "Cutlery", "Cookware", "Appliances", "Dining", "Diapers", "Hygiene", "Pain Relief", "Cold & Flu"]
}

export const minmaxPrice = {
  "bakery": [1.99, 3.99],
  "fruit-vegetables": [0.99, 4.99],
  "meat-fish": [6.99, 12.99],
  "drinks": [1.99, 1.99],
  "kitchen": [2.49, 49.99],
  "baby": [2.99, 19.99],
  "pharmacy": [4.49, 5.49],
  "all": [0.99, 49.99],
}
