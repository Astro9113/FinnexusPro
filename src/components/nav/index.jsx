import React from 'react'
import { extend, getLocaleId } from 'koot'
import classNames from 'classnames'
import common from '@src/utils/common'

import Center from '@components/center'

@extend({
    styles: require('./index.module.less'),
    // connect
})
class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ceiling: false,
            localeId: '',
            localeUrl: '',
            isMobile: false,
            isShowButton: false,
        }

        this.handleScroll = this.handleScroll.bind(this)
        this.scroll = this.scroll.bind(this)
    }

    componentWillMount () {
        this.setState({
            localeId: getLocaleId()
        })
    }

    componentDidMount () {

        const url = window.location.href
        this.handleScroll()
        window.addEventListener('scroll', this.handleScroll)
        this.setState({
            localeUrl: getLocaleId() === 'zh' ? common.updateURLParameter(url, 'hl', 'en') : common.updateURLParameter(url, 'hl', 'zh'),
            isMobile: window.isMobile === true ? window.isMobile : false,
        })
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll () {
        // TODO
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 300) {
            this.setState({ ceiling: true })
        } else {
            this.setState({ ceiling: false })
        }
    }

    scroll (top, e) {
        e.preventDefault()
        window.scrollTo({
            top,
            behavior: 'smooth'
        })
    }

    scroll2 (top, e) {
    
        e.preventDefault()
        window.scrollTo({
            top,
            behavior: 'smooth'
        })

        this.setState({ 
            isShowButton: !this.state.isShowButton,
         })
    }

    clickButton() {
       
        this.setState({ 
            isShowButton: !this.state.isShowButton,
         })

         if (this.state.isShowButton == false) {
            setTimeout(()=> {
                this.setState({ 
                    isShowButton: false,
                 })
             }, 3000)
         }
         
    }

    clickButton2() {
       
        this.setState({ 
            isShowButton: false,
         })

    }

    render () {
        const { className } = this.props
        const { localeId, localeUrl, isMobile, isShowButton } = this.state
        const navClassNames = classNames({
            [className]: true,
            'ceiling': this.state.ceiling
        })

        let navDiv;
        if (!isShowButton) {
            navDiv = (
                <a title="down" className="nav-down" onClick={e => this.clickButton()}></a>
            )
            } else {
            navDiv = (
                <ul className="nav-links">
                    <li><a href={localeUrl} className="other-link" rel="noopener noreferrer">
                                <i className="icon iconfont icon-global"></i>
                                {localeId === 'en' ? 'ZH' : 'EN'}
                        </a>
                    </li>
                    <li><a href="#home" onClick={e => this.scroll2(0, e)}>{__('navs.home')}</a></li>
                    <li><a href="#team" onClick={e => this.scroll2(4500, e)}>{__('navs.team')}</a></li>
                    <li><a href="#partners" onClick={e => this.scroll2(4100, e)}>{__('navs.partners')}</a></li>
                    <li><a href="/FinNexus_Whitepaper_zh.pdf" target="_blank">{__('navs.whitePaperZh')}</a></li>
                    <li><a href="FinNexus_Whitepaper_en.pdf" target="_blank">{__('navs.whitePaperEn')}</a></li>
                </ul>
            )
            }

        if (isMobile) {
            return (
                <nav className={navClassNames}>
                    <div className="div-down">
                    <a className="logo" onClick={e => this.clickButton2()}></a>
                    {navDiv}                 
                    </div>
                    
                </nav>
            )
        } else {
            return (
                <nav className={navClassNames}>
    
                    <h1 className="title-hidden">{__('pages.home.title')}</h1>
                    <Center className="wrapper">
                        <a href="/" title="home" className="logo"></a>
                        <ul className="nav-links">
                            <li><a href="#home" onClick={e => this.scroll(0, e)}>{__('navs.home')}</a></li>
                            <li><a href="#team" onClick={e => this.scroll(3900, e)}>{__('navs.team')}</a></li>
                            <li><a href="#partners" onClick={e => this.scroll(3393, e)}>{__('navs.partners')}</a></li>
                            {/* <li><a href="###">{__('navs.news')}</a></li> */}
                            <li className="nav-sub-wrap">
                                <a href="###">{__('navs.whitePaper')}<i className="iconfont icon-triangle-down"></i></a>
                                <ul className="nav-sub">
                                    <li><a href="/FinNexus_Whitepaper_zh.pdf" target="_blank">{__('navs.whitePaperZh')}</a></li>
                                    <li><a href="FinNexus_Whitepaper_en.pdf" target="_blank">{__('navs.whitePaperEn')}</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="others">
                            <a
                                href={localeUrl}
                                className="other-link"
                                rel="noopener noreferrer"
                            >
                                <i className="icon iconfont icon-global"></i>
                                {localeId === 'en' ? 'ZH' : 'EN'}
                            </a>
                        </div>
                    </Center>
                </nav>
            )
        }
    }
}

export default Nav