import { projects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { FadeInWhenVisible } from '@/components/FadeInWhenVisible';
import Image from 'next/image';

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-muted/50 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <p className="text-lg text-center text-muted-foreground mb-16 max-w-xl m-auto">All of my market research work is under NDA and most of my client work is in their own portfolios, but here are some of my personal projects, packages and extensions</p>
        </FadeInWhenVisible>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card className="overflow-hidden h-full flex flex-col" key={index}>
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                  width={800}
                  height={450}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
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
                <div className="flex gap-4 mt-auto mb-0">
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
          ))}
        </div>
      </div>
    </section>
  )
}