import { CheckCircle2, Compass, Layers3, Wrench } from "lucide-react";
import { contact, PageHero, SiteLayout } from "@/site";

const values = [
  [Compass, "목적에서 시작합니다", "최신 기술보다 관객과 운영 목적에 맞는 기술을 먼저 선택합니다."],
  [Layers3, "전체를 연결합니다", "콘텐츠, 장비, 소프트웨어, 공간을 하나의 시스템으로 통합합니다."],
  [Wrench, "현장에서 완성합니다", "설계 수치뿐 아니라 실제 밝기, 시야, 동선, 운영성을 끝까지 확인합니다."],
  [CheckCircle2, "운영까지 책임집니다", "교육, 매뉴얼, 유지관리 지원으로 설치 이후의 경험까지 이어갑니다."],
];

export default function CompanyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="COMPANY"
        index="04 / 05"
        title="WE ENGINEER EXPERIENCE."
        description="3DN은 입체영상 기술을 바탕으로 AI 시각화, 몰입형 콘텐츠, 어트랙션 장비와 공간 구축을 연결하는 기술 기업입니다."
      />

      <section className="site-section">
        <div className="site-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="eyebrow">ABOUT 3DN</p>
            <p className="mt-8 font-display text-7xl font-medium tracking-[-0.08em] text-blue-500 sm:text-9xl">3DN</p>
          </div>
          <div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5.2rem)] font-medium leading-[1] tracking-[-0.05em] text-white">
              현실과 가상의 경계를 넘어,
              <span className="text-slate-500"> 더 잘 이해하고 더 깊이 느끼게 합니다.</span>
            </h2>
            <div className="mt-10 grid gap-6 text-base leading-8 text-slate-400 sm:grid-cols-2">
              <p>
                more3D 실시간 입체화 기술을 시작으로, 3D·4D·5D 콘텐츠와 VR, CAVE,
                입체 상영 장비까지 몰입형 미디어에 필요한 폭넓은 기술을 다뤄왔습니다.
              </p>
              <p>
                3DN의 역할은 제품을 공급하는 데서 끝나지 않습니다. 공간과 관객, 운영 조건을 분석하고
                가장 안정적인 조합을 설계해 현장에서 작동하는 시스템으로 완성합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0c0c20]">
        <div className="site-container grid md:grid-cols-2">
          {values.map(([Icon, title, copy], index) => {
            const ItemIcon = Icon as typeof Compass;
            return (
              <article
                key={String(title)}
                className={`min-h-[300px] p-8 sm:p-10 ${index % 2 === 0 ? "md:border-r" : ""} ${index < 2 ? "border-b" : ""} border-white/10`}
              >
                <ItemIcon size={25} strokeWidth={1.3} className="text-blue-400" />
                <h3 className="mt-20 font-display text-2xl text-white">{String(title)}</h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">{String(copy)}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">COMPANY INFO</p>
            <h2 className="mt-7 font-display text-4xl tracking-[-0.04em] text-white">함께 연결될 준비가 되어 있습니다.</h2>
          </div>
          <dl className="divide-y divide-white/10 border-t border-white/10">
            {[
              ["COMPANY", "3DN · 쓰리디엔"],
              ["TEL", contact.phone],
              ["MOBILE", contact.mobile],
              ["E-MAIL", contact.email],
              ["ADDRESS", contact.address],
            ].map(([term, value]) => (
              <div key={term} className="grid gap-3 py-6 sm:grid-cols-[160px_1fr]">
                <dt className="text-[10px] font-bold tracking-[0.18em] text-blue-400">{term}</dt>
                <dd className="text-sm leading-7 text-slate-300">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}
