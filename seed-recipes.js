const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

// Read .env.local
const envContent = fs.readFileSync('.env.local', 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const [key, ...values] = line.split('=');
  if (key && values.length > 0) {
    env[key.trim()] = values.join('=').trim();
  }
});

const supabaseUrl = env.SUPABASE_URL;
const supabaseKey = env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const recipes = [
  {
    "id": 1739534189995,
    "title": "Pav Bhaji",
    "ingredients": [
      "3 medium-sized potatoes (boiled & mashed) 1 cup cauliflower (finely chopped) 1/2 cup green peas 1/2 cup carrots (finely chopped) 1/2 cup capsicum (finely chopped) 2 large tomatoes (finely chopped) 1 large onion (finely chopped) 1 tbsp ginger-garlic paste 2 tbsp butter (for extra taste) 1 tbsp oil 1 tsp cumin seeds 1 1/2 tsp pav bhaji masala 1/2 tsp turmeric powder 1 tsp red chili powder 1/2 tsp garam masala Salt to taste 1 cup water 2 tbsp coriander leaves (for garnish) 1 tbsp lemon juice For Pav (Bread Rolls): 6 pav (Indian bread rolls) 2 tbsp butter 1/2 tsp pav bhaji masala"
    ],
    "instructions": "Step 1: Boil & Mash Vegetables\nBoil potatoes, green peas, carrots, and cauliflower until soft.\nMash them well and keep them aside.\nStep 2: Prepare the Bhaji\nHeat oil and butter in a pan, add cumin seeds.\nAdd chopped onions and sauté until golden brown.\nAdd ginger-garlic paste and cook until the raw smell disappears.\nAdd chopped tomatoes and cook until they turn soft.\nAdd capsicum and sauté for a minute.\nAdd turmeric, red chili powder, pav bhaji masala, garam masala, and salt.\nMix in the mashed vegetables and cook on low flame for 5-7 minutes.\nAdd water as needed and mash everything together until smooth.\nFinish with lemon juice and garnish with coriander leaves.\nStep 3: Toast the Pav\nHeat butter in a pan, sprinkle pav bhaji masala.\nToast pav buns until golden brown and crisp.\nStep 4: Serve\nServe hot bhaji with butter-toasted pav, chopped onions, lemon wedges, and extra butter on top! 😍🔥",
    "dietType": "vegetarian",
    "image": "https://th.bing.com/th/id/OIP.fRZW1j0fLNdRzYyxRcu8wgHaFj?rs=1&pid=ImgDetMain",
    "analyzedInstructions": [
      {
        "steps": [
          {
            "number": 1,
            "step": "Step 1: Boil & Mash Vegetables"
          },
          {
            "number": 2,
            "step": "Boil potatoes, green peas, carrots, and cauliflower until soft."
          },
          {
            "number": 3,
            "step": "Mash them well and keep them aside."
          },
          {
            "number": 4,
            "step": "Step 2: Prepare the Bhaji"
          },
          {
            "number": 5,
            "step": "Heat oil and butter in a pan, add cumin seeds."
          },
          {
            "number": 6,
            "step": "Add chopped onions and sauté until golden brown."
          },
          {
            "number": 7,
            "step": "Add ginger-garlic paste and cook until the raw smell disappears."
          },
          {
            "number": 8,
            "step": "Add chopped tomatoes and cook until they turn soft."
          },
          {
            "number": 9,
            "step": "Add capsicum and sauté for a minute."
          },
          {
            "number": 10,
            "step": "Add turmeric, red chili powder, pav bhaji masala, garam masala, and salt."
          },
          {
            "number": 11,
            "step": "Mix in the mashed vegetables and cook on low flame for 5-7 minutes."
          },
          {
            "number": 12,
            "step": "Add water as needed and mash everything together until smooth."
          },
          {
            "number": 13,
            "step": "Finish with lemon juice and garnish with coriander leaves."
          },
          {
            "number": 14,
            "step": "Step 3: Toast the Pav"
          },
          {
            "number": 15,
            "step": "Heat butter in a pan, sprinkle pav bhaji masala."
          },
          {
            "number": 16,
            "step": "Toast pav buns until golden brown and crisp."
          },
          {
            "number": 17,
            "step": "Step 4: Serve"
          },
          {
            "number": 18,
            "step": "Serve hot bhaji with butter-toasted pav, chopped onions, lemon wedges, and extra butter on top! 😍🔥"
          }
        ]
      }
    ],
    "nutrition": {
      "nutrients": []
    }
  },
  {
    "id": 1739594662789,
    "title": "French Fries",
    "ingredients": [
      "4 large potatoes (Russet potatoes work best) 4 cups vegetable oil (for frying) 1 tsp salt (or to taste) ½ tsp black pepper (optional) ½ tsp paprika (optional",
      "for extra flavor) 1 tbsp cornstarch (optional",
      "for crispiness)"
    ],
    "instructions": "Step 1: Prepare the Potatoes\n\nPeel the potatoes (optional) and cut them into thin strips (about ¼ inch thick).\nSoak the cut potatoes in cold water for at least 30 minutes (or up to 2 hours) to remove excess starch.\nDrain the potatoes and pat them dry using a paper towel.\nStep 2: Pre-frying (for extra crispy fries, optional)\n\nHeat oil in a deep pan or fryer to 325°F (163°C).\nFry the potatoes in batches for about 3-4 minutes, until soft but not browned.\nRemove and drain on a paper towel. Let them cool for 10-15 minutes.\nStep 3: Final Frying\n\nIncrease the oil temperature to 375°F (190°C).\nFry the potatoes again for 2-3 minutes, or until golden brown and crispy.\nRemove from oil and place on a paper towel to drain excess oil.\nStep 4: Season and Serve\n\nImmediately sprinkle salt, black pepper, and paprika over the hot fries.\nServe hot with ketchup, mayonnaise, or your favorite dipping sauce.",
    "dietType": "vegetarian",
    "image": "https://www.recipetineats.com/tachyon/2022/09/Fries-with-rosemary-salt_1.jpg?resize=900%2C1125&zoom=0.72",
    "analyzedInstructions": [
      {
        "steps": [
          {
            "number": 1,
            "step": "Step 1: Prepare the Potatoes"
          },
          {
            "number": 2,
            "step": "Peel the potatoes (optional) and cut them into thin strips (about ¼ inch thick)."
          },
          {
            "number": 3,
            "step": "Soak the cut potatoes in cold water for at least 30 minutes (or up to 2 hours) to remove excess starch."
          },
          {
            "number": 4,
            "step": "Drain the potatoes and pat them dry using a paper towel."
          },
          {
            "number": 5,
            "step": "Step 2: Pre-frying (for extra crispy fries, optional)"
          },
          {
            "number": 6,
            "step": "Heat oil in a deep pan or fryer to 325°F (163°C)."
          },
          {
            "number": 7,
            "step": "Fry the potatoes in batches for about 3-4 minutes, until soft but not browned."
          },
          {
            "number": 8,
            "step": "Remove and drain on a paper towel. Let them cool for 10-15 minutes."
          },
          {
            "number": 9,
            "step": "Step 3: Final Frying"
          },
          {
            "number": 10,
            "step": "Increase the oil temperature to 375°F (190°C)."
          },
          {
            "number": 11,
            "step": "Fry the potatoes again for 2-3 minutes, or until golden brown and crispy."
          },
          {
            "number": 12,
            "step": "Remove from oil and place on a paper towel to drain excess oil."
          },
          {
            "number": 13,
            "step": "Step 4: Season and Serve"
          },
          {
            "number": 14,
            "step": "Immediately sprinkle salt, black pepper, and paprika over the hot fries."
          },
          {
            "number": 15,
            "step": "Serve hot with ketchup, mayonnaise, or your favorite dipping sauce."
          }
        ]
      }
    ],
    "nutrition": {
      "nutrients": []
    }
  },
  {
    "id": 1739605208709,
    "title": "Tomato Soup",
    "ingredients": [
      "4 large ripe tomatoes (or 2 cups canned tomatoes) 1 medium onion",
      "chopped 2 cloves garlic",
      "minced 1 small carrot",
      "chopped (optional",
      "for natural sweetness) 1 small potato",
      "chopped (for creaminess) 2 cups vegetable broth (or water) 1 tbsp butter or olive oil 1 tsp black pepper 1 tsp salt (adjust to taste) 1 tsp sugar (optional",
      "to balance acidity) ½ tsp red chili flakes (optional) ½ cup milk or cream (optional",
      "for a creamy texture) Fresh basil or coriander for garnish."
    ],
    "instructions": "Sauté Vegetables:\n\nHeat butter/oil in a pan.\nAdd chopped onions and garlic, sauté until translucent.\nAdd chopped tomatoes, carrot, and potato.\nCook the Soup:\n\nPour in vegetable broth/water and bring to a boil.\nLet it simmer for 10–15 minutes until vegetables are soft.\nBlend Smooth:\n\nAllow the mixture to cool slightly.\nBlend everything into a smooth purée using a mixer or immersion blender.\nStrain the soup (optional for a silky texture).\nSeason and Simmer:\n\nPour the puréed soup back into the pan.\nAdd salt, pepper, chili flakes, and sugar.\nLet it simmer for 5 minutes.\nStir in milk/cream if using.\nServe Hot:\n\nGarnish with fresh basil or coriander.\nEnjoy with croutons or toasted bread!",
    "dietType": "vegetarian",
    "image": "https://th.bing.com/th/id/OIP.qkBzinUWEm0g-uL_88wK9QHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "analyzedInstructions": [
      {
        "steps": [
          {
            "number": 1,
            "step": "Sauté Vegetables:"
          },
          {
            "number": 2,
            "step": ""
          },
          {
            "number": 3,
            "step": "Heat butter/oil in a pan."
          },
          {
            "number": 4,
            "step": "Add chopped onions and garlic, sauté until translucent."
          },
          {
            "number": 5,
            "step": "Add chopped tomatoes, carrot, and potato."
          },
          {
            "number": 6,
            "step": "Cook the Soup:"
          },
          {
            "number": 7,
            "step": ""
          },
          {
            "number": 8,
            "step": "Pour in vegetable broth/water and bring to a boil."
          },
          {
            "number": 9,
            "step": "Let it simmer for 10–15 minutes until vegetables are soft."
          },
          {
            "number": 10,
            "step": "Blend Smooth:"
          },
          {
            "number": 11,
            "step": ""
          },
          {
            "number": 12,
            "step": "Allow the mixture to cool slightly."
          },
          {
            "number": 13,
            "step": "Blend everything into a smooth purée using a mixer or immersion blender."
          },
          {
            "number": 14,
            "step": "Strain the soup (optional for a silky texture)."
          },
          {
            "number": 15,
            "step": "Season and Simmer:"
          },
          {
            "number": 16,
            "step": ""
          },
          {
            "number": 17,
            "step": "Pour the puréed soup back into the pan."
          },
          {
            "number": 18,
            "step": "Add salt, pepper, chili flakes, and sugar."
          },
          {
            "number": 19,
            "step": "Let it simmer for 5 minutes."
          },
          {
            "number": 20,
            "step": "Stir in milk/cream if using."
          },
          {
            "number": 21,
            "step": "Serve Hot:"
          },
          {
            "number": 22,
            "step": ""
          },
          {
            "number": 23,
            "step": "Garnish with fresh basil or coriander."
          },
          {
            "number": 24,
            "step": "Enjoy with croutons or toasted bread!"
          }
        ]
      }
    ],
    "nutrition": {
      "nutrients": []
    }
  },
  {
    "id": 1741196394828,
    "title": "Chocolate Kulfi",
    "ingredients": [
      "Full Cream Milk",
      "Vanilla Essence",
      "Cornflour",
      "Chopped Nuts",
      "Cardamom Powder",
      "Cocoa Powder",
      "Dark Chocolate",
      "Sugar",
      "Condensed Milk",
      "Full Cream Milk"
    ],
    "instructions": "Boil the Milk:\nAdd Sweetness:\nMelt the Chocolate\nThicken the Mixture\nFlavor It\nFreeze It\nLet the mixture cool down completely.\nPour into kulfi molds or any container.\nFreeze for 8-10 hours or overnight.\nServe & Enjoy! 🍦",
    "dietType": "vegetarian",
    "image": "https://static.toiimg.com/thumb/82340332.cms?imgsize=203242&width=509&height=340",
    "analyzedInstructions": [
      {
        "steps": [
          {
            "number": 1,
            "step": "Boil the Milk:"
          },
          {
            "number": 2,
            "step": "Add Sweetness:"
          },
          {
            "number": 3,
            "step": "Melt the Chocolate"
          },
          {
            "number": 4,
            "step": "Thicken the Mixture"
          },
          {
            "number": 5,
            "step": "Flavor It"
          },
          {
            "number": 6,
            "step": "Freeze It"
          },
          {
            "number": 7,
            "step": "Let the mixture cool down completely."
          },
          {
            "number": 8,
            "step": "Pour into kulfi molds or any container."
          },
          {
            "number": 9,
            "step": "Freeze for 8-10 hours or overnight."
          },
          {
            "number": 10,
            "step": "Serve & Enjoy! 🍦"
          }
        ]
      }
    ],
    "nutrition": {
      "nutrients": []
    }
  }
];

async function seed() {
  console.log("Seeding recipes to Supabase...");
  for (const recipe of recipes) {
    const { error } = await supabase
      .from('custom_recipes')
      .insert([
        { recipe_data: recipe }
      ]);
    if (error) {
      console.error('Error inserting recipe:', recipe.title, error);
    } else {
      console.log('Inserted:', recipe.title);
    }
  }
  console.log("Done!");
}

seed();
