"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Cctv,
  Cpu,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Server,
  ShieldCheck,
  Wrench,
  X,
  Building2,
  UserRound,
  BriefcaseBusiness,
  Users,
  Settings,
} from "lucide-react";

const PHONE = "22898010555";
const EMAIL = "novyra01it@gmail.com";

const navigation = [
  ["Accueil", "#accueil"],
  ["Services", "#services"],
  ["À propos", "#apropos"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

const services = [
  {
    number: "01",
    title: "Réseaux informatiques & câblage",
    icon: Network,
    images: [
      "/images/services/network-1.jpg",
      "/images/services/network-2.jpg",
      "/images/services/network-3.jpg",
      "/images/services/network-4.jpg",
    ],
    description:
      "Conception, installation et optimisation de vos infrastructures réseau.",
    details: [
      "Installation et configuration réseau LAN/WAN",
      "Câblage informatique et brassage RJ45",
      "Configuration de switches et routeurs",
      "Segmentation réseau et VLAN",
    ],
  },
  {
    number: "02",
    title: "Administration systèmes",
    icon: Server,
    images: [
      "/images/services/systems-1.jpg",
      "/images/services/systems-2.jpg",
      "/images/services/systems-3.jpg",
    ],
    description:
      "Administration et gestion de vos environnements informatiques.",
    details: [
      "Installation de serveurs Windows et Linux",
      "Gestion des utilisateurs et Active Directory",
      "Configuration DNS, DHCP et GPO",
      "Virtualisation et supervision",
    ],
  },
  {
    number: "03",
    title: "Cybersécurité",
    icon: ShieldCheck,
    images: [
      "/images/services/cybersecurity-1.jpg",
      "/images/services/cybersecurity-2.jpg",
      "/images/services/cybersecurity-3.jpg",
    ],
    description:
      "Protection et sécurisation de vos infrastructures informatiques.",
    details: [
      "Configuration de pare-feu",
      "Surveillance et analyse des événements",
      "Détection des menaces",
      "Audit et sécurisation des systèmes",
    ],
  },
  {
    number: "04",
    title: "Vidéosurveillance",
    icon: Cctv,
    images: [
      "/images/services/surveillance-1.jpg",
      "/images/services/surveillance-2.jpg",
      "/images/services/surveillance-3.jpg",
    ],
    description:
      "Installation et configuration de solutions de vidéosurveillance.",
    details: [
      "Installation de caméras IP et analogiques",
      "Configuration NVR et DVR",
      "Accès et visualisation à distance",
      "Maintenance des systèmes de surveillance",
    ],
  },
  {
    number: "05",
    title: "Maintenance informatique",
    icon: Wrench,
    images: [
      "/images/services/maintenance-1.jpg",
      "/images/services/maintenance-2.jpg",
      "/images/services/maintenance-3.jpg",
    ],
    description: "Maintenance préventive et corrective de vos équipements.",
    details: [
      "Diagnostic matériel et logiciel",
      "Installation et configuration des systèmes",
      "Optimisation des performances",
      "Maintenance des ordinateurs",
    ],
  },
  {
    number: "06",
    title: "Solutions informatiques",
    icon: Cpu,
    images: [
      "/images/services/solutions-1.jpg",
      "/images/services/solutions-2.jpg",
      "/images/services/solutions-3.jpg",
    ],
    description: "Accompagnement et mise en œuvre de solutions technologiques.",
    details: [
      "Conseil et accompagnement informatique",
      "Déploiement de solutions professionnelles",
      "Intégration des équipements",
      "Assistance et support technique",
    ],
  },
];

const reasons = [
  {
    icon: Settings,
    title: "Solutions personnalisées",
    description:
      "Nous étudions vos besoins pour proposer une solution adaptée à votre activité, à votre environnement et à votre budget.",
  },
  {
    icon: Cpu,
    title: "Approche technique",
    description:
      "Nous privilégions une approche structurée, fondée sur l'analyse, la planification et la mise en œuvre de solutions cohérentes.",
  },
  {
    icon: ShieldCheck,
    title: "Fiabilité & sécurité",
    description:
      "Nous accordons une attention particulière à la sécurité, à l'organisation et à la stabilité de vos équipements et infrastructures.",
  },
  {
    icon: Users,
    title: "Accompagnement",
    description:
      "Nous vous accompagnons dans la compréhension de vos solutions et vous apportons des conseils adaptés à vos projets.",
  },
];

const steps = [
  {
    number: "01",
    title: "Analyse du besoin",
    description:
      "Nous échangeons avec vous afin de comprendre votre besoin, votre environnement, vos contraintes et les objectifs de votre projet.",
  },
  {
    number: "02",
    title: "Conception de la solution",
    description:
      "Nous définissons une approche technique, les équipements nécessaires et les différentes étapes de réalisation.",
  },
  {
    number: "03",
    title: "Mise en œuvre",
    description:
      "Nous procédons à l'installation, la configuration ou la maintenance de la solution retenue.",
  },
  {
    number: "04",
    title: "Tests & validation",
    description:
      "Nous vérifions le fonctionnement, réalisons les tests nécessaires et vous présentons le résultat final.",
  },
];

const sectors = [
  {
    icon: Building2,
    title: "Entreprises & PME",
    description:
      "Infrastructure réseau, administration systèmes, sécurité, maintenance et solutions informatiques.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Entrepreneurs",
    description:
      "Accompagnement informatique, installation d'équipements et solutions adaptées à votre activité.",
  },
  {
    icon: UserRound,
    title: "Particuliers",
    description:
      "Installation réseau, vidéosurveillance, maintenance informatique et assistance technique.",
  },
  {
    icon: Users,
    title: "Associations & projets",
    description:
      "Accompagnement informatique, déploiement de solutions et support technique adapté.",
  },
];

const faqs = [
  {
    question: "Quels sont les services proposés par NOVYRA IT ?",
    answer:
      "NOVYRA IT intervient dans les réseaux et le câblage informatique, l'administration systèmes, la cybersécurité, la vidéosurveillance, la maintenance informatique et les solutions informatiques.",
  },
  {
    question: "À quels types de clients s'adressent vos services ?",
    answer:
      "Nos services s'adressent aux particuliers, entrepreneurs, professionnels, associations et entreprises, selon la nature du besoin et du projet.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Contactez-nous par WhatsApp, téléphone ou e-mail en décrivant votre besoin. Nous pourrons échanger sur votre projet et vous proposer une estimation adaptée.",
  },
  {
    question: "Proposez-vous des installations de vidéosurveillance ?",
    answer:
      "Oui. Nous proposons des solutions de vidéosurveillance comprenant l'installation de caméras IP ou analogiques, la configuration des enregistreurs et la mise en place de l'accès à distance selon les équipements.",
  },
  {
    question: "Quels types de maintenance informatique proposez-vous ?",
    answer:
      "Nous proposons du diagnostic, de l'entretien, du dépannage, l'installation de systèmes, l'optimisation des équipements et l'assistance informatique.",
  },
  {
    question: "Comment puis-je vous contacter ?",
    answer:
      "Vous pouvez nous contacter par WhatsApp, téléphone ou e-mail. Notre bouton de contact vous permet de nous envoyer directement un message.",
  },
];

function WhatsAppLink({
  children,
  message = "Bonjour NOVYRA IT, je souhaite obtenir des informations sur vos services.",
  className = "",
}: {
  children: ReactNode;
  message?: string;
  className?: string;
}) {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function Brand() {
  return (
    <a
      href="#accueil"
      aria-label="NOVYRA IT - Accueil"
      className="flex min-w-0 items-center gap-2 sm:gap-3"
    >
      <Image
        src="/images/logo.png"
        alt="Logo NOVYRA IT"
        width={52}
        height={52}
        priority
        className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
      />

      <span className="min-w-0">
        <span className="block whitespace-nowrap text-lg font-black tracking-wider sm:text-2xl">
          NOVYRA <span className="text-cyan-400">IT</span>
        </span>
        <span className="hidden text-[9px] tracking-wider text-gray-400 sm:block sm:text-[10px]">
          CONNECTER. ADMINISTRER. PROTÉGER.
        </span>
      </span>
    </a>
  );
}

function ServiceGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % images.length);
    }, 15000);

    return () => window.clearInterval(interval);
  }, [images.length]);

  const previousImage = () => {
    setCurrentIndex(
      (previous) => (previous - 1 + images.length) % images.length,
    );
  };

  const nextImage = () => {
    setCurrentIndex((previous) => (previous + 1) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="flex h-52 items-center justify-center bg-[#102b40] text-gray-400 sm:h-60 lg:h-64">
        <Network size={42} />
      </div>
    );
  }

  return (
    <div className="group/gallery relative h-52 overflow-hidden sm:h-60 lg:h-64">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={image} className="relative h-full min-w-full">
            <Image
              src={image}
              alt={`${title} - photo ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1928]/60 via-transparent to-transparent" />

      <span className="absolute left-4 top-4 z-10 rounded-lg border border-white/20 bg-[#07111f]/70 px-3 py-2 text-xs text-white backdrop-blur-md">
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(images.length).padStart(2, "0")}
      </span>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={previousImage}
            aria-label={`Photo précédente : ${title}`}
            className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#07111f]/70 text-white opacity-100 backdrop-blur-md transition hover:bg-cyan-400 hover:text-[#07111f] sm:opacity-0 sm:group-hover/gallery:opacity-100"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label={`Photo suivante : ${title}`}
            className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#07111f]/70 text-white opacity-100 backdrop-blur-md transition hover:bg-cyan-400 hover:text-[#07111f] sm:opacity-0 sm:group-hover/gallery:opacity-100"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Afficher la photo ${index + 1} de ${title}`}
                aria-current={currentIndex === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-7 bg-cyan-400"
                    : "w-2 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#07111f] text-white">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111f]/95 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <Brand />

          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap text-sm text-gray-300 transition hover:text-cyan-400"
              >
                {label}
              </a>
            ))}
          </nav>

          <WhatsAppLink className="hidden whitespace-nowrap rounded-lg bg-cyan-400 px-4 py-3 text-sm font-bold text-[#07111f] transition hover:bg-cyan-300 lg:inline-flex">
            Demander un devis <ArrowUpRight size={17} className="ml-2" />
          </WhatsAppLink>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#07111f] px-4 py-5 shadow-xl sm:px-6 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-4">
              {navigation.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-lg py-2 text-gray-300 transition hover:text-cyan-400"
                >
                  {label}
                </a>
              ))}

              <WhatsAppLink className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-center font-bold text-[#07111f]">
                <Phone size={17} />
                Demander un devis
              </WhatsAppLink>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="accueil"
        className="relative flex min-h-[720px] scroll-mt-20 items-center bg-cover bg-center px-4 pb-16 pt-32 sm:min-h-[780px] sm:px-6 sm:pt-36 lg:min-h-[850px] lg:px-8"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#07111f]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/75 via-[#07111f]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/70 via-transparent to-[#07111f]/10" />
        <div className="absolute right-10 top-1/3 h-60 w-60 rounded-full bg-cyan-400/10 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-cyan-400/30 bg-[#07111f]/50 px-3 py-2 backdrop-blur-md sm:mb-8 sm:px-4">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-xs text-cyan-300 sm:text-sm">
                Solutions informatiques & infrastructures
              </span>
            </div>

            <h1 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Connecter.
              <br />
              Administrer.
              <br />
              <span className="text-cyan-400">Protéger.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl">
              NOVYRA IT accompagne particuliers, professionnels et entreprises
              dans la conception, l'installation, la gestion et la sécurisation
              de leurs infrastructures informatiques.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 text-center font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-cyan-300 sm:w-auto sm:px-7"
              >
                Découvrir nos services <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-center font-semibold backdrop-blur-md transition hover:border-cyan-400 hover:text-cyan-400 sm:w-auto sm:px-7"
              >
                Parlons de votre projet
              </a>
            </div>
          </div>

          <div className="mt-16 grid max-w-4xl grid-cols-2 gap-x-4 gap-y-7 border-t border-white/15 pt-7 sm:mt-20 sm:grid-cols-4 sm:gap-8 sm:pt-8">
            <div>
              <p className="text-2xl font-black text-cyan-400 sm:text-3xl">
                06
              </p>
              <p className="mt-2 text-xs text-gray-300 sm:text-sm">
                Domaines d'expertise
              </p>
            </div>
            <div>
              <p className="text-2xl font-black sm:text-3xl">IT</p>
              <p className="mt-2 text-xs text-gray-300 sm:text-sm">
                Solutions technologiques
              </p>
            </div>
            <div>
              <p className="text-2xl font-black sm:text-3xl">360°</p>
              <p className="mt-2 text-xs text-gray-300 sm:text-sm">
                Approche informatique
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-cyan-400 sm:text-3xl">
                Lomé
              </p>
              <p className="mt-2 text-xs text-gray-300 sm:text-sm">Togo</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
              Nos domaines d'expertise
            </p>
            <h2 className="mt-4 text-3xl font-black sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
              Des solutions IT.
              <span className="text-gray-500"> Un partenaire.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
              De l'installation de vos infrastructures à leur maintenance, en
              passant par l'administration systèmes et la sécurité de vos
              équipements, NOVYRA IT vous accompagne dans vos projets
              technologiques.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3">
            {services.map((service) => {
              const ServiceIcon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1928] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  <div className="relative">
                    <ServiceGallery
                      images={service.images}
                      title={service.title}
                    />
                    <span className="absolute left-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-[#07111f]/80 text-cyan-400 backdrop-blur-md">
                      <ServiceIcon size={19} />
                    </span>
                  </div>

                  <div className="px-5 pb-6 sm:px-6 sm:pb-7">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-bold transition group-hover:text-cyan-400 sm:text-xl">
                        {service.title}
                      </h3>
                      <span className="text-xs font-bold text-gray-500">
                        {service.number}
                      </span>
                    </div>

                    <p className="mt-3 leading-7 text-gray-400 sm:mt-4">
                      {service.description}
                    </p>

                    <div className="mt-5 border-t border-white/10 pt-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                        Nos prestations
                      </p>
                      <ul className="mt-4 space-y-3">
                        {service.details.map((detail, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                          >
                            <Check
                              size={16}
                              className="mt-1 shrink-0 text-cyan-400"
                            />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <WhatsAppLink
                      message={`Bonjour NOVYRA IT, je souhaite obtenir des informations concernant le service : ${service.title}.`}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 transition hover:gap-3"
                    >
                      Demander ce service <ArrowUpRight size={17} />
                    </WhatsAppLink>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="apropos"
        className="scroll-mt-20 border-y border-white/5 bg-[#0b1928] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative min-h-[350px] overflow-hidden rounded-3xl border border-white/10 sm:min-h-[450px] lg:min-h-[550px]">
            <Image
              src="/images/about.jpg"
              alt="Présentation de NOVYRA IT"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/90 via-transparent to-[#07111f]/20" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#07111f]/70 p-5 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
              <p className="text-sm text-cyan-400">NOVYRA IT</p>
              <p className="mt-2 text-xl font-bold sm:text-2xl">
                La technologie au service de vos ambitions.
              </p>
              <p className="mt-3 text-sm text-gray-300 sm:text-base">
                Connecter. Administrer. Protéger.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
              À propos de NOVYRA IT
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
              Votre partenaire pour un environnement informatique fiable.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-gray-400 sm:mt-7 sm:space-y-5 sm:text-lg sm:leading-8">
              <p>
                NOVYRA IT est une initiative spécialisée dans les services
                informatiques, les infrastructures réseau, l'administration
                systèmes et la sécurité informatique.
              </p>
              <p>
                Notre objectif est de proposer des solutions technologiques
                adaptées aux réalités des particuliers, des professionnels et
                des entreprises, en mettant l'accent sur la fiabilité,
                l'organisation, l'accessibilité et la qualité du service.
              </p>
              <p>
                Nous souhaitons accompagner nos clients dans leurs projets
                informatiques, qu'il s'agisse de mettre en place une
                infrastructure réseau, de sécuriser des équipements, d'installer
                un système de vidéosurveillance ou d'entretenir un ordinateur.
              </p>
              <p>
                Notre approche repose sur l'écoute, l'analyse du besoin, la
                recherche de solutions adaptées et un accompagnement technique à
                chaque étape du projet.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-9 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-[#07111f] p-5">
                <p className="font-bold text-cyan-400">Notre mission</p>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Mettre la technologie au service de vos besoins grâce à des
                  solutions informatiques fiables et accessibles.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#07111f] p-5">
                <p className="font-bold text-cyan-400">Notre vision</p>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Contribuer à un environnement numérique mieux connecté,
                  administré et sécurisé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOVYRA */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
              Nos engagements
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
              Pourquoi choisir NOVYRA IT ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400 sm:mt-6 sm:leading-8">
              Nous mettons l'accent sur la qualité, la compréhension de vos
              besoins et la mise en place de solutions adaptées à votre
              environnement informatique.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article
                  key={index}
                  className="rounded-2xl border border-white/10 bg-[#0b1928] p-6 transition hover:border-cyan-400/30 sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                    <Icon size={25} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold sm:mt-6 sm:text-xl">
                    {reason.title}
                  </h3>
                  <p className="mt-4 leading-7 text-gray-400">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/5 bg-[#0b1928] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
              Notre méthode
            </p>
            <h2 className="mt-4 text-3xl font-black sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
              Du besoin à la solution.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
              Nous privilégions une démarche structurée afin de comprendre vos
              attentes, planifier les interventions, réaliser le projet et
              vérifier les résultats.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-white/10 bg-[#07111f] p-6 transition hover:border-cyan-400/30 sm:p-7"
              >
                <p className="text-5xl font-black text-cyan-400/30">
                  {step.number}
                </p>
                <h3 className="mt-5 text-lg font-bold sm:mt-6 sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
              Nos clients
            </p>
            <h2 className="mt-4 text-3xl font-black sm:mt-5 sm:text-4xl md:text-5xl">
              Des solutions pour différents environnements.
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
              Les besoins informatiques varient selon les activités. Nous
              adaptons nos prestations aux réalités et aux objectifs de chaque
              client.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;

              return (
                <article
                  key={index}
                  className="rounded-2xl border border-white/10 bg-[#0b1928] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                    <Icon size={25} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold sm:mt-6 sm:text-xl">
                    {sector.title}
                  </h3>
                  <p className="mt-4 leading-7 text-gray-400">
                    {sector.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-20 border-y border-white/5 bg-[#0b1928] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-black sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
              Des questions ?
              <br />
              <span className="text-gray-500">Nous avons des réponses.</span>
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-gray-400 sm:mt-6 sm:leading-8">
              Découvrez les réponses aux questions les plus fréquentes
              concernant nos services, nos prestations et la manière de démarrer
              votre projet avec NOVYRA IT.
            </p>

            <WhatsAppLink
              className="mt-7 inline-flex items-center gap-2 text-left text-cyan-400 transition hover:text-cyan-300 sm:mt-8"
              message="Bonjour NOVYRA IT, j'ai une question concernant vos services."
            >
              Vous avez une autre question ? Contactez-nous{" "}
              <ArrowUpRight size={17} />
            </WhatsAppLink>
          </div>

          <div className="min-w-0 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = faqOpen === index;

              return (
                <article
                  key={index}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#07111f]"
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left sm:gap-5 sm:p-6"
                  >
                    <span className="text-sm font-bold text-white sm:text-base">
                      {faq.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 text-cyan-400">
                      {isOpen ? <X size={17} /> : <ArrowRight size={17} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                      <div className="border-t border-white/10 pt-4 text-sm leading-7 text-gray-400 sm:pt-5 sm:text-base">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#102b40] to-[#07111f] p-6 sm:p-10 md:p-14 lg:p-16">
            <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
                Parlons de votre projet
              </p>
              <h2 className="mt-4 text-3xl font-black sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
                Un projet informatique ?
                <br />
                <span className="text-cyan-400">
                  Construisons votre solution.
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
                Besoin d'une installation réseau, d'une solution de
                vidéosurveillance, d'une maintenance ou d'un accompagnement
                informatique ? Contactez-nous pour échanger sur votre projet.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <WhatsAppLink
                  message="Bonjour NOVYRA IT, je souhaite discuter de mon projet et obtenir des informations sur vos services."
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 text-center font-bold text-[#07111f] transition hover:bg-cyan-300 sm:w-auto sm:px-7"
                >
                  <Phone size={18} />
                  Contacter sur WhatsApp
                  <ArrowUpRight size={17} />
                </WhatsAppLink>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-4 text-center font-semibold transition hover:border-cyan-400 hover:text-cyan-400 sm:w-auto sm:px-7"
                >
                  <Mail size={18} />
                  Envoyer un e-mail
                </a>
              </div>

              <div className="mt-10 grid gap-6 border-t border-white/10 pt-7 sm:mt-14 sm:grid-cols-2 sm:gap-8 sm:pt-9 lg:grid-cols-3">
                <div>
                  <p className="flex items-center gap-2 text-sm text-gray-500">
                    <Phone size={16} className="text-cyan-400" />
                    Téléphone / WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${PHONE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-semibold transition hover:text-cyan-400"
                  >
                    +228 98 01 05 55
                  </a>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-sm text-gray-500">
                    <Mail size={16} className="text-cyan-400" />
                    E-mail
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-2 inline-block break-all font-semibold transition hover:text-cyan-400"
                  >
                    {EMAIL}
                  </a>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={16} className="text-cyan-400" />
                    Localisation
                  </p>
                  <p className="mt-2 font-semibold">Lomé, Togo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050d17] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            <div className="flex flex-col items-center text-center lg:col-span-2">
              <Brand />

              <p className="mt-5 max-w-lg text-sm leading-7 text-gray-400">
                Solutions informatiques, infrastructures réseau, administration
                systèmes, cybersécurité et maintenance informatique.
              </p>

              <p className="mt-5 text-sm font-semibold tracking-wide text-cyan-400">
                Connecter. Administrer. Protéger.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg font-bold text-white">Nous contacter</h3>

              <div className="mt-6 flex flex-col items-center gap-5 text-sm text-gray-400">
                <a
                  href={`https://wa.me/${PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition hover:text-cyan-400"
                >
                  <Phone size={16} />
                  WhatsApp : +228 98 01 05 55
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 break-all transition hover:text-cyan-400"
                >
                  <Mail size={16} />
                  {EMAIL}
                </a>

                <p className="flex items-center gap-2">
                  <MapPin size={16} />
                  Lomé, Togo
                </p>
              </div>
            </div>
          </div>

          
          <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-7 text-center">
            <p className="text-xs text-gray-500 sm:text-sm">
              © 2026 NOVYRA IT. Tous droits réservés.
            </p>
            <p className="text-xs font-medium tracking-wide text-gray-400 sm:text-sm">
              Connecter. Administrer. Protéger.
            </p>
          </div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={`https://wa.me/${PHONE}?text=${encodeURIComponent(
          "Bonjour NOVYRA IT, je souhaite obtenir des informations.",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter NOVYRA IT sur WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400 text-[#07111f] shadow-xl shadow-cyan-900/30 transition hover:scale-110 hover:bg-cyan-300 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        <Phone size={23} />
      </a>
    </main>
  );
}
