import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

type CaseStudySection = {
  title: string;
  label?: string;
  copy: string;
  image?: string;
};

type CaseStudyContent = {
  eyebrow: string;
  subtitle: string;
  cta: string;
  sections: CaseStudySection[];
};

const projectNames: Record<string, string> = {
  'vinex-nepal': 'Vinex Nepal',
  'kishor-kayastha': 'Kishor Kayastha',
  'ai-ticket-support-system': 'AI Ticket Support System',
  'nexus-international-school': 'Nexus International School',
  connectuni: 'ConnectUni',
  'jay-green-care': 'Jay Green Care',
};

const caseStudies: Record<string, CaseStudyContent> = {
  'vinex-nepal': {
    eyebrow: 'Ecommerce platform',
    subtitle: 'Next.js · Node.js · TypeScript · CMS · REST API',
    cta: 'Explore the project',
    sections: [
      {
        title: 'Mandate',
        label: 'Project Brief',
        copy: 'Developed a complete e-commerce platform for managing products, customers, orders, and online sales through a streamlined web experience and content management system.',
      },
      {
        title: 'Challenge',
        copy: 'The main challenge was building a reliable platform that could handle product management, dynamic content, orders, and payment processing while keeping the experience fast and intuitive.',
      },
      {
        title: 'Solution',
        copy: 'Built the frontend with Next.js and backend with Node.js, integrating a CMS for flexible content management and payment systems for secure online transactions.',
      },
    ],
  },
  'kishor-kayastha': {
    eyebrow: 'Digital archive',
    subtitle: 'An immersive home for visual storytelling',
    cta: 'Explore the archive',
    sections: [
      {
        title: 'Mandate',
        copy: 'Kishor Kayastha needed a refined, high-performance digital presence to catalog decades of iconic fine art and visual storytelling. The objective was to design an immersive visual experience where the photography takes center stage while maintaining seamless user navigation across exhibitions, press, and personal archives.',
      },
      {
        title: 'Challenge',
        copy: 'Serving high-resolution visual imagery without compromising loading speeds or visual layout stability presented a core technical hurdle. The platform required a balance between fluid, desktop-grade transitions, mobile responsiveness, and an intuitive content organization system tailored for gallerists, media, and art enthusiasts.',
      },
      {
        title: 'Solution',
        copy: 'Engineered using Next.js for optimized server-side rendering and asset management, supported by a scalable Node.js backend. The platform delivers instant page transitions, dynamic gallery views, and an interactive image flow. The result is an uncluttered, high-craft web application that elevates the clients global digital presence and artwork.',
      },
    ],
  },
  'ai-ticket-support-system': {
    eyebrow: 'AI product',
    subtitle:
      'FastAPI · Python · MongoDB · PyMongo · JWT Authentication · OAuth2 · Pydantic · LangChain · Google Gemini API · REST API',
    cta: 'Explore the system',
    sections: [
      {
        title: 'Mandate',
        label: 'Project Overview',
        copy: 'The system was designed to provide a centralized platform for managing support requests. Users can create tickets with categories and priorities, while administrators can monitor, update, and resolve issues through authenticated APIs.',
      },
      {
        title: 'Challenge',
        copy: 'The main challenges involved designing a clean ticket workflow, implementing secure authentication and admin-level access, and integrating AI capabilities without disrupting the existing ticket management system.',
      },
      {
        title: 'Solution',
        copy: 'I built the backend using FastAPI with modular routers and schema validation, implemented JWT-based authentication and role-based authorization, and structured MongoDB collections to support ticket data and AI-assisted interactions. This created a scalable foundation that can be extended with more advanced AI support features.',
      },
    ],
  },
  'nexus-international-school': {
    eyebrow: 'School platform',
    subtitle: 'React · JavaScript · Tailwind CSS · Node.js',
    cta: 'Explore the platform',
    sections: [
      {
        title: 'Mandate',
        label: 'Project Overview',
        copy: 'A responsive website built to provide students, parents, and visitors with easy access to information about the school, its programs, facilities, and activities.',
      },
      {
        title: 'Challenge',
        copy: 'The main challenge was organizing a large amount of school information into a clear, engaging interface while maintaining a consistent experience across different screen sizes.',
      },
      {
        title: 'Solution',
        copy: 'Developed reusable UI components and structured the website into intuitive sections, creating a responsive and user-friendly platform that makes school information easy to discover.',
      },
    ],
  },
  connectuni: {
    eyebrow: 'Student platform',
    subtitle: 'React · Next.js · Node.js · TypeScript · JavaScript · REST APIs',
    cta: 'Explore the platform',
    sections: [
      {
        title: 'Project Overview',
        copy: 'Contributed to the development and maintenance of ConnectUni’s web platform, building responsive interfaces and reusable components for university, course, and student-focused features.',
      },
      {
        title: 'Challenge',
        copy: 'As the platform grew, improving performance, maintainability, and SEO became increasingly important while keeping the existing features and user experience intact.',
      },
      {
        title: 'Solution',
        copy: 'Helped migrate the frontend from React to Next.js while continuing to work with the Node.js backend, improving the project structure and enabling better SEO and scalability.',
      },
    ],
  },
  'jay-green-care': {
    eyebrow: 'UI/UX design',
    subtitle: 'Figma · UI Design · UX Design · Responsive Design · Prototyping',
    cta: 'Explore the experience',
    sections: [
      {
        title: 'Mandate',
        label: 'Project Overview',
        copy: 'Designed a clean and approachable digital experience for Jay Green Care, presenting its services and information in a way that feels trustworthy, accessible, and easy to navigate.',
      },
      {
        title: 'Challenge',
        copy: 'The key challenge was balancing a professional healthcare-oriented appearance with a warm and approachable visual experience for users from different backgrounds.',
      },
      {
        title: 'Solution',
        copy: 'Developed a structured interface with clear navigation, accessible layouts, consistent visual elements, and responsive designs to create a simple and engaging user experience across devices.',
      },
    ],
  },
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projectName =
    projectNames[slug] ??
    slug
      .split('-')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');

  const fallbackSections: CaseStudySection[] = [
    {
      title: 'Mandate',
      copy: `${projectName} needed a clear, useful digital experience that makes its most important information easy to find and use.`,
    },
    {
      title: 'Challenge',
      copy: 'The challenge was bringing a broad set of content and needs into a focused structure without losing the character of the project.',
    },
    {
      title: 'Solution',
      copy: 'The result is a considered system with a simpler path through the experience, designed to remain clear as the project grows.',
    },
  ];
  const content = caseStudies[slug] ?? {
    eyebrow: 'Selected project',
    subtitle: 'The thinking behind the work',
    cta: 'Explore the project',
    sections: fallbackSections,
  };

  return (
    <main className="min-h-[100dvh] bg-[#f6f6f5] text-[#161616] lg:grid lg:h-[100dvh] lg:grid-cols-2 lg:overflow-hidden">
      <Navbar />
      <section className="flex min-h-[52dvh] flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:min-h-0 lg:px-[clamp(2.5rem,8vw,10rem)] lg:py-[clamp(2.5rem,7vw,7rem)]">
        <Link
          href={`/projects/${slug}`}
          className="w-fit font-[family-name:var(--font-roboto)] text-sm transition-opacity hover:opacity-50"
        >
          ← Project overview
        </Link>
        <div className="my-16 lg:my-0">
          <p className="font-[family-name:var(--font-roboto)] text-sm text-black/45">
            {content.eyebrow}
          </p>
          <h1 className="mt-3 w-full font-[family-name:var(--font-roboto)] text-[clamp(2.5rem,4.2vw,4.75rem)] font-light leading-[.86] tracking-[-.075em]">
            {projectName}
          </h1>
          <p className="mt-4 font-[family-name:var(--font-roboto)] text-[clamp(1.2rem,1.9vw,2rem)] font-light leading-none tracking-[-.05em] text-black/35">
            {content.subtitle}
          </p>
        </div>
        <a
          href="#mandate"
          className="inline-flex w-fit items-center rounded bg-black/[0.06] px-3 py-2 font-[family-name:var(--font-roboto)] text-sm transition-colors hover:bg-black/10"
        >
          {content.cta} ↗
        </a>
      </section>

      <section className="grid gap-6 px-4 pb-10 sm:px-6 sm:pb-14 lg:mt-24 lg:h-[calc(100dvh-6rem)] lg:overflow-y-auto lg:px-10 lg:py-6">
        {content.sections.map((section, index) => (
          <article
            key={section.title}
            id={index === 0 ? 'mandate' : undefined}
            className="flex min-h-[min(72dvh,760px)] flex-col rounded-[2rem] bg-white px-7 py-9 sm:px-10 sm:py-12"
          >
            <h2 className="font-[family-name:var(--font-roboto)] text-lg tracking-[-.04em]">
              {section.label ?? section.title}
            </h2>
            <div className="relative mt-8 min-h-48 flex-1 overflow-hidden rounded-xl bg-[#f6f6f5]">
              {section.image && (
                <Image
                  src={section.image}
                  alt={`${projectName} ${section.title}`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 44vw, 90vw"
                />
              )}
            </div>
            <p className="mt-10 w-full break-words font-[family-name:var(--font-roboto)] text-[clamp(1.25rem,1.8vw,2rem)] leading-[1.08] tracking-[-.05em]">
              {section.copy}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
