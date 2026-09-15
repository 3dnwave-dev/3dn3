import {
  ArrowUpRight,
  Box,
  BrainCircuit,
  ChevronRight,
  Clapperboard,
  Cuboid,
  Glasses,
  Mail,
  MapPin,
  Menu,
  MonitorUp,
  Phone,
  ScanLine,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export const contact = {
  phone: "070-4007-8562",
  mobile: "+82-10-8863-8562",
  email: "3dnwave@naver.com",
  address: "충청남도 아산시 염치읍 은행나무길 223 충남경제진흥원 403호",
  manual: "http://more3d.com/more3d/files/m3d/Online_Manual/index.html",
};

export type Solution = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
};

export const solutions: Solution[] = [
  {
    id: "ai-visualization",
    eyebrow: "AI VISUALIZATION",
    title: "AI 기반 산업 시각화",
    description: "복잡한 설계와 데이터를 더 빠르게 이해할 수 있는 몰입형 시각 경험으로 전환합니다.",
    detail: "디지털 트윈, 3D CAD, 실시간 렌더링 환경을 프로젝트 목적에 맞게 연결합니다.",
    icon: BrainCircuit,
  },
  {
    id: "more3d",
    eyebrow: "REAL-TIME STEREO",
    title: "more3D 시스템",
    description: "OpenGL 기반 3D CAD 화면을 별도 인코딩 없이 실시간 입체 영상으로 구현합니다.",
    detail: "CATIA를 비롯한 다양한 설계 도구에 적용하여 제작 전 검토와 협업의 정확도를 높입니다.",
    icon: Cuboid,
  },
  {
    id: "attraction",
    eyebrow: "3D · 4D · 5D CONTENT",
    title: "어트랙션 콘텐츠",
    description: "글로벌 스튜디오의 입체·어트랙션 콘텐츠와 공간에 맞는 상영 구성을 제공합니다.",
    detail: "3D 영화부터 4D 모션, 360° VR까지 관객의 감각을 확장하는 콘텐츠를 큐레이션합니다.",
    icon: Clapperboard,
  },
  {
    id: "immersive",
    eyebrow: "VR · CAVE · TRACKING",
    title: "몰입형 체험 시스템",
    description: "HMD, 트래킹, CAVE, 멀티 프로젝션을 결합해 목적형 체험 환경을 구축합니다.",
    detail: "교육·연구·전시·기업 시각화에 필요한 하드웨어와 콘텐츠를 하나의 시스템으로 통합합니다.",
    icon: Glasses,
  },
  {
    id: "equipment",
    eyebrow: "STEREOSCOPIC EQUIPMENT",
    title: "입체 상영 장비",
    description: "입체안경, 디지털 필터, 실버스크린, 3D 프로젝터와 서버를 공간에 맞게 구성합니다.",
    detail: "예산, 투사 거리, 밝기, 관람 인원을 분석해 안정적인 상영 품질을 설계합니다.",
    icon: MonitorUp,
  },
  {
    id: "turnkey",
    eyebrow: "TURNKEY INSTALLATION",
    title: "입체영상관 구축",
    description: "공간 기획부터 설계, 제품 구성, 시공, 세팅까지 All-in-one으로 완성합니다.",
    detail: "10년 이상의 현장 노하우를 바탕으로 운영까지 고려한 시스템을 제공합니다.",
    icon: ScanLine,
  },
];

export const processSteps = [
  ["01", "DISCOVER", "공간, 관객, 운영 목적과 예산을 함께 정의합니다."],
  ["02", "DESIGN", "콘텐츠·장비·동선·제어 시스템을 통합 설계합니다."],
  ["03", "BUILD", "설치와 캘리브레이션, 현장 최적화를 진행합니다."],
  ["04", "OPERATE", "교육, 매뉴얼, 유지관리까지 운영을 지원합니다."],
];

const navigation = [
  { label: "HOME", path: "/" },
  { label: "SOLUTIONS", path: "/solutions" },
  { label: "TECHNOLOGY", path: "/technology" },
  { label: "PROJECTS", path: "/projects" },
  { label: "COMPANY", path: "/company" },
];

const seoMap: Record<string, { title: string; description: string }> = {
  "/": {
    title: "3DN | AI·3D·4D 몰입형 기술 기업",
    description: "AI 시각화, more3D, 3D·4D 어트랙션 콘텐츠, VR·CAVE 시스템과 입체영상관 구축을 제공하는 3DN입니다.",
  },
  "/solutions": {
    title: "솔루션 | 3DN",
    description: "AI 산업 시각화부터 3D·4D 콘텐츠, VR·CAVE, 입체영상관 구축까지 3DN의 통합 솔루션을 소개합니다.",
  },
  "/technology": {
    title: "기술 | 3DN",
    description: "실시간 스테레오스코픽 변환, 트래킹, 멀티 프로젝션, 콘텐츠·하드웨어 통합 기술을 확인하세요.",
  },
  "/projects": {
    title: "프로젝트 | 3DN",
    description: "과학관, 체험관, 기업 시각화, 전시 공간에 적용되는 3DN의 몰입형 시스템 구축 역량을 소개합니다.",
  },
  "/company": {
    title: "회사소개 | 3DN",
    description: "현실 너머의 경험을 설계하는 AI·입체영상·어트랙션 시스템 전문 기업 3DN을 소개합니다.",
  },
  "/contact": {
    title: "문의 | 3DN",
    description: "AI 시각화, 3D·4D 어트랙션, VR·CAVE 및 입체영상관 구축 프로젝트를 3DN과 상담하세요.",
  },
};

