const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
  for (let i: number = 0; i < 10; i++) {
    const product = await prisma.product.create({
      data: {
        title: faker.commerce.product(),
        image: faker.image.food(),
        price: faker.commerce.price(),
      },
    });
    console.log({ product });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
