import React, {useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Svg, Path, Defs, Pattern, Use, Image, Rect } from 'react-native-svg';
import ADRESS_API from '../API';
import axios from 'axios';
import { AuthContext } from "./Context";
import HomeUserconnected from "./HomeUserconnected";
export default function EditProfile({navigation, route }) {
  const { user, userDetail } = route.params; 
  const datauser = route.params.datauser
  const firebaseId = user;
  const [authUser,setAuthUser]=useContext(AuthContext)
  const [userDetails,setUserDetails]=useState({})
  console.log(route.params.data,'email from profile');
  const [formData, setFormData] = useState({
    userName: '',
    lastName: '',
    address: '',
    email: '',
  });
useEffect(()=>{setUserDetails(route.params.data)},[])
 
console.log(userDetails);
  const handleInputChange = (field, text) => {
    setFormData({ ...formData, [field]: text });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`http://${ADRESS_API}:5000/users/${firebaseId}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setUserDetails(formData);
        console.log('User data updated successfully');
      } else {
        console.error('Failed to update user data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const hp = () => {
    navigation.navigate('HomeUserconnected'); 
};
  return (
    <View style={styles.group3567}>
      <View style={styles.userprofil} />
      <View style={styles.group3561}>
        <View style={styles.frame3726} />
      </View>
      <View style={styles.group3566}>
        <View style={styles.group3565}>
          <View style={styles.group3527}>
            <Svg style={styles.ellipse2} width="170" height="174" viewBox="0 0 170 174" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
              <Path d="M170 86.5C170 134.549 131.607 174 84.2478 174C36.8881 174 0 134.549 0 86.5C0 38.4513 36.8881 0 84.2478 0C131.607 0 170 38.4513 170 86.5Z" fill="url(#pattern0)" />
              <Defs>
                <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <Use xlinkHref="#image0_54_1192" transform="matrix(0.00236264 0 0 0.00234192 -0.00912758 -0.034133)" />
                </Pattern>
                <Image id="image0_54_1192" width="427" height="450" xlinkHref="https://yt3.googleusercontent.com/5JKZOja-dk0C8P59C5acTbwGRmAquNDr5CzgeNXyM4gasep8Lzq-3_JPi9I5U9FTxSX6aRd2Jg=s900-c-k-c0x00ffffff-no-rj" />
              </Defs>
            </Svg>

            <TouchableOpacity style={styles.solarcameraminimalisticbold}>
              <Svg style={styles.vector} width="28" height="25" viewBox="0 0 28 25" fill="none" >
                <Path fillRule="evenodd" clipRule="evenodd" d="M8.86273 1.57715C8.86273 0.845354 9.41025 0.251434 10.0864 0.251434H18.2448C18.9209 0.251434 19.4684 0.845354 19.4684 1.57715C19.4684 2.30894 18.9209 2.90286 18.2448 2.90286H10.0864C9.41025 2.90286 8.86273 2.30894 8.86273 1.57715ZM11.2199 24.1143H17.1113C21.2489 24.1143 23.3183 24.1143 24.8044 23.1571C25.4438 22.746 25.9961 22.2131 26.4298 21.5888C27.4227 20.157 27.4227 18.1618 27.4227 14.1714C27.4227 10.181 27.4227 8.18716 26.4284 6.75406C25.9953 6.12981 25.4434 5.59691 24.8044 5.18574C23.3183 4.22858 21.2489 4.22858 17.1113 4.22858H11.2199C7.0823 4.22858 5.01286 4.22858 3.52673 5.18574C2.88777 5.59693 2.33596 6.12983 1.90273 6.75406C0.908447 8.18584 0.908447 10.181 0.908447 14.1688V14.1714C0.908447 18.1618 0.908447 20.1557 1.90141 21.5888C2.33094 22.2092 2.88244 22.7422 3.52673 23.1571C5.01286 24.1143 7.0823 24.1143 11.2199 24.1143ZM8.64134 14.1714C8.64134 11.2283 11.1151 8.84472 14.1656 8.84472C17.2161 8.84472 19.6898 11.2297 19.6898 14.1714C19.6898 17.1132 17.2147 19.4982 14.1656 19.4982C11.1151 19.4982 8.64134 17.1119 8.64134 14.1714ZM10.8513 14.1714C10.8513 12.4056 12.3361 10.9765 14.1656 10.9765C15.9951 10.9765 17.4799 12.4069 17.4799 14.1714C17.4799 15.936 15.9951 17.3664 14.1656 17.3664C12.3361 17.3664 10.8513 15.936 10.8513 14.1714ZM22.267 8.84472C21.6572 8.84472 21.1627 9.32197 21.1627 9.91059C21.1627 10.4979 21.6572 10.9751 22.267 10.9751H23.0041C23.614 10.9751 24.1084 10.4979 24.1084 9.91059C24.1084 9.32197 23.614 8.84472 23.0041 8.84472H22.267Z" fill="white" />
              </Svg>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.editProfile}>
          {`Edit Profile`}
        </Text>
        <TouchableOpacity onPress={hp}>
                        <Svg style={styles.group3530} width="39" height="38" viewBox="0 0 39 38" fill="none" >
                          <Rect width="38.1013" height="38" rx="6" fill="#131316" />
                          <Path fillRule="evenodd" clipRule="evenodd" d="M24.1462 11.5042C24.4795 11.8271 24.6667 12.2651 24.6667 12.7217C24.6667 13.1784 24.4795 13.6163 24.1462 13.9392L18.2915 19.6101L24.1462 25.2809C24.47 25.6057 24.6492 26.0407 24.6452 26.4923C24.6411 26.9438 24.4542 27.3757 24.1245 27.695C23.7949 28.0143 23.349 28.1954 22.8828 28.1993C22.4166 28.2033 21.9675 28.0297 21.6322 27.716L14.5205 20.8276C14.1872 20.5047 14 20.0667 14 19.6101C14 19.1535 14.1872 18.7155 14.5205 18.3926L21.6322 11.5042C21.9656 11.1814 22.4178 11 22.8892 11C23.3606 11 23.8128 11.1814 24.1462 11.5042Z" fill="#686DCD" />
                        </Svg>
                      </TouchableOpacity>
        <View style={styles.group3563}>
          <View style={styles.group3558}>
            <View style={styles.group3552}>
              <View style={styles.group3545}>
                <Text style={styles.name}>
                  {`Name`}
                </Text>
                <View style={styles.group3551}>
                  <Svg style={styles.group3546} width="342" height="44" viewBox="0 0 342 44" fill="none" >
                    <Rect width="342" height="44" rx="6" fill="#131316" />
                    <Rect x="0.5" y="0.5" width="341" height="43" rx="5.5" stroke="#544C4C" strokeOpacity="0.14" />
                  </Svg>
                  <TextInput
                    style={styles._melissa}
                    placeholder="Name"
                    placeholderTextColor="white"
                    value={userDetails ? userDetails.userName : datauser.userName} // Use formData here
                    onChangeText={(text) => handleInputChange('userName', text)} // Pass 'firstName' as the field
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.group3559}>
            <View style={styles.group3553}>
              <View style={styles._group3545}>
                <Text style={styles.lastname}>
                  {`Last name`}
                </Text>
                <View style={styles._group3551}>
                  <Svg style={styles._group3546} width="342" height="44" viewBox="0 0 342 44" fill="none" >
                    <Rect width="342" height="44" rx="6" fill="#131316" />
                    <Rect x="0.5" y="0.5" width="341" height="43" rx="5.5" stroke="#544C4C" strokeOpacity="0.14" />
                  </Svg>
                  <TextInput
                    style={styles._melissa}
                    placeholder="Last name"
                    placeholderTextColor="white"
                    value={userDetails ? userDetails.LastName : datauser.LastName} // Use formData here
                    onChangeText={(text) => handleInputChange('lastName', text)} // Pass 'lastName' as the field
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.group3560}>
            <View style={styles.group3554}>
              <View style={styles.__group3545}>
                <Text style={styles.password}>
                  {`Password`}
                </Text>
                <View style={styles.__group3551}>
                  <Svg style={styles.__group3546} width="342" height="44" viewBox="0 0 342 44" fill="none" >
                    <Rect width="342" height="44" rx="6" fill="#131316" />
                    <Rect x="0.5" y="0.5" width="341" height="43" rx="5.5" stroke="#544C4C" strokeOpacity="0.14" />
                  </Svg>
                  <TextInput
                    style={styles._melissa}
                    placeholder="*************"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                    value={userDetails ? userDetails.password : datauser.password} // Use formData here
                    onChangeText={(text) => handleInputChange('password', text)} // Pass 'password' as the field
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.group3555}>
            <View style={styles.___group3545}>
              <Text style={styles.dateofbirth}>
                {`Adresse`}
              </Text>
              <View style={styles.___group3551}>
                <Svg style={styles.___group3546} width="342" height="44" viewBox="0 0 342 44" fill="none" >
                  <Rect width="342" height="44" rx="6" fill="#131316" />
                  <Rect x="0.5" y="0.5" width="341" height="43" rx="5.5" stroke="#544C4C" strokeOpacity="0.14" />
                </Svg>
                <TextInput
                  style={styles._melissa}
                  placeholder="Tunisie"
                  placeholderTextColor="white"
                  value={userDetails ? userDetails.address : datauser.address} // Use formData here
                  onChangeText={(text) => handleInputChange('address', text)} // Pass 'address' as the field
                />
              </View>
            </View>
          </View>
          <View style={styles.group3562}>
            <View style={styles.group3556}>
              <View style={styles.____group3545}>
                <Text style={styles.email}>
                  {`Email`}
                </Text>
                <View style={styles.____group3551}>
                  <Svg style={styles.____group3546} width="342" height="44" viewBox="0 0 342 44" fill="none" >
                    <Rect width="342" height="44" rx="6" fill="#131316" />
                    <Rect x="0.5" y="0.5" width="341" height="43" rx="5.5" stroke="#544C4C" strokeOpacity="0.14" />
                  </Svg>
                  <TextInput
                    style={styles._melissa}
                    placeholder="Email@email.com"
                    placeholderTextColor="white"
                    value={userDetails ? userDetails.email : datauser.email} // Use formData here
                    onChangeText={(text) => handleInputChange('email', text)} // Pass 'email' as the field
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.group3564}>
          <View style={styles.group3529}>
            <View style={styles.group3521}>
              <TouchableOpacity style={styles.group29} onPress={handleSubmit} >
                <View style={styles.rectangle33} />
                <Text style={styles.savechanges}>
                  {`Save changes`}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  group3567: {
    flexShrink: 0,
    height: "100%",
    width: "100%"
  },
  userprofil: {
    position: "absolute",
    flexShrink: 0,
    height: 872,
    width: 416,
    backgroundColor: "rgba(31, 31, 41, 1)",
    alignItems: "flex-start",
    rowGap: 0
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
  },
  group3561: {
    position: "absolute",
    flexShrink: 0,
    top: 573,
    height: 75,
    left: 38,
    width: 342
  },
  frame3726: {
    position: "absolute",
    flexShrink: 0,
    height: 75,
    width: 342,
    alignItems: "flex-start",
    rowGap: 0
  },
  group3566: {
    position: "absolute",
    flexShrink: 0,
    top: 53,
    height: 757,
    left: 37,
    width: 342
  },
  group3565: {
    position: "absolute",
    flexShrink: 0,
    top: 51,
    height: 174,
    left: 86,
    width: 170
  },
  group3527: {
    position: "absolute",
    flexShrink: 0,
    height: 174,
    width: 170
  },
  ellipse2: {
    position: "absolute",
    flexShrink: 0,
    width: 170,
    height: 174,
    overflow: "visible"
  },
  solarcameraminimalisticbold: {
    position: "absolute",
    flexShrink: 0,
    top: 125,
    height: 32,
    left: 127,
    width: 32,
    alignItems: "flex-start",
    rowGap: 0
  },
  vector: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    right: 3,
    bottom: 4,
    left: 3,
    overflow: "visible"
  },
  editProfile: {
    position: "absolute",
    flexShrink: 0,
    top: 10,
    left: 122,
    width: 150,
    height: 25,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20
  },
  group3530: {
    position: "absolute",
    flexShrink: 0,
    height: 38,
    width: 38
  },
  group3563: {
    position: "absolute",
    flexShrink: 0,
    top: 245,
    height: 447,
    width: 342
  },
  group3558: {
    position: "absolute",
    flexShrink: 0,
    height: 75,
    width: 342
  },
  group3552: {
    position: "absolute",
    flexShrink: 0,
    height: 75,
    width: 342
  },
  group3545: {
    position: "absolute",
    flexShrink: 0,
    height: 75,
    width: 342
  },
  name: {
    position: "absolute",
    flexShrink: 0,
    width: 77,
    height: 19,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20
  },
  group3551: {
    position: "absolute",
    flexShrink: 0,
    top: 31,
    height: 44,
    width: 342
  },
  group3546: {
    position: "absolute",
    flexShrink: 0,
    height: 44,
    width: 342
  },
  melissa: {
    position: "absolute",
    flexShrink: 0,
    top: 18,
    left: 15,
    width: 314,
    height: 12,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 12.253182649612427
  },
  group3559: {
    position: "absolute",
    flexShrink: 0,
    top: 93,
    height: 75,
    width: 342
  },
  group3553: {
    position: "absolute",
    flexShrink: 0,
    height: 75,
    width: 342
  },
  _group3545: {
    position: "absolute",
    flexShrink: 0,
    height: 75,
    width: 342
  },
  lastname: {
    position: "absolute",
    flexShrink: 0,
    width: 106,
    height: 19,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20
  },
  _group3551: {
    position: "absolute",
    flexShrink: 0,
    top: 31,
    height: 44,
    width: 342
  },
  _group3546: {
    position: "absolute",
    flexShrink: 0,
    height: 44,
    width: 342
  },
  _melissa: {
    position: "absolute",
    flexShrink: 0,
    top: 18,
    left: 15,
    width: 314,
    height: 17,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0,
  },
  group3560: {
    position: "absolute",
    flexShrink: 0,
    top: 186,
    height: 75,
    width: 342
  },
  group3554: {
    position: "absolute",
    flexShrink: 0,
    height: 75,
    width: 342
  },
  __group3545: {
    position: "absolute",
    flexShrink: 0,
    height: 75,
    width: 342
  },
  password: {
    position: "absolute",
    flexShrink: 0,
    width: 122,
    height: 19,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20
  },
  __group3551: {
    position: "absolute",
    flexShrink: 0,
    top: 31,
    height: 44,
    width: 342
  },
  __group3546: {
    position: "absolute",
    flexShrink: 0,
    height: 44,
    width: 342
  },
  __melissa: {
    position: "absolute",
    flexShrink: 0,
    top: 18,
    left: 15,
    width: 314,
    height: 17,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 14
  },
  group3555: {
    position: "absolute",
    flexShrink: 0,
    top: 279,
    height: 75,
    width: 342
  },
  ___group3545: {
    position: "absolute",
    flexShrink: 0,
    height: 75,
    width: 342
  },
  dateofbirth: {
    position: "absolute",
    flexShrink: 0,
    width: 177,
    height: 19,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20
  },
  ___group3551: {
    position: "absolute",
    flexShrink: 0,
    top: 31,
    height: 44,
    width: 342
  },
  ___group3546: {
    position: "absolute",
    flexShrink: 0,
    height: 44,
    width: 342
  },
  ___melissa: {
    position: "absolute",
    flexShrink: 0,
    top: 18,
    left: 15,
    width: 314,
    height: 12,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 12.253182649612427
  },
  group3562: {
    position: "absolute",
    flexShrink: 0,
    top: 372,
    height: 75,
    width: 342
  },
  group3556: {
    position: "absolute",
    flexShrink: 0,
    height: 75,
    width: 342
  },
  ____group3545: {
    position: "absolute",
    flexShrink: 0,
    height: 75,
    width: 342
  },
  email: {
    position: "absolute",
    flexShrink: 0,
    width: 256,
    height: 19,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20
  },
  ____group3551: {
    position: "absolute",
    flexShrink: 0,
    top: 31,
    height: 44,
    width: 342
  },
  ____group3546: {
    position: "absolute",
    flexShrink: 0,
    height: 44,
    width: 342
  },
  ____melissa: {
    position: "absolute",
    flexShrink: 0,
    top: 18,
    left: 15,
    width: 314,
    height: 12,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 12.253182649612427
  },
  group3564: {
    position: "absolute",
    flexShrink: 0,
    top: 712,
    height: 45,
    left: 61,
    width: 221
  },
  group3529: {
    position: "absolute",
    flexShrink: 0,
    height: 45,
    width: 221
  },
  group3521: {
    position: "absolute",
    flexShrink: 0,
    height: 45,
    width: 221
  },
  group29: {
    position: "absolute",
    flexShrink: 0,
    height: 45,
    width: 221
  },
  rectangle33: {
    position: "absolute",
    flexShrink: 0,
    width: 221,
    height: 45,
    backgroundColor: "rgba(104, 109, 205, 1)",
    borderRadius: 6
  },
  savechanges: {
    position: "absolute",
    flexShrink: 0,
    top: 12,
    left: 44,
    width: 180,
    height: 21,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 20
  }
})