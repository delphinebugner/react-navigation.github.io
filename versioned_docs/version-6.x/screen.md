---
id: group
title: Group
sidebar_label: Group
---

`Group` components are used to group several [screens](screen.md) inside a navigator.

A `Group` is returned from a `createNavigatorX` function:

```js
const Stack = createStackNavigator(); // Stack contains Screen & Navigator properties
```

After creating the navigator, it can be used as children of the `Navigator` component:

```js
<Stack.Navigator>
  <Stack.Group>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Group>
</Stack.Navigator>
```

## Props

### `screenOptions`

Options to configure how the screens inside the group get presented in the navigator. It accepts either an object or a function returning an object:

```js
<Stack.Group
  screenOptions={{
    animationPresentation: 'modal',
  }}
>
  {/* screens */}
</Stack.Group>
```

When you pass a function, it'll receive the [`route`](route-prop.md) and [`navigation`](navigation-prop.md):

```js
<Stack.Group
  screenOptions={({ route, navigation }) => ({
    title: route.params.title,
  })}
>
  {/* screens */}
</Stack.Group>
```

These options are merged with the `options` specified in the individual screens, and the screen's options will take precedence over the group's options.

See [Options for screens](screen-options.md) for more details and examples.