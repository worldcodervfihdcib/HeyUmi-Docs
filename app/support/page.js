export default function Support() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-green-400 mb-8">
          Support
        </h1>

        <p className="text-gray-300 leading-8">
          Welcome to HeyUmi Support. If you have any questions, encounter any
          issues, or would like to share feedback, we're here to help.
        </p>

        <h2 className="text-2xl font-semibold text-green-400 mt-10 mb-4">
          Contact Us
        </h2>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">

          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <p className="text-green-400 text-lg font-medium">
              support.heyumi@gmail.com
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Response Time</p>
            <p className="text-white">
              We aim to respond within 24–48 business hours.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold text-green-400 mt-10 mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">


          <div>
            <h3 className="text-xl font-semibold text-white">
              How do I delete my account?
            </h3>
            <p className="text-gray-300 mt-2">
              Visit the <strong>Delete Account</strong> page or use the account
              deletion option inside the app (if available).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              I found a bug.
            </h3>
            <p className="text-gray-300 mt-2">
              Please send us a detailed description along with screenshots, if
              possible. This helps us resolve issues faster.
            </p>
          </div>

        </div>

        <div className="mt-16 border-t border-zinc-800 pt-6 text-center">
          <p className="text-gray-500">
            Thank you for using <span className="text-green-400">HeyUmi</span>.
          </p>
        </div>

      </div>
    </main>
  );
}