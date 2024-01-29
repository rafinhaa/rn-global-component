<h4 align="center">
  Global Component
</h4>

<h4 align="center">
    <p align="center">
      <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-how-to-run-the-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-info">Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">License</a>
  </p>
</h4>

## 🔖 About

Based on a LinkedIn post, create this simple example of how to create and use a global Toast component in React Native.

The GlobalToast component is imported into the root of the project, which uses useImperativeHandle to expose Toast's show functions. Thus, we can import the class and use it to display messages anywhere in the application without the need to create states or providers to manage them.

Although this project is a simple example, the truth is that we can apply this approach to other components such as modals, error messages and much more.

## 🚀 Technologies

- [ReactNative](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)

## 🏁 How to run the project

```sh
# Clone the repository
git clone https://github.com/rafinhaa/rn-global-component.git
cd rn-global-component

# Build the app Android or iOS
yarn android
yarn ios

# Start the application
yarn start
```

## ℹ️ Info

### Project structure

**src/components/GlobalToast/index.tsx:** Contains the GlobalToast component, which manages and displays global toasts.

**src/screens/Buttons/index.tsx:** Example of a screen that uses the GlobalToast component to display toasts.

**App.tsx:** Main file where components are rendered.

### Explanation

Use class method to control component display

```ts
Toast.show({
  message: "Hello World",
});
```

### Reference

[Visit](https://www.linkedin.com/posts/hector-kayque-271b631b9_reactnative-react-hooks-ugcPost-7157051949807239168-4BRT?utm_source=share&utm_medium=member_desktop)

## 📄 Changelog

## 📝 License

[MIT](LICENSE.txt)

**Free Software, Hell Yeah!**
