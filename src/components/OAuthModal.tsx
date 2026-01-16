import { useEffect, useState } from "react";

interface OAuthModalProps {
  onClose: () => void;
}

export function OAuthModal({ onClose }: OAuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">("login");

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const bgImage =
    mode === "login"
      ? "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2831&auto=format&fit=crop"
      : "https://images.unsplash.com/photo-1579952363873-27f3bde9be28?q=80&w=2670&auto=format&fit=crop";

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide-in wrapper (NO justify-end) */}
      <div className="absolute inset-0 flex animate-slide-in">
        {/* Modal container */}
        <div className="relative ml-auto w-full max-w-6xl h-full bg-white flex">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-50 text-2xl text-gray-600 hover:text-black"
          >
            ×
          </button>

          {/* LEFT IMAGE SECTION */}
          <div
            className="hidden lg:flex w-1/2 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80" />
            <div className="relative z-10 p-14 flex flex-col justify-end text-white">
              <h1 className="text-6xl font-bold uppercase mb-4">
                MJ Jersey
              </h1>
              <p className="text-lg font-light max-w-md opacity-90">
                Wear the Passion. Feel the Game. Authentic kits for true fans.
              </p>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10">
            <div className="w-full max-w-md animate-fade-in">
              {mode === "login" ? (
                <>
                  {/* LOGIN */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                      Welcome Back
                    </h2>
                    <p className="text-gray-500">
                      Log in to access your saved jerseys
                    </p>
                  </div>

                  <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-full py-3 font-medium hover:bg-gray-50 transition mb-6">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      className="w-5 h-5"
                    />
                    Continue with Google
                  </button>

                  <div className="relative my-6">
                    <div className="w-full border-t border-gray-200" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-sm text-gray-400">
                      or
                    </span>
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:border-black focus:bg-white"
                  />

                  <button className="w-full bg-black text-white rounded-full py-3 font-medium hover:bg-gray-800 transition">
                    Sign In
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-6">
                    New to MJ Jersey?{" "}
                    <span
                      onClick={() => setMode("register")}
                      className="font-semibold text-black cursor-pointer underline"
                    >
                      Create an account
                    </span>
                  </p>

                  <p className="text-xs text-gray-400 text-center mt-8 leading-relaxed">
                    By continuing, you agree to our{" "}
                    <span className="underline cursor-pointer">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="underline cursor-pointer">
                      Privacy Policy
                    </span>.
                  </p>
                </>
              ) : (
                <>
                  {/* REGISTER */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                      Create Account
                    </h2>
                    <p className="text-gray-500">
                      Join the club for exclusive drops
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:border-black focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:border-black focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Min. 8 characters"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:border-black focus:bg-white"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-black text-white rounded-full py-3 font-medium hover:bg-gray-800 transition mb-6">
                    Create Account
                  </button>

                  <div className="relative my-6">
                    <div className="w-full border-t border-gray-200" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-sm text-gray-400">
                      or sign up with
                    </span>
                  </div>

                  <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-full py-3 font-medium hover:bg-gray-50 transition">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      className="w-5 h-5"
                    />
                    Sign up with Google
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <span
                      onClick={() => setMode("login")}
                      className="font-semibold text-black cursor-pointer underline"
                    >
                      Log In
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
