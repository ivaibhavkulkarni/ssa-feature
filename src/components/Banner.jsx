"use client"

import React, { useState } from "react"

const Banner = ({ videoPosition, title, description, videoId }) => {
  const [showSheet, setShowSheet] = useState(false)

  const contentSection = (
    <div className="flex flex-1 flex-col justify-center space-y-6">
      <h1 className="text-2xl font-bold text-white md:text-2.5xl lg:text-3xl">{title}</h1>
      <p className="text-base text-gray-200 md:text-lg">{description}</p>
      <div>
        <button
          onClick={() => setShowSheet(true)}
          className="rounded-full bg-red-600 px-10 py-4 text-xl font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg"
        >
          Enquire Now &gt;
        </button>
      </div>
    </div>
  )

  const videoSection = (
    <div className="relative flex-1">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[10cm] w-full overflow-hidden rounded-2xl shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?controls=0&rel=0&playsinline=1&enablejsapi=1&widgetid=1`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full object-cover"
          ></iframe>
        </div>
      </div>
    </div>
  )

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-900 to-indigo-900 mr-4">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col md:flex-row h-full">
        <div className={`flex-1 order-1 ${videoPosition === "left" ? "md:order-1" : "md:order-2"}`}>
          <div className="flex flex-col justify-center space-y-6 p-8 md:p-12 h-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">{title}</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200">{description}</p>
            <div>
              <button
                onClick={() => setShowSheet(true)}
                className="rounded-full bg-red-600 px-6 py-3 md:px-10 md:py-4 text-lg md:text-xl font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg"
              >
                Enquire Now &gt;
              </button>
            </div>
          </div>
        </div>
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
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="w-full max-w-2xl space-y-6 rounded-2xl border border-white border-opacity-20 bg-white bg-opacity-10 p-10 shadow-2xl backdrop-blur-md">
            <h2 className="text-3xl font-bold text-white">Enquiry Form</h2>
            <p className="text-lg text-gray-200">Fill out the form to learn more about our programs.</p>
            <button
              onClick={() => setShowSheet(false)}
              className="rounded-full bg-red-600 px-8 py-3 text-lg text-white transition-all hover:bg-red-700 hover:shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <style jsx global>{`
      .ytp-large-play-button {
        background: transparent !important;
      }
      .ytp-large-play-button svg {
        opacity: 0.7;
      }
    `}</style>
    </div>
  )
}

export default Banner

