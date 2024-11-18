import { Redirect, Tabs } from 'expo-router';

import { TabBarIcon } from '~/components/TabBarIcon';

export default function TabLayout() {
  return <Redirect href="/login" />;
  // return (
  //   <Tabs
  //     screenOptions={{
  //       tabBarActiveTintColor: 'black',
  //     }}>
  //     <Tabs.Screen
  //       name="index"
  //       options={{
  //         title: 'Events',
  //         headerShown: false,
  //         tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
  //       }}
  //     />
  //   </Tabs>
  // );
}
