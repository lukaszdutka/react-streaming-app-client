import React from "react";
import Modal from "../Modal";
import history from "../../history";
import {connect} from "react-redux";
import {deleteStream, fetchStream} from "../../actions";
import {Link} from "react-router-dom";

class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent() {
    return !this.props.stream
      ? 'Are you sure you want to delete this stream?'
      : `Are you sure you want to delete the stream with title: ${this.props.stream.title}?`
  }

  render() {
    return (
      <Modal
        title="Delete stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }

  renderActions() {
    const {id} = this.props.match.params;
    return (
      <>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteStream(id)}>Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}


export default connect(
  mapStateToProps,
  {fetchStream, deleteStream}
)(StreamDelete);