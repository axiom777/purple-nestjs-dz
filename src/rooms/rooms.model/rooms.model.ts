type Image = {
	src: string;
	alt?: string;
};

// some decided advantages like room in villa
type Advantage = {
	icon?: Image | string;
	title: string;
	description: string;
};

// Wi-fi, TV, Dryer
type Offer = {
	icon?: Image | string;
	title: string;
};

type Review = {
	id: string;
	authorId: string;
	rating: number;
	createdAt: Date;
	description: string;
};

enum RoomType {
	single = 'SGL',
	twin = 'TWN',
	double = 'DBL',
	triple = 'TRPL',
	quadriple = 'QDPL',
}

enum RoomCategory {
	standard = 'STD',
	superior = 'SUP',
	deluxe = 'DLX',
	junior = 'STU',
	suite = 'LUX',
	president = 'ROYAL',
}

enum RoomView {
	cityView = 'CV',
	seaView = 'SV',
	sideSeaView = 'SSV',
	poolView = 'PV',
	mountainView = 'MV',
}

enum Meals {
	roomOnly = 'RO', // BO AO
	breakfast = 'BO',
	halfBoard = 'HB',
	fullBoard = 'FB',
	allInclusive = 'ALL',
	ultraAllInclusive = 'UALL',
}

export class RoomModel {
	id: string;
	title: string;
	description: string;
	advantages: Advantage[];
	images: Image[];
	type: RoomType;
	category?: RoomCategory;
	view?: RoomView;
	meals: Meals;
	offers: Offer[];
	computedRate: number;
	reviews: Review[];
}

export class RoomsModel {
	rooms: RoomModel[];
	// maybe hotel
	parentId?: string;
}
