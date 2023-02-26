import { GithubLogo } from "phosphor-react";
import colors from "tailwindcss/colors";

export default function Sobre() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-12">
      <h1 className="text-center text-4xl text-emerald-300">
        Sobre o Pet JavaBot
      </h1>
      <p className="max-w-3xl p-6 text-justify text-lg text-emerald-100">
        O Pet JavaBot é um robô de estimação virtual programado em Java. Ele é
        capaz de interagir com seus usuários e realizar várias tarefas, desde
        jogar jogos até lembrar de compromissos. Nossa equipe de desenvolvimento
        está empenhada em fornecer a melhor experiência possível para os nossos
        usuários. O Pet JavaBot é um projeto de código aberto e estamos sempre
        abertos a contribuições da comunidade. Também e possível você adquirir
        um pet na nossa loja que está em constante mudança na variação.
      </p>
      <a
        className="flex items-center justify-center gap-3 rounded-lg bg-emerald-400 p-3 text-black"
        href="https://github.com/SamuTechMan/loja-pet-javabot-"
      >
        <GithubLogo color={colors.black} size={32} />
        Veja no Github
      </a>
    </div>
  );
}
