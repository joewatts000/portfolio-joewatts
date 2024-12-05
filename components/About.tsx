import { Button } from '@/components/ui/button';
import { FadeInWhenVisible } from '@/components/FadeInWhenVisible';
import { Github, Mail } from 'lucide-react';
import { TechStack } from './TechStack';

export function About() {
  return (
    <section id="about" className="py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I&apos;m a passionate full-stack developer with over 10 years experience in web technologies. With a strong foundation in frontend development and a growing experience in backend development,
              I specialize in React, Typescript and Node but I also love experimenting with any library or framework</p>
            <p className="text-lg text-muted-foreground mb-8">I have 6 years field and technical experience and 8 years software development experience for a leading market research company, building web apps and research & analytics tools</p>
            <p className="text-lg text-muted-foreground mb-8">During that time i also worked for digital design agencies building games, websites and apps, using custom CMS&apos;s or wordpress with custom themes. And have built my own apps and sites with a variety of technologies</p>
            <TechStack />
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
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}