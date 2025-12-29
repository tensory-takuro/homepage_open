import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";

// 遅延読み込み: ファーストビュー以下のコンポーネント
const Mission = dynamic(() => import("@/components/home/Mission"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const Service = dynamic(() => import("@/components/home/Service"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

const Company = dynamic(() => import("@/components/home/Company"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
});

const ContactCTA = dynamic(() => import("@/components/home/ContactCTA"), {
  loading: () => <div className="h-48 bg-tensor-blue animate-pulse" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Service />
      <Company />
      <ContactCTA />
    </>
  );
}
