import React, {
  Text,
  View,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  buttonText: {
    fontSize: 24,
    color: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends React.Component{
  render(){
    return (
      <View style={styles.container}>
      
      <Text> This is the dashboard </Text>
      <Text> {this.props.userInfo.name} </Text>
      </View>
    )
  }
}

module.exports = Dashboard;