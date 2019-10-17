import React from 'react'
import { extend, getLocaleId } from 'koot'

import Center from '@components/center'

import targetImgCn from '@assets/images/dfp-target-img-cn.png'
import doSomethingImgOneCn from '@assets/images/dfp-dosomething-01-cn.png'
import doSomethingImgTwoCn from '@assets/images/dfp-dosomething-02-cn.png'
import doSomethingImgThreeCn from '@assets/images/dfp-dosomething-03-cn.png'
import whatsImgCn from '@assets/images/def-whats-cn.png'

import targetImgEn from '@assets/images/dfp-target-img-en.png'
import doSomethingImgOneEn from '@assets/images/dfp-dosomething-01-en.png'
import doSomethingImgTwoEn from '@assets/images/dfp-dosomething-02-en.png'
import doSomethingImgThreeEn from '@assets/images/dfp-dosomething-03-en.png'
import whatsImgEn from '@assets/images/def-whats-en.png'

const targetImg = getLocaleId() === 'en' ? targetImgEn : targetImgCn
const doSomethingImgOne = getLocaleId() === 'en' ? doSomethingImgOneEn : doSomethingImgOneCn
const doSomethingImgTwo = getLocaleId() === 'en' ? doSomethingImgTwoEn : doSomethingImgTwoCn
const doSomethingImgThree = getLocaleId() === 'en' ? doSomethingImgThreeEn : doSomethingImgThreeCn
const whatsImg = getLocaleId() === 'en' ? whatsImgEn : whatsImgCn

import genesis from '@assets/images/partners/genesis.png'
import consensusCn from '@assets/images/partners/consensus-cn.png'
import consensusEn from '@assets/images/partners/consensus-en.png'
import hillstone from '@assets/images/partners/hillstone.png'
import bitrue from '@assets/images/partners/bitrue.png'
import uangme from '@assets/images/partners/uangme.png'

const partnerLists = [
    genesis,
    getLocaleId() === 'en' ? consensusEn : consensusCn,
    hillstone,
    bitrue,
    uangme
]

