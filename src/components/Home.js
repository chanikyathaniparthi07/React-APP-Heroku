import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-primary mt-3">Post Book</h1>
          <hr />
          <div className="row">
            <div className="col-sm-8">
              <img
                src="https://www.incimages.com/uploaded_files/image/1920x1080/social-networking-184313840_384936.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-sm">
              <div className="d-flex justify-content-start align-items-start mb-4">
                <span className="material-icons text-primary me-2">
                  chevron_right
                </span>
                <span>
                  Social networking is the use of Internet-based social media
                  sites to stay connected with friends, family, colleagues,
                  customers, or clients. Social networking can have a social
                  purpose, a business purpose, or both, through sites like
                  Facebook, Twitter, LinkedIn, and Instagram.
                </span>
              </div>
              <div className="d-flex justify-content-start align-items-start">
                <span className="material-icons text-primary me-2">
                  chevron_right
                </span>
                <span>
                  Based on the six degrees of separation concept (the idea that
                  any two people on the planet could make contact through a
                  chain of no more than five intermediaries), social networking
                  establishes interconnected online communities (sometimes known
                  as social graphs) that help people make contacts that would be
                  good for them to know, but that they would be unlikely to have
                  met otherwise. Depending on the social media platform, members
                  may be able to contact any other member.
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;