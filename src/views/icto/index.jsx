import React from 'react'

import { extend } from 'koot'

import ICTOPc from '@views/icto/pc'
import ICTOMobile from '@views/icto/mobile'

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

        return <ICTOPc/>
        // return isMobile ? <ICTOMobile/> : <ICTOPc/>
        
    }
}

export default PageHome
