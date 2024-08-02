import Calendar from "./components/calendar/calendar";
import "./index.css";

export default function App() {
  return (
    <>
      <div className="container mx-auto h-screen ">
        <div className="h-3/5 bg-white"></div>
        <div className="flex p-8 justify-center h-2/5 bg-jeans">
          <Calendar />
        </div>
      </div>
    </>
  );
}
