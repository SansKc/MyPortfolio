import Link from 'next/link';
import { ProjectShowcase } from '@/components/project-showcase';
import { Navbar } from '@/components/navbar';

type Project = {
  name: string;
  discipline: string;
  year: string;
  accent: string;
  description: string;
  images: {
    overview?: string;
    interface?: string;
    system?: string;
  };
  labels?: {
    overview?: string;
    interface?: string;
    system?: string;
  };
};

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projects: Record<string, Project> = {
    'vinex-nepal': {
      name: 'Vinex Nepal',
      discipline: 'Ecommerce platform',
      year: '2026',
      accent: '#bfd6bd',
      description:
        'A full-stack e-commerce platform with product management, CMS, and integrated online payments.',
      images: {
        overview: '/images/projects/vinex/vinex-home.png',
        interface: '/images/projects/vinex/vinex-products.png',
        system: '/images/projects/vinex/vinex-cart.png',
      },
      labels: {
        overview: 'Home Page',
        interface: 'Product Listing',
        system: 'Cart & Checkout',
      },
    },
    'kishor-kayastha': {
      name: 'Kishor Kayastha',
      discipline: 'Digital portfolio',
      year: '2025',
      accent: '#d7caee',
      description:
        'A minimalist digital archive and interactive gallery designed to elevate the visual narrative of legendary Nepalese photographer Kishor Kayastha. Built with Next.js and Node.js for smooth performance and media optimization.',
      images: {
        overview: '/images/projects/kishorkayastha/kayastha-1.png',
        interface: '/images/projects/kishorkayastha/kayastha-2.png',
        system: '/images/projects/kishorkayastha/kayastha-3.png',
      },
      labels: {
        overview: 'Home Page',
        interface: 'Image Grid',
        system: 'Image Carousel',
      },
    },
    'ai-ticket-support-system': {
      name: 'AI Ticket Support System',
      discipline: 'AI product',
      year: '2025',
      accent: '#b8d8ea',
      description:
        'An AI-powered ticket management system built with FastAPI and MongoDB to streamline support and issue resolution.',
      images: {},
    },
    'nexus-international-school': {
      name: 'Nexus International School',
      discipline: 'School platform',
      year: '2025',
      accent: '#f4d595',
      description:
        'A modern school website designed to showcase academics, activities, and the school community.',
      images: {
        overview: '/images/projects/nexus/nexus-home.png',
        interface: '/images/projects/nexus/nexus-gallery.png',
        system: '/images/projects/nexus/nexus-career.png',
      },
      labels: {
        overview: 'Home Page',
        interface: 'Gallery Page',
        system: 'Career Page',
      },
    },
    connectuni: {
      name: 'ConnectUni',
      discipline: 'Consultancy platform',
      year: '2025',
      accent: '#f1c3c0',
      description:
        'A study-abroad consultancy platform built to help students explore universities, courses, and study opportunities.',
      images: {
        overview: '/images/projects/connectuni/connect-home.png',
        interface: '/images/projects/connectuni/connect-search.png',
        system: '/images/projects/connectuni/connect-login.png',
      },
      labels: {
        overview: 'Home Page',
        interface: 'Search & Filter',
        system: 'Login Page',
      },
    },
    'jay-green-care': {
      name: 'Jay Green Care',
      discipline: 'UI/UX design',
      year: '2025',
      accent: '#b9d7c2',
      description:
        'A modern UI/UX design for an Australian care service, focused on accessibility, trust, and a welcoming user experience.',
      images: {
        overview: '/images/projects/greencare/green-home.png',
        interface: '/images/projects/greencare/green-services.png',
        system: '/images/projects/greencare/green-arch.png',
      },
      labels: {
        overview: 'Home Page',
        interface: 'Services Page',
        system: 'Architecture',
      },
    },
  };
  const project = projects[slug] ?? {
    name: slug
      .split('-')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' '),
    discipline: 'Selected project',
    year: '2026',
    accent: '#f4d595',
    description:
      'A considered digital experience shaped around clarity, character, and the people who use it.',
    images: {},
  };

  return (
    <main className="min-h-[100dvh] bg-[#f6f6f5] text-[#161616] lg:flex">
      <Navbar />
      <section className="flex min-h-[42dvh] flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:min-h-dvh lg:w-1/2 lg:px-[clamp(2.5rem,8vw,10rem)] lg:py-[clamp(2.5rem,7vw,7rem)]">
        <Link
          href="/#projects"
          className="w-fit font-[family-name:var(--font-roboto)] text-sm transition-opacity hover:opacity-50"
        >
          ← All projects
        </Link>
        <div className="my-16 lg:my-0">
          <p className="font-[family-name:var(--font-roboto)] text-sm text-black/45">
            {project.discipline} · {project.year}
          </p>
          <h1 className="mt-3 w-full font-[family-name:var(--font-roboto)] text-[clamp(2.5rem,4.2vw,4.75rem)] font-light leading-[.86] tracking-[-.075em]">
            {project.name}
          </h1>
          <p className="mt-5 max-w-sm font-[family-name:var(--font-roboto)] text-lg leading-snug text-black/45">
            {project.description}
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href={`/projects/${slug}/case-study`}
            className="inline-flex items-center rounded bg-black/[0.06] px-3 py-2 font-[family-name:var(--font-roboto)] text-sm transition-colors hover:bg-black/10"
          >
            View project
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded bg-black/[0.06] px-3 py-2 font-[family-name:var(--font-roboto)] text-sm transition-colors hover:bg-black/10"
            aria-label="Discuss a project"
          >
            ↗
          </Link>
        </div>
      </section>
      <div id="showcase" className="lg:w-1/2">
        <ProjectShowcase
          projectName={project.name}
          accent={project.accent}
          images={project.images}
          labels={project.labels}
        />
      </div>
    </main>
  );
}
