<img src="./screenshots/Android-List.png" height="300" > <img src="./screenshots/Android-Detail.png" height="300" >
<img src="./screenshots/iOS-List.png" height="300" > <img src="./screenshots/iOS-Detail.png" height="300" >

## Running the app

The app has been bootstrapped with `react-native init` and dependencies installed with yarn. Xcode and Android Studio are required.

- Install dependencies with
  `yarn install`
- Start metro to serve the js bundle with
  `yarn start`
- Run on the iOS emulator with
  `yarn ios`
- Run on the Android emulator with
  `yarn android`

Complete environment setup instructions can be found at https://reactnative.dev/docs/environment-setup

## Notes

- State management is done with MobX. It definitely has some downsides but I like it for getting things up and running simply.
- The font is Archivo, a free font which is similar to Mabry (the font on your website)
- I've a couple of visual deviations from the designs. In a real setting I'd run ideas like this past stakeholders
- There's a warning for invalid prop types which is incorrect. The props are fine.
