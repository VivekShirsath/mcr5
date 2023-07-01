import { v4 as uuid } from "uuid";
export const recipeData = [
    {
        _id: uuid(),
      name: "Spaghetti Bolognese",
      ingredients: [
        "250g spaghetti",
        "400g ground beef",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "400g canned diced tomatoes",
        "2 tablespoons tomato paste",
        "1 teaspoon dried oregano",
        "1 teaspoon dried basil",
        "Salt and pepper to taste",
        "Grated Parmesan cheese for serving"
      ],
      instructions: [
        "Cook the spaghetti according to package instructions.",
        "In a large skillet, cook the ground beef over medium heat until browned. Add the chopped onion and minced garlic, and cook until the onion is soft.",
        "Add the diced tomatoes, tomato paste, oregano, basil, salt, and pepper to the skillet. Stir well and let it simmer for 15 minutes.",
        "Serve the Bolognese sauce over the cooked spaghetti. Sprinkle with grated Parmesan cheese.",
        "Enjoy your Spaghetti Bolognese!"
      ],
      cuisineType: "Italian",
      image: "https://tse4.mm.bing.net/th?id=OIP.oDtzKCux1ZemHEm9bQ7NnwHaE8&pid=Api&P=0&h=180"
    },
    {
        _id: uuid(),
      name: "Chicken Tikka Masala",
      ingredients: [
        "500g boneless, skinless chicken breasts",
        "1 cup plain yogurt",
        "2 tablespoons lemon juice",
        "2 teaspoons ground cumin",
        "2 teaspoons ground paprika",
        "2 teaspoons ground turmeric",
        "2 teaspoons ground garam masala",
        "1 teaspoon ground coriander",
        "1 teaspoon ground ginger",
        "Salt to taste",
        "1 tablespoon butter",
        "1 onion, chopped",
        "3 cloves garlic, minced",
        "1 can (400g) tomato sauce",
        "1 cup heavy cream",
        "Fresh cilantro for garnish"
      ],
      instructions: [
        "In a bowl, combine the yogurt, lemon juice, cumin, paprika, turmeric, garam masala, coriander, ginger, and salt. Mix well.",
        "Cut the chicken breasts into bite-sized pieces and add them to the yogurt mixture. Coat the chicken evenly and marinate for at least 1 hour, or overnight in the refrigerator.",
        "In a large skillet, melt the butter over medium heat. Add the chopped onion and minced garlic, and cook until the onion is soft.",
        "Add the marinated chicken to the skillet and cook until browned on all sides.",
        "Pour in the tomato sauce and bring to a simmer. Cook for 15-20 minutes, or until the chicken is cooked through.",
        "Stir in the heavy cream and simmer for an additional 5 minutes.",
        "Garnish with fresh cilantro and serve with rice or naan bread.",
        "Enjoy your Chicken Tikka Masala!"
      ],
      cuisineType: "Indian",
      image: "https://tse4.mm.bing.net/th?id=OIP.ypYqqX44HoRHAaaltLSxgQAAAA&pid=Api&P=0&h=180"
    },
    {
        _id: uuid(),
      name: "Caesar Salad",
      ingredients: [
        "1 head romaine lettuce, chopped",
        "1 cup croutons",
        "1/4 cup grated Parmesan cheese",
        "1/4 cup Caesar dressing",
        "2 tablespoons lemon juice",
        "1 clove garlic, minced",
        "Salt and pepper to taste",
        "Grilled chicken (optional)"
      ],
      instructions: [
        "In a large bowl, combine the chopped romaine lettuce, croutons, and grated Parmesan cheese.",
        "In a small bowl, whisk together the Caesar dressing, lemon juice, minced garlic, salt, and pepper.",
        "Pour the dressing over the lettuce mixture and toss until well coated.",
        "Top with grilled chicken if desired.",
        "Enjoy your Caesar Salad!"
      ],
      cuisineType: "International",
      image: "https://tse1.mm.bing.net/th?id=OIP.GJ8p5NoPRm-c1uWQspPYPAHaE5&pid=Api&P=0&h=180"
    }
  ];
  