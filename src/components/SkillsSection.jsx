import LogoLoop from './LogoLoop';
import { SiReact, SiPython,SiTailwindcss,SiHtml5,SiCss3,SiJavascript,SiMysql } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
const techLogos = [
  { node: <SiHtml5 />, title: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { node: <SiCss3 />, title: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiPython />, title: 'Python', href: 'https://www.python.org' },
  { node: <SiMysql />, title: 'MySQL', href: 'https://www.mysql.com' },
  { node: <FaJava />, title: 'Java'},
  
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={50}
            gap={40}
            pauseOnHover
            scaleOnHover
            ariaLabel="Technology partners"
          />
        </div>
    </section>
  );
};
