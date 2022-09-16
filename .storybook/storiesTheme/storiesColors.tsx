import {  TravelColorsField } from "../../travelThemeTypes";
import { travelColors } from "../../travelTheme";

import { hexToRgba } from "../__stories__/design-system-utils";

export interface IStoriesColors extends IStoriesColorText, IStoriesBreak {
  name?: string;
  hex?: string;
  rgba?: string;
}

interface IStoriesColorText {
  title?: string;
  usage?: string;
}

interface IStoriesBreak {
  breakTitle?: string;
  breakDescription?: string;
  indexPos: number;
}

const colorBreak: IStoriesBreak[] = [
  {
    breakTitle: 'Main',
    breakDescription: 'The red and blue colour combination is an almost iconic Stena Line feature. It has been part of our visual expression for almost 60 years. Today, our primary colours are Modern Red and Modern Blue, slightly warmer and more caring versions of the traditional Stena AB colours developed to reflect our culture. Both these colours represent a strong visual foundation for our brand to build from and should be dominant in all our communication.',
    indexPos: 0,
  },
  {
    breakTitle: 'System',
    breakDescription: 'System colours that will enhance the visual design and create depth when users are interacting with elements.',
    indexPos: 4,
  },
  {
    breakTitle: 'Complementary',
    breakDescription: 'These colours are expressions of our close relationship with the sea and our Swedish roots. Chosen to convey warmth, comfort and familiarity, they are perfect as accent colours when a ‘less is more’ visual approach is required. They should always be used together with our primary colours and they can be used to great effect in text. Lighter complimentary colours can also be used as a background.',
    indexPos: 9,
  },
  {
    breakTitle: 'Sustainability',
    breakDescription: 'Stena Modern Green is a complimentary colour we only use when communicating sustainability. It should not be used in any other context.',
    indexPos: 16,
  },
  {
    breakTitle: 'Extra',
    breakDescription: 'Color code for Stenaline travel program - Extra.',
    indexPos: 17,
  }
];

export const storiesColors = () => {
  const colors: IStoriesColors[] = [];
  const keys = Object.keys(travelColors) || [];
  const values = Object.values(travelColors) || [];
  keys.map((name, index) => {
    const implBreak = colorBreak.find(({ indexPos } ) => indexPos === index);
    implBreak && colors.push(implBreak);
    const color: IStoriesColors = {
      name,
      hex: values.length >= index ? values[index] : '',
      rgba: values.length >= index ? hexToRgba(values[index]) as string : '',
      ...colorText[name],
    }
    colors.push(color)
  })  
  return colors;
}

const colorText:  {
  [key in TravelColorsField]: IStoriesColorText
} = {
  modernRed: {
    title: 'Modern Red',
    usage: 'Primary - CTA - dominant',
  },
  modernBlue: {
    title: 'Modern Blue',
    usage: 'Links',
  },
  tjara: {
    title: 'Tjära',
    usage: 'Classic, timeless black is our interpretation of the tar (tjära) used to seal the hulls of the old fishing boats on Donsö.',
  },
  moln: {
    title: 'Moln',
    usage: "Like a cloud (moln) on a summer's day, this classic, weightless beauty is the perfect complement to any of our sea-inspired colour tones.",
  },
  silver: {
    title: 'Silver',
    usage: 'Borders',
  },
  silverLight: {
    title: 'Silver light',
    usage: 'Disabled elements',
  },
  silverDark: {
    title: 'Silver dark',
    usage: '',
  },
  shadow: {
    title: 'Shadow',
    usage: 'Shadows',
  },
  overlay: {
    title: 'Overlay',
    usage: 'Overlays - darker shadows',
  },
  sand: {
    title: 'Sand',
    usage: 'Inspired by the sand (sand) on long, sun-kissed beaches, this is a subtle, warm tone with a pure, natural vibe.',
  },
  snackskal: {
    title: 'Snäckskal',
    usage: 'Sun bleached and diffuse pink like washed up seashells (snäckskal), this is a relaxing, gentle shade with a soft, natural feeling.',
  },
  sjobod: {
    title: 'Sjöbod',
    usage: 'Our tribute to the unique rusty red colour on the quaint, traditional fisherman’s huts (sjöbod) on our founder’s home island of Dönsö.',
  },
  tang: {
    title: 'Tång',
    usage: 'This specific type of seaweed (tång) is a dark, rich colour and a captivating element of the sea’s colour spectrum on Sweden’s west coast.',
  },
  himmel: {
    title: 'Himmel',
    usage: 'This soft, gentle shade of blue is every cloudless sky (himmel) condensed into one joyful splash of summer.',
  },
  hav: {
    title: 'Hav',
    usage: 'Reflecting the deep blue sea (hav) our ferries travel across every day, this colour conveys the power of the ocean.',
  },
  mussla: {
    title: 'Mussla',
    usage: 'Darker and more sober in tone, this shade is reminiscent of the blue mussels (mussla) found in our waters.',
  },
  modernGreen: {
    title: 'Modern Green',
    usage: 'Environmental',
  },
  extra: {
    title: 'Extra',
    usage: 'Extra program',
  }
}