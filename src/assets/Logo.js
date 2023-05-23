import * as React from "react";
const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 169 35"
    fill="none"
    {...props}
  >
    <path
      fill="#9B5C8F"
      fillRule="evenodd"
      d="M5.313 0H51.91a5.334 5.334 0 0 1 5.336 5.336v17.787a5.334 5.334 0 0 1-5.336 5.336H35.2l2.293 5.617-10.087-5.617H5.336A5.334 5.334 0 0 1 0 23.123V5.336C-.023 2.411 2.364 0 5.313 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M2.855 4.844c.328-.444.82-.678 1.475-.725 1.194-.094 1.872.468 2.036 1.685.726 4.891 1.521 9.034 2.364 12.428l5.125-9.76c.468-.89 1.053-1.357 1.756-1.404 1.03-.07 1.661.585 1.919 1.966.585 3.112 1.334 5.757 2.223 8.004.609-5.945 1.638-10.228 3.09-12.872.35-.656.865-.983 1.544-1.03.538-.047 1.03.117 1.475.468.444.351.678.796.725 1.334a2.03 2.03 0 0 1-.234 1.123c-.913 1.686-1.662 4.518-2.27 8.45-.585 3.814-.796 6.787-.655 8.916.046.585-.047 1.1-.281 1.545-.281.515-.702.796-1.24.842-.61.047-1.241-.234-1.85-.866-2.176-2.223-3.908-5.546-5.172-9.97a440.88 440.88 0 0 0-3.37 6.74c-1.38 2.645-2.551 4.003-3.534 4.073-.632.047-1.17-.492-1.638-1.615C5.149 21.11 3.862 15.19 2.48 6.413c-.07-.609.047-1.147.374-1.569ZM53.174 8.519c-.843-1.475-2.083-2.364-3.745-2.715a6.143 6.143 0 0 0-1.264-.14c-2.246 0-4.072 1.17-5.5 3.51-1.216 1.99-1.825 4.19-1.825 6.6 0 1.802.374 3.347 1.123 4.634.843 1.474 2.083 2.364 3.745 2.715.445.093.866.14 1.264.14 2.27 0 4.096-1.17 5.5-3.51 1.217-2.013 1.825-4.213 1.825-6.624 0-1.825-.374-3.346-1.123-4.61Zm-2.949 6.483c-.328 1.544-.913 2.691-1.779 3.463-.678.609-1.31.866-1.895.75-.562-.118-1.03-.609-1.381-1.522a5.939 5.939 0 0 1-.422-2.13c0-.585.047-1.17.164-1.708.21-.96.609-1.896 1.24-2.785.773-1.147 1.592-1.615 2.435-1.451.561.117 1.03.608 1.38 1.521a5.94 5.94 0 0 1 .422 2.13c0 .608-.07 1.194-.164 1.732ZM38.5 8.519c-.843-1.475-2.107-2.364-3.745-2.715a6.143 6.143 0 0 0-1.264-.14c-2.247 0-4.072 1.17-5.5 3.51-1.217 1.99-1.825 4.19-1.825 6.6 0 1.802.374 3.347 1.123 4.634.843 1.474 2.083 2.364 3.745 2.715.445.093.866.14 1.264.14 2.27 0 4.095-1.17 5.5-3.51 1.216-2.013 1.825-4.213 1.825-6.624 0-1.825-.374-3.346-1.123-4.61Zm-2.95 6.483c-.327 1.544-.912 2.691-1.778 3.463-.679.609-1.31.866-1.896.75-.561-.118-1.03-.609-1.38-1.522a5.939 5.939 0 0 1-.422-2.13c0-.585.047-1.17.164-1.708.21-.96.609-1.896 1.24-2.785.773-1.147 1.592-1.615 2.434-1.451.562.117 1.03.608 1.381 1.521.281.726.422 1.451.422 2.13 0 .608-.047 1.194-.164 1.732Z"
    />
    <path
      fill="#000"
      d="M63.167 8.308c-1.568 1.545-2.34 3.511-2.34 5.898 0 2.551.772 4.634 2.317 6.202 1.545 1.568 3.557 2.364 6.062 2.364.725 0 1.544-.117 2.434-.374v-3.792c-.82.234-1.522.351-2.13.351-1.24 0-2.224-.421-2.972-1.24-.75-.843-1.124-1.966-1.124-3.394 0-1.334.375-2.434 1.1-3.276.75-.866 1.662-1.288 2.785-1.288.726 0 1.498.118 2.34.351V6.32c-.772-.212-1.638-.305-2.55-.305-2.388-.024-4.353.749-5.922 2.293ZM79.41 5.991c-2.153 0-3.838.726-5.055 2.154-1.218 1.427-1.803 3.44-1.803 6.014 0 2.786.609 4.915 1.802 6.39 1.194 1.474 2.95 2.223 5.243 2.223 2.223 0 3.932-.749 5.125-2.223 1.194-1.475 1.803-3.558 1.803-6.226s-.609-4.727-1.826-6.178c-1.24-1.428-2.996-2.154-5.29-2.154Zm1.849 12.17c-.422.656-1.053.983-1.85.983-.748 0-1.31-.327-1.708-.982-.398-.656-.585-1.966-.585-3.956 0-3.066.772-4.587 2.34-4.587 1.639 0 2.481 1.545 2.481 4.658-.023 1.919-.257 3.23-.678 3.885ZM98.086 6.437l-.842 3.58c-.211.914-.422 1.85-.609 2.81l-.468 2.48c-.445-2.48-1.053-5.43-1.826-8.87h-5.43l-2.035 15.938h4.072l1.1-10.976 2.785 10.976h2.902l2.668-10.953 1.147 10.953h4.259l-2.153-15.938h-5.57Zm19.496 0-.843 3.58a82.507 82.507 0 0 0-.608 2.81l-.469 2.48c-.444-2.48-1.053-5.43-1.825-8.87h-5.43l-2.036 15.938h4.072l1.1-10.976 2.785 10.976h2.903l2.644-10.953 1.147 10.953h4.259l-2.153-15.938h-5.546Zm13.246 9.643h3.815v-3.3h-3.815V9.853h4.4V6.46h-8.706v15.938h8.73v-3.394h-4.424v-2.925Zm16.547-2.528c.444-.726.678-1.475.678-2.247 0-1.498-.585-2.691-1.755-3.557-1.17-.866-2.785-1.31-4.798-1.31h-5.008v15.937h4.306V15.12h.07l3.488 7.255h4.54l-3.44-7.185c.819-.374 1.474-.912 1.919-1.638Zm-6.6-.258v-3.79c1.03.022 1.755.186 2.2.514.445.328.655.843.655 1.591 0 1.1-.959 1.662-2.855 1.685Zm9.806-4.985c-1.568 1.545-2.34 3.511-2.34 5.898 0 2.551.772 4.634 2.317 6.202 1.544 1.568 3.557 2.364 6.061 2.364.726 0 1.545-.117 2.434-.374v-3.792c-.819.234-1.521.351-2.129.351-1.241 0-2.224-.421-2.973-1.24-.749-.843-1.123-1.966-1.123-3.394 0-1.334.374-2.434 1.1-3.276.749-.866 1.662-1.288 2.785-1.288.725 0 1.498.118 2.34.351V6.32c-.772-.212-1.638-.305-2.551-.305-2.363-.024-4.353.749-5.921 2.293Zm13.972 10.65v-2.903h3.815v-3.3h-3.815V9.83h4.424V6.436h-8.707v15.938H169v-3.393h-4.447v-.024Z"
    />
  </svg>
);
export default Logo;
