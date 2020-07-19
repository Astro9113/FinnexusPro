import React from 'react';
import { extend, getLocaleId } from 'koot';

import Center from '@components/center';
import Modal from 'react-modal';

import {Card, Container, Row, Col} from 'react-bootstrap';

import banner from '@assets/images/banner-bg.jpg';
import split  from '@assets/images/title-split.png';

import targetImgCn from '@assets/images/dfp-target-img-cn.png';
import doSomethingImgOneCn from '@assets/images/dfp-dosomething-01-cn.png';
import doSomethingImgTwoCn from '@assets/images/dfp-dosomething-02-cn.png';
import doSomethingImgThreeCn from '@assets/images/dfp-dosomething-03-cn.png';
import whatsImgCn from '@assets/images/def-whats-cn.png';

import targetImgEn from '@assets/images/dfp-target-img-en.png';
import doSomethingImgOneEn from '@assets/images/dfp-dosomething-01-en.png';
import doSomethingImgTwoEn from '@assets/images/dfp-dosomething-02-en.png';
import doSomethingImgThreeEn from '@assets/images/dfp-dosomething-03-en.png';
import whatsImgEn from '@assets/images/def-whats-en.png';

import genesis from '@assets/images/partners/genesis.png';
import consensusCn from '@assets/images/partners/consensus-cn.png';
import consensusEn from '@assets/images/partners/consensus-en.png';
import hillstone from '@assets/images/partners/hillstone.png';
import bitrue from '@assets/images/partners/bitrue.png';
import uangme from '@assets/images/partners/uangme.png';
import bkex from '@assets/images/partners/bkex.png';

const targetImg = getLocaleId() === 'zh' ? targetImgCn : targetImgEn;
const doSomethingImgOne =
    getLocaleId() === 'zh' ? doSomethingImgOneCn : doSomethingImgOneEn;
const doSomethingImgTwo =
    getLocaleId() === 'zh' ? doSomethingImgTwoCn : doSomethingImgTwoEn;
const doSomethingImgThree =
    getLocaleId() === 'zh' ? doSomethingImgThreeCn : doSomethingImgThreeEn;
const whatsImg = getLocaleId() === 'zh' ? whatsImgCn : whatsImgEn;

