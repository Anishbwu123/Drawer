import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const menus = [
  {
    icon: require('../../Images/home.png'),
    title: 'Home',
  },
  {
    icon: require('../../Images/direction.png'),
    title: 'Explore',
  },
  {
    icon: require('../../Images/book.png'),
    title: 'Library',
  },
  {
    icon: require('../../Images/friends.png'),
    title: 'Friends',
  },
  {
    icon: require('../../Images/bubble-chat.png'),
    title: 'Chat',
  },
  {
    icon: require('../../Images/user-avatar.png'),
    title: 'Add friends',
  },
];

const YourDrawerScreen = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedMenuItem, setselectedMenuItem] = useState(0);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current; // Initially scale should be 1

  const toggleMenu = () => {
    Animated.timing(scale, {
      toValue: showMenu ? 1 : 0.7, // Shrinks the screen when menu is shown
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(moveToRight, {
      toValue: showMenu ? 0 : 230, // Moves the screen to the right when menu is shown
      duration: 300,
      useNativeDriver: true,
    }).start();

    setShowMenu(!showMenu);
  };

  return (
    <View style={{flex: 1}}>
      {/* menu design */}
      <View style={{flex: 1, backgroundColor: '#6600ff'}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={require('../../Images/profile.png')}
            style={{width: 70, height: 70, borderRadius: 35, marginLeft: 20}}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 22, fontWeight: '800', color: '#fff'}}>
              Anish Dhar
            </Text>
            <Text style={{fontSize: 14, color: '#fff', marginTop: 1}}>
              React Native Developer
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <FlatList
            data={menus}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 180,
                    height: 50,
                    marginLeft: 20,
                    marginTop: 20,
                    backgroundColor:
                      selectedMenuItem === index ? '#fff' : '#6600ff',
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setselectedMenuItem(index);
                  }}>
                  <Image
                    source={item.icon}
                    style={{
                      width: 24,
                      height: 24,
                      marginLeft: 15,
                      tintColor: selectedMenuItem === index ? '#000' : '#fff',
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 20,
                      fontWeight: '800',
                      color: selectedMenuItem === index ? '#000' : '#fff',
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>

      {/* home design */}
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: 'white',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          transform: [
            {scale}, // Apply scale transformation
            {translateX: moveToRight}, // Apply translateX transformation
          ],
          borderRadius: showMenu ? 15 : 0,
        }}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity style={{marginLeft: 10}} onPress={toggleMenu}>
            <AntDesign name="menu-unfold" size={24} color={'black'} />
          </TouchableOpacity>
          <Text style={{marginLeft: 20, fontSize: 20, fontWeight: '800'}}>
            {menus[selectedMenuItem].title}
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            position: 'absolute',
            bottom: 20,
          }}>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={require('../../Images/home.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={require('../../Images/direction.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={require('../../Images/book.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={require('../../Images/friends.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '20%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={require('../../Images/bubble-chat.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default YourDrawerScreen;

const styles = StyleSheet.create({});
