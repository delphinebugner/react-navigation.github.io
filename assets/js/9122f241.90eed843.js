(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[5932],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29009:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var o=t(74034),r=t(79973),a=(t(67294),t(3905)),i={id:"modal",title:"Opening a full-screen modal",sidebar_label:"Opening a full-screen modal"},s={unversionedId:"modal",id:"version-6.x/modal",isDocsHomePage:!1,title:"Opening a full-screen modal",description:"Modal shown on screen",source:"@site/versioned_docs/version-6.x/modal.md",sourceDirName:".",slug:"/modal",permalink:"/docs/modal",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/modal.md",version:"6.x",sidebar_label:"Opening a full-screen modal",frontMatter:{id:"modal",title:"Opening a full-screen modal",sidebar_label:"Opening a full-screen modal"},sidebar:"version-6.x/docs",previous:{title:"Different status bar configuration based on route",permalink:"/docs/status-bar"},next:{title:"Screen options with nested navigators",permalink:"/docs/screen-options-resolution"}},l=[{value:"Creating a stack with modal screens",id:"creating-a-stack-with-modal-screens",children:[]},{value:"Summary",id:"summary",children:[]}],c={toc:l};function p(e){var n=e.components,i=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Modal shown on screen",src:t(87305).Z})),(0,a.kt)("p",null,"A modal displays content that temporarily blocks interactions with the main view."),(0,a.kt)("p",null,"A modal is like a popup ","\u2014"," it's not part of your primary navigation flow ","\u2014"," it usually has a different transition, a different way to dismiss it, and is intended to focus on one particular piece of content or interaction."),(0,a.kt)("h2",{id:"creating-a-stack-with-modal-screens"},"Creating a stack with modal screens"),(0,a.kt)("samp",{id:"full-screen-modal"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>\n      <Button\n        onPress={() => navigation.navigate('MyModal')}\n        title=\"Open Modal\"\n      />\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  return (\n    <View>\n      <Text>Details</Text>\n    </View>\n  );\n}\n\nfunction ModalScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ fontSize: 30 }}>This is a modal!</Text>\n      <Button onPress={() => navigation.goBack()} title=\"Dismiss\" />\n    </View>\n  );\n}\n\nconst RootStack = createStackNavigator();\n\nfunction RootStackScreen() {\n  return (\n    <RootStack.Navigator>\n      <RootStack.Group>\n        <RootStack.Screen name=\"Home\" component={HomeScreen} />\n        <RootStack.Screen name=\"Details\" component={DetailsScreen} />\n      </RootStack.Group>\n      <RootStack.Group screenOptions={{ presentation: 'modal' }}>\n        <RootStack.Screen name=\"MyModal\" component={ModalScreen} />\n      </RootStack.Group>\n    </RootStack.Navigator>\n  );\n}\n")),(0,a.kt)("p",null,"Here, we are creating 2 groups of screens using the ",(0,a.kt)("inlineCode",{parentName:"p"},"RootStack.Group")," component. The first group is for our regular screens, and the second group is for our modal screens. For the modal group, we have specified ",(0,a.kt)("inlineCode",{parentName:"p"},"presentation: 'modal'")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"screenOptions"),". This will apply this option to all the screens inside the group. This options will change the animation for the screens to animate from bottom-to-top rather than right to left. The ",(0,a.kt)("inlineCode",{parentName:"p"},"presentation")," option for stack navigator can be either ",(0,a.kt)("inlineCode",{parentName:"p"},"card")," (default) or ",(0,a.kt)("inlineCode",{parentName:"p"},"modal"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"modal")," behavior slides the screen in from the bottom and allows the user to swipe down from the top to dismiss it on iOS."),(0,a.kt)("p",null,"Instead of specifying this option for a group, it's also possible to specify it for a single screen using the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," prop on ",(0,a.kt)("inlineCode",{parentName:"p"},"RootStack.Screen"),"."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To change the type of transition on a stack navigator you can use the ",(0,a.kt)("inlineCode",{parentName:"li"},"presentation")," option. When set to ",(0,a.kt)("inlineCode",{parentName:"li"},"modal"),", all modal screens animate-in from bottom to top rather than right to left by default. This applies to that entire group, so to use non-modal transitions on other screens, we add another group with the default configuration.")))}p.isMDXComponent=!0},87305:function(e,n,t){"use strict";n.Z=t.p+"assets/images/modal-demo-c21e394139257ff16390d46aa6ba5bc2.gif"}}]);