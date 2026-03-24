import React from 'react';
import './SquircleSocials.css';
import { profile } from '@/data/site';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const SquircleSocials = () => {
  return (
    <div className="socials-card">
      <a className="social-link1" href={`mailto:${profile.email}`}>
        <Mail size={24} />
      </a>
      <a className="social-link2" href={profile.instagram} target="_blank" rel="noopener noreferrer">
        <Instagram size={24} />
      </a>
      <a className="social-link3" href={profile.github} target="_blank" rel="noopener noreferrer">
        <Github size={24} />
      </a>
      <a className="social-link4" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
        <Linkedin size={24} />
      </a>
    </div>
  );
};

export default SquircleSocials;
