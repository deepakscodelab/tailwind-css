import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { Step } from "./Step";

export function App() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Step />
        <div className="h-[1000px]"></div>
      </main>
    </div>
  );
}
