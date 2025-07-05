
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Calendar, MapPin, ExternalLink, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Experience = () => {
  const { toast } = useToast();

  const experiences = [
    {
      title: 'Senior React Native Developer',
      company: 'Tech Innovation Corp',
      location: 'Remote',
      duration: '2022 - Present',
      description: 'Leading mobile development initiatives and mentoring junior developers in React Native best practices.',
      achievements: [
        'Architected and delivered 15+ mobile applications',
        'Improved app performance by 40% through optimization',
        'Led a team of 5 developers on cross-platform projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'AWS']
    },
    {
      title: 'Mobile App Developer',
      company: 'Digital Solutions Ltd',
      location: 'New York, NY',
      duration: '2019 - 2022',
      description: 'Developed and maintained multiple React Native applications for various industry clients.',
      achievements: [
        'Built 20+ mobile apps across different industries',
        'Reduced development time by 30% using reusable components',
        'Collaborated with UX/UI teams to enhance user experience',
        'Mentored 3 junior developers in mobile development'
      ],
      technologies: ['React Native', 'JavaScript', 'Node.js', 'MongoDB', 'GraphQL']
    },
    {
      title: 'Mobile Developer',
      company: 'StartupTech Inc',
      location: 'San Francisco, CA',
      duration: '2017 - 2019',
      description: 'Focused on React Native development and cross-platform mobile solutions.',
      achievements: [
        'Developed MVP for 5 startup mobile applications',
        'Integrated third-party APIs and payment gateways',
        'Optimized app store ratings from 3.2 to 4.7 stars',
        'Implemented real-time features using WebSocket'
      ],
      technologies: ['React Native', 'JavaScript', 'REST APIs', 'SQLite', 'Push Notifications']
    },
    {
      title: 'Junior Mobile Developer',
      company: 'Mobile First Agency',
      location: 'Austin, TX',
      duration: '2015 - 2017',
      description: 'Started career in mobile development working on native Android and iOS applications.',
      achievements: [
        'Learned React Native and cross-platform development',
        'Contributed to 10+ mobile app projects',
        'Gained expertise in mobile UI/UX principles',
        'Participated in agile development processes'
      ],
      technologies: ['Android', 'iOS', 'Java', 'Swift', 'React Native']
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Mobile App',
      description: 'Full-featured shopping app with payment integration, real-time inventory, and personalized recommendations.',
      image: 'Modern e-commerce mobile app interface with shopping cart and product listings',
      technologies: ['React Native', 'TypeScript', 'Stripe', 'Firebase'],
      features: ['Payment Integration', 'Push Notifications', 'Real-time Updates', 'Offline Support']
    },
    {
      title: 'Social Media Platform',
      description: 'Instagram-like social platform with photo sharing, stories, and real-time messaging capabilities.',
      image: 'Social media mobile app with photo sharing and messaging features',
      technologies: ['React Native', 'GraphQL', 'AWS', 'WebSocket'],
      features: ['Real-time Chat', 'Media Upload', 'Stories', 'Social Features']
    },
    {
      title: 'Fitness Tracking App',
      description: 'Comprehensive fitness app with workout tracking, nutrition logging, and progress analytics.',
      image: 'Fitness tracking mobile app with workout statistics and progress charts',
      technologies: ['React Native', 'HealthKit', 'Charts', 'SQLite'],
      features: ['Health Integration', 'Analytics', 'Goal Tracking', 'Social Sharing']
    },
    {
      title: 'Food Delivery Platform',
      description: 'Multi-vendor food delivery app with real-time tracking, payment processing, and rating system.',
      image: 'Food delivery mobile app with restaurant listings and order tracking',
      technologies: ['React Native', 'Maps API', 'Payment Gateway', 'Real-time'],
      features: ['GPS Tracking', 'Payment Processing', 'Multi-vendor', 'Rating System']
    }
  ];

  const skills = [
    { category: 'Mobile Development', items: ['React Native', 'Expo', 'Native Modules', 'Performance Optimization'] },
    { category: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Java', 'Swift'] },
    { category: 'State Management', items: ['Redux', 'Context API', 'MobX', 'Zustand'] },
    { category: 'Backend & APIs', items: ['Node.js', 'GraphQL', 'REST APIs', 'Firebase'] },
    { category: 'Tools & Platforms', items: ['Git', 'CI/CD', 'AWS', 'Google Cloud'] },
    { category: 'Testing', items: ['Jest', 'Detox', 'Enzyme', 'React Native Testing Library'] }
  ];

  const handleDownloadResume = () => {
    toast({
      title: "🚧 Resume download isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Experience - Kunal Paul | 9+ Years in Mobile Development</title>
        <meta name="description" content="Explore Kunal Paul's professional experience, projects, and technical skills in React Native and mobile app development spanning over 9 years." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Experience & Projects</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                A comprehensive overview of my professional journey, key projects, and technical expertise 
                in mobile app development.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Full Resume
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Professional Experience</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                9+ years of progressive growth in mobile development across various industries and technologies.
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
                  className="glass-effect rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="text-xl text-blue-400 font-semibold mb-2">{exp.company}</div>
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
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{exp.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
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

        {/* Featured Projects */}
        <section className="py-20 section-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Showcase of notable mobile applications I've developed throughout my career.
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
                  <div className="relative h-48 mb-6">
                    <img  
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-xl"
                     src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-xl"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-xs text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="glass-effect border-white/30 text-white hover:bg-white/10"
                        onClick={() => toast({ title: "🚧 Project demo isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="glass-effect border-white/30 text-white hover:bg-white/10"
                        onClick={() => toast({ title: "🚧 GitHub link isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Technical Skills</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive skill set covering the full spectrum of mobile development technologies.
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
                  <h3 className="text-lg font-semibold text-white mb-4">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg text-sm text-gray-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Experience;
