import {PrismaClient} from "@prisma/client";



export default function prismaData (res : any) {

    console.log(res)
    return(
        <div>
            12345
        </div>
    )
}



/*export const getPrismaSideProps = async () => {
    const prisma = new PrismaClient();
    const prismaData = await prisma.word.findMany();


    return{
            props: {prismaData}
    }
}*/
