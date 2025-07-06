import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Code,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import PageAnimator from "@/components/PageAnimator";

const Particle = ({ style }) => (
  <motion.div className="particle" style={style} />
);

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { toast } = useToast();
  const controls = useAnimation();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: `${Math.random() * 100}vw`,
      y: `${Math.random() * 100}vh`,
      "--x-end": `${Math.random() * 100}vw`,
      "--y-end": `${Math.random() * 100}vh`,
      size: `${Math.random() * 3 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 5 + 5}s`,
    }));
    setParticles(newParticles);
    controls.start("visible");
  }, [controls]);

  const handleDownloadResume = () => {
    toast({ title: t("toasts.resumeDownload") });
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1iQcs7caYYsIcmIf5fJ2iKaOnOd6A_FqO/view?usp=sharing";
    link.setAttribute("download", "NituPal_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/nitu-pal",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const skills = [
    { name: t("home.skills.reactNative"), level: 95, icon: Smartphone },
    { name: t("home.skills.jsTs"), level: 90, icon: Code },
    { name: t("home.skills.mobileArch"), level: 88, icon: Zap },
    { name: t("home.skills.crossPlatform"), level: 92, icon: Smartphone },
  ];

  const stats = [
    { number: "3+", label: t("home.stats.experience") },
    { number: "3+", label: t("home.stats.appsDelivered") },
    { number: "10+", label: t("home.stats.technologies") },
    { number: "100%", label: t("home.stats.satisfaction") },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <PageAnimator>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
      </Helmet>

      <img
        class="page-background"
        alt="Abstract orange and black geometric background"
        src="https://images.unsplash.com/photo-1698919585695-546e4a31fc8f"
      />
      <div className="page-overlay"></div>

      {particles.map((p, i) => (
        <Particle
          key={i}
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      <div className="relative z-10 min-h-screen">
        <section className="min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <motion.div
                  className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden glass-effect glow-effect floating-animation"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    alt={t("name")}
                    className="w-full h-full object-cover"
                    src="https://storage.googleapis.com/hostinger-horizons-assets-prod/83f89197-9981-497e-9dd5-e1ff5625aef0/89b63d35f4d04d90d7bf48057e6ef3fd.png"
                  />
                </motion.div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                {t("home.greeting")}{" "}
                <span className="gradient-text">{t("name")}</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
                dangerouslySetInnerHTML={{
                  __html: t("home.intro", {
                    ns: "translation",
                    interpolation: { escapeValue: false },
                  })
                    .replace(
                      "<1>",
                      '<span class="text-amber-400 font-semibold">'
                    )
                    .replace("</1>", "</span>"),
                }}
              />

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleDownloadResume}
                >
                  <Download className="mr-2 h-5 w-5" />{" "}
                  {t("home.downloadResume")}
                </Button>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass-effect border-white/30 text-white hover:bg-white/10 rounded-full"
                    onClick={() =>
                      window.open(
                        "https://github.com/nitupal12",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass-effect border-white/30 text-white hover:bg-white/10 rounded-full"
                    onClick={handleLinkedInClick}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  {/* <Button variant="outline" size="lg" className="glass-effect border-white/30 text-white hover:bg-white/10 rounded-full" onClick={() => navigate('/contact')}>
                    <Mail className="h-5 w-5" />
                  </Button> */}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center glass-effect rounded-xl p-6 hover:bg-black/50 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                {t("home.expertiseTitle")}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t("home.expertiseDescription")}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="tech-card text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        viewport={{ once: true }}
                        className="skill-bar h-2 rounded-full"
                      ></motion.div>
                    </div>
                    <span className="text-sm text-gray-400">
                      {skill.level}%
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                {t("home.ctaTitle")}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {t("home.ctaDescription")}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate("/contact")}
              >
                {t("home.getInTouch")} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageAnimator>
  );
};

export default Home;
