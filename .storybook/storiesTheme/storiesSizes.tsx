import { sizes } from "../../travelTheme";
import { SizesField } from "../../travelThemeTypes";

export interface IStoriesSizes extends IStoriesSizeText {
  name?: string;
  size?: string;
}

interface IStoriesSizeText {
  title?: string;
  usage?: string;
}


export const storiesSizes = () => {
  const sizesArray: IStoriesSizes[] = [];
  const keys = Object.keys(sizes) || [];
  const values = Object.values(sizes) || [];

  keys.map((name, index) => {
    const size: IStoriesSizes = {
      name,
      size: values.length >= index ? values[index] : '',
      ...sizeText[name],
    }
    sizesArray.push(size)
  })  
  return sizesArray;
}

const sizeText:  {
  [key in SizesField]: IStoriesSizeText
} = {
  none: {
    title: 'None',
    usage: 'Hide - remove',
  },
  xxxsmall: {
    title: 'XXX-Small',
    usage: 'Border radius - Border width',
  },
  xxsmall: {
    title: 'XX-Small',
    usage: 'Border radius - Border width - Margins - Paddings',
  },
  xsmall: {
    title: 'X-Small',
    usage: 'Border radius - Margins - Paddings',
  },
  small: {
    title: 'Small',
    usage: 'Border radius - Margins - Paddings',
  },
  medium: {
    title: 'Medium',
    usage: 'Margins - Paddings - Width - Height',
  },
  large: {
    title: 'Large',
    usage: 'Margins - Paddings - Width - Height',
  },
  xlarge: {
    title: 'X-Large',
    usage: 'Width - Height',
  },
  xxlarge: {
    title: 'XX-Large',
    usage: 'Width - Height',
  },
}