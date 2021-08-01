(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[7432],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?a.createElement(f,r(r({ref:n},u),{},{components:t})):a.createElement(f,r({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3355:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=t(74034),i=t(79973),o=(t(67294),t(3905)),r={id:"navigation-lifecycle",title:"Navigation lifecycle",sidebar_label:"Navigation lifecycle"},c={unversionedId:"navigation-lifecycle",id:"version-5.x/navigation-lifecycle",isDocsHomePage:!1,title:"Navigation lifecycle",description:"In a previous section, we worked with a stack navigator that has two screens (Home and Details) and learned how to use navigation.navigate('RouteName') to navigate between the routes.",source:"@site/versioned_docs/version-5.x/navigation-lifecycle.md",sourceDirName:".",slug:"/navigation-lifecycle",permalink:"/docs/5.x/navigation-lifecycle",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/navigation-lifecycle.md",version:"5.x",sidebar_label:"Navigation lifecycle",frontMatter:{id:"navigation-lifecycle",title:"Navigation lifecycle",sidebar_label:"Navigation lifecycle"},sidebar:"version-5.x/docs",previous:{title:"Nesting navigators",permalink:"/docs/5.x/nesting-navigators"},next:{title:"Opening a full-screen modal",permalink:"/docs/5.x/modal"}},s=[{value:"Example scenario",id:"example-scenario",children:[]},{value:"React Navigation lifecycle events",id:"react-navigation-lifecycle-events",children:[]},{value:"Summary",id:"summary",children:[]}],l={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In a previous section, we worked with a stack navigator that has two screens (",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Details"),") and learned how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.navigate('RouteName')")," to navigate between the routes."),(0,o.kt)("p",null,"An important question in this context is: what happens with ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," when we navigate away from it, or when we come back to it? How does a route find out that a user is leaving it or coming back to it?"),(0,o.kt)("p",null,"If you are coming to react-navigation from a web background, you may assume that when user navigates from route ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," to route ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," will unmount (its ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," is called) and ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," will mount again when user comes back to it. While these React lifecycle methods are still valid and are used in react-navigation, their usage differs from the web. This is driven by more complex needs of mobile navigation."),(0,o.kt)("h2",{id:"example-scenario"},"Example scenario"),(0,o.kt)("p",null,"Consider a stack navigator with screens A and B. After navigating to A, its ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount")," is called. When pushing B, its ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount")," is also called, but A remains mounted on the stack and its ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," is therefore not called."),(0,o.kt)("p",null,"When going back from B to A, ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," of B is called, but ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount")," of A is not because A remained mounted the whole time."),(0,o.kt)("p",null,"Similar results can be observed (in combination) with other navigators as well. Consider a tab navigator with two tabs, where each tab is a stack navigator:"),(0,o.kt)("samp",{id:"navigation-lifecycle"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name="First">\n          {() => (\n            <SettingsStack.Navigator>\n              <SettingsStack.Screen\n                name="Settings"\n                component={SettingsScreen}\n              />\n              <SettingsStack.Screen name="Profile" component={ProfileScreen} />\n            </SettingsStack.Navigator>\n          )}\n        </Tab.Screen>\n        <Tab.Screen name="Second">\n          {() => (\n            <HomeStack.Navigator>\n              <HomeStack.Screen name="Home" component={HomeScreen} />\n              <HomeStack.Screen name="Details" component={DetailsScreen} />\n            </HomeStack.Navigator>\n          )}\n        </Tab.Screen>\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,o.kt)("p",null,"We start on the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeScreen")," and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"DetailsScreen"),". Then we use the tab bar to switch to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SettingsScreen")," and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"ProfileScreen"),". After this sequence of operations is done, all 4 of the screens are mounted! If you use the tab bar to switch back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeStack"),", you'll notice you'll be presented with the ",(0,o.kt)("inlineCode",{parentName:"p"},"DetailsScreen")," - the navigation state of the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeStack")," has been preserved!"),(0,o.kt)("h2",{id:"react-navigation-lifecycle-events"},"React Navigation lifecycle events"),(0,o.kt)("p",null,'Now that we understand how React lifecycle methods work in React Navigation, let\'s answer the question we asked at the beginning: "How do we find out that a user is leaving (blur) it or coming back to it (focus)?"'),(0,o.kt)("p",null,"React Navigation emits events to screen components that subscribe to them. We can listen to ",(0,o.kt)("inlineCode",{parentName:"p"},"focus")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"blur")," events to know when a screen comes into focus or goes out of focus respectively."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("samp",{id:"focus-and-blur"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Profile({ navigation }) {\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // Screen was focused\n      // Do something\n    });\n\n    return unsubscribe;\n  }, [navigation]);\n\n  return <ProfileContent />;\n}\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-events"},"Navigation events")," for more details on the available events and the API usage."),(0,o.kt)("p",null,"Instead of adding event listeners manually, we can use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/use-focus-effect"},(0,o.kt)("inlineCode",{parentName:"a"},"useFocusEffect"))," hook to perform side effects. It's like React's ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, but it ties into the navigation lifecycle."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("samp",{id:"use-focus-effect"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useFocusEffect } from '@react-navigation/native';\n\nfunction Profile() {\n  useFocusEffect(\n    React.useCallback(() => {\n      // Do something when the screen is focused\n\n      return () => {\n        // Do something when the screen is unfocused\n        // Useful for cleanup functions\n      };\n    }, [])\n  );\n\n  return <ProfileContent />;\n}\n")),(0,o.kt)("p",null,"If you want to render different things based on if the screen is focused or not, you can use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/use-is-focused"},(0,o.kt)("inlineCode",{parentName:"a"},"useIsFocused"))," hook which returns a boolean indicating whether the screen is focused."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"While React's lifecycle methods are still valid, React Navigation adds more events that you can subscribe to through the ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," prop."),(0,o.kt)("li",{parentName:"ul"},"You may also use the ",(0,o.kt)("inlineCode",{parentName:"li"},"useFocusEffect")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"useIsFocused")," hooks.")))}u.isMDXComponent=!0}}]);