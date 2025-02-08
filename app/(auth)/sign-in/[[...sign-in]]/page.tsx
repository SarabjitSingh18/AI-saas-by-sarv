import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-2xl p-6 sm:p-8">
        <h2 className="text-center text-2xl font-bold text-white mb-4">Sign In</h2>
        <SignIn />
      </div>
    </div>

  )

}