@extend({
    styles: require('./index.module.less'),
    pageinfo: {
        title: __('pages.home.title'),
        metas: [
            {
                name: 'keywords',
                content: __('pages.home.keywords')
            },
            {
                name: 'description',
                content: __('pages.home.description')
            }
        ]
    }
})
class PageHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMobile: false,
        }

        this.handlerSubscribe = this.handlerSubscribe.bind(this)
    }

    componentDidMount () {

        this.setState({
            isMobile: window.isMobile === true ? window.isMobile : false,
        })
    }

    handlerSubscribe () {
        window.open('https://mailchi.mp/9c15712d2bbf/finnexus-newsletter')
    }

    render () {

        const { isMobile } = this.state

        if (isMobile) {

            return (
                <div className={this.props.className}>
                    <section className="home-wrap">
                        {/* Banner */}
                        <section className="banner-mobile">
                            <Center className="wrapper">
                                <div className="text">
                                    <h3>{__('pages.home.banner.title')}</h3>
                                    <p>{__('pages.home.banner.by')}</p>
                                </div>
                            </Center>
                        </section>
    
                        {/* Why DFP */}
                        <section className="why-dfp-mobile">
                            <Center className="wrapper">
                                <dl className="why-dfp-list">
                                    <dt>
                                        <h4 className="g-title" dangerouslySetInnerHTML={{ __html: __('pages.home.why.title', { name: 'FinNexus' }) }} />
                                        <p>{__('pages.home.why.description')}</p>
                                    </dt>
                                    {__('pages.home.why.list').map((item, index) => {
                                        return (
                                            <dd key={index} className={item.clazz}>
                                                <h4>{item.title}</h4>
                                                <p>{item.desc}</p>
                                            </dd>
                                        )
                                    })}
                                </dl>
                            </Center>
                        </section>
    
                        {/* Target DFP */}
                        <section className="target-dfp-mobile">
                            <Center className="wrapper">
                                <h4 className="g-title" dangerouslySetInnerHTML={{ __html: __('pages.home.target.title', { name: 'FinNexus' }) }} />
                                <div className="g-title-sub">{__('pages.home.slogan')}</div>
                                {__('pages.home.target.content').map((item, index) => {
                                    return <p key={index} className="g-description">{item}</p>
                                })}
                                <img className="target-dfp-img" src={targetImg} alt="" />
                            </Center>
                        </section>
    
                        {/* Do Something DFP */}
                        <section className="do-something-dfp-mobile">
                            <Center className="wrapper">
                                <div className="title">
                                    <h4 className="g-title" dangerouslySetInnerHTML={{ __html: __('pages.home.doSomething', { name: 'FinNexus' }) }} />
                                    <div className="g-title-sub">{__('pages.home.slogan')}</div>
                                </div>
                                <div className="content">
                                    <ul className="do-something-list">
                                        <li><img className="do-something-img-01" src={doSomethingImgOne} alt="" /></li>
                                        <li><img className="do-something-img-02" src={doSomethingImgTwo} alt="" /></li>
                                        <li><img className="do-something-img-03" src={doSomethingImgThree} alt="" /></li>
                                    </ul>
                                </div>
                            </Center>
                        </section>
    
                        {/* Whats DFP */}
                        <section className="whats-dfp-mobile">
                            <Center className="wrapper">
                                <h4 className="g-title" dangerouslySetInnerHTML={{ __html: __('pages.home.whats.title', { name: 'FinNexus' }) }} />
                                <div className="g-title-sub">{__('pages.home.slogan')}</div>
                                {__('pages.home.whats.content').map((item, index) => {
                                    return <p key={index} className="g-description">{item}</p>
                                })}
                                <img className="whats-dfp-img" src={whatsImg} alt="" />
                            </Center>
                        </section>
    
                        {/* Partner DFP */}
                        <section className="partner-dfp-mobile">
                            <Center className="wrapper">
                                <div className="title">
                                    <h4 className="g-title" dangerouslySetInnerHTML={{ __html: __('pages.home.partner', { name: 'FinNexus' }) }} />
                                    <div className="g-title-sub">{__('pages.home.slogan')}</div>
                                </div>
                                <ul className="partner-lists">
                                    {
                                        partnerLists.map((item, index) => {
                                            return (
                                                <li key={index}><img src={item} alt="" /></li>
                                            )
                                        })
                                    }
                                </ul>
                            </Center>
                        </section>
    
                        {/* Teams DFP */}
                        <section className="teams-dfp-mobile">
                            <Center className="wrapper">
                                <div className="title">
                                    <h4 className="g-title" dangerouslySetInnerHTML={{ __html: __('pages.home.team', { name: 'FinNexus' }) }} />
                                </div>
                                <div className="team-title"><div>{__('pages.home.operationsTeam.title')}</div></div>
                                <ul className="team-list">
                                    {__('pages.home.operationsTeam.list').map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <span className="avatar"><img src={require('@assets/images/' + item.avatar)} alt="" /></span>
                                                <span className="name">{item.name}</span>
                                                <span className="job">{item.job}</span>
                                                <span className="dividing-line"></span>
                                                <p className="desc">
                                                    {item.desc.map((itemDesc, i) => <React.Fragment key={i}>{itemDesc}<br /></React.Fragment>)}
                                                </p>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className="team-left">
                                    <div className="team-title"><div>{__('pages.home.investmentAgency.title')}</div></div>
                                    <div className="team-description">
                                        {__('pages.home.investmentAgency.description').map((item, index) => {
                                            return <p key={index}>{item}</p>
                                        })}
                                    </div>
                                    <ul className="team-list company-list">
                                        {__('pages.home.investmentAgency.list').map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <span className="logo"><img src={require('@assets/images/' + item.pic)} alt="" /></span>
                                                    <span className="dividing-line"></span>
                                                    <p className="desc">
                                                        {item.desc.map((itemDesc, i) => <React.Fragment key={i}>{itemDesc}<br /></React.Fragment>)}
                                                    </p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="team-right">
                                    <div className="team-title"><div>{__('pages.home.mentor.title')}</div></div>
                                    <div className="team-description">
                                        <p>{__('pages.home.mentor.description')}</p>
                                    </div>
                                    <ul className="team-list">
                                        {__('pages.home.mentor.list').map((item, index) => {
                                            if (index === 1) return null
                                            return (
                                                <li key={index}>
                                                    <span className="avatar"><img src={require('@assets/images/' + item.avatar)} alt="" /></span>
                                                    <span className="name">{item.name}</span>
                                                    <span className="job">{item.job}</span>
                                                    <span className="dividing-line"></span>
                                                    <p className="desc">
                                                        {item.desc.map((itemDesc, i) => <React.Fragment key={i}>{itemDesc}<br /></React.Fragment>)}
                                                    </p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </Center>
                        </section>
    
                        {/* Footer */}
                        <section className="footer-mobile">
                            <Center className="wrapper">
                                <ul className="left">
                                    <li><a href="https://www.linkedin.com/company/finnexus/" target="_blank" rel="noopener noreferrer"><i className="iconfont icon-in"></i></a></li>
                                    <li><a href="https://twitter.com/fin_nexus/" target="_blank" rel="noopener noreferrer"><i className="iconfont icon-twitter"></i></a></li>
                                    <li><a href="https://www.facebook.com/FinNexus/" target="_blank" rel="noopener noreferrer"><i className="iconfont icon-facebook"></i></a></li>
                                    <li><a href="https://medium.com/finnexus/" target="_blank" rel="noopener noreferrer"><i className="iconfont icon-medium"></i></a></li>
                                    <li><a className="wechat-wrap" href="javascript:;" rel="noopener noreferrer">
                                        <i className="iconfont icon-weixin"></i>
                                        <div className="wechat-pop"></div>
                                    </a></li>
                                </ul>
                                
                            </Center>

                            <div className="right subscribe" onClick={this.handlerSubscribe}>
                                    <input type="text" placeholder={__('pages.home.subscribePlaceholder')} />
                                    <button>{__('pages.home.subscribe')}</button>
                                </div>
                        </section>
                    </section>
                </div>
            )

        } else {

            return (
                <div className={this.props.className}>
                    <section className="home-wrap">
                        {/* Banner */}
                        <section className="banner">
                            <Center className="wrapper">
                                <div className="text">
                                    <h3>{__('pages.home.banner.title')}</h3>
                                    <p>{__('pages.home.banner.by')}</p>
                                </div>
                            </Center>
                        </section>
    
                        {/* Why DFP */}
                        <section className="why-dfp">
                            <Center className="wrapper">
                                <dl className="why-dfp-list">
                                    <dt>
                                        <h4 className="g-title" dangerouslySetInnerHTML={{ __html: __('pages.home.why.title', { name: 'FinNexus' }) }} />
                                        <p>{__('pages.home.why.description')}</p>
                                    </dt>
                                    {__('pages.home.why.list').map((item, index) => {
                                        return (
                                            <dd key={index} className={item.clazz}>
                                                <h4>{item.title}</h4>
                                                <p>{item.desc}</p>
                                            </dd>
                                        )
                                    })}
                                </dl>
                            </Center>
                        </section>
    
                        {/* Target DFP */}
                        <section className="target-dfp">
                            <Center className="wrapper">
                                <h4 className="g-title" dangerouslySetInnerHTML={{ __html: __('pages.home.target.title', { name: 'FinNexus' }) }} />
                                <div className="g-title-sub">{__('pages.home.slogan')}</div>
                                {__('pages.home.target.content').map((item, index) => {
                                    return <p key={index} className="g-description">{item}</p>
                                })}
                                <img className="target-dfp-img" src={targetImg} alt="" />
                            </Center>
                        </section>
    
                        {/* Do Something DFP */}
                        <section className="do-something-dfp">
                            <Center className="wrapper">
                                <div className="title">
                                    <h4 className="g-title" dangerouslySetInnerHTML={{ __html: __('pages.home.doSomething', { name: 'FinNexus' }) }} />
                                    <div className="g-title-sub">{__('pages.home.slogan')}</div>
                                </div>
                                <div className="content">
                                    <ul className="do-something-list">
                                        <li><img className="do-something-img-01" src={doSomethingImgOne} alt="" /></li>
                                        <li><img className="do-something-img-02" src={doSomethingImgTwo} alt="" /></li>
                                        <li><img className="do-something-img-03" src={doSomethingImgThree} alt="" /></li>
                                    </ul>
                                </div>
                            </Center>
                        </section>
    
                        {/* Whats DFP */}
                        <section className="whats-dfp">
                            <Center className="wrapper">
                                <h4 className="g-title" dangerouslySetInnerHTML={{ __html: __('pages.home.whats.title', { name: 'FinNexus' }) }} />
                                <div className="g-title-sub">{__('pages.home.slogan')}</div>
                                {__('pages.home.whats.content').map((item, index) => {
                                    return <p key={index} className="g-description">{item}</p>
                                })}
                                <img className="whats-dfp-img" src={whatsImg} alt="" />
                            </Center>
                        </section>
    
                        {/* Partner DFP */}
                        <section className="partner-dfp">
                            <Center className="wrapper">
                                <div className="title">
                                    <h4 className="g-title" dangerouslySetInnerHTML={{ __html: __('pages.home.partner', { name: 'FinNexus' }) }} />
                                    <div className="g-title-sub">{__('pages.home.slogan')}</div>
                                </div>
                                <ul className="partner-lists">
                                    {
                                        partnerLists.map((item, index) => {
                                            return (
                                                <li key={index}><img src={item} alt="" /></li>
                                            )
                                        })
                                    }
                                </ul>
                            </Center>
                        </section>
    
                        {/* Teams DFP */}
                        <section className="teams-dfp">
                            <Center className="wrapper">
                                <div className="title">
                                    <h4 className="g-title" dangerouslySetInnerHTML={{ __html: __('pages.home.team', { name: 'FinNexus' }) }} />
                                </div>
                                <div className="team-title"><div>{__('pages.home.operationsTeam.title')}</div></div>
                                <ul className="team-list">
                                    {__('pages.home.operationsTeam.list').map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <span className="avatar"><img src={require('@assets/images/' + item.avatar)} alt="" /></span>
                                                <span className="name">{item.name}</span>
                                                <span className="job">{item.job}</span>
                                                <span className="dividing-line"></span>
                                                <p className="desc">
                                                    {item.desc.map((itemDesc, i) => <React.Fragment key={i}>{itemDesc}<br /></React.Fragment>)}
                                                </p>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className="team-left">
                                    <div className="team-title"><div>{__('pages.home.investmentAgency.title')}</div></div>
                                    <div className="team-description">
                                        {__('pages.home.investmentAgency.description').map((item, index) => {
                                            return <p key={index}>{item}</p>
                                        })}
                                    </div>
                                    <ul className="team-list company-list">
                                        {__('pages.home.investmentAgency.list').map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <span className="logo"><img src={require('@assets/images/' + item.pic)} alt="" /></span>
                                                    <span className="dividing-line"></span>
                                                    <p className="desc">
                                                        {item.desc.map((itemDesc, i) => <React.Fragment key={i}>{itemDesc}<br /></React.Fragment>)}
                                                    </p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="team-right">
                                    <div className="team-title"><div>{__('pages.home.mentor.title')}</div></div>
                                    <div className="team-description">
                                        <p>{__('pages.home.mentor.description')}</p>
                                    </div>
                                    <ul className="team-list">
                                        {__('pages.home.mentor.list').map((item, index) => {
                                            if (index === 1) return null
                                            return (
                                                <li key={index}>
                                                    <span className="avatar"><img src={require('@assets/images/' + item.avatar)} alt="" /></span>
                                                    <span className="name">{item.name}</span>
                                                    <span className="job">{item.job}</span>
                                                    <span className="dividing-line"></span>
                                                    <p className="desc">
                                                        {item.desc.map((itemDesc, i) => <React.Fragment key={i}>{itemDesc}<br /></React.Fragment>)}
                                                    </p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </Center>
                        </section>
    
                        {/* Footer */}
                        <section className="footer">
                            <Center className="wrapper">
                                <ul className="left">
                                    <li><a href="https://www.linkedin.com/company/finnexus/" target="_blank" rel="noopener noreferrer"><i className="iconfont icon-in"></i></a></li>
                                    <li><a href="https://twitter.com/fin_nexus/" target="_blank" rel="noopener noreferrer"><i className="iconfont icon-twitter"></i></a></li>
                                    <li><a href="https://www.facebook.com/FinNexus/" target="_blank" rel="noopener noreferrer"><i className="iconfont icon-facebook"></i></a></li>
                                    <li><a href="https://medium.com/finnexus/" target="_blank" rel="noopener noreferrer"><i className="iconfont icon-medium"></i></a></li>
                                    <li><a className="wechat-wrap" href="javascript:;" rel="noopener noreferrer">
                                        <i className="iconfont icon-weixin"></i>
                                        <div className="wechat-pop"></div>
                                    </a></li>
                                </ul>
                                <div className="right subscribe" onClick={this.handlerSubscribe}>
                                    <input type="text" placeholder={__('pages.home.subscribePlaceholder')} />
                                    <button>{__('pages.home.subscribe')}</button>
                                </div>
                            </Center>
                        </section>
                    </section>
                </div>
            )

        }
    }
}

export default PageHome
