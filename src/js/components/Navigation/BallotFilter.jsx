import React, { Component, PropTypes } from "react";
import { Link } from "react-router";

export default class BallotFilter extends Component {
  static propTypes = {
    params: PropTypes.object,
    ballot_type: PropTypes.string,
    length: PropTypes.number,
    length_remaining: PropTypes.number,
  };


  render () {
    const {ballot_type, length, length_remaining} = this.props;

    return <ul className="nav ballot__tabs">
      <li className="tab-item">
        <Link to="/ballot" className={ballot_type === "ALL_BALLOT_ITEMS" ? "tab tab-active" : "tab tab-default"}>
          <span>All Items ({length})</span>
        </Link>
      </li>

      { length === length_remaining ?
        null :
        <li className="tab-item">
          <Link to={{ pathname: "/ballot", query: { type: "filterRemaining" } }}
                className={ballot_type === "CHOICES_REMAINING" ? "tab tab-active" : "tab tab-default"}>
            <span>Remaining Decisions ({length_remaining})</span>
          </Link>
        </li>
      }

      <li className="tab-item">
        <Link to={{ pathname: "/ballot", query: { type: "filterReadyToVote" } }} className={ ballot_type === "READY_TO_VOTE" ? "tab tab-active" : "tab tab-default"}>
          <span>Vote!</span>
        </Link>
      </li>
    </ul>;
  }
}
