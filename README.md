# react_project


# Parcel
- Dev Build
- Local Server
HMR = Hot Module Replacement
File Watching Algorithm - written in C+
Caching Faster Builds
Image Optimization
- Minification I
Bundling
Compress
Consistent Hashing
Code Splitting
- Differential Bundling support older browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - remove unused code You, now Uncommitted changes


#Babel
www.babeljs.io

#extension
Prettuer-code 
Bracket pair colorizeation
ESLint
Better Comments


#Namaste Food App
/**
* Header
* - Logo
* - Nav Items
* Body
* - Search
RestaurantContainer
- RestaurantCard
* - Ing
Name of Res, Star Rating, cuisine, Ic You, now. Uncommitted changes
✰ Footer
Copyright
* - Links
* - Address
Contact
*/

Two Types of Export/Import

-Default Export/Import

export default Component;
import Component from "path";

-Named Export/Import

export const Component;
import {Component} from "path";

#React Hooks

#React Fiber
github.com/acdlite/react-fiber-architecture

React Fiber Architecture
Introduction
React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of
research by the React team.
The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline
feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple
frames.
Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign
priority to different types of updates; and new concurrency primitives.