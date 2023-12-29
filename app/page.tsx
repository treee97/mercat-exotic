// import Navbar from "./components/Navbar";
import Eventos from "./components/eventos/Eventos";
import Heading from "./components/heading/Heading";
import Horarios from "./components/horarios/Horarios";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
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
      {/* VIDEO */}
      {/* <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="../video-mercat-exotic.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </main>
  );
}
