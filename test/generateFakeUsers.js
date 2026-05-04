import { faker } from "@faker-js/faker";

const generateFakeUser = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    username: faker.internet.username(),
    // password: faker.string.alpha(4),
    password: faker.helpers.fake("$argon2id$v=19$m=65536,t=3,p=4$YkFKUX343TE2hE6A2sjghA$uzvZ0s+PKDvIlGXaIjYsUVKrJjOe5JH0k+6F6LI97+s"),
    // password: faker.helpers.arrayElement(["test"]),
    role: faker.helpers.arrayElement([ "User" ])
  }
}

export const generateFakeUsers = (length) => {
  const users = []
  Array.from({ length: length }).forEach(() => {
    users.push(generateFakeUser())
  })
  return users
}


// In the terminal run "node users.js" in the test folder to generate data for the database (*right now it is set to generate 10 listings each time you enter "node users.js")


// address: {
//   street: faker.location.streetAddress(),
//   // city: faker.location.city(),
//   city: faker.helpers.arrayElement(["Sierra Vista", "Goodyear", "Flagstaff", "Hereford", "Scottsdale", "Prescott", "Tucson", "Mesa", "Phoenix"]),
//   // state: faker.location.state({ abbreviated: true }),
//   state: "AZ",
//   zipCode: faker.number.int({ min: 10000, max: 99999 })
// },
// tags: faker.helpers.arrayElement(["New Listings", "Price Reduced", "Open Houses", "Recently Sold", "New Construction", "New Home Communities", "Land", "Forclosures"]),
// images: [ "coming-soon.jpg" ],
// price: faker.number.int({ min: 250000, max: 2000000, multipleOf: 10000 }),
// bedrooms: faker.number.int({ min: 1, max: 8 }),
// bathrooms: faker.number.int({ min: 1, max: 4 }),
// sqftHouse: faker.number.int({ min: 900, max: 3500, multipleOf: 10 }),
// sqftLot: faker.number.int({ min: 3500, max: 12000, multipleOf: 10 }),
// garage: faker.number.int({ min: 0, max: 4 }),
// yearBuilt: faker.number.int({ min: 2000, max: 2024 }),
// listingAgent: { 
//   firstName: faker.person.firstName(), 
//   lastName: faker.person.lastName(), 
//   phone: faker.phone.number({ style: "national" }), 
//   brokerage: faker.helpers.arrayElement(["Real Real Realty", "Roalty Realty", "The Realest Realty That's Ever Realed", "Cozy Homes Realty", "Special Realty"]) 
// },
// views: faker.number.int({ min: 0, max: 3000 }),
// featured: faker.datatype.boolean()