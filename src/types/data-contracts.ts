export interface ICard {
	id: number;
	slogan: string;
	brand: string;
	tasty: string;
	portions: number;
	gifts: number;
	img: string;
	weight: IWeight;
	text: string;
	isAvailable: boolean;
}

export interface IWeight {
	amount: number;
	measure: Measures
}

type Measures = 'кг' | 'г' | 'л';