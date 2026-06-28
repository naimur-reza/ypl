"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  Award,
  Globe,
  Clock,
  ArrowRight,
  Linkedin,
  Twitter,
  Briefcase,
  Target,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Animation Variants ---
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
} as any;

// --- Data ---
const stats = [
  { value: "28+", label: "Years Active", icon: Clock },
  { value: "3,000+", label: "Placements", icon: Users },
  { value: "500+", label: "Companies", icon: Briefcase },
  { value: "98%", label: "Satisfaction", icon: Award },
];

const pillars = [
  {
    title: "Our Mission",
    description:
      "To provide exceptional HR solutions by empowering businesses with innovative recruitment, training, and management services — delivering tailored strategies that align with each client's unique needs and building partnerships that last.",
    icon: Target,
    tag: "Mission",
    gradientBar: "from-amber-400 to-orange-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    tagBg: "bg-amber-50",
    tagText: "text-amber-600",
    numberColor: "text-amber-100",
  },
  {
    title: "Our Vision",
    description:
      "To become a globally recognized HR consultancy, setting benchmarks in delivering cutting-edge solutions that transform organizations. We aspire to lead in building agile, forward-thinking workforces ready for tomorrow.",
    icon: Lightbulb,
    tag: "Vision",
    gradientBar: "from-violet-400 to-purple-600",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    tagBg: "bg-violet-50",
    tagText: "text-violet-600",
    numberColor: "text-violet-100",
  },
];

const values = [
  {
    icon: Users,
    title: "People First",
    description: "Every strategy begins and ends with people.",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    border: "border-sky-100",
    hover: "hover:border-sky-300 hover:shadow-sky-100",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We raise the bar with every engagement.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    border: "border-amber-100",
    hover: "hover:border-amber-300 hover:shadow-amber-100",
  },
  {
    icon: Globe,
    title: "Integrity",
    description: "Transparency and ethics are non-negotiable.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    border: "border-emerald-100",
    hover: "hover:border-emerald-300 hover:shadow-emerald-100",
  },
  {
    icon: Clock,
    title: "Agility",
    description: "Speed and precision when it matters most.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    border: "border-violet-100",
    hover: "hover:border-violet-300 hover:shadow-violet-100",
  },
];

const initialTeam = [
  {
    name: "Mazida Yasmin",
    role: "Managing Director",
    bio: "Leading YES Pvt Ltd with a focus on practical HR solutions and lasting client partnerships.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Abu Musa Mohammad Enamullah Sayeed",
    role: "Chairman",
    bio: "Guiding the company's strategic direction and commitment to trusted recruitment excellence.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Saifullah Sayeed Azmi Oisharjo",
    role: "Director",
    bio: "Supporting operations and growth initiatives across the company's HR consultancy services.",
    image: "/placeholder-user.jpg",
  },
];

// ─── Sub-Components ─────────────────────────────────────────────────────────────

