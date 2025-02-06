const useServices = () => {
	function calculateDate(DatePending: string): string {
		const today = new Date()
		const restDays = new Date(DatePending)

		if (isNaN(restDays.getTime())) {
			return 'Error'
		}

		const differenceMs = restDays.getTime() - today.getTime()
		const differenceDays = Math.floor(differenceMs / (1000 * 3600 * 24))

		if (differenceDays > 0) {
			return `Vence en ${differenceDays} días`
		} else if (differenceDays < 0) {
			return `Hace ${Math.abs(differenceDays)} días`
		} else {
			return 'Factura Vence Hoy'
		}
	}

	/**
	 * Calcula la suma de pagos pendientes y pagados
	 */
	type Factura = {
		id: number
		Client: string
		Empresa: string
		fechVen: string
		status: string
		totalPagar: string
		type: string
	}

	function calculateSums(bills: Factura[]): {
		pagados: string
		noPagados: string
	} {
		try {
			if (!Array.isArray(bills)) {
				throw new Error('El argumento no contiene un array válido.')
			}
			const totalPagados = bills
				.filter((factura) => factura.status === 'Pagado')
				.reduce((sum, factura) => sum + Number(factura.totalPagar), 0)
			const totalNoPagados = bills
				.filter((factura) => factura.status !== 'Pagado')
				.reduce((sum, factura) => sum + Number(factura.totalPagar), 0)
			return {
				pagados: totalPagados.toLocaleString('es-ES'),
				noPagados: totalNoPagados.toLocaleString('es-ES'),
			}
		} catch (error) {
			console.error('Error al procesar los datos:', error)
			return { pagados: '0', noPagados: '0' }
		}
	}

	function calculateProgress(bills: Factura[]): number {
		const totalPagados = bills
			.filter((factura) => factura.status === 'Pagado')
			.reduce((sum, factura) => sum + Number(factura.totalPagar), 0)

		const total = bills.reduce(
			(sum, factura) => sum + Number(factura.totalPagar),
			0
		)

		return total > 0 ? totalPagados / total : 1 // Retorna un valor entre 0 y 1
	}

	return {
		calculateDate,
		calculateSums,
		calculateProgress,
	}
}

export default useServices
