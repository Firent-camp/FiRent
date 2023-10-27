// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Svg, Path } from 'react-native-svg';

// export default function Test() {
//     return (
//             <View style={styles.container}>

//                 <View style={styles.group3611}>
//                     <View style={styles.rectangle9}>
//                         <Image
//                             style={styles.rectangle8}
//                             source={{ uri: "https://www.tunisiatourism.info/thumbs/780-420-pages-1634903451-23649783.jpg" }}
//                         />



//                         <Text style={styles.norway}>
//                             {`Norway`}
//                         </Text>
//                         <Text style={styles.seelisburg}>
//                             {`Seelisburg`}
//                         </Text>
//                         <Svg style={styles.vector} width="10" height="12" viewBox="0 0 10 12" fill="none" >
//                             <Path d="M4.6732 5.89886C4.99448 5.89886 5.26962 5.78324 5.4986 5.55201C5.7272 5.32116 5.8415 5.04352 5.8415 4.71909C5.8415 4.39465 5.7272 4.11681 5.4986 3.88558C5.26962 3.65474 4.99448 3.53932 4.6732 3.53932C4.35192 3.53932 4.07698 3.65474 3.84838 3.88558C3.61939 4.11681 3.5049 4.39465 3.5049 4.71909C3.5049 5.04352 3.61939 5.32116 3.84838 5.55201C4.07698 5.78324 4.35192 5.89886 4.6732 5.89886ZM4.6732 11.5765C4.59531 11.5765 4.51743 11.5618 4.43954 11.5323C4.36165 11.5028 4.2935 11.4634 4.23509 11.4143C2.81366 10.146 1.75245 8.96882 1.05147 7.88265C0.35049 6.79608 0 5.78088 0 4.83706C0 3.36235 0.469851 2.18749 1.40955 1.3125C2.34887 0.437499 3.43675 0 4.6732 0C5.90965 0 6.99753 0.437499 7.93685 1.3125C8.87655 2.18749 9.3464 3.36235 9.3464 4.83706C9.3464 5.78088 8.99591 6.79608 8.29493 7.88265C7.59395 8.96882 6.53275 10.146 5.11131 11.4143C5.0529 11.4634 4.98475 11.5028 4.90686 11.5323C4.82897 11.5618 4.75109 11.5765 4.6732 11.5765Z" fill="#636363" />
//                         </Svg>

//                         <Text style={styles.mountainTrip}>
//                             {`Mountain Trip`}
//                         </Text>
//                         <View style={styles.rectangle35} />
//                         <Text style={styles._9}>
//                             {`4.9`}
//                         </Text>
//                         <Svg style={styles.star3} width="12" height="11" viewBox="0 0 12 11" fill="none" >
//                             <Path d="M5.52447 0.463525C5.67415 0.0028693 6.32585 0.00287002 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z" fill="#EBB513" />
//                         </Svg>

//                     </View>
//                 </View>


//                 <View style={styles.group3611}>
//                     <View style={styles.rectangle9}>
//                         <Image
//                             style={styles.rectangle8}
//                             source={{ uri: "https://www.tunisiatourism.info/thumbs/780-420-pages-1634903451-23649783.jpg" }}
//                         />



//                         <Text style={styles.norway}>
//                             {`Norway`}
//                         </Text>
//                         <Text style={styles.seelisburg}>
//                             {`Seelisburg`}
//                         </Text>
//                         <Svg style={styles.vector} width="10" height="12" viewBox="0 0 10 12" fill="none" >
//                             <Path d="M4.6732 5.89886C4.99448 5.89886 5.26962 5.78324 5.4986 5.55201C5.7272 5.32116 5.8415 5.04352 5.8415 4.71909C5.8415 4.39465 5.7272 4.11681 5.4986 3.88558C5.26962 3.65474 4.99448 3.53932 4.6732 3.53932C4.35192 3.53932 4.07698 3.65474 3.84838 3.88558C3.61939 4.11681 3.5049 4.39465 3.5049 4.71909C3.5049 5.04352 3.61939 5.32116 3.84838 5.55201C4.07698 5.78324 4.35192 5.89886 4.6732 5.89886ZM4.6732 11.5765C4.59531 11.5765 4.51743 11.5618 4.43954 11.5323C4.36165 11.5028 4.2935 11.4634 4.23509 11.4143C2.81366 10.146 1.75245 8.96882 1.05147 7.88265C0.35049 6.79608 0 5.78088 0 4.83706C0 3.36235 0.469851 2.18749 1.40955 1.3125C2.34887 0.437499 3.43675 0 4.6732 0C5.90965 0 6.99753 0.437499 7.93685 1.3125C8.87655 2.18749 9.3464 3.36235 9.3464 4.83706C9.3464 5.78088 8.99591 6.79608 8.29493 7.88265C7.59395 8.96882 6.53275 10.146 5.11131 11.4143C5.0529 11.4634 4.98475 11.5028 4.90686 11.5323C4.82897 11.5618 4.75109 11.5765 4.6732 11.5765Z" fill="#636363" />
//                         </Svg>

