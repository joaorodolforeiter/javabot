import ProductCard from "../../components/ProductCard";
import { prisma } from "~/server/db";
import { type InferGetServerSidePropsType } from "next";

export async function getServerSideProps() {
  const products = await prisma.products.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      image: true,
    },
  });
  return {
    props: { products },
  };
}

export default function Loja({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex h-full flex-col gap-6 text-emerald-100">
      <div className="p-6 text-4xl">Loja</div>
      <div className="flex flex-1 flex-col  gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
