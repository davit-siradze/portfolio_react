import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg'
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import WordpressIcon from '@/assets/icons/wordpress-icon.png';
import phpIcon from '@/assets/icons/php-15.png';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcoon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';

const toolBoxItems =[
  {
    title: 'JavaScript',
    icon: <JavascriptIcon />,
  },
  {
    title: 'HTML5',
    icon: <HTMLIcon />,
  },
  {
    title: 'CSS3',
    icon: <CssIcon />,
  },
  {
    title: 'PHP',
    icon: <Image src={phpIcon} alt="PHP Icon" />,
  },
  {
    title: 'GitHub',
    icon: <GithubIcon />,
  },
  {
    title: 'React',
    icon: <ReactIcoon />,
  },
  {
    title: 'WordPress',
    icon: <Image src={WordpressIcon} alt="WordPress Icon" />,
  },
  
]

export const AboutSection = () => {
  return <div className="pb-96">
    <SectionHeader eyebrow="About Me"
    title="A Glimpse into My World" 
    description="Learn more about who I am, and what inspires me"
    />
    <div>
      <Card>
        <div>
          <StarIcon />
          <h3>My Reads</h3>
          <p>Explore the books shaping my persperctives.</p>
        </div>
        <Image src={bookImage} alt="Book Cover" />
      </Card>
      <Card>
        <div>
          <StarIcon />
          <h3>My Toolbox</h3>
          <p>Explore the technologies and tools I use to craft exceptional
            digital experiences.
          </p>
        </div>
        <div> 
          {toolBoxItems.map(item => (
            <div key={item.title}>
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>;
};
