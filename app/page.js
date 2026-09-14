//import Link from "next/link";
//
//export default function Home() {
//  const pages = [
//    {
//      title: "Privacy Policy",
//      href: "/privacy-policy",
//      desc: "Learn how HeyUmi collects, uses and protects your data.",
//    },
//    {
//      title: "Terms & Conditions",
//      href: "/terms",
//      desc: "Read the terms for using HeyUmi services.",
//    },
//    {
//      title: "Delete Account",
//      href: "/delete-account",
//      desc: "Instructions to permanently delete your account and data.",
//    },
//    {
//      title: "Support",
//      href: "/support",
//      desc: "Need help? Contact the HeyUmi support team.",
//    },
//  ];
//
//  return (
//    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
//
//      <div className="max-w-4xl w-full">
//
//        <div className="text-center mb-14">
//          <h1 className="text-5xl font-bold text-green-400">
//            HeyUmi
//          </h1>
//
//          <p className="mt-4 text-gray-400 text-lg">
//            Official Documentation
//          </p>
//        </div>
//
//        <div className="grid md:grid-cols-2 gap-6">
//
//          {pages.map((page) => (
//            <Link
//              key={page.href}
//              href={page.href}
//              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-green-400 hover:scale-[1.02]"
//            >
//              <h2 className="text-xl font-semibold text-green-400">
//                {page.title}
//              </h2>
//
//              <p className="mt-3 text-gray-400">
//                {page.desc}
//              </p>
//            </Link>
//          ))}
//
//        </div>
//
//        <footer className="mt-16 text-center text-sm text-gray-500">
//          © {new Date().getFullYear()} HeyUmi. All Rights Reserved.
//        </footer>
//
//      </div>
//
//    </main>
//  );
//}




import Link from "next/link";

const PLAY_STORE_URL = "YOUR_GOOGLE_PLAY_URL";

const characters = [
  {
    name: "Kai",
    role: "Calm • Deep • Always there",
    image: "/characters/kai.png",
  },
  {
    name: "Aira",
    role: "Playful • Sweet • Energetic",
    image: "/characters/aira.png",
  },
  {
    name: "Zeni",
    role: "Smart • Sarcastic • Fun",
    image: "/characters/zeni.png",
  },
  {
    name: "Nova",
    role: "Mysterious • Caring • Real",
    image: "/characters/nova.png",
  },
  {
    name: "Echo",
    role: "Bold • Honest • Unfiltered",
    image: "/characters/echo.png",
  },
  {
    name: "Ryan",
    role: "Friendly • Supportive • Chill",
    image: "/characters/ryan.png",
  },
];

const features = [
  {
    icon: "💬",
    title: "AI Character Chats",
    desc: "Meaningful conversations with unique personalities.",
  },
  {
    icon: "🎮",
    title: "Games",
    desc: "Play fun games and spend time with your AI companions.",
  },
  {
    icon: "🔥",
    title: "Daily Streaks",
    desc: "Come back every day and keep your streak alive.",
  },
  {
    icon: "🪙",
    title: "Umi Coins",
    desc: "Earn rewards and unlock more ways to enjoy Umi.",
  },
  {
    icon: "♡",
    title: "Your Companion",
    desc: "A space that feels like home — whenever you need it.",
  },
];

