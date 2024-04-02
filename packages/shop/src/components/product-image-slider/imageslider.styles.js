import '@lib/utils/type-defs.util'

/** @type {Styles} */

export const styles = {

    root:{
        position: 'relative', 
        width: '100%', 
        overflow: 'hidden',
    },

    prevButton:{
        cursor: 'pointer',
        position: 'absolute',
        top: '50%',
        left: 0,
        marginTop: '-22px',
        padding: '16px',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '20px',
        transition: '0.6s ease',
        border: 'none',
        background: 'transparent',
    },

    sliderImage:{
        width: '70%', 
        height: 'auto', 
    },

    nextButton:{
        cursor: 'pointer',
        position: 'absolute',
        top: '50%',
        right: 0,
        marginTop: '-22px',
        padding: '16px',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '20px',
        transition: '0.6s ease',
        border: 'none',
        background: 'transparent',
    }

}