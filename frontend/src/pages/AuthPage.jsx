import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, CircleUserRound, Dumbbell, LockKeyhole, Mail, UserRound } from "lucide-react";
import { LOGIN, REGISTER } from "@/constants/testIds/auth";
import { useAuth } from "@/context/AuthContext";

const initialLogin = { email: "", password: "" };
const initialRegister = { name: "", email: "", password: "", confirmPassword: "" };

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const [loginForm, setLoginForm] = useState(initialLogin);
  const [registerForm, setRegisterForm] = useState(initialRegister);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const heading = useMemo(() => (mode === "login" ? "Member Access" : "Create Account"), [mode]);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);

    try {
      if (mode === "login") {
        await auth.login(loginForm);
        toast.success("Welcome back. You are signed in.");
      } else {
        if (registerForm.password !== registerForm.confirmPassword) {
          toast.error("Passwords do not match.");
          return;
        }

        await auth.register({
          name: registerForm.name,
          email: registerForm.email,
          password: registerForm.password,
        });
        toast.success("Account created successfully.");
      }

      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Authentication failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div data-testid="auth-page" className="pt-28 sm:pt-32 pb-16 bg-[#050505] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        <div className="relative overflow-hidden border border-white/10 bg-black/60 p-8 sm:p-10">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1400&q=80)", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/95" />

          <div className="relative">
            <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-[#D90429] transition-colors">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <div className="mt-8 inline-flex items-center gap-2 text-[#D90429] uppercase tracking-[0.4em] text-xs font-bold">
              <Dumbbell size={14} /> Members Area
            </div>
            <h1 className="font-heading text-white text-6xl sm:text-7xl leading-[0.9] uppercase mt-6">
              {heading}
            </h1>
            <p className="mt-6 text-white/70 max-w-xl text-base sm:text-lg leading-relaxed">
              Use your account to manage member access, view recent enquiries, and keep the gym lead pipeline connected to MongoDB.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 p-4">
                <div className="text-xs uppercase tracking-widest text-white/50">JWT</div>
                <div className="text-white font-semibold mt-2">Signed session</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4">
                <div className="text-xs uppercase tracking-widest text-white/50">MongoDB</div>
                <div className="text-white font-semibold mt-2">Leads stored</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4">
                <div className="text-xs uppercase tracking-widest text-white/50">Security</div>
                <div className="text-white font-semibold mt-2">Protected route</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass border border-white/10 p-6 sm:p-8 self-center">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-[#D90429] font-bold">Authentication</div>
              <h2 className="font-heading text-white text-4xl uppercase mt-2">{heading}</h2>
            </div>
            <div className="w-14 h-14 border border-white/10 flex items-center justify-center text-[#D90429]">
              <CircleUserRound size={28} />
            </div>
          </div>

          <div className="flex gap-3 mb-8">
            <button
              type="button"
              data-testid="auth-toggle-login"
              onClick={() => setMode("login")}
              className={`flex-1 uppercase tracking-widest text-xs font-bold py-3 border transition-colors ${mode === "login" ? "bg-[#D90429] border-[#D90429] text-white" : "bg-transparent border-white/10 text-white/60 hover:text-white hover:border-[#D90429]"}`}
            >
              Login
            </button>
            <button
              type="button"
              data-testid="auth-toggle-register"
              onClick={() => setMode("register")}
              className={`flex-1 uppercase tracking-widest text-xs font-bold py-3 border transition-colors ${mode === "register" ? "bg-[#D90429] border-[#D90429] text-white" : "bg-transparent border-white/10 text-white/60 hover:text-white hover:border-[#D90429]"}`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <label className="block">
                <span className="sr-only">Name</span>
                <div className="relative">
                  <UserRound className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                  <input
                    required
                    data-testid={REGISTER.nameInput}
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm((current) => ({ ...current, name: e.target.value }))}
                    placeholder="Full Name"
                    className="w-full bg-[#111] border border-white/10 focus:border-[#D90429] outline-none text-white pl-12 pr-4 py-4 rounded-none"
                  />
                </div>
              </label>
            )}

            <label className="block">
              <span className="sr-only">Email</span>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input
                  required
                  type="email"
                  data-testid={mode === "login" ? LOGIN.emailInput : REGISTER.emailInput}
                  value={mode === "login" ? loginForm.email : registerForm.email}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (mode === "login") {
                      setLoginForm((current) => ({ ...current, email: value }));
                    } else {
                      setRegisterForm((current) => ({ ...current, email: value }));
                    }
                  }}
                  placeholder="Email Address"
                  className="w-full bg-[#111] border border-white/10 focus:border-[#D90429] outline-none text-white pl-12 pr-4 py-4 rounded-none"
                />
              </div>
            </label>

            <label className="block">
              <span className="sr-only">Password</span>
              <div className="relative">
                <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input
                  required
                  type="password"
                  data-testid={mode === "login" ? LOGIN.passwordInput : REGISTER.passwordInput}
                  value={mode === "login" ? loginForm.password : registerForm.password}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (mode === "login") {
                      setLoginForm((current) => ({ ...current, password: value }));
                    } else {
                      setRegisterForm((current) => ({ ...current, password: value }));
                    }
                  }}
                  placeholder="Password"
                  className="w-full bg-[#111] border border-white/10 focus:border-[#D90429] outline-none text-white pl-12 pr-4 py-4 rounded-none"
                />
              </div>
            </label>

            {mode === "register" && (
              <label className="block">
                <span className="sr-only">Confirm Password</span>
                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                  <input
                    required
                    type="password"
                    data-testid={REGISTER.passwordConfirmInput}
                    value={registerForm.confirmPassword}
                    onChange={(e) => setRegisterForm((current) => ({ ...current, confirmPassword: e.target.value }))}
                    placeholder="Confirm Password"
                    className="w-full bg-[#111] border border-white/10 focus:border-[#D90429] outline-none text-white pl-12 pr-4 py-4 rounded-none"
                  />
                </div>
              </label>
            )}

            {mode === "login" ? (
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/50">
                <button type="button" data-testid={LOGIN.forgotPasswordLink} className="hover:text-[#D90429] transition-colors">
                  Forgot Password
                </button>
                <button type="button" data-testid={LOGIN.registerLink} onClick={() => setMode("register")} className="hover:text-[#D90429] transition-colors">
                  Create Account
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/50">
                <button type="button" data-testid={REGISTER.loginLink} onClick={() => setMode("login")} className="hover:text-[#D90429] transition-colors">
                  Back to Login
                </button>
                <span>Create your member account</span>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              data-testid={mode === "login" ? LOGIN.submitButton : REGISTER.submitButton}
              className="w-full bg-[#D90429] hover:bg-[#EF233C] disabled:opacity-60 text-white uppercase tracking-widest font-bold text-sm py-4 transition-all hover:-translate-y-0.5 red-glow"
            >
              {submitting ? "Working..." : mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}