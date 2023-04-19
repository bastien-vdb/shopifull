import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prismadb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const products = await prisma.product.findMany();
    if (products) {
      return res.status(200).json(products);
    } else return res.status(200).json("no data");
  } catch (error) {
    return res.status(400).json(error);
  }
};
export default handler;
