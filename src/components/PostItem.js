import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost } from '../actions'
import { Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Voter from './Voter'
import Moment from 'react-moment'
import size from 'lodash/size'
import EditPost from './EditPost'

class PostItem extends Component {
    render() {
        const { post } = this.props
        const history = createHistory()
        return (
            <div>
                <div className="card border-dark mb-3">
                    <div className="card-body text-dark" style={{ padding: '1.25rem' }}>
                        <h5 className="card-title">
                            <Voter action={votePost} item={post} />
                            <Link style={{ marginLeft: '.75rem' }} to={`/${post.category}/${post.id}`}>{post.title}</Link>
                        </h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">submitted <Moment fromNow>{post.timestamp}</Moment> by { post.author }</small>
                        <div className="float-right">
                            <EditPost post={post} backToPost={() => { history.push(`/${post.category}/${post.id}`) }} backToHome={() => { history.push(`/`) }} editPostWindow={false} />
                            <small className="text-muted">({post.comments && size(post.comments)}) Comments</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(PostItem)