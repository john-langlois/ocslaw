import { OCSFooter } from "./footer";
import { OCSHeader } from "./header";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="kit-scroll">
      <OCSHeader />
      {children}
      <OCSFooter />
    </div>
  );
}
