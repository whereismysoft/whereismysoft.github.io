import React from 'react';
import ReactDOM from 'react-dom';

import Input from './Input'

		export default class App extends React.Component {
			constructor() {
				super();

				this.state = {
					fullWeight: 0,
					initialWeight: 100,
					waterPercentage: 99,
					imgWidth: 200
				}

				this.getInputValue = this.getInputValue.bind(this);
				this.getFullWeight = this.getFullWeight.bind(this);				
			}

			getInputValue(e, property) {
				this.setState({
					[property]: e.target.value
				})
			}

			getFullWeight(weight, percentageOfWater) {
				let initialWeight = weight;
				let waterPercentage = percentageOfWater;
				const initialWaterPercentage = 99;

				let dryWeight = initialWeight - ((initialWeight/100)*initialWaterPercentage);
				let onePercentOfWeight = dryWeight/(100-waterPercentage);
				let newWeight = dryWeight + (onePercentOfWeight*waterPercentage)
				let newWidth = 100 + newWeight*1.7; 
				this.setState({
					fullWeight: Math.round(newWeight * 100)/100,
					imgWidth: newWidth
				})
			}

			componentWillMount() {
				this.getFullWeight(this.state.initialWeight, this.state.waterPercentage);
			}

			

		    render() {
		    	return(
			        <div>
			        	<div className="textCentered"> Вес после усыхания: {this.state.fullWeight} кг</div>
			        	<div className="block">
			        		<div>
			        			<img width={this.state.imgWidth} />
			        		</div>
			        		<div className="itemLeft">
			        			Начальный вес арбуза: {this.state.initialWeight} кг
				       			<Input 
				       				id='weightRange'
				       				max='100'
				       				min='1'
				       				value={this.state.initialWeight}
				       				getValue={this.getInputValue}
				       				property='initialWeight'
				       				getWeight={this.getFullWeight}
				       				water={this.state.waterPercentage}
				       			/>
				       		</div>
				       		<div className="itemBottomCentered">
				       			Процент воды после усыхания: {this.state.waterPercentage} %
				       			<Input
				       				id='waterRange'
				       				max='99' 
				       				min='1'
				       				value={this.state.waterPercentage} 
				       				getValue={this.getInputValue}
				       				property='waterPercentage'
				       				getWeight={this.getFullWeight}
				       				weight={this.state.initialWeight}
				       			/>
				       		</div>
				       	</div>
			       	</div>
		    	)
		    }
		}
