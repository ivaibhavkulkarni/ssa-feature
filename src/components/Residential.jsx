import React from 'react';

const Residential = () => {
  const content = `
        <div class="text-white space-y-8">
      <div>
        <p class="leading-relaxed">
            At SSA HYD, we are dedicated to providing our students with top-tier residential amenities that ensure comfort, health, and safety. Our facilities include:
        </p>
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Clean and Spacious Air-Conditioned Rooms</h2>
        <p class="leading-relaxed">
            Designed for optimal comfort, our accommodations offer ample space and are meticulously maintained to provide a hygienic living environment.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Nutritious Vegetarian Cuisine</h2>
        <p class=" leading-relaxed">
            Our dining services feature a variety of wholesome vegetarian meals, carefully crafted to meet the dietary needs of our students and promote overall well-being.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class=" text-2xl font-bold mb-4">24/7 Supervision</h2>
        <p class="leading-relaxed">
            To guarantee the safety and security of our students, our dedicated staff provides round-the-clock supervision, ensuring a supportive and secure residential experience.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class=" text-2xl font-bold mb-4">Herbal Garden</h2>
        <p class="leading-relaxed">
            Our herbal garden is home to a variety of medicinal plants, offering students hands-on learning about their uses and benefits.
            By offering these exceptional residential facilities, SSA HYD ensures that students can focus on their academic pursuits and personal growth in a comfortable and secure environment.    
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

export default Residential;