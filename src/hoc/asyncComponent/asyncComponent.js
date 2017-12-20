import React from 'react'

const asyncComponent = (importcomponent) => {
    return class extends React.Component {
        state = {
            component: null
        }

        componentDidMount () {
            importcomponent()
                .then(cpm => {
                    this.setState({ component: cpm.default })
                })
        }

        render () {
            const C = this.state.component;

            return C ? <C {...this.props}> </C> : null
        }
    }
}

export default asyncComponent;