The font is Archivo, a free font which is similar to Mabry (the font on your website)

TODO
Update theme based on user pref

const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
// Use dark color scheme
}

We’ve also added a hook to subscribe to state updates to the users preferences:

import { Text, useColorScheme } from 'react-native';

const MyComponent = () => {
const colorScheme = useColorScheme();
return <Text>useColorScheme(): {colorScheme}</Text>;
};
