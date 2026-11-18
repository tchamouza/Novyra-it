"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";

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
    title: "Réseaux & câblage",
    image: "/images/services/network.jpg",
    description:
      "Conception, installation et organisation des infrastructures réseau pour les particuliers et les entreprises.",
    details: [
      "Installation et câblage Ethernet RJ45",
      "Installation de prises réseau",
      "Configuration de switchs et routeurs",
      "Organisation de baies et panneaux de brassage",
      "Configuration de réseaux LAN et Wi-Fi",
      "Extension et optimisation des réseaux existants",
    ],
  },
  {
    number: "02",
    title: "Administration systèmes",
    image: "/images/services/systems.jpg",
    description:
      "Déploiement, configuration et administration des systèmes informatiques et environnements serveurs.",
    details: [
      "Installation Windows et Linux",
      "Configuration Windows Server",
      "Active Directory et gestion des utilisateurs",
      "DNS, DHCP et stratégies de groupe",
      "Virtualisation VMware et Hyper-V",
      "Administration et maintenance des serveurs",
    ],
  },
  {
    number: "03",
    title: "Cybersécurité",
    image: "/images/services/cybersecurity.jpg",
    description:
      "Amélioration de la sécurité de vos systèmes, réseaux, équipements et données informatiques.",
    details: [
      "Configuration de pare-feu",
      "Sécurisation des réseaux informatiques",
      "Gestion des accès et permissions",
      "Surveillance des infrastructures",
      "Analyse de configuration de sécurité",
      "Sensibilisation aux bonnes pratiques",
    ],
  },
  {
    number: "04",
    title: "Vidéosurveillance",
    image: "/images/services/surveillance.jpg",
    description:
      "Installation et configuration de solutions de surveillance pour protéger vos locaux et vos biens.",
    details: [
      "Installation de caméras IP",
      "Installation de caméras analogiques",
      "Configuration DVR, NVR et XVR",
      "Visualisation à distance",
      "Installation et organisation du câblage",
      "Maintenance des équipements de surveillance",
    ],
  },
  {
    number: "05",
    title: "Maintenance informatique",
    image: "/images/services/maintenance.jpg",
    description:
      "Diagnostic, entretien, dépannage et optimisation de vos équipements informatiques.",
    details: [
      "Diagnostic de panne informatique",
      "Maintenance matérielle et logicielle",
      "Installation de systèmes d'exploitation",
      "Optimisation des ordinateurs",
      "Installation et configuration de logiciels",
      "Assistance et conseils techniques",
    ],
  },
  {
    number: "06",
    title: "Solutions informatiques",
    image: "/images/services/solutions.jpg",
    description:
      "Accompagnement technique et mise en place de solutions informatiques adaptées à vos besoins.",
    details: [
      "Virtualisation des environnements informatiques",
      "Déploiement de solutions techniques",
      "Conseil en équipements informatiques",
      "Assistance aux projets IT",
      "Configuration de logiciels et outils",
      "Accompagnement à la transformation numérique",
    ],
  },
];

