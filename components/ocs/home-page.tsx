"use client";

import { images } from "@/lib/constants";
import { OCSConsultBand } from "./consult-band";
import { OCSContact } from "./contact";
import { OCSDivider } from "./divider";
import { OCSFooter } from "./footer";
import { OCSHeader } from "./header";
import { OCSHero } from "./hero";
import { OCSQuote } from "./quote";
import { OCSServices } from "./services";
import { OCSTeam } from "./team";

export function OCSHomePage() {
  return (
    <div className="kit-scroll">
      <OCSHeader />
      <OCSHero />
      <OCSQuote />
      <OCSDivider src={images.londonPan} caption="London, Ontario" height={440} />
      <OCSServices />
      <OCSConsultBand />
      <OCSTeam />
      <OCSContact />
      <OCSFooter />
    </div>
  );
}
