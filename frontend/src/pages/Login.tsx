import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#EFE1C9] relative overflow-hidden">
      {/* Ondas de fundo */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#8D4B32] rounded-br-[50%]"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[#8D4B32] rounded-tl-[50%]"></div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        {/* Logo */}
        <img src="./public/images/logo_PetAgenda.png" alt="PetAgenda" className="w-32" />

        {/* Formulário */}
        <div className="space-y-2">
          <label className="block text-lg font-bold">Login</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-black bg-[#988D7C] rounded-md text-black"
          />

          <label className="block text-lg font-bold">Senha</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-black bg-[#988D7C] rounded-md text-black"
          />
        </div>

        {/* Botão */}
        <button className="mt-4 bg-white px-6 py-2 border border-black rounded-full shadow-lg hover:bg-gray-200">
          ENTRAR
        </button>
      </div>

      {/* Imagem da dog walker */}
      <img
        src="./public/images/dogwalker-removebg.png"
        alt="Dog Walker"
        className="absolute bottom-0 right-10 w-64"
      />
    </div>
  );
};

export default Login;