import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  Pressable,
} from "react-native";

import React, { useState, useRef, useEffect } from "react";
import Pessoa from "../../assets/image/pessoa3.png";
import Pessoa2 from "../../assets/image/pessoaLogin.png";
import Pessoa3 from "../../assets/image/meditandoPessoa.png";

const sizeScreen = Dimensions.get("window").width;

export const Welcome = () => {
  const scrollRef = useRef();
  const [step, setStep] = useState(0);

  const nextStep = () => {
    scrollRef.current.scrollTo({ y: 0, x: step * sizeScreen, animated: true });
  };

  useEffect(() => {
    nextStep();
  }, [step]);

  return (
    <ScrollView
      scrollEnabled={false}
      ref={scrollRef}
      horizontal
      pagingEnabled={true}
     >
      <StatusBar style="auto" />
     
      <View>
        <View style={[style.content, { marginRight: 25 }]}>
          <View style={{ alignItems: "center", marginTop: 180 }}>
            <Image
              source={Pessoa}
              resizeMode="contain"
              style={{ width: 250, height: 250 }}
            />
          </View>
          <View style={{ marginVertical: 10, marginLeft: 50 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 35,
                fontFamily: 'Montserrat_500Medium',
              }}
            >
              Find ticket{"\n"}for your trip!
            </Text>
          </View>

          <View
            style={{
              alignItems: "baseline",
              marginLeft: 50,
              marginTop: 30,
              marginBottom: 50,
            }}
          >
            <Text style={{ fontFamily: 'Montserrat_500Medium' }}>
              Collection of the most beautiful places.{"\n"} experiences and
              unusual housings in {"\n"} the world.
            </Text>
          </View>

          <View style={{ alignSelf: "flex-end", marginRight: 30 }}>
            <Pressable style={style.button} onPress={() => setStep(1)}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Montserrat_500Medium',
                  textAlign: "center",
                  color: "white",
                }}
              >
                Skip
              </Text>
            </Pressable>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 35,
              fontFamily: 'Montserrat_500Medium',
            }}
          >
            Best fligh{"\n"}recommendations
          </Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: 'Montserrat_500Medium' }}>
            Now you can avoid untrusted companes.{"\n"}Ourspecialiss will show
            you the best{"\n"}variantes.
          </Text>
        </View>

        <View style={{ alignSelf: "flex-end", marginRight: 30, marginTop: 70 }}>
          <Pressable style={style.button} onPress={() => setStep(2)}>
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                color: "white",
                fontFamily: 'Montserrat_500Medium',
              }}
            >
              Skip
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={style.content}>
        <View style={{ alignItems: "center", marginTop: 180 }}>
          <Image
            source={Pessoa3}
            resizeMode="contain"
            style={{ width: 250, height: 250 }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 35,
            fontFamily: 'Montserrat_500Medium',
          }}
        >
          Enjoy your trip.
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontFamily: 'Montserrat_500Medium' }}>
          Experience the world's best adventures {"\n"}with travel quest
        </Text>
      </View>
      <View style={style.content}>
        <View style={{ alignItems: "center", marginTop: 180 }}>
          <Image
            source={Pessoa2}
            resizeMode="contain"
            style={{ width: 250, height: 250 }}
          />
        </View>
        <View style={{ alignSelf: "flex-end", marginRight: 30, marginTop: 70 }}>
          <Pressable
            style={[style.button, { marginTop: 70 }]}
            onPress={() => navigation.navegate(Home)}
          >
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                color: "white",
                fontFamily: 'Montserrat_500Medium',
              }}
            >
              Get started
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({

  
    content: {
      width: sizeScreen,
    },
  
    button: {
      marginVertical: 15,
      borderWidth: 1,
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 25,
      backgroundColor: "blue",
    },
  });
