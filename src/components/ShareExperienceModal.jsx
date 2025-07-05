import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ShareExperienceModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    review: '',
    email: '',
    linkedin: '',
    duration: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, rating });
    toast({
      title: t('toasts.formSubmission'),
    });
    onClose();
    // Reset form
    setFormData({ name: '', role: '', company: '', review: '', email: '', linkedin: '', duration: '' });
    setRating(0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="glass-effect rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text mb-2">{t('testimonials.testimonialModal.title')}</h2>
          <p className="text-gray-300 mb-6">{t('testimonials.testimonialModal.description')}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" value={formData.name} onChange={handleInputChange} placeholder={t('testimonials.testimonialModal.name')} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
            <input name="role" value={formData.role} onChange={handleInputChange} placeholder={t('testimonials.testimonialModal.role')} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
          </div>
          <input name="company" value={formData.company} onChange={handleInputChange} placeholder={t('testimonials.testimonialModal.company')} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
          <textarea name="review" value={formData.review} onChange={handleInputChange} placeholder={t('testimonials.testimonialModal.review')} rows="4" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none" required></textarea>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder={t('testimonials.testimonialModal.email')} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
            <input name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder={t('testimonials.testimonialModal.linkedin')} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
          </div>
          <input name="duration" value={formData.duration} onChange={handleInputChange} placeholder={t('testimonials.testimonialModal.duration')} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
          <div className="text-center">
            <p className="text-gray-300 mb-2">{t('testimonials.testimonialModal.rating')}</p>
            <div className="flex justify-center items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className={`h-8 w-8 cursor-pointer transition-colors ${
                    (hoverRating || rating) >= star ? 'text-yellow-400 fill-current' : 'text-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="glass-effect border-white/30 text-white hover:bg-white/10">Cancel</Button>
            <Button type="submit" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
              <Send className="mr-2 h-4 w-4" /> {t('testimonials.testimonialModal.submit')}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ShareExperienceModal;