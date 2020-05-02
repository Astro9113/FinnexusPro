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
            isMobile: true,
            isShowButton: false,
        }

        this.handleScroll = this.handleScroll.bind(this)
        this.scroll = this.scroll.bind(this)
    }

    componentWillMount() {
        this.setState({
            localeId: getLocaleId()
        })
    }

    componentDidMount() {

        const url = window.location.href
        this.handleScroll()
        window.addEventListener('scroll', this.handleScroll)

        this.setState({
            // localeUrl: getLocaleId() === 'zh' ? common.updateURLParameter(url, 'hl', 'en') : common.updateURLParameter(url, 'hl', 'zh'),
            localeUrl: common.updateURLParameter(url, 'hl', getLocaleId()),
            isMobile: window.isMobile === true ? window.isMobile : false,
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    onChangeLang(lang) {
        window.location.href = common.updateURLParameter(window.location.href, 'hl', lang);
        window.location.reload;
    }

    handleScroll() {
        // TODO
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 300) {
            this.setState({ ceiling: true, isShowButton: false })
        } else {
            this.setState({ ceiling: false })
        }
    }

    scroll(top, e) {
        e.preventDefault()
        window.scrollTo({
            top,
            behavior: 'smooth'
        })
    }

    scroll2(top, e) {

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

        //  if (this.state.isShowButton == false) {
        //     setTimeout(()=> {
        //         this.setState({ 
        //             isShowButton: false,
        //          })
        //      }, 3000)
        //  }

    }

    clickButton2() {

        this.setState({
            isShowButton: false,
        })

    }

    render() {
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
                <div>
                    <a title="down" className="nav-down" onClick={e => this.clickButton()}></a>
                    <ul className="nav-links">

                        {/* <li><a href={localeUrl} className="other-link" rel="noopener noreferrer">
                                    <i className="icon iconfont icon-global"></i>
                                    {localeId === 'en' ? 'ZH' : 'EN'}
                            </a>
                        </li> */}

                        <li><a href="#home" onClick={e => this.scroll2(0, e)}>{__('navs.home')}</a></li>
                        <li><a href="#team" onClick={e => this.scroll2(3600, e)}>{__('navs.team')}</a></li>
                        <li><a href="#partners" onClick={e => this.scroll2(3200, e)}>{__('navs.partners')}</a></li>
                        <li><a href="http://insights.finnexus.io/" target="_blank">Insights</a></li>
                        <li><a href="https://medium.com/finnexus" target="_blank">Blog</a></li>
                        <li><a href=" https://www.docs.finnexus.io/" target="_blank">Resources</a></li>
                        <li><a href="https://www.icto.finnexus.io/" target="_blank">ICTO</a></li>
                        <li><a href="https://finnexus.github.io/Pdfs/FinNexus_Whitepaper_zh.pdf" target="_blank">{__('navs.whitePaperZh')}</a></li>
                        <li><a href="https://finnexus.github.io/Pdfs/FinNexus_Whitepaper_en.pdf" target="_blank">{__('navs.whitePaperEn')}</a></li>
                        {/* <li><a href="/icto" target="_blank">{__('navs.ictoZh')}</a></li>
                        <li><a href="/icto" target="_blank">{__('navs.ictoEn')}</a></li> */}
                        {/* <li><a href="https://finnexus.github.io/Pdfs/ICTO_zh.pdf" target="_blank">{__('navs.ictoZh')}</a></li>
                        <li><a href="https://finnexus.github.io/Pdfs/ICTO_en.pdf" target="_blank">{__('navs.ictoEn')}</a></li> */}

                        <li><i className="icon iconfont icon-global"></i><a onClick={e => this.onChangeLang('zh')} >{__('navs.LanZh')}</a></li>
                        <li><i className="icon iconfont icon-global"></i><a onClick={e => this.onChangeLang('en')}>{__('navs.LanEn')}</a></li>
                        <li><i className="icon iconfont icon-global"></i><a onClick={e => this.onChangeLang('ko')}>{__('navs.LanKo')}</a></li>
                    </ul>
                </div>
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
                            <li><a href="http://insights.finnexus.io/" target="_blank">Insights</a></li>
                            <li><a href="https://medium.com/finnexus" target="_blank">Blog</a></li>
                            <li><a href="https://www.docs.finnexus.io/" target="_blank">Resources</a></li>
                            <li><a href="https://www.icto.finnexus.io/" target="_blank">ICTO</a></li>
                            <li className="nav-sub-wrap">
                                <a href="###">{__('navs.whitePaper')}<i className="iconfont icon-triangle-down"></i></a>
                                <ul className="nav-sub">
                                    <li><a href="https://finnexus.github.io/Pdfs/FinNexus_Whitepaper_zh.pdf" target="_blank">{__('navs.whitePaperZh')}</a></li>
                                    <li><a href="https://finnexus.github.io/Pdfs/FinNexus_Whitepaper_en.pdf" target="_blank">{__('navs.whitePaperEn')}</a></li>
                                </ul>
                            </li>

                            {/* <li className="nav-sub-wrap">
                                <a href="###">{__('navs.icto')}<i className="iconfont icon-triangle-down"></i></a>
                                <ul className="nav-sub">
                                    <li><a href="/icto" target="_blank">{__('navs.ictoZh')}</a></li>
                                    <li><a href="/icto" target="_blank">{__('navs.ictoEn')}</a></li>
                                    <li><a href="https://finnexus.github.io/Pdfs/ICTO_zh.pdf" target="_blank">{__('navs.ictoZh')}</a></li>
                                    <li><a href="https://finnexus.github.io/Pdfs/ICTO_en.pdf" target="_blank">{__('navs.ictoEn')}</a></li>
                                </ul>
                            </li> */}

                            <li className="nav-sub-wrap">
                                <a href="###">{__('navs.Lan')}<i className="iconfont icon-triangle-down"></i></a>
                                <ul className="nav-sub">
                                    <li><a onClick={e => this.onChangeLang('zh')} >{__('navs.LanZh')}</a></li>
                                    <li><a onClick={e => this.onChangeLang('en')}>{__('navs.LanEn')}</a></li>
                                    <li><a onClick={e => this.onChangeLang('ko')}>{__('navs.LanKo')}</a></li>
                                </ul>
                            </li>

                        </ul>
                        {/* <div className="others">
                            <a
                                href={localeUrl}
                                className="other-link"
                                rel="noopener noreferrer"
                            >
                                <i className="icon iconfont icon-global"></i>
                                {localeId === 'en' ? 'ZH' : 'EN'}
                            </a>
                        </div> */}
                    </Center>
                </nav>
            )
        }
    }
}

export default Nav