
import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Facebook,
  Instagram,
  Menu,
  Music2,
  Play,
  X,
} from "lucide-react";

const assets = {
  logo: "/assets/kaysleem-logo.png",
  portrait1: "/assets/kaysleem-portrait-1.jpg",
  portrait2: "/assets/kaysleem-portrait-2.jpg",
  portrait3: "/assets/kaysleem-portrait-3.jpg",
  fullBody: "/assets/kaysleem-full-body.jpg",
  epk: "/assets/kaysleem-epk.pdf",
};

const images = {
  hero: assets.portrait1,
  stage: assets.fullBody,
  texture: assets.portrait2,
};

const nav = ["About", "Sound", "Journey", "Connect"];

const releases = [
  {
    title: "Go Hard",
    year: "2026",
    featured: true,
    apple: "https://music.apple.com/ng/album/go-hard-single/1892065802",
    deezer: "https://link.deezer.com/s/34CwA4XAlih0CcII99syn",
  },
  {
    title: "Nwanyioma",
    year: "2026",
    featured: false,
    apple: "https://music.apple.com/ng/album/nwanyioma-single/1884628376",
    deezer: "https://link.deezer.com/s/34CwzjZF2WmzqZYETRVBg",
  },
  {
    title: "Dance",
    year: "2025",
    featured: false,
    apple: "https://music.apple.com/ng/album/dance-single/1848318770",
    deezer: "https://link.deezer.com/s/34CwAlHswwzvgO5gkZeiw",
  },
];

