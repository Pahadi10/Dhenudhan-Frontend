import '@lib/utils/type-defs.util'

/** @type {Styles} */

export const styles = {
    
    root:{
        marginLeft: '20px',
        position: 'relative'
    },

    subcategoryContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #E8E1DF',
        width: 180,
        margin: '10px 0',
        alignItems: 'center',
        padding: '3px',
        cursor: 'pointer',
    },
    
    subcategoryName: {
        // flexGrow: 1,
        margin: '4px',
        // padding: '4px',
        cursor: 'pointer',
    },

    arrowIconContainer: {
        padding: '5px',
    },

    arrowIcon: {
        // fill: 'white', 
    },

    subCategoryMenuIcon:{
        display: 'flex', justifyContent: 'space-between', gap:'30%'
    },

    modal:{

        position: 'absolute',
        top: '10%',
        left: '20%',
        width: '80%',
        background: 'background.paper',
        boxShadow: 24,
        p: 4,
        overflow: 'scroll',
        height: '90%',

    }
}
