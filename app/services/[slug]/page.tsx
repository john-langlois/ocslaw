import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/ocs/service-detail";
import { SiteLayout } from "@/components/ocs/site-layout";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | OCS Law" };

  return {
    title: `${service.title} | OCS Law`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <SiteLayout>
      <ServiceDetail service={service} />
    </SiteLayout>
  );
}
