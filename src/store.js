import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 2,
  pages: 2,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.5,
      header: "About me",
      image: "/IMG_0146.png",
      aspect: 0.665,
      text: "I'm a software engineering undergraduate with a passion for developing innovative mobile and web applications. I am a curious and creative individual who loves solving problems and exploring new technologies. My passion for software development started from a young age, and since then, I have been constantly learning and developing my skills. I enjoy working on both mobile and web applications, and I have experience in developing web applications using React, Angular, Node.js, Next.js, MongoDB, SQL, and three.js. Additionally, I have developed native iOS mobile applications and have experience with ARKit and CoreML in iOS. My love for software engineering drives me to continually improve and develop innovative solutions to real-world problems."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Diamond Road",
      image: "/photo-1519608487953-e999c86e7455.jpeg",
      aspect: 1.5,
      text: "The man who comes back through the Door in the Wall will never be quite the same as the man who went out. He will be wiser but less sure, happier but less self-satisfied, humbler in acknowledging his ignorance yet better equipped to understand the relationship of words to things, of systematic reasoning to the unfathomable mystery which it tries, forever vainly, to comprehend."
    },
    // {
    //   offset: 3,
    //   factor: 2.25,
    //   header: "Catalina",
    //   image: "/ph1.jpg",
    //   aspect: 1.5037,
    //   text: "The substance can take you to heaven but it can also take you to hell. Or else to both, together or alternately. Or else (if you're lucky, or if you've made yourself ready) beyond either of them. And then beyond the beyond, back to where you started from — back to here, back to New Rotham sted, back to business as usual. Only now, of course, business as usual is completely different."
    // },
    // {
    //   offset: 4,
    //   factor: 2.0,
    //   header: "Building 21",
    //   image: "/ph3.jpg",
    //   aspect: 0.665,
    //   text: "We’ve found that the people whose EEG doesn’t show any alpha-wave activity when they’re relaxed aren’t likely to respond significantly to the substance. That means that, for about fifteen percent of the population, we have to find other approaches to liberation."
    // },
    // {
    //   offset: 5,
    //   factor: 1.75,
    //   header: "Sector 8",
    //   image: "/photo-1533577116850-9cc66cad8a9b.jpeg",
    //   aspect: 1.55,
    //   text: "By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won’t be compelled by one’s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing."
    // },
    // { offset: 7, factor: 1.05, header: "The Factory", image: "/photo-1548191265-cc70d3d45ba1.jpeg", aspect: 1.77, text: "Education and enlightenment." }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    // { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    // { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    // { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    // { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    // { x: -5, offset: 7, pos: new Vector3(), scale: 0.8, factor: 2 },
    // { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
}

export default state
