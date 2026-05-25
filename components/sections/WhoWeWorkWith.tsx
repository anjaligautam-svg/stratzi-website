"use client";

import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import { TiltCard } from "@/components/ui/tilt-card";

/**
 * WhoWeWorkWith — sectors where Stratzi is live in production.
 * Three industries with brief context. Mirrors the proof strip in the hero
 * but gives each sector a card-sized treatment.
 */

type Sector = {
  name: string;
  detail: string;
};

const sectors: Sector[] = [
  {
    name: "Insurance",
    detail:
      "Quoting, policy issuance, and renewal workflows running end-to-end with AI buddies for brokers and ops teams.",
  },
  {
    name: "Financial services",
    detail:
      "Document processing, KYC, and credit operations automated across SaaS stacks already in use.",
  },
  {
    name: "Tourism",
    detail:
      "Bookings, supplier coordination, and customer comms handled by agents that know the playbook.",
  },
];

export function WhoWeWorkWith() {
  return (
    <section className="pt-12 md:pt-24 pb-16 md:pb-28 section-x bg-bg-warm/40">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="eyebrow">Who we work with</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="headline-lg mt-5">
              Sectors we already{" "}
              <span className="text-primary italic font-medium">
                run in production.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 mx-auto max-w-2xl text-[16.5px] leading-relaxed text-ink-muted">
              Not a pilot list — live deployments handling real customers,
              real money, and real operations every day.
            </p>
          </Reveal>
        </div>

        <Stagger
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
          staggerChildren={0.1}
        >
          {sectors.map((s) => (
            <StaggerItem key={s.name} className="h-full">
              <TiltCard
                tiltLimit={7}
                scale={1.02}
                effect="evade"
                spotlightColor="rgba(176, 238, 237, 0.18)"
                className="h-full rounded-2xl"
              >
                <article className="h-full rounded-2xl border border-primary-edge/45 bg-surface p-7 md:p-9">
                  <div className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-primary">
                    Live sector
                  </div>
                  <h3 className="mt-3 font-heading text-[22px] md:text-[26px] font-semibold leading-tight tracking-[-0.005em] text-ink">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink">
                    {s.detail}
                  </p>
                </article>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
