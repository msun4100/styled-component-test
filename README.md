## Tests styled-components:

## Extras:

Collection of packages

## styled-components-breakpoint

This one is a must have when you're working with responsive applications.

[Check it out here](https://github.com/jameslnewell/styled-components-breakpoint)

```js
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Heading = styled.h1`
  color: #444;
  font-family: sans-serif;

  font-size: 12px;

  ${breakpoint("tablet")`
    font-size: 16px;
  `} ${breakpoint("desktop")`
    font-size: 24px;
  `};
`;

export default Heading;
```

## Styled Flex Component

This one makes creating layouts with Flexbox very very fast. You just have to learn the props and you are good to go.

[Check it out here](https://github.com/SaraVieira/styled-flex-component)

```js
import React from "react";
import Flex, { FlexItem } from "styled-flex-component";

export default () => (
  <Flex center full>
    <FlexItem order="2">World</FlexItem>
    <FlexItem order="1">Hello</FlexItem>
  </Flex>
);
```

## Styled Reset

Some people need to use a reset.css when starting a new project, here it is. (use it with injectGlobal)

[Check it oute here](https://github.com/zacanger/styled-reset)

```js
import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <div>Hi, I'm an app!</div>
  </React.Fragment>
}

export default App
```

## Awesome Styled Components

If you want to find more packages, helpers, tutorials etc... Go to [Awesome Styled Components](https://github.com/styled-components/awesome-styled-components)
