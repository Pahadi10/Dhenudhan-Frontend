import '@lib/utils/type-defs.util'

/** @type {Styles} */

export const styles = {

    root:{
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        marginTop: '2%',
    },
    
    prevButton:{
        color: 'white',
        position: 'absolute',
        background: 'transparent',
        height: '15%',
        fontSize: '1.8em',
        fontWeight: '900',
    },
    
    sliderBox:{
        display: 'flex', 
        overflow: 'hidden',
    },
    
    nextButton:{
        position: 'absolute',
        right: 0, 
        color: 'white',
        background: 'transparent',
        height: '15%',
        fontSize: '1.8em',
        fontWeight: '900',
    },
}