"use client"
import ArtOfLiving from "./ArtOfLiving"
import Banner from "./Banner"
import DetailedContent from "./DetailedContent"
import Environmental from "./Environmental"
import Residential from "./Residential"

const bannerContents = [
  {
    title: "Our Campus – A Perfect Blend of Learning and Nature",
    description:
      "Nestled within five acres of lush green landscape, our school offers a serene and inspiring environment that fosters holistic education. Our infrastructure is thoughtfully designed to integrate modern learning facilities with nature, ensuring students grow in a space that nurtures both their minds and well-being.",
    videoId: "r6sGWTCMz2k",
    detailedTitle: "Explore Campus",
      detailedDescription:
        "Set on five acres of greenery, our school blends modern learning with nature to nurture minds and well-being.",
      slides: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg","https://thepremiaacademy.com/assets/img/academics/elementary-school.png","https://schooledu.telangana.gov.in/SCHOOLEDUCATION/img/theme/revolution/New/slider1.jpg"],
    
  },
  {
    title: "Learning Beyond the Classroom",
    description:
      "Education at SSA HYD extends beyond traditional classrooms. We encourage experiential learning in open spaces, where students can study under the shade of the majestic Baniyan tree, engage in discussions on park benches, or enjoy lessons conducted in harmony with nature.",
    videoId: "r6sGWTCMz2k",
    detailedTitle: "Learning Beyond the Classroom",
    detailedDescription:
      "At SSA HYD, education goes beyond classrooms, fostering experiential learning in open spaces amidst nature.",
    slides: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg","https://thepremiaacademy.com/assets/img/academics/elementary-school.png","https://schooledu.telangana.gov.in/SCHOOLEDUCATION/img/theme/revolution/New/slider1.jpg"],
 
  },
  {
    title: "State-of-the-Art Sports Facilities",
    description:
      "Our top-notch sports infrastructure fosters discipline, teamwork, and resilience with a dedicated arena, courts for basketball, volleyball, and badminton, a skating rink, gym, outdoor fields, an indoor sports room, and horse riding lessons for balance and confidence.",
    videoId: "r6sGWTCMz2k",
    detailedTitle: "Sports",
    detailedDescription:
      "We nurture discipline, teamwork, and resilience through sports with top-notch facilities, including courts for basketball, volleyball, badminton, and a skating rink. Our expansive infrastructure also features a gym, outdoor fields, an indoor sports room, and horse riding lessons to enhance coordination and confidence.",
    slides: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg","https://thepremiaacademy.com/assets/img/academics/elementary-school.png","https://schooledu.telangana.gov.in/SCHOOLEDUCATION/img/theme/revolution/New/slider1.jpg"],
 
  },
  {
    title: "Well-Stocked Library",
    description:
      "Our reader-friendly library offers a rich collection of books, research materials, and digital resources to ignite curiosity and a love for reading.",
    videoId: "r6sGWTCMz2k",
    detailedTitle: "Explore our Library",
    detailedDescription:
      "Our library offers a rich collection of books and digital resources to inspire curiosity and a love for reading.",
    slides: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg","https://thepremiaacademy.com/assets/img/academics/elementary-school.png","https://schooledu.telangana.gov.in/SCHOOLEDUCATION/img/theme/revolution/New/slider1.jpg"],
 
  },
  {
    title: "Comfortable Dining & Hygienic Kitchen",
    description:
      "A hygienic and well-managed kitchen caters to students with nutritious meals, served in a spacious dining hall designed for comfort and community bonding.",
    videoId: "r6sGWTCMz2k",
    detailedTitle: "Explore Our Comfortable Dining & Hygienic Kitchen",
    detailedDescription:
      "A hygienic, well-managed kitchen provides students with nutritious meals. The spacious dining hall fosters comfort and community bonding.",
    slides: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg","https://thepremiaacademy.com/assets/img/academics/elementary-school.png","https://schooledu.telangana.gov.in/SCHOOLEDUCATION/img/theme/revolution/New/slider1.jpg"],
 
  },
  
  {
    title: "Advanced Learning Facilities at SSA-HYD",
    description: "At SSA HYD, we are committed to integrating advanced technology into our educational framework to enhance learning experiences. Each classroom is equipped with modern Smart Boards, providing interactive and engaging instruction.Our specialized laboratories and learning spaces are designed to enhance understanding and stimulate curiosity.",
    videoId: "r6sGWTCMz2k",
    detailedTitle: "Computer Lab and Technology Center",
    detailedDescription: <DetailedContent/>,
    slides: ["https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg"],
 
  },
  {
    title: "Cultivating Environmental Stewardship: Our Eco-Friendly Campus Initiatives",
    description: "At SSA HYD, we are deeply committed to fostering environmental consciousness and sustainable practices within our community. Our campus serves as a living laboratory where students actively engage in various eco-friendly projects, all maintained by our dedicated Eco Club members",
    videoId: "r6sGWTCMz2k",
    detailedTitle: "Our Eco-Friendly Campus Initiatives",
    detailedDescription: <Environmental/>,
    slides: ["https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg"],
 
  },
  {
    title: "Experience Exceptional Residential Facilities at SSA HYD",
    description: "At SSA HYD, we are dedicated to providing our students with top-tier residential amenities that ensure comfort, health, and safety",
    videoId: "r6sGWTCMz2k",
    detailedTitle: "Residential Facilities at SSA-HYD",
    detailedDescription: <Residential/>,
    slides: ["https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg"],
 
  },
  {
    title: "Art of Living Programs.",
    description: "At SSA, we integrate Art of Living programs into our daily routine to promote holistic development among our students. These programs include Utkarsha Yoga, Medha Yoga, and the Intuition Process, each offering unique benefits",
    videoId: "r6sGWTCMz2k",
    detailedTitle: "Utkarsha Yoga (Ages 8-13)",
    detailedDescription:<ArtOfLiving/>,
    slides: ["https://www.education.edu/wp-content/uploads/external/79fee8505ef86dc3b1d8bce37f89e243-2048x0-c-default.jpg"],
 
  },
  {
    title: "Trained Teachers",
    description: "At SSA, our educators are dedicated to delivering a comprehensive and value-based education that aligns with the Central Board of Secondary Education (CBSE) standards. Under the guidance of the Art of Living Foundation, our teachers undergo extensive training programs that provide a 360-degree perspective on holistic education, ensuring they are well-equipped to foster both academic excellence and moral development in our students.",
    videoId: "r6sGWTCMz2k",
    detailedTitle: "Trained Teachers",
    detailedDescription:
      "At SSA, we provide holistic, CBSE-aligned education through extensively trained educators guided by the Art of Living Foundation.",
    slides: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg","https://thepremiaacademy.com/assets/img/academics/elementary-school.png","https://schooledu.telangana.gov.in/SCHOOLEDUCATION/img/theme/revolution/New/slider1.jpg"],
 
  },
]

const BannerWrapper = () => {
  return (
    <div className="space-y-8 py-8 px-4 md:px-8 lg:px-16">
      {bannerContents.map((content, index) => (
        <Banner
          key={index}
          videoPosition={index % 2 === 0 ? "right" : "left"}
          title={content.title}
          description={content.description}
          videoId={content.videoId}
          detailedTitle={content.detailedTitle}
          detailedDescription={content.detailedDescription}
          slides={content.slides}
        />
      ))}
    </div>
  )
}

export default BannerWrapper
