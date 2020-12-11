import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Navigation } from "react-native-navigation";
import { colors } from '../../theme/theme';
import { actionRadio } from '../../redux/user/action';
import { useDispatch } from 'react-redux';

const PROP = [
	{
		key: 'Male',
		text: 'Male',
	},
	{
		key: 'Female',
		text: 'Female',
	},
	{
		key: 'Other',
		text: 'Other',
	},
];

const RadioButton = (props) => {

	const dispatch = useDispatch();
	const [value, setvalue] = useState(null);

	useEffect(() => {
		console.log('chala',props.genderSelect)
	}, [])

	const _closeAlert = () => {
		Navigation.dismissOverlay(props.componentId)
	};

	const onRadioPress = (res) => {
		setvalue(res.key)
		// console.warn(res.key,'keyyy')
		// dispatch(actionRadio(res.key));
		props.genderSelect(res.key)
	}

	return (
		<View style={{ justifyContent: "center", alignItems: 'center', padding: 20 }}>
			<View style={{
				height: 250, width: 220, marginVertical: 150,
				justifyContent: 'center',
				backgroundColor: "#fff", elevation: 20
			}}>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							<View style={{ width: '30%', alignItems: "center", justifyContent: "center" }}>
								<TouchableOpacity
									style={styles.radioCircle}
									onPress={() => onRadioPress(res)}>
									{value === res.key && <View style={styles.selectedRb} />}
								</TouchableOpacity>
							</View>

							<View style={{ width: "70%" }}>
								<Text style={styles.radioText}>{res.text}</Text>
							</View>

						</View>
					);
				})}
				<TouchableOpacity onPress={_closeAlert} style={{ marginRight: 10 }}>
					<Text style={{ textAlign: 'right', fontSize: 20 }}>OK</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 35,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		// width:'50%'
	},
	radioText: {
		marginRight: 35,
		fontSize: 20,
		color: '#000',
		fontWeight: '700'
	},
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: colors.secondary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: colors.secondary,
	},
	result: {
		marginTop: 20,
		color: 'white',
		fontWeight: '600',
		backgroundColor: '#F3FBFE',
	},
});


export default RadioButton