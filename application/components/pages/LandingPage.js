/**
 * @Author: BLRplex (Maksim Tarhunakau)
 * @Date:   2017-01-26 11:54:25
 * @Last Modified by:   BLRplex (Maksim Tarhunakau)
 * @Last Modified time: 2017-01-26 12:02:14
 */

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

import React, { Component } from 'react'

import BasePageLayout from 'components/layouts/BasePageLayout'

class LandingPage extends Component {
    render() {
        return (
            <BasePageLayout>
                <div className="page landing-page"></div>
            </BasePageLayout>
        )
    }
}

export default LandingPage
