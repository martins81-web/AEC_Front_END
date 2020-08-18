const movies = [
  {
    "id" : 1,
    "title":"Interstellar",
    "year":"2014",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    "director":"Christopher Nolan",
    "writers": [
      {
        "name": "Jonathan Nolan",
      },
      {
        "name": "Christopher Nolan",
      },
    ],
    "stars": [
      {
        "name": "Matthew McConaughey",
      },
      {
        "name": "Anne Hathaway",
      },
      {
        "name": "Jessica Chastain",
      },
    ],
  },
  {
    "id" : 2,
    "title":"The Shawshank Redemption",
    "year":"1994",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    "director":"Frank Darabont",
    "writers": [
      {
        "name": "Stephen King",
      },
      {
        "name": "Frank Darabont",
      },
    ],
    "stars": [
      {
        "name": "Tim Robbins",
      },
      {
        "name": "Morgan Freeman",
      },
      {
        "name": "Bob Gunton",
      },
    ],
  },
  {
    "id" : 3,
    "title":"Pulp Fiction",
    "year":"1994",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    "director":"Quentin Tarantino",
    "writers": [
      {
        "name": "Quentin Tarantino",
      },
      {
        "name": "Roger Avary",
      },
    ],
    "stars": [
      {
        "name": "John Travolta",
      },
      {
        "name": "Uma Thurman",
      },
      {
        "name": "Samuel L. Jackson",
      },
    ],
  },
  {
    "id" : 4,
    "title":"The Wolf of Wall Street",
    "year":"2013",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png",
    "director":"Martin Scorsese",
    "writers": [
      {
        "name": "Terence Winter",
      },
      {
        "name": "Jordan Belfort",
      },
    ],
    "stars": [
      {
        "name": "Leonardo DiCaprio",
      },
      {
        "name": "Jonah Hill",
      },
      {
        "name": "Margot Robbie",
      },
    ],
  },
  {
    "id" : 5,
    "title":"The Empire Strikes Back",
    "year":"1980",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg",
    "director":"Irvin Kershner",
    "writers": [
      {
        "name": "Leigh Brackett",
      },
      {
        "name": "Lawrence Kasdan",
      },
    ],
    "stars": [
      {
        "name": "Mark Hamill",
      },
      {
        "name": "Harrison Ford",
      },
      {
        "name": "Carrie Fisher",
      },
    ],
  },
  {
    "id" : 6,
    "title":"Fight Club",
    "year":"1999",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
    "director":"David Fincher",
    "writers": [
      {
        "name": "Chuck Palahniuk",
      },
      {
        "name": "Jim Uhls",
      },
    ],
    "stars": [
      {
        "name": "Brad Pitt",
      },
      {
        "name": "Edward Norton",
      },
      {
        "name": "Meat Loaf",
      },
    ],
  },
  {
    "id" : 7,
    "title":"Rounders",
    "year":"1998",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/6/67/RoundersPoster.jpg",
    "director":"John Dahl",
    "writers": [
      {
        "name": "David Levien",
      },
      {
        "name": "Brian Koppelman",
      },
    ],
    "stars": [
      {
        "name": "Matt Damon",
      },
      {
        "name": "Edward Norton",
      },
      {
        "name": "Gretchen Mol",
      },
    ],
  },
  {
    "id" : 8,
    "title":"Forrest Gump",
    "year":"1994",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    "director":"Robert Zemeckis",
    "writers": [
      {
        "name": "Winston Groom",
      },
      {
        "name": "Eric Roth",
      },
    ],
    "stars": [
        "Tom Hanks", "Robin Wright","Gary Sinise"
    ],
  },
  {
    "id" : 9,
    "title":"American History X",
    "year":"1998",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/3/39/American_History_X_poster.png",
    "director":"Tony Kaye",
    "writers": [
      {
        "name": "David McKenna",
      },
    ],
    "stars": [
      {
        "name": "Edward Norton",
      },
      {
        "name": "Edward Furlong",
      },
      {
        "name": "Beverly D'Angelo",
      },
    ],
  },
  {
    "id" : 10,
    "title":"Good Will Hunting",
    "year":"1997",
    "picture" : "https://upload.wikimedia.org/wikipedia/en/5/52/Good_Will_Hunting.png",
    "director":"Gus Van Sant",
    "writers": [
      {
        "name": "Matt Damon",
      },
      {
        "name": "Ben Affleck",
      },
    ],
    "stars": [
      {
        "name": "Robin Williams",
      },
      {
        "name": "Matt Damon",
      },
      {
        "name": "Ben Affleck",
      },
    ],
  },
]

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  movies
};
