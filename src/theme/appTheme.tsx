import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#5856D6',
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 100,
    height: 120,
    width: 120,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  btnLg: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    height: 100,
    justifyContent: 'center',
    marginRight: 10,
    width: 100,
  },
  btnLgText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  globalMargin: {
    marginHorizontal: 20,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuItem: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  menuText: {
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
});

export { styles };
