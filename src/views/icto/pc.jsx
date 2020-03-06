import React from 'react';
import { extend, getLocaleId } from 'koot';

import Center from '@components/center';

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
    [uangme, 'https://www.uangme.id/'],
    [bkex, 'https://www.bkex.com/']
];

@extend({
    styles: require('./pc.module.less')
})
class ICTOPc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.className}>
                <section className="home-wrap">
                    {/* Banner */}
                    <section className="banner">
                        <Center className="wrapper">
                            <div className="text">
                                {/* <h3>{__('pages.home.banner.title')}</h3> */}
                                <h3>ICTO is coming soon with more details</h3>
                                <p>{__('pages.home.banner.title')}</p>
                            </div>
                        </Center>
                    </section>                    
                </section>
            </div>
        );
    }
}

export default ICTOPc;
