import { notFound } from "next/navigation";
import { getDemoBySlug, getAllSlugs } from "@/data/demos";
import DemoPageClient from "@/components/DemoPageClient";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);
  if (!demo) return {};
  return {
    title: `${demo.businessName} — ${demo.tagline}`,
    description: demo.heroSubtitle,
  };
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);
  if (!demo) notFound();

  return <DemoPageClient demo={demo} />;
}
