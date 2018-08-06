// // old way
// var text = "hello there, \
//   how are you \
// ";


// // Markup as a string
// const person = {
//   name: 'Wes',
//   job: 'Web Developer',
//   city: 'Hamilton',
//   bio: 'Wes is a really cool guy that loves to teach web development!'
// }

// const markup = `
//   <div class="person">
//     <h2>
//       ${person.name}
//       <span class="job">${person.job}</span>
//     </h2>
//     <p class="location">${person.city}</p>
//     <p class="bio">${person.bio}</p>
//   </div>
// `;


// // Template string nesting
// const dogs = [
//   { name: 'Snickers', age: 2 },
//   { name: 'Hugo', age: 8 },
//   { name: 'Sunny', age: 1 },
// ];

// const markup = `
//   <ul class="dogs">
//     ${dogs.map(dog => `
//       <li>
//         ${dog.name} 
//         is 
//         ${dog.age * 7}
//       </li>`).join('')}
//   </ul>
// `;


// // If statements inside template strings
// const song = {
//   name: 'Dying to live',
//   artist: 'Tupac',
//   featuring: 'Biggie Smalls'
// };

// const markup = `
//   <div class="song">
//     <p>
//       ${song.name} - ${song.artist}
//       ${song.featuring ? `(Featuring ${song.featuring})` : ""}
//     </p>
//   </div>
// `;


// // Render Function in Template Strings
const beer = {
  name: 'Belgian Wit',
  brewery: 'Steam Whistle Brewery',
  keywords: ['pale', 'cloudy', 'spiced', 'crisp']
};

function renderKeywords(keywords) {
  return `
    <ul>
      ${keywords.map(keyword => `<li>${keyword}</li>`).join("")}
    </ul>
  `;
}

const markup = `
  <div class="beer">
    <h2>${beer.name}</h2>
    <p class="brewery">${beer.brewery}</p>
    ${renderKeywords(beer.keywords)}
  </div>
`;


document.body.innerHTML = markup;