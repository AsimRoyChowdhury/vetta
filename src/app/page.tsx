import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight">
            Craft Your Resume <br /> <span className="text-secondary">Stand Out. Get Hired.</span>
          </h1>
          <p className="text-lg text-gray-600">
            Build ATS-friendly, professional resumes in minutes with smart templates and AI-powered insights.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/build-resume" className="bg-primary text-white px-6 py-3 rounded-2xl text-lg font-medium shadow hover:bg-indigo-700 transition flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#features" className="text-primary hover:underline font-semibold text-lg">
                See Features
            </Link>
          </div>
        </div>


        <div className="hidden md:block mix-blend-luminosity">
          <Image
            width={500}
            height={500}
            src="/resume.svg"
            alt="Resume builder illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
