import profile from "/public/images/ik.jpg";

const About = () => {
  return (
    <>
      <img src={profile} alt="Profile" className="about-img" />

      <h1 className="abouth1">
        Who am <span className="abouth12">I</span>?
      </h1>
      <p className="aboutp">
        Hi, I'm Rafiq — a motivated and curious student who loves to learn and
        explore new things. I'm passionate about both sports and technology —
        whether I'm on the football field working with my team or behind the
        screen writing code, I'm always striving to improve and challenge
        myself. I enjoy building creative projects, solving problems through
        coding, and learning how technology can make a real impact. My goal is
        to keep growing my skills, stay curious, and combine my interests in
        sports and tech to create something meaningful.
      </p>
    </>
  );
};

export default About;
