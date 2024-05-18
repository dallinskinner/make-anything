import { Oswald } from "next/font/google";
import { App } from "./App";

const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  return <App />;
}
