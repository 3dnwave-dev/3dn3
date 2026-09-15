import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero, SiteLayout, solutions } from "@/site";

const solutionDetails: Record<string, string[]> = {
  "ai-visualization": ["산업용 디지털 트윈", "설계 검토·프레젠테이션", "데이터 기반 공간 시각화"],
  more3d: ["moreStereo3D", "moreViz", "다양한 OpenGL 설계 도구 연동"],
  attraction: ["3D·4D·5D 영상", "360° VR 콘텐츠", "글로벌 콘텐츠 큐레이션"],
  immersive: ["VR HMD 시스템", "CAVE 멀티 프로젝션", "모션·위치 트래킹"],
  equipment: ["하이브리드 편광 안경", "디지털 입체 필터", "실버스크린·프로젝터·서버"],
  turnkey: ["공간·시스템 설계", "현장 시공·캘리브레이션", "교육·유지관리 지원"],
};

export default function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="SOLUTIONS"
        index="01 / 05"
        title="ONE SYSTEM. MULTIPLE SENSES."
        description="AI 시각화부터 입체 콘텐츠, 상영 장비, 공간 시공까지. 기술 사이의 빈틈을 없애고 하나의 완성된 경험으로 제공합니다."
      />

      <section className="site-section">
        <div className="site-container space-y-28">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const hasImage = solution.id === "ai-visualization" || solution.id === "attraction";
            return (
              <article key={solution.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-xs tracking-[0.18em] text-blue-400">0{index + 1}</span>
                    <span className="h-px w-12 bg-blue-500/40" />
                    <p className="eyebrow">{solution.eyebrow}</p>
                  </div>
                  <Icon size={34} strokeWidth={1.2} className="mt-10 text-blue-400" />
                  <h2 className="mt-7 font-display text-[clamp(2.2rem,4vw,4.3rem)] font-medium leading-[1] tracking-[-0.045em] text-white">
                    {solution.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">{solution.description}</p>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">{solution.detail}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {solutionDetails[solution.id].map((item) => (
                      <li key={item} className="flex items-center gap-3 border-b border-white/8 pb-3 text-sm text-slate-300">
                        <Check size={14} className="text-blue-400" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {hasImage ? (
                  <div className={`relative aspect-[4/3] overflow-hidden border border-white/10 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    {solution.id === "ai-visualization" ? (
                      <img
                        data-image-slot="solutions.ai-visualization"
                        src="/images/ai-visualization.jpg"
                        alt="정밀 기계 구조를 실시간으로 시각화한 산업용 디지털 트윈"
                        className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                        width="760"
                        height="570"
                      />
                    ) : (
                      <img
                        data-image-slot="solutions.attraction"
                        src="/images/attraction-system.jpg"
                        alt="대형 곡면 스크린과 모션 시트가 설치된 4D 어트랙션 극장"
                        className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                        width="760"
                        height="570"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080817]/70 via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className={`solution-specimen ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="tech-grid absolute inset-0 opacity-45" />
                    <div className="orb orb-blue left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2" />
                    <Icon size={80} strokeWidth={0.7} className="relative z-10 text-blue-400/80" />
                    <span className="relative z-10 mt-6 font-display text-xs tracking-[0.25em] text-slate-500">
                      3DN / SYSTEM 0{index + 1}
                    </span>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#0c0c20] py-20">
        <div className="site-container flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow">CUSTOM CONFIGURATION</p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl tracking-[-0.04em] text-white sm:text-5xl">
              공간과 목적에 맞는 조합을 제안합니다.
            </h2>
          </div>
          <Link to="/contact" className="button-primary shrink-0">
            솔루션 상담 <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