function StatBar() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-stone-200"
    >
      {stats.map((s) => (
        <motion.div
          key={s.label}
          variants={fadeUp}
          className="group flex flex-col items-center justify-center gap-2 px-8 py-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-amber-50/0 group-hover:bg-amber-50/60 transition-colors duration-500" />
          <s.icon className="h-5 w-5 text-amber-500 opacity-70" />
          <span className="text-5xl font-black tracking-tighter text-stone-900">
            {s.value}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">
            {s.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function PillarCard({ item, i }: { item: (typeof pillars)[0]; i: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      variants={fadeUp}
      className="group relative rounded-3xl border border-stone-200 bg-white p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
    >
      {/* Gradient top bar on hover */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${item.gradientBar} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      {/* Large faint corner number */}
      <span
        className={`absolute top-6 right-8 text-8xl font-black ${item.numberColor} select-none leading-none`}
      >
        0{i + 1}
      </span>

      <div
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-2xl mb-8",
          item.iconBg,
        )}
      >
        <Icon className={cn("h-6 w-6", item.iconColor)} />
      </div>

      <div
        className={cn(
          "mb-4 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]",
          item.tagBg,
          item.tagText,
        )}
      >
        {item.tag}
      </div>

      <h3 className="text-2xl font-bold text-stone-900 mb-4 leading-tight">
        {item.title}
      </h3>
      <p className="text-[15px] leading-relaxed text-stone-500">
        {item.description}
      </p>
    </motion.div>
  );
}

function ValueCard({ item }: { item: (typeof values)[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "group relative rounded-2xl border bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg",
        item.border,
        item.hover,
      )}
    >
      <div
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-xl mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110",
          item.iconBg,
        )}
      >
        <item.icon className={cn("h-6 w-6", item.iconColor)} />
      </div>
      <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
      <p className="text-sm text-stone-500 leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

function TeamCard({
  member,
  index,
}: {
  member: (typeof initialTeam)[0];
  index: number;
}) {
  return (
    <motion.div variants={fadeUp} className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-100 mb-5 shadow-sm">
        <Image
          src={member.image || "/placeholder-user.jpg"}
          alt={member.name}
          fill
          className="object-cover   transition-all duration-700 scale-105 group-hover:scale-100"
        />
        {/* Social overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
          <div className="flex gap-2">
            <button className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-amber-500 transition-colors duration-200">
              <Linkedin className="h-3.5 w-3.5" />
            </button>
            <button className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-amber-500 transition-colors duration-200">
              <Twitter className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
        {/* Index badge */}
        <div className="absolute top-3 left-3 h-7 w-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
          <span className="text-[10px] font-black text-amber-600">
            0{index + 1}
          </span>
        </div>
      </div>
      <h3 className="text-base font-bold text-stone-900">{member.name}</h3>
      <p className="text-sm font-semibold text-amber-600 mb-1.5">
        {member.role}
      </p>
      <p className="text-sm text-stone-500 leading-relaxed">{member.bio}</p>
    </motion.div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────────

export default function AboutPage({ dbTeam = [] }: { dbTeam?: any[] }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const teamMembers = dbTeam.length > 0 ? dbTeam : initialTeam;

  return (
    <main
      className="bg-[#fafaf8] text-stone-900 min-h-screen overflow-hidden"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      {/* ══════════════ HERO ══════════════ */}
      {/* Hero stays dark for drama — it's a full-bleed photo section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-stone-950"
      >
        <motion.div style={{ y: imgY }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
            alt="Team collaboration"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 via-stone-950/70 to-stone-950" />
        </motion.div>

        {/* Warm glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] rounded-full bg-amber-400/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-orange-300/10 blur-[100px] pointer-events-none" />

        <motion.div
          style={{ y: textY }}
          className="relative z-10 max-w-6xl px-6 text-center"
        >
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div
              variants={fadeUp}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                Est. 1997 · Dhaka, Bangladesh
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[clamp(3.5rem,12vw,9rem)] font-black tracking-tighter leading-[0.9] mb-6"
            >
              <span className="block text-white">Human</span>
              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-orange-300 bg-clip-text text-transparent italic">
                Capital.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-12"
            >
              YES Pvt Ltd — Bangladesh's most agile HR consultancy. We don't
              fill seats.{" "}
              <span className="text-white/80">
                We build the teams that build the future.
              </span>
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact">
                <button className="group flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-sm font-bold text-stone-900 transition-all duration-300 hover:bg-amber-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.35)]">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <Link href="/jobs">
                <button className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white/60 transition-all duration-300 hover:border-white/40 hover:text-white">
                  Browse Opportunities
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ChevronDown className="h-4 w-4 text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════ STATS BAR ══════════════ */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl">
          <StatBar />
        </div>
      </section>

      {/* ══════════════ WHO WE ARE ══════════════ */}
      <section className="py-32 px-6 bg-[#fafaf8]">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                alt="Strategic meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/10 via-transparent to-violet-400/10" />
            </div>
            {/* Floating stat badge */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-stone-100 bg-white p-6 shadow-2xl">
              <p className="text-4xl font-black text-amber-500">28+</p>
              <p className="text-xs text-stone-400 mt-1 uppercase tracking-widest">
                Years of excellence
              </p>
            </div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-100/80 blur-3xl -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500 block mb-4">
                Who We Are
              </span>
              <h2 className="text-5xl sm:text-6xl font-black tracking-tighter leading-[0.95] text-stone-900">
                Bangladesh's <br />
                <span className="italic text-stone-400">most agile</span> <br />
                HR partner.
              </h2>
            </div>
            <div className="space-y-5 text-[16px] text-stone-500 leading-relaxed">
              <p>
                YES Pvt Ltd is a dynamic provider of recruiting consultations
                and HR solutions in Bangladesh. Our value proposition is a high
                level of thought leadership coupled with practical solutions
                that deliver real impact on people and organizational
                performance.
              </p>
              <p>
                Since our founding, we've evolved into a multi-sector talent
                powerhouse — navigating the dynamic landscape of recruitment
                with expertise, empathy, and relentless innovation. We blend
                decades of "gut feel" with cutting-edge talent intelligence.
              </p>
              <p>
                We don't just fill roles. We architect high-performance teams
                that become the competitive advantage of tomorrow's leaders.
              </p>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="h-px flex-1 bg-stone-200" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
                Since 1997
              </span>
              <div className="h-px flex-1 bg-stone-200" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ MISSION & VISION ══════════════ */}
      <section className="py-24 px-6 bg-stone-50 border-y border-stone-100">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500 block mb-4">
                Our Foundation
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight text-stone-900">
                Mission & Vision
              </h2>
            </div>
            <p className="text-stone-400 max-w-sm text-[15px] leading-relaxed">
              The principles that guide every partnership, every placement,
              every decision we make.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {pillars.map((item, i) => (
              <PillarCard key={item.tag} item={item} i={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ VALUES ══════════════ */}
      <section className="py-24 px-6 bg-[#fafaf8]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500 block mb-4">
              What Drives Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-stone-900">
              Built on{" "}
              <span className="italic text-stone-400">foundations</span> of
              trust.
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {values.map((v) => (
              <ValueCard key={v.title} item={v} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ TEAM ══════════════ */}
      <section className="py-24 px-6 border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500 block mb-4">
                Leadership
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight text-stone-900">
                The minds
                <br />
                <span className="italic text-stone-400">behind</span> YES.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/careers">
                <button className="flex items-center gap-2 rounded-full border border-stone-300 px-7 py-3.5 text-sm font-bold text-stone-600 transition-all hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50">
                  Join Our Team <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((m, i) => (
              <TeamCard key={m.name} member={m} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="px-6 py-24 bg-stone-50 border-t border-stone-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl relative overflow-hidden rounded-[2.5rem] bg-stone-900 px-8 sm:px-16 py-20 sm:py-24 text-center shadow-2xl"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-amber-400/20 blur-[80px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[300px] h-[150px] bg-orange-400/15 blur-[60px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block mb-6 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
              Let's Build Together
            </span>
            <h2 className="text-5xl sm:text-6xl font-black tracking-tighter leading-[0.95] mb-6 text-white">
              Ready to evolve your
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent italic">
                talent strategy?
              </span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed mb-10 max-w-xl mx-auto">
              Let's craft the workforce that defines your organization's next
              chapter. We're ready when you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="group flex items-center gap-2 rounded-full bg-amber-400 px-9 py-4 text-sm font-bold text-stone-900 transition-all duration-300 hover:bg-amber-300 hover:shadow-[0_0_50px_rgba(251,191,36,0.4)]">
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <Link href="/jobs">
                <button className="flex items-center gap-2 rounded-full border border-white/20 px-9 py-4 text-sm font-bold text-white/60 transition-all hover:border-white/40 hover:text-white">
                  Explore Opportunities
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
