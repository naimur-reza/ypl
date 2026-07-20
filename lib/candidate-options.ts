/** Shared option lists for CV submission and admin candidate forms */

export const POSITIONS = [
  "Strategic Level",
  "Management Level",
  "Mid Level",
  "Entry Level",
] as const;

export const INDUSTRIES = [
  "Manufacturing",
  "Service",
  "Financial Institutions",
  "Real Estate & Construction",
  "Telecom",
  "Energy & Power",
  "Healthcare",
  "Education",
  "Retail & E-commerce",
  "Transportation & Logistics",
  "Hospitality & Tourism",
  "Media & Entertainment",
  "Agriculture",
  "Government & NGO",
] as const;

export const QUALIFICATIONS_ACADEMIC = [
  "BBA / MBA",
  "BSc / MSc",
  "BA / MA",
  "BCom / MCom",
  "BEng / MEng",
  "LLB / LLM",
  "MBBS / MD",
  "PhD",
  "Diploma",
  "HSC",
  "SSC",
] as const;

export const QUALIFICATIONS_PROFESSIONAL = [
  "CA (ICAB)",
  "CMA (ICMAB)",
  "ACCA",
  "CIMA",
  "CFA",
  "PMP",
  "AWS Certified",
  "Google Certified",
  "Cisco Certified",
  "ITIL",
] as const;

export const AVAILABILITY = ["Immediate", "15 Days", "1 Month+"] as const;

export const LOCATIONS = [
  "Dhaka",
  "Chattogram",
  "Sylhet",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Rangpur",
  "Mymensingh",
  "Outside Bangladesh",
] as const;

export const JOB_TYPES = [
  "Full-time",
  "Part-time",
  "Contract",
  "Temporary",
  "Internship",
  "Freelance",
] as const;

export const NOTICE_PERIODS = [
  "Immediate",
  "15 Days",
  "1 Month",
  "2 Months",
  "3 Months",
] as const;

/** Admin form labels use slightly different export names */
export const ACADEMIC_QUALIFICATIONS = [...QUALIFICATIONS_ACADEMIC];
