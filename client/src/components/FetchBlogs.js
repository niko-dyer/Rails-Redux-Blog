import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import BlogList from './BlogList'
import BlogView from './BlogView'
import { getBlogs } from '../reducers/blogs'
import { Loader, Segment, Dimmer } from 'semantic-ui-react'

class FetchBlogs extends React.Component {
    state = { loaded: false }

    componentDidMount() {
        this.props.dispatch(getBlogs(this.setLoaded))
    }

    setLoaded = () => {
        this.setState({ loaded: true })
    }

    render() {
        const { loaded } = this.state

        if (loaded) {
            return (
                <div>
                    <Route exact path='/blogs' component={BlogList} />
                    <Route exact path='/blogs/:id' component={BlogView} />
                </div>
            )
        } else {
            return (
                <Segment>
                    <Dimmer active>
                        <Loader />
                    </Dimmer>
                </Segment>
            )
        }
    }
}

export default connect()(FetchBlogs)