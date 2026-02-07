import { FaReact, FaNodeJs, FaJava, FaAngular, FaPython, FaDocker, FaGitAlt, FaMicrosoft } from "react-icons/fa";
import { 
  SiSpringboot, 
  SiMysql, 
  SiJavascript, 
  SiKubernetes, 
  SiGooglecloud,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiApachekafka,
  SiJenkins
} from "react-icons/si";
import { motion } from "framer-motion";

const skillColor = "#61dafb";

const skills = [
  { name: "Java", icon: <FaJava color={skillColor} size={60}/>},
  { name: "Spring Boot", icon: <SiSpringboot color={skillColor} size={60}/>},
  { name: "React", icon: <FaReact color={skillColor} size={60}/>},
  { name: "Angular", icon: <FaAngular color={skillColor} size={60}/>},
  { name: "TypeScript", icon: <SiTypescript color={skillColor} size={60}/>},
  { name: "JavaScript", icon: <SiJavascript color={skillColor} size={60}/>},
  { name: "Python", icon: <FaPython color={skillColor} size={60}/>},
  { name: "Node.js", icon: <FaNodeJs color={skillColor} size={60}/>},
  { name: "GCP", icon: <SiGooglecloud color={skillColor} size={60}/>},
  { name: "Azure", icon: <FaMicrosoft color={skillColor} size={60}/>},
  { name: "Docker", icon: <FaDocker color={skillColor} size={60}/>},
  { name: "Kubernetes", icon: <SiKubernetes color={skillColor} size={60}/>},
  { name: "Kafka", icon: <SiApachekafka color={skillColor} size={60}/>},
  { name: "PostgreSQL", icon: <SiPostgresql color={skillColor} size={60}/>},
  { name: "MySQL", icon: <SiMysql color={skillColor} size={60}/>},
  { name: "MongoDB", icon: <SiMongodb color={skillColor} size={60}/>},
  { name: "Jenkins", icon: <SiJenkins color={skillColor} size={60}/>},
  { name: "Git", icon: <FaGitAlt color={skillColor} size={60}/>},
];

export function TechStack() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section id="stack" className="section skills">
      <h3>SKILLS</h3>
      <motion.div
        className="skills-logos"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        {skills.map((skill) => (
          <motion.a
            key={skill.name}
            rel="noopener noreferrer"
            className="skill-icon"
            title={skill.name}
            variants={itemVariants}
            whileHover={{ rotateY: 180, scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}