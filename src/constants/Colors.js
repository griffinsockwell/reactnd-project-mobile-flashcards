import { generate } from 'string-to-color';

export default {
  black: '#1C1E20',
  green: '#00F4B9',
  red: '#F40055',
  getColor(string) {
    return `#${generate(string)}`;
  },
};
