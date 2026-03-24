import React from 'react';
import './TerminalContact.css';
import { profile } from '@/data/site';

const TerminalContact = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="terminal-container shadow-2xl">
        <div className="terminal_toolbar">
          <div className="butt">
            <button className="btn btn-color butt--exit" />
            <button className="btn" />
            <button className="btn" />
          </div>
          <p className="user">guest@portfolio: ~</p>
          <div className="add_tab">+</div>
        </div>
        <div className="terminal_body text-left min-h-[220px]">
          <div className="terminal_promt mb-3">
            <span className="terminal_user">guest@portfolio:</span>
            <span className="terminal_location">~</span>
            <span className="terminal_bling">$</span>
            <span className="ml-2 text-[#ffffff]">cat contact.txt</span>
          </div>
          <div className="text-[#cbd5e1] ml-2 mb-6 leading-relaxed flex flex-col gap-2">
            <p><span className="text-pink-400">Name:</span> {profile.name}</p>
            <p><span className="text-pink-400">Email:</span> <a href={`mailto:${profile.email}`} className="text-cyan-400 hover:underline">{profile.email}</a></p>
            <p><span className="text-pink-400">Phone:</span> {profile.phone}</p>
            <p><span className="text-pink-400">WhatsApp:</span> <a href={profile.whatsappLink} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Click to Chat</a></p>
          </div>
          <div className="terminal_promt">
            <span className="terminal_user">guest@portfolio:</span>
            <span className="terminal_location">~</span>
            <span className="terminal_bling">$</span>
            <span className="terminal_cursor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerminalContact;
