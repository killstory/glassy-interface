import { ArrowUpRight } from "lucide-react";
import { FaXTwitter, FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { motion, type Variants } from "framer-motion";

const socials = [{
  name: "LinkedIn",
  href: "https://www.linkedin.com/in/paramet-moonkaew",
  icon: FaLinkedin
}, {
  name: "X",
  href: "https://x.com/killstoryyy",
  icon: FaXTwitter
}, {
  name: "Telegram",
  href: "http://t.me/killstory789",
  icon: FaTelegram
}, {
  name: "WhatsApp",
  href: "https://wa.link/eo3n58",
  icon: FaWhatsapp
}, {
  name: "GitHub",
  href: "https://github.com/killstory",
  icon: FaGithub
}];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const socialVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4
    }
  }
};

export function Footer() {
  return <footer id="contact" className="bg-background text-foreground px-6 md:px-12 pt-24 lg:pt-32 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Combined CTA + Contact Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left: CTA */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[0.95] tracking-tight mb-8">
              Let's build
              <br />
              <span className="text-primary">something amazing</span>
              <br />
              together.
            </h2>
            <motion.a 
              href="mailto:paramet.moon@gmail.com" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:brightness-110 transition-all cursor-scale"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right: Connect + Contact */}
          <motion.div className="flex flex-col justify-center" variants={itemVariants}>
            {/* Contact Info */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                Contact
              </h3>
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.a variants={itemVariants} href="mailto:paramet.moon@gmail.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors cursor-scale group text-lg">
                  <span className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span>paramet.moon@gmail.com</span>
                </motion.a>
                <motion.a variants={itemVariants} href="tel:+66819841878" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors cursor-scale group text-lg">
                  <span className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span>+66 81 984 1878</span>
                </motion.a>
                <motion.div variants={itemVariants} className="flex items-center gap-4 text-muted-foreground text-lg">
                  <span className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center">
                    <span className="text-sm">📍</span>
                  </span>
                  <span>Thailand</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                Connect
              </h3>
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {socials.map((social, index) => (
                  <motion.a 
                    key={social.name} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center gap-2 px-5 py-3 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-full transition-all cursor-scale"
                    variants={socialVariants}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="w-full h-px bg-border mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Bottom Bar */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Paramet.</h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Strategic capital management and Web3 advisory.
            </p>
          </div>
          <p className="text-muted-foreground text-sm">© 2025 Paramet Moonkaew. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>;
}