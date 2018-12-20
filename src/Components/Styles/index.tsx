import styled from 'styled-components'
import mockStyles from './../../Assests/Mock/styles.json'

const h1 = (styles: any) => {
    return `color: ${styles.color}
            text-align: ${styles.align}
            font-size: ${styles.fontSize}px
            font-family: ${styles.fontFamily ? styles.fontFamily : mockStyles.fontFamily}`
}

export default {
    'Title': styled.h1`${(props: IPropStyles) => h1(props)}`
}