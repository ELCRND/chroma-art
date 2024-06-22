const { faker } = require("@faker-js/faker");

const getRandomVulue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const paintsTypes = [
  "Декоративная перламутровая краска",
  "Декоративная краска",
  "Износостойкая краска",
  "Фасадная краска",
  "Интерьерная",
];

const bases = ["A", "D", "BW", "1"];
const colors = ["red", "blue", "green", "gold"];

module.exports = {
  async up(db) {
    return db.collection("paints").insertMany(
      [...Array(20)].map(() => {
        const type = getRandomVulue(paintsTypes);
        const color = getRandomVulue(colors);

        return {
          category: "paints",
          type,
          price: +faker.string.numeric(3),
          name: faker.lorem.sentence(3),
          description: faker.lorem.sentence(12),
          images: [
            `/paints/paint_${color}_1.png`,
            `/paints/paint_${color}_2.png`,
            `/paints/paint_${color}_3.png`,
          ],
          characteristics: {
            base: getRandomVulue(bases),
            glossLevel: +faker.string.numeric(1),
            method:
              "Наносится кистью, валиком, краскопультом или способом безвоздушного напыления.",
            time: +faker.string.numeric(1),
            sizes: [0.9, 2.7, 9],
            wet: +faker.string.numeric(2),
            temperature: +faker.string.numeric(1),
            substance:
              "1,43-1,35 ±0,015 кг/л в зависимости от типа базы (ISO 2811.01, 20cC)",
          },
        };
      })
    );
  },

  async down(db) {
    return db.collection("accessories").updateMany([]);
  },
};
