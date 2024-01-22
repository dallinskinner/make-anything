import { Oswald } from "next/font/google";
import { App } from "./App";

const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="p-5">
      <div className="w-full max-w-5xl mx-auto">
        <App />
      </div>
    </main>
  );
}
