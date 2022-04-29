const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    playersArray: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  ///////////////////////////////////////
  // Coding Challenge #1
  
  /* 
  We're building a football betting app (soccer for my American friends 😅)!
  
  Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
  
  1. Create one player array for each team (variables 'players1' and 'players2')
  2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
  3. Create an array 'allPlayers' containing all players of both teams (22 players)
  4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
  5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
  6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
  7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
  
  TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
  
  GOOD LUCK 😀
  */


  /**SOLUTION */

// #1 & 2
const players1 = [
    gk = 'Neuer',
    fieldPlayers = ['Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski']
];
const a = [gk, ...fieldPlayers];

const players2 = [
        gk = 'Burki',
        fieldPlayers = ['Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze']
    ];
const b = [gk, ...fieldPlayers];

// #3
const allPlayers = [...a, ...b];

// #4
const playersFinal = [...allPlayers, ...['Thiago', 'Coutinho', 'and Perisic']];

// #5
const team1 = 1.33;
const draw = 3.25
const team2 = 6.5;

// #6
const printGoals = () => {
    let scored = [a[4], a[8], a[5], a[10]];
    for (const [numberof,players] of scored.entries()) {
        console.log(`${numberof +1}. ${players}`);
    }
}
printGoals(game.scored);
// #7

console.log(`The team with lower odds(${team1}) is more likely to win`)