const names = [

  { id: 1, name: "Lotte", surname: "Vos", gender: "female", region: "Netherlands" },
  { id: 2, name: "Twan van der", surname: "Velden", gender: "male", region: "Netherlands", },
  { id: 3, name: "Tineke", surname: "Willems", gender: "female", region: "Netherlands", },
  { id: 4, name: "Willemijn van der", surname: "Laan", gender: "female", region: "Netherlands", },
  { id: 5, name: "Aart", surname: "Peters", gender: "male", region: "Netherlands" },
  { id: 6, name: "Suzanne", surname: "Smeets", gender: "female", region: "Netherlands", },
  { id: 7, name: "Lisa", surname: "Smeets", gender: "female", region: "Netherlands" },
  { id: 8, name: "Renske van der", surname: "Wal", gender: "female", region: "Netherlands", },
  { id: 9, name: "Elise", surname: "Dekker", gender: "female", region: "Netherlands" },
  { id: 10, name: "Sander", surname: "Smit", gender: "male", region: "Netherlands" },
  { id: 11, name: "Wouter", surname: "Groen", gender: "male", region: "Netherlands" },
  { id: 12, name: "Stefan de", surname: "Bruin", gender: "male", region: "Netherlands", },
  { id: 13, name: "Maaike", surname: "Koster", gender: "female", region: "Netherlands", },
  { id: 14, name: "Quintin", surname: "Kuijpers", gender: "male", region: "Netherlands", },
  { id: 15, name: "Huib", surname: "Hoekstra", gender: "male", region: "Netherlands" },
  { id: 16, name: "Lonneke van", surname: "Dijk", gender: "female", region: "Netherlands", },
  { id: 17, name: "Camiel de", surname: "Graaf", gender: "male", region: "Netherlands", },
  { id: 18, name: "Lonneke", surname: "Evers", gender: "female", region: "Netherlands", },
  { id: 19, name: "Hendrika", surname: "Jacobs", gender: "female", region: "Netherlands", },
  { id: 20, name: "Thijs", surname: "Wolters", gender: "male", region: "Netherlands" },
  { id: 21, name: "Mirthe van", surname: "Dongen", gender: "female", region: "Netherlands", },
  { id: 22, name: "Willemijn", surname: "Smit", gender: "female", region: "Netherlands", },
  { id: 23, name: "Ineke", surname: "Bakker", gender: "female", region: "Netherlands" },
  { id: 24, name: "Noortje van der", surname: "Veen", gender: "female", region: "Netherlands", },
  { id: 25, name: "Anna van der", surname: "Horst", gender: "female", region: "Netherlands", },
  { id: 26, name: "Corien de", surname: "Bruin", gender: "female", region: "Netherlands", },
  { id: 27, name: "Sara van", surname: "Vliet", gender: "female", region: "Netherlands", },
  { id: 28, name: "Lisa van", surname: "Dongen", gender: "female", region: "Netherlands", },
  { id: 29, name: "Corien", surname: "Dekker", gender: "female", region: "Netherlands", },
  { id: 30, name: "Carlijn van der", surname: "Meulen", gender: "female", region: "Netherlands", },
  { id: 31, name: "Florus van der", surname: "Ven", gender: "male", region: "Netherlands", },
  { id: 32, name: "Mirthe", surname: "Timmermans", gender: "female", region: "Netherlands", },
  { id: 33, name: "Luuk", surname: "Verbeek", gender: "male", region: "Netherlands" },
  { id: 34, name: "Wies van de", surname: "Velde", gender: "female", region: "Netherlands", },
  { id: 35, name: "Victor de", surname: "Boer", gender: "male", region: "Netherlands" },
  { id: 36, name: "Renske de", surname: "Haan", gender: "female", region: "Netherlands", },
  { id: 37, name: "Christiaan", surname: "Bakker", gender: "male", region: "Netherlands", },
  { id: 38, name: "Boudewijn", surname: "Jansen", gender: "male", region: "Netherlands", },
  { id: 39, name: "Thomas de", surname: "Lange", gender: "male", region: "Netherlands", },
  { id: 40, name: "Elise", surname: "Visser", gender: "female", region: "Netherlands" },
  { id: 41, name: "Laura", surname: "Kuijpers", gender: "female", region: "Netherlands", },
  { id: 42, name: "Victor", surname: "Willems", gender: "male", region: "Netherlands" },
  { id: 43, name: "Tineke", surname: "Timmermans", gender: "female", region: "Netherlands", },
  { id: 44, name: "Roos", surname: "Hendriks", gender: "female", region: "Netherlands", },
  { id: 45, name: "Aad van", surname: "Leeuwen", gender: "male", region: "Netherlands", },
  { id: 46, name: "Aart", surname: "Scholten", gender: "male", region: "Netherlands" },
  { id: 47, name: "Rik", surname: "Huisman", gender: "male", region: "Netherlands" },
  { id: 48, name: "Mirthe", surname: "Jacobs", gender: "female", region: "Netherlands", },
  { id: 49, name: "Sara van den", surname: "Berg", gender: "female", region: "Netherlands", },
  { id: 50, name: "Valentijn", surname: "Hoekstra", gender: "male", region: "Netherlands", },
  { id: 51, name: "Paul de", surname: "Ruiter", gender: "male", region: "Netherlands" },
  { id: 52, name: "Emma", surname: "Koning", gender: "female", region: "Netherlands" },
  { id: 53, name: "Emiel", surname: "Vermeulen", gender: "male", region: "Netherlands", },
  { id: 54, name: "Paulien", surname: "Hoekstra", gender: "female", region: "Netherlands", },
  { id: 55, name: "Wies", surname: "Jonker", gender: "female", region: "Netherlands" },
  { id: 56, name: "Michiel", surname: "Meijer", gender: "male", region: "Netherlands" },
  { id: 57, name: "Jacolien van der", surname: "Laan", gender: "female", region: "Netherlands", },
  { id: 58, name: "Lotte", surname: "Timmermans", gender: "female", region: "Netherlands", },
  { id: 59, name: "Christien", surname: "Vos", gender: "female", region: "Netherlands", },
  { id: 60, name: "Femke", surname: "Kuiper", gender: "female", region: "Netherlands" },
  { id: 61, name: "Aart", surname: "Huisman", gender: "male", region: "Netherlands" },
  { id: 62, name: "Jaap", surname: "Sanders", gender: "male", region: "Netherlands" },
  { id: 63, name: "Gerard", surname: "Willems", gender: "male", region: "Netherlands" },
  { id: 64, name: "Kristien de", surname: "Haan", gender: "female", region: "Netherlands", },
  { id: 65, name: "Peter van der", surname: "Pol", gender: "male", region: "Netherlands", },
  { id: 66, name: "Eefke", surname: "Mulder", gender: "female", region: "Netherlands" },
  { id: 67, name: "Bas", surname: "Brouwer", gender: "male", region: "Netherlands" },
  { id: 68, name: "Johanneke", surname: "Bakker", gender: "female", region: "Netherlands", },
  { id: 69, name: "Vincent", surname: "Mulder", gender: "male", region: "Netherlands" },
  { id: 70, name: "Ineke van der", surname: "Velden", gender: "female", region: "Netherlands", },
  { id: 71, name: "Teun van", surname: "Loon", gender: "male", region: "Netherlands" },
  { id: 72, name: "Aart", surname: "Smit", gender: "male", region: "Netherlands" },
  { id: 73, name: "Paulien", surname: "Hendriks", gender: "female", region: "Netherlands", },
  { id: 74, name: "Bas van der", surname: "Laan", gender: "male", region: "Netherlands", },
  { id: 75, name: "Niek", surname: "Bosman", gender: "male", region: "Netherlands" },
  { id: 76, name: "Christien de", surname: "Boer", gender: "female", region: "Netherlands", },
  { id: 77, name: "Lotte", surname: "Groen", gender: "female", region: "Netherlands" },
  { id: 78, name: "Niek", surname: "Koning", gender: "male", region: "Netherlands" },
  { id: 79, name: "Lieke", surname: "Hermans", gender: "female", region: "Netherlands", },
  { id: 80, name: "Eefke", surname: "Vermeulen", gender: "female", region: "Netherlands", },
  { id: 81, name: "Emma", surname: "Gerritsen", gender: "female", region: "Netherlands", },
  { id: 82, name: "Thomas", surname: "Vermeulen", gender: "male", region: "Netherlands", },
  { id: 83, name: "Laurens van der", surname: "Wal", gender: "male", region: "Netherlands", },
  { id: 84, name: "Lieke", surname: "Kramer", gender: "female", region: "Netherlands" },
  { id: 85, name: "Tom de", surname: "Vries", gender: "male", region: "Netherlands" },
  { id: 86, name: "Victor", surname: "Smeets", gender: "male", region: "Netherlands" },
  { id: 87, name: "Thijs van de", surname: "Velde", gender: "male", region: "Netherlands", },
  { id: 88, name: "Yasmijn van", surname: "Vliet", gender: "female", region: "Netherlands", },
  { id: 89, name: "Victor van", surname: "Loon", gender: "male", region: "Netherlands", },
  { id: 90, name: "Paul", surname: "Hendriks", gender: "male", region: "Netherlands" },
  { id: 91, name: "Jan", surname: "Kuiper", gender: "male", region: "Netherlands" },
  { id: 92, name: "Camiel", surname: "Brouwer", gender: "male", region: "Netherlands" },
  { id: 93, name: "Olaf", surname: "Kuijpers", gender: "male", region: "Netherlands" },
  { id: 94, name: "Ido van den", surname: "Heuvel", gender: "male", region: "Netherlands", },
  { id: 95, name: "Nelleke", surname: "Vos", gender: "female", region: "Netherlands" },
  { id: 97, name: "Rob van den", surname: "Brink", gender: "male", region: "Netherlands", },
  { id: 97, name: "Ido", surname: "Mulder", gender: "male", region: "Netherlands" },
  { id: 98, name: "Ido", surname: "Mulder", gender: "male", region: "Netherlands" },
  { id: 99, name: "Ido", surname: "Mulder", gender: "male", region: "Netherlands" },
  { id: 100, name: "Ido", surname: "Mulder", gender: "male", region: "Netherlands" },
  { id: 101, name: "Teun", surname: "Bakker", gender: "male", region: "Netherlands" },
  { id: 102, name: "Kees", surname: "Smit", gender: "male", region: "Netherlands" },
  { id: 103, name: "Christien", surname: "Schouten", gender: "female", region: "Netherlands", },
  { id: 104, name: "Bart van der", surname: "Meer", gender: "male", region: "Netherlands", },
  { id: 105, name: "Lotte van den", surname: "Brink", gender: "female", region: "Netherlands", },
  { id: 106, name: "Suzanne", surname: "Bakker", gender: "female", region: "Netherlands", },
  { id: 107, name: "Doortje van den", surname: "Brink", gender: "female", region: "Netherlands", },
  { id: 108, name: "Tineke de", surname: "Ruiter", gender: "female", region: "Netherlands", },
  { id: 109, name: "Hanneke", surname: "Wolters", gender: "female", region: "Netherlands", },
  { id: 110, name: "Kees", surname: "Sanders", gender: "male", region: "Netherlands" },
  { id: 111, name: "Geert de", surname: "Ruiter", gender: "male", region: "Netherlands", },
  { id: 112, name: "Gerard van den", surname: "Berg", gender: "male", region: "Netherlands", },
  { id: 113, name: "Christien", surname: "Mulder", gender: "female", region: "Netherlands", },
  { id: 114, name: "Thomas van", surname: "Dijk", gender: "male", region: "Netherlands", },
  { id: 115, name: "Kees van der", surname: "Horst", gender: "male", region: "Netherlands", },
  { id: 116, name: "Laura", surname: "Mulder", gender: "female", region: "Netherlands" },
  { id: 117, name: "Wouter de", surname: "Ruiter", gender: "male", region: "Netherlands", },
  { id: 118, name: "Suzanne van den", surname: "Heuvel", gender: "female", region: "Netherlands", },
  { id: 119, name: "Mirthe", surname: "Kuiper", gender: "female", region: "Netherlands", },
  { id: 120, name: "Jacolien van", surname: "Wijk", gender: "female", region: "Netherlands", },
  { id: 121, name: "Laurens", surname: "Bakker", gender: "male", region: "Netherlands" },
  { id: 122, name: "Dirk", surname: "Bos", gender: "male", region: "Netherlands" },
  { id: 123, name: "Hendrika de", surname: "Ruiter", gender: "female", region: "Netherlands", },
  { id: 124, name: "Peter de", surname: "Leeuw", gender: "male", region: "Netherlands" },
  { id: 125, name: "Chris", surname: "Kramer", gender: "male", region: "Netherlands" },
];

