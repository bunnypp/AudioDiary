import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

const TextBox = ({text, className, ...props }: {text:string, className?:string }) => (
    <View className="basis-1/4 border-solid w-full rounded">
        <Text className={`flex text-center w-full h-full ${className}`} {...props}>
            {text}
        </Text>
    </View>
  )

const HomeContent = () => {
    // let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return (
        <SafeAreaView>
            <View className="flex flex-col items-center justify-center bg-white p-8 w-screen h-full gap-8 overflow-scroll">
            <TextBox text="Monday"/>
            <TextBox text="Tuesday"/>
            <TextBox text="Wednesday"/>
            </View>
        </SafeAreaView>
        
    );
}

export default HomeContent;
