import React from 'react'
import { connect } from 'react-redux'
import { Divider, Header, Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import BlogForm from './BlogForm'
import { deleteBlog } from '../reducers/blogs'

class BlogView extends React.Component {
    state = { showForm: false }

    toggleForm = () => {
        this.setState(state => {
            return { showForm: !state.showForm }
        })
    }

    handleDelete = () => {
        const { blog, dispatch, history: { push } } = this.props
        dispatch(deleteBlog(blog.id))
        push('/blogs')
    }

    render() {
        const { showForm } = this.state
        const { blog = {} } = this.props

        return (
            <Container>
                <Link to='/blogs'>View All Blogs</Link>
                <Button onClick={this.toggleForm}>
                    {showForm ? 'Cancel' : 'Edit'}
                </Button>
                <Button onClick={this.handleDelete}>
                    Delete
                </Button>
                {showForm ?
                    <BlogForm {...blog} closeForm={this.toggleForm} />
                    :
                    <div>
                        <Header as='h3' textAlign='center'>{blog.name}</Header>
                        <Header as='h2' textAlign='center'>{blog.body}</Header>
                    </div>
                }
            </Container>
        )
    }
}


const mapStateToProps = (state, props) => {
    return { blog: state.blogs.find(b => b.id === parseInt(props.match.params.id)) }
}

export default connect(mapStateToProps)(BlogView)