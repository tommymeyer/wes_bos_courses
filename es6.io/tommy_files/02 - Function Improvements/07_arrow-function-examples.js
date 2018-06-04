const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

// {
//   name: 'Wes Bos',
//   place: 1,
//   race: race
// }

// const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));

const ages = [25, 62, 43, 95, 82, 85, 76];

const old = ages.filter(age => age >= 60);
console.log(old);
