import { useCallback } from 'react'
import { Alert } from 'react-native'
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker'

type UpdateCallback = (imageUri: string | undefined) => void

export const usePhoto = (onUpdate?: UpdateCallback) => {
  const handleResponse = useCallback(
    (res: ImagePickerResponse) => {
      console.log('🚀 ~ usePhoto ~ res:', res)

      if (res.assets?.length) {
        const [asset] = res.assets
        if (asset.width && asset.height) {
          onUpdate?.(asset.uri)
        }
      } else if (res.errorCode) {
        Alert.alert('Error', res.errorMessage ?? `code: ${res.errorCode}`)
      } else if (!res.didCancel) {
        Alert.alert('Error', 'Seems you selected unsupported image')
      }
    },
    [onUpdate],
  )

  const selectPhoto = useCallback(() => {
    launchImageLibrary({ mediaType: 'photo' }).then(handleResponse)
  }, [handleResponse])

  const takePhoto = useCallback(() => {
    launchCamera({ mediaType: 'photo' }).then(handleResponse)
  }, [handleResponse])

  return { selectPhoto, takePhoto }
}
