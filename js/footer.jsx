/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
var app = app || {};

(function () {
	'use strict';
	var Link = app.Link;
	app.TodoFooter = React.createClass({
		render: function () {
			var activeTodoWord = app.Utils.pluralize(this.props.count, 'item');
			var clearButton = null;

			if (this.props.completedCount > 0) {
				clearButton = (
					<button
						className="clear-completed"
						onClick={this.props.onClearCompleted}>
						Clear completed
					</button>
				);
			}

			var nowShowing = this.props.nowShowing;
			return (
				<footer className="footer">
					<span className="todo-count">
						<strong>{this.props.count}</strong> {activeTodoWord} left
					</span>
					<ul className="filters">
						<li>
							<Link to="/" className={classNames({selected: nowShowing === app.ALL_TODOS})} handler={this.props.onRouteChange}>
								ALL
						</Link>
						</li>
						{' '}
						<li>
							<a
								onClick={this.props.onRouteChange.bind(null, '/active')}
								className={classNames({selected: nowShowing === app.ACTIVE_TODOS})}>
									Active
							</a>
						</li>
						{' '}
						<li>
							<a
								onClick={this.props.onRouteChange.bind(null, '/completed')}
								className={classNames({selected: nowShowing === app.COMPLETED_TODOS})}>
									Completed
							</a>
						</li>
					</ul>
					{clearButton}
				</footer>
			);
		}
	});
})();
