import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CodeIcon, 
  DatabaseIcon, 
  LayoutIcon, 
  AwardIcon 
} from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Spring', 'Django', 'PostgreSQL', 'Mysql'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Virtualization', 'CI/CD'] },
];

const services = [
  {
    icon: <CodeIcon className="h-6 w-6" />,
    title: 'Web Development',
    description: 'Creating responsive, high-performance web applications with modern frameworks.',
  },
  {
    icon: <DatabaseIcon className="h-6 w-6" />,
    title: 'Backend Solutions',
    description: 'Building robust APIs and server-side applications to power your digital products.',
  },
  {
    icon: <LayoutIcon className="h-6 w-6" />,
    title: 'Responsive Design',
    description: 'Creating websites that look and function beautifully across all devices and screen sizes.',
  },
  {
    icon: <AwardIcon className="h-6 w-6" />,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed, accessibility, and search engine visibility.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-muted/30"
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 relative pt-8",
            "after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            "transition-all duration-700 ease-out"
          )}>
            About Me
          </h2>
          <p className={cn(
            "text-muted-foreground text-lg max-w-3xl",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            "transition-all duration-700 delay-200 ease-out"
          )}>
            I'm a passionate tech enthusiast with a strong interest in backend development and DevOps. I enjoy building scalable and reliable systems behind the scenes. I also love the coding vibe — writing clean code while listening to music, entering that focused flow state where productivity just clicks.
          </p>
        </div>

        <div className={cn(
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          "transition-all duration-700 delay-400 ease-out"
        )}>
          <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
          <div className="space-y-4">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h4 className="text-lg font-medium mb-2">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <h3 className={cn(
          "text-2xl font-semibold mb-8 text-center mt-16",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          "transition-all duration-700 delay-500 ease-out"
        )}>
          Services I Offer
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className={cn(
              "overflow-hidden border-border/40 backdrop-blur-sm bg-card/80 hover:bg-card/90 transition-all duration-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              "transition-all duration-700 delay-[600ms] ease-out"
            )}>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {service.icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}