function App() {
  const [menu, setMenu] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenu(false);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const whatsappMessage = `Hello Kaysleem,

My name is ${name}.
Email: ${email}

Enquiry:
${message}`;

    const whatsappUrl = `https://wa.me/2348139354358?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
  };

  return (
    <main
      id="top"
      className="noise min-h-screen w-full min-w-0 overflow-x-clip bg-[#080808] text-[#f5f1e8]"
    >
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1400px] min-w-0 items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-8 md:py-4">
          <button
            type="button"
            onClick={() => go("top")}
            aria-label="Kaysleem home"
            className="flex min-w-0 shrink-0 items-center gap-2"
          >
            <img
              src={assets.logo}
              alt="Kaysleem official logo"
              className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
            />
            <span className="text-lg font-extrabold tracking-[-.06em] sm:text-xl">
              KAYSLEEM<span className="text-[#e8c76a]">.</span>
            </span>
          </button>

          <nav className="hidden items-center gap-6 text-[11px] font-bold uppercase tracking-[.18em] lg:flex xl:gap-8">
            {nav.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => go(item.toLowerCase())}
                className="text-white/65 transition hover:text-white"
              >
                {item}
              </button>
            ))}
          </nav>

          <a
            href={assets.epk}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border border-[#e8c76a]/70 px-4 py-3 text-[10px] font-bold uppercase tracking-[.12em] text-[#e8c76a] transition hover:bg-[#e8c76a] hover:text-black lg:inline-flex"
          >
            <Download size={14} />
            Artist EPK
          </a>

          <button
            type="button"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
            className="flex h-11 w-11 shrink-0 items-center justify-center lg:hidden"
          >
            {menu ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {menu && (
          <div className="max-h-[calc(100dvh-70px)] overflow-y-auto border-t border-white/10 bg-black px-5 py-4 lg:hidden">
            {nav.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => go(item.toLowerCase())}
                className="block w-full border-b border-white/10 py-4 text-left text-sm font-semibold uppercase tracking-[.15em]"
              >
                {item}
              </button>
            ))}

            <a
              href={assets.epk}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex min-h-12 items-center gap-3 text-sm font-bold text-[#e8c76a]"
            >
              <Download size={17} />
              View / Download Artist EPK
            </a>

            <button
              type="button"
              onClick={() => go("contact")}
              className="mt-2 min-h-11 text-sm font-bold text-[#e8c76a]"
            >
              Bookings <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[min(850px,100svh)] min-h-[680px] items-end overflow-hidden px-4 pb-9 pt-28 sm:px-6 sm:pb-12 md:px-10 md:pb-16">
        <img
          src={images.hero}
          alt="Kaysleem in his artist portrait"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

        <div className="relative mx-auto w-full min-w-0 max-w-[1400px]">
          <div className="mb-5 flex items-center gap-3 sm:gap-4">
            <img
              src={assets.logo}
              alt="Official Kaysleem logo"
              className="h-14 w-14 shrink-0 rounded-full border border-[#e8c76a]/40 object-cover sm:h-16 sm:w-16 md:h-20 md:w-20"
            />
            <p className="max-w-full text-[10px] font-bold uppercase tracking-[.2em] text-[#e8c76a] sm:text-xs sm:tracking-[.3em]">
              Afro Dance All · Artist · Performer
            </p>
          </div>

          <h1 className="max-w-full break-words text-[clamp(3rem,15.5vw,13rem)] font-extrabold leading-[0.9] tracking-[-.075em] sm:text-[clamp(4.5rem,13vw,13rem)]">
            KAYSLEEM
          </h1>

          <div className="mt-7 flex min-w-0 flex-col gap-6 border-t border-white/20 pt-5 sm:mt-8 sm:pt-6 md:flex-row md:items-end md:justify-between md:gap-8">
            <p className="w-full max-w-xl break-words text-sm leading-7 text-white/80 sm:text-base">
              Born from the rhythm of Abia State and raised in Jos, Kaysleem
              brings a distinctive Afro Dance All sound shaped by movement,
              experience and a lifelong love for music.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={() => go("about")}
                className="flex min-h-11 w-fit max-w-full items-center gap-3 text-left text-xs font-bold uppercase tracking-[.16em] sm:tracking-[.2em]"
              >
                Explore the artist
                <ArrowDownRight
                  size={17}
                  className="shrink-0 text-[#e8c76a]"
                />
              </button>

              <a
                href={assets.epk}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 border border-[#e8c76a]/70 px-4 py-3 text-[10px] font-bold uppercase tracking-[.12em] text-[#e8c76a] transition hover:bg-[#e8c76a] hover:text-black"
              >
                <Download size={15} />
                Artist EPK
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="w-full min-w-0 overflow-hidden border-y border-white/10 py-4">
        <div className="marquee flex w-max gap-6 whitespace-nowrap text-[10px] font-bold uppercase tracking-[.25em] text-white/35 sm:gap-10 sm:tracking-[.35em]">
          <span>THE SOUND</span>
          <span>•</span>
          <span>THE STORY</span>
          <span>•</span>
          <span>THE JOURNEY</span>
          <span>•</span>
          <span>THE SOUND</span>
          <span>•</span>
          <span>THE STORY</span>
          <span>•</span>
          <span>THE JOURNEY</span>
          <span>•</span>
        </div>
      </div>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid w-full min-w-0 max-w-[1400px] scroll-mt-24 gap-8 px-4 py-20 sm:px-6 sm:py-24 md:grid-cols-[.8fr_1.2fr] md:gap-12 md:px-10 md:py-36"
      >
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#e8c76a] sm:tracking-[.3em]">
            01 / Meet Kaysleem
          </p>
        </div>

        <div className="min-w-0">
          <h2 className="display break-words text-4xl leading-[1.05] sm:text-5xl md:text-7xl lg:text-8xl">
            The person behind <em>the sound.</em>
          </h2>

          <div className="mt-7 max-w-3xl space-y-5 break-words text-sm leading-7 text-white/65 sm:mt-9 sm:space-y-6 sm:text-base sm:leading-8">
            <p>
              Kaysleem, born Kingsley Samuel Junior, is an artist from Abia
              State who grew up in Jos, Northern Nigeria. His musical journey
              began behind the drums before his curiosity and passion for music
              led him to learn the keyboard.
            </p>

            <p>
              He was discovered by Atomen and MC Roy, the duo behind H4C,
              opening another chapter in his journey as an artist. With a
              growing desire to fully explore his sound, Kaysleem eventually
              chose music as a full-time pursuit.
            </p>

            <p>
              His journey later took him from Jos to Lagos, where he continues
              to refine his sound and develop his identity as an Afro Dance All
              artist.
            </p>
          </div>

          <div className="mt-8 grid min-w-0 gap-6 border-t border-white/10 pt-7 sm:mt-10 sm:grid-cols-2 sm:gap-8 sm:pt-8">
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[.2em] text-white/40 sm:tracking-[.25em]">
                Genre
              </p>
              <p className="mt-2 break-words text-lg sm:text-xl">
                Afro Dance All
              </p>
            </div>

            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[.2em] text-white/40 sm:tracking-[.25em]">
                From
              </p>
              <p className="mt-2 break-words text-lg sm:text-xl">
                Abia State · Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOUND */}
      <section
        id="sound"
        className="scroll-mt-20 bg-[#e9e3d6] px-4 py-20 text-[#0a0a0a] sm:px-6 sm:py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto w-full min-w-0 max-w-[1400px]">
          <div className="flex min-w-0 flex-col justify-between gap-5 border-b border-black/15 pb-7 sm:pb-8 md:flex-row md:items-end">
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[.25em] text-black/50 sm:tracking-[.3em]">
                02 / The Sound
              </p>

              <h2 className="display mt-3 break-words text-5xl sm:text-6xl md:text-8xl lg:text-9xl">
                Listen.
              </h2>
            </div>

            <p className="w-full max-w-sm break-words text-sm leading-7 text-black/60">
              Explore Kaysleem&apos;s releases and follow the sound across
              major streaming platforms.
            </p>
          </div>

          <div className="mt-8 grid min-w-0 grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {releases.map((release, index) => (
              <article
                key={release.title}
                className={`group relative isolate flex min-h-[370px] min-w-0 flex-col justify-end overflow-hidden bg-black sm:min-h-[400px] ${
                  release.featured ? "md:col-span-2 md:min-h-[440px]" : ""
                }`}
              >
                <img
                  src={images.texture}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50 transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/55 to-black/10" />

                <div className="relative w-full min-w-0 p-5 text-white sm:p-7 md:p-8">
                  <div className="flex min-w-0 items-center gap-3">
                    <Music2
                      size={15}
                      className="shrink-0 text-[#e8c76a]"
                    />

                    <p className="break-words text-[9px] uppercase tracking-[.2em] text-[#e8c76a] sm:tracking-[.25em]">
                      {release.featured
                        ? "Latest release"
                        : `Release 0${index + 1}`}
                    </p>
                  </div>

                  <h3 className="mt-3 break-words text-3xl font-bold sm:text-4xl md:text-5xl">
                    {release.title}
                  </h3>

                  <p className="mt-2 text-xs text-white/60">
                    {release.year} · Afro Dance All
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                    <a
                      href={release.apple}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 max-w-full items-center justify-center gap-2 border border-white/30 px-3 py-3 text-[9px] font-bold uppercase tracking-[.1em] transition hover:border-[#e8c76a] hover:text-[#e8c76a] sm:px-4 sm:tracking-[.15em]"
                    >
                      <Play size={12} fill="currentColor" />
                      Apple Music
                    </a>

                    <a
                      href={release.deezer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 max-w-full items-center justify-center gap-2 border border-white/30 px-3 py-3 text-[9px] font-bold uppercase tracking-[.1em] transition hover:border-[#e8c76a] hover:text-[#e8c76a] sm:px-4 sm:tracking-[.15em]"
                    >
                      <Music2 size={12} />
                      Deezer
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-7 border-t border-black/15 pt-6">
            <p className="break-words text-[10px] leading-5 uppercase tracking-[.15em] text-black/50 sm:tracking-[.2em]">
              Also available across major music streaming platforms.
            </p>
          </div>
        </div>
      </section>

      {/* ARTIST GALLERY */}
      <section
        id="gallery"
        className="mx-auto w-full min-w-0 max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28"
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#e8c76a] sm:tracking-[.3em]">
              Artist portraits / 03
            </p>
            <h2 className="display mt-4 break-words text-5xl sm:text-6xl md:text-8xl">
              The visual <em>story.</em>
            </h2>
          </div>

          <a
            href={assets.epk}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 border border-[#e8c76a]/70 px-4 py-3 text-[10px] font-bold uppercase tracking-[.12em] text-[#e8c76a] transition hover:bg-[#e8c76a] hover:text-black"
          >
            <Download size={15} />
            Download EPK
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          <img
            src={assets.portrait1}
            alt="Kaysleem in a black jacket and cap"
            loading="lazy"
            className="h-64 w-full object-cover object-center sm:h-[28rem]"
          />
          <img
            src={assets.portrait2}
            alt="Kaysleem in a warm studio portrait"
            loading="lazy"
            className="h-64 w-full object-cover object-center sm:h-[28rem]"
          />
          <img
            src={assets.portrait3}
            alt="Kaysleem wearing a patterned black jacket"
            loading="lazy"
            className="col-span-2 h-72 w-full object-cover object-center sm:col-span-1 sm:h-[28rem]"
          />
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="text-xs leading-6 text-white/45">
            Official artist imagery for press, bookings and music promotion.
          </p>
          <a
            href={assets.epk}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-fit items-center gap-3 bg-[#e8c76a] px-5 py-3 text-[10px] font-bold uppercase tracking-[.12em] text-black transition hover:bg-white"
          >
            View / Download Artist EPK
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* JOURNEY */}
      <section
        id="journey"
        className="mx-auto w-full min-w-0 max-w-[1400px] scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-36"
      >
        <div className="grid min-w-0 gap-9 md:grid-cols-[.8fr_1.2fr] md:gap-12">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#e8c76a] sm:tracking-[.3em]">
              04 / The Journey
            </p>

            <h2 className="display mt-5 break-words text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
              From
              <br />
              <em>Jos to Lagos.</em>
            </h2>
          </div>

          <div className="min-w-0 border-t border-white/15">
            {[
              [
                "01",
                "The beginning",
                "Kaysleem's musical journey began with the drums, building his early connection with rhythm and performance.",
              ],
              [
                "02",
                "Expanding the craft",
                "He later learned the keyboard, widening his musical understanding and developing a deeper relationship with sound.",
              ],
              [
                "03",
                "The discovery",
                "Kaysleem was discovered by Atomen and MC Roy, the duo behind H4C.",
              ],
              [
                "04",
                "A new chapter",
                "Moving from Jos to Lagos, Kaysleem continues to refine his sound and grow as an Afro Dance All artist.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="grid min-w-0 grid-cols-[34px_minmax(0,1fr)] gap-4 border-b border-white/10 py-7 sm:grid-cols-[50px_minmax(0,1fr)] sm:gap-5 sm:py-8 md:grid-cols-[65px_minmax(0,1fr)]"
              >
                <span className="text-sm text-[#e8c76a]">{number}</span>

                <div className="min-w-0">
                  <h3 className="break-words text-lg font-semibold sm:text-xl md:text-2xl">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-2xl break-words text-sm leading-7 text-white/55">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL WORLD */}
      <section className="relative min-h-[520px] min-h-[70svh] w-full min-w-0 overflow-hidden">
        <img
          src={images.stage}
          alt="Kaysleem in his full-body artist photo"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative flex min-h-[520px] min-h-[70svh] items-center justify-center px-4 py-16 text-center sm:px-6">
          <div className="w-full min-w-0 max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#e8c76a] sm:tracking-[.4em]">
              The visual world
            </p>

            <h2 className="display mt-5 break-words text-5xl leading-[1.05] sm:text-7xl md:text-8xl lg:text-[9rem]">
              Feel the
              <br />
              <em>moment.</em>
            </h2>

            <p className="mx-auto mt-6 w-full max-w-xl break-words text-sm leading-7 text-white/65 sm:mt-7 sm:text-base">
              Music is movement. Performance is connection. Kaysleem&apos;s
              world continues to take shape through sound, rhythm and live
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section
        id="connect"
        className="mx-auto w-full min-w-0 max-w-[1400px] scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32"
      >
        <div className="grid min-w-0 gap-9 md:grid-cols-2 md:gap-12">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#e8c76a] sm:tracking-[.3em]">
              05 / Connect
            </p>

            <h2 className="display mt-5 break-words text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Follow the
              <br />
              <em>journey.</em>
            </h2>
          </div>

          <div className="grid min-w-0 grid-cols-2 border-l border-white/10">
            <a
              href="https://www.instagram.com/kaysleem_music"
              target="_blank"
              rel="noopener noreferrer"
              className="group min-w-0 border-b border-r border-white/10 p-4 transition hover:bg-white/[.04] sm:p-6"
            >
              <Instagram size={19} className="text-[#e8c76a]" />
              <div className="mt-7 break-words text-base font-bold sm:mt-10 sm:text-lg">
                Instagram
              </div>
              <div className="mt-2 break-all text-[9px] leading-5 text-white/45 sm:uppercase sm:tracking-[.1em]">
                @kaysleem_samuel
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@kaysleem_music"
              target="_blank"
              rel="noopener noreferrer"
              className="group min-w-0 border-b border-white/10 p-4 transition hover:bg-white/[.04] sm:p-6"
            >
              <Music2 size={19} className="text-[#e8c76a]" />
              <div className="mt-7 break-words text-base font-bold sm:mt-10 sm:text-lg">
                TikTok
              </div>
              <div className="mt-2 break-all text-[9px] leading-5 text-white/45 sm:uppercase sm:tracking-[.1em]">
                @kaysleem_music
              </div>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group min-w-0 border-r border-white/10 p-4 transition hover:bg-white/[.04] sm:p-6"
            >
              <Facebook size={19} className="text-[#e8c76a]" />
              <div className="mt-7 break-words text-base font-bold sm:mt-10 sm:text-lg">
                Facebook
              </div>
              <div className="mt-2 break-words text-[9px] leading-5 text-white/45 sm:uppercase sm:tracking-[.1em]">
                Kaysleem Samuel
              </div>
            </a>

            <a
              href="https://wa.me/2348139354358"
              target="_blank"
              rel="noopener noreferrer"
              className="group min-w-0 p-4 transition hover:bg-white/[.04] sm:p-6"
            >
              <ArrowUpRight size={19} className="text-[#e8c76a]" />
              <div className="mt-7 break-words text-base font-bold sm:mt-10 sm:text-lg">
                WhatsApp
              </div>
              <div className="mt-2 break-words text-[9px] leading-5 text-white/45 sm:uppercase sm:tracking-[.1em]">
                +234 813 935 4358
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-20 bg-[#e8c76a] px-4 py-20 text-black sm:px-6 sm:py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto grid w-full min-w-0 max-w-[1400px] gap-10 md:grid-cols-[1fr_.75fr] md:gap-14">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[.25em] opacity-60 sm:tracking-[.3em]">
              06 / Bookings & Contact
            </p>

            <h2 className="display mt-5 max-w-full break-words text-5xl leading-[.95] sm:text-6xl md:text-7xl lg:text-[8rem]">
              Let&apos;s create
              <br />
              <em>something.</em>
            </h2>
          </div>

          <div className="min-w-0">
            <p className="max-w-md break-words text-sm leading-7 opacity-70">
              For bookings, collaborations, interviews, performances and
              professional enquiries, get in touch with Kaysleem directly.
            </p>

            <div className="mt-8 space-y-5 border-t border-black/20 pt-6 text-sm sm:mt-10">
              <p className="min-w-0">
                <span className="block text-[9px] uppercase tracking-[.2em] opacity-55">
                  Phone
                </span>
                <a
                  href="tel:+2348139354358"
                  className="inline-block min-h-11 max-w-full break-words py-2 font-bold transition hover:opacity-60"
                >
                  +234 813 935 4358
                </a>
              </p>

              <p>
                <span className="block text-[9px] uppercase tracking-[.2em] opacity-55">
                  Artist
                </span>
                <strong>Kaysleem</strong>
              </p>

              <p>
                <span className="block text-[9px] uppercase tracking-[.2em] opacity-55">
                  Genre
                </span>
                <strong>Afro Dance All</strong>
              </p>
            </div>

            <form onSubmit={submit} className="mt-8 min-w-0 space-y-3 sm:mt-10">
              <input
                required
                name="name"
                autoComplete="name"
                placeholder="Your name"
                aria-label="Your name"
                className="block min-h-12 w-full min-w-0 rounded-none border-b border-black/30 bg-transparent px-0 py-3 text-base outline-none placeholder:text-black/50 focus:border-black"
              />

              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email"
                aria-label="Your email"
                className="block min-h-12 w-full min-w-0 rounded-none border-b border-black/30 bg-transparent px-0 py-3 text-base outline-none placeholder:text-black/50 focus:border-black"
              />

              <textarea
                required
                name="message"
                placeholder="Tell us about the enquiry"
                aria-label="Tell us about the enquiry"
                rows={4}
                className="block w-full min-w-0 resize-y rounded-none border-b border-black/30 bg-transparent px-0 py-3 text-base leading-7 outline-none placeholder:text-black/50 focus:border-black"
              />

              <button
                type="submit"
                className="mt-4 inline-flex min-h-12 max-w-full flex-wrap items-center justify-center gap-3 border border-black px-4 py-3 text-[10px] font-bold uppercase tracking-[.12em] transition hover:bg-black hover:text-[#e8c76a] sm:px-6 sm:tracking-[.2em]"
              >
                Send via WhatsApp
                <ArrowUpRight size={16} />
              </button>

              {submitted && (
                <p role="status" className="break-words pt-2 text-xs font-semibold">
                  Your enquiry has been prepared in WhatsApp. Please check the
                  WhatsApp window to send your message.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full min-w-0 border-t border-white/10 px-4 py-7 sm:px-6 md:px-10">
        <div className="mx-auto flex w-full min-w-0 max-w-[1400px] flex-col justify-between gap-4 text-[9px] uppercase tracking-[.15em] text-white/45 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 sm:tracking-[.2em]">
          <span className="break-words">
            © 2026 KAYSLEEM. All rights reserved.
          </span>

          <span className="break-words">
            Powered by{" "}
            <a
              href="https://philedev.name.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#e8c76a] transition hover:text-white"
            >
              PHILEdev
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}

export default App;
