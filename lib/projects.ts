export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects = [
  {
    title: 'SurfCams Web App',
    description: 'Webcam management platform with video filtering tools and user authentication and management',
    image: './jeremy-bishop-zam3m6W2npM-unsplash.jpg',
    alt: 'Photo by Jeremy Bishop on Unsplash',
    tags: ['Typescript', 'Tailwind', 'React', 'Firebase', 'Clerk', 'Next.js'],
    demo: 'https://surfcams.app/',
  },
  {
    title: 'React Stick On Scroll Npm Package',
    description: 'A Lightweight, robust and customizable React component that animates and sticks elements based on scroll position',
    image: './scott-sanker-IDaeLeKiie0-unsplash.jpg',
    alt: 'Photo by Scott Sanker on Unsplash',
    tags: ['React', 'TypeScript', 'Tailwind', 'npm'],
    github: 'https://github.com/joewatts000/react-stick-on-scroll',
    demo: 'https://joewatts000.github.io/react-stick-on-scroll/',
  },
  {
    title: 'Noise Nanny Web App',
    description: 'Monitor and manage noise levels in the home or office, with customisable sound alerts and thresholds',
    image: './c-d-x-PDX_a_82obo-unsplash.jpg',
    alt: 'Photo by C D-X on Unsplash',
    tags: ['Svelte', 'Node',],
    demo: 'https://www.noisenanny.com/',
  },
  // {
  //   title: 'Component Copier Browser Extension',
  //   description: 'Chrome extension that allows you to select dom elements and transform them into React components and styled components', 
  //   image: './lesly-scott-uPJuvaBJca8-unsplash.jpg',
  //   alt: 'Photo by Lesly Scott on Unsplash',
  //   tags: ['Javascript', 'TypeScript', 'styled-components', 'React', 'browser extension'],
  // },
  {
    title: 'SurfWatch Web App',
    description: 'Watersports safety assessment and monitoring platform for surf coaches and instructors',
    image: './clement-falize--1jkss-G6SU-unsplash.jpg',
    alt: 'Photo by Clément Falize on Unsplash',
    tags: ['Typescript', 'Tailwind', 'React', 'Firebase', 'Clerk', 'Next.js'],
    demo: 'https://www.surfwatch.app/',
  },
  
  {
    title: 'Guitar and Guitalele Tuner Web App',
    description: 'Web app for tuning guitaleles and guitars',
    image: './thomas-kelley-2ZWCDBuw1B8-unsplash.jpg',
    alt: 'Photo by Thomas Kelley on Unsplash',
    tags: ['Svelte', 'Node',],
    demo: 'https://www.guitaleletuner.com/',
  },
  {
    title: 'True North Surf Club Web App',
    description: 'Mobile app for surf club members with forecasting and location sharing tools',
    image: './johannes-hohls-icTz0MbkRVU-unsplash.jpg',
    alt: 'Photo by Johannes Hohls on Unsplash',
    tags: ['Typescript', 'Tailwind', 'React', 'Firebase', 'Clerk', 'Next.js'],
    demo: 'https://tnsc-app.vercel.app/',
  },
  {
    title: 'Postcode Comparison Web App',
    description: 'Web app for comparing lists of postcodes',
    image: './penghao-xiong-qgMJXlLrxP4-unsplash.jpg',
    alt: 'Photo by Penghao Xiong on Unsplash',
    tags: ['Typescript', 'Tailwind', 'React'],
    demo: 'https://postcode-checker.vercel.app/',
  },
  {
    title: 'Car Pool Calculator Website',
    description: 'Web app for calculating the number of cars needed for a car pool',
    image: './girl-with-red-hat-pN-Prl1jMVM-unsplash.jpg',
    alt: 'Photo by Girl with red hat on Unsplash',
    tags: ['Typescript', 'Tailwind', 'React'],
    github: 'https://github.com/joewatts000/car-pool-calculator',  
    demo: 'https://www.carpoolcalculator.com/',
  },
  {
    title: 'Website Party Browser Extension',
    description: 'Browser extension that covers the current webpage with fireworks, explosions and sparkles',  
    image: './lesly-scott-uPJuvaBJca8-unsplash.jpg',
    alt: 'Photo by Lesly Scott on Unsplash',
    tags: ['Javascript', 'TypeScript', 'styled-components', 'React', 'Browser Extension'],
  },
];