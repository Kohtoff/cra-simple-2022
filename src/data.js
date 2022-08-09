import { validators } from './utils/validators';

export const categories = [
  {
    name: 'category1',
    subCategory: [{ name: 'subcategory1' }, { name: 'subcategory2' }, { name: 'subcategory3' }],
  },
  {
    name: 'category2',
    subCategory: [{ name: 'subcategory1' }, { name: 'subcategory2' }, { name: 'subcategory3' }],
  },
  {
    name: 'category3',
    subCategory: [{ name: 'subcategory1' }, { name: 'subcategory2' }, { name: 'subcategory3' }],
  },
  {
    name: 'category4',
    subCategory: [{ name: 'subcategory1' }, { name: 'subcategory2' }, { name: 'subcategory3' }],
  },
  {
    name: 'category5',
    subCategory: [{ name: 'subcategory1' }, { name: 'subcategory2' }, { name: 'subcategory3' }],
  },
  {
    name: 'category6',
    subCategory: [{ name: 'subcategory1' }, { name: 'subcategory2' }, { name: 'subcategory3' }],
  },
];

export const slides = [
  {
    id: 1,
    title: 'New goods for you',
    desc: `Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Cupiditate error delectus pariatur labore saepe possimus
        distinctio facilis autem culpa quia?`,
    link: '',
    img: process.env.PUBLIC_URL + '/sliderBanner.png',
  },
  {
    id: 2,
    title: 'Sales!',
    desc: '',
    link: '',
    img: process.env.PUBLIC_URL + '/sliderBanner.png',
  },
  {
    id: 3,
    title: 'Free delivery',
    desc: `Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Cupiditate error delectus pariatur labore saepe possimus
        distinctio facilis autem culpa quia?`,
    link: '',
    img: process.env.PUBLIC_URL + '/sliderBanner.png',
  },
];

const maxRange = 10000;
const minRange = 1;
const img = process.env.PUBLIC_URL + '/iphoneBanner.png';

const generateID = () => Math.random() * (maxRange - minRange) + minRange;
const generateRating = () => Math.round(Math.random() * (5 - 1));

export const goods = [
  {
    id: generateID(),
    img,
    title: 'Samsung Note 8',
    category: 'Gadgets',
    price: 600,
    detailedInfo: {},
    rating: generateRating(),
    isNew: true,
    isInStock: true,
    isSale: true,
  },
  {
    id: generateID(),
    img,
    title: 'Iphone 8',
    category: 'Gadgets',
    price: 500,
    detailedInfo: {},
    rating: generateRating(),
    isInStock: true,
    isSale: true,
  },
  {
    id: generateID(),
    img,
    title: 'Audi A8',
    category: 'Transport',
    price: 14100,
    detailedInfo: {},
    rating: generateRating(),
    isInStock: false,
    isSale: true,
  },
  {
    id: generateID(),
    img,
    title: 'Mi-8',
    category: 'Transport',
    price: 89100,
    detailedInfo: {},
    rating: generateRating(),
    isInStock: false,
    isSale: true,
    isNew: true,
  },
  {
    id: generateID(),
    img,
    title: 'Windows 8',
    category: 'License keys',
    price: 80,
    detailedInfo: {},
    rating: generateRating(),
    isInStock: true,
    isNew: true,
  },
  {
    id: generateID(),
    img,
    title: 'BMW M8',
    category: 'Transport',
    price: 24000,
    detailedInfo: {},
    rating: generateRating(),
  },
  {
    id: generateID(),
    img,
    title: 'GoPro HERO 8',
    category: 'Gadgets',
    price: 300,
    detailedInfo: {},
    rating: generateRating(),
    isInStock: true,
  },
  {
    id: generateID(),
    img,
    title: '8 hrivnyas',
    category: 'collectors` item',
    price: 20,
    detailedInfo: {},
    rating: generateRating(),
    isInStock: true,
  },
];

export const filters = [
  {
    id: generateID(),
    title: 'Brand',
    type: 'multiple checkboxes',
    options: [
      { id: generateID(), value: '', name: 'Gucci' },
      { id: generateID(), value: '', name: 'Prado' },
      { id: generateID(), value: '', name: 'Burberry' },
    ],
  },
  { id: generateID(), title: 'Only new', type: 'checkbox', options: [] },
  { id: generateID(), title: 'Only with discount', type: 'checkbox', options: [] },
  { id: generateID(), title: 'Only in stock', type: 'checkbox', options: [] },
  { id: generateID(), title: 'Price', type: 'range', options: [] },
  { id: generateID(), title: 'Rating', type: 'range', options: [] },
];

export const priceRange = [
  {
    value: 0,
    scaledValue: 1000,
    label: '1k',
  },
  {
    value: 25,
    scaledValue: 5000,
    label: '5k',
  },
  {
    value: 50,
    scaledValue: 10000,
    label: '10k',
  },
  {
    value: 75,
    scaledValue: 25000,
    label: '25k',
  },
  {
    value: 100,
    scaledValue: 50000,
    label: '50k',
  },
  {
    value: 125,
    scaledValue: 100000,
    label: '100k',
  },
  {
    value: 150,
    scaledValue: 250000,
    label: '250k',
  },
  {
    value: 175,
    scaledValue: 500000,
    label: '500k',
  },
  {
    value: 200,
    scaledValue: 1000000,
    label: '1M',
  },
];

export const formStruct = {
  personalInfo: {
    title: 'Personal Info',
    fields: [
      { name: 'fullname', validators: validators.fullname },
      { name: 'telephone', validators: validators.telephone },
      { name: 'email', validators: validators.email },
    ],
  },
  delivery: {
    title: 'Delivery',
    fields: [
      [{ name: 'country' }, { name: 'city' }],
      { name: 'street', validators: validators.street },
      [
        { name: 'house', validators: validators.house },
        { name: 'apartments', validators: validators.apatrments },
      ],
    ],
  },
  deliveryOption: {
    title: 'Delivery options',
    fields: [
      { name: 'self-care - shop', due: 'at about 3 days' },
      { name: 'self-care - post', due: 'at about 3 days' },
      { name: 'courier', due: 'at about 14 days' },
    ],
  },
  paymentOption: {
    title: 'Payment options',
    fields: [
      { name: 'Online prepayment' },
      { name: 'Card on receipt' },
      { name: 'Cash on receipt' },
    ],
  },
  comment: {
    fields: [{ name: 'Message' }],
  },
};
