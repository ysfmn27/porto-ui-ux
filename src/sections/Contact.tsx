import React from 'react';
import { Mail, Linkedin, Instagram, MessageCircle, BookOpen, Palette, Eye } from 'lucide-react';

export const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail size={32} />,
      url: 'mailto:muhammadyusufm529@gmail.com',
      username: 'Muhammad Yusuf Maulana',
      color: 'hover:text-red-400 hover:bg-red-400/10',
      description: 'Send me an email'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={32} />,
      url: 'https://linkedin.com/in/myusufmaulana27',
      username: 'myusufmaulana27',
      color: 'hover:text-blue-400 hover:bg-blue-400/10',
      description: 'Connect with me professionally'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={32} />,
      url: 'https://instagram.com/ysfmn27',
      username: '@ysfmn27',
      color: 'hover:text-pink-400 hover:bg-pink-400/10',
      description: 'Follow my creative journey'
    },
    {
      name: 'Medium',
      icon: <BookOpen size={32} />,
      url: 'https://medium.com/@yusufmaulana3056',
      username: '@yusufmaulana3056',
      color: 'hover:text-gray-300 hover:bg-gray-300/10',
      description: 'Read my design articles'
    },
    {
      name: 'Dribbble',
      icon: <Palette size={32} />,
      url: 'https://dribbble.com/Yusuf2622',
      username: '@Yusuf2622',
      color: 'hover:text-pink-500 hover:bg-pink-500/10',
      description: 'View my design shots'
    },
    {
      name: 'Behance',
      icon: <Eye size={32} />,
      url: 'https://behance.net/myusufmaulana',
      username: '@myusufmaulana',
      color: 'hover:text-blue-500 hover:bg-blue-500/10',
      description: 'Explore my portfolio'
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's <span className="text-blue-500">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate or just want to say hello? Connect with me through any of these platforms. I'm always excited to discuss new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target={social.name === 'Email' ? '_self' : '_blank'}
              rel={social.name === 'Email' ? '' : 'noopener noreferrer'}
              className={`group relative p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 transition-all duration-300 hover:scale-105 hover:border-gray-600/50 ${social.color}`}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-700/50 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{social.name}</h3>
                <p className="text-gray-400 text-xs mb-2">{social.description}</p>
                <p className="text-gray-300 text-sm font-medium">{social.username}</p>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="p-6 bg-gradient-to-r from-gray-800/40 via-blue-900/20 to-gray-800/40 rounded-xl backdrop-blur-sm border border-gray-700/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect and create something amazing together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};