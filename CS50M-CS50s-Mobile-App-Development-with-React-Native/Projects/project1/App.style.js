import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '20%',
    flexWrap: 'wrap',
    flex: 1,
  },
  heading: {
  	fontSize: 40
  },
  timer: {
  	fontSize: 70
  },
  buttonsWrapper: {
  	flexDirection: 'row'
  },
  buttons: {
  	margin: 20,
  },
  inputsWrapper: {
  	flexDirection: 'row',
  	marginTop: 20,
  	marginLeft: '20%',
  	marginRight: '10%',
  	alignItems: 'center',
  },
  inputsText: {
  	flexDirection: 'row',
  	alignItems: 'center',
  },
  rowItemWidth: {
  	width: '30%',
  },
  inputStyles: {
  	borderWidth: 1,
    borderColor: '#000',
    paddingLeft: 5,
    paddingRight: 5
  }
});
