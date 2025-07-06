import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Calendar, MapPin, ExternalLink, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import PageAnimator from "@/components/PageAnimator";

const Experience = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const experiences = [
    {
      title: "Software Developer",
      company: "Softnotch",
      location: "Remote",
      duration: "Nov 2024 - Present",
      description:
        "Everup (android | ios | react-native) - UK’s first prize-linked money app, combining gaming and saving to create a new customer experience",
      downloads: "🚀 Downloads - Android - 10+ Thousands | IOS - 20+ Thousands",
      achievements: [
        "Integrated existing cashback flow with new games and created a new reward mechanism that can reward the user in Ethereum & Bitcoins. Which can be used via a debit card",
        "Added a cashback coupon system as a reward mechanism for users. That can be used on big merchants such as Amazon, IKEA and many more",
        "Led a team of 5 developers on cross-platform projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with UX/UI teams to enhance user experience",
      ],
      technologies: [
        "React Native",
        "TypeScript",
        "Redux",
        "Firebase",
        "AWS",
        "Android",
        "IOS",
      ],
    },
    {
      title: "Junior Software Developer",
      company: "Softnotch",
      location: "Remote",
      duration: "Jan 2023 - Nov 2024",
      description:
        "Zipp (android | ios | react-native) - Invest in direct mutual funds across 32 fund houses",
      downloads: "🚀 Downloads - Android - 50+ Thousands | IOS - 10+ Thousands",
      achievements: [
        "Design and Integrated payment flow via Razorpay, Billdesk and other SDKs Making SDKs & .aar build files for integrating with other apps",
        "Reduced development time by 30% using reusable components",
        "Collaborated with UX/UI teams to enhance user experience",
        "Responsible for developing and maintaining build, deployment scripts written in Shell/Perl for Test, Staging and Production environments",
      ],
      technologies: [
        "React Native",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Android",
        "IOS",
      ],
    },
    {
      title: "Intern",
      company: "Softnotch",
      location: "Remote",
      duration: "March 2022 - Jan 2023",
      description:
        "Firstblood (android) - Create or join PUBG tournaments with real players online & Win Cashback money & rewards anytime, anywhere!",
      downloads: "🚀 Downloads - Android - 50+ Thousands | IOS - 20+ Thousands",
      achievements: [
        "Work with an established team of developers and interact with product managers, marketing teams and designers",
        "Knowledge of modern web development frameworks and tools Integrating cryptocurrency as a payment system",
      ],
      technologies: ["Android", "JavaScript", "Node.js"],
    },
  ];

  const projects = [
    {
      title: "Everup (android | ios | react-native)",
      description:
        "UK’s first prize-linked money app, combining gaming and saving to create a new customer experience ",
      technologies: [
        "React Native",
        "TypeScript",
        "Redux",
        "Firebase",
        "AWS",
        "Android",
        "IOS",
      ],
      features: [
        "Payment Integration",
        "Online mutiplayer games",
        "Push Notifications",
        "Real-time Updates",
        "Offline Support",
      ],
      image:
        "https://lh3.googleusercontent.com/93UPTTtFWd7OoV6QVhm4W9OJ1I0BQYw__8Q9bL8ag5bfiBRyPIl-TrkyB1R0qzFmX13yMfrRR-57vrmsqRRQvc-frZV3UOwGahg=w780",
    },
    {
      title: "Zipp (android | ios | react-native)",
      description: "Invest in direct mutual funds across 32 fund houses",
      technologies: [
        "React Native",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Android",
        "IOS",
      ],
      features: [
        "Invest in mutual funds",
        "KYC life cycle",
        "Websocket",
        "Social Features",
      ],
      image:
        "https://cdn.tracxn.com/images/seo/social/companies/finzipp-overview-1708686953523.webp",
    },
    {
      title: "Firstblood (android)",
      description:
        "Create or join PUBG tournaments with real players online & Win Cashback money & rewards anytime, anywhere!",
      technologies: ["Android", "JavaScript", "Node.js"],
      features: [
        "Mutiplayer games",
        "Host competition",
        "Websocket",
        "Cashback",
      ],
      image:
        "https://media.licdn.com/dms/image/v2/C4D1BAQHqg5VWoGDxXw/company-background_10000/company-background_10000/0/1622574613970/firstblood_cover?e=2147483647&v=beta&t=DvCLFozhN69C9Rxr1PiJW9etixGtYokv9olxLYea67M",
    },
  ];

  const skills = [
    {
      category: "Mobile Development",
      items: [
        "React Native",
        "Expo",
        "Native Modules",
        "Performance Optimization",
      ],
    },
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Java", "Swift"],
    },
    {
      category: "State Management",
      items: ["Redux", "Context API", "MobX", "Zustand"],
    },
  ];

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

  return (
    <PageAnimator>
      <Helmet>
        <title>
          {t("meta.title")} | {t("nav.experience")}
        </title>
        <meta name="description" content={t("experience.description")} />
      </Helmet>

      <img
        class="page-background"
        alt="Dark, moody background with code snippets overlay"
        src="https://images.unsplash.com/photo-1418156427006-5f8c87e9f4f0"
      />
      <div className="page-overlay"></div>

      <div className="relative z-10 min-h-screen pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
                {t("experience.title")}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {t("experience.description")}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-5 w-5" />{" "}
                {t("experience.downloadResume")}
              </Button>
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
                {t("experience.proExperienceTitle")}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t("experience.proExperienceDescription")}
              </p>
            </motion.div>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-8 hover:bg-black/50"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="text-xl text-amber-400 font-semibold mb-2">
                    {exp.company}
                  </div>
                  <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{exp.description}</p>
                  <p className="text-gray-300 mb-6">{exp?.downloads}</p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-300"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                {t("experience.projectsTitle")}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t("experience.projectsDescription")}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="project-card"
                >
                  <img
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    src={project.image}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                {t("experience.skillsTitle")}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t("experience.skillsDescription")}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="tech-card"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full text-sm text-amber-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageAnimator>
  );
};

export default Experience;