export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = seoMap[pathname] ?? seoMap["/"];
    document.title = seo.title;

    const setMeta = (selector: string, attribute: string, value: string) => {
      const tag = document.querySelector<HTMLMetaElement>(selector);
      tag?.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', "content", seo.description);
    setMeta('meta[property="og:title"]', "content", seo.title);
    setMeta('meta[property="og:description"]', "content", seo.description);
    setMeta('meta[name="twitter:title"]', "content", seo.title);
    setMeta('meta[name="twitter:description"]', "content", seo.description);
  }, [pathname]);

  return null;
}

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="3DN 홈">
      <span className="relative grid h-9 w-10 place-items-center overflow-hidden border border-blue-400/40 bg-blue-500/10 font-display text-sm font-bold tracking-[-0.08em] text-white">
        3D
        <span className="absolute inset-x-0 bottom-0 h-px bg-blue-400 transition-all group-hover:h-0.5" />
      </span>
      <span>
        <strong className="block font-display text-lg leading-none tracking-[0.16em] text-white">3DN</strong>
        <span className="mt-1 block text-[8px] font-bold tracking-[0.32em] text-slate-500">IMMERSIVE SYSTEMS</span>
      </span>
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080817] text-slate-100">
      <Seo />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#080817]/82 backdrop-blur-xl">
        <div className="site-container flex h-[76px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="주요 메뉴">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }: { isActive: boolean }) =>
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <span className="h-px w-8 bg-white/15" />
            <Link to="/contact" className="button-primary">
              프로젝트 문의
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-white/10 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-white/8 bg-[#0a0a1a] px-5 py-5 lg:hidden" aria-label="모바일 메뉴">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }: { isActive: boolean }) =>
                    `border-b border-white/8 py-4 font-display text-sm tracking-[0.16em] ${
                      isActive ? "text-blue-400" : "text-slate-300"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/contact" className="button-primary mt-5 justify-center">
                프로젝트 문의
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/8 bg-[#060611]">
        <div className="site-container grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
              AI와 입체 기술을 기반으로 콘텐츠, 장비, 공간을 연결해
              사람의 감각을 확장하는 몰입형 경험을 설계합니다.
            </p>
          </div>
          <div>
            <p className="footer-label">NAVIGATION</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-400">
              {navigation.map((item) => (
                <Link key={item.path} to={item.path} className="transition hover:text-blue-400">
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="transition hover:text-blue-400">CONTACT</Link>
            </div>
          </div>
          <div>
            <p className="footer-label">CONTACT</p>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <a href={`tel:${contact.phone}`} className="flex items-center gap-2 transition hover:text-white">
                <Phone size={14} /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 transition hover:text-white">
                <Mail size={14} /> {contact.email}
              </a>
              <p className="flex items-start gap-2 leading-6">
                <MapPin size={14} className="mt-1 shrink-0" /> {contact.address}
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8">
          <div className="site-container flex flex-col gap-3 py-5 text-[11px] tracking-[0.12em] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <span>© 3DN. ALL RIGHTS RESERVED.</span>
            <a href={contact.manual} target="_blank" rel="noreferrer" className="transition hover:text-blue-400">
              MORE3D ONLINE MANUAL ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  index,
}: {
  eyebrow: string;
  title: string;
  description: string;
  index: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 pb-20 pt-36 sm:pb-24 sm:pt-44">
      <div className="tech-grid absolute inset-0 opacity-40" />
      <div className="orb orb-blue -right-32 top-20 h-72 w-72" />
      <div className="site-container relative z-10">
        <div className="mb-9 flex items-center justify-between border-b border-white/10 pb-5">
          <p className="eyebrow">{eyebrow}</p>
          <span className="font-display text-xs tracking-[0.2em] text-slate-600">{index}</span>
        </div>
        <h1 className="max-w-5xl font-display text-[clamp(2.8rem,7vw,6.8rem)] font-medium leading-[0.96] tracking-[-0.055em] text-white">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="grid gap-6 border-t border-white/10 pt-6 lg:grid-cols-[0.45fr_1fr]">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2 className="font-display text-[clamp(2rem,4.4vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.045em] text-white">
          {title}
        </h2>
        {description && <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">{description}</p>}
      </div>
    </div>
  );
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-3 font-display text-sm font-semibold tracking-[0.08em] text-white">
      {children}
      <span className="grid h-9 w-9 place-items-center border border-blue-400/30 bg-blue-500/10 text-blue-400 transition group-hover:border-blue-400 group-hover:bg-blue-500 group-hover:text-white">
        <ChevronRight size={17} />
      </span>
    </Link>
  );
}

export const capabilityIcons = [BrainCircuit, Cuboid, Clapperboard, Sparkles, Box, Glasses];
