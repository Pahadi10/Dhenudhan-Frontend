import '@lib/utils/type-defs.util'

/** @type {Styles} */

export const styles = {

    root:{

    },

    bannerBox:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    bannerImage:{
        width: '100%',
        // marginTop: '-10%',
    },

    bannrTextBox:{
        position: 'absolute',
        top: '35%',
        textAlign: 'center',
        width: '90vw'
    },

    title:{
        fontWeight: '900',
        fontSize: '3em',
        padding: '5px'
    },
    
    desc:{
        fontSize: '1.5em',

    },

    promoBanner:{
        width: '50%'
    },

    noDataContainer:{
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
    },

    noDataImage:{
        width: '60%'
    },

    noDataText:{
        padding: 30
    },

    loadMoreButtonContainer:{
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '20px',
        marginBottom: '3%',
    },
    
}