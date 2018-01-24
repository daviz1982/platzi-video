import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
	// constructor(props) {
	// 	super(props);
	// 	// 	this.handleClick = this.handleClick.bind(this);
	// 	this.state = {
	// 		author: props.author
	// 	}
	// };
	// 
	state ={
		author: this.props.author
	}
	
	// this.handleClick es ES6 mode, abajo ES7

	handleClick = (event) => {
		this.setState({
			author: 'David Cruz'
		})
	}

	render() {
		return (
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img className="Media-image"
						src={this.props.cover} 
						alt={this.props.title}
						width={260}
						height={160}
					/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
			</div>
		);
	};
}

Media.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['audio', 'video'])
}

export default Media;