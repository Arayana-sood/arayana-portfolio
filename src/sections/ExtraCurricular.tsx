import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────
   EXTRA-CURRICULAR ACTIVITY SECTION
   Follows exact CV order (Section 5 after Achievements).
   Directly from Arayana Sood's verified CV:
   • CyberSmart Volunteer — WNS Cares Foundation (WCF)
   ─────────────────────────────────────────────────────────────────────────*/

export function ExtraCurricular() {
  return (
    <section
      id="activities"
      aria-label="Extra-Curricular Activity"
      className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-[--border-subtle]">
            <SectionHeading
              overline="Leadership & Service"
              heading="Extra-Curricular Activity"
              description="Community safety advocacy and social responsibility initiatives."
            />
            <span className="text-xs font-mono-text text-muted">
              Section 05 · Verified CV Activity
            </span>
          </div>
        </AnimatedSection>

        {/* Activity Card */}
        <AnimatedSection delay={0.06}>
          <div className="p-6 sm:p-8 rounded-xl bg-[--bg-surface] border border-[--border-subtle] transition-all hover:border-[--border] hover:shadow-warm-sm flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[--border-subtle] pb-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[--bg-elevated] text-accent flex items-center justify-center shrink-0 border border-[--border-subtle]">
                  <HeartHandshake size={20} aria-hidden />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono-text text-accent font-semibold px-2 py-0.5 rounded bg-[--bg-elevated] border border-[--border-subtle]">
                      Social Volunteering
                    </span>
                    <span className="text-xs font-mono-text text-muted">
                      July 2025
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-editorial font-normal text-primary mt-1">
                    CyberSmart Volunteer
                  </h3>
                  <p className="text-xs font-mono-text text-secondary mt-0.5">
                    Digital Safety Advocate · <span className="text-muted">WNS Cares Foundation (WCF)</span>
                  </p>
                </div>
              </div>

              <div className="sm:self-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-text bg-sky-500/10 text-sky-400 border border-sky-500/20 font-medium">
                  <ShieldCheck size={13} />
                  <span>Certified Volunteer</span>
                </span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2 text-xs sm:text-sm text-secondary leading-relaxed pl-1">
              <li className="flex items-start gap-2.5">
                <span className="text-accent mt-0.5 shrink-0 font-bold">•</span>
                <span>
                  Completed a specialized volunteer program focused on cybersecurity awareness, data privacy, and threat identification under WNS Cares Foundation (WCF).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent mt-0.5 shrink-0 font-bold">•</span>
                <span>
                  Advocated and spread awareness regarding safe online practices, recognizing phishing vectors, and securing personal digital footprint among peers and youth.
                </span>
              </li>
            </ul>

            {/* Highlights bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[--border-subtle]">
              <div className="flex flex-wrap gap-2 text-xs">
                {['Cybersecurity Awareness', 'Community Advocacy', 'Digital Safety Education'].map((hl, i) => (
                  <span key={i} className="font-mono-text text-[11px] text-accent flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>{hl}</span>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 ml-auto">
                {['Cybersecurity', 'Volunteering', 'Community Education', 'Digital Safety'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono-text bg-[--bg-elevated] text-muted border border-[--border-subtle]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
