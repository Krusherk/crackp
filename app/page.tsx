import { BackpackSection } from "@/components/sections/BackpackSection";
import { CampSection } from "@/components/sections/CampSection";
import { GitHubRealm } from "@/components/sections/GitHubRealm";
import { LifeSection } from "@/components/sections/LifeSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { WowsSection } from "@/components/sections/WowsSection";

export default function Page() {
  return (
    <main>
      <LifeSection />
      <WorkSection />
      <WowsSection />
      <BackpackSection />
      <GitHubRealm />
      <CampSection />
    </main>
  );
}
