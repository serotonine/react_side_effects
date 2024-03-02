# react_side_effects

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8231828#questions

### Sources

https://github.com/academind/react-complete-guide-course-resources/tree/main/code/11%20Side%20Effects%20useEffect

## useEffect()

A Side Effect concern piece of code not straight bound to the main goal of the app.
E.G navigator.geolocation.getCurrentPosition()

// SIDE EFFECT//
useEffect(function(), [pointer]) is executed after the App rebuild.
If the second parameter ([pointer]) is empty, this hook will be executed once
otherwise it will be executed on each App rebuild.

Add a return into the useEffect() hook . E.G clearTimeout() when the modal is closed.
When having a function as pointer it could lead to infinite loop => useCallback() hook.

## useCallback()

Used to avoid a function to be re-executed.
wrapp the function and return it (second parameter).
