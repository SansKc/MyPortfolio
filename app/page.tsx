import { Navbar } from '@/components/navbar';
import { WorkSection } from '@/components/work-section';
import Image from 'next/image';

export default function Home() {
  return (
    <div
      id="page-scroll"
      className="h-[100dvh] w-full snap-y snap-mandatory overflow-y-auto scroll-smooth bg-white text-black"
    >
      <section className="flex h-[100dvh] snap-start flex-col" aria-labelledby="home-heading">
        <Navbar />
        <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <h1
            id="home-heading"
            className="font-[family-name:var(--font-roboto)] text-[clamp(3rem,10vw,7.5rem)] font-light leading-none tracking-[-0.06em]"
          >
            Sanskar Kc
          </h1>
          <p className="mt-6 font-[family-name:var(--font-anon-pro)] text-lg text-black/80 sm:text-xl">
            AI Software Engineer, UI/UX Designer
          </p>
        </main>
        <footer className="flex shrink-0 items-end justify-between gap-6 px-6 py-8 sm:px-10">
          <p className="max-w-xs font-[family-name:var(--font-roboto)] text-sm leading-relaxed text-black/70">
            Building thoughtful software and interfaces — explore his projects, process, and a
            growing body of work.
          </p>
          <a
            href="#workflows"
            className="flex items-center gap-2 font-[family-name:var(--font-roboto)] text-sm font-bold transition-opacity hover:opacity-60"
          >
            Scroll Down{' '}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </footer>
      </section>

      <WorkSection />

      <section
        id="projects"
        className="flex min-h-[100dvh] snap-start flex-col px-4 py-10 sm:px-6 sm:py-16 lg:px-10"
        aria-labelledby="projects-heading"
      >
        <div className="flex flex-1 flex-col justify-center">
          <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="hidden lg:block" aria-hidden="true"></div>
            <div className="max-w-[580px] lg:pb-6">
              <p className="font-[family-name:var(--font-roboto)] text-sm text-black/50">
                Client work
              </p>
              <h2
                id="projects-heading"
                className="mt-3 font-[family-name:var(--font-roboto)] text-[clamp(2rem,3vw,3rem)] font-light leading-[0.92] tracking-[-0.055em]"
              >
                Client work shipped{' '}
                <em className="font-[family-name:var(--font-editorial)] tracking-[-0.07em]">
                  end to end,
                </em>
                from Figma frame to production build.
              </h2>
            </div>
          </div>

          <div className="mt-10 border-t border-black/10 sm:mt-14">
            {[
              { slug: 'vinex-nepal', name: 'Vinex Nepal', type: 'NextJS | Node.js', year: '2025' },
              {
                slug: 'kishor-kayastha',
                name: 'Kishor Kayastha',
                type: 'NextJS | Node.js',
                year: '2026',
              },
              {
                slug: 'ai-ticket-support-system',
                name: 'AI Ticket Support System',
                type: 'Python | FastAPI | MongoDB',
                year: '2025',
              },
              {
                slug: 'nexus-international-school',
                name: 'Nexus International School',
                type: 'ReactJS | Node.js',
                year: '2025',
              },
              { slug: 'connectuni', name: 'ConnectUni', type: 'NextJS | Node.js', year: '2025' },
              {
                slug: 'jay-green-care',
                name: 'Jay Green Care',
                type: 'UI/UX Design | Figma',
                year: '2025',
              },
            ].map(({ slug, name, type, year }) => (
              <a
                key={name}
                href={`/projects/${slug}`}
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-black/10 py-4 transition-colors hover:bg-black/[0.03] sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:px-2"
              >
                <span className="font-[family-name:var(--font-roboto)] text-base tracking-[-0.03em]">
                  {name}
                </span>
                <span className="col-start-1 font-[family-name:var(--font-roboto)] text-sm text-black/50 sm:col-start-auto">
                  {type}
                </span>
                <span className="row-span-2 self-center font-[family-name:var(--font-roboto)] text-sm text-black/50 sm:row-auto">
                  {year}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="pt-8">
          <a
            href="#projects"
            className="inline-flex rounded bg-black/[0.06] px-3 py-2 font-[family-name:var(--font-roboto)] text-sm transition-colors hover:bg-black/10"
          >
            All work
          </a>
        </div>
      </section>

      <section
        id="about"
        className="grid min-h-[100dvh] snap-start grid-cols-1 gap-10 px-4 py-10 sm:px-6 sm:py-16 md:grid-cols-2 lg:gap-16 lg:px-10"
        aria-labelledby="about-heading"
      >
        <div className="flex flex-col justify-between lg:py-1">
          <div>
            <p className="font-[family-name:var(--font-roboto)] text-sm text-black/50">About</p>
            <h2
              id="about-heading"
              className="mt-12 max-w-[570px] font-[family-name:var(--font-roboto)] text-[clamp(2rem,3vw,3rem)] font-light leading-[0.92] tracking-[-0.06em]"
            >
              I’m a{' '}
              <em className="font-[family-name:var(--font-editorial)] tracking-[-0.08em]">
                designer and developer
              </em>{' '}
              who enjoys turning ideas into thoughtful digital.
            </h2>
            <p className="mt-8 max-w-[490px] font-[family-name:var(--font-roboto)] text-base leading-relaxed text-black/55">
              My work sits at the intersection of design, development, and AI. With a background in
              computer engineering and experience building real-world web products, I focus on
              creating interfaces that are clear, purposeful, and built to work. I’m constantly
              exploring new technologies and ways to make digital experiences smarter, simpler, and
              more human.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <a
              href="#about"
              className="inline-flex rounded bg-black/[0.06] px-3 py-2 font-[family-name:var(--font-roboto)] text-sm transition-colors hover:bg-black/10"
            >
              About
            </a>
          </div>
        </div>
        <div className="grid min-h-[420px] grid-cols-2 gap-2 overflow-hidden">
          <div className="relative min-h-[420px]">
            <Image
              src="/images/about-portrait.jpg"
              alt="Sanskar Kc"
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 768px) 25vw, 50vw"
            />
          </div>

          <div className="relative min-h-[420px]">
            <Image
              src="/images/about-abstract.jpg"
              alt="Abstract design artwork"
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 768px) 25vw, 50vw"
            />
          </div>
        </div>{' '}
      </section>

      <section
        id="contact"
        className="snap-start bg-[#fcff35] px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-10"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-12 flex items-end justify-between gap-6 sm:mb-20">
            <div>
              <p className="font-[family-name:var(--font-roboto)] text-sm text-black/60">Contact</p>
              <h2
                id="contact-heading"
                className="mt-3 font-[family-name:var(--font-roboto)] text-[clamp(2.5rem,6vw,6rem)] font-light leading-[0.82] tracking-[-0.07em]"
              >
                Let&apos;s make something{' '}
                <em className="font-[family-name:var(--font-editorial)] tracking-[-0.09em]">
                  good.
                </em>
              </h2>
            </div>
            <p className="hidden max-w-[250px] font-[family-name:var(--font-roboto)] text-sm leading-relaxed text-black/65 sm:block">
              Have a project, idea, or question? Send a note and I&apos;ll get back to you soon.
            </p>
          </div>

          <form className="font-[family-name:var(--font-roboto)]">
            <div className="grid border border-black md:grid-cols-2">
              <label className="group flex min-h-36 flex-col justify-center border-b border-black px-5 py-6 md:border-b-0 md:border-r sm:px-8">
                <span className="mb-3 text-xs uppercase tracking-[0.08em] text-black/55">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-transparent text-lg outline-none placeholder:text-black/55"
                />
              </label>
              <label className="flex min-h-36 flex-col justify-center px-5 py-6 sm:px-8">
                <span className="mb-3 text-xs uppercase tracking-[0.08em] text-black/55">
                  Phone number
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+977 98 0000 0000"
                  className="w-full bg-transparent text-lg outline-none placeholder:text-black/55"
                />
              </label>
              <label className="flex min-h-44 flex-col justify-center border-t border-black px-5 py-6 md:col-span-2 sm:px-8">
                <span className="mb-3 text-xs uppercase tracking-[0.08em] text-black/55">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={2}
                  placeholder="Tell me a little about your project..."
                  className="w-full resize-none bg-transparent text-lg outline-none placeholder:text-black/55"
                />
              </label>
              <button
                type="submit"
                className="group flex min-h-28 items-center justify-between border-t border-black px-5 text-left text-lg transition-colors hover:bg-black hover:text-[#fcff35] md:col-span-2 sm:px-8"
              >
                Send message
                <span
                  className="text-2xl transition-transform group-hover:translate-x-2"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </button>
            </div>
            <div className="flex flex-col justify-between gap-4 pt-3 font-[family-name:var(--font-roboto)] text-xs uppercase leading-tight sm:flex-row">
              <p>Enter your email or phone number so I can reply.</p>
              <p className="max-w-[290px] sm:text-right">
                I&apos;ll only use your details to respond to your message.
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer className="flex min-h-[55dvh] snap-start flex-col justify-between bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="grid max-w-xl grid-cols-2 gap-x-10 gap-y-10 font-[family-name:var(--font-roboto)] text-sm sm:grid-cols-3">
          <div>
            <p className="mb-4 text-black/40">Links</p>
            <nav className="flex flex-col gap-1" aria-label="Footer links">
              <a href="#workflows" className="hover:opacity-50">
                Work
              </a>
              <a href="#about" className="hover:opacity-50">
                About
              </a>
              <a href="#contact" className="hover:opacity-50">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <p className="mb-4 text-black/40">Support</p>
            <nav className="flex flex-col gap-1">
              <a href="mailto:hello@sanskarkc.com" className="hover:opacity-50">
                Email me
              </a>
              <a href="#contact" className="hover:opacity-50">
                Start a project
              </a>
            </nav>
          </div>
          <div>
            <p className="mb-4 text-black/40">Follow</p>
            <nav className="flex flex-col gap-1">
              <a href="https://www.instagram.com/kcsanskar/" target="_blank" rel="noreferrer" className="hover:opacity-50">
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/sanskar-k-c-777a682a9/" target="_blank" rel="noreferrer" className="hover:opacity-50">
                LinkedIn
              </a>
              <a href="https://github.com/SansKc" target="_blank" rel="noreferrer" className="hover:opacity-50">
                GitHub
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-20 flex items-end justify-between font-[family-name:var(--font-roboto)] text-sm">
          <p>© 2026 Sanskar Kc</p>
          <a
            href="#home-heading"
            className="flex h-10 w-10 items-center justify-center rounded bg-black/[0.06] font-[family-name:var(--font-roboto)] text-sm transition-colors hover:bg-black/10"
          >
            SK
          </a>
        </div>
      </footer>
    </div>
  );
}
