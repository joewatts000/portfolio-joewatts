import { Button } from '@/components/ui/button';
import { FadeInWhenVisible } from '@/components/FadeInWhenVisible';
import { Mail, Linkedin } from 'lucide-react';

export function Contact() {
  return (
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
  )
}