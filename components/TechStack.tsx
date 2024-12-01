import { BunIcon, ClerkIcon, CssIcon, FirebaseIcon, GitIcon, HtmlIcon, JavascriptIcon, JestIcon, NextJsIcon, NodeIcon, ReactIcon, SolidIcon, SvelteIcon, TailwindIcon, TypescriptIcon, WordpressIcon } from "./TechIcons";


export const techItems = [
  { name: 'JavaScript', icon: JavascriptIcon, color: '#F7DF1E' },
  { name: 'TypeScript', icon: TypescriptIcon, color: '#3178C6' },
  { name: 'React', icon: ReactIcon, color: '#61DAFB' },
  { name: 'Next.js', icon: NextJsIcon },
  { name: 'Tailwind CSS', icon: TailwindIcon, color: '#06B6D4' },
  { name: 'Svelte', icon: SvelteIcon, color: '#FF3E00' },
  { name: 'Solid', icon: SolidIcon, color: "#2C4F7C" },
  { name: 'Jest', icon: JestIcon },
  { name: 'Firebase', icon: FirebaseIcon, color: '#DD2C00' },
  { name: 'Clerk', icon: ClerkIcon, color: '#6C47FF' },
  { name: 'Node.js', icon: NodeIcon, color: '#5FA04E' },
  { name: 'Bun', icon: BunIcon },
  { name: 'HTML5', icon: HtmlIcon, color: '#E34F26' },
  { name: 'CSS3', icon: CssIcon, color: '#1572B6' },
  { name: 'GitHub', icon: GitIcon },
  { name: 'WordPress', icon: WordpressIcon, color: '#21759B' },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 mt-16">
      {techItems.map((tech, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-gray-200 p-6 text-center`}
          style={{ color: tech.color }}
        >
          <tech.icon className={`w-8 h-8`} />
          <p className="text-sm font-medium text-primary">{tech.name}</p>
        </div>
      ))
      }
    </div >
  )
}