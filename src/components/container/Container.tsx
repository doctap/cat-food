import React from 'react'
import styles from './Container.module.scss';

interface IContainer {
	children: React.ReactNode;
	title: string;
}

export default function Container(props: IContainer) {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				{props.title}
			</div>
			<div className={styles.elements}>
				{props.children}
			</div>
		</div>
	)
}
