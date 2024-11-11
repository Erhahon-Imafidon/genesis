import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

const useLocation = () => {
    const [location, setLocation] = useState<object | null>(null);
    const [errMsg, setErrMsg] = useState<string | null>(null);

    const getLocation = async () => {
        try {
            const { granted } =
                await Location.requestForegroundPermissionsAsync();
            if (!granted) return;

            let result = await Location.getLastKnownPositionAsync();
            if (result?.coords) {
                const { latitude, longitude } = result.coords;
                setLocation({ latitude, longitude });
            }
        } catch (error) {
            setErrMsg('Permission to access location was denied');
            console.log(error);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return { location, errMsg };
};

export default useLocation;
