"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2, Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { SITE_CONFIG } from "@/constants/site";
import { SOCIAL_LINKS } from "@/constants/navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { Button } from "@/components/ui/Button";
import { submitContactForm } from "@/services/contact";
import { cn } from "@/lib/utils";

const iconMap = {
  linkedin: LinkedInIcon,
  mail: Mail,
  phone: Phone,
};

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      await submitContactForm(data);
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 transition-all duration-300 focus:border-gold/50 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-gold/30 focus:shadow-[0_0_20px_rgba(212,175,55,0.08)]";

  return (
    <section className="relative pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2" direction="left">
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {SOCIAL_LINKS.map((link) => {
                    const Icon = iconMap[link.icon as keyof typeof iconMap];
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white/60 transition-colors hover:text-gold"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10">
                          <Icon className="h-[18px] w-[18px]" />
                        </div>
                        <div>
                          <p className="text-sm text-white/40">{link.name}</p>
                          <p className="text-sm">{link.href.replace(/https?:\/\/(www\.)?/, "").replace("mailto:", "")}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <p className="text-sm text-white/50">
                  Based in <span className="text-white">{SITE_CONFIG.location}</span>
                </p>
                <p className="mt-2 text-sm text-white/50">
                  Open to remote opportunities worldwide.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-3" direction="right" delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-xl md:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-white/60">
                    Name
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    className={cn(inputClasses, errors.name && "border-red-500/50")}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-white/60">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={cn(inputClasses, errors.email && "border-red-500/50")}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm text-white/60">
                  Subject
                </label>
                <input
                  id="subject"
                  {...register("subject")}
                  className={cn(inputClasses, errors.subject && "border-red-500/50")}
                  placeholder="Project inquiry"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-white/60">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={cn(inputClasses, "resize-none", errors.message && "border-red-500/50")}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              <MagneticButton className="w-full sm:w-auto">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "loading" || status === "success"}
                  className="w-full sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </MagneticButton>

              <AnimatePresence>
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-red-400"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
