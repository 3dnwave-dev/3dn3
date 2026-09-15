import { Braces, Cpu, Focus, Layers3, Orbit, Projector } from "lucide-react";
import { PageHero, SectionTitle, SiteLayout } from "@/site";

const techStack = [
  {
    icon: Braces,
    label: "INPUT",
    title: "OpenGL / 3D CAD",
    copy: "설계 애플리케이션의 실시간 화면을 별도 렌더링 대기 없이 받아옵니다.",
  },
  {
    icon: Cpu,
    label: "PROCESS",
    title: "Stereo Conversion",
    copy: "좌·우 시점의 영상을 실시간 생성하고 디스플레이 환경에 맞게 최적화합니다.",
  },
  {
    icon: Projector,
    label: "OUTPUT",
    title: "Display System",
    copy: "프로젝터, LED, 필터, 스크린, HMD 등 목적에 맞는 출력 장치로 전달합니다.",
  },
  {
    icon: Focus,
    label: "INTERACTION",
    title: "Tracking & Motion",
    copy: "위치·시선·동작 정보와 모션 장치를 연결해 반응형 경험을 완성합니다.",
  },
];

export default function TechnologyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="TECHNOLOGY"
        index="02 / 05"
        title="PRECISION MAKES IMMERSION."
        description="좋은 몰입감은 강한 효과가 아니라 정밀한 동기화에서 시작됩니다. 입력부터 처리, 출력, 인터랙션까지 모든 단계를 하나의 시스템으로 설계합니다."
      />

      <section className="site-section">
        <div className="site-container">
          <SectionTitle
            eyebrow="SYSTEM ARCHITECTURE"
            title={
              <>
                실시간으로 연결되는
                <br />
                <span className="text-slate-500">4개의 기술 레이어.</span>
              </>
            }
          />
          <div className="mt-16 grid border-l border-t border-white/10 lg:grid-cols-4">
            {techStack.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="min-h-[370px] border-b border-r border-white/10 p-8">
                  <div className="flex items-center justify-between">
                    <Icon size={24} strokeWidth={1.3} className="text-blue-400" />
                    <span className="font-display text-xs text-slate-700">0{index + 1}</span>
                  </div>
                  <div className="mt-24">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-blue-400">{item.label}</p>
                    <h3 className="mt-4 font-display text-2xl text-white">{item.title}</h3>
                    <p className="mt-5 text-sm leading-7 text-slate-500">{item.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/8 bg-[#0c0c20]">
        <div className="site-container grid lg:grid-cols-[1.12fr_0.88fr]">
          <div className="relative min-h-[540px] overflow-hidden lg:min-h-[760px]">
            <img
              data-image-slot="technology.cave"
              src="/images/cave-system.jpg"
              alt="다면 프로젝션과 트래킹 센서로 구성된 CAVE 시각화 시스템"
              className="absolute inset-0 h-full w-full object-cover"
              width="1200"
              height="750"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0c0c20]" />
            <div className="absolute bottom-8 left-8 border border-white/12 bg-[#080817]/80 px-5 py-4 backdrop-blur-md">
              <span className="status-dot" />
              <span className="ml-3 text-[10px] font-bold tracking-[0.18em] text-blue-300">CALIBRATED ENVIRONMENT</span>
            </div>
          </div>
          <div className="flex flex-col justify-center py-16 lg:pl-16">
            <p className="eyebrow">CAVE + TRACKING</p>
            <h2 className="mt-7 font-display text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[0.98] tracking-[-0.05em] text-white">
              공간 전체가
              <br />
              디스플레이가 됩니다.
            </h2>
            <p className="mt-7 text-base leading-8 text-slate-400">
              다면 프로젝션, 광학 트래킹, moreViz를 결합하면 사용자의 위치에 반응하는
              고정밀 가상환경을 구현할 수 있습니다. 산업 설계 검토, 연구, 교육, 전시에 활용됩니다.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-px bg-white/10">
              {[
                ["MULTI", "Projection"],
                ["REAL-TIME", "Tracking"],
                ["LOW", "Latency"],
                ["CUSTOM", "Geometry"],
              ].map(([value, label]) => (
                <div key={value + label} className="bg-[#0c0c20] p-5">
                  <strong className="font-display text-xl text-blue-400">{value}</strong>
                  <span className="mt-1 block text-[10px] tracking-[0.16em] text-slate-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">INTEGRATION PRINCIPLES</p>
            <h2 className="mt-7 font-display text-4xl leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
              기술보다 중요한 것은
              <span className="text-slate-500"> 연결의 품질입니다.</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [Layers3, "확장 가능한 구조", "장비 교체와 콘텐츠 확장을 고려해 모듈형 시스템으로 설계합니다."],
              [Orbit, "정밀한 동기화", "영상, 사운드, 모션, 특수효과의 타이밍을 하나의 경험으로 맞춥니다."],
              [Focus, "현장 최적화", "투사 거리, 시야각, 밝기, 크로스토크를 실제 공간에서 조정합니다."],
              [Cpu, "안정적인 운영", "운영자가 쉽게 제어하고 장애를 빠르게 파악할 수 있도록 구성합니다."],
            ].map(([Icon, title, copy]) => {
              const ItemIcon = Icon as typeof Layers3;
              return (
                <article key={String(title)} className="border border-white/10 bg-white/[0.025] p-7">
                  <ItemIcon size={23} strokeWidth={1.3} className="text-blue-400" />
                  <h3 className="mt-8 font-display text-xl text-white">{String(title)}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">{String(copy)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
