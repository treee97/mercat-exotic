import WeekDay from "./WeekDay";

const Horarios = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <h2 className="text-4xl">Horarios</h2>
      <div className="flex flex-col items-center gap-3">
        <WeekDay day="Lunes" hours="13:00 - 18:00" />
        <WeekDay day="Martes" hours="Cerrado" />
        <WeekDay day="Miércoles" hours="Cerrado" />
        <WeekDay day="Jueves" hours="13:00 - 23:00" />
        <WeekDay day="Viernes" hours="13:00 - 23:00" />
        <WeekDay day="Sábado" hours="13:00 - 23:00" />
        <WeekDay day="Domingo" hours="13:00 - 23:00" />
      </div>
    </div>
  );
};

export default Horarios;
