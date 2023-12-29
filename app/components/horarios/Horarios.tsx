"use client";
import WeekDay from "./WeekDay";
import { motion } from "framer-motion";

const Horarios = () => {
  return (
    <div
      className="relative flex min-h-[70vh] w-full items-center justify-center p-8"
      id="reserva"
    >
      <svg
        id="visual"
        viewBox="0 0 540 1360"
        width="540"
        height="960"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="absolute inset-0 -z-10 w-full object-fill"
      >
        <filter id="blurMe">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <g fill="#68e081">
          <circle r="136" cx="137" cy="782" filter="url(#blurMe)">
            {" "}
          </circle>
          <circle r="111" cx="174" cy="351" filter="url(#blurMe)"></circle>
          <circle r="113" cx="403" cy="147" filter="url(#blurMe)"></circle>
          <circle r="115" cx="347" cy="602" filter="url(#blurMe)"></circle>
        </g>
      </svg>

      <motion.div
        className="ju relative flex w-full flex-col items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl">Horarios</h2>

        <div className="mt-20 flex flex-col items-center gap-3 justify-self-center">
          <WeekDay day="Lunes" hours="13:00 - 18:00" />
          <WeekDay day="Martes" hours="Cerrado" />
          <WeekDay day="Miércoles" hours="Cerrado" />
          <WeekDay day="Jueves" hours="13:00 - 23:00" />
          <WeekDay day="Viernes" hours="13:00 - 23:00" />
          <WeekDay day="Sábado" hours="13:00 - 23:00" />
          <WeekDay day="Domingo" hours="13:00 - 23:00" />
        </div>
        <div className="mt-10">
          <h3 className="text-4xl">¡Reserva Ya!</h3>
          <p className="text-3xl">640 87 85 53</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Horarios;
