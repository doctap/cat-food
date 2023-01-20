import React from 'react'
import { ICard } from '../../types/data-contracts'
import Card from '../card/Card';

interface ICardList {
	cards: ICard[];
}

export default function CardList(props: ICardList) {
	return (
		<>
			{props.cards.map(c => (
				<Card
					isAvailable={c.isAvailable}
					id={c.id}
					text={c.text}
					brand={c.brand}
					gifts={c.gifts}
					img={c.img}
					portions={c.portions}
					slogan={c.slogan}
					tasty={c.tasty}
					weight={c.weight}
					key={c.id}
					altImg='Котик'
					callToAction='Чего сидишь? Порадуй коте,'
					callToActionButton='купи.'
					notAvailable={`Печалька, с ${c.tasty} закончился.`}
					text1='в подарок'
					text2='заказчик доволен'
				/>
			))}
		</>
	)
}
