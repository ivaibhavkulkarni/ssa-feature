import React from 'react';

const Environmental = () => {
  const content = `
    <div class="text-white space-y-8">
      <div>
        <p class="leading-relaxed">
            At SSA HYD, we are deeply committed to fostering environmental consciousness and sustainable practices within our community. Our campus serves as a living laboratory where students actively engage in various eco-friendly projects, all maintained by our dedicated Eco Club members
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Compost Pit</h2>
        <p class="leading-relaxed">
            We manage a compost pit where organic waste is transformed into nutrient-rich compost, promoting waste reduction and soil health.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Rainwater Harvesting</h2>
        <p class=" leading-relaxed">
            Our rainwater harvesting system efficiently collects and stores rainwater, conserving water resources and teaching students about sustainable water management.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class=" text-2xl font-bold mb-4">Butterfly Garden</h2>
        <p class="leading-relaxed">
            We have cultivated a butterfly garden that attracts various species, providing a living laboratory for students to study biodiversity and the importance of pollinators.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class=" text-2xl font-bold mb-4">Herbal Garden</h2>
        <p class="leading-relaxed">
            Our herbal garden is home to a variety of medicinal plants, offering students hands-on learning about their uses and benefits.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Kitchen Garden</h2>
        <p class="leading-relaxed">
             We maintain a kitchen garden where students grow fruits and vegetables, integrating lessons on agriculture, nutrition, and sustainability.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Eco-Friendly Cleaning and Fumigation</h2>
        <p class="leading-relaxed mt-8">
            All cleaning on campus is conducted using organic, plant-based products, and fumigation is performed with herbal solutions, ensuring a healthy environment.
        </p>
      </div>
    </div>
  `;

  return (
    <div 
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Environmental;