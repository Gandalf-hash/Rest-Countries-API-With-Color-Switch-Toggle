import Select from "react-select/base";
import "./App.css";
import { TopNavbar  } from "./components/TopNavbar";
import { CountrySearch } from "./components/CountrySearch";

function App() {
  return (
    <div className="w-100vw h-screen bg-white dark:bg-deepBlue dark:text-white">
      <TopNavbar />

      <div className="container px-4 md:px-12 py-[2rem] md:items-start">
      <CountrySearch />
      </div>
    </div>
  );
}

export default App;
