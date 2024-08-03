import Calendar from "./components/calendar/calendar";
import "./index.css";

export default function App() {
  return (
    <>
      <div className="h-screen ">
        <div className="h-3/5 min-w-72 w-full bg-white">
          <div className="container mx-auto h-full">
            <div className="flex justify-center items-center h-full">
              <span>xxx</span>
            </div>
          </div>
        </div>
        <div className="h-2/5 min-w-72 w-full bg-jeans">
          <div className="container mx-auto">
            <div className="flex p-8 justify-center">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