const partnerLists = [
    [genesis, 'https://www.genesis-group.com/'],
    [
        getLocaleId() === 'zh' ? consensusCn : consensusEn,
        'https://consensus-lab.com/'
    ],
    [hillstone, 'https://www.hillstonepe.co/'],
    [bitrue, 'https://www.bitrue.com/'],
    // [uangme, 'https://www.uangme.id/'],
    [bkex, 'https://www.bkex.com/']
];

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

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
class HomePc extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            isMobile: false,
            item: {},
            picSrc: '',
            isPartner: true
        };

        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount () {

        this.setState({
            isMobile: window.isMobile === true ? window.isMobile : false,
        })
    }

    openModal(item) {
        // avatar, name, job, desc
        // console.log('isMobile', this.state.isMobile)

        if (this.state.isMobile) {
            const isPartner = item.avatar ? true : false;

            const pic = item.avatar ? item.avatar : item.pic;
            const picSrc = require('@assets/images/' + pic);
    
            this.setState({
                modalIsOpen: true,
                item: item,
                picSrc: picSrc,
                isPartner: isPartner
            });
        }
    }

    afterOpenModal() {
        if (this.state.isMobile) {
            // references are now sync'd and can be accessed.
            this.subtitle.style.color = '#3b3d55';
            this.subtitle.style.marginBottom = '10px';

            if (this.state.isPartner) {
                this.subimg.style.width = '60px';
                this.subimg.style.height = '60px';
            } else {
                this.subimg.style.position = 'relative';
                this.subimg.style.top = '-20px';
                this.subimg.style.margin = '20px 0';
                this.subimg.style.width = '50%';
                this.subimg.style.height = '50%';
            }

            this.subH4.style.position = 'relative';
            this.subH4.style.top = '-50px';
            this.subH4.style.left = '70px';
            this.subH4.style.color = '#5b33c9';

            this.subP.style.position = 'relative';
            this.subP.style.top = '-40px';
            this.subP.style.fontSize = '14px';
            this.subP.style.color = '#6c6e90';
            this.subP.style.lineHeight = '20px';
        }
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }


    render() {
        const { item, picSrc, isMobile } = this.state;

        return (
            <div className={this.props.className}>

                {/* Banner */}
                <Card className="bg-dark text-white">
                    <Card.Img src={banner} />
                    <Card.ImgOverlay>
                        <Card.Title>{__('pages.home.banner.title')}</Card.Title>
                        <Card.Title>{__('pages.home.banner.title2')}</Card.Title>
                        <hr className="text"/>
                        <Card.Text>{__('pages.home.banner.by')}</Card.Text>
                    </Card.ImgOverlay>
                </Card>

                <section className="home-wrap">

                    {/* Why DFP */}
                    <section className="why-dfp">
                        <Center className="wrapper">
                            <dl className="why-dfp-list">
                                <dt>
                                    <h4
                                        className="g-title"
                                        dangerouslySetInnerHTML={{
                                            __html: __('pages.home.why.title', {
                                                name: 'FinNexus'
                                            })
                                        }}
                                    />
                                    <p>{__('pages.home.why.description')}</p>
                                </dt>
                                {__('pages.home.why.list').map(
                                    (item, index) => {
                                        return (
                                            <dd
                                                key={index}
                                                className={item.clazz}
                                            >
                                                <h4>{item.title}</h4>
                                                <p>{item.desc}</p>
                                            </dd>
                                        );
                                    }
                                )}
                            </dl>
                        </Center>
                    </section>

                    {/* Target DFP */}
                    <section className="target-dfp">
                        <Center className="wrapper">
                            <h4
                                className="g-title"
                                dangerouslySetInnerHTML={{
                                    __html: __('pages.home.target.title', {
                                        name: 'FinNexus'
                                    })
                                }}
                            />
                            <div className="g-title-sub">
                                {__('pages.home.slogan')}
                            </div>
                            {__('pages.home.target.content').map(
                                (item, index) => {
                                    return (
                                        <p
                                            key={index}
                                            className="g-description"
                                        >
                                            {item}
                                        </p>
                                    );
                                }
                            )}
                            <img
                                className="target-dfp-img"
                                src={targetImg}
                                alt=""
                            />
                        </Center>
                    </section>

                    {/* Do Something DFP */}
                    <section className="do-something-dfp">
                        <Center className="wrapper">
                            <div className="title">
                                <h4
                                    className="g-title"
                                    dangerouslySetInnerHTML={{
                                        __html: __('pages.home.doSomething', {
                                            name: 'FinNexus'
                                        })
                                    }}
                                />
                                <div className="g-title-sub">
                                    {__('pages.home.slogan')}
                                </div>
                            </div>
                            <div className="content">
                                <ul className="do-something-list">
                                    <li>
                                        <img
                                            className="do-something-img-01"
                                            src={doSomethingImgOne}
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            className="do-something-img-02"
                                            src={doSomethingImgTwo}
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            className="do-something-img-03"
                                            src={doSomethingImgThree}
                                            alt=""
                                        />
                                    </li>
                                </ul>
                            </div>
                        </Center>
                    </section>

                    {/* Whats DFP */}
                    <section className="whats-dfp">
                        <Center className="wrapper">
                            <h4
                                className="g-title"
                                dangerouslySetInnerHTML={{
                                    __html: __('pages.home.whats.title', {
                                        name: 'FinNexus'
                                    })
                                }}
                            />
                            <div className="g-title-sub">
                                {__('pages.home.slogan')}
                            </div>
                            {__('pages.home.whats.content').map(
                                (item, index) => {
                                    return (
                                        <p
                                            key={index}
                                            className="g-description"
                                        >
                                            {item}
                                        </p>
                                    );
                                }
                            )}
                            <img
                                className="whats-dfp-img"
                                src={whatsImg}
                                alt=""
                            />
                        </Center>
                    </section>

                    {/* Partner DFP */}
                    <section className="partner-dfp" id="partner">
                        <Center className="wrapper">
                            <div className="title">
                                <h4
                                    className="g-title"
                                    dangerouslySetInnerHTML={{
                                        __html: __('pages.home.partner', {
                                            name: 'FinNexus'
                                        })
                                    }}
                                />
                                <div className="g-title-sub">
                                    {__('pages.home.slogan')}
                                </div>
                            </div>
                            <ul className="partner-lists">
                                {partnerLists.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item[1]} target="_blank">
                                                <img src={item[0]} alt="" />
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </Center>
                    </section>

                    {/* Teams DFP */}
                    <section className="teams-dfp" id="team">
                        <Center className="wrapper">
                            <div className="title">
                                <h4
                                    className="g-title"
                                    dangerouslySetInnerHTML={{
                                        __html: __('pages.home.team', {
                                            name: 'FinNexus'
                                        })
                                    }}
                                />
                            </div>
                            <div className="team-title">
                                <div>
                                    {__('pages.home.operationsTeam.title')}
                                </div>
                            </div>
                            <ul className="team-list">
                                {__('pages.home.operationsTeam.list').map(
                                    (item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                onClick={() =>
                                                    this.openModal(item)
                                                }
                                            >
                                                <span className="avatar">
                                                    <img
                                                        src={require('@assets/images/' +
                                                            item.avatar)}
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="name">
                                                    {item.name}
                                                </span>
                                                <span className="job">
                                                    {item.job}
                                                </span>
                                                <span className="dividing-line"></span>
                                                <p className="desc">
                                                    {item.desc.map(
                                                        (itemDesc, i) => (
                                                            <React.Fragment
                                                                key={i}
                                                            >
                                                                {itemDesc}
                                                                <br />
                                                            </React.Fragment>
                                                        )
                                                    )}
                                                </p>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>

                            <div>
                                <div className="team-advisor">
                                    <div className="team-title">
                                        <div>
                                            {__('pages.home.Advisor.title')}
                                        </div>
                                    </div>

                                    <ul className="team-list team-list2 team-list3">
                                        {__('pages.home.Advisor.list').map(
                                            (item, index) => {
                                                return (
                                                    <li key={index} onClick={() =>
                                                        this.openModal(item)
                                                    }>
                                                        <span className="avatar">
                                                            <img
                                                                src={require('@assets/images/' +
                                                                    item.avatar)}
                                                                alt=""
                                                            />
                                                        </span>
                                                        <span className="name">
                                                            {item.name}
                                                        </span>
                                                        <span className="job">
                                                            {item.job}
                                                        </span>
                                                        <span className="dividing-line"></span>
                                                        <p className="desc">
                                                            {item.desc.map(
                                                                (
                                                                    itemDesc,
                                                                    i
                                                                ) => (
                                                                    <React.Fragment
                                                                        key={i}
                                                                    >
                                                                        {
                                                                            itemDesc
                                                                        }
                                                                        <br />
                                                                    </React.Fragment>
                                                                )
                                                            )}
                                                        </p>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="team-left">
                                <div className="team-title">
                                    <div>
                                        {__(
                                            'pages.home.investmentAgency.title'
                                        )}
                                    </div>
                                </div>
                                <div className="team-description">
                                    {__(
                                        'pages.home.investmentAgency.description'
                                    ).map((item, index) => {
                                        return <p key={index}>{item}</p>;
                                    })}
                                </div>
                                <ul className="team-list company-list">
                                    {__('pages.home.investmentAgency.list').map(
                                        (item, index) => {
                                            return (
                                                <li key={index} onClick={() =>
                                                    this.openModal(item)
                                                }>
                                                    <span className="logo">
                                                        <img
                                                            src={require('@assets/images/' +
                                                                item.pic)}
                                                            alt=""
                                                        />
                                                    </span>
                                                    <span className="dividing-line"></span>
                                                    <p className="desc">
                                                        {item.desc.map(
                                                            (itemDesc, i) => (
                                                                <React.Fragment
                                                                    key={i}
                                                                >
                                                                    {itemDesc}
                                                                    <br />
                                                                </React.Fragment>
                                                            )
                                                        )}
                                                    </p>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                            <div className="team-right">
                                <div className="team-title">
                                    <div>{__('pages.home.mentor.title')}</div>
                                </div>
                                <div className="team-description">
                                    <p>{__('pages.home.mentor.description')}</p>
                                </div>
                                <ul className="team-list team-list2">
                                    {__('pages.home.mentor.list').map(
                                        (item, index) => {
                                            if (index === 1) return null;
                                            return (
                                                <li key={index} onClick={() =>
                                                        this.openModal(item)
                                                    }>
                                                    <span className="avatar">
                                                        <img
                                                            src={require('@assets/images/' +
                                                                item.avatar)}
                                                            alt=""
                                                        />
                                                    </span>
                                                    <span className="name">
                                                        {item.name}
                                                    </span>
                                                    <span className="job">
                                                        {item.job}
                                                    </span>
                                                    <span className="dividing-line"></span>
                                                    <p className="desc">
                                                        {item.desc.map(
                                                            (itemDesc, i) => (
                                                                <React.Fragment
                                                                    key={i}
                                                                >
                                                                    {itemDesc}
                                                                    <br />
                                                                </React.Fragment>
                                                            )
                                                        )}
                                                    </p>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        </Center>
                    </section>
                </section>

                <div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                    >
                        <img
                            src={picSrc}
                            alt=""
                            ref={subimg => (this.subimg = subimg)}
                        />
                        <div ref={subH4 => (this.subH4 = subH4)}>
                            <h2 ref={subtitle => (this.subtitle = subtitle)}>
                                {item.name}
                            </h2>
                            <h4>{item.job}</h4>
                        </div>
                        <p ref={subP => (this.subP = subP)}>{item.desc}</p>
                        {/* <button onClick={this.closeModal}>close</button> */}
                    </Modal>
                </div>

            </div>
        );
    }
}

export default HomePc;
