import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: '15%',
    paddingRight: '5%',
    paddingLeft: '5%',
    paddingBottom: 50
  },
  inputText: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#ED7947',
    fontFamily: 'Play_700Bold',
    fontSize: 16,
    paddingLeft: 20,
    marginBottom: 21
  },
  platformContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footer: {
    marginTop: '15%',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#00D4FF',
    flexDirection: 'row',
    borderRadius: 10,
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'Play_700Bold',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0B1F34'
  },
  platformCard: {
    paddingTop: 30,
    paddingBottom: 20,
    width: '30%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  platformCardText: {
    marginTop: 40,
    color: '#9E9E9E',
    fontSize: 24,
    fontFamily: 'Play_700Bold',
    textAlign: 'center'
  }
})

export const stylesPicker = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    color: '#ED7947',
    paddingRight: 30,
    fontFamily: 'Play_700Bold',
    height: 50
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    color: '#ED7947',
    paddingRight: 30,
    fontFamily: 'Play_700Bold',
    height: 50
  },
  placeholder: {
    color: '#9E9E9E',
    fontSize: 16,
    fontFamily: 'Play_700Bold'
  },
  iconContainer: {
    top: 10,
    right: 12
  }
})
