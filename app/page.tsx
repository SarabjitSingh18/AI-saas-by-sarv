import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
    {/* Hero Section */}
 
    <div className="text-center max-w-2xl">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Optimize Your Media with Ease</h1>
      <p className="text-lg text-gray-400 mb-6">
        Compress and resize images & videos seamlessly with our powerful cloud-based platform.
      </p>
    </div>
    
    {/* Buttons */}
    <div className="flex gap-4 mt-4">
      <Link href="/sign-up">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
          Sign up
        </button>
      </Link>
      <Link href="/sign-in">
        <button className="border border-gray-600 hover:border-white text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all">
          Sign In
        </button>
      </Link>
    </div>
    
    {/* Footer */}
    <footer className="mt-10 text-gray-500 text-sm">
      Powered by Sarabjit Singh
    </footer>
  </div>
  );
}
