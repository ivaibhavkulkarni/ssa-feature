"use client"

import React from "react"
import Banner from "./Banner"
import { motion } from "framer-motion"

const bannerContents = [
  {
    title: "TRUSTED BY PARENTS NATIONWIDE",
    description:
      "Sri Sri Academy The International School is elated to be honoured multiple times by the Asian Education Leadership Awards.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "EXCELLENCE IN EDUCATION",
    description:
      "Our innovative curriculum and dedicated faculty ensure that every student reaches their full potential.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "NURTURING FUTURE LEADERS",
    description:
      "We focus on developing not just academic skills, but also character, creativity, and leadership abilities.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "STATE-OF-THE-ART FACILITIES",
    description:
      "Our campus boasts modern classrooms, advanced labs, and extensive sports facilities to support holistic development.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "GLOBAL PERSPECTIVE",
    description:
      "We prepare students for a globalized world through international exchanges and multicultural experiences.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "COMMITTED TO SUSTAINABILITY",
    description: "Our eco-friendly initiatives teach students the importance of environmental stewardship.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "ARTS AND CREATIVITY",
    description: "We nurture artistic talents through comprehensive programs in visual arts, music, dance, and drama.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "SPORTS EXCELLENCE",
    description: "Our athletics program promotes teamwork, discipline, and physical fitness across various sports.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "COMMUNITY ENGAGEMENT",
    description: "We encourage students to give back to society through various outreach and volunteer programs.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "TECHNOLOGY INTEGRATION",
    description: "Our curriculum incorporates cutting-edge technology to prepare students for the digital age.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "PERSONALIZED LEARNING",
    description: "We tailor our teaching approaches to meet individual student needs and learning styles.",
    videoId: "r6sGWTCMz2k",
  },
  {
    title: "LIFELONG LEARNING",
    description: "We instill a passion for continuous learning that extends beyond the classroom and into life.",
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

