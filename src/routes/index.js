import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './stack.routes';

export const Routes = ()=> {
    return (
        <NavigationContainer >
             <AuthRoutes/>
         </NavigationContainer>
    )
  
}