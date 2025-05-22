import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  GithubIcon, 
  LinkedinIcon, 
  TwitterIcon,
  CheckCircleIcon
} from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setFormSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <p className={cn(
            "text-muted-foreground text-lg max-w-3xl",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            "transition-all duration-700 delay-200 ease-out"
          )}>
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className={cn(
            "border-border/40 backdrop-blur-sm bg-card/80",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
            "transition-all duration-700 delay-300 ease-out"
          )}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    required
                    className="bg-background/50"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting || formSuccess}
                >
                  {isSubmitting ? 'Sending...' : formSuccess ? (
                    <span className="flex items-center">
                      <CheckCircleIcon className="mr-2 h-4 w-4" /> Message Sent
                    </span>
                  ) : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className={cn(
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
            "transition-all duration-700 delay-400 ease-out"
          )}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                  <MailIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    San Francisco, California
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="h-12 w-12 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="h-12 w-12 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="h-12 w-12 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}