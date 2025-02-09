import React from 'react';

const ArtOfLiving = () => {
  const content = `
        <div class="text-white space-y-8">
      <div>
        <p class="leading-relaxed">
            This program combines simple breathing techniques, wisdom principles, and the powerful Sudarshan Kriya to help children channel their energy positively. Benefits include improved concentration, increased confidence, enhanced immunity, and the reduction of anger and fear.  
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">

      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Medha Yoga (Ages 14-18):</h2>
        <p class="leading-relaxed">
            Aimed at teenagers, Medha Yoga focuses on making teens stress-free and happy, yet focused go-getters. The program helps teens overcome negative emotions and deal with stress through special breathing techniques. It also guides them to achieve their full potential by addressing topics like studies, peer pressure, and self-esteem.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Intuition Process (Ages 5-18)</h2>
        <p class=" leading-relaxed">
            This two-day program teaches children and teenagers simple and powerful techniques to access and cultivate their inherent intuitive capacity. Benefits include improved decision-making, increased confidence, better communication, and enhanced academic performance.
            By incorporating these programs into our curriculum, we aim to equip students with valuable life skills, fostering their overall well-being and personal growth.
        </p>
      </div>
  `;

  return (
    <div 
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default ArtOfLiving;