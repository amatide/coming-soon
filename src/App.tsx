import React from 'react';
import Hero from '@/components/ui/animated-shader-hero';

const App: React.FC = () => {
  const handleGetNotified = () => {
    // Ganti dengan URL Google Form Anda
    window.open('https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform', '_blank');
  };

  const handleFollowUs = () => {
    window.open('https://www.instagram.com/amatide_8', '_blank');
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
            onClick: handleGetNotified
          },
          secondary: {
            text: "Follow Us",
            onClick: handleFollowUs
          }
        }}
      />
    </div>
  );
};

export default App;
