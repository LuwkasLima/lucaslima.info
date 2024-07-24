# Welcome to my personal website's repo

This is a Next.js + Tailwind CSS personal website that showcases my profile, technical skills, international professional experiences, education, spoken languages, and certificates.

[Access Web Resume](https://www.lucaslima.info/)

NOTE: This is a custom deployment of [nextjs-resume](https://github.com/LuwkasLima/nextjs-resume)

## Features

- Professional summary highlighting my technical expertise and professional accomplishments
- Section detailing my education, languages I speak and certifications
- List of products/projects I've had the pleasure to contribute
- Section showcasing my international work experiences and life achievements

## Technology

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [React-pdf](https://react-pdf.org/)
- [Marked](https://marked.js.org/)
- [Front Matter](https://frontmatter.codes/docs/markdown)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI Colors](https://www.radix-ui.com/colors)
- [Vercel OG Image Generation](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)

### Usage

To run this website locally, clone this repository and install the dependencies:

```
git clone https://github.com/LuwkasLima/luwkaslima.github.io.git
cd luwkaslima.github.io
yarn install
yarn run dev
```

### Modify Custom Config

Clone the project you just created to your local machine. Open it in your favorite editor, and open up the `edit-me/config/` folder at the root. Here you will find a couple of placeholder images that you can swap out if you want. You can also edit the `manifest.json` and `resumeConfig.ts` to meet your needs. The config file contains the following constants that will be used throughout the project (these are typed to provide appropriate autocomplete and error checking):

- `accentColor`: `string`. The name of an accent palette from [Radix UI Colors](https://www.radix-ui.com/docs/colors/palette-composition/the-scales#colors). If using a standard color, the contrasting text color will be white, and if using a bright color, the contrasting text color will be black.
- `neutralColor`: `string`. The name of a neutral palette from [Radix UI Grays](https://www.radix-ui.com/docs/colors/palette-composition/the-scales#grays).
- `ogImageTheme`: `'light' | 'dark'`. Your OG share image will generate either a light or a dark variant.

## Further Customizations

For additional guidance on configuration, check [nextjs-resume](https://github.com/LuwkasLima/nextjs-resume) repository on Github.
