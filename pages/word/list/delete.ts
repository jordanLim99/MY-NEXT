import {PrismaClient} from "@prisma/client";

export default async function DelItem ( {idValue} : any) {
    const prisma= new PrismaClient;
    const delItem = await prisma.word.delete({
        where: {
            id : idValue
        },
    })
    return delItem;
}


export async function deleteWord(id : any) {
    const response = await fetch(`http://localhost:3000/api`, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },

    });
    return console.log("deleted");
}
