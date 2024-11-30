/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, ExternalLink, Mail, Linkedin } from 'lucide-react';
import { projects } from '@/lib/projects';
import { FadeInWhenVisible } from '@/components/FadeInWhenVisible';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
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

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-muted/50 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeInWhenVisible key={index}>
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                      width={800}
                      height={450}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 md:min-h-16 items-baseline">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-primary/10 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer">
                          <Button size="sm">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <Button size="sm">
                            Demo
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">About Me</h2>
              <p className="text-lg text-muted-foreground mb-8">
                I&apos;m a passionate full-stack developer with over 10 years experience in web technologies.
                I specialize in building scalable applications using React, Typescript and Node but I also love experimenting with any library or framework</p>
              <p className="text-lg text-muted-foreground mb-8">With a strong foundation in frontend development and an evolving understanding of backend development, I create
                seamless user experiences backed by robust server architectures
              </p>
              {/* <p className="text-lg text-muted-foreground mb-8">I&apos;m also a father of 3, and passionate surfer</p>
              <p className="text-lg text-muted-foreground mb-8">I&apos;m always open to new projects and opportunities</p> */}
              <div className="flex justify-center gap-4">
                <Button onClick={() => {
                  window.location.href = 'mailto:squarepeoplesolutions@gmail.com?subject=Contact%20From%20Joe%20Watts%20Portfolio%20Site';
                }}>
                  Get in Touch
                  <Mail className="w-4 h-4 ml-2" />
                </Button>
                <a href="https://github.com/joewatts000" target="_blank" rel="noreferrer">
                  <Button>
                    <Github className="w-5 h-5 mr-2" />
                    Github
                  </Button>
                </a>
                {/* <Button variant="outline">
                  <Code className="w-4 h-4 mr-2" />
                  View Resume
                </Button> */}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>
              <p className="text-lg text-muted-foreground mb-8">
                I&apos;m always interested in hearing about new projects and opportunities.
                Feel free to reach out if you&apos;d like to collaborate or just chat!
              </p>
              <div className="flex justify-center gap-4">
                <Button onClick={() => {
                  window.location.href = 'mailto:squarepeoplesolutions@gmail.com?subject=Contact%20From%20Joe%20Watts%20Portfolio%20Site';
                }}>
                  Email Me
                  <Mail className="w-5 h-5 ml-2" />
                </Button>
                <a href="https://www.linkedin.com/in/joe-watts-3091952bb/" target="_blank" rel="noreferrer">
                  <Button>
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </main>
  );
}