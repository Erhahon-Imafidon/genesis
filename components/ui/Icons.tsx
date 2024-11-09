import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons/';

export interface IconProps {
    backgroundColor: string;
    name: keyof typeof MaterialCommunityIcons.glyphMap;
    size?: number;
    iconColor?: string;
}

const Icons = ({
    backgroundColor,
    name,
    size = 40,
    iconColor = '#fff',
}: IconProps) => {
    return (
        <View
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <MaterialCommunityIcons
                name={name}
                size={size * 0.5}
                color={iconColor}
            />
        </View>
    );
};

export default Icons;
