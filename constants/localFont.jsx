import localFont from 'next/font/local'

const fontPeyda = localFont({
    src: [
        {
            path: '../public/fonts/peyda/PeydaWeb-Thin.woff2',
            weight: '100',
            style: 'normal',
          },
        {
            path: '../public/fonts/peyda/peydaWeb-light.woff2',
            weight: '300',
            style: 'normal',
          },
      {
        path: '../public/fonts/peyda/PeydaWeb-Regular.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../public/fonts/peyda/PeydaWeb-Medium.woff2',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../public/fonts/peyda/PeydaWeb-Bold.woff2',
        weight: '700',
        style: 'normal',
      },
      {
        path: '../public/fonts/peyda/PeydaWeb-ExtraBold.woff2',
        weight: '800',
        style: 'normal',
      },
      {
        path: '../public/fonts/peyda/PeydaWeb-Black.woff2',
        weight: '900',
        style: 'normal',
      },
    ],
    variable:"--font-peyda",
    style:"normal",
    display:"block"
  })

  export default fontPeyda