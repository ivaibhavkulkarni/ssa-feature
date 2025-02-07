import { motion } from "framer-motion"

const ImageSlider = ({ slides }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div className="mt-6">
      {slides.map((slide, index) => (
        <motion.img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className="w-full rounded-lg object-cover"
          variants={variants}
          initial="hidden"
          animate="visible"
        />
      ))}
    </motion.div>
  )
}

export default ImageSlider

