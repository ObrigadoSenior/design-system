import { fontSize } from "../../travelTheme";
import { FontSizeField } from "../../travelThemeTypes";

export interface IStoriesFontSizes extends IStoriesFontSizeText {
  name?: string;
  size?: string;
}

interface IStoriesFontSizeText {
  title?: string;
  usage?: string;
}


export const storiesFontSizes = () => {
  const fontSizesArray: IStoriesFontSizes[] = [];
  const keys = Object.keys(fontSize) || [];
  const values = Object.values(fontSize) || [];

  keys.map((name, index) => {
    const size: IStoriesFontSizes = {
      name,
      size: values.length >= index ? values[index] : '',
      ...fontSizeText[name],
    }
    fontSizesArray.push(size)
  })  
  return fontSizesArray;
}

const fontSizeText:  {
  [key in FontSizeField]: IStoriesFontSizeText
} = {
  xxxs: {
    title: 'XXX-Small',
    usage: 'Labels in forms',
  },
  xxs: {
    title: 'XX-Small',
    usage: 'Standard body text. Paragraphs, lists, links, primary buttons, secondary buttons, badge buttons and headlines in footer',
  },
  xs: {
    title: 'X-Small',
    usage: 'Text in forms',
  },
  s: {
    title: 'Small',
    usage: 'Headline in component',
  },
  m: {
    title: 'Medium',
    usage: 'Mobile section headline - what the section is about',
  },
  l: {
    title: 'Large',
    usage: 'Mobile page headline - what the page is about',
  },
  xl: {
    title: 'X-Large',
    usage: 'Dekstop section headline - what the section is about',
  },
  xxl: {
    title: 'XX-Large',
    usage: 'Desktop page headline - what the page is about',
  },
}