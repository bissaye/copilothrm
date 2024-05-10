### React TypeScript Component Documentation

#### Component Name: LandingPageSlider

The `LandingPageSlider` component is a component built using React and TypeScript. It  allows customizable images chosing, adding and removing and slides dynamically or when clicking on the arrow buttons.

#### Props

- **imagesList** (`string`, optional): Optional for now, but must be required. The link to the list of images to be displayed and looped through.

#### Usage

```tsx
import React from "react";
import { LandingPageSlider } from "./sliders/landingPageSlider";

// Example usage of LandingPageSlider
const MyComponent: React.FC = () => {

    const imagesListLink = "";
    return (
        <div>
            <LandingPageSlider imagesList={imagesListLink}>
        </div>
    );
};

export default MyComponent;
```

#### visual rendering

![Exemple visuel du slider LandingPageSlider](LandingPageSlider.png)