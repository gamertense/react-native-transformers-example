# Transformers.js example for React Native

This is an example of how to use the `transformers.js` package in a React Native project. The example simulates a scenario where a user travels to a foreign country and wants to open an app to use the camera to translate and summarize an article. The app uses two packages to achieve this:

- `react-native-tesseractocr`
- `@fugood/transformers`

> Since the `@fugood/transformers` package isn't officially released for use in React Native, we will use a prerelease maintained by the BRICKS team.

### Current Limitations

- The `@devinikhiya/react-native-tesseractocr` package is not supported on iOS as stated by its author.
- It takes a significant amount of time to translate and summarize.

## Prerequisites

- Node.js
- Yarn
- Android Studio

## Installation

```sh
yarn
```

## Usage

```sh
yarn android
```
