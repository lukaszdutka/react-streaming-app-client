import _ from 'lodash';
import React from "react";
import {connect} from "react-redux";
import {editStream, fetchStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(formValues.id, formValues);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, 'title', 'description')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {editStream, fetchStream})(StreamEdit);