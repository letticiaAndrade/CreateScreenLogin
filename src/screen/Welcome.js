import {
  ScrollView,
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
import { Home } from ".././screen/Home";

import { Ionicons } from "@expo/vector-icons";

const sizeScreen = Dimensions.get("window").width;

export const Welcome = ({ navigation }) => {
  const scrollRef = useRef();
  const [step, setStep] = useState(0);
 

  const nextStep = () => {
    scrollRef.current.scrollTo({ y: 0, x: step * sizeScreen, animated: true });
  };

  useEffect(() => {
    nextStep();
  }, [step]);

  return (
    <>
      <ScrollView
        horizontal
        ref={scrollRef}
        pagingEnabled
        scrollEnabled={false}
        style={{ backgroundColor: "white" }}
      >
        <View style={style.content} >
          <View style={{ marginRight: 25 }}>
            <View style={{ alignItems: "center", marginTop: 150 }}>
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
                  fontFamily: "Montserrat_500Medium",
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
              <Text style={{ fontFamily: "Montserrat_500Medium", color: '#8b8d96' }}>
                Collection of the most beautiful places.{"\n"} experiences and
                unusual housings in {"\n"} the world.
              </Text>
            </View>

            <View style={{ alignSelf: "flex-end", marginRight: 30 }}>
              <Pressable style={style.button} onPress={() => setStep(1)}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Montserrat_500Medium",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Skip
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={style.content}>
          <View style={{ padding: 25, height: 100, width: 120 }}>
            <Ionicons.Button
              name="arrow-back"
              size={30}
              color={"black"}
              backgroundColor="white"
              onPress={() => setStep((prev) => prev - 1)}
              activeOpacity={1}
              iconStyle={{ width: 30, height: 30 }}
            ></Ionicons.Button>
          </View>

          <View style={{ alignItems: "center", marginTop: 40 }}>
            <Image
              source={Pessoa3}
              resizeMode="contain"
              style={{ width: 250, height: 250 }}
            />
          </View>

          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 35,
                fontFamily: "Montserrat_500Medium",
              }}
            >
              Best fligh{"\n"}recommendations
            </Text>
          </View>

          <View style={{ marginTop: 30, alignItems: "center" }}>
            <Text style={{ fontFamily: "Montserrat_500Medium", color:'#8b8d96' }}>
              Now you can avoid untrusted companes.{"\n"}Ourspecialiss will show
              you the best{"\n"}variantes.
            </Text>
          </View>

          <View
            style={{ alignSelf: "flex-end", marginRight: 30, marginTop: 70 }}
          >
            <Pressable style={style.button} onPress={() => setStep(2)}>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Montserrat_500Medium",
                }}
              >
                Skip
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={style.content}>
          <View style={{ padding: 25, height: 100, width: 120 }}>
            <Ionicons.Button
              name="arrow-back"
              size={30}
              color={"black"}
              backgroundColor="white"
              onPress={() => setStep((prev) => prev - 1)}
              activeOpacity={1}
              iconStyle={{ width: 30, height: 30 }}
            ></Ionicons.Button>
          </View>

          <View style={{ alignItems: "center", marginTop: 60 }}>
            <Image
              source={Pessoa2}
              resizeMode="contain"
              style={{ width: 250, height: 250 }}
            />
          </View>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 35,
              fontFamily: "Montserrat_500Medium",
              paddingLeft: 60,
            }}
          >
            Enjoy your trip.
          </Text>

          <View style={{ marginTop: 30, alignItems: "center" }}>
            <Text style={{ fontFamily: "Montserrat_500Medium", color: '#8b8d96' }}>
              Experience the world's best adventures {"\n"}with travel quest
            </Text>
          </View>

          <View
            style={{ alignSelf: "flex-end", marginRight: 30, marginTop: 70 }}
          >
            <Pressable
              style={[style.button, { marginTop: 70 }]}
              onPress={() => navigation.navigate(Home)}
            >
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Montserrat_500Medium",
                }}
              >
                Get started
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 55,
          left: 45,
        }}
      >
        {["", "", ""].map((item, i) => (
          <View
            // a key com função de de direcionar o qual step atual
            key={i}
            style={{
              backgroundColor: i === step ? "#90CAF9" : "gray",
              height: 20,
              // condição para mudar os dimensões do progress button quando selecionado o step
              width: i === step ? 40 : 20,
              borderRadius: 30,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </>
  );
};

const style = StyleSheet.create({
  content: {
    width: sizeScreen,
  },

  button: {
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    backgroundColor: "#90CAF9",
  },
});
