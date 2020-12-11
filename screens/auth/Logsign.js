import * as React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Login from './Login';
import SignUp from './SignUp'
import { colors } from '../../theme/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';


const initialLayout = { width: Dimensions.get('window').width };

const Logsign = (props) => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Log in' },
        { key: 'second', title: 'Sign up' },
    ]);

    // const renderScene = SceneMap({
    //     first: <Login Cid={props.componentId} />,
    //     second: SignUp,
    // });

    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'first':
            return <Login Cid={props.componentId} />;
          case 'second':
            return <SignUp Cid={props.componentId}  />;
          default:
            return null;
        }
      }

    const renderTabBar = props => {
        return (
            <TabBar
                {...props}
                style={{ backgroundColor: '#fff' }}
                renderLabel={({ route, focused, color }) => (
                    <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18, color: color }}>
                        {route.title}
                    </Text>
                )}
                activeColor={colors.secondary}
                inactiveColor={colors.accent}
                indicatorStyle={{
                    backgroundColor: '#FF595F',
                }}
                tabStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            />
        );
    }

    return (
        <View style={{ height: '100%' }}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
            />

            
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
});


export default Logsign