import React from 'react'
import { connect } from 'react-redux'
import { updateBlog, addBlog } from '../reducers/blogs'
import { Header, Form } from 'semantic-ui-react'

class BlogForm extends React.Component {
    initialState = {
        name: '',
        body: ''
    }
    state = { ...this.initialState }

    componentDidMount() {
        if (this.props.id)
            this.setState({ ...this.props })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, closeForm } = this.props
        const blog = { ...this.state }
        const func = this.props.id ? updateBlog : addBlog
        dispatch(func(blog))
        closeForm()
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { name, body } = this.state

        return (
            <div>
                <Header>Add a Blog</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input 
                        defaultValue={name}
                        onChange={this.handleChange}
                        name='name'
                        label='Name'
                    />
                    <Form.Input 
                        defaultValue={body}
                        onChange={this.handleChange}
                        name='body'
                        label='Body'
                    />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}


export default connect()(BlogForm)