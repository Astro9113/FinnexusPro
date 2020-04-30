import React from 'react'
import Center from '@components/center'
import { extend } from 'koot'
import classNames from 'classnames'

import HomeMobile from '@views/home/mobile'

@extend({
    styles: require('./index.module.less'),
})

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMobile: true,
        }


        this.handlerSubscribe = this.handlerSubscribe.bind(this)

    }

    componentDidMount() {
        this.setState({
            isMobile: window.isMobile === true ? window.isMobile : false,
        })
    }

    handlerSubscribe() {
        window.open('https://mailchi.mp/9c15712d2bbf/finnexus-newsletter')
    }


    render() {

        const { isMobile } = this.state

        const { className } = this.props

        const fooCls = isMobile ? "footer-mobile" : "footer"

        const footerClassNames = classNames({
            [className]: true
        })

        return (

            <footer className={footerClassNames}>
                <section className={fooCls}>
                    <Center className="wrapper">
                        <ul className="left">
                            <li><a href="https://t.me/FinNexusOfficial" target="_blank" rel="noopener noreferrer"><i className="fa fa-telegram"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/finnexus/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="https://twitter.com/fin_nexus/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.facebook.com/FinNexus/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://medium.com/finnexus/" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium"></i></a></li>
                            <li><a className="wechat-wrap" rel="noopener noreferrer">
                                <i className="fa fa-weixin"></i>
                                <div className="wechat-pop"></div>
                            </a></li>
                            <li><a href="mailto:Info@finnexus.io" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-o"></i></a></li>
                        </ul>
                        <div className="right subscribe" onClick={this.handlerSubscribe}>
                            <input type="text" placeholder={__('pages.home.subscribePlaceholder')} />
                            <button>{__('pages.home.subscribe')}</button>
                        </div>
                    </Center>
                </section>
            </footer>
        )
    }
}

export default Footer
