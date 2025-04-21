const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  for (let i = 0; i < 5; i++) {
    const email = faker.internet.email();
    const password = await bcrypt.hash('123456', 10);

    await prisma.user.create({
      data: {
        email,
        password,
      },
    });
  }
  console.log("✅ 5 users seeded");

  // Seed Employees
  for (let i = 0; i < 100; i++) {
    await prisma.employee.create({
      data: {
        name: faker.person.fullName(),
        age: Math.floor(Math.random() * 40) + 21,
        salary: parseFloat((Math.random() * 80000 + 20000).toFixed(2)),
        designation: faker.person.jobTitle(),
        department: faker.commerce.department(),
        dateOfJoining: faker.date.past(10),
        dateOfLeaving: Math.random() > 0.5 ? faker.date.recent() : null,
      },
    });
  }
  console.log("✅ 100 employees seeded");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
