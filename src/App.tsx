import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Facebook,
  Instagram,
  Menu,
  Music2,
  Play,
  X,
} from "lucide-react";

const images = {
  hero:
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2200&q=85",
  stage:
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1800&q=85",
  texture:
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85",
};

const nav = ["About", "Sound", "Journey", "Connect"];

const releases = [
  {
    title: "Go Hard",
    year: "2026",
    featured: true,
    apple:
      "https://music.apple.com/ng/album/go-hard-single/1892065802",
    deezer: "https://link.deezer.com/s/34CwA4XAlih0CcII99syn",
  },
  {
    title: "Nwanyioma",
    year: "2026",
    featured: false,
    apple:
      "https://music.apple.com/ng/album/nwanyioma-single/1884628376",
    deezer: "https://link.deezer.com/s/34CwzjZF2WmzqZYETRVBg",
  },
  {
    title: "Dance",
    year: "2025",
    featured: false,
    apple:
      "https://music.apple.com/ng/album/dance-single/1848318770",
    deezer: "https://link.deezer.com/s/34CwAlHswwzvgO5gkZeiw",
  },
];

function App() {
  const [menu, setMenu] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const go = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

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
    <main className="noise overflow-hidden bg-[#080808] text-[#f5f1e8]">
      {/* HEADER */}
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 md:px-8">
          <button
            onClick={() => go("top")}
            className="text-xl font-extrabold tracking-[-.05em]"
          >
            KAYSLEEM<span className="text-[#e8c76a]">.</span>
          </button>

          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[.22em] md:flex">
            {nav.map((item) => (
              <button
                key={item}
                onClick={() => go(item.toLowerCase())}
                className="text-white/65 transition hover:text-white"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => go("contact")}
            className="hidden border border-[#e8c76a]/70 px-5 py-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#e8c76a] transition hover:bg-[#e8c76a] hover:text-black md:block"
          >
            Bookings
          </button>

          <button
            aria-label="Menu"
            onClick={() => setMenu(!menu)}
            className="md:hidden"
          >
            {menu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menu && (
          <div className="border-t border-white/10 bg-black px-5 py-6 md:hidden">
            {nav.map((item) => (
              <button
                key={item}
                onClick={() => go(item.toLowerCase())}
                className="block w-full border-b border-white/10 py-4 text-left text-sm uppercase tracking-[.18em]"
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => go("contact")}
              className="mt-5 text-[#e8c76a]"
            >
              Bookings →
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-screen items-end overflow-hidden px-5 pb-10 pt-28 md:px-10 md:pb-16"
      >
        <img
          src={images.hero}
          alt="Live music performance atmosphere"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />

        <div className="relative mx-auto w-full max-w-[1400px]">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[.35em] text-[#e8c76a]">
            Afro Dance All · Artist · Performer
          </p>

          <h1 className="max-w-6xl text-[18vw] font-extrabold leading-[.72] tracking-[-.08em] md:text-[15vw]">
            KAYSLEEM
          </h1>

          <div className="mt-8 flex flex-col justify-between gap-8 border-t border-white/20 pt-6 md:flex-row md:items-end">
            <p className="max-w-xl text-sm leading-7 text-white/65 md:text-base">
              Born from the rhythm of Abia State and raised in Jos, Kaysleem
              brings a distinctive Afro Dance All sound shaped by movement,
              experience and a lifelong love for music.
            </p>

            <button
              onClick={() => go("about")}
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em]"
            >
              Explore the artist
              <ArrowDownRight size={17} className="text-[#e8c76a]" />
            </button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-white/10 py-4">
        <div className="marquee flex w-max gap-10 whitespace-nowrap text-[10px] font-bold uppercase tracking-[.35em] text-white/35">
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
        className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:grid-cols-[.8fr_1.2fr] md:px-10 md:py-36"
      >
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#e8c76a]">
            01 / Meet Kaysleem
          </p>
        </div>

        <div>
          <h2 className="display text-5xl leading-[.95] md:text-8xl">
            The person behind <em>the sound.</em>
          </h2>

          <div className="mt-9 max-w-3xl space-y-6 text-base leading-8 text-white/60">
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

          <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-[.25em] text-white/35">
                Genre
              </p>
              <p className="mt-2 text-xl">Afro Dance All</p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[.25em] text-white/35">
                From
              </p>
              <p className="mt-2 text-xl">Abia State · Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOUND */}
      <section
        id="sound"
        className="bg-[#e9e3d6] px-5 py-24 text-[#0a0a0a] md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-5 border-b border-black/15 pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.3em] text-black/45">
                02 / The Sound
              </p>

              <h2 className="display mt-4 text-6xl md:text-9xl">Listen.</h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-black/55">
              Explore Kaysleem&apos;s releases and follow the sound across
              major streaming platforms.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {releases.map((release, index) => (
              <article
                key={release.title}
                className={`group relative overflow-hidden bg-black ${
                  release.featured
                    ? "md:col-span-2 md:aspect-[16/9]"
                    : "aspect-square"
                }`}
              >
                <img
                  src={images.texture}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                  <div className="flex items-center gap-3">
                    <Music2 size={15} className="text-[#e8c76a]" />

                    <p className="text-[9px] uppercase tracking-[.25em] text-[#e8c76a]">
                      {release.featured ? "Latest release" : `Release 0${index + 1}`}
                    </p>
                  </div>

                  <h3
                    className={`mt-3 font-bold ${
                      release.featured ? "text-4xl md:text-6xl" : "text-3xl"
                    }`}
                  >
                    {release.title}
                  </h3>

                  <p className="mt-2 text-xs text-white/50">
                    {release.year} · Afro Dance All
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={release.apple}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-white/25 px-4 py-3 text-[9px] font-bold uppercase tracking-[.15em] transition hover:border-[#e8c76a] hover:text-[#e8c76a]"
                    >
                      <Play size={12} fill="currentColor" />
                      Apple Music
                    </a>

                    <a
                      href={release.deezer}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-white/25 px-4 py-3 text-[9px] font-bold uppercase tracking-[.15em] transition hover:border-[#e8c76a] hover:text-[#e8c76a]"
                    >
                      <Music2 size={12} />
                      Deezer
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 border-t border-black/15 pt-6">
            <p className="text-[10px] uppercase tracking-[.2em] text-black/45">
              Also available across major music streaming platforms.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section
        id="journey"
        className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36"
      >
        <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#e8c76a]">
              03 / The Journey
            </p>

            <h2 className="display mt-5 text-6xl leading-none md:text-8xl">
              From
              <br />
              <em>Jos to Lagos.</em>
            </h2>
          </div>

          <div className="border-t border-white/15">
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
                className="grid grid-cols-[50px_1fr] gap-5 border-b border-white/10 py-8 md:grid-cols-[80px_1fr]"
              >
                <span className="text-sm text-[#e8c76a]">{number}</span>

                <div>
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL WORLD */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <img
          src={images.stage}
          alt="Live concert atmosphere"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative flex min-h-[70vh] items-center justify-center px-5 text-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.4em] text-[#e8c76a]">
              The visual world
            </p>

            <h2 className="display mt-5 text-6xl md:text-[9rem]">
              Feel the
              <br />
              <em>moment.</em>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/60">
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
        className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32"
      >
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#e8c76a]">
              04 / Connect
            </p>

            <h2 className="display mt-5 text-6xl md:text-8xl">
              Follow the
              <br />
              <em>journey.</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 border-l border-white/10">
            <a
              href="https://www.instagram.com/kaysleem_samuel"
              target="_blank"
              rel="noreferrer"
              className="group border-b border-r border-white/10 p-6 transition hover:bg-white/[.04]"
            >
              <Instagram size={19} className="text-[#e8c76a]" />

              <div className="mt-10 text-lg font-bold">Instagram</div>

              <div className="mt-2 text-[9px] uppercase tracking-[.15em] text-white/35">
                @kaysleem_samuel
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@kaysleem_music"
              target="_blank"
              rel="noreferrer"
              className="group border-b border-white/10 p-6 transition hover:bg-white/[.04]"
            >
              <Music2 size={19} className="text-[#e8c76a]" />

              <div className="mt-10 text-lg font-bold">TikTok</div>

              <div className="mt-2 text-[9px] uppercase tracking-[.15em] text-white/35">
                @kaysleem_music
              </div>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="group border-r border-white/10 p-6 transition hover:bg-white/[.04]"
            >
              <Facebook size={19} className="text-[#e8c76a]" />

              <div className="mt-10 text-lg font-bold">Facebook</div>

              <div className="mt-2 text-[9px] uppercase tracking-[.15em] text-white/35">
                Kaysleem Samuel
              </div>
            </a>

            <a
              href="https://wa.me/2348139354358"
              target="_blank"
              rel="noreferrer"
              className="group p-6 transition hover:bg-white/[.04]"
            >
              <ArrowUpRight size={19} className="text-[#e8c76a]" />

              <div className="mt-10 text-lg font-bold">WhatsApp</div>

              <div className="mt-2 text-[9px] uppercase tracking-[.15em] text-white/35">
                +234 813 935 4358
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#e8c76a] px-5 py-24 text-black md:px-10 md:py-32"
      >
        <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-[1fr_.75fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.3em] opacity-55">
              05 / Bookings & Contact
            </p>

            <h2 className="display mt-5 text-7xl leading-[.8] md:text-[9rem]">
              Let&apos;s create
              <br />
              <em>something.</em>
            </h2>
          </div>

          <div>
            <p className="max-w-md text-sm leading-7 opacity-65">
              For bookings, collaborations, interviews, performances and
              professional enquiries, get in touch with Kaysleem directly.
            </p>

            <div className="mt-10 space-y-5 border-t border-black/20 pt-6 text-sm">
              <p>
                <span className="block text-[9px] uppercase tracking-[.2em] opacity-45">
                  Phone
                </span>

                <a
                  href="tel:+2348139354358"
                  className="font-bold transition hover:opacity-60"
                >
                  +234 813 935 4358
                </a>
              </p>

              <p>
                <span className="block text-[9px] uppercase tracking-[.2em] opacity-45">
                  Artist
                </span>

                <strong>Kaysleem</strong>
              </p>

              <p>
                <span className="block text-[9px] uppercase tracking-[.2em] opacity-45">
                  Genre
                </span>

                <strong>Afro Dance All</strong>
              </p>
            </div>

            <form onSubmit={submit} className="mt-10 space-y-3">
              <input
                required
                name="name"
                placeholder="Your name"
                className="w-full border-b border-black/30 bg-transparent px-0 py-4 outline-none placeholder:text-black/45"
              />

              <input
                required
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full border-b border-black/30 bg-transparent px-0 py-4 outline-none placeholder:text-black/45"
              />

              <textarea
                required
                name="message"
                placeholder="Tell us about the enquiry"
                rows={3}
                className="w-full resize-none border-b border-black/30 bg-transparent px-0 py-4 outline-none placeholder:text-black/45"
              />

              <button
                type="submit"
                className="mt-4 flex items-center gap-3 border border-black px-6 py-4 text-[10px] font-bold uppercase tracking-[.2em] transition hover:bg-black hover:text-[#e8c76a]"
              >
                Send via WhatsApp
                <ArrowUpRight size={16} />
              </button>

              {submitted && (
                <p className="pt-2 text-xs font-semibold">
                  Your enquiry has been prepared in WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-5 text-[9px] uppercase tracking-[.22em] text-white/35 md:flex-row">
          <span>© 2026 KAYSLEEM. All rights reserved.</span>

          <span>
            Powered By{" "}
            <a
              href="https://philedev.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
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
