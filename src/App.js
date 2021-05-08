import Hero from "./SECTIONS/Hero";
import Navbar from "./SECTIONS/Navbar";
import RoomTypes from "./SECTIONS/RoomTypes";
import Facilities from "./SECTIONS/Facilities";
import Restaurant from "./SECTIONS/Restaurant";
import Covid from "./SECTIONS/Covid";

function App() {
  return (
    <div className="w-full min-h-screen bg-blue-50">
      <Navbar />
      <Hero />
      <Covid />
      <RoomTypes />
      <Facilities />
      <Restaurant />
    </div>
  );
}

export default App;
