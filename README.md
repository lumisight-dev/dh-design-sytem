# Datahouse React Design System

Datahouse Design System Figma: [Link](https://www.figma.com/file/9vrmIWlKDTr68h8gYOY0yD/DH-Design-System?node-id=111%3A1308)

## Installation

```
yarn add @lumisight-dev/dh-react-design-system
```

## Available Scripts

#### Build the library

```
yarn rollup
```

#### Publish library
```
npm publish
```

#### Run tests

```
yarn test
```

#### Run storybook locally

```
yarn storybook
```


# Tutorial
1. Create new folder in `src/components` with these files
  - Example: `Button` 
```
|__ src
    |__ components
        |__ Button
        |   |__ index.ts
        |   |__ Button.tsx
        |   |__ styles.scss
        |   |__ Button.test.tsx
        |   |__ Button.stories.tsx
        |__ index.ts
    
```
2. export `Button` component in `src/components/index.ts`
3. create new option in `.storybook/preview` for story sort order to view in Storybook Sidebar

```
        "Components",
        [..., "Button", ...],
```

```
export { default as DHButton } from "./Button";
```


# Setup .npmrc file for publish library

1. create file `~/.npmrc`

```
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```

There are two values in caps to replace in the example above. 
The first is **YOUR_GITHUB_USERNAME**. Make sure to include the leading `@` symbol.
  - YOUR_GITHUB_USERNAME: `lumisight-dev`

The second is **YOUR_AUTH_TOKEN** which we haven't created yet. Make sure to include the leading `//` symbol.
1. Login to Github account `lumisight-dev` 
     - contact @tin_pham to get credentials 
2. Go to your Github profile: Settings -> Developer Settings -> Personal access tokens. Or just click [this link](https://github.com/settings/tokens)

3. Click _**Generate new token**_. Give it a name that suits the project you are building. Give it an expiry date (Github recommends you don't create tokens with an infinite lifespan for security reasons, but that's up to you).

4. The most important thing is to click the `repo` & `write:packages` access value. This will give your token permission 
   - to have full control of private repositories
   - read & write packages to your Github account

which is what we need.

# Deployment

#### Automation:
  - Push commit to `master` branch

#### Manual:

Step 1: Installation
```
npm install -g firebase-tools
```

Step 2: Login 
```bash
firebase login
```
  - Login with mail: `lms.dev.react@gmail.com`
  - contact @tin_pham to get credentials
  
Step 3: storybook build
```
yarn build-storybook
```
Step 4: Deploy to firebase
```
firebase deploy
```