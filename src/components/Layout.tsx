/* eslint-disable @next/next/no-img-element */
import {
  House,
  Info,
  List,
  PawPrint,
  ShoppingCart,
  Storefront,
} from "phosphor-react";
import { type ReactNode, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  const [visible, setVisible] = useState(false);
  const { data: session } = useSession();
  return (
    <div className="flex h-screen flex-col bg-stone-900">
      <nav className="w-full">
        <div className="flex h-16 w-full items-center justify-between bg-emerald-800 p-4 text-emerald-100">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 text-lg font-bold"
          >
            <PawPrint size={40} weight="fill" />
            Pet JavaBot
          </Link>
          {session ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 max-sm:hidden">
                <Link href="/">
                  <House size={32} weight="fill" />
                </Link>
                <Link href="/loja">
                  <Storefront size={32} weight="fill" />
                </Link>
                <Link href="/cart">
                  <ShoppingCart size={32} weight={"fill"} />
                </Link>
                <Link href="/sobre">
                  <Info size={32} weight="fill" />
                </Link>
              </div>
              <Link href="/user" className="w-10 rounded-full bg-stone-900">
                <img
                  className="rounded-full"
                  src={session.user.image || undefined}
                  alt=""
                />
              </Link>
              <button
                onClick={() => setVisible(!visible)}
                className="rounded-md bg-emerald-700 p-1 sm:hidden"
              >
                <List size={32} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => void signIn()}
              className="rounded-lg bg-emerald-400 p-2 text-black"
            >
              Login
            </button>
          )}
        </div>
        {visible && (
          <div className="fixed flex w-full flex-col gap-5 bg-emerald-700 p-6 text-2xl font-bold text-emerald-100 sm:hidden">
            <Link className="flex items-center gap-2" href="/">
              <House size={28} weight="fill" />
              Home
            </Link>
            <Link className="flex items-center gap-2" href="/loja">
              <Storefront size={28} weight="fill" />
              Loja
            </Link>
            <Link className="flex items-center gap-2" href="/cart">
              <ShoppingCart size={28} weight={"fill"} />
              Carrinho
            </Link>
            <Link className="flex items-center gap-2" href="/sobre">
              <Info size={28} weight="fill" />
              Sobre
            </Link>
          </div>
        )}
      </nav>
      <main className="h-full overflow-auto">{children}</main>
    </div>
  );
}
