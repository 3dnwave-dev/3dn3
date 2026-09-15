import { ArrowDown, ArrowUpRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { processSteps, SectionTitle, SiteLayout, solutions, TextLink } from "@/site";

const Index = () => {
  return (
    <SiteLayout>
      <section className="relative min-h-[920px] overflow-hidden border-b border-white/8 pt-[76px]">
        <img
          data-image-slot="home.hero"
          src="/images/home-hero.jpg"
          alt="AI 데이터와 입체 영상, 모션 시스템이 결합된 미래형 몰입 공간"
          className="absolute inset-0 h-full w-full object-cover opacity-58"
          width="1600"
          height="900"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,23,0.98)_0%,rgba(8,8,23,0.76)_47%,rgba(8,8,23,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,23,0.15)_0%,rgba(8,8,23,0.08)_60%,#080817_100%)]" />
        <div className="tech-grid absolute inset-0 opacity-25" />

        <div className="site-container relative z-10 flex min-h-[844px] flex-col justify-center py-20">
          <div className="hero-reveal max-w-5xl">
            <p className="eyebrow mb-7">AI × STEREOSCOPIC × ATTRACTION</p>
            <h1 className="font-display text-[clamp(3.5rem,9vw,8.4rem)] font-medium leading-[0.88] tracking-[-0.065em] text-white">
              BEYOND
              <br />
              <span className="text-outline">REALITY.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              AI와 입체 기술로 데이터를 공간으로, 콘텐츠를 감각으로,
              상상을 움직이는 경험으로 전환합니다.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/solutions" className="button-primary justify-center">
                솔루션 살펴보기 <ArrowUpRight size={17} />
              </Link>
              <Link to="/projects" className="button-secondary justify-center">
                프로젝트 역량 <MoveRight size={17} />
              </Link>
            </div>
          </div>

          <div className="mt-auto flex items-end justify-between pt-16">
            <div className="hidden items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-slate-500 sm:flex">
              <span className="grid h-9 w-9 place-items-center border border-white/10">
                <ArrowDown size={14} />
              </span>
              EXPLORE THE SYSTEM
            </div>
            <div className="grid grid-cols-3 gap-7 border-l border-white/10 pl-7 text-right sm:gap-12 sm:pl-10">
              <div>
                <strong className="metric-value">10+</strong>
                <span className="metric-label">YEARS</span>
              </div>
              <div>
                <strong className="metric-value">360°</strong>
                <span className="metric-label">IMMERSION</span>
              </div>
              <div>
                <strong className="metric-value">A–Z</strong>
                <span className="metric-label">TURNKEY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionTitle
            eyebrow="WHAT WE BUILD"
            title={
              <>
                기술을 연결해
                <br />
                <span className="text-slate-500">경험을 완성합니다.</span>
              </>
            }
            description="하나의 장비나 콘텐츠에 머물지 않습니다. 목적과 공간에 맞는 기술을 선별하고, 하나의 완성된 몰입 시스템으로 통합합니다."
          />

          <div className="mt-16 grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <article
                  key={solution.id}
                  className="group relative min-h-[330px] border-b border-r border-white/10 p-7 transition duration-500 hover:bg-blue-500/[0.06] sm:p-9"
                >
                  <div className="flex items-start justify-between">
                    <Icon className="text-blue-400" size={25} strokeWidth={1.4} />
                    <span className="font-display text-xs text-slate-700">0{index + 1}</span>
                  </div>
                  <div className="mt-20">
                    <p className="text-[10px] font-bold tracking-[0.18em] text-blue-400">{solution.eyebrow}</p>
                    <h3 className="mt-4 font-display text-2xl font-medium tracking-[-0.03em] text-white">
                      {solution.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-500">{solution.description}</p>
                  </div>
                  <ArrowUpRight
                    size={19}
                    className="absolute bottom-8 right-8 translate-y-2 text-slate-700 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:text-blue-400 group-hover:opacity-100"
                  />
                </article>
              );
            })}
          </div>
          <div className="mt-10 flex justify-end">
            <TextLink to="/solutions">전체 솔루션 보기</TextLink>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/8 bg-[#0c0c20]">
        <div className="site-container grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between border-white/10 py-16 lg:border-r lg:py-24 lg:pr-16">
            <div>
              <p className="eyebrow">CORE TECHNOLOGY</p>
              <h2 className="mt-8 font-display text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[0.98] tracking-[-0.05em] text-white">
                REAL-TIME
                <br />
                STEREOSCOPIC
                <br />
                <span className="text-blue-500">ENGINE.</span>
              </h2>
            </div>
            <div className="mt-14">
              <p className="max-w-md text-base leading-8 text-slate-400">
                more3D는 OpenGL 기반 3D CAD의 작업 화면을 실시간 입체 영상으로 변환합니다.
                인코딩 대기 없이 설계 결과를 공간에서 검토하고 의사결정의 속도를 높입니다.
              </p>
              <div className="mt-8">
                <TextLink to="/technology">기술 자세히 보기</TextLink>
              </div>
            </div>
          </div>

          <div className="relative min-h-[560px] overflow-hidden lg:min-h-[720px]">
            <img
              data-image-slot="solutions.ai-visualization"
              src="/images/ai-visualization.jpg"
              alt="정밀 기계 구조를 실시간으로 시각화한 산업용 디지털 트윈"
              className="absolute inset-0 h-full w-full object-cover"
              width="760"
              height="570"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c20] via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 border border-white/12 bg-[#080817]/75 p-5 backdrop-blur-md sm:bottom-12 sm:left-12 sm:right-12 sm:p-7">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <span className="status-dot" />
                  <span className="ml-3 text-[10px] font-bold tracking-[0.18em] text-blue-300">LIVE VISUALIZATION</span>
                </div>
                <span className="font-display text-xs tracking-[0.12em] text-slate-500">moreStereo3D / moreViz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionTitle
            eyebrow="HOW WE WORK"
            title={
              <>
                복잡한 기술을
                <br />
                <span className="text-slate-500">명확한 과정으로.</span>
              </>
            }
          />
          <div className="mt-16 grid gap-0 lg:grid-cols-4">
            {processSteps.map(([number, title, copy]) => (
              <div key={number} className="process-card">
                <span className="font-display text-xs tracking-[0.16em] text-blue-400">{number}</span>
                <div className="mt-16">
                  <h3 className="font-display text-xl tracking-[0.06em] text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/8 py-24 sm:py-32">
        <div className="orb orb-blue left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2" />
        <div className="tech-grid absolute inset-0 opacity-25" />
        <div className="site-container relative z-10 text-center">
          <p className="eyebrow justify-center">START A PROJECT</p>
          <h2 className="mx-auto mt-7 max-w-5xl font-display text-[clamp(2.8rem,7vw,6.8rem)] font-medium leading-[0.95] tracking-[-0.055em] text-white">
            상상을 시스템으로
            <br />
            구현할 준비가 되셨나요?
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-400">
            공간의 크기와 목적, 예산만 알려주세요. 콘텐츠부터 장비, 시공까지 가장 현실적인 구축 방향을 함께 찾겠습니다.
          </p>
          <Link to="/contact" className="button-primary mt-10">
            프로젝트 상담 시작 <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
