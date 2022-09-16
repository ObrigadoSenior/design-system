import { fontWeight } from "../../travelTheme";
import { FontWeightField } from "../../travelThemeTypes";

export interface IStoriesFontWeights extends IStoriesFontWeightsText {
  name?: string;
  size?: string;
}

interface IStoriesFontWeightsText {
  title?: string;
  usage?: string;
}


export const storiesFontWeights = () => {
  const fontSizesArray: IStoriesFontWeights[] = [];
  const keys = Object.keys(fontWeight) || [];
  const values = Object.values(fontWeight) || [];

  keys.map((name, index) => {
    const size: IStoriesFontWeights = {
      name,
      size: values.length >= index ? values[index] : '',
      ...fontSizeText[name],
    }
    fontSizesArray.push(size)
  })  
  return fontSizesArray;
}

const fontSizeText:  {
  [key in FontWeightField]: IStoriesFontWeightsText
} = {
  light: {
    title: 'Light',
    usage: 'Emphasize neighboring text',
  },
  regular: {
    title: 'Regular',
    usage: 'Standard - Paragraphs',
  },
  medium: {
    title: 'Medium',
    usage: 'Links, labels, buttons, to emphasise words in paragraphs ',
  },
  bold: {
    title: 'Bold',
    usage: 'Headlines',
  },
}