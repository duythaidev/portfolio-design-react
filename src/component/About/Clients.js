import React from 'react'
import '../../styles/About/Clients.scss'
import succ from '../../assets/logoSucc.png'

class Clients extends React.Component {
    state = {

    }
    render() {
        return (
            <div className="clients-container">
                <div className="clients-content">
                    <img src={'https://seeklogo.com/images/S/samsung-logo-8A87EDFB33-seeklogo.com.png'} alt="chadface" />
                </div>
                <div className="clients-content">
                    <img src={'https://themonest.vn/wp-content/uploads/2020/08/1200px-Coca-Cola_logo.svg-300x100.png'} alt="chadface" />
                </div>
                <div className="clients-content">
                    <img src={'https://www.lenubu.com/wp-content/uploads/2015/01/logo-lenubu-1100px-en-blanco.png   '} alt="chadface" />
                </div>
                <div className="clients-content">
                    <img src={'https://assets.st-note.com/production/uploads/images/103810182/7d335a903db9c151ba4226b519c681b1.png?width=800'} alt="chadface" />
                </div>
            </div>
        )
    }
}

export default Clients