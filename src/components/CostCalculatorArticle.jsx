import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  ChevronDown,
  ChevronUp,
  Clock3,
  Info,
  Sparkles,
} from 'lucide-react';

const ADMINISTRATION_RATE = 0.18;
const DEFAULT_HOURS_PER_WEEK = 40;
const DEFAULT_WORK_WEEKS = 48;

const industryGuidance = {
  'HVAC & Mechanical': 'Prioritize a clear late-arrival and emergency-call workflow so dispatch can reassign work and send revised ETAs without rebuilding the day by phone.',
  'Construction & Trades': 'Standardize work-order details, photos, approvals, and job-close documentation so crews spend less time chasing information and more time on billable work.',
  'Delivery & Logistics': 'Use live route visibility and proactive customer updates to reduce status calls while dispatch focuses on exceptions that genuinely need intervention.',
  'Facilities & Property Services': 'Connect recurring work, site history, and technician notes so the next visit begins with context instead of a search for records.',
  'Utilities & Telecom': 'Build an exception workflow for outages and priority jobs that identifies qualified capacity quickly while keeping affected customers informed.',
  'Other Field Service': 'Start with the recurring exception that produces the most calls, manual reassignment, or technician paperwork, then measure the time recovered after automation.',
};

function formatNumber(value) {
  return new Intl.NumberFormat('en-CA', { maximumFractionDigits: 0 }).format(Math.round(value));
}

