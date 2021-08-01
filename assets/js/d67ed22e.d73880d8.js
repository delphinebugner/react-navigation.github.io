(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[446],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return g}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return n?a.createElement(d,r(r({ref:t},l),{},{components:n})):a.createElement(d,r({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51917:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var a=n(74034),o=n(79973),i=(n(67294),n(3905)),r={id:"typescript",title:"Type checking with TypeScript",sidebar_label:"Type checking with TypeScript"},p={unversionedId:"typescript",id:"version-6.x/typescript",isDocsHomePage:!1,title:"Type checking with TypeScript",description:"React Navigation is written with TypeScript and exports type definitions for TypeScript projects.",source:"@site/versioned_docs/version-6.x/typescript.md",sourceDirName:".",slug:"/typescript",permalink:"/docs/typescript",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/typescript.md",version:"6.x",sidebar_label:"Type checking with TypeScript",frontMatter:{id:"typescript",title:"Type checking with TypeScript",sidebar_label:"Type checking with TypeScript"},sidebar:"version-6.x/docs",previous:{title:"Testing with Jest",permalink:"/docs/testing"},next:{title:"Redux integration",permalink:"/docs/redux-integration"}},s=[{value:"Type checking the navigator",id:"type-checking-the-navigator",children:[]},{value:"Type checking screens",id:"type-checking-screens",children:[]},{value:"Nesting navigators",id:"nesting-navigators",children:[]},{value:"Annotating <code>useNavigation</code>",id:"annotating-usenavigation",children:[]},{value:"Annotating <code>useRoute</code>",id:"annotating-useroute",children:[]},{value:"Annotating <code>options</code> and <code>screenOptions</code>",id:"annotating-options-and-screenoptions",children:[]},{value:"Annotating <code>ref</code> on <code>NavigationContainer</code>",id:"annotating-ref-on-navigationcontainer",children:[]},{value:"Specifying default types for <code>useNavigation</code>, <code>Link</code>, <code>ref</code> etc",id:"specifying-default-types-for-usenavigation-link-ref-etc",children:[]}],c={toc:s};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React Navigation is written with TypeScript and exports type definitions for TypeScript projects."),(0,i.kt)("h3",{id:"type-checking-the-navigator"},"Type checking the navigator"),(0,i.kt)("p",null,"To type check our route name and params, the first thing we need to do is to create an object type with mappings for route name to the params of the route. For example, say we have a route called ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile")," in our root navigator which should have a param ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type RootStackParamList = {\n  Profile: { userId: string };\n};\n")),(0,i.kt)("p",null,"Similarly, we need to do the same for each route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n")),(0,i.kt)("p",null,"Specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," means that the route doesn't have params. A union type with ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"SomeType | undefined"),") means that params are optional."),(0,i.kt)("p",null,"After we have defined the mappings, we need to tell our navigator to use it. To do that, we can pass it as a generic to the ",(0,i.kt)("inlineCode",{parentName:"p"},"createXNavigator")," functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createStackNavigator } from '@react-navigation/stack';\n\nconst RootStack = createStackNavigator<RootStackParamList>();\n")),(0,i.kt)("p",null,"And then we can use it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<RootStack.Navigator initialRouteName="Home">\n  <RootStack.Screen name="Home" component={Home} />\n  <RootStack.Screen\n    name="Profile"\n    component={Profile}\n    initialParams={{ userId: user.id }}\n  />\n  <RootStack.Screen name="Feed" component={Feed} />\n</RootStack.Navigator>\n')),(0,i.kt)("p",null,"This will provide type checking and intelliSense for props of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Navigator")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Screen")," components."),(0,i.kt)("h3",{id:"type-checking-screens"},"Type checking screens"),(0,i.kt)("p",null,"To type check our screens, we need to annotate the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop and the ",(0,i.kt)("inlineCode",{parentName:"p"},"route")," prop received by a screen."),(0,i.kt)("p",null,"To annotate the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop, we need to import the corresponding type from the navigator. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"StackNavigationProp")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/stack"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { StackNavigationProp } from '@react-navigation/stack';\n\ntype ProfileScreenNavigationProp = StackNavigationProp<\n  RootStackParamList,\n  'Profile'\n>;\n\ntype Props = {\n  navigation: ProfileScreenNavigationProp;\n};\n")),(0,i.kt)("p",null,"The type for the navigation prop takes 2 generics, the param list object we defined earlier, and the name of the current route. This allows us to type check route names and params which you're navigating using ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"push")," etc. The name of the current route is necessary to type check the params when you call ",(0,i.kt)("inlineCode",{parentName:"p"},"setParams"),"."),(0,i.kt)("p",null,"Similarly, you can import ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawerNavigationProp")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/drawer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BottomTabNavigationProp")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/bottom-tabs")," etc."),(0,i.kt)("p",null,"To annotate the ",(0,i.kt)("inlineCode",{parentName:"p"},"route")," prop, we need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"RouteProp")," type from ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/native"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RouteProp } from '@react-navigation/native';\n\ntype ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;\n\ntype Props = {\n  route: ProfileScreenRouteProp;\n};\n")),(0,i.kt)("p",null,"This allows us to type check the route object, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"route.params"),"."),(0,i.kt)("p",null,"To summarize:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RouteProp } from '@react-navigation/native';\nimport { StackNavigationProp } from '@react-navigation/stack';\n\ntype RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n\ntype ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;\n\ntype ProfileScreenNavigationProp = StackNavigationProp<\n  RootStackParamList,\n  'Profile'\n>;\n\ntype Props = {\n  route: ProfileScreenRouteProp;\n  navigation: ProfileScreenNavigationProp;\n};\n")),(0,i.kt)("p",null,"Alternatively, you can also import a generic type to define types for both the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"route")," props from the corresponding navigator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { StackScreenProps } from '@react-navigation/stack';\n\ntype RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n\ntype Props = StackScreenProps<RootStackParamList, 'Profile'>;\n")),(0,i.kt)("p",null,"Similarly, you can import ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawerScreenProps")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/drawer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BottomTabScreenProps")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/bottom-tabs")," etc."),(0,i.kt)("p",null,"Then you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Props")," type to annotate your component."),(0,i.kt)("p",null,"For function components:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"function ProfileScreen({ route, navigation }: Props) {\n  // ...\n}\n")),(0,i.kt)("p",null,"For class components:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class ProfileScreen extends React.Component<Props> {\n  render() {\n    // ...\n  }\n}\n")),(0,i.kt)("p",null,"We recommend creating a separate ",(0,i.kt)("inlineCode",{parentName:"p"},"types.tsx")," file where you keep the types and import them in your component files instead of repeating them in each file."),(0,i.kt)("h3",{id:"nesting-navigators"},"Nesting navigators"),(0,i.kt)("h4",{id:"type-checking-screens-and-params-in-nested-navigator"},"Type checking screens and params in nested navigator"),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator"},"navigate to a screen in a nested navigator")," by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"screen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," properties for the nested screen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"navigation.navigate('Home', {\n  screen: 'Feed',\n  params: { sort: 'latest' },\n});\n")),(0,i.kt)("p",null,"To be able to type check this, we need to extract the params from the screen containing the nested navigator. This can be done using the ",(0,i.kt)("inlineCode",{parentName:"p"},"NavigatorScreenParams")," utility:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { NavigatorScreenParams } from '@react-navigation/native';\n\ntype TabParamList = {\n  Home: NavigatorScreenParams<StackParamList>;\n  Profile: { userId: string };\n};\n")),(0,i.kt)("h4",{id:"combining-navigation-props"},"Combining navigation props"),(0,i.kt)("p",null,"When you nest navigators, the navigation prop of the screen is a combination of multiple navigation props. For example, if we have a tab inside a stack, the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop will have both ",(0,i.kt)("inlineCode",{parentName:"p"},"jumpTo")," (from the tab navigator) and ",(0,i.kt)("inlineCode",{parentName:"p"},"push")," (from the stack navigator). To make it easier to combine types from multiple navigator, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"CompositeNavigationProp")," type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { CompositeNavigationProp } from '@react-navigation/native';\nimport { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';\nimport { StackNavigationProp } from '@react-navigation/stack';\n\ntype ProfileScreenNavigationProp = CompositeNavigationProp<\n  BottomTabNavigationProp<TabParamList, 'Profile'>,\n  StackNavigationProp<StackParamList>\n>;\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CompositeNavigationProp")," type takes 2 parameters, first parameter is the primary navigation type (type for the navigator that owns this screen, in our case the tab navigator which contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile")," screen) and second parameter is the secondary navigation type (type for a parent navigator). The primary navigation type should always have the screen's route name as it's second parameter."),(0,i.kt)("p",null,"For multiple parent navigators, this secondary type should be nested:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type ProfileScreenNavigationProp = CompositeNavigationProp<\n  BottomTabNavigationProp<TabParamList, 'Profile'>,\n  CompositeNavigationProp<\n    StackNavigationProp<StackParamList>,\n    DrawerNavigationProp<DrawerParamList>\n  >\n>;\n")),(0,i.kt)("p",null,"If you're using helpers such as ",(0,i.kt)("inlineCode",{parentName:"p"},"StackScreenProps"),", you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"CompositeScreenProps")," to combine them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { CompositeScreenProps } from '@react-navigation/native';\nimport { BottomTabScreenProps } from '@react-navigation/bottom-tabs';\nimport { StackScreenProps } from '@react-navigation/stack';\n\ntype ProfileScreenNavigationProp = CompositeScreenProps<\n  BottomTabScreenProps<TabParamList, 'Profile'>,\n  StackScreenProps<StackParamList>\n>;\n")),(0,i.kt)("h3",{id:"annotating-usenavigation"},"Annotating ",(0,i.kt)("inlineCode",{parentName:"h3"},"useNavigation")),(0,i.kt)("p",null,"To annotate the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop that we get from ",(0,i.kt)("inlineCode",{parentName:"p"},"useNavigation"),", we can use a type parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const navigation = useNavigation<ProfileScreenNavigationProp>();\n")),(0,i.kt)("p",null,"It's important to note that this isn't completely type-safe because the type parameter you use may not be correct and we cannot statically verify it."),(0,i.kt)("h3",{id:"annotating-useroute"},"Annotating ",(0,i.kt)("inlineCode",{parentName:"h3"},"useRoute")),(0,i.kt)("p",null,"To annotate the ",(0,i.kt)("inlineCode",{parentName:"p"},"route")," prop that we get from ",(0,i.kt)("inlineCode",{parentName:"p"},"useRoute"),", we can use a type parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const route = useRoute<ProfileScreenRouteProp>();\n")),(0,i.kt)("p",null,"It's important to note that this isn't completely type-safe, similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"useNavigation"),"."),(0,i.kt)("h3",{id:"annotating-options-and-screenoptions"},"Annotating ",(0,i.kt)("inlineCode",{parentName:"h3"},"options")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"screenOptions")),(0,i.kt)("p",null,"When you pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Screen")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"screenOptions")," prop to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Navigator")," component, they are already type-checked and you don't need to do anything special. However, sometimes you might want to extract the options to a separate object, and you might want to annotate it."),(0,i.kt)("p",null,"To annotate the options, we need to import the corresponding type from the navigator. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"StackNavigationOptions")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/stack"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { StackNavigationOptions } from '@react-navigation/stack';\n\nconst options: StackNavigationOptions = {\n  headerShown: false,\n};\n")),(0,i.kt)("p",null,"Similarly, you can import ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawerNavigationOptions")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/drawer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BottomTabNavigationOptions")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/bottom-tabs")," etc."),(0,i.kt)("h3",{id:"annotating-ref-on-navigationcontainer"},"Annotating ",(0,i.kt)("inlineCode",{parentName:"h3"},"ref")," on ",(0,i.kt)("inlineCode",{parentName:"h3"},"NavigationContainer")),(0,i.kt)("p",null,"If you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"createNavigationContainerRef()")," method to create the ref, you can annotate it to type-check navigation actions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createNavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef = createNavigationContainerRef<RootStackParamList>();\n")),(0,i.kt)("p",null,"Similarly, for ",(0,i.kt)("inlineCode",{parentName:"p"},"useNavigationContainerRef()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createNavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef = useNavigationContainerRef<RootStackParamList>();\n")),(0,i.kt)("p",null,"If you're using a regular ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," object, you can pass a generic to the ",(0,i.kt)("inlineCode",{parentName:"p"},"NavigationContainerRef")," type.."),(0,i.kt)("p",null,"Example when using ",(0,i.kt)("inlineCode",{parentName:"p"},"React.useRef")," hook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { NavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef = React.useRef<NavigationContainerRef<RootStackParamList>>(null);\n")),(0,i.kt)("p",null,"Example when using ",(0,i.kt)("inlineCode",{parentName:"p"},"React.createRef"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { NavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();\n")),(0,i.kt)("h3",{id:"specifying-default-types-for-usenavigation-link-ref-etc"},"Specifying default types for ",(0,i.kt)("inlineCode",{parentName:"h3"},"useNavigation"),", ",(0,i.kt)("inlineCode",{parentName:"h3"},"Link"),", ",(0,i.kt)("inlineCode",{parentName:"h3"},"ref")," etc"),(0,i.kt)("p",null,"Instead of manually annotating these APIs, you can specify a global type for your root navigator which will be used as the default type."),(0,i.kt)("p",null,"To do this, you can add this snippet somewhere in your codebase:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"declare global {\n  // eslint-disable-next-line @typescript-eslint/no-namespace\n  namespace ReactNavigation {\n    interface RootParamList extends RootStackParamList {}\n  }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"RootParamList")," interface lets React Navigation know about the params accepted by your root navigator. Here we extend the type ",(0,i.kt)("inlineCode",{parentName:"p"},"RootStackParamList")," because that's the type of params for our stack navigator at the root. The name of this type isn't important."))}l.isMDXComponent=!0}}]);