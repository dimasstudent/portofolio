import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

// Project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with advanced filtering, cart functionality, and payment integration.',
    image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Full Stack',
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 2,
    title: 'Agency Website',
    description: 'A responsive website for a creative agency with smooth animations and interactive elements.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team workspaces.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Vue', 'Firebase', 'Tailwind CSS'],
    category: 'Full Stack',
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 4,
    title: 'Finance Dashboard',
    description: 'An analytics dashboard for financial data visualization with interactive charts.',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    category: 'Data Visualization',
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 5,
    title: 'Social Media App',
    description: 'A social platform allowing users to connect, share content, and interact in real-time.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'GraphQL', 'MongoDB'],
    category: 'Mobile',
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 6,
    title: 'Travel Blog',
    description: 'A content-focused travel blog with dynamic content loading and rich media support.',
    image: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Gatsby', 'Contentful CMS', 'Tailwind CSS'],
    category: 'Frontend',
    links: {
      demo: '#',
      github: '#',
    },
  },
];

// Categories for filtering
const categories = [
  'All',
  ...Array.from(new Set(projects.map(project => project.category))),
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24"
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 relative",
            "after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            "transition-all duration-700 ease-out"
          )}>
            My Projects
          </h2>
          <p className={cn(
            "text-muted-foreground text-lg max-w-3xl",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            "transition-all duration-700 delay-200 ease-out"
          )}>
            Here's a selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Category Filter */}
        <div className={cn(
          "flex flex-wrap justify-center gap-2 mb-12",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          "transition-all duration-700 delay-300 ease-out"
        )}>
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className={cn(
                "group overflow-hidden border-border/40 backdrop-blur-sm bg-card/80 hover:bg-card/90 transition-all duration-300",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                `transition-all duration-700 delay-[${400 + index * 100}ms] ease-out`
              )}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30">
                        <ExternalLinkIcon className="h-5 w-5" />
                        <span className="sr-only">View Demo</span>
                      </Button>
                    </a>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30">
                        <GithubIcon className="h-5 w-5" />
                        <span className="sr-only">View GitHub</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a href={project.links.demo} className="inline-flex items-center text-primary hover:underline">
                  View project <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={cn(
          "mt-12 text-center",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          "transition-all duration-700 delay-[900ms] ease-out"
        )}>
          <Button variant="outline" className="rounded-full">
            View All Projects <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}