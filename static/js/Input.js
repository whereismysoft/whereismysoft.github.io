import React from 'react';
import ReactDOM from 'react-dom';

export default class Input extends React.Component {

			shouldComponentUpdate(nextProps, nextState) {
				if (this.props.value != nextProps.value ) {
					this.props.property === 'initialWeight' ?
					this.props.getWeight(nextProps.value, this.props.water)
					:
					this.props.getWeight(this.props.weight, nextProps.value);
				}
					return true;
			}

			render() {
				return(
					<div id={this.props.id}>
						<input 
							type="range" 
							min={this.props.min} 
							max={this.props.max} 
							defaultValue={this.props.value}
							onInput={(e) => this.props.getValue(e, this.props.property)} 
						/>
					</div>
				)
			}
		}