/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.tsx",
    "./src/main.tsx",
    "./src/views/components/ui/**/.tsx",
    "./src/views/components/common/**/.tsx",
    "./src/views/pages/**/.tsx",
    "./src/views/layouts/**/.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    "extend": {
      "colors": {
        "white": "#FFFFFF",
        "black": "#000000",
        "primary": {
          "100": "#fff3f0",
          "150": "#fee1da",
          "200": "#fed0c5",
          "250": "#febeb0",
          "300": "#fdad9a",
          "350": "#fd9b85",
          "400": "#fd8a70",
          "450": "#fc785a",
          "500": "#fc6544",
          "550": "#fc4c24",
          "600": "#fb3104",
          "650": "#da2b03",
          "700": "#b92403",
          "750": "#981e02",
          "800": "#771702",
          "850": "#561101",
          "900": "#360a01",
          "DEFAULT": "#fc6544"
        },
        "secondary": {
          "100": "#f2f1fe",
          "150": "#d2d0fa",
          "200": "#b3aff7",
          "250": "#938ef3",
          "300": "#746ef0",
          "350": "#554dec",
          "400": "#352ce9",
          "450": "#2117d9",
          "500": "#1b13ba",
          "550": "#1912aa",
          "600": "#17109c",
          "650": "#150f8d",
          "700": "#130d7f",
          "750": "#110c70",
          "800": "#0f0a62",
          "850": "#0d0953",
          "900": "#0a0745",
          "DEFAULT": "#1b13ba"
        },
        "info": {
          "100": "#f1f8fd",
          "150": "#daecfa",
          "200": "#c3e1f8",
          "250": "#acd5f5",
          "300": "#94c9f2",
          "350": "#7dbeef",
          "400": "#66b2ec",
          "450": "#4fa6e9",
          "500": "#379ae6",
          "550": "#1d8de3",
          "600": "#197dca",
          "650": "#166db0",
          "700": "#125d95",
          "750": "#0f4c7b",
          "800": "#0c3c61",
          "850": "#092c47",
          "900": "#061c2d",
          "DEFAULT": "#379ae6"
        },
        "warning": {
          "100": "#fef9ee",
          "150": "#fcf0d7",
          "200": "#fae7c0",
          "250": "#f8dea9",
          "300": "#f6d491",
          "350": "#f4cb7a",
          "400": "#f2c263",
          "450": "#f0b94b",
          "500": "#efb034",
          "550": "#eca517",
          "600": "#d29211",
          "650": "#b57e0f",
          "700": "#98690c",
          "750": "#7a550a",
          "800": "#5d4108",
          "850": "#402c05",
          "900": "#221803",
          "DEFAULT": "#efb034"
        },
        "danger": {
          "100": "#fdf2f2",
          "150": "#f9dbdc",
          "200": "#f5c4c6",
          "250": "#f1adaf",
          "300": "#ed9699",
          "350": "#e97f83",
          "400": "#e5696d",
          "450": "#e25256",
          "500": "#de3b40",
          "550": "#d9252b",
          "600": "#c12126",
          "650": "#aa1d22",
          "700": "#93191d",
          "750": "#7b1518",
          "800": "#641114",
          "850": "#4d0d0f",
          "900": "#36090b",
          "DEFAULT": "#de3b40"
        },
        "success": {
          "100": "#effdf3",
          "150": "#defbe8",
          "200": "#cef9dd",
          "250": "#bef7d1",
          "300": "#aef5c6",
          "350": "#9ef3ba",
          "400": "#8ef1af",
          "450": "#7eefa4",
          "500": "#6eed98",
          "550": "#4be980",
          "600": "#28e467",
          "650": "#19cc55",
          "700": "#15aa47",
          "750": "#118738",
          "800": "#0c642a",
          "850": "#08411b",
          "900": "#041f0d",
          "DEFAULT": "#6eed98"
        },
        "greencustom": {
          "100": "#ebfef5",
          "150": "#c7fee4",
          "200": "#a4fdd3",
          "250": "#80fcc2",
          "300": "#5dfbb1",
          "350": "#3afaa0",
          "400": "#16f98f",
          "450": "#06e57d",
          "500": "#05c16a",
          "550": "#04ad5f",
          "600": "#049953",
          "650": "#038548",
          "700": "#03703d",
          "750": "#025c32",
          "800": "#024727",
          "850": "#01331c",
          "900": "#011e11",
          "DEFAULT": "#05c16a"
        },
        "bluecustom": {
          "100": "#eefcfe",
          "150": "#d7f7fe",
          "200": "#c0f2fd",
          "250": "#a9edfc",
          "300": "#91e8fc",
          "350": "#7ae3fb",
          "400": "#63defa",
          "450": "#4bdaf9",
          "500": "#34d5f9",
          "550": "#14cef8",
          "600": "#07bbe4",
          "650": "#06a1c3",
          "700": "#0586a3",
          "750": "#046c83",
          "800": "#035163",
          "850": "#023743",
          "900": "#011c23",
          "DEFAULT": "#34d5f9"
        },
        "yellowcustom": {
          "100": "#fff9ed",
          "150": "#fff1da",
          "200": "#ffeac6",
          "250": "#ffe3b3",
          "300": "#ffdc9f",
          "350": "#ffd58c",
          "400": "#ffce79",
          "450": "#ffc765",
          "500": "#ffc054",
          "550": "#ffb22c",
          "600": "#ffa407",
          "650": "#e08e00",
          "700": "#bb7600",
          "750": "#955e00",
          "800": "#6f4700",
          "850": "#4a2f00",
          "900": "#241700",
          "DEFAULT": "#ffc054"
        },
        "gray": {
          "100": "#f6f7f8",
          "150": "#f3f4f6",
          "200": "#f0f1f3",
          "250": "#edeef1",
          "300": "#eaecee",
          "350": "#e6e9ec",
          "400": "#e3e6e9",
          "450": "#e0e3e7",
          "500": "#dee1e5",
          "550": "#c1c7ce",
          "600": "#a5aeb8",
          "650": "#8994a3",
          "700": "#6e7b8c",
          "750": "#586370",
          "800": "#434a55",
          "850": "#2d3239",
          "900": "#171a1d",
          "DEFAULT": "#434a55"
        }
      },
      "fontSize": {
        "t1": [
          "0.6875rem",
          "1.125rem"
        ],
        "t2": [
          "0.75rem",
          "1.25rem"
        ],
        "t3": [
          "0.875rem",
          "1.375rem"
        ],
        "t4": [
          "1rem",
          "1.625rem"
        ],
        "t5": [
          "1.125rem",
          "1.75rem"
        ],
        "t6": [
          "1.25rem",
          "1.875rem"
        ],
        "t7": [
          "1.5rem",
          "2.25rem"
        ],
        "t8": [
          "2rem",
          "3rem"
        ],
        "t9": [
          "2.5rem",
          "3.5rem"
        ],
        "t10": [
          "3rem",
          "4.25rem"
        ],
        "t10-1": [
          "4rem",
          "5.25rem"
        ],
        "t10-2": [
          "5rem",
          "6.5rem"
        ],
        "t11": [
          "6.25rem",
          "8.125rem"
        ],
        "t12": [
          "12.5rem",
          "15rem"
        ],
        "t13": [
          "18.75rem",
          "22.5rem"
        ],
        "t14": [
          "31.25rem",
          "37.5rem"
        ]
      },
      "spacing": {
        "s0": "0.125rem",
        "s1": "0.25rem",
        "s2": "0.375rem",
        "s3": "0.5rem",
        "s4": "0.75rem",
        "s5": "1rem",
        "s6": "1.25rem",
        "s7": "1.5rem",
        "s8": "1.75rem",
        "s9": "2rem",
        "s10": "2.25rem",
        "s11": "2.5rem",
        "s12": "2.75rem",
        "s13": "3rem",
        "s14": "3.5rem",
        "s15": "4rem",
        "s16": "6rem",
        "s17": "8rem",
        "s18": "12rem",
        "s19": "16rem",
        "s20": "24rem"
      },
      "fontFamily": {
        "heading": "Baloo 2",
        "body": "Outfit"
      },
      "width": {
        "Sz_NONE": "0rem",
        "Sz0": "0.125rem",
        "Sz1": "0.25rem",
        "Sz2": "0.375rem",
        "Sz3": "0.5rem",
        "Sz4": "0.75rem",
        "Sz5": "1rem",
        "Sz6": "1.25rem",
        "Sz7": "1.5rem",
        "Sz8": "1.75rem",
        "Sz9": "2rem",
        "Sz10": "2.25rem",
        "Sz11": "2.5rem",
        "Sz12": "2.75rem",
        "Sz13": "3rem",
        "Sz14": "3.25rem",
        "Sz15": "3.5rem",
        "Sz16": "3.75rem",
        "Sz17": "4rem",
        "Sz18": "6rem",
        "Sz19": "8rem",
        "Sz20": "12rem",
        "Sz21": "16rem",
        "Sz22": "24rem",
        "Sz23": "32rem",
        "Sz24": "40rem",
        "Sz25": "48rem",
        "Sz26": "56rem",
        "Sz27": "64rem"
      },
      "height": {
        "Sz_NONE": "0rem",
        "Sz0": "0.125rem",
        "Sz1": "0.25rem",
        "Sz2": "0.375rem",
        "Sz3": "0.5rem",
        "Sz4": "0.75rem",
        "Sz5": "1rem",
        "Sz6": "1.25rem",
        "Sz7": "1.5rem",
        "Sz8": "1.75rem",
        "Sz9": "2rem",
        "Sz10": "2.25rem",
        "Sz11": "2.5rem",
        "Sz12": "2.75rem",
        "Sz13": "3rem",
        "Sz14": "3.25rem",
        "Sz15": "3.5rem",
        "Sz16": "3.75rem",
        "Sz17": "4rem",
        "Sz18": "6rem",
        "Sz19": "8rem",
        "Sz20": "12rem",
        "Sz21": "16rem",
        "Sz22": "24rem",
        "Sz23": "32rem",
        "Sz24": "40rem",
        "Sz25": "48rem",
        "Sz26": "56rem",
        "Sz27": "64rem"
      },
      "borderRadius": {
        "xs": "0.125rem",
        "s": "0.1875rem",
        "m": "0.25rem",
        "l": "0.375rem",
        "xl": "0.5rem",
        "100-percent": "100%"
      },
      "boxShadow": {
        "xs": "0px 0px 1px rgba(23, 26, 31, 0.07), 0px 0px 2px rgba(23, 26, 31, 0.12)",
        "s": "0px 2px 5px rgba(23, 26, 31, 0.09), 0px 0px 2px rgba(23, 26, 31, 0.12)",
        "m": "0px 4px 9px rgba(23, 26, 31, 0.11), 0px 0px 2px rgba(23, 26, 31, 0.12)",
        "l": "0px 8px 17px rgba(23, 26, 31, 0.15), 0px 0px 2px rgba(23, 26, 31, 0.12)",
        "xl": "0px 17px 35px rgba(23, 26, 31, 0.24), 0px 0px 2px rgba(23, 26, 31, 0.12)"
      }
    }
  },
  plugins: [],
}

