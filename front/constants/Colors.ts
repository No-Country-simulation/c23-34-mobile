/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { cyan100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

const tintColorLight = '#0a7ea4'
const tintColorDark = '#fff'

export const ColorsBase = {
	blue50: '#e6f0f9',
	blue100: '#b0d0ec',
	blue200: '#8ab9e2',
	blue300: '#5498d5',
	blue400: '#3385cd',
	blue500: '#0066c1',
	blue600: '#005db0',
	blue700: '#004889',
	blue800: '#00386a',
	blue900: '#002b51',
	cyan50: '#E6F6F5',
	cyan100: '#ccedeb',
	cyan200: '#99DBD6',
	cyan400: '#33B7AD',
	cyan500: '#00A599',
	cyan600: '#008B80',
	neutral400: '#bfbfbf',
	neutral500: '#999999',
	neutral600: '#777777',
	neutral700: '#333333',
	red50: '#fce6e6',
	red100: '#f6b0b0',
	red200: '#f18a8a',
	red300: '#eb5454',
	red400: '#e73333',
	red500: '#e10000',
	red600: '#cd0000',
	red700: '#a00000',
	red800: '#7c0000',
	red900: '#5f0000',
	yellow50: '#fff8e6',
	yellow100: '#ffe9b0',
	yellow200: '#ffde8a',
	yellow300: '#ffcf54',
	yellow400: '#ffc533',
	yellow500: '#ffb700',
	yellow600: '#e8a700',
	yellow700: '#b58200',
	yellow800: '#8c6500',
	yellow900: '#6b4d00',
	green400: '#47b747',
}

export const Colors = {
	light: {
		text: '#11181C',
		background: '#fff',
		tint: tintColorLight,
		icon: '#687076',
		tabIconDefault: '#687076',
		tabIconSelected: tintColorLight,
		hrefLink: ColorsBase.cyan500,
		error: 'red',
	},
	dark: {
		text: '#ECEDEE',
		background: '#151718',
		tint: tintColorDark,
		icon: '#9BA1A6',
		tabIconDefault: '#9BA1A6',
		tabIconSelected: tintColorDark,
		hrefLink: ColorsBase.cyan500,
		error: 'red',
	},
}
