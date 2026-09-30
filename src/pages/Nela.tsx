import { useEffect } from "react";
import NelaNav from "@/components/nela/NelaNav";
import NelaHero from "@/components/nela/NelaHero";
import NelaFeatures from "@/components/nela/NelaFeatures";
import NelaPhases from "@/components/nela/NelaPhases";
import NelaScreens from "@/components/nela/NelaScreens";
import NelaInsights from "@/components/nela/NelaInsights";
import NelaDownload from "@/components/nela/NelaDownload";
import NelaFooter from "@/components/nela/NelaFooter";
import { nela } from "@/components/nela/theme";

export default function Nela() {
  useEffect(() => {
    document.title = "Nela — Live in Sync with Your Cycle";
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ background: nela.bg, color: nela.ink }}
    >
      <NelaNav />
      <NelaHero />
      <NelaFeatures />
      <NelaPhases />
      <NelaScreens />
      <NelaInsights />
      <NelaDownload />
      <NelaFooter />
    </div>
  );
}
