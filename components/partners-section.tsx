"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2 } from "lucide-react"

interface Partner {
  name: string
  logo: string
  initials: string
}

const partners: Partner[] = [
  { name: "Linde Bangladesh Ltd.", logo: "https://media.licdn.com/dms/image/v2/D5622AQECLS0tw94eAA/feedshare-shrink_800/feedshare-shrink_800/0/1711384773442?e=2147483647&v=beta&t=39JsbmTP5_QkfQZByVyE4TmghYrWqRnVo9_Rh1jPujE", initials: "LB" },
  { name: "Lafarge Holcim", logo: "https://www.lafargeholcim.com.bd/sites/bangladesh/files/2023-04/lafargeholcim_logo_bangladesh_0.png", initials: "LH" },
  { name: "Heidelberg Cement", logo: "https://heidelbergmaterialsbd.com/themes/heidelberg/assets/images/HeidelbergMaterials_new.svg", initials: "HC" },
  { name: "Bata", logo: "https://www.batabd.com/cdn/shop/files/logo-2_d42c63ce-1f56-4af2-a68f-a4cc3a91bd07.png?v=1614332440", initials: "BT" },
  { name: "Duncan Brothers", logo: "https://www.duncanbd.com/themes/default/images/logo.jpg", initials: "DB" },
  { name: "Transcom", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Transcom_logo.png", initials: "TC" },
  { name: "RAK Ceramics", logo: "https://upload.wikimedia.org/wikipedia/en/5/57/RAK_Ceramics_logo.svg", initials: "RK" },
  { name: "STS Group", logo: "https://stsgroupbd.com/wp-content/uploads/2023/06/STS-Logo1-1-1.png", initials: "SG" },
  { name: "United Finance Ltd.", logo: "https://www.ufplc.com/Images/update-logo.png", initials: "UF" },
  { name: "Rahimafrooz Bangladesh Ltd.", logo: "https://www.rahimafrooz.com/favicon.ico", initials: "RB" },
  { name: "ACI Logistics", logo: "https://aci-bd.com/favicon.ico", initials: "AL" },
  { name: "Seven Circle Cement", logo: "https://dhakayellowpages.com/uploads/logo/172238.png", initials: "SC" },
  { name: "Kazi Farms Group", logo: "https://www.kazifarms.com/sites/default/files/brand_01.png", initials: "KF" },
  { name: "Apollo Hospital", logo: "https://evercare-assets.com/_next/image?url=https%3A%2F%2Fevercare-assets.com%2F_next%2Fstatic%2Fmedia%2FEvercare-Hospita-Logo.8da1a2a3.png&w=128&q=75", initials: "AH" },
  { name: "Link3 Technologies", logo: "https://link3.net/favicon.ico", initials: "L3" },
  { name: "Bashundhara Group", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Bashundhara_Group.svg", initials: "BG" },
  { name: "Standard MH Group", logo: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/527983104_3005883209611603_2807294826646288217_n.jpg?stp=dst-jpg_tt6&cstp=mx400x400&ctp=s400x400&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=q1KznpUwPfQQ7kNvwGt06ex&_nc_oc=Adr5Ck5JyE_pI7XFypj2pXwQXUvS33iaetbgHMZCaGVd-HZ6BrWJSWtLWuDJUvwl5ec&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=FhU1dJp441mJuqw3sWay3w&_nc_ss=7b289&oh=00_Af__0oR1eQyYIIKduevwtmCp_2oMX9zDsLk8ZTu9uHC6xg&oe=6A3D7136", initials: "SM" },
]

function LogoPill({ partner }: { partner: Partner }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="relative mx-6 flex shrink-0 items-center">
      {imgError ? (
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
          {partner.initials}
        </span>
      ) : (
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-16 w-auto max-w-[200px] object-contain"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  )
}

function MarqueeRow({
  partners,
  reverse,
  duration,
}: {
  partners: Partner[]
  reverse?: boolean
  duration: number
}) {
  const tripled = [...partners, ...partners, ...partners]

  return (
    <div className="relative flex overflow-hidden">
      <div
        className="flex shrink-0"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {tripled.map((partner, i) => (
          <LogoPill key={`${partner.name}-${i}`} partner={partner} />
        ))}
      </div>
      <div
        className="flex shrink-0"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {tripled.map((partner, i) => (
          <LogoPill key={`clone-${partner.name}-${i}`} partner={partner} />
        ))}
      </div>
    </div>
  )
}

export function PartnersSection() {
  const mid = Math.ceil(partners.length / 2)
  const rowA = partners.slice(0, mid)
  const rowB = partners.slice(mid)

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl space-y-4 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            <Building2 className="h-3.5 w-3.5" />
            Our Network
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-muted-foreground">
            Partnering with Bangladesh&apos;s most prestigious organizations to
            deliver exceptional talent solutions
          </p>
        </motion.div>
      </div>

      <div className="relative mt-16 space-y-10">
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <MarqueeRow partners={rowA} duration={45} />
        <MarqueeRow partners={rowB} reverse duration={50} />
      </div>
    </section>
  )
}
