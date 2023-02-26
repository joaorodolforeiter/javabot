/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { type InferGetServerSidePropsType } from "next/types";
import { ArrowUUpLeft } from "phosphor-react";
import color from "tailwindcss/colors";
import { prisma } from "~/server/db";
import { z } from "zod";

export const getServerSideProps = async (context: { params: unknown }) => {
  const param = z.object({
    id: z.string(),
  });
  const parsedData = param.safeParse(context?.params);
  if (parsedData.success) {
    const product = await prisma.products.findUnique({
      where: { id: parsedData.data.id },
      select: {
        id: true,
        name: true,
        price: true,
        image: true,
        info: true,
      },
    });
    return {
      props: {
        product,
      },
    };
  }
};

export default function ProductInfo({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  return (
    <div className="flex h-full flex-col">
      <button onClick={() => router.back()} className="p-4">
        <ArrowUUpLeft size={40} weight="fill" color={color.emerald[100]} />
      </button>
      <div className="flex h-full w-full gap-6 p-10 max-md:flex-col max-md:text-center">
        <img
          className="aspect-square h-72 w-72 rounded-lg max-md:self-center"
          src={product?.image}
          alt=""
        />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col gap-6">
            <div className="text-5xl text-emerald-100">{product?.name}</div>
            <div className="text-emerald-300">{product?.price}</div>
            <div className="mb-8 text-justify text-emerald-100">
              {product?.info}
            </div>
          </div>
          <div className="flex w-full gap-3 text-lg">
            <button className="w-full rounded-xl bg-zinc-700 p-4 text-emerald-100">
              Adicionar ao Carrinho
            </button>
            <button className="w-full rounded-xl bg-emerald-400 p-4 text-zinc-900">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
