import React from 'react';
import { Image,View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Padding, FontFamily, FontSize, Color, Border } from "../globalcss";
import { useNavigation } from '@react-navigation/native';

export default function Payment3() {
  const navigation = useNavigation();

    return (
        <View style={styles.container}>
             <View style={[styles.topAppBar, styles.topAppBarLayout]}>
        <View style={[styles.headerIcon, styles.headerIconFlexBox]}>
          
          <Text style={styles.title}>Payment method</Text>
        </View>
        
      </View>
      <View style={styles.progressBar}>
        <Image
          style={styles.progressIndicatorIcon}
          contentFit="cover"
          source={require("../assets/progress-indicator2.png")}
        />
        <View style={styles.textItem}>
          <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
          <Text style={[styles.payment, styles.detailsTypo]}>Payment</Text>
          <Text style={[styles.payment, styles.detailsTypo]}>Confirm</Text>
        </View>
      </View>
            <View style={styles.contentContainer}>
            <Image
          style={styles.progressIndicatorIcon}
          contentFit="cover"
          source={require("../assets/sucess-sign.png")}
        />
                <Text style={styles.successText}>Success!</Text>
                <Text style={styles.descriptionText}>
                    Great purchase. Thank you for your purchase
                </Text>
                <TouchableOpacity style={styles.button}  onPress={() => {
            navigation.navigate("HomeUserconnected");
          }}>
                    <Text style={styles.buttonText}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1f1f29",
        flex: 1,
        width: "100%",
        height: 640,
        overflow: "hidden",
      },
    topAppBarLayout: {
        top: 45,
        height: 48,
        left: 0,
        width: "100%",
      },
      topAppBar: {
        top: 32,
        width: "100%",
        backgroundColor: Color.colorMediumpurple,
        overflow: "hidden",
        position: "absolute",
      },
      headerIconFlexBox: {
        paddingVertical: Padding.p_5xs,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        left: 0,
      },
      iconLayout: {
        height: 24,
        width: 24,
        overflow: "hidden",
      },
      textItem: {
        marginTop: 8,
        flexDirection: "row",
      },
      details: {
        color: Color.colorWhite,
        fontWeight: "500",
        fontSize: FontSize.subtitle14pxmedium_size,
      },
      payment: {
        marginLeft: 32,
        color: Color.colorWhite,
        fontWeight: "500",
        fontSize: FontSize.subtitle14pxmedium_size,
      },
      title: {
        fontSize: FontSize.subtitle16pxRegular_size,
        marginLeft: 50,
        textAlign: "left",
        letterSpacing: 0,
        color: Color.colorWhite,
      },
      detailsTypo: {
        fontWeight: "500",
        fontSize: FontSize.subtitle14pxmedium_size,
        textAlign: "left",
        letterSpacing: 0,
      },
      titleTypo: {
        textAlign: "left",
        color: "White",
      },
      headerIcon: {
        width: 186,
        paddingHorizontal: 0,
        top: 0,
        height: 48,
        left: 0,
      },
      iconLayout: {
        height: 24,
        width: 24,
        overflow: "hidden",
        left: 0,
      },
      moreVerticalIcon: {
        top: 12,
        left: 370,
        position: "absolute",
      },
      progressBar: {
        top: 110,
        left: 99,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
      },
    headerText: {
        fontSize: 18,
        color: 'white',
    },
    stepsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    activeStep: {
        color: 'cyan',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    icon: {
        fontSize: 50,
        color: 'white',
    },
    successText: {
        fontSize: 24,
        color: 'white',
        marginBottom: 10,
    },
    descriptionText: {
        color: 'lightgray',
        marginBottom: 30,
    },
    button: {
        marginTop:75,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 81,
        backgroundColor: '#686DCD',
    },
    buttonText: {
        color: 'white',
    },
});
