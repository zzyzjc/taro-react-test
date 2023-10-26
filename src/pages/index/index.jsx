import { View, Text, Camera, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Taro from '@tarojs/taro'

import './index.less'

export default function Index() {


  useLoad(() => {
    console.log('Page loaded.')
  })

  const initCtx = () => {

  }

  const takeCamera = () => {
    const ctx = Taro.createCameraContext()
    console.log('takeCamera', ctx)
    ctx.takePhoto({
      quality: 'high',
      success: res => {
        console.log('success', res)
      },
      fail: err => {
        console.log('error', err)
      },
      complete: done => {
        console.log('complete', done)
      }
    })
  }

  const onCameraError = (err) => {
    console.log('onCameraError', err)
  }

  return (
    <View className='index'>
      <Camera 
        devicePosition='front'
        flash='off'
        onError={ onCameraError }
        onReady={ initCtx } ></Camera>

    <Button onClick={ takeCamera }>拍照</Button>
    </View>
  )
}
