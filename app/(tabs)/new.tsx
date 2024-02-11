import { TextInput, Button } from 'react-native';
import { useState } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View,  } from '@/components/Themed';

export default function TabTwoScreen() {
    const [text, onChangeText] = useState('Untitled Audio Entry');
  return (
    <View className="flex-1 items-center justify-center">
        <View className="flex flex-col p-4 gap-y-4">
            <TextInput className="p-2 border-solid rounded" onChangeText={onChangeText} value={text}/>
            <Button title="Tap to Record"/>
        </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