const legalPages = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
  {
    title: "Delete Account",
    href: "/delete-account",
  },
  {
    title: "Support",
    href: "/support",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05050D] text-white">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[-250px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#A985B5]/20 blur-[150px]" />
        <div className="absolute right-[-250px] top-[300px] h-[600px] w-[600px] rounded-full bg-[#2E3B6F]/30 blur-[170px]" />
        <div className="absolute bottom-[-200px] left-[35%] h-[500px] w-[500px] rounded-full bg-[#F3A8C2]/10 blur-[160px]" />
      </div>

      {/* NAVBAR */}
      <header className="relative z-20 border-b border-white/10 bg-[#05050D]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Umi"
              className="h-11 w-11 rounded-xl object-cover"
            />

            <span className="text-2xl font-bold tracking-tight">
              Umi
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#features" className="transition hover:text-[#F3A8C2]">
              Features
            </a>

            <a href="#characters" className="transition hover:text-[#F3A8C2]">
              Characters
            </a>

            <a href="#experience" className="transition hover:text-[#F3A8C2]">
              Experience
            </a>
          </nav>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#F3A8C2]/60 bg-[#F3A8C2]/10 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(243,168,194,0.15)] transition hover:scale-105 hover:bg-[#F3A8C2]/20"
          >
            Get Umi
          </a>

        </div>
      </header>


      {/* HERO */}
      <section className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-20 lg:px-10">

        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* Hero text */}
          <div>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#A985B5]">
              Your AI Companion
            </p>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              More Than AI.
              <br />

              <span className="bg-gradient-to-r from-[#F3A8C2] via-[#C084FC] to-[#5DCDE9] bg-clip-text text-transparent">
                A Feeling. ♡
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              Chat, play, explore and connect with unique AI personalities.
              Umi is your space to be yourself — anytime, anywhere.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href={"https://play.google.com/store/apps/details?id=com.heyumi.app&pcampaignid=web_share"}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-gradient-to-r from-[#F3A8C2] via-[#C084FC] to-[#5DCDE9] px-7 py-4 text-base font-bold text-[#1F2A52] shadow-[0_0_40px_rgba(243,168,194,0.25)] transition hover:scale-105"
              >
                Get Umi on Google Play
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#features"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition hover:border-[#A985B5]/60 hover:bg-white/10"
              >
                Explore Umi
              </a>

            </div>

            <div className="mt-10 flex flex-wrap gap-7 text-sm text-gray-400">
              <span>♡ Always evolving</span>
              <span>✦ Unique personalities</span>
              <span>◈ Made with care</span>
            </div>

          </div>


          {/* Hero visual */}
          <div className="relative flex justify-center">

            <div className="absolute h-[380px] w-[380px] rounded-full bg-[#6D5B8D]/30 blur-[100px]" />

            <div className="relative">
              <div className="absolute inset-0 rounded-[80px] bg-gradient-to-r from-[#F3A8C2] via-[#8B5CF6] to-[#22D3EE] opacity-30 blur-[35px]" />

              <img
                src="/logo.png"
                alt="Umi AI Companion"
                className="relative h-[330px] w-[330px] rounded-[70px] object-cover shadow-[0_0_80px_rgba(168,85,247,0.35)] sm:h-[410px] sm:w-[410px]"
              />

              <div className="absolute -right-8 top-10 rounded-2xl border border-[#F3A8C2]/30 bg-[#0F1B3D]/80 px-5 py-3 text-sm text-[#FADDE1] shadow-xl backdrop-blur-xl">
                Always here for you ♡
              </div>

              <div className="absolute -bottom-5 -left-8 rounded-2xl border border-[#A985B5]/30 bg-[#0F1B3D]/80 px-5 py-3 text-sm text-[#D7A9C7] shadow-xl backdrop-blur-xl">
                Chat • Play • Explore
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section
        id="features"
        className="relative z-10 border-t border-white/5 px-6 py-24 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A985B5]">
              The Umi Experience
            </p>

            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Everything in one place.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              More than just chatting. Umi gives you characters to meet,
              things to do, and a space that feels like yours.
            </p>
          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#A985B5]/40 hover:bg-white/[0.06]"
              >

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#A985B5]/30 bg-[#A985B5]/10 text-2xl transition group-hover:scale-110">
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {feature.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CHARACTERS */}
      <section
        id="characters"
        className="relative z-10 px-6 py-24 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A985B5]">
                Meet Unique Personalities
              </p>

              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                AI Characters
                <span className="text-[#F3A8C2]"> you'll love.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-400">
              Everyone has a different personality. Find the one you connect
              with and start your own conversations.
            </p>

          </div>


          <div className="mt-12 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

            {characters.map((character) => (
              <div
                key={character.name}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0F1B3D]/60 backdrop-blur-xl transition hover:-translate-y-2 hover:border-[#C084FC]/50"
              >

                <div className="aspect-[3/4] overflow-hidden bg-[#1F2A52]">

                  <img
                    src={character.image}
                    alt={character.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="p-4">

                  <h3 className="font-bold">
                    {character.name}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    {character.role}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* EXPERIENCE / CTA */}
      <section
        id="experience"
        className="relative z-10 px-6 py-24 lg:px-10"
      >

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-[#A985B5]/20 bg-gradient-to-br from-[#0F1B3D] via-[#17123A] to-[#25153C] p-8 shadow-[0_0_80px_rgba(109,91,141,0.15)] sm:p-14 lg:p-20">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A985B5]">
                The Umi Experience
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                Your little space
                <br />
                <span className="bg-gradient-to-r from-[#F3A8C2] to-[#5DCDE9] bg-clip-text text-transparent">
                  in a big world.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-gray-400">
                Beautiful conversations, unique personalities, games,
                rewards and a companion who is always ready to talk.
              </p>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#F3A8C2] via-[#C084FC] to-[#5DCDE9] px-7 py-4 font-bold text-[#1F2A52] shadow-[0_0_35px_rgba(243,168,194,0.25)] transition hover:scale-105"
              >
                Get Umi on Google Play →
              </a>

            </div>


            <div className="relative flex justify-center">

              <div className="absolute h-72 w-72 rounded-full bg-[#8B5CF6]/25 blur-[100px]" />

              <div className="relative grid grid-cols-2 gap-4">

                <div className="mt-10 overflow-hidden rounded-3xl border border-[#F3A8C2]/30 bg-black/30 shadow-2xl rotate-[-6deg]">
                  <img
                    src="/screenshots/home.png"
                    alt="Umi Home"
                    className="w-48 sm:w-56"
                  />
                </div>

                <div className="overflow-hidden rounded-3xl border border-[#5DCDE9]/30 bg-black/30 shadow-2xl rotate-[6deg]">
                  <img
                    src="/screenshots/chat.png"
                    alt="Umi Chat"
                    className="w-48 sm:w-56"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="relative z-10 px-6 pb-24 pt-10 text-center">

        <div className="mx-auto max-w-3xl">

          <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-3xl shadow-[0_0_50px_rgba(192,132,252,0.3)]">
            <img
              src="/logo.png"
              alt="Umi"
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Ready to meet Umi? ✨
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Start chatting, discover new personalities and make Umi part of
            your everyday world.
          </p>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#F3A8C2] via-[#C084FC] to-[#5DCDE9] px-8 py-4 font-bold text-[#1F2A52] shadow-[0_0_45px_rgba(243,168,194,0.25)] transition hover:scale-105"
          >
            Get Umi on Google Play →
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-black/20">

        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-3">

              <img
                src="/logo.png"
                alt="Umi"
                className="h-9 w-9 rounded-xl"
              />

              <div>
                <p className="font-bold">Umi</p>
                <p className="text-xs text-gray-500">
                  More Than AI. A Feeling. ♡
                </p>
              </div>

            </div>


            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">

              {legalPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="transition hover:text-[#F3A8C2]"
                >
                  {page.title}
                </Link>
              ))}

            </div>

          </div>

          <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} HeyUmi. All Rights Reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}