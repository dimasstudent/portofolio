import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BriefcaseIcon, 
  GraduationCapIcon, 
  CalendarIcon, 
  MapPinIcon 
} from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const experiences = [
  {
    type: 'work',
    title: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc.',
    location: 'San Francisco, CA',
    period: 'Jan 2022 - Present',
    description: 'Led the development of a complex SaaS platform, improving performance by 40%. Mentored junior developers and implemented best practices for code quality and team collaboration.',
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'Digital Solutions LLC',
    location: 'New York, NY',
    period: 'Mar 2019 - Dec 2021',
    description: 'Developed responsive web applications using React and Next.js. Collaborated with designers to implement pixel-perfect UIs and improved site performance through optimization techniques.',
  },
  {
    type: 'education',
    title: 'Master of Computer Science',
    company: 'Stanford University',
    location: 'Stanford, CA',
    period: 'Sep 2017 - Jun 2019',
    description: 'Focused on Human-Computer Interaction and Web Technologies. Thesis on "Improving User Experience Through Predictive Interfaces".',
  },
  {
    type: 'work',
    title: 'Junior Web Developer',
    company: 'Creative Agency Co.',
    location: 'Boston, MA',
    period: 'Jun 2016 - Feb 2019',
    description: 'Built and maintained websites for various clients using modern web technologies. Implemented responsive designs and ensured cross-browser compatibility.',
  },
  {
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    company: 'MIT',
    location: 'Cambridge, MA',
    period: 'Sep 2012 - May 2016',
    description: 'Graduated with honors. Specialized in software engineering and web development.',
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-muted/30"
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 relative",
            "after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            "transition-all duration-700 ease-out"
          )}>
            Experience & Education
          </h2>
          <p className={cn(
            "text-muted-foreground text-lg max-w-3xl",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            "transition-all duration-700 delay-200 ease-out"
          )}>
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

          {/* Timeline items */}
          {experiences.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "relative mb-12 last:mb-0",
                isInView ? "opacity-100" : "opacity-0",
                `transition-opacity duration-700 delay-[${300 + index * 150}ms]`
              )}
            >
              <div className={cn(
                "flex flex-col md:items-center md:flex-row",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-6 h-6 rounded-full border-4 border-background bg-primary"></div>

                {/* Content */}
                <div className={cn(
                  "md:w-1/2",
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12",
                  "flex justify-center md:justify-end",
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                )}>
                  <Card className={cn(
                    "w-full md:max-w-md border-border/40 backdrop-blur-sm bg-card/80",
                    isInView ? 
                      index % 2 === 0 ? "translate-x-0" : "translate-x-0" : 
                      index % 2 === 0 ? "-translate-x-12" : "translate-x-12",
                    "transition-transform duration-700 ease-out"
                  )}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4 text-primary">
                        {item.type === 'work' ? (
                          <BriefcaseIcon className="h-5 w-5 mr-2" />
                        ) : (
                          <GraduationCapIcon className="h-5 w-5 mr-2" />
                        )}
                        <span className="text-sm font-medium">
                          {item.type === 'work' ? 'Work Experience' : 'Education'}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <h4 className="text-lg font-medium text-muted-foreground mb-4">{item.company}</h4>
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {item.period}
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {item.location}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}