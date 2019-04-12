import React from 'react';
import 'tachyons';
import Card from './Card/Card';
import Card1 from '../../static/card1.jpg';
import Card2 from '../../static/card2.jpg';
import Card3 from '../../static/card3.jpg';
import Text from '../../static/text';

function Cards() {
	return (
		<div>
			<div class="mw9 mv6 center ph3-ns">
				<div class="cf ph2-ns">
					<div class="fl w-100 w-third-ns pa2">
						<Card title={Text[0].title} description={Text[0].desc}>
							<img src={Card1} class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
						</Card>{' '}
					</div>
					<div class="fl w-100 w-third-ns pa2">
						<Card title={Text[1].title} description={Text[1].desc}>
							<img src={Card2} class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
						</Card>{' '}
					</div>
					<div class="fl w-100 w-third-ns pa2">
						<Card title={Text[2].title} description={Text[2].desc}>
							<img src={Card3} class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cards;
