import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '@/lib/prismadb';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    console.log('bébé');
};
export default handler;
