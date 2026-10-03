import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const STEPS = [
  {
    title: 'Create your profile',
    desc: 'Tell us your age, state, occupation, income, and education — takes under a minute.',
  },
  {
    title: 'We match you against real schemes',
    desc: 'Our backend checks your profile against official eligibility rules stored for every scheme.',
  },
  {
    title: 'Get plain-English explanations',
    desc: 'Gemini AI explains why each scheme fits you and simplifies the official jargon.',
  },
];

const CATEGORIES = [
  'Agriculture',
  'Education',
  'Healthcare',
  'Housing',
  'Business & Employment',
  'Entrepreneurship',
  'Social Security & Pension',
  'Skill Development',
  'Women & Children',
  'Financial Inclusion',
  'Senior & Disability Welfare',
];

export default function Landing() {
  const { user } = useAuth();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600"></span>
              Built for citizens, not bureaucracy
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Find the government schemes
              <span className="text-brand-600"> you actually qualify for.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600 font=white">
              GovAssist AI matches your profile against real eligibility rules — then
              explains each match in plain English. No forms in legal jargon, no guesswork.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to={user ? '/recommendations' : '/register'} className="btn-primary text-base">
                {user ? 'View My Recommendations' : 'Check My Eligibility — Free'}
              </Link>
              <Link to={user ? '/dashboard' : '/login'} className="btn-secondary text-base">
                {user ? 'Go to Dashboard' : 'I already have an account'}
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Eligibility is decided by transparent backend rules — never by AI guesswork.
            </p>
          </div>

          <div className="relative">
            <div className="card border-brand-100 bg-gradient-to-br from-brand-50 to-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                Sample Match
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Pradhan Mantri Mudra Yojana
              </h3>
              <span className="mt-2 inline-block rounded-full bg-accent-100 px-2.5 py-1 text-xs font-semibold text-accent-600">
                Business &amp; Employment
              </span>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                "Because you're a 29-year-old entrepreneur in Maharashtra with an annual
                income under ₹20L, you qualify for a collateral-free loan of up to ₹10 lakh
                to grow your business."
              </p>
              <p className="mt-3 text-xs font-medium text-slate-400">— Explained by Gemini AI</p>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-2xl bg-accent-400/20 blur-2xl sm:block"></div>
            <div className="absolute -right-4 -top-4 hidden h-20 w-20 rounded-full bg-brand-400/20 blur-2xl sm:block"></div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">How it works</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
          Three simple steps stand between you and schemes you may be missing out on.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900">
            Schemes across every category
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900">
          Ready to see what you qualify for?
        </h2>
        <p className="mt-3 text-slate-600">
          It takes less than two minutes to build your profile.
        </p>
        <Link to={user ? '/recommendations' : '/register'} className="btn-primary mt-8 text-base">
          {user ? 'View My Recommendations' : 'Get Started Free'}
        </Link>
      </section>
    </div>
  );
}
