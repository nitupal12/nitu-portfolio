import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Code, Smartphone, Users, Award, Coffee, Heart } from 'lucide-react';
import PageAnimator from '@/components/PageAnimator';

const About = () => {
  const { t, ready } = useTranslation();

  if (!ready) {
    return null; 
  }

  const journey = t('about.journey', { returnObjects: true });
  const values = t('about.values', { returnObjects: true });
  const funFacts = t('about.funFacts', { returnObjects: true });

  const journeyIcons = [Smartphone, Code, Award, Users];
  const valueIcons = [Code, Users, Coffee, Heart];

  return (
    <PageAnimator>
      <Helmet>
        <title>{`${t('meta.title')} | ${t('nav.about')}`}</title>
        <meta name="description" content={t('about.description')} />
      </Helmet>

      <img  className="page-background" alt="Warm-toned abstract background with light streaks" src="https://images.unsplash.com/photo-1618410320928-25228d811631?q=80&w=2070&auto=format&fit=crop" />
      <div className="page-overlay"></div>

      <div className="relative z-10 min-h-screen pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">{t('about.title')}</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('about.description')}</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
                <div className="glass-effect rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-6 gradient-text">{t('about.storyTitle')}</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>{t('about.storyContent1')}</p>
                    <p>{t('about.storyContent2')}</p>
                    <p>{t('about.storyContent3')}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="relative">
                <div className="glass-effect rounded-2xl p-8 floating-animation">
                  <img  alt="Nitu Pal working on mobile development" className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1531741403586-c19915ad5d0c?q=80&w=1964&auto=format&fit=crop" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full blur-xl opacity-50"></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">{t('about.journeyTitle')}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('about.journeyDescription')}</p>
            </motion.div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-600 rounded-full"></div>
              {Array.isArray(journey) && journey.map((item, index) => {
                const IconComponent = journeyIcons[index % journeyIcons.length];
                return (
                  <motion.div key={item.year} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }} viewport={{ once: true }} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="glass-effect rounded-xl p-6 hover:bg-black/50 transition-all duration-300">
                        <div className="text-2xl font-bold text-amber-400 mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">{t('about.valuesTitle')}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('about.valuesDescription')}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.isArray(values) && values.map((value, index) => {
                const IconComponent = valueIcons[index % valueIcons.length];
                return (
                  <motion.div key={value.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.6 }} viewport={{ once: true }} className="tech-card text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glass-effect rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">{t('about.funFactsTitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Array.isArray(funFacts) && funFacts.map((fact) => (
                    <div key={fact.title}>
                        <div className="text-4xl mb-2">{fact.emoji}</div>
                        <div className="text-lg font-semibold mb-2">{fact.title}</div>
                        <div className="text-gray-300">{fact.description}</div>
                    </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageAnimator>
  );
};

export default About;