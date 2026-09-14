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

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.heyumi.app&pcampaignid=web_share";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05050D] text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#6D5B8D]/20 blur-[140px]" />

        <div className="absolute bottom-[-200px] left-[-150px] w-[400px] h-[400px] rounded-full bg-[#F3A8C2]/10 blur-[130px]" />

        <div className="absolute top-[40%] right-[-180px] w-[400px] h-[400px] rounded-full bg-[#2E3B6F]/20 blur-[140px]" />
      </div>

      {/* Main */}
      <div className="relative z-10 w-full max-w-md text-center">

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="Umi"
            className="w-28 h-28 rounded-[28px] object-cover shadow-[0_0_60px_rgba(192,132,252,0.25)]"
          />
        </div>

        {/* Name */}
        <h1 className="mt-7 text-4xl font-bold tracking-tight">
          Umi
        </h1>

        {/* Tagline */}
        <p className="mt-3 text-lg text-[#D7A9C7]">
          More Than AI. A Feeling. ♡
        </p>

        {/* Description */}
        <p className="mt-5 text-sm leading-6 text-gray-400">
          Chat, play, explore and connect with unique AI personalities.
          Umi is your personal AI companion — always there whenever you need
          someone to talk to.
        </p>

        {/* Download Button */}
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex w-full items-center justify-center rounded-full
          bg-gradient-to-r from-[#F3A8C2] via-[#C084FC] to-[#5DCDE9]
          px-7 py-4 text-base font-bold text-[#1F2A52]
          shadow-[0_0_35px_rgba(243,168,194,0.22)]
          transition duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Get Umi on Google Play
          <span className="ml-2">→</span>
        </a>

        {/* Legal Button */}
        <Link
          href="/privacy-policy"
          className="mt-5 inline-flex items-center justify-center rounded-full
          border border-white/10 bg-white/[0.04]
          px-5 py-2.5 text-xs font-medium text-gray-400
          backdrop-blur-md transition
          hover:border-[#A985B5]/40 hover:text-[#FADDE1]"
        >
          Legal & Support
        </Link>

        {/* Footer */}
        <div className="mt-12">

          <div className="flex justify-center gap-4 text-xs text-gray-600">
            <Link
              href="/privacy-policy"
              className="hover:text-gray-400 transition"
            >
              Privacy
            </Link>

            <span>•</span>

            <Link
              href="/terms"
              className="hover:text-gray-400 transition"
            >
              Terms
            </Link>

            <span>•</span>

            <Link
              href="/support"
              className="hover:text-gray-400 transition"
            >
              Support
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-700">
            © {new Date().getFullYear()} HeyUmi. All Rights Reserved.
          </p>

        </div>

      </div>

    </main>
  );
}