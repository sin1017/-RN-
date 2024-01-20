import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootContainer from '../containers/RootContainer';

const Navigation = () => {
  const navigationRef: any = useRef();
  const routeNameRef = useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
      }}
    >
      <RootContainer />
    </NavigationContainer>
  );
};

export default Navigation;
