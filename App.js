import { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { MotiView, AnimatePresence } from 'moti'
import { Image } from 'expo-image'
import { BlurView } from 'expo-blur'

export default function App() {
  const [hoveredBuilding, setHoveredBuilding] = useState()

  const renderHoverableBuilding = (top, right, index, buildingSource, aspectRatio, width) => {
    return (
      <View
        style={{ position: 'absolute', top, right, width, aspectRatio, cursor: 'pointer', flexDirection: 'column' }}
      >
        <MotiView
          style={{ 
            aspectRatio,
            shadowColor: "#FFF",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,

            elevation: 18,
          }}
          onMouseEnter={() => setHoveredBuilding(index)}
          onMouseLeave={() => setHoveredBuilding()}
          animate={{
            opacity: hoveredBuilding === index ? 1 : 0,
            transform: [{ scale: hoveredBuilding === index ? 1.1 : 1 }],
          }}
          transition={{
            type: 'timing',
          }}
        >
          <Image
            source={buildingSource}
            resizeMode='contain'
            style={{ flex: 1 }}
          />
        </MotiView>

        <AnimatePresence>
          {hoveredBuilding === index && <MotiView
            style={{ 
              width: 'max-content', 
              padding: 15,
              borderRadius: 10,
              backgroundColor: 'rgba(0, 0, 0, .7)',
              borderRadius: 10,
              shadowColor: "rgba(0, 0, 0, .7)",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,

              elevation: 12,
            }}
            from={{
              opacity: 0,
              transform: [{ translateY: 100 }],
            }}
            animate={{
              opacity: 1,
              transform: [{ translateY: 20 }],
            }}
            exit={{
              opacity: 0,
              transform: [{ translateY: 100 }],
            }}
            exitTransition={{
              type: 'timing',
              //duration: 2500,
            }}
          >
            <Text style={{ color: '#FFF' }}>
              Barak {index}
            </Text>
            <Text style={{ color: '#FFF' }}>
              Stav: rezervovano
            </Text>
            <Text style={{ color: '#FFF' }}>
              Cena: 1 000 000,-
            </Text>
          </MotiView>}
        </AnimatePresence>
      </View>
    )
  }

  return (
    <ImageBackground source={require('./assets/plan.png')} style={styles.container}>
      <View style={{ width: '100%', backgroundColor: '#e8dcc2', padding: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexBasis: 102 }}>
          <Image
            resizeMode='contain'
            source={require('./assets/logo-header.png')}
            style={{
              alignSelf: 'flex-start',
              height: 32,
              width: 102
            }}
          />
        </View>
        <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ marginHorizontal: 20, fontWeight: 500, fontSize: 16 }}>
            O projektu
          </Text>
          <Text style={{ marginHorizontal: 20, fontWeight: 500, fontSize: 16 }}>
            Kontakt
          </Text>
          <Text style={{ marginHorizontal: 20, fontWeight: 500, fontSize: 16 }}>
            Ceník
          </Text>
        </View>
        <View style={{ flexBasis: 102 }}>

        </View>
      </View>
      <BlurView intensity={80} style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.5)', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 800, maxWidth: '100%', padding: 20 }}>
            <Image
              source={require('./assets/plan.png')}
              resizeMode='contain'
              style={{ aspectRatio: 2560 / 1440 }}
            />

            {renderHoverableBuilding('30.2%', '71.9%', 1, require('./assets/building1.png'), 202/110.5, '7.890625%')}

            {renderHoverableBuilding('32.6%', '63.5%', 2, require('./assets/building2.png'), 172.5/112.5, '6.73828125%')}

            {renderHoverableBuilding('32.2%', '54%', 3, require('./assets/building3.png'), 158.5/110, '6.19140625%')}

            {renderHoverableBuilding('30.5%', '44.6%', 4, require('./assets/building4.png'), 154.5/108.5, '6.03515625%')}

            {renderHoverableBuilding('29.5%', '35.2%', 5, require('./assets/building5.png'), 178.5/106, '6.97265625%')}

            {renderHoverableBuilding('29%', '26.2%', 6, require('./assets/building6.png'), 191/105, '7.4609375%')}
          </View>
        </View>
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
