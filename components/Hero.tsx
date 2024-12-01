import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Joe Watts
            <hr className='border-primary/30 w-full h-0.5 my-4' />
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Building beautiful, functional, and scalable web applications
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects">
              <Button size="lg" >
                View Projects
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg">
                Contact Me
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}