export default function CostCalculatorArticle() {
  const [technicians, setTechnicians] = useState(10);
  const [industry, setIndustry] = useState('HVAC & Mechanical');
  const [hoursPerWeek, setHoursPerWeek] = useState(DEFAULT_HOURS_PER_WEEK);
  const [workWeeks, setWorkWeeks] = useState(DEFAULT_WORK_WEEKS);
  const [showAssumptions, setShowAssumptions] = useState(false);

  const estimate = useMemo(() => {
    const safeTechnicians = Math.max(1, Number(technicians) || 1);
    const safeHours = Math.max(1, Number(hoursPerWeek) || DEFAULT_HOURS_PER_WEEK);
    const safeWeeks = Math.max(1, Number(workWeeks) || DEFAULT_WORK_WEEKS);
    const annualHours = safeTechnicians * safeHours * safeWeeks * ADMINISTRATION_RATE;
    const weeklyHours = safeTechnicians * safeHours * ADMINISTRATION_RATE;
    const workdays = annualHours / 8;

    return {
      technicians: safeTechnicians,
      hoursPerWeek: safeHours,
      workWeeks: safeWeeks,
      annualHours,
      weeklyHours,
      workdays,
    };
  }, [technicians, hoursPerWeek, workWeeks]);

  const handleNumberChange = (setter, maximum) => (event) => {
    const nextValue = event.target.value;
    if (nextValue === '') {
      setter('');
      return;
    }
    setter(Math.min(maximum, Math.max(0, Number(nextValue))));
  };

  return (
    <main className="bg-moss-900 pt-28 pb-24">
      <article className="mx-auto w-full max-w-7xl px-6">
        <a
          href="/#blog"
          className="mb-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-chartreuse transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to insights
        </a>

        <div className="grid items-end gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-chartreuse">Cost Savings · Interactive Tool</p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.94] tracking-tighter text-white md:text-7xl">
              How many field hours could your team reclaim each year?
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/65 md:text-xl">
              Use this field-service wasted-hours calculator to estimate the annual technician time consumed by administrative work—and identify the operational friction worth fixing first.
            </p>
          </div>

          <div className="rounded-[2rem] border border-chartreuse/20 bg-chartreuse/10 p-6">
            <div className="mb-4 flex items-center gap-3 text-chartreuse">
              <Clock3 className="h-7 w-7" />
              <span className="text-sm font-bold uppercase tracking-[0.16em]">The benchmark</span>
            </div>
            <p className="text-2xl font-bold leading-tight text-white">18% of technician hours</p>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Salesforce reported that technicians waste 18% of working hours—more than seven hours a week—on administrative tasks such as forms and information searching.
            </p>
          </div>
        </div>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]" aria-labelledby="calculator-heading">
          <div className="rounded-[2rem] border border-white/10 bg-moss-800 p-7 md:p-9">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-chartreuse text-moss-900">
                <Calculator className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-chartreuse">Your inputs</p>
                <h2 id="calculator-heading" className="text-2xl font-bold text-white">Estimate your annual waste</h2>
              </div>
            </div>

            <label htmlFor="technicians" className="mb-2 block text-sm font-bold text-white">
              Number of field technicians
            </label>
            <input
              id="technicians"
              type="number"
              min="1"
              max="10000"
              inputMode="numeric"
              value={technicians}
              onChange={handleNumberChange(setTechnicians, 10000)}
              className="w-full rounded-2xl border border-white/15 bg-moss-900 px-5 py-4 text-3xl font-bold text-white outline-none transition focus:border-chartreuse focus:ring-2 focus:ring-chartreuse/20"
              aria-describedby="technicians-help"
            />
            <p id="technicians-help" className="mt-2 text-sm text-white/45">Include technicians, drivers, or mobile crew members who complete field work.</p>

            <label htmlFor="industry" className="mb-2 mt-7 block text-sm font-bold text-white">
              Industry
            </label>
            <select
              id="industry"
              value={industry}
              onChange={(event) => setIndustry(event.target.value)}
              className="w-full appearance-none rounded-2xl border border-white/15 bg-moss-900 px-5 py-4 text-base font-semibold text-white outline-none transition focus:border-chartreuse focus:ring-2 focus:ring-chartreuse/20"
            >
              {Object.keys(industryGuidance).map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => setShowAssumptions((current) => !current)}
              className="mt-7 flex w-full items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-left text-sm font-semibold text-white/75 transition hover:border-chartreuse/40 hover:text-white"
              aria-expanded={showAssumptions}
            >
              <span>Adjust work schedule assumptions</span>
              {showAssumptions ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {showAssumptions && (
              <div className="mt-4 grid grid-cols-2 gap-4 rounded-xl bg-moss-900/70 p-4">
                <div>
                  <label htmlFor="hours" className="mb-2 block text-xs font-bold uppercase tracking-wide text-white/55">Hours / week</label>
                  <input
                    id="hours"
                    type="number"
                    min="1"
                    max="168"
                    inputMode="numeric"
                    value={hoursPerWeek}
                    onChange={handleNumberChange(setHoursPerWeek, 168)}
                    className="w-full rounded-xl border border-white/15 bg-moss-800 px-3 py-3 font-bold text-white outline-none transition focus:border-chartreuse"
                  />
                </div>
                <div>
                  <label htmlFor="weeks" className="mb-2 block text-xs font-bold uppercase tracking-wide text-white/55">Work weeks / year</label>
                  <input
                    id="weeks"
                    type="number"
                    min="1"
                    max="52"
                    inputMode="numeric"
                    value={workWeeks}
                    onChange={handleNumberChange(setWorkWeeks, 52)}
                    className="w-full rounded-xl border border-white/15 bg-moss-800 px-3 py-3 font-bold text-white outline-none transition focus:border-chartreuse"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-chartreuse p-7 text-moss-900 md:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[30px] border-moss-900/10" />
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-moss-900/60">Estimated annual administrative time</p>
              <p className="mt-4 text-6xl font-black leading-none tracking-tighter md:text-8xl">{formatNumber(estimate.annualHours)}</p>
              <p className="mt-2 text-2xl font-bold">hours per year</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-moss-900/75">
                For a {formatNumber(estimate.technicians)}-person {industry.toLowerCase()} field team, that is approximately {formatNumber(estimate.weeklyHours)} hours of administrative work every week, or {formatNumber(estimate.workdays)} eight-hour workdays each year.
              </p>

              <div className="mt-8 rounded-2xl border border-moss-900/15 bg-white/25 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-moss-900/60">The calculation</p>
                <p className="mt-2 font-mono text-sm font-bold leading-relaxed md:text-base">
                  {formatNumber(estimate.technicians)} technicians × {estimate.hoursPerWeek} hours/week × {estimate.workWeeks} weeks/year × 18% = {formatNumber(estimate.annualHours)} hours/year
                </p>
              </div>

              <div className="mt-8 flex items-start gap-3 border-t border-moss-900/15 pt-6">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm leading-relaxed text-moss-900/75">
                  <strong className="text-moss-900">Best next move for {industry}:</strong> {industryGuidance[industry]}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-chartreuse" />
              <div>
                <h2 className="text-lg font-bold text-white">About this estimate</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  The calculator applies Salesforce’s 18% field-service benchmark to the work schedule you enter. Industry selection tailors the operational recommendation; it does not change the percentage because the cited research does not provide industry-specific administrative-time rates.
                </p>
              </div>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-white/10 bg-moss-800 p-7 md:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-chartreuse">Why it matters</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">A more controlled field day protects margin and customer trust.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              Administrative drag is not only a labour-cost issue. When dispatchers and technicians are caught in manual coordination, customers receive less certainty about appointment timing, job status, and next steps. That creates the service friction that makes a provider easier to replace.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              NVC360 helps field teams create and assign work quickly, track activity in real time, automate ETAs, and keep technicians, managers, and customers aligned. The goal is simple: spend fewer skilled hours chasing information and more hours delivering work customers remember.
            </p>
            <a
              href="https://nvc360.com"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-chartreuse px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-moss-900 transition-transform hover:-translate-y-0.5"
            >
              See how NVC360 works <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="mt-14 border-t border-white/10 pt-8">
          <h2 className="text-xl font-bold text-white">Source and methodology</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/55">
            Salesforce surveyed 6,500 service professionals across 40 countries and 350 U.S. mobile workers for its January 2026 field-service research. It reported that technicians waste 18% of working hours—more than seven hours per week—on administration such as forms and information searching. This calculator estimates annual hours only; it does not calculate dollar savings or guarantee results.
          </p>
          <p className="mt-3 text-sm">
            <a
              className="font-semibold text-chartreuse underline decoration-chartreuse/40 underline-offset-4 transition hover:text-white"
              href="https://www.salesforce.com/service/field-service-management/trends/"
              target="_blank"
              rel="noreferrer"
            >
              Salesforce: 3 Field Service Trends Today’s Leaders Need to Know (January 30, 2026)
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
