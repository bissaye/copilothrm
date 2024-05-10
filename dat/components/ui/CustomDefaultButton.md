### React TypeScript Component Documentation

#### Component Name: CustomDefaultButton

The `CustomDefaultButton` component is a customizable version of the DefaultButton component built using React and TypeScript. It allows for flexible customization of text, FontAwesome icon, styling, and dimensions.

#### Props

- **text** (`string`, required): The text to be displayed on the button.
- **icon** (`IconDefinition`, optional): The FontAwesome icon to be displayed alongside the text.
- **onClick** (`() => void`, optional): A callback function to be executed when the button is clicked.
- **bgPrimary** (`50 | 100 | 200 | 300`, optional): Background primary color intensity of the button (e.g., `50` for light, `100` for medium, `200` for dark).
- **textSize** (`number`, optional): Font size of the button text in pixels.
- **paddingX** (`number`, optional): Horizontal padding for the button in pixels.
- **paddingY** (`number`, optional): Vertical padding for the button in pixels.
- **marginX** (`number`, optional): Horizontal margin for the button in pixels.
- **marginY** (`number`, optional): Vertical margin for the button in pixels.
- **width** (`number`, optional): Width of the button in pixels.
- **height** (`number`, optional): Height of the button in pixels.

#### Usage

```tsx
import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomDefaultButtonProps, CustomDefaultButton } from "./CustomDefaultButton";

// Example usage of CustomDefaultButton
const MyComponent: React.FC = () => {
    const handleClick = () => {
        console.log("CustomDefaultButton clicked!");
    };

    return (
        <div>
            <CustomDefaultButton
                text="Click Me"
                onClick={handleClick}
                bgPrimary={100}
                textSize={16}
                paddingX={10}
                paddingY={5}
                width={150}
                height={40}
            />
            <CustomDefaultButton
                text="Save"
                icon={someFontAwesomeIcon}
                onClick={handleClick}
                bgPrimary={200}
                textSize={18}
                paddingX={15}
                paddingY={8}
                width={180}
                height={50}
            />
        </div>
    );
};

export default MyComponent;
