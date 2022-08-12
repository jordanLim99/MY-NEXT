import {PrismaClient} from "@prisma/client";

export default  function List (data : any) {

    return(
        <div>
            <div className="w-full mx-auto bg-blue-100">
            {data.map((res : any)=>{
                    return (
                        <div key={res.id} className="flex flex-col">
                        <div>DAY : {res.day}</div>
                    <div>ENGLISH : {res.eng}</div>
                    <div>KOREAN : {res.kor}</div>
                    </div>
                )})
            }
            </div>

            </div>
    );
}

export const getPrismaSideProps = async () => {
    const prisma = new PrismaClient();
    const data = await prisma.word.findMany();
    return{
        props: {data}
    }
}
