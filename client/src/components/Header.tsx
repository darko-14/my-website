import React from 'react';
import '../css/Header.scss'


class Header extends React.Component<any, any> {


    render(): React.ReactNode {
        return (
            <div className='header'>
                <div>LOGO</div>
                <div>menuitems</div>
                <div>Header Btn</div>
            </div>
        )
    }
}


export default Header
