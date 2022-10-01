import React from 'react'
import { View } from 'react-native'
import { useTheme } from '@/Hooks'

interface ICenterFiller {
  children: React.ReactNode
}

const CenterFiller: React.FC<ICenterFiller> = ({ children }) => {
  const {
    Layout,
    NavigationTheme: { colors },
  } = useTheme()
  return (
    <View
      style={[Layout.fill, Layout.center, { backgroundColor: colors.border }]}
    >
      {children}
    </View>
  )
}

export default CenterFiller
