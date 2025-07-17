import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const main = async () => {
    // const user = await prisma.user.create({
    //     data: {
    //         name: "vindo",
    //         email: "kaushal@gmail.com"
    //     },
    // });
    // console.log(user);

    // const newUsers = await prisma.user.createMany({
    //     data: [
    //         { name: "vindo", email: "vindo_new@gmail.com" },
    //         { name: "kaushal", email: "kaushal_new@gmail.com" }
    //     ],
    // });
    // console.log(newUsers);

    // const users = await prisma.user.findMany();
    // console.log(users);

    
    // const user = await prisma.user.findUnique({
    //     where: {id: 1}
    // });
    // console.log(user);

    // const updatedUser = await prisma.user.update({
    //     where: {id: 1},
    //     data: {name: "bahatlal"}

    // const updatedUser = await prisma.user.updateMany({
    //     where: {id: 1},
    //     data: {name: "bhurabhai"}

    // });
    // console.log(updatedUser);


    // const deleteUser = await prisma.user.delete({
    //     where: {id: 1}
    // })
    //  console.log(deleteUser);

        const deleteUser = await prisma.user.deleteMany({
        where: [{id:1}, {id:9}]
    })
     console.log(deleteUser);
};

main()
.catch((e) => console.error(e))
.finally(async () => {
    await prisma.$disconnect();
});

