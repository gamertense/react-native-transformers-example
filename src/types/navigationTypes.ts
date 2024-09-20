export type RootStackParamList = {
  Home: undefined
  Translate: { textToTranslate: string }
  Summarize: { textToSummarize?: string }
}

export enum Routes {
  Home = 'Home',
  Translate = 'Translate',
  Summarize = 'Summarize',
}
