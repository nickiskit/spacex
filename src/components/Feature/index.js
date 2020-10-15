import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper'

import './feature.css'

const images = {
	'Falcon 1': 'falcon-1',
  	'Falcon 9': 'falcon-9', 
  	'Falcon Heavy': 'falcon-heavy',
  	other : 'starship'
}

const Feature = (props) => { 
	return Object.keys(props).length ? (
  <section className="features">
		<h2 className="features-title">
			{props.name} <br/>Overview
		</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column"> {props.height.meters} m / {props.height.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">{props.diameter.meters} m / {props.diameter.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">{props.mass.kg} kg / {props.mass.lb} lb</td>
					</tr>
					<tr>
						<td className="table-column">PAYLOAD TO LEO</td>
						<td className="table-column">
						{props.payload_weights[0].kg} kg / {props.payload_weights[0].lb} lb
						</td>
					</tr>
				</thead>
			</table>
			<RellaxWrapper speed={14}>
				<img
						src={`img/${images.hasOwnProperty(props.name) ? images[props.name] : images.other}.png`}
						alt="rocket"
						className="rocket"
				/>
			</RellaxWrapper>
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					{props.description}
				</p>
			</article>
		</div>
	</section>) : '';
};

export default Feature;