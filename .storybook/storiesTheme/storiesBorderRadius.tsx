import { sizes } from "../../travelTheme";
import { SizesField } from "../../travelThemeTypes";

export interface IStoriesBorderRadius extends IStoriesBorderRadiusText {
  name?: string;
  size?: string;
}

interface IStoriesBorderRadiusText {
  title?: string;
  usage?: string;
}


export const storiesBorderRadius = () => {
  const borderRadiusArray: IStoriesBorderRadius[] = [];
  const keys = Object.keys(sizes) || [];
  const values = Object.values(sizes) || [];

  keys.map((name, index) => {
    const size: IStoriesBorderRadius = {
      name,
      size: values.length >= index ? values[index] : '',
      ...borderRadiusText[name],
    }
    borderRadiusArray.push(size)
  })  
  return borderRadiusArray;
}

const borderRadiusText:  {
  [key in SizesField]: IStoriesBorderRadiusText
} = {
  none: {
    title: 'None',
    usage: '',
  },
  xxxsmall: {
    title: 'XXX-Small',
    usage: '',
  },
  xxsmall: {
    title: 'XX-Small',
    usage: '',
  },
  xsmall: {
    title: 'X-Small',
    usage: '',
  },
  small: {
    title: 'Small',
    usage: '',
  },
  medium: {
    title: 'Medium',
    usage: '',
  },
  large: {
    title: 'Large',
    usage: '',
  },
  xlarge: {
    title: 'X-Large',
    usage: '',
  },
  xxlarge: {
    title: 'XX-Large',
    usage: '',
  },
}