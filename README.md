# Gamut React UI

> A modern, color-driven React component library featuring highly customizable badges, banners components.

[![npm version](https://img.shields.io/badge/npm-v10.x-blue.svg)](https://npmjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff.svg)](https://vitejs.dev/)

---
  <p align="center">
   <img src="./images/banner.jpg" alt="Gamut React UI Banner" width="70%" />
  </p>

---

## 📖 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Demo/Storybook](#-demo/storybook)
- [Quick Start](#-quick-start)
- [Components Overview](#-components-overview)
  - [Badge](#1-badge)
  - [Banner](#2-banner)
  - [Tooltip](#3-tooltip)
  - [Toast](#4-toast)
  - [Card](#5-card)
- [License](#-license)

---

## ✨ Features

- 🎨 **Rich Color Palettes:** Vibrant, accessible color variants for state feedback and UI highlights.
- 📦 **Modular & Tree-Shakable:** Import only the components you need into your bundle.
- ⚡ **Vite:** Fast development build times.
- 📚 **Storybook Included:** Interactive component sandbox with real-time prop controls.

---

##  Demo/Storybook

  [Storybook link](https://6ab69093269f3b0eb6784294-hpuqufepqr.chromatic.com/)

  [Screenshoot/video & installation](https://drive.google.com/drive/folders/1MnPpvzZa1ZO4ZyE2PbxPjp1ZOlP3XmFt?usp=sharing)

---

## 📦 Installation

Install the package via npm or yarn:

```bash
npm install gamut-react-ui
# or
yarn add gamut-react-ui
```

---

## 🚀 Quick Start

Import and use components directly in your React application:

```jsx
import React from 'react';
import { Badge, Banner, Card, Tooltip, Toast } from 'gamut-react-ui';
import "gamut-react-ui/style.css";

function App() {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Badge Example */}
      <Badge size="md" variant="success">
        Success Badge
      </Badge>

      {/* Banner Example */}
      <Banner type="success" variant="multiline" title="Notification">
        Congratulations! Your settings have been saved.
      </Banner>

      {/* Card Component */}
      <Card title="Easy Deployment">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
      </Card>

      {/* Toast Component */}
      <Toast title="Success" type="success">
        Your work has been saved.
      </Toast>

      {/* Tooltip Component */}
      <Tooltip 
        theme="dark" 
        title="Archive notes"
        onClose={() => handleClose()}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Tooltip>

    </div>
  );
}

export default App;
```

---

## 🧩 Components Overview

### 1. Badge

Display status indicators, tags, or counts.

#### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'neutral' \| 'info' \| 'success' \| 'warning' \|'danger' \| 'purple'`| 'neutral' | Sets the variant. |
| `size` | `'sm' \| 'md' \|'lg'`| 'md' | Badge sizes. |
|`type` | `'pill' \| 'square' `| 'square' | The radius corner of a badge. |
| `dot` | `boolean`| false | A dot inside the badge. |
| `children` | `ReactNode` | *required* | The description text inside the badge. |
| `className` | `string` | `''` | Optional custom CSS class. |

```jsx
 <Badge variant="purple"> Purple</Badge>
 <Badge size="md"> Medium</Badge>

 {/* Badge with dot*/}
 <Badge variant="success" dot>Online</Badge>

 {/* pill badge*/}
 <Badge variant="info" type="pill">I'm the pill badge</Badge>

 {/* Long Label */}
 <div style={{ width: 180 }}>
      <Badge>
        This is a very long badge label
      </Badge>
  </div>
```

---

### 2. Banner

Inline banners for singleline or detailed multiline message blocks.

#### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `'success' \| 'warning' \| 'error' \| 'neutral'` | `'success'` | Visual state color theme and status icon. |
| `variant` | `'singleline' \| 'multiline'` | `'singleline'` | Singleline banner or multiline layout with title. |
| `title` | `string` | `undefined` | Header title (primarily used in multiline mode). |
| `children` | `ReactNode` | `undefined` | Message content or description body. |

```jsx
// Singleline banner
<Banner title="Congratulations!" type="success">
</Banner>

// Multiline banner
<Banner title="Attention" type="warning" variant="multiline">
  lorem ipsum dolor sit amet consectetur adipisicing elit.
</Banner>
```

---

### 3. Tooltip

Contextual popup cards with a directional caret indicator, close buttons, and support for solid/light color themes.

#### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `theme` | `'dark' \| 'white' \| 'blue' \| 'blue-light' \| 'purple' \| 'pink-light' \| 'green' \| 'green-light'` | `'dark'` | Color palette scheme. |
| `title` | `string` | `undefined` | Bold heading text. |
| `icon` | `ReactNode` | `undefined` | Leading icon element. |
| `onClose` | `function` | `undefined` | Triggered when clicking the close button. |
| `children` | `ReactNode` | `undefined` | Tooltip body text. |

```jsx


<Tooltip 
  theme="dark" 
  title="Archive notes"
  onClose={() => handleClose()}
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</Tooltip>
```

---

### 4. Toast

Floating notification popups designed for state feedback (success, warning, information, error).

#### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `'success' \| 'warning' \| 'information' \| 'error'` | State variant. |
| `title` | `string` | `undefined` | Title text. |
| `children` | `ReactNode` | `undefined` | Description or action message. |

```jsx
<Toast title="Success" type="success">
  Your work has been saved.
</Toast>
```

---

### 5. Card

A feature display card with a floating top badge icon, clean typography, and interactive hover elevation.

#### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `icon` | `ReactNode` | `<DefaultIcon />` | Overlapping icon badge displayed at top center. |
| `title` | `string` | `undefined` | Main heading title. |
| `isHovered` | `boolean` | `false` | A boolean for managing hovered state in card . |
| `children` | `ReactNode` | `undefined` | Main body content/description. |

```jsx
<Card title="Easy Deployment">
  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
</Card>

<Card title="Easy Deployment" isHovered={true}>
  I am the hovered Card!.
</Card>
```

---

## 📄 License

This project is licensed under the MIT License.
