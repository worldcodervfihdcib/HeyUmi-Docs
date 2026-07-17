export default function DeleteAccount() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-green-400 mb-8">
          Delete Your HeyUmi Account
        </h1>

        <p className="text-gray-300 leading-8">
          We respect your privacy and give you full control over your account.
          If you wish to permanently delete your HeyUmi account and associated
          data, you can request account deletion using the methods below.
        </p>

        <h2 className="text-2xl font-semibold text-green-400 mt-10 mb-4">
          Option 1: Delete from the App
        </h2>

        <p className="text-gray-300 leading-8">
          If the Delete Account feature is available inside the app, you can
          navigate to:
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mt-4">
          <p className="text-green-400 font-medium">
            Profile → Settings → Delete Account
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-green-400 mt-10 mb-4">
          Option 2: Request by Email
        </h2>

        <p className="text-gray-300 leading-8">
          If you cannot access your account, send an email from your registered
          email address with the subject:
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mt-4">
          <p className="text-green-400 font-medium">
            Delete My HeyUmi Account
          </p>
        </div>

        <p className="text-gray-300 mt-6">
          Email us at:
        </p>

        <p className="text-green-400 font-semibold text-lg mt-2">
          support.heyumi@gmail.com
        </p>

        <h2 className="text-2xl font-semibold text-green-400 mt-10 mb-4">
          What Happens After Deletion?
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-300">
          <li>Your HeyUmi account will be permanently deleted.</li>
          <li>Your profile information will be removed.</li>
          <li>Your chat history associated with the account will be deleted, unless we are required to retain certain information by law.</li>
          <li>This action cannot be undone.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-400 mt-10 mb-4">
          Processing Time
        </h2>

        <p className="text-gray-300 leading-8">
          Account deletion requests are generally processed within 7 business
          days after verification.
        </p>

      </div>
    </main>
  );
}