import React from 'react'
import { connect } from 'react-redux'
import { Icon, Header, Container, Button } from 'semantic-ui-react'
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
                <br />
                <Button onClick={this.toggleForm} color='blue' inverted style={{ marginTop: '10px', marginBottom: '10px' }} >
                    {showForm ? 'Cancel' : 'Edit'}
                </Button>
                <br />
                <Button onClick={this.handleDelete} color='red' inverted >
                    Delete
                </Button>
                {showForm ?
                    <BlogForm {...blog} closeForm={this.toggleForm} />
                    :
                    <div>
                        <Header as='h1' icon textAlign='center'>
                            <Icon name='podcast' circular />
                            {blog.name}</Header>
                        <hr />
                        <Header as='h4' textAlign='center'>{blog.body}</Header>
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