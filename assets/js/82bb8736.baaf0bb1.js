(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[1566],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},81998:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var n=a(74034),r=a(79973),s=(a(67294),a(3905)),o={id:"params",title:"Passing parameters to routes",sidebar_label:"Passing parameters to routes"},i={unversionedId:"params",id:"version-5.x/params",isDocsHomePage:!1,title:"Passing parameters to routes",description:'Remember when I said "more on that later when we talk about params!"? Well, the time has come.',source:"@site/versioned_docs/version-5.x/params.md",sourceDirName:".",slug:"/params",permalink:"/docs/5.x/params",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/params.md",version:"5.x",sidebar_label:"Passing parameters to routes",frontMatter:{id:"params",title:"Passing parameters to routes",sidebar_label:"Passing parameters to routes"},sidebar:"version-5.x/docs",previous:{title:"Moving between screens",permalink:"/docs/5.x/navigating"},next:{title:"Configuring the header bar",permalink:"/docs/5.x/headers"}},l=[{value:"Updating params",id:"updating-params",children:[]},{value:"Initial params",id:"initial-params",children:[]},{value:"Passing params to a previous screen",id:"passing-params-to-a-previous-screen",children:[]},{value:"Passing params to nested navigators",id:"passing-params-to-nested-navigators",children:[]},{value:"What should be in params",id:"what-should-be-in-params",children:[]},{value:"Summary",id:"summary",children:[]}],p={toc:l};function u(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'Remember when I said "more on that later when we talk about ',(0,s.kt)("inlineCode",{parentName:"p"},"params"),'!"? Well, the time has come.'),(0,s.kt)("p",null,"Now that we know how to ",(0,s.kt)("a",{parentName:"p",href:"/docs/5.x/hello-react-navigation"},"create a stack navigator with some routes")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/5.x/navigating"},"navigate between those routes"),", let's look at how we can pass data to routes when we navigate to them."),(0,s.kt)("p",null,"There are two pieces to this:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Pass params to a route by putting them in an object as a second parameter to the ",(0,s.kt)("inlineCode",{parentName:"p"},"navigation.navigate")," function: ",(0,s.kt)("inlineCode",{parentName:"p"},"navigation.navigate('RouteName', { /* params go here */ })"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Read the params in your screen component: ",(0,s.kt)("inlineCode",{parentName:"p"},"route.params"),"."))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"We recommend that the params you pass are JSON-serializable. That way, you'll be able to use ",(0,s.kt)("a",{parentName:"p",href:"/docs/5.x/state-persistence"},"state persistence")," and your screen components will have the right contract for implementing ",(0,s.kt)("a",{parentName:"p",href:"/docs/5.x/deep-linking"},"deep linking"),".")),(0,s.kt)("samp",{id:"passing-params"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => {\n          /* 1. Navigate to the Details route with params */\n          navigation.navigate('Details', {\n            itemId: 86,\n            otherParam: 'anything you want here',\n          });\n        }}\n      />\n    </View>\n  );\n}\n\nfunction DetailsScreen({ route, navigation }) {\n  /* 2. Get the param */\n  const { itemId, otherParam } = route.params;\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n      <Text>itemId: {JSON.stringify(itemId)}</Text>\n      <Text>otherParam: {JSON.stringify(otherParam)}</Text>\n      <Button\n        title=\"Go to Details... again\"\n        onPress={() =>\n          navigation.push('Details', {\n            itemId: Math.floor(Math.random() * 100),\n          })\n        }\n      />\n      <Button title=\"Go to Home\" onPress={() => navigation.navigate('Home')} />\n      <Button title=\"Go back\" onPress={() => navigation.goBack()} />\n    </View>\n  );\n}\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Screen with passed parameters",src:a(73580).Z})),(0,s.kt)("h2",{id:"updating-params"},"Updating params"),(0,s.kt)("p",null,"Screens can also update their params, like they can update their state. The ",(0,s.kt)("inlineCode",{parentName:"p"},"navigation.setParams")," method lets you update the params of a screen. Refer to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-prop#setparams"},"API reference for ",(0,s.kt)("inlineCode",{parentName:"a"},"setParams"))," for more details."),(0,s.kt)("p",null,"Basic usage:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"navigation.setParams({\n  query: 'someText',\n})\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note: Avoid using ",(0,s.kt)("inlineCode",{parentName:"p"},"setParams")," to update screen options such as ",(0,s.kt)("inlineCode",{parentName:"p"},"title")," etc. If you need to update options, use ",(0,s.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-prop#setoptions"},(0,s.kt)("inlineCode",{parentName:"a"},"setOptions"))," instead.")),(0,s.kt)("h2",{id:"initial-params"},"Initial params"),(0,s.kt)("p",null,"You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an ",(0,s.kt)("inlineCode",{parentName:"p"},"initialParams")," prop:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen\n  name="Details"\n  component={DetailsScreen}\n  initialParams={{ itemId: 42 }}\n/>\n')),(0,s.kt)("h2",{id:"passing-params-to-a-previous-screen"},"Passing params to a previous screen"),(0,s.kt)("p",null,"Params aren't only useful for passing some data to a new screen, but they can also be useful to pass data to a previous screen too. For example, let's say you have a screen with a create post button, and the create post button opens a new screen to create a post. After creating the post, you want to pass the data for the post back to previous screen."),(0,s.kt)("p",null,"To achieve this, you can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"navigate")," method, which acts like ",(0,s.kt)("inlineCode",{parentName:"p"},"goBack")," if the screen already exists. You can pass the ",(0,s.kt)("inlineCode",{parentName:"p"},"params")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"navigate")," to pass the data back:"),(0,s.kt)("samp",{id:"passing-params-back"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function HomeScreen({ navigation, route }) {\n  React.useEffect(() => {\n    if (route.params?.post) {\n      // Post updated, do something with `route.params.post`\n      // For example, send the post to the server\n    }\n  }, [route.params?.post]);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button\n        title=\"Create post\"\n        onPress={() => navigation.navigate('CreatePost')}\n      />\n      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>\n    </View>\n  );\n}\n\nfunction CreatePostScreen({ navigation, route }) {\n  const [postText, setPostText] = React.useState('');\n\n  return (\n    <>\n      <TextInput\n        multiline\n        placeholder=\"What's on your mind?\"\n        style={{ height: 200, padding: 10, backgroundColor: 'white' }}\n        value={postText}\n        onChangeText={setPostText}\n      />\n      <Button\n        title=\"Done\"\n        onPress={() => {\n          // Pass and merge params back to home screen\n          navigation.navigate({\n            name: 'Home',\n            params: { post: postText },\n            merge: true,\n          });\n        }}\n      />\n    </>\n  );\n}\n")),(0,s.kt)("p",null,'Here, after you press "Done", the home screen\'s ',(0,s.kt)("inlineCode",{parentName:"p"},"route.params")," will be updated to reflect the post text that you passed in ",(0,s.kt)("inlineCode",{parentName:"p"},"navigate"),"."),(0,s.kt)("h2",{id:"passing-params-to-nested-navigators"},"Passing params to nested navigators"),(0,s.kt)("p",null,"If you have nested navigators, you need to pass params a bit differently. For example, say you have a navigator inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"Account")," screen, and want to pass params to the ",(0,s.kt)("inlineCode",{parentName:"p"},"Settings")," screen inside that navigator. Then you can pass params as following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Account', {\n  screen: 'Settings',\n  params: { user: 'jane' },\n});\n")),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/docs/5.x/nesting-navigators"},"Nesting navigators")," for more details on nesting."),(0,s.kt)("h2",{id:"what-should-be-in-params"},"What should be in params"),(0,s.kt)("p",null,"It's important to understand what kind of data should be in params. Params are like options for a screen. They should only contain information to configure what's displayed in the screen. Avoid passing the full data which will be displayed on the screen itself (e.g. pass an user id instead of user object). Also avoid passing data which is used by multiple screens, such data should be in a global store."),(0,s.kt)("p",null,"You can also think of the route object like a URL. If your screen had a URL, what should be in the URL? Params shouldn't contain data that you think should not be in the URL. This often means that you should keep as little data as possible needed to determine what the screen is. Think of visiting a shopping website, when you are seeing product listings, the URL usually contains category name, type of sort, any filters etc., it doesn't contain the actual list of products displayed on the screen."),(0,s.kt)("p",null,"For example, say if you have a ",(0,s.kt)("inlineCode",{parentName:"p"},"Profile")," screen. When navigating to it, you might be tempted to pass the user object in the params:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// Don't do this\nnavigation.navigate('Profile', {\n  user: {\n    id: 'jane',\n    firstName: 'Jane',\n    lastName: 'Done',\n    age: 25,\n  },\n});\n")),(0,s.kt)("p",null,"This looks convenient, and lets you access the user objects with ",(0,s.kt)("inlineCode",{parentName:"p"},"route.params.user")," without any extra work."),(0,s.kt)("p",null,"However, this is an anti-pattern. Data such as user objects should be in your global store instead of the navigation state. Otherwise you have the same data duplicated in multiple places. This can leads to bugs such as the profile screen showing outdated data even if the user object has changed after navigation."),(0,s.kt)("p",null,"It also becomes problematic to link to the screen via deep linking or on the Web, since:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The URL is a representation of the screen, so it also needs to contain the params, i.e. full user object, which can make the URL very long and unreadable"),(0,s.kt)("li",{parentName:"ol"},"Since the user object is in the URL, it's possible to pass a random user object representing a user which doesn't exist, or has incorrect data in the profile"),(0,s.kt)("li",{parentName:"ol"},"If the user object isn't passed, or improperly formatted, this could result in crashes as the screen won't know how to handle it")),(0,s.kt)("p",null,"A better way is to pass only the ID of the user in params:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Profile', { userId: 'jane' });\n")),(0,s.kt)("p",null,"Now, you can use the passed ",(0,s.kt)("inlineCode",{parentName:"p"},"userId")," to grab the user from your global store. This eliminates a host of issues such as outdated data, or problematic URLs."),(0,s.kt)("p",null,"Some examples of what should be in params are:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"IDs like user id, item id etc., e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"navigation.navigate('Profile', { userId: 'Jane' })")),(0,s.kt)("li",{parentName:"ol"},"Params for sorting, filtering data etc. when you have a list of items, e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"navigation.navigate('Feeds', { sortBy: 'latest' })")),(0,s.kt)("li",{parentName:"ol"},"Timestamps, page numbers or cursors for pagination, e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"navigation.navigate('Chat', { beforeTime: 1603897152675 })")),(0,s.kt)("li",{parentName:"ol"},"Data to fill inputs on a screen to compose something, e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"navigation.navigate('ComposeTweet', { title: 'Hello world!' })"))),(0,s.kt)("p",null,"In essence, pass the least amount of data required to identify a screen in params, for a lot of cases, this simply means passing the ID of an object instead of passing a full object. Keep your application data separate from the navigation state."),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"navigate")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"push")," accept an optional second argument to let you pass parameters to the route you are navigating to. For example: ",(0,s.kt)("inlineCode",{parentName:"li"},"navigation.navigate('RouteName', { paramName: 'value' })"),"."),(0,s.kt)("li",{parentName:"ul"},"You can read the params through ",(0,s.kt)("inlineCode",{parentName:"li"},"route.params")," inside a screen"),(0,s.kt)("li",{parentName:"ul"},"You can update the screen's params with ",(0,s.kt)("inlineCode",{parentName:"li"},"navigation.setParams")),(0,s.kt)("li",{parentName:"ul"},"Initial params can be passed via the ",(0,s.kt)("inlineCode",{parentName:"li"},"initialParams")," prop on ",(0,s.kt)("inlineCode",{parentName:"li"},"Screen")),(0,s.kt)("li",{parentName:"ul"},"Params should contain the minimal data required to show a screen, nothing more")))}u.isMDXComponent=!0},73580:function(e,t,a){"use strict";t.Z=a.p+"assets/images/passing_params-69f71caabd25eb4226631c1fff19d8ef.png"}}]);