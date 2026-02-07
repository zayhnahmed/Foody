import NetInfo from '@react-native-community/netinfo';

/**
 * Check if device is connected to the internet
 * @returns Promise<boolean> - true if connected, false otherwise
 */
export const checkNetworkConnection = async (): Promise<boolean> => {
  try {
    const state = await NetInfo.fetch();
    return state.isConnected ?? false;
  } catch (error) {
    console.error('Error checking network connection:', error);
    return false;
  }
};

/**
 * Check if internet is reachable (not just connected to WiFi)
 * @returns Promise<boolean> - true if internet is reachable
 */
export const checkInternetReachability = async (): Promise<boolean> => {
  try {
    const state = await NetInfo.fetch();
    return (state.isConnected && state.isInternetReachable) ?? false;
  } catch (error) {
    console.error('Error checking internet reachability:', error);
    return false;
  }
};

/**
 * Get detailed network information
 * @returns Promise with network state details
 */
export const getNetworkState = async () => {
  try {
    return await NetInfo.fetch();
  } catch (error) {
    console.error('Error fetching network state:', error);
    return null;
  }
};