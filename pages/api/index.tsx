import {PrismaClient} from '@prisma/client';
import NextCors from 'nextjs-cors';

export default async function WordHandler(req : any, res : any) {
    await NextCors( req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
    });



    const prisma = new PrismaClient();
    switch(req.method) {
        case 'GET':
            res.json(await prisma.word.findMany({
            }))
            break;
        case 'POST':
            const {eng, kor, day, isDone} = req.body;
            console.log(req.body);
            res.json(await prisma.word.create({
                data: {
                    eng,
                    kor,
                    day,
                    isDone,
                }
            }))
    }

}
