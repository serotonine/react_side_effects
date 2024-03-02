# react_side_effects

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8231828#questions

### Sources

https://github.com/academind/react-complete-guide-course-resources/tree/main/code/11%20Side%20Effects%20useEffect

## useEffect()

// SIDE EFFECT//
// If using useState straight => infinite loop.
// Side Effect: it is not straight bound to the main goal of this app.

// To do it we need useEffect() hook.
// This code will be executed after the App will be executed.
// If the second parameter is empty, this hook will be executed once
// Otherwise it will be executed on each App rebuild.

      // The problem is remove this timer when the modal is closed.
    // When having a function in pointer it could lead to infinite loop.
