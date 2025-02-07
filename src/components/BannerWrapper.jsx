"use client"

import React from "react"
import Banner from "./Banner"
import { motion } from "framer-motion"

const bannerContents = [
  {
    title: "Our Campus – A Perfect Blend of Learning and Nature",
    description:
      "Nestled within five acres of lush green landscape, our school offers a serene and inspiring environment that fosters holistic education. Our infrastructure is thoughtfully designed to integrate modern learning facilities with nature, ensuring students grow in a space that nurtures both their minds and well-being.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "Learning Beyond the Classroom",
    description:
      "Education at SSA HYD extends beyond traditional classrooms. We encourage experiential learning in open spaces, where students can study under the shade of the majestic Baniyan tree, engage in discussions on park benches, or enjoy lessons conducted in harmony with nature.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "State-of-the-Art Sports Facilities",
    description:
      "Our top-notch sports infrastructure fosters discipline, teamwork, and resilience with a dedicated arena, courts for basketball, volleyball, and badminton, a skating rink, gym, outdoor fields, an indoor sports room, and horse riding lessons for balance and confidence.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "Well-Stocked Library",
    description:
      "Our reader-friendly library offers a rich collection of books, research materials, and digital resources to ignite curiosity and a love for reading.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "Comfortable Dining & Hygienic Kitchen",
    description:
      "A hygienic and well-managed kitchen caters to students with nutritious meals, served in a spacious dining hall designed for comfort and community bonding.",
    videoId: "r6sGWTCMz2k",
  },
  //
  {
    title: "Advanced Learning Facilities at SSA-HYD",
    description: "At SSA HYD, we are committed to integrating advanced technology into our educational framework to enhance learning experiences. Each classroom is equipped with modern Smart Boards, providing interactive and engaging instruction.Our specialized laboratories and learning spaces are designed to enhance understanding and stimulate curiosity.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "Cultivating Environmental Stewardship: Our Eco-Friendly Campus Initiatives",
    description: "At SSA HYD, we are deeply committed to fostering environmental consciousness and sustainable practices within our community. Our campus serves as a living laboratory where students actively engage in various eco-friendly projects, all maintained by our dedicated Eco Club members",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "Experience Exceptional Residential Facilities at SSA HYD",
    description: "At SSA HYD, we are dedicated to providing our students with top-tier residential amenities that ensure comfort, health, and safety",
    videoId: "r6sGWTCMz2k",
  },
]

const BannerWrapper = () => {
  return (
    <motion.div
      className="space-y-8 py-8 px-4 md:px-8 lg:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {bannerContents.map((content, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Banner
            videoPosition={index % 2 === 0 ? "right" : "left"}
            title={content.title}
            description={content.description}
            videoId={content.videoId}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default BannerWrapper

