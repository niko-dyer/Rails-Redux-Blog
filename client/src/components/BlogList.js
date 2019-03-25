import React from 'react'
import BlogForm from './BlogForm'
import { connect } from 'react-redux'
import { getBlogs } from '../reducers/blogs'
import { Link } from 'react-router-dom'
import { Container, Header, Card, Button, Icon } from 'semantic-ui-react'

class BlogList extends React.Component {
    state = { showForm: false }

    toggleForm = () => {
        this.setState(state => {
            return { showForm: !state.showForm }
        })
    }

    componentDidMount() {
        this.props.dispatch(getBlogs())
    }

    blogs = () => {
        return this.props.blogs.map(blog =>
            <Card key={blog.id}>
                <Card.Content>
                    <Card.Header>
                        {blog.name}
                    </Card.Header>
                    <Card.Description>
                        {blog.body}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Link to={`/blogs/${blog.id}`}>
                        View Blog
                    </Link>
                </Card.Content>
            </Card>
        )
    }

    render() {
        const { showForm } = this.state

        return (
            <Container>
                <Header as='h3' icon textAlign='center'>
                    <Icon name='sitemap' circular /> 
                    Blogs
                </Header>
                <Button onClick={this.toggleForm} animated='fade' style={{marginBottom: '10px'}} color='orange' inverted >
                    <Button.Content visible>{showForm ? 'Hide Form' : 'Show Form'}</Button.Content>
                    <Button.Content hidden>
                        <Icon name='angle double down' />
                    </Button.Content>
                </Button>
                {showForm ?
                    <BlogForm closeForm={this.toggleForm} />
                    :
                    <Card.Group itemsPerRow={4}>
                        {this.blogs()}
                    </Card.Group>
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return { blogs: state.blogs }
}

export default connect(mapStateToProps)(BlogList)