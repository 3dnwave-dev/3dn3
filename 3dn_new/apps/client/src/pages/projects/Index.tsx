import { ArrowUpRight, Building2, Factory, Landmark, Telescope } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero, SiteLayout } from "@/site";

const fields = [
  [Landmark, "SCIENCE & MUSEUM", "과학관·박물관", "교육 메시지를 관객이 직접 경험하고 기억할 수 있는 인터랙티브 전시로 구성합니다."],
  [Telescope, "EXPERIENCE CENTER", "체험관·홍보관", "브랜드와 지역의 이야기를 입체영상, 모션, 공간 연출로 전달합니다."],
  [Factory, "INDUSTRIAL VISUALIZATION", "기업·산업 시각화", "대형 설비와 설계 데이터를 실물 제작 전에 입체적으로 검토하고 공유합니다."],
  [Building2, "IMMERSIVE VENUE", "몰입형 상영관", "스크린, 프로젝션, 사운드, 제어를 통합해 안정적인 상영 환경을 구축합니다."],
];

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="PROJECTS"
        index="03 / 05"
        title="BUILT FOR REAL SPACES."
        description="좋은 기술은 현장에서 완성됩니다. 3DN은 공간의 조건, 관객의 흐름, 운영자의 일상까지 고려해 오래 작동하는 몰입 경험을 구축합니다."
      />

      <section className="site-section">
        <div className="site-container">
          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <article className="group relative min-h-[560px] overflow-hidden border border-white/10">
              <img
                data-image-slot="projects.gallery-1"
                src="/images/project-gallery-1.jpg"
                alt="대형 인터랙티브 월을 활용한 과학 체험 전시 공간"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                width="900"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080817] via-[#080817]/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                <p className="eyebrow">EXPERIENCE SPACE</p>
                <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-white sm:text-5xl">과학·교육 몰입 전시</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                  복잡한 원리와 데이터를 대형 영상과 인터랙션으로 변환해 관객의 탐색을 유도합니다.
                </p>
              </div>
            </article>

            <article className="group relative min-h-[560px] overflow-hidden border border-white/10">
              <img
                data-image-slot="projects.gallery-2"
                src="/images/project-gallery-2.jpg"
                alt="파노라마 입체 디스플레이가 설치된 기업 시각화 센터"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                width="900"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080817] via-[#080817]/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="eyebrow">VISUALIZATION CENTER</p>
                <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-white">기업 설계 시각화</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  설계 검토와 프레젠테이션을 위한 고해상도 입체 시각화 환경입니다.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0c0c20]">
        <div className="site-container grid md:grid-cols-2">
          {fields.map(([Icon, label, title, copy], index) => {
            const ItemIcon = Icon as typeof Landmark;
            return (
              <article
                key={String(title)}
                className={`min-h-[340px] p-8 sm:p-10 ${index % 2 === 0 ? "md:border-r" : ""} ${index < 2 ? "border-b" : ""} border-white/10`}
              >
                <div className="flex items-center justify-between">
                  <ItemIcon size={25} strokeWidth={1.3} className="text-blue-400" />
                  <span className="font-display text-xs text-slate-700">0{index + 1}</span>
                </div>
                <p className="mt-20 text-[10px] font-bold tracking-[0.18em] text-blue-400">{String(label)}</p>
                <h3 className="mt-4 font-display text-3xl tracking-[-0.035em] text-white">{String(title)}</h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">{String(copy)}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow">YOUR PROJECT, NEXT</p>
            <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.7rem,6vw,6rem)] font-medium leading-[0.96] tracking-[-0.055em] text-white">
              다음 공간의 기준을
              <br />
              함께 만들겠습니다.
            </h2>
          </div>
          <Link to="/contact" className="button-primary">
            구축 상담하기 <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
