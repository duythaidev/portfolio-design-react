import React from 'react'

const ChangeLanguage = (WrappedComponent, language) => {
    let translation = language.EN

    const handleChangeLanguage = (lang) => {
        translation = (lang === 'EN') ? language.EN : language.VI
        // console.log('ok')
        console.log("LANGUAGE>>>: \n",translation)
        
    }
    return (props) => {
        // let translation = language.EN
        return (
            <WrappedComponent {...props} lang={translation} func={handleChangeLanguage}></WrappedComponent>
        )
    }
}
export default ChangeLanguage
