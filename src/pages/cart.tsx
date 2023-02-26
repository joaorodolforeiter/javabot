/* eslint-disable @next/next/no-img-element */
import { Trash } from "phosphor-react";
import { animals } from "../animals";

export default function Cart() {
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-6 overflow-auto bg-stone-900 p-6">
      <div className="self-start text-4xl text-emerald-100">Carrinho</div>
      <div className="flex-1">
        <div className="flex flex-1 flex-col divide-y-2 divide-zinc-900 rounded-lg bg-zinc-800 px-5">
          {animals.slice(3, 6).map((animal) => (
            <div key={animal.id} className="flex py-5">
              <img
                className="aspect-square w-1/3 rounded-lg object-cover sm:h-32 sm:w-32"
                src={animal.image}
                alt=""
              />
              <div className="flex flex-1 flex-col justify-between pl-4">
                <div>
                  <div className="text-2xl text-emerald-100">{animal.name}</div>
                  <div className="text-md text-emerald-300">{animal.price}</div>
                </div>
                <div className="flex max-w-fit gap-3 rounded-lg bg-zinc-700 p-2 text-emerald-100">
                  Qtd:
                  <input
                    className="w-full bg-transparent text-right outline-none"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <button className="flex aspect-square h-10 items-center justify-center rounded-lg bg-red-400">
                <Trash size={26} weight="fill" color="white" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className="rounded-xl bg-emerald-400 p-4 text-center max-md:w-full">
        Finalizar Pedido
      </button>
    </div>
  );
}
