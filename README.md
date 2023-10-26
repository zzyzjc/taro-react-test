# taro-react-test

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

在微信小程序上完全没有问题，但是在支付宝上就完全没有反应，success、fail、complete全部未执行，也没有报错
