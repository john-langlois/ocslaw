export const NAV_ITEMS = [
  { label: "About", href: "/#about" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/#contact" },
] as const;

export const MISSION_TEXT =
  "A full-service commercial law firm dedicated to serving the diverse needs of businesses in Canada, from local ventures to international corporations.";

export const STATS = [
  { n: "15", suffix: "+", t: "Years of experience advising businesses" },
  { n: "12", suffix: "", t: "Practice areas under one roof" },
  { n: "2", suffix: "", t: "Jurisdictions: Ontario & Brazil" },
] as const;

export { ALL_SERVICES, SERVICE_GROUPS } from "./services";

export const TEAM = [
  {
    name: "Osvaldo C. Sousa",
    role: "Barrister, Solicitor & Notary Public",
    bio: "Dual-licensed in Ontario, Canada, and Rio Grande do Sul, Brazil. With over 15 years of experience, Osvaldo leads OCS Law with a commitment to exceptional client service.",
    email: "osvaldo@ocslaw.ca",
    linkedin: "https://www.linkedin.com/in/osvaldo-c-sousa-ll-b-ll-m-ll-m-0406728a/",
    imgKey: "osvaldoHead" as const,
  },
  {
    name: "Marina C. Sousa",
    role: "Legal Assistant",
    bio: "Licensed lawyer in Rio Grande do Sul, Brazil. Marina brings her legal expertise and attention to detail to support clients throughout every stage of their matters.",
    email: "marina@ocslaw.ca",
    linkedin: "https://www.linkedin.com/in/marina-c-sousa-09b261366/",
    imgKey: "marinaHead" as const,
  },
] as const;

export const CONTACT_INFO = [
  { k: "Visit", v: ["620A Richmond St Suite 205", "London, Ontario N6A 5J9"] },
  { k: "Email", v: ["info@ocslaw.ca"], href: "mailto:info@ocslaw.ca" },
  { k: "Call", v: ["+1 (519) 902-0501"], href: "tel:+15199020501" },
  { k: "Hours", v: ["Monday – Friday", "9:00 AM – 5:00 PM EST"] },
] as const;

export const CONSULT_EVENT = "ocs-consult";
