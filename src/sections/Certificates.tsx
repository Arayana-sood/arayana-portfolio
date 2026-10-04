import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { certificates } from '@/data/certificates';
import { Award, ExternalLink } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────
   CERTIFICATIONS SECTION
   Clean structured cards with clear placeholders for verified credentials.
   Understated borders, consistent vertical rhythm.
   ─────────────────────────────────────────────────────────────────────────*/

export function Certificates() {
  return (
    <section
      id="certificates"
      aria-label="Certifications & Learning"
      className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Section Heading */}
        <AnimatedSection>
          <SectionHeading
            overline="Credentials & Learning"
            heading="Coursework and verified certifications."
            description="Dedicated technical certifications and specialized coursework."
          />
        </AnimatedSection>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {certificates.map((cert, index) => (
            <AnimatedSection key={cert.id} delay={index * 0.06}>
              <div className="p-5 rounded-xl bg-[--bg-surface] border border-[--border-subtle] h-full flex flex-col justify-between gap-4 transition-colors hover:border-[--border]">
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-[--bg-elevated] text-accent flex items-center justify-center">
                      <Award size={15} aria-hidden />
                    </span>
                    <span className="text-xs font-mono-text text-muted">
                      {cert.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-primary leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono-text text-muted mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 pt-3 border-t border-[--border-subtle]">
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono-text bg-[--bg-elevated] text-secondary border border-[--border-subtle]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-0.5">
                    <span className="text-[10px] font-mono-text text-muted">
                      {cert.isPlaceholder ? '[Verification Pending]' : 'Verified'}
                    </span>
                    {(cert.fileUrl || (cert.credentialUrl && cert.credentialUrl !== '[ADD CREDENTIAL LINK]')) ? (
                      <a
                        href={cert.fileUrl || cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent hover:underline font-mono-text"
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={11} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
