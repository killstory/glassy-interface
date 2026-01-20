import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Briefcase, FlaskConical, BarChart3, Users, Leaf } from 'lucide-react';

// Current/Recent roles matching experiences
const currentRoles = [
  {
    name: 'AMS Fund',
    role: 'Chief Investment Officer',
    slug: 'ams-fund',
    icon: BarChart3,
    current: true
  },
  {
    name: 'Spectre Labs',
    role: 'Co-Founder',
    slug: 'spectre-labs',
    icon: FlaskConical,
    current: true
  },
  {
    name: 'GRVT',
    role: 'Consultant',
    slug: 'grvt-exchange',
    icon: Briefcase,
    current: true
  },
  {
    name: 'Talus Labs',
    role: 'Regional Lead',
    slug: 'talus-labs',
    icon: Users,
    current: true
  }
];

export const IntroSection = () => {
  return (
    <section className="bg-background px-6 md:px-12 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Statement */}
        <motion.div
          className="max-w-5xl mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <motion.p
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tighter mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            I'm <span className="text-primary font-serif italic">Met</span>.
          </motion.p>

          {/* Description with visual hierarchy */}
          <div className="space-y-6 border-l-2 border-primary/30 pl-6 md:pl-8">
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-snug"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Specializing in{" "}
              <span className="text-primary">high level fund management</span> and{" "}
              <span className="text-primary">operational excellence</span>.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I combine rigorous risk assessment with strategic yield optimization,
              while actively shaping the Web3 landscape through{" "}
              <span className="text-foreground font-medium">regional leadership</span> and advanced{" "}
              <span className="text-foreground font-medium">AI research</span>.
            </motion.p>
          </div>
        </motion.div>

        {/* Current Roles */}
        <div>
          <motion.p
            className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Currently Working With
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentRoles.map((role, i) => (
              <motion.div
                key={role.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={`/experience/${role.slug}`}
                  className="group block p-5 bg-muted/20 hover:bg-muted/40 border border-border/50 hover:border-primary/50 rounded-xl transition-all cursor-scale"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <role.icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {role.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{role.role}</p>
                  {role.current && (
                    <span className="inline-block mt-3 px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      Present
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;