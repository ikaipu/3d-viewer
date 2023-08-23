type Props = {
	position: [number, number, number]
	isHelper?: boolean
}

export const TDirectionalLight: React.FC<Props> = props => {
	const { position } = props

	// const lightRef = useRef()
	// useHelper(lightRef, DirectionalLightHelper)

	return (
		<directionalLight
			position={position}
			intensity={1} // 光の強さ
			shadow-mapSize-width={2048} // 描画精度
			shadow-mapSize-height={2048}
			castShadow
		/>
	)
}