import React from 'react';
import { Text, View, Image } from 'react-native';

const Footer = () => {
  return (
    <View className="bg-black flex min-w-min pt-5 pl-3.5">
        <Image
          source={require("@/assets/images/TEDxLogo.png")}
          className="w-36 h-8 "
        />
        <View className='w-96'>
        <Text className="text-white text-justify font-[Outfit] pt-4 pb-8">
        © 2024 Todos los derechos reservados, bajo licencia TED Conferences,
        LLC. Este evento TEDx independiente, TEDxVitacura, está organizado
        bajo licencia de TED. En línea con la misión de difundir ideas, TED ha
        establecido el programa TEDx, que comprende eventos locales
        organizados de manera autónoma. Se prohíbe estrictamente el uso de la
        marca TEDxVitacura fuera de este contexto.
        </Text>
        </View>
      </View>
    
  );
};

export default Footer;