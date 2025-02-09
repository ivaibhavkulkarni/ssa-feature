import React from 'react';

const DetailedContent = () => {
  const content = `
    <div class="space-y-8">
      <div>
        <p class="text-white leading-relaxed">
          Our spacious computer lab is equipped with modern desktops featuring the latest software, providing students with hands-on experience in cutting-edge technologies. Students engage with advanced tools such as holograms, Virtual Reality (VR), and Augmented Reality (AR), preparing them for the digital innovations of the future.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class="text-2xl font-bold text-white mb-4">Physics Laboratory</h2>
        <p class="text-white leading-relaxed">
          The well-equipped and spacious physics lab houses modern instruments, including screw gauges and vernier callipers, enabling students to measure minute dimensions like the thickness of paper. Through these practical activities, students discover that science is deeply intertwined with everyday life.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class="text-2xl text-white font-bold mb-4">Chemistry Laboratory</h2>
        <p class="text-white leading-relaxed">
          Our expansive chemistry lab allows students to conduct quantitative and qualitative analyses, adhering to CBSE guidelines. This environment ensures that learners comprehensively understand chemical principles through hands-on experimentation.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class="text-white text-2xl font-bold mb-4">Biology Laboratory</h2>
        <p class="text-white leading-relaxed">
          The spacious biology lab is outfitted with modern devices, including simple and compound microscopes, as well as permanent specimens of both plants and animals. These resources provide students with direct insight into the complexities of biological structures and processes.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class="text-white text-2xl font-bold mb-4">Mathematics Laboratory</h2>
        <p class="text-white leading-relaxed">
          In our math lab, students engage in hands-on activities that make abstract concepts tangible. By manipulating models and exploring mathematical ideas in a practical context, learners develop a deeper and more intuitive understanding of the subject.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <h2 class="text-white text-2xl font-bold mb-4">Social Studies Laboratory</h2>
        <p class="text-white leading-relaxed">
          The social lab features an array of models and maps that offer students a virtual journey around the world. Student-created models are proudly displayed, fostering a sense of accomplishment and encouraging peer learning.
        </p>
        <img src="https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg" alt="Computer Lab" class="mt-4 w-full h-auto rounded-md">
      </div>

      <div>
        <p class="text-white leading-relaxed mt-8">
          At SSA HYD, we believe that immersive, hands-on experiences are crucial for deep learning. Our facilities are designed to provide students with the tools and environments they need to explore, experiment, and excel in their educational journey.
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

export default DetailedContent;