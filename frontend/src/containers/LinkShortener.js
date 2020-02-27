import React, { Component } from "react";
import { connect } from "react-redux";
import { getShortenLink, inputChange, closeModal } from "../store/actions";
import { apiURL } from "../constants";
import Spinner from "../components/UI/Spinner/Spinner";
import Modal from "../components/UI/Modal/Modal";

class LinkShortener extends Component {
  
  shortenUrlHandler = e => {
    e.preventDefault();
    this.props.getShortenLink({ originalUrl: this.props.originalUrl });
  };

  render = () => {
    const {
      shortUrl,
      originalUrl,
      loading,
      error,
      inputChange,
      closeModal
    } = this.props;
    return (
      <>
        {error && <Modal error={error} close={closeModal} />}
        <div className="container">
          <h2 className="text-center my-3">Shorten your Link!</h2>
          <form onSubmit={this.shortenUrlHandler}>
            <div className="input-group">
              <input
                onChange={inputChange}
                type="url"
                value={originalUrl}
                className="form-control"
                placeholder="Enter URL here"
              />
              <div className="input-group-append">
                {loading ? (
                  <Spinner />
                ) : (
                  <button type="submit" className="btn btn-secondary">
                    Shorten
                  </button>
                )}
              </div>
            </div>
          </form>
          {shortUrl && !error && (
            <div className="text-center mt-3">
              <p>
                <b>Your link now looks like this:</b>
              </p>
              <a href={apiURL + shortUrl}>{apiURL + shortUrl}</a>
            </div>
          )}
        </div>
      </>
    );
  };
};

const mapStateToProps = state => ({
  shortUrl: state.shortUrl,
  originalUrl: state.originalUrl,
  error: state.error,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  inputChange: e => dispatch(inputChange(e)),
  getShortenLink: data => dispatch(getShortenLink(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkShortener);