//                         <Text style={styles.mountainTrip}>
//                             {`Mountain Trip`}
//                         </Text>
//                         <View style={styles.rectangle35} />
//                         <Text style={styles._9}>
//                             {`4.9`}
//                         </Text>
//                         <Svg style={styles.star3} width="12" height="11" viewBox="0 0 12 11" fill="none" >
//                             <Path d="M5.52447 0.463525C5.67415 0.0028693 6.32585 0.00287002 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z" fill="#EBB513" />
//                         </Svg>

//                     </View>
//                 </View>

//             </View>


//     )
// }

// const styles = StyleSheet.create({
//     group3611: {
//         flexShrink: 0,
//         height: 133,
//         width: 342,
//         marginBottom: 10
//     },
//     container: {
//         flexDirection: 'column', // This sets the flexDirection to 'column'
//         alignItems: 'center',

//     },
//     rectangle9: {
//         position: "absolute",
//         flexShrink: 0,
//         width: 342,
//         height: 133,
//         backgroundColor: "rgba(19, 19, 22, 1)",
//         borderRadius: 20
//     },
//     norway: {
//         position: "absolute",
//         flexShrink: 0,
//         top: 69,
//         left: 168,
//         width: 80,
//         height: 25,
//         textAlign: "left",
//         color: "rgba(255, 255, 255, 1)",
//         fontSize: 11,
//         fontWeight: "400",
//         letterSpacing: 0
//     },
//     seelisburg: {
//         position: "absolute",
//         flexShrink: 0,
//         top: 46,
//         left: 156,
//         width: 80,
//         height: 25,
//         textAlign: "left",
//         color: "rgba(255, 255, 255, 1)",
//         fontSize: 12,
//         fontWeight: "400",
//         letterSpacing: 0
//     },
//     vector: {
//         position: "absolute",
//         flexShrink: 0,
//         top: 72,
//         left: 155,
//         width: 9,
//         height: 12,
//         overflow: "visible"
//     },
//     rectangle8: {
//         position: "absolute",
//         flexShrink: 0,
//         top: 4,
//         left: 4,
//         width: 141,
//         height: 126,
//         boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
//         borderRadius: 15
//     },
//     mountainTrip: {
//         position: "absolute",
//         flexShrink: 0,
//         top: 19,
//         left: 155,
//         width: 150,
//         height: 25,
//         textAlign: "left",
//         color: "rgba(255, 255, 255, 1)",
//         fontSize: 14,
//         fontWeight: "600",
//         letterSpacing: 0
//     },
//     rectangle35: {
//         position: "absolute",
//         flexShrink: 0,
//         top: 94,
//         left: 156,
//         width: 44,
//         height: 22,
//         backgroundColor: "rgba(31, 31, 41, 1)",
//         borderRadius: 5
//     },
//     _9: {
//         position: "absolute",
//         flexShrink: 0,
//         top: 96,
//         left: 161,
//         width: 19,
//         height: 14,
//         textAlign: "left",
//         color: "rgba(255, 255, 255, 1)",
//         fontFamily: "SF Pro Text",
//         fontSize: 12,
//         fontWeight: "400",
//         letterSpacing: 0
//     },
//     star3: {
//         position: "absolute",
//         flexShrink: 0,
//         top: 100,
//         left: 181,
//         width: 14,
//         height: 14,
//         overflow: "visible"
//     }
// })