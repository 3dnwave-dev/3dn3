import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteLayout } from "@/site";

const NotFound = () => {
  return (
    <SiteLayout>
      <section className="relative grid min-h-[760px] place-items-center overflow-hidden px-5 pt-[76px] text-center">
        <div className="tech-grid absolute inset-0 opacity-40" />
        <div className="orb orb-blue left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10">
          <p className="font-display text-[clamp(6rem,20vw,15rem)] font-medium leading-none tracking-[-0.08em] text-white/8">404</p>
          <p className="eyebrow mt-5 justify-center">SIGNAL NOT FOUND</p>
          <h1 className="mt-6 font-display text-4xl tracking-[-0.04em] text-white sm:text-6xl">페이지를 찾을 수 없습니다.</h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-500">
            요청하신 경로가 변경되었거나 존재하지 않습니다. 홈으로 돌아가 3DN의 기술과 솔루션을 확인해 주세요.
          </p>
          <Link to="/" className="button-primary mt-9">
            홈으로 이동 <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
