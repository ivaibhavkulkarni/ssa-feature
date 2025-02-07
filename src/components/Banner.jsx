"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, X } from "lucide-react"
import ImageSlider from "./ImageSlider"

const Banner = ({ videoPosition, title, description, videoId, detailedTitle, detailedDescription, slides }) => {
  const [showSheet, setShowSheet] = useState(false)

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-900 to-indigo-900 shadow-2xl mb-8"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col md:flex-row h-full">
        <motion.div
          className={`flex-1 order-1 ${videoPosition === "left" ? "md:order-1" : "md:order-2"}`}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col justify-center space-y-6 p-8 md:p-12 h-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">{title}</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200">{description}</p>
            <motion.button
              onClick={() => setShowSheet(true)}
              className="w-fit rounded-full bg-red-600 px-6 py-3 md:px-10 md:py-4 text-lg md:text-xl font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg flex items-center space-x-2"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
            >
              <span>Know more</span>
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
        <div className={`flex-1 order-2 ${videoPosition === "left" ? "md:order-2" : "md:order-1"}`}>
          <div className="aspect-w-16 aspect-h-9 md:h-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?controls=0&rel=0&playsinline=1&enablejsapi=1&widgetid=1`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </div>

      {showSheet && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl space-y-6 rounded-2xl border border-white border-opacity-20 bg-white bg-opacity-10 p-10 shadow-2xl backdrop-blur-md"
          >
            <h2 className="text-2xl font-bold text-white">{detailedTitle}</h2>
            <p className="text-lg text-gray-200">{detailedDescription}</p>

            {/* ImageSlider Component */}
            <ImageSlider slides={slides} />

            <motion.button
              onClick={() => setShowSheet(false)}
              className="rounded-full bg-red-600 px-8 py-3 text-lg text-white transition-all hover:bg-red-700 hover:shadow-lg flex items-center space-x-2"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
            >
              <span>Close</span>
              <X className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Banner

