/*   STEP 1   */
export const leagueID = "987323032320512000"; // your league ID
export const leagueName = "🌎 Globall League 🏈"; // your league name
export const dues = 0; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the Globall League homepage</p>
  <p>Here you can find news, information, and history of our league</p>
  <p>If you see any errors or have any suggestions, page Sam</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
     {
       "name": "Samuel",
       "managerID": "522812434414923776",
       "location": "🇮🇸", // (optional)
       "bio": "A guy who hoards nfl data and wastes nights coding algorithms just so he can take Pitts again",
       "photo": "/managers/samuel.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Tom", // Can be anything (usually your rival's name)
         link: 2, // manager array number within this array, or null to link back to all managers page
         image: "/managers/tom.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 8148, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "I'll definitely win next year",
       "tradingScale": 9, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "name": "Stefán",
       "managerID": "522912360010473472",
       "location": "🇩🇰", // (optional)
       "bio": "A bears man, also a fan of the Chicago Bears",
       "photo": "/managers/stefan.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Samuel", // Can be anything (usually your rival's name)
         link: 0, // manager array number within this array, or null to link back to all managers page
         image: "/managers/sam.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 8259, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "K", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "I would've won if...",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "name": "Tom",
       "managerID": "553941756844482560",
       "location": "🇦🇺", // (optional)
       "bio": "Never misses a playoff",
       "photo": "/managers/tom.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Samuel", // Can be anything (usually your rival's name)
         link: 0, // manager array number within this array, or null to link back to all managers page
         image: "/managers/samuel.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 167, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "???",
       "tradingScale": 6, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "name": "Gunnar Ingi",
       "managerID": "726989807296782336",
       "location": "🇮🇸", // (optional)
       "bio": "Just walkin around knowing a lot about NFL but not mentioning it",
       "photo": "/managers/gunnar.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2023, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Samuel", // Can be anything (usually your rival's name)
         link: 0, // manager array number within this array, or null to link back to all managers page
         image: "/managers/samuel.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 6813, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "???",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "name": "Örn",
       "managerID": "987354844526698496",
       "location": "🇮🇸🍷", // (optional)
       "bio": "Probably at a French Chateau homeshare drinking Pinot Gris and listening to Spandeau Ballet",
       "photo": "/managers/orn.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2021, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Samuel", // Can be anything (usually your rival's name)
         link: 0, // manager array number within this array, or null to link back to all managers page
         image: "/managers/samuel.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 8290, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "CB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Feelings over Fantasy Projections",
       "tradingScale": 4, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "name": "Jón Skafti",
       "managerID": "987372919103803392",
       "location": "🇮🇸", // (optional)
       "bio": "Deep in the works of John Nash trying to concoct the perfect trade",
       "photo": "/managers/jon.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Samuel", // Can be anything (usually your rival's name)
         link: 0, // manager array number within this array, or null to link back to all managers page
         image: "/managers/samuel.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 296, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "CB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "$$$",
       "tradingScale": 9, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },  
     {
       "name": "Arnar Mar",
       "managerID": "987374686566662144",
       "location": "🇮🇸", // (optional)
       "bio": "Not afraid of the deep end, both of fantasy football or vesturbærslaug",
       "photo": "/managers/arnar.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Örn", // Can be anything (usually your rival's name)
         link: 4, // manager array number within this array, or null to link back to all managers page
         image: "/managers/orn.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 7538, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Too early to say",
       "tradingScale": 2, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },  
     {
       "name": "Óli",
       "managerID": "987389293255561216",
       "location": "🇮🇸", // (optional)
       "bio": "Can probably teach us a thing or two",
       "photo": "/managers/oli.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 1945, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Skaftinn", // Can be anything (usually your rival's name)
         link: 5, // manager array number within this array, or null to link back to all managers page
         image: "/managers/jon.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 7062, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "K", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Quietly win",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },  
     {
       "name": "Snorri",
       "managerID": "988173650673119232",
       "location": "🇮🇸🌎", // (optional)
       "bio": "Has strong views on the Nagorno-Karabakh conflict",
       "photo": "/managers/snorri.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Samuel", // Can be anything (usually your rival's name)
         link: 0, // manager array number within this array, or null to link back to all managers page
         image: "/managers/samuel.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 2514, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Dostoyevsky with a pinch of Thatcher",
       "tradingScale": 1, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },  
     {
       "name": "Rob",
       "managerID": "988272573140058112",
       "location": "🇺🇸", // (optional)
       "bio": "Gonna tidy up this league like a lawn, and harvest talent like they're baby tomatoes",
       "photo": "/managers/rob.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Stefán", // Can be anything (usually your rival's name)
         link: 1, // manager array number within this array, or null to link back to all managers page
         image: "/managers/stefan.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Saquon deez",
       "tradingScale": 4, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },  
]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
