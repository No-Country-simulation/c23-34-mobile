import React, { memo, useState } from 'react'
import AllCards from '@/components/AllCards'

import ServicesClient from '@/components/ServicesClient'
import TotalPayment from '@/components/TotalPayment'
import { Colors, ColorsBase } from '@/constants/Colors'
import { FlatList, View } from 'react-native'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from '../../../../components/ThemedText'
import HeaderApp from '../../../../components/HeaderApp'
import useServices from '@/hooks/useServices'

const Home = () => {
	const dataClient = [
		{
			id: 1,
			type: 'Electricidad',
			Empresa: 'EDENOR',
			Client: '88698235',
			status: 'Atrasado',
			fechVen: '2025-01-31',
			totalPagar: '75900',
		},
		{
			id: 2,
			type: 'Agua',
			Empresa: 'EDENOR',
			Client: '88698235',
			status: 'Pendiente',
			fechVen: '2025-02-07',
			totalPagar: '75900',
		},
		{
			id: 3,
			type: 'Gas',
			Empresa: 'MetroGas',
			Client: '88698235',
			status: 'Pagado',
			fechVen: '2025-02-15',
			totalPagar: '75900',
		},
		{
			id: 4,
			type: 'Internet',
			Empresa: 'Movistar',
			Client: '88698235',
			status: 'Pagado',
			fechVen: '2025-02-15',
			totalPagar: '75900',
		},
		{
			id: 5,
			type: 'Internet',
			Empresa: 'Movistar',
			Client: '88698235',
			status: 'Pagado',
			fechVen: '2025-02-15',
			totalPagar: '75900',
		},
	]
	const [pressCards, setPressCards] = useState(true)
	const { calculateSums,calculateProgress } = useServices()
	const { pagados, noPagados } = calculateSums(dataClient)
	return (
		<FlatList
			data={[]}
			renderItem={() => null}
			ListHeaderComponent={() => (
				<View style={{ gap: 15 }}>
					<HeaderApp />
					<TotalPayment
						progress={calculateProgress(dataClient)}
						totalDebt={noPagados}
						totalPagados={pagados}
					/>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginBottom: 10,
						}}
					>
						<Button
							style={{
								width: '48%',
								borderColor: pressCards
									? 'transparent'
									: ColorsBase.cyan500,
							}}
							buttonColor={
								pressCards
									? ColorsBase.cyan500
									: Colors.light.background
							}
							textColor={
								pressCards
									? Colors.light.background
									: ColorsBase.cyan500
							}
							onPress={() => {
								setPressCards(true)
							}}
							mode={pressCards ? 'contained' : 'outlined'}
						>
							<ThemedText
								type='default'
								style={{
									color: pressCards
										? Colors.light.background
										: ColorsBase.cyan500,
								}}
							>
								Servicios
							</ThemedText>
						</Button>
						<Button
							style={{
								width: '48%',
								borderColor: pressCards
									? ColorsBase.cyan500
									: 'transparent',
							}}
							buttonColor={
								pressCards
									? Colors.light.background
									: ColorsBase.cyan500
							}
							textColor={
								pressCards
									? ColorsBase.cyan500
									: Colors.light.background
							}
							mode='outlined'
							onPress={() => setPressCards(false)}
						>
							<ThemedText
								type='default'
								style={{
									color: pressCards
										? ColorsBase.cyan500
										: Colors.light.background,
								}}
							>
								Mis Tarjetas
							</ThemedText>
						</Button>
					</View>
					{pressCards ? (
						<ServicesClient data={dataClient} />
					) : (
						<AllCards />
					)}
				</View>
			)}
		/>
	)
}

export default memo(Home)
