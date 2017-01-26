/**
 * @Author: BLRplex (Maksim Tarhunakau)
 * @Date:   2017-01-26 11:56:46
 * @Last Modified by:   BLRplex (Maksim Tarhunakau)
 * @Last Modified time: 2017-01-26 11:57:01
 */

import React, { Component } from 'react'

class BasePageLayout extends Component {
    render() {
        const { children } = this.props

        return (
            <div className="container">
                <main id="content" role="main">
                    { children }
                </main>
            </div>
        )
    }
}

export default BasePageLayout
