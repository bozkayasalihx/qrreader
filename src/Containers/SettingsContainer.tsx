import { CenterFiller } from '@/Components'
import React, { useEffect } from 'react'
import { Text } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated'

interface ISettingContainer {}
const SettingContainers: React.FC<ISettingContainer> = () => {
  // const progress = useSharedValue(1)
  // const scale = useSharedValue(2)

  // const reanimatedStyle = useAnimatedStyle(() => {
  //   return {
  //     opacity: progress.value,
  //     transform: [
  //       { scale: scale.value },
  //       { rotate: `${progress.value * 2 * Math.PI}rad` },
  //     ],
  //     borderRadius: (progress.value * 100) / 2,
  //   }
  // }, [])

  // useEffect(() => {
  //   progress.value = withRepeat(withSpring(0.5), 6, true)
  //   scale.value = withRepeat(withSpring(1), 6, true)
  // }, [progress, scale])

  return (
    <CenterFiller>
      {/* <Animated.View
        style={[
          { height: 100, width: 100, backgroundColor: 'blue' },
          reanimatedStyle,
        ]}
      /> */}
      <Text>salih is bestz</Text>
    </CenterFiller>
  )
}

export default SettingContainers
