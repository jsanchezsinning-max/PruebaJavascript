import { loginController } from "@/controllers/login.controller";

export default function loginView() {
  setTimeout(() => {
    loginController();
  });

  return `
    <div class="min-h-screen flex justify-center items-center bg-gray-900">

      <div class="bg-slate-800 p-8 rounded-lg shadow h-80 w-150">

        <h1 class="text-white text-center text-5xl font-bold mb-5">
          Login
        </h1>

        <form id="loginForm">

          <input
            type="email"
            name="email"
            placeholder="Email"
            class="border text-white w-full p-2 rounded mb-6"
          >

          <input
            type="password"
            name="password"
            placeholder="Password"
            class="border text-white w-full p-2 rounded mb-4"
          >

          <button
            class="bg-indigo-600 text-white w-full py-2 rounded"
          >
            Ingresar
          </button>

        </form>

      </div>

    </div>
  `;
}