import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prismadb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (id) {
    try {
      const product = await prisma.product.findUnique({
        where: {
          id: id,
        },
      });
      return res.status(200).json(product);
    } catch (error) {
      console.log(error);
      return res.status(400).json("error");
    }
  }
  return res.end();
};
export default handler;
