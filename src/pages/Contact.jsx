import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import PageAnimator from '@/components/PageAnimator';

const Contact = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //toast({ title: t('toasts.notImplemented') });
  };
  
  const handleScheduleCall = () => {
    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_CUSTOM_SCHEDULE_URL', '_blank', 'noopener,noreferrer');
  }

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/nitu-pal', '_blank', 'noopener,noreferrer');
  };

  const contactInfo = [
    { icon: Mail, label: t('contact.info.email'), value: 'nitupal552@gmail.com' },
    { icon: Phone, label: t('contact.info.phone'), value: '+91 9768232069' },
    { icon: MapPin, label: t('contact.info.location'), value: 'India' },
    { icon: Calendar, label: t('contact.info.availability'), value: 'Open to opportunities' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '' },
    { icon: Linkedin, label: 'LinkedIn', onClick: handleLinkedInClick },
    // { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/kunaldev' }
  ];

  const services = t('contact.services', { returnObjects: true });

  return (
    <PageAnimator>
      <Helmet>
        <title>{t('meta.title')} | {t('nav.contact')}</title>
        <meta name="description" content={t('contact.description')} />
      </Helmet>

      <img  class="page-background" alt="Soothing background with abstract network lines" src="https://images.unsplash.com/photo-1605636924384-3c416e6ac42b" />
      <div className="page-overlay"></div>

      <div className="relative z-10 min-h-screen pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-16">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">{t('contact.title')}</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('contact.description')}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="glass-effect rounded-2xl p-8">
                <h2 className="text-3xl font-bold gradient-text mb-6">{t('contact.sendMessage')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input name="name" value={formData.name} onChange={handleInputChange} placeholder={t('contact.form.placeholders.name')} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={t('contact.form.placeholders.email')} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                  <input name="subject" value={formData.subject} onChange={handleInputChange} placeholder={t('contact.form.placeholders.subject')} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder={t('contact.form.placeholders.message')} required></textarea>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white"><Send className="mr-2 h-5 w-5" /> {t('contact.sendMessage')}</Button>
                </form>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="space-y-8">
                <div className="glass-effect rounded-2xl p-8">
                  <h2 className="text-3xl font-bold gradient-text mb-6">{t('contact.getInTouch')}</h2>
                  <div className="space-y-4">
                    {contactInfo.map((info) => {
                      const IconComponent = info.icon;
                      return (<div key={info.label} className="flex items-center space-x-4"><IconComponent className="h-6 w-6 text-amber-400" /><div><div className="text-sm text-gray-400">{info.label}</div><div className="text-white font-medium">{info.value}</div></div></div>);
                    })}
                  </div>
                </div>
                <div className="glass-effect rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">{t('contact.followMe')}</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (<button key={social.label} onClick={social.onClick ? social.onClick : () => window.open(social.href, '_blank', 'noopener,noreferrer')} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"><IconComponent className="h-5 w-5" /></button>);
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glass-effect rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">{t('contact.ctaTitle')}</h2>
              <p className="text-xl text-gray-300 mb-8">{t('contact.ctaDescription')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white" onClick={handleScheduleCall}>
                  <Calendar className="mr-2 h-5 w-5" /> {t('contact.scheduleCall')}
                </Button>
                <Button variant="outline" size="lg" className="glass-effect border-white/30 text-white hover:bg-white/10" onClick={() => navigate('/')}>
                  {t('contact.viewPortfolio')}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageAnimator>
  );
};

export default Contact;