interface Narrator {
	description: null | string, // String is an assumption
	id: number,
	language: null | string, // String is an assumption
	name: string
}

export interface Author {
	description: null | any, // Unknown
	id: number,
	language: null | any, // Unknown
	name: string
}

interface Serie {
	books: null | any, // Unknown
	countryId: number,
	id: number,
	name: string
}

interface Tag {
	"country": null | any, // Unknown
	"id": number,
	"name": string
}

interface Publisher {
	description: null | any, // Unknown
	id: number,
	name: string
}

export interface abook {
	allowedToStream: boolean,
	bitRate: number, // Figure out all bitrates?
	consumableFormatId: string,
	copyright: null | any, // Unknown
	description: string,
	display: boolean,
	edition: number,
	id: number,
	isComing: number,
	isbn: string,
	length: number,
	lengthInHHMM: Duration,
	narratorAsString: string,
	narrators: Narrator[],
	product: null | any, // Unknown
	publisher: Publisher,
	releaseDate: string,
	releaseDateFormat: ReleaseDate,
	time: number
}

export interface abookMark {
	bookId: number,
	chapter: number,
	charOffsetInChapter: number,
	insertDate: InsertDate,
	pos: number,
	secondsSinceCreated: number,
	type: number
}

interface book {
	AId: number,
	EId: number,
	abridged: number,
	authors: Author[],
	authorsAsString: string,
	category: {
		countryId: number,
		description: null | any, // Unknown
		id: number,
		nr: number,
		title: string,
		urlName: string
	},
	consumableId: string,
	cover: string, // Must be prefixed with https://www.storytel.com
	coverE: string, // Must be prefixed with https://www.storytel.com
	grade: number,
	haveRead: number,
	href: null | any, // Unknown, probably URL
	id: number,
	language: {
		id: number,
		isoValue: isoValue,
		localizedName: string,
		name: string
	},
	largeCover: string, // Must be prefixed with https://www.storytel.com
	largeCoverE: string, // Must be prefixed with https://www.storytel.com
	lastBookmarkTimeStamp: number,
	latestReleaseDate: string,
	lengthTime: number,
	mappingStatus: number,
	myGrade: number,
	name: string,
	nrEndBookTotal: number,
	nrEndBookWeek: number,
	nrGrade: number,
	origName: string,
	progress: number,
	season: null | any, // Unknown
	series: Serie[],
	seriesOrder: number,
	smallCover: string, // Must be prefixed with https://www.storytel.com
	tags: Tag[],
	translatorsAsString: string,
	type: number
}

export interface ebook {
	allowedToStream: boolean,
	consumableFormatId: string,
	copyright: null | any, // Unknown
	description: string,
	display: boolean,
	edition: number,
	id: number,
	isComing: number,
	isbn: string,
	nrChapters: number,
	nrCharacters: number,
	nrPages: number,
	product: null | any, // Unknown
	publisher: Publisher,
	releaseDate: string,
	releaseDateFormat: ReleaseDate
}

export interface ebookMark {
	bookId: number,
	chapter: number,
	charOffsetInChapter: number,
	insertDate: null | any, // Unknown
	pos: number,
	secondsSinceCreated: number,
	type: number
}

export interface Book {
	abook: abook | null,
	abookMark: abookMark,
	book: book,
	ebook: ebook | null,
	ebookMark: ebookMark | null,
	entityMetadata: null | any, // Unknown
	id: number,
	insertDate: DateTimeFormat,
	matchInFields: null | any, // Unknown
	owns: number,
	restriction: number,
	shareUrl: URL,
	status: number,
	subscribesToSerie: number
}

interface Format {
	id: string,
	type: string,
	releaseDate: FormatReleaseDate,
	isGeoRestricted: boolean,
	isReleased: boolean,
	publisher: Publisher,
	isLockedContent: boolean
}

export interface BookDetails {
	consumableId: string,
	bookId: number,
	title: string,
	originalTitle: string,
	language: string,
	description: string,
	shareUrl: URL,
	isAbridged: boolean,
	audiobookSampleUrl: null | URL,
	trailerData: null | any, // Unknown
	ratings: {
		averageRating: number,
		numberOfRatings: number
	},
	cover: {
		url: URL,
		width: number,
		height: number
	},
	category: {
		name: string,
		deepLink: string
	},
	authors: Author[],
	narrators: Narrator[],
	translators: any[],
	seriesInfo: {
		id: string,
		name: string,
		orderInSeries: number,
		deepLink: string
	},
	duration: null | any, // Unknown
	formats: Format[],
	similarBooksContentBlock: {
		displayType: string,
		title: string,
		id: string,
		subtitle: null | any, // Unknown, likely string
		itemsUrl: URL,
		deepLink: string
	},
	similarItemsPageDeepLink: string,
	kidsBook: boolean,
	type: string
}

export interface AverageRating {
	count: number,
	sum: number,
	rating: number,
	bayesianRating: number
}

export interface ResponseBookmark {
	consumableId: string,
	kidsMode: boolean,
	position: number,
	type: "abook" | "ebook",
	updatedTime: UpdatedTimestamp
}