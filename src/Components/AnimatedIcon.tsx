import { useTheme } from '@/Hooks'
import React, { useCallback } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Feather'

const AnimatedIcon: React.FC<{}> = () => {
  const { Colors } = useTheme()
  const scale = useSharedValue(1)

  const reanimtedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    }
  })

  const onPressIn = useCallback(() => {
    scale.value = withSpring(2)
  }, [scale])

  const onPressOut = useCallback(() => {
    scale.value = withSpring(1)
  }, [scale])
  return (
    <Animated.View
      style={reanimtedStyle}
      onResponderStart={onPressIn}
      onResponderRelease={onPressOut}
    >
      <Icon name="home" size={30} color={Colors.home} />
    </Animated.View>
  )
}

export default AnimatedIcon
