import React, { useState } from 'react';
import styles from './Card.module.scss';
import { ICard } from '../../types/data-contracts';

const portions = ['порций', 'порция', 'порции', 'порции', 'порции', 'порций', 'порций', 'порций', 'порций', 'порций'];
const mouses = ['мышей', 'мышь', 'мыши', 'мыши', 'мыши', 'мышей', 'мышей', 'мышей', 'мышей', 'мышей'];

interface ILocalProp {
	notAvailable: string;
	altImg: string;
	callToAction: string;
	callToActionButton: string;
	text1: string;
	text2: string;
}

export default function Card(props: ICard & ILocalProp) {

	const [isSelected, setIsSelected] = useState(false);
	const [isSelectedHover, setIsSelectedHover] = useState(false);

	const selectCard = () => {
		setIsSelected(!isSelected)
		setIsSelectedHover(false)
	}

	const getWord = (n: number, words: string[]) => {
		let word = words[n % 10];
		word = n > 10 && 20 > n ? words[0] : word;

		return word;
	}

	return (
		<div className={styles.container}>

			<div
				className={
					isSelected
						? `${styles.body} ${styles.body_selected} ${isSelectedHover && styles.body_selectedHover}`
						: `${styles.body}`
				}
				onClick={selectCard}
				onMouseLeave={() => setIsSelectedHover(true)}
			>

				<div className={styles.text}>
					<div className={styles.slogan}>
						{props.slogan}
					</div>
					<div className={styles.brand}>
						{props.brand}
					</div>
					<div className={styles.tasty}>
						с {`${props.tasty}`}
					</div>
					<div className={styles.description}>
						<div>
							{`${props.portions} ${getWord(props.portions, portions)}`}
						</div>
						<div>
							{`${props.gifts === 1 ? '' : props.gifts} ${getWord(props.gifts, mouses)}`} {props.text1}
						</div>
						{props.portions > 50 ? <div>{props.text2}</div> : null}
					</div>
				</div>

				<img className={styles.img} src={props.img} alt={props.altImg} />

				<div className={isSelected ? `${styles.weight} ${styles.weight_selected}` : `${styles.weight}`}>

					<div className={styles.amount}>{('' + props.weight.amount).replace('.', ',')}</div>
					<div className={styles.measure}>{props.weight.measure}</div>
				</div>

			</div>

			<div className={styles.CallToAction}>
				{
					props.isAvailable
						? (isSelected
							? <div>{props.text}</div>
							: <>
								<div className={styles.text}>{props.callToAction}&nbsp;</div>
								<button
									onClick={selectCard}
									className={styles.button}
									children={props.callToActionButton}
								/>
							</>)
						: <div className={styles.notAvailable}>{props.notAvailable}</div>
				}
			</div>

		</div>
	)
}
