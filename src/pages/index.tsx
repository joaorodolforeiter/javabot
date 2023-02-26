/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { animals } from "../animals";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-12 p-6 md:justify-around">
      <div className="flex flex-col gap-12">
        <div className="mt-6 text-5xl text-emerald-100 md:text-center">
          Bem-vindo a nossa loja de animas nem um pouco ilegais
        </div>
        <div className="text-lg text-emerald-100 md:text-center">
          Nossa loja possui ama grande variedade de animais exóticos e
          registrados*
        </div>
      </div>
      <Link
        className="rounded-xl bg-emerald-400 p-4 text-center max-md:w-full"
        href="/loja"
      >
        Compre Agora
      </Link>
      <div className="flex gap-6 max-md:hidden max-md:flex-col">
        {animals.slice(0, 3).map((animal) => (
          <Link
            key={animal.id}
            href={"loja/" + animal.id}
            className="max-w-full flex-1 rounded-lg bg-zinc-800 shadow-md md:max-w-xs"
          >
            <div className="p-3 text-center text-emerald-100">
              {animal.name}
            </div>
            <img className="aspect-video" src={animal.image} alt="" />
            <div className="p-3 text-center text-2xl text-emerald-300">
              {animal.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
