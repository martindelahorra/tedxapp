/** @type {import('tailwindcss').Config} */
module.exports = {
  //- content: [],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          'bg-primary': '#FFFFFF',
          'bg-secundary': '#FF0000',
          'bg-disabled':'#ADADAD',
          'bg-insta':"#262626",
          'bg-linkedin':"#262626",
          'bg-mail':"#EA4335",
          'bg-spk':"#DD3333",
          'black': '#030925',
          'title-spk': '#FF2D55',
          'subtitle-spk':"#4A4E62",
        },
        fontFamily: {
          Outfit: ['Outfit-thin'],
          Roboto: ['RobotoMono-Regular'],
          BigShoulders: ['BigShoulderText-thin']
        },
      },
    },
    plugins: [],
  }

