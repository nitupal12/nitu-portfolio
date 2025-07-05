import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Star, Quote, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import PageAnimator from '@/components/PageAnimator';
import ShareExperienceModal from '@/components/ShareExperienceModal';

const Testimonials = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Johnson', role: 'Product Manager', company: 'Tech Innovation Corp', rating: 5,
      testimonial: "Nitu is an exceptional React Native developer. Her attention to detail and ability to solve complex problems makes her an invaluable team member. The apps she's built for us have received outstanding user feedback.",
      relationship: 'Direct Manager', duration: '2 years'
    },
    {
      name: 'Michael Chen', role: 'Senior Software Engineer', company: 'Digital Solutions Ltd', rating: 5,
      testimonial: "Working alongside Nitu has been a fantastic experience. Her deep understanding of React Native architecture helped our team deliver projects ahead of schedule. She's also an excellent mentor.",
      relationship: 'Team Colleague', duration: '3 years'
    },
    {
      name: 'Emily Rodriguez', role: 'CTO', company: 'StartupTech Inc', rating: 5,
      testimonial: "Nitu played a crucial role in scaling our mobile development team. Her technical expertise in React Native and leadership skills helped us launch multiple successful apps.",
      relationship: 'Former CTO', duration: '2 years'
    }
  ];

  const stats = [
    { number: '25+', label: t('testimonials.stats.happyClients') },
    { number: '4.9/5', label: t('testimonials.stats.avgRating') },
    { number: '50+', label: t('testimonials.stats.projectsCompleted') },
    { number: '100%', label: t('testimonials.stats.recommendation') }
  ];

  const renderStars = (rating) => Array.from({ length: 5 }, (_, i) => (
    <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
  ));

  return (
    <PageAnimator>
      <Helmet>
        <title>{t('meta.title')} | {t('nav.testimonials')}</title>
        <meta name="description" content={t('testimonials.description')} />
      </Helmet>
      
      <ShareExperienceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <img  class="page-background" alt="Professional and warm office setting background" src="https://images.unsplash.com/photo-1634715022648-13d43a4e9fe8" />
      <div className="page-overlay"></div>

      <div className="relative z-10 min-h-screen pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">{t('testimonials.title')}</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('testimonials.description')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }} className="text-center glass-effect rounded-xl p-6 hover:bg-black/50">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">{t('testimonials.whatPeopleSay')}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('testimonials.feedback')}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.6 }} viewport={{ once: true }} className="testimonial-card relative">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-amber-400/30" />
                  <div className="flex items-center mb-6">
                    <img  alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4 glass-effect" src="https://images.unsplash.com/photo-1575383596664-30f4489f9786" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-amber-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.testimonial}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glass-effect rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">{t('testimonials.ctaTitle')}</h2>
              <p className="text-xl text-gray-300 mb-8">{t('testimonials.ctaDescription')}</p>
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white" onClick={() => setIsModalOpen(true)}>
                {t('testimonials.shareExperience')}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageAnimator>
  );
};

export default Testimonials;