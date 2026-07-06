import React from 'react';
import Hero from '@/components/ui/animated-shader-hero';

const App: React.FC = () => {
  const handlePrimaryClick = () => {
    // Could link to email or social media
    window.open('mailto:emailkerjanya@duck.com', '_blank');
  };

  const handleSecondaryClick = () => {
    // Could link to social media
    window.open('https://www.linkedin.com/in/editama', '_blank');
  };

  return (
    <div className="w-full">
      <Hero
        trustBadge={{
          text: "Something amazing is on the way",
          icons: ["✨", "🚀"]
        }}
        headline={{
          line1: "Coming Soon",
          line2: "Stay Tuned"
        }}
        subtitle="We're working hard to bring you something extraordinary. Be the first to know when we launch!"
        buttons={{
          primary: {
            text: "Get Notified",
            onClick: handlePrimaryClick
          },
          secondary: {
            text: "Follow Us",
            onClick: handleSecondaryClick
          }
        }}
      />
      
      {/* Footer section */}
      <div className="bg-black text-white py-8 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Editama. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/editama" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/amatide_8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a 
            href="mailto:emailkerjanya@duck.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
