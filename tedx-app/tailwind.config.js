/** @type {import('tailwindcss').Config} */
module.exports = {
  //- content: [],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          /*
          *in case white and black Only use in black and white
          *(bg-white,bg-black)
          *
          *how to use custom colors , background and text example
          *
          *bg-bg-red
          * 
          *text-pinktdx
          *
          * 
          * How to use custom Font:
          * 
          * font-[Alata]
          * 
          */ 
          'bg-white': '#FFFFFF',
          'bg-black': '#000000',
          'bg-red': '#FF0000',
          'bg-disabled':'#ADADAD',
          'bg-insta':"#262626",//social media
          'bg-linkedin':"#262626",//social media
          'bg-mail':"#EA4335",//social media
          'bg-schema':"#DD3333",
          'deep-blue': '#030925',// text
          'pinktdx': '#FF2D55',// text
          'gray':"#4A4E62",//subtitles content
        },
        fontFamily: {
          Outfit: ['Outfitthin'],
          Roboto: ['RobotoMonoRegular'],
          BigShoulders: ['BigShoulderTextthin'],
          Sans:["OpenSans-Bold"]
        },
        
      }
    },
    plugins: [],
  }

