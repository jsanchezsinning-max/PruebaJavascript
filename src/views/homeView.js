import Sidebar from "@/components/Sidebar";
import { getSession } from "@/utils";
import { homeController } from "@/controllers/home.controller";

export default function homeView() {
  const user = getSession();

  setTimeout(() => {
    homeController();
  });

  return `
    <div class="flex bg-slate-900 min-h-screen">
      ${Sidebar()}

      <main class="flex-1 p-6">
        <div class="mb-6">
          <h1 class="text-3xl font-bold text-white">
            Welcome ${user?.name}
          </h1>
          <p class="text-slate-500">
            Rol: ${user?.role}
          </p>
        </div>

        <section class="bg-gray-300 p-5 rounded-2xl shadow mb-6">
          <h2 class="font-bold text-xl mb-2">
            ${user?.role === "admin" ? "Admin Panel" : "User Panel"}
          </h2>
          <p class="text-slate-600">
            ${
              user?.role === "admin"
                ? "Approve, reject, or delete any reservation."
                : "Users can only view their own bookings."
            }
          </p>
        </section>

        <section class="bg-gray-300 p-5 rounded-2xl shadow mb-6">
          <h2 class="font-bold text-xl mb-4">Crear reserva</h2>

          <form id="reservationForm" class="grid gap-4 md:grid-cols-2">
            <select name="workspace" class="border p-3 rounded-xl" required>
              <option value="">Selecciona un espacio</option>
              <option value="Sala A">Sala A</option>
              <option value="Sala B">Sala B</option>
              <option value="Oficina Privada">Oficina Privada</option>
              <option value="Coworking">Coworking</option>
              <option value="Auditorio">Auditorio</option>
            </select>

            <input type="date" name="date" class="border p-3 rounded-xl" required>
            <input type="time" name="startHour" class="border p-3 rounded-xl" required>
            <input type="time" name="endHour" class="border p-3 rounded-xl" required>

            <input
              type="text"
              name="reason"
              placeholder="Motivo de la reserva"
              class="border p-3 rounded-xl md:col-span-2"
              required
            >

            <button class="bg-indigo-600 text-white px-2 py-3 rounded-xl md:col-span-2 hover:bg-indigo-800">
              Reserve pace
            </button>
          </form>
        </section>

        <section class="bg-gray-300 p-5 rounded-2xl shadow">
          <div class="flex justify-between items-center mb-4">
            <h2 class="font-bold text-xl">Reservas</h2>
            <span class="text-sm text-slate-500">
              ${user?.role === "admin" ? "Mostrando todas las reservas" : "Mostrando únicamente tus reservas"}
            </span>
          </div>

          <div id="reservationsContainer" class="grid gap-4 md:grid-cols-2">
            <div class="w-full text-center py-8 col-span-2">
              <p class="text-emerald-800">Cargando reservas ...</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}