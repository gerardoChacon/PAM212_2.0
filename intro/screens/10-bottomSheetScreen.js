import React, { useRef, useMemo } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [1, "25%", "50%"]);

  const handleOpenSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Button title="Boton abrir" onPress={handleOpenSheet} />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={styles.BSheet}
        >
          <BottomSheetView style = { styles.BView}>
            <Text>BottomSheet ejemplo</Text>
            <Image
            style = {styles.IMG}
              source = {{uri:'https://imgs.search.brave.com/LPSJcpbXZadTVSDBye2DacITglVdOhdM1KAjB4v1Z5s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzA0LzMwLzgy/LzM2MF9GXzgwNDMw/ODI2Nl9ZeXdZY2xm/RjdhaG05UjZ2dDBV/ZGJpcUFhbEN6WTA1/ei5qcGc'}}
            />
          </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3d3535ff",
    alignItems: "center",
    justifyContent: "center",
  },
  BSheet: {
    backgroundColor: '#e7dedeff'
  },
  BView:{
    flex:1,
    alignItems:'center'
  },
  IMG:{
    marginTop:50,
    width: 200,
    height: 200
  }
});