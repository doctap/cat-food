import React from 'react';
import styles from './App.module.scss';
import Card from './components/card/Card';
import { ICard } from './types/data-contracts';
import img from './images/cat_fun-box.png'
import CardList from './components/CardList/CardList';
import Container from './components/container/Container';

//for example
const data: ICard[] = [
	{
		isAvailable: true,
		id: 1,
		text: 'Печень утки разварная с артишоками.',
		brand: 'нямушка',
		slogan: 'сказочное заморское яство',
		gifts: 1,
		img: img,
		portions: 10,
		tasty: 'фуа-гра',
		weight: {
			amount: 0.5,
			measure: 'кг'
		}
	},
	{
		isAvailable: true,
		id: 2,
		text: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
		brand: 'нямушка',
		slogan: 'сказочное заморское яство',
		gifts: 2,
		img: img,
		portions: 40,
		tasty: 'рыбой',
		weight: {
			amount: 2,
			measure: 'кг'
		}
	},
	{
		isAvailable: false,
		id: 3,
		text: 'Филе из цыплят с трюфелями в бульоне.',
		brand: 'нямушка',
		slogan: 'сказочное заморское яство',
		gifts: 5,
		img: img,
		portions: 100,
		tasty: 'курой',
		weight: {
			amount: 5,
			measure: 'кг'
		}
	},
]

function App() {
	return (
		<div className={styles.App}>

			<Container title='Ты сегодня покормил кота?'>
				<CardList cards={data} />
			</Container>

		</div>
	);
}

export default App;
