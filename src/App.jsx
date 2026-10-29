import React, { useEffect, useState } from 'react';
import { BsGithub, BsLinkedin, BsMoon, BsSun, BsDownload, BsEnvelope } from 'react-icons/bs';
import { profile, experience, skills, projects, education } from './data';
import portrait from './assets/profile.webp';

const nav = [
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
];

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (e) {}
  }, [dark]);
  return [dark, () => setDark((d) => !d)];
}

function Header() {
  const [dark, toggle] = useTheme();
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="text-xl font-extrabold tracking-tight">
          Abel<span className="text-signal">.</span>
        </a>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="hidden rounded-md px-3 py-2 text-[15px] text-muted transition-colors hover:text-ink sm:block"
            >
              {label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="rounded-md p-2 text-muted transition-colors hover:text-ink"
          >
            {dark ? <BsSun size={18} /> : <BsMoon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-page px-4 pb-20 pt-14 sm:px-6 md:pb-28 md:pt-24">
      <div>
        <img
          src={portrait}
          alt={`Portrait of ${profile.name}`}
          width="480"
          height="480"
          className="mb-8 h-24 w-24 rounded-full border border-line object-cover sm:h-28 sm:w-28"
        />
        <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-muted sm:text-2xl">
          {profile.role}, {profile.location}
        </p>
        <p className="mt-6 max-w-[34rem] font-serif text-lg leading-relaxed">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={profile.resume}
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 font-medium text-paper transition-opacity hover:opacity-90"
          >
            <BsDownload /> Download résumé
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-medium transition-colors hover:border-ink"
          >
            <BsEnvelope /> Email me
          </a>
          <a href={profile.github} aria-label="GitHub" className="p-3 text-muted transition-colors hover:text-ink">
            <BsGithub size={22} />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" className="p-3 text-muted transition-colors hover:text-ink">
            <BsLinkedin size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-page border-t border-line px-4 py-16 sm:px-6 md:py-24">
      <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {children}
    </section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-14">
        {experience.map((job) => (
          <li key={job.company} className="grid gap-3 md:grid-cols-[12rem_1fr] md:gap-10">
            <div className="tnum text-sm text-muted md:pt-1.5">{job.dates}</div>
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">{job.role}</h3>
              <p className="mt-1 text-muted">
                {job.company}, {job.location}
              </p>
              <ul className="mt-4 max-w-[46rem] list-disc space-y-2 pl-5 font-serif leading-relaxed marker:text-signal">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Stack">
                {job.stack.map((t) => (
                  <li key={t} className="rounded-full bg-ink/[0.06] px-3 py-1 text-sm dark:bg-ink/10">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group}>
            <dt className="font-bold">{s.group}</dt>
            <dd className="mt-2 leading-relaxed text-muted">{s.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <p className="-mt-6 mb-10 max-w-[40rem] font-serif text-muted">
        Earlier coursework and side projects. Most of my recent work is in private repositories.
      </p>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          const body = (
            <>
              <img
                src={p.image}
                alt=""
                loading="lazy"
                width="960"
                height="600"
                className="aspect-[8/5] w-full rounded-lg border border-line object-cover"
              />
              <h3 className="mt-4 text-lg font-bold">
                {p.title}
                {p.href && <BsGithub className="ml-2 inline align-[-2px] text-muted group-hover:text-ink" size={16} />}
              </h3>
              <p className="mt-1 text-muted">{p.blurb}</p>
              <p className="mt-2 text-sm text-muted">{p.tech.join(', ')}</p>
            </>
          );
          return (
            <li key={p.title}>
              {p.href ? (
                <a href={p.href} className="group block">
                  {body}
                </a>
              ) : (
                body
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-8">
        {education.map((e) => (
          <li key={e.degree} className="grid gap-1 md:grid-cols-[12rem_1fr] md:gap-10">
            <div className="tnum text-sm text-muted md:pt-1">{e.dates}</div>
            <div>
              <h3 className="text-xl font-bold">{e.degree}</h3>
              <p className="mt-1 text-muted">
                {e.school}, {e.location}. {e.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper dark:border-t dark:border-line dark:bg-surface dark:text-ink">
      <div className="mx-auto max-w-page px-4 py-20 sm:px-6 md:py-28">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s talk</h2>
        <p className="mt-4 max-w-[36rem] font-serif text-lg leading-relaxed opacity-80">
          I’m open to lead and senior engineering roles, especially in payments and fintech. Email is the fastest
          way to reach me.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block break-all text-2xl font-bold underline decoration-signal decoration-2 underline-offset-8 sm:text-4xl"
        >
          {profile.email}
        </a>
        <div className="mt-10 flex flex-wrap gap-6 opacity-80">
          <a href={profile.linkedin} className="inline-flex items-center gap-2 hover:opacity-100">
            <BsLinkedin /> LinkedIn
          </a>
          <a href={profile.github} className="inline-flex items-center gap-2 hover:opacity-100">
            <BsGithub /> GitHub
          </a>
          <a href={profile.resume} className="inline-flex items-center gap-2 hover:opacity-100">
            <BsDownload /> Résumé (PDF)
          </a>
        </div>
      </div>
      <footer className="mx-auto max-w-page border-t border-paper/15 px-4 py-6 dark:border-line text-sm opacity-60 sm:px-6">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#experience" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Contact />
    </>
  );
}
