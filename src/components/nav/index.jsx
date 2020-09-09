import React from 'react'
import { extend, getLocaleId } from 'koot'
import classNames from 'classnames'
import common from '@src/utils/common'

import Center from '@components/center'

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

import logo from '@assets/images/logo.png';

@extend({
    styles: require('./index.module.less'),
    // connect
})
class NavCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ceiling: false,
            localeId: '',
            localeUrl: '',
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
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    onChangeLang(lang) {
        var path = window.location.href.split("#")[0]
        // console.log("path", path)
        window.location.href = common.updateURLParameter(path, 'hl', lang);
        window.location.reload;
    }

    handleScroll() {
        // TODO
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 300) {
            this.setState({ ceiling: true,})
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


    render() {
        const { className } = this.props
        const { localeId, localeUrl } = this.state
        const navClassNames = classNames({
            [className]: true,
            'ceiling': this.state.ceiling
        })

        return (
            <Center className={navClassNames} id="home">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" fixed="top">
  <Navbar.Brand  href="/"><img className="bg-logo" src={logo}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/#home">{__('navs.home')}</Nav.Link>
      <Nav.Link  href="/#team">{__('navs.team')}</Nav.Link>
      <Nav.Link href="/#partner">{__('navs.partners')}</Nav.Link>
      <Nav.Link href="http://insights.finnexus.io/" target="_blank">Insights</Nav.Link>
      <Nav.Link href="https://medium.com/finnexus" target="_blank">Blog</Nav.Link>
      <Nav.Link href="https://www.docs.finnexus.io/" target="_blank">Resources</Nav.Link>
      <Nav.Link href="https://www.fnx.finnexus.io/" target="_blank">FNX</Nav.Link>
      <NavDropdown title="Product" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://liquidity.finnexus.io/" target="_blank">FNX mining</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://options-v2-testnet.vercel.app" target="_blank">Options Protocol V1.0 testnet</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://options.finnexus.io/" target="_blank">Options Protocol V0.1</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://wandora.finnexus.app" target="_blank">Wandora</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://jackspot.finnexus.app" target="_blank">Jackspot</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title={__('navs.whitePaper')} id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://finnexus.github.io/Pdfs/FinNexus_Whitepaper_zh.pdf" target="_blank">{__('navs.whitePaperZh')}</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://finnexus.github.io/Pdfs/FinNexus_Whitepaper_en.pdf" target="_blank">{__('navs.whitePaperEn')}</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <NavDropdown title={__('navs.Lan')} id="collasible-nav-dropdown">
        <NavDropdown.Item onClick={e => this.onChangeLang('zh')}>{__('navs.LanZh')}</NavDropdown.Item>
        <NavDropdown.Item onClick={e => this.onChangeLang('en')}>{__('navs.LanEn')}</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={e => this.onChangeLang('ko')}>{__('navs.LanKo')}</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

            </Center>
            
        )
    }
}

export default NavCom
