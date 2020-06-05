import {StyleSheet} from 'react-native';
import {COLORS} from './constants';

const fonts = StyleSheet.create({
  regular: {
    fontFamily: 'Archivo-Regular',
  },
  italic: {
    fontFamily: 'Archivo-Italic',
  },
  bold: {
    fontFamily: 'Archivo-Bold',
  },
  boldItalic: {
    fontFamily: 'Archivo-BoldItalic',
  },
  turquoise: {
    color: COLORS.TURQUOISE,
  },
  lightTurquoise: {
    color: COLORS.LIGHT_TURQUOISE,
  },
  lightOrange: {
    color: COLORS.LIGHT_ORANGE,
  },
  title: {
    fontSize: 36,
    marginTop: 7,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 7,
  },
});

export {fonts};
