import LoginGoogleButton from "@/components/button/loginWithGoogle";
import { getPostsForSite, getSiteData } from "@/lib/fetchers";
import { notFound } from "next/navigation";

export default async function Home({ params }: { params: { domain: string } }) {
  const domain = decodeURIComponent(params.domain);
  const [data, posts] = await Promise.all([
    getSiteData(domain),
    getPostsForSite(domain),
  ]);

  if (!data) {
    notFound();
  }

  return <LoginGoogleButton />;
}
