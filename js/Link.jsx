/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
var app = app || {};

(function () {
	'use strict';

	app.Link = React.createClass({
		render: function () {
      console.log(this.props)
			return (
        <a
          onClick={this.props.handler.bind(null, this.props.to)}
          className={this.props.className}>
            {this.props.children}
        </a>
      );
		}
	});
})();
