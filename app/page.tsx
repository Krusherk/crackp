import { BackpackSection } from "@/components/sections/BackpackSection";
import { CampSection } from "@/components/sections/CampSection";
import { LifeSection } from "@/components/sections/LifeSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function Page() {
  return (
    <main>
      <LifeSection />
      <WorkSection />
      <BackpackSection />
      <CampSection />
    </main>
  );
}
