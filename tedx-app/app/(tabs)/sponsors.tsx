import React, { useEffect, useRef } from 'react';
import { View, Image, Text, ScrollView, Dimensions, ImageSourcePropType, TouchableOpacity, Linking,  } from 'react-native';
import sponsor from '@/assets/data/datasponsor';
import Footer from '@/components/Footer';
import { LinearGradient } from 'expo-linear-gradient';


const { width } = Dimensions.get('window');

interface Sponsor {
  id: number;
  nombre: string;
  photo_url: ImageSourcePropType;
}

interface ImageCarouselProps {
  sponsors: Sponsor[];
  speed?: number;
  reverse?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ sponsors, speed = 1, reverse = false }) => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const scrollX = useRef(0);
  const contentWidth = useRef(0);

  useEffect(() => {
    const scrollAnimation = () => {
      if (scrollViewRef.current) {
        scrollX.current += reverse ? -speed : speed;

        
        scrollViewRef.current.scrollTo({ x: scrollX.current, animated: false });

        
        if (reverse && scrollX.current <= 0) {
          scrollX.current = contentWidth.current - width;
        } else if (!reverse && scrollX.current >= contentWidth.current - width) {
          scrollX.current = 0;
        }
      }
    };

    const intervalId = setInterval(scrollAnimation, 16); // ~60fps

    return () => clearInterval(intervalId);
  }, [speed, reverse]);

  const onContentSizeChange = (contentWidthVal: number) => {
    contentWidth.current = contentWidthVal; 
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      onContentSizeChange={(w, h) => onContentSizeChange(w)}
      contentContainerStyle={{ flexDirection: 'row' }}
    >
      {[...sponsors, ...sponsors].map((sponsor, index) => (
        <Image
          key={`${sponsor.id}-${index}`}
          source={sponsor.photo_url}
          style={{ width: width / 3, height: width / 3, marginRight: 15, resizeMode: 'contain' }}
        />
      ))}

    </ScrollView>
  );
};


export default function Sponsors() {
    const topSponsors = sponsor.filter(s => [1, 2, 6, 7, 9, 10, 11, 12, 16, 17, 18, 19].includes(s.id));
    const bottomSponsors = sponsor.filter(s => [3, 4, 5, 8, 14, 15 ].includes(s.id));

    const handlePress = async () => {
        const url = 'https://tedxvitacura.org/sponsorship/';
        try {
          await Linking.openURL(url);
        } catch (error) {
          console.error('Error opening URL:', error);
        }
      };

  return (
    <ScrollView>
        <View className="bg-black flex-1 justify-center">
           <View>
               <Text className='text-pinktdx text-2xl font-[Alata] mb-2 text-center py-8'>Sponsors</Text>
               <ImageCarousel sponsors={topSponsors} speed={0.5}/>
               <LinearGradient
                   colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0)']}
                   style={{
                   position: 'absolute',
                   left: 0,
                   height: '100%',
                   width: 130, 
                   zIndex: 1,
                   }}
                   start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                />
                <LinearGradient
                   colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,1)']}
                   style={{
                   position: 'absolute',
                   right: 0,
                   height: '100%',
                   width: 130,
                   zIndex: 1,
                   }}
                   start={{ x: 0, y: 0 }}
                   end={{ x: 1, y: 0 }}
                />
           </View>
           <View className="h-10 " />
           <View className='pb-4 '>
               <Text className='text-pinktdx text-2xl font-[Alata] mb-2 text-center pb-8'>Partners</Text>
               <ImageCarousel sponsors={bottomSponsors} speed={0.5} reverse />
               <LinearGradient
                   colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,1)']}
                   style={{
                   position: 'absolute',
                   left: 0,
                   height: '100%',
                   width: 130, 
                   zIndex: 1,
                   }}
                   start={{ x: 1, y: 0 }}
                   end={{ x: 0, y: 0 }}
                />
                <LinearGradient
                   colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,1)']}
                   style={{
                   position: 'absolute',
                   right: 0,
                   height: '100%',
                   width: 130, 
                   zIndex: 1,
                   }}
                   start={{ x: 0, y: 0 }}
                   end={{ x: 1, y: 0 }}
                 />
           </View>
           <View className="bg-black flex items-center  py-9 mb-2">
               <TouchableOpacity
                onPress={handlePress}
                className="bg-red-600 py-2 flex-1 w-11/12 h-9 rounded-md"
                >
                <Text className="text-white text-xs text-center">
                 Conviértete en nuestro Sponsor/Partner
                </Text>
                </TouchableOpacity>
            </View>
            <Footer/>
        </View>
    </ScrollView>
  );
}

const typedSponsor: Sponsor[] = sponsor;
