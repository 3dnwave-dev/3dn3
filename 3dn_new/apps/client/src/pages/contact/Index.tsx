import { ArrowUpRight, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contact, PageHero, SiteLayout } from "@/site";

type Inquiry = {
  name: string;
  company: string;
  email: string;
  phone: string;
  project: string;
  message: string;
};

const emptyInquiry: Inquiry = {
  name: "",
  company: "",
  email: "",
  phone: "",
  project: "몰입형 전시·체험 공간",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<Inquiry>(emptyInquiry);
  const [error, setError] = useState("");

  const update = (field: keyof Inquiry, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("이름, 이메일, 프로젝트 내용을 입력해 주세요.");
      return;
    }

    setError("");
    const subject = `[3DN 홈페이지 문의] ${form.company || form.name} / ${form.project}`;
    const body = [
      `이름: ${form.name}`,
      `회사/기관: ${form.company || "-"}`,
      `이메일: ${form.email}`,
      `연락처: ${form.phone || "-"}`,
      `관심 분야: ${form.project}`,
      "",
      "프로젝트 내용",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="CONTACT"
        index="05 / 05"
        title="LET'S BUILD THE NEXT EXPERIENCE."
        description="아이디어가 구체적이지 않아도 괜찮습니다. 공간의 목적, 크기, 예상 일정과 예산 범위를 알려주시면 적합한 시스템부터 함께 정의하겠습니다."
      />

      <section className="site-section">
        <div className="site-container grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <aside>
            <p className="eyebrow">DIRECT CONTACT</p>
            <div className="mt-8 space-y-4">
              <a href={`tel:${contact.phone}`} className="contact-card">
                <Phone size={20} className="text-blue-400" />
                <span>
                  <small>TELEPHONE</small>
                  <strong>{contact.phone}</strong>
                </span>
                <ArrowUpRight size={17} className="ml-auto text-slate-600" />
              </a>
              <a href={`mailto:${contact.email}`} className="contact-card">
                <Mail size={20} className="text-blue-400" />
                <span>
                  <small>E-MAIL</small>
                  <strong>{contact.email}</strong>
                </span>
                <ArrowUpRight size={17} className="ml-auto text-slate-600" />
              </a>
              <div className="contact-card items-start">
                <MapPin size={20} className="mt-1 shrink-0 text-blue-400" />
                <span>
                  <small>OFFICE</small>
                  <strong className="max-w-xs leading-6">{contact.address}</strong>
                </span>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="eyebrow">SUPPORT</p>
              <a
                href={contact.manual}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-blue-400"
              >
                MORE3D 온라인 매뉴얼
                <ExternalLink size={15} />
              </a>
            </div>
          </aside>

          <div className="border border-white/10 bg-[#0c0c20] p-6 sm:p-10">
            <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-7 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">PROJECT INQUIRY</p>
                <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-white">프로젝트 정보 보내기</h2>
              </div>
              <span className="text-xs leading-5 text-slate-600">* 필수 항목</span>
            </div>

            <form onSubmit={submit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="field-label">
                  이름 *
                  <input
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    className="field-input"
                    placeholder="성함을 입력해 주세요"
                  />
                </label>
                <label className="field-label">
                  회사 / 기관
                  <input
                    value={form.company}
                    onChange={(event) => update("company", event.target.value)}
                    className="field-input"
                    placeholder="회사 또는 기관명"
                  />
                </label>
                <label className="field-label">
                  이메일 *
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => update("email", event.target.value)}
                    className="field-input"
                    placeholder="name@company.com"
                  />
                </label>
                <label className="field-label">
                  연락처
                  <input
                    value={form.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    className="field-input"
                    placeholder="010-0000-0000"
                  />
                </label>
              </div>

              <label className="field-label">
                관심 분야
                <select
                  value={form.project}
                  onChange={(event) => update("project", event.target.value)}
                  className="field-input"
                >
                  <option>몰입형 전시·체험 공간</option>
                  <option>3D·4D 어트랙션 콘텐츠</option>
                  <option>more3D·산업 시각화</option>
                  <option>VR·CAVE 시스템</option>
                  <option>입체 상영 장비</option>
                  <option>기타 프로젝트</option>
                </select>
              </label>

              <label className="field-label">
                프로젝트 내용 *
                <textarea
                  value={form.message}
                  onChange={(event) => update("message", event.target.value)}
                  className="field-input min-h-40 resize-y"
                  placeholder="공간의 용도, 크기, 예상 일정, 예산 범위 등을 알려주세요."
                />
              </label>

              {error && <p role="alert" className="border border-red-400/25 bg-red-500/8 px-4 py-3 text-sm text-red-300">{error}</p>}

              <div className="flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-6 text-slate-600">
                  입력 내용은 서버에 저장되지 않습니다. 버튼을 누르면 기본 이메일 앱이 열리며,
                  이메일 앱에서 최종 전송해 주세요.
                </p>
                <button type="submit" className="button-primary shrink-0">
                  이메일로 문의 작성 <ArrowUpRight size={17} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
