import Details from "./Components/Details";
import GoogleMap from "./Components/GoogleMap";
import Header from "./Components/Header";
export default function App() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-2">
        <div className="w-full"><Details /></div>
        <div className="w-full h-[100vh] py-4"><GoogleMap /></div>
      </div>
    </div>
  );
}
