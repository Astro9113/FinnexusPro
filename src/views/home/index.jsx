import React from 'react'

import { extend } from 'koot'

import HomePc from '@views/home/pc'
import HomeMobile from '@views/home/mobile'

@extend({
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
            isMobile: true,
        }

    }

    componentDidMount () {

        this.setState({
            isMobile: window.isMobile === true ? window.isMobile : false,
        })
    }

    
    

    render () {

        const { isMobile } = this.state

        return isMobile ? <HomeMobile/> : <HomePc/>
        
    }
}

export default PageHome
