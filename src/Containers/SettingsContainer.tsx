import { CenterFiller } from '@/Components'
import React from 'react'
import { Text } from 'react-native'

interface ISettingContainer {}
const SettingContainers: React.FC<ISettingContainer> = () => {
  return (
    <CenterFiller>
      <Text>maker me alive</Text>
    </CenterFiller>
  )
}

export default SettingContainers
