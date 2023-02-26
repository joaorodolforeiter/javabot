/* eslint-disable @next/next/no-img-element */
import { signOut, useSession } from "next-auth/react";

export default function User() {
  const { data: session } = useSession();

  return (
    <div className="flex h-full flex-col items-center p-6">
      <div className="flex flex-1 flex-col items-center gap-6">
        <img
          className="w-4/5 rounded-full bg-stone-800"
          src={session?.user.image || undefined}
          alt=""
        />
        <div className="text-4xl text-emerald-100">{session?.user.name}</div>
        <div className="text-lg text-emerald-200">{session?.user.email} </div>
      </div>
      <button
        className="rounded-xl bg-emerald-400 p-4 text-center max-md:w-full"
        onClick={() => void signOut()}
      >
        Sair
      </button>
    </div>
  );
}
