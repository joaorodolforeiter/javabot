import { prisma } from "~/server/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const Product = z.object({
    name: z.string(),
    info: z.string(),
    image: z.string(),
    price: z.coerce.number(),
  });
  const data = req.query;
  const parsedData = Product.safeParse(data);
  if (parsedData.success) {
    await prisma.products.create({
      data: {
        name: parsedData.data.name,
        info: parsedData.data.info,
        price: parsedData.data.price,
        image: parsedData.data.image,
      },
    });
  }

  res.status(200).json("cadastrado com sucesso");
}
