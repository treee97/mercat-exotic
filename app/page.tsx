import Eventos from "./components/eventos/Eventos";
import Heading from "./components/heading/Heading";
import Horarios from "./components/horarios/Horarios";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Navbar />
      <Heading />
      <Horarios />
      <Eventos />

      {/* Como hacer un gradiente como el de next template. Buscar yt y hacerlo */}
      {/* Varias manchas en la pantalla de colores verdes oscuros y claros.  */}
      {/* Colores q combinan con el verde? Complementarios ? Blanco? Mirar en la
       * web colores oficiales. Jugar con ellos..
       */}
      {/* Home page with video  */}
      {/* Eventos ?   */}
      {/* GALERIA. TODAS LAS SECTIONS EN la main page. */}
      {/* Pagina de MENU con 2 botones "Español" "English". Con la bandera? eww */}
      {/* Footer Contacta.
       * Direccion
       * Telefono
       * Horarios
       * Ver menu
       */}
    </main>
  );
}
