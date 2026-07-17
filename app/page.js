import Link from "next/link";

export default function Home() {
  const pages = [
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
      desc: "Learn how HeyUmi collects, uses and protects your data.",
    },
    {
      title: "Terms & Conditions",
      href: "/terms",
      desc: "Read the terms for using HeyUmi services.",
    },
    {
      title: "Delete Account",
      href: "/delete-account",
      desc: "Instructions to permanently delete your account and data.",
    },
    {
      title: "Support",
      href: "/support",
      desc: "Need help? Contact the HeyUmi support team.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <div className="max-w-4xl w-full">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-green-400">
            HeyUmi
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            Official Documentation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-green-400 hover:scale-[1.02]"
            >
              <h2 className="text-xl font-semibold text-green-400">
                {page.title}
              </h2>

              <p className="mt-3 text-gray-400">
                {page.desc}
              </p>
            </Link>
          ))}

        </div>

        <footer className="mt-16 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} HeyUmi. All Rights Reserved.
        </footer>

      </div>

    </main>
  );
}