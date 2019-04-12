import React from 'react';
import 'tachyons';
import './Card.css';
function Card(props) {
	return (
		<div>
			<article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l w350px ">
            {props.children}
				
				<div class="pa2 ph3-ns pb3-ns">
					<div class="dt w-100 mt1">
						<div class="dtc">
							<h1 class="f6 f4-ns mv0">{props.title}</h1>
						</div>
					</div>
					<p class="f4 lh-copy measure mt2 mid-gray">
						{props.description}
					</p>
				</div>
			</article>
		</div>
	);
}
export default Card;
