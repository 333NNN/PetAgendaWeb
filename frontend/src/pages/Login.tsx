import React, { useState } from "react";

const Login: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Login:", login);
    console.log("Password:", password);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#EFE1C9] relative overflow-hidden">
      {/* Background Waves */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#8D4B32] rounded-br-[50%]"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[#8D4B32] rounded-tl-[50%]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        {/* Logo */}
        <img src="/images/logo_PetAgenda.png" alt="PetAgenda" className="w-32" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2">
          <label className="block text-lg font-bold" htmlFor="login">
            Login
          </label>
          <input
            id="login"
            type="text"
            value={login}
            onChange={handleLoginChange}
            className="w-full px-4 py-2 border border-black bg-[#988D7C] rounded-md text-black"
            aria-label="Login"
          />

          <label className="block text-lg font-bold" htmlFor="password">
            Senha
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 border border-black bg-[#988D7C] rounded-md text-black"
            aria-label="Senha"
          />

          {/* Button */}
          <button
            type="submit"
            className="mt-4 bg-white px-6 py-2 border border-black rounded-full shadow-lg hover:bg-gray-200"
          >
            ENTRAR
          </button>
        </form>
      </div>

      {/* Dog Walker Image */}
      <img
        src="/images/dogwalker-removebg.png"
        alt="Dog Walker"
        className="absolute bottom-0 right-10 w-64"
      />
    </div>
  );
};

export default Login;
