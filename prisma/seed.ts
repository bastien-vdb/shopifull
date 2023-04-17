const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.product.create({
    data: {
      title: "computer",
      price: 19,
    },
  });
  console.log({ alice });
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