const reasons = [
  {
    icon: "◈",
    title: "Solutions personnalisées",
    description:
      "Nous étudions vos besoins pour proposer une solution adaptée à votre activité, à votre environnement et à votre budget.",
  },
  {
    icon: "⌘",
    title: "Approche technique",
    description:
      "Nous privilégions une approche structurée, fondée sur l'analyse, la planification et la mise en œuvre de solutions cohérentes.",
  },
  {
    icon: "⬡",
    title: "Fiabilité & sécurité",
    description:
      "Nous accordons une attention particulière à la sécurité, à l'organisation et à la stabilité de vos équipements et infrastructures.",
  },
  {
    icon: "↗",
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
    title: "Entreprises & PME",
    icon: "▥",
    description:
      "Infrastructure réseau, administration systèmes, sécurité, maintenance et solutions informatiques.",
  },
  {
    title: "Entrepreneurs",
    icon: "◫",
    description:
      "Accompagnement informatique, installation d'équipements et solutions adaptées à votre activité.",
  },
  {
    title: "Particuliers",
    icon: "⌂",
    description:
      "Installation réseau, vidéosurveillance, maintenance informatique et assistance technique.",
  },
  {
    title: "Associations & projets",
    icon: "◇",
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
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`}
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
            Demander un devis ↗
          </WhatsAppLink>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-2xl lg:hidden"
          >
            {menuOpen ? "×" : "☰"}
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

              <WhatsAppLink className="mt-2 rounded-xl bg-cyan-400 px-5 py-3 text-center font-bold text-[#07111f]">
                Demander un devis ↗
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
        <div className="absolute inset-0 bg-[#07111f]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/80 to-[#07111f]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-[#07111f]/30" />
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
                className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-400 px-6 py-4 text-center font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-cyan-300 sm:w-auto sm:px-7"
              >
                Découvrir nos services →
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
              <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                Domaines d'expertise
              </p>
            </div>
            <div>
              <p className="text-2xl font-black sm:text-3xl">IT</p>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                Solutions technologiques
              </p>
            </div>
            <div>
              <p className="text-2xl font-black sm:text-3xl">360°</p>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                Approche informatique
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-cyan-400 sm:text-3xl">
                Lomé
              </p>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm">Togo</p>
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
            {services.map((service) => (
              <article
                key={service.number}
                className="group min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1928] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="relative h-52 overflow-hidden sm:h-60 lg:h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1928] via-[#0b1928]/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-lg border border-white/20 bg-[#07111f]/70 px-3 py-2 text-xs backdrop-blur-md sm:left-5 sm:top-5">
                    {service.number}
                  </span>
                </div>

                <div className="px-5 pb-6 sm:px-6 sm:pb-7">
                  <h3 className="text-lg font-bold transition group-hover:text-cyan-400 sm:text-xl">
                    {service.title}
                  </h3>
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
                          <span className="mt-0.5 shrink-0 text-cyan-400">
                            ↗
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <WhatsAppLink
                    message={`Bonjour NOVYRA IT, je souhaite obtenir des informations concernant le service : ${service.title}.`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 transition hover:gap-3"
                  >
                    Demander ce service →
                  </WhatsAppLink>
                </div>
              </article>
            ))}
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
            {reasons.map((reason, index) => (
              <article
                key={index}
                className="rounded-2xl border border-white/10 bg-[#0b1928] p-6 transition hover:border-cyan-400/30 sm:p-7"
              >
                <div className="text-4xl text-cyan-400">{reason.icon}</div>
                <h3 className="mt-5 text-lg font-bold sm:mt-6 sm:text-xl">
                  {reason.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {reason.description}
                </p>
              </article>
            ))}
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
            {sectors.map((sector, index) => (
              <article
                key={index}
                className="rounded-2xl border border-white/10 bg-[#0b1928] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 sm:p-7"
              >
                <div className="text-4xl text-cyan-400">{sector.icon}</div>
                <h3 className="mt-5 text-lg font-bold sm:mt-6 sm:text-xl">
                  {sector.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {sector.description}
                </p>
              </article>
            ))}
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
              className="mt-7 inline-flex text-left text-cyan-400 transition hover:text-cyan-300 sm:mt-8"
              message="Bonjour NOVYRA IT, j'ai une question concernant vos services."
            >
              Vous avez une autre question ? Contactez-nous ↗
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
                      {isOpen ? "−" : "+"}
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
                  className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-400 px-6 py-4 text-center font-bold text-[#07111f] transition hover:bg-cyan-300 sm:w-auto sm:px-7"
                >
                  Contacter sur WhatsApp ↗
                </WhatsAppLink>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 px-6 py-4 text-center font-semibold transition hover:border-cyan-400 hover:text-cyan-400 sm:w-auto sm:px-7"
                >
                  Envoyer un e-mail
                </a>
              </div>

              <div className="mt-10 grid gap-6 border-t border-white/10 pt-7 sm:mt-14 sm:grid-cols-2 sm:gap-8 sm:pt-9 lg:grid-cols-3">
                <div>
                  <p className="text-sm text-gray-500">Téléphone / WhatsApp</p>
                  <a
                    href={`https://wa.me/${PHONE}`}
                    className="mt-2 inline-block font-semibold transition hover:text-cyan-400"
                  >
                    +228 98 01 05 55
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500">E-mail</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-2 inline-block break-all font-semibold transition hover:text-cyan-400"
                  >
                    {EMAIL}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Localisation</p>
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
          {/* Contenu principal */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {/* Présentation */}
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

            {/* Contact */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg font-bold text-white">Nous contacter</h3>

              <div className="mt-6 flex flex-col items-center gap-5 text-sm text-gray-400">
                <a
                  href={`https://wa.me/${PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-cyan-400"
                >
                  WhatsApp : +228 98 01 05 55
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all transition hover:text-cyan-400"
                >
                  {EMAIL}
                </a>

                <p>Lomé, Togo</p>
              </div>
            </div>
          </div>

          {/* Bas du footer */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-7 text-center">
            <p className="text-xs text-gray-500 sm:text-sm">
               {new Date().getFullYear()} NOVYRA IT. Tous droits réservés.
            </p>

            <p className="text-xs font-medium tracking-wide text-gray-400 sm:text-sm">
              Connecter. Administrer. Protéger.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Bonjour NOVYRA IT, je souhaite obtenir des informations.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter NOVYRA IT sur WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400 text-xl text-[#07111f] shadow-xl shadow-cyan-900/30 transition hover:scale-110 hover:bg-cyan-300 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 sm:text-2xl"
      >
        ☎
      </a>
    </main>
  );
}
