import { Capabilities } from "@/components/sections/Capabilities";
import { ProblemFraming } from "@/components/sections/ProblemFraming";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemFraming />
      <Capabilities />
    </>
  );
}
