// Arquivo fonts.js
import {
    useFonts, 
     Heebo_100Thin,
     Heebo_200ExtraLight,
     Heebo_300Light,
     Heebo_400Regular,
     Heebo_500Medium,
     Heebo_600SemiBold,
     Heebo_700Bold,
     Heebo_800ExtraBold,
     Heebo_900Black,
} from '@expo-google-fonts/heebo';

const fontAliases = {
    latoThin: 'Heebo_100Thin',
    latoThinI: 'Heebo_200ExtraLight',
    latoLight: ' Heebo_300Light',
    latoLightI: 'Heebo_400Regular',
    latoRegular: 'Heebo_500Medium',
    latoRegularI: 'Heebo_600SemiBold',
    latoBold: 'Heebo_700Bold',
    latoBoldI: 'Heebo_800ExtraBold',
    latoBlackI: 'Heebo_900Black',
  };

export default function fonts() {
    let [fontsLoaded] = useFonts({
        Heebo_100Thin,
        Heebo_200ExtraLight,
        Heebo_300Light,
        Heebo_400Regular,
        Heebo_500Medium,
        Heebo_600SemiBold,
        Heebo_700Bold,
        Heebo_800ExtraBold,
        Heebo_900Black,
    });

    const fonts = {};
    for (const alias in fontAliases) {
        fonts[alias] = fontAliases[alias];
    }

    return { fontsLoaded, fonts };
}
