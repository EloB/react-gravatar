// Generated by CoffeeScript undefined
var React, md5, querystring;

React = require('react');

md5 = require('md5');

querystring = require('querystring');

module.exports = React.createClass({
  displayName: 'Gravatar',
  propTypes: {
    size: React.PropTypes.number.isRequired,
    rating: React.PropTypes.string.isRequired,
    https: React.PropTypes.bool.isRequired,
    "default": React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {
      size: 50,
      rating: 'g',
      https: false,
      "default": "retro"
    };
  },
  render: function() {
    var base, query, src;
    base = this.props.https ? "https://secure.gravatar.com/avatar/" : 'http://www.gravatar.com/avatar/';
    query = querystring.stringify({
      s: this.props.size,
      r: this.props.rating,
      d: this.props["default"]
    });
    src = base + md5.digest_s(this.props.email) + "?" + query;
    return React.DOM.img({
      "src": src,
      "alt": this.props.email,
      "height": this.props.size,
      "width": this.props.size
    });
  }
});