const dentists = [
  { name: "Maarten van", surname: "Kloon", gender: "male", region: "Netherlands", },
  { name: "Christa", surname: "Kremer", gender: "female", region: "Netherlands" },
  { name: "Laurentien", surname: "Slager", gender: "female", region: "Netherlands" },
  { name: "Chris", surname: "Visser", gender: "male", region: "Netherlands", },
];

const assistents = [
  { name: "Petra", surname: "Zeewolf", gender: "female", region: "Netherlands" },
  { name: "Lieke", surname: "Martens", gender: "female", region: "Netherlands" },
  { name: "Maartje van", surname: "Kempen", gender: "female", region: "Netherlands", },
  { name: "Wies van", surname: "Venendaal", gender: "female", region: "Netherlands", },
];

const getRandomName = (array) => {
  const person = array[Math.floor(Math.random() * array.length)];
  return `${person.name} ${person.surname}`;
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomName(names),
  dentist: getRandomName(dentists),
  assistant: getRandomName(assistents),
});

const generateRandomAppointments = num =>
  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());

export default generateRandomAppointments;



// const getRandomName = () => {
//   const person = names[Math.floor(Math.random() * 250)];
//   return `${person.name} ${person.surname}`;
// };

// const getRandomTime = () => {
//   let hour;
//   while (true) {
//     hour = Math.floor(Math.random() * 24);
//     if (hour > 7 && hour < 19) {
//       return hour;
//     }
//   }
// };

// const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

// const generateRandomAppointment = () => ({
//   day: getRandomDay(),
//   time: getRandomTime(),
//   patient: getPatient(),
//   dentist: getRandomName(),
//   assistant: getRandomName(),
// });

// const generateRandomAppointments = num =>
//   Array(num)
//     .fill(0)
//     .map(_ => generateRandomAppointment());

// export default generateRandomAppointments;
