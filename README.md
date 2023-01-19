# ATLEUGIM-HOOKS

Some react hooks I use on my projects

## The hooks

- useCookie (uses js-cookie)
- useDebounce
- useLocalStorage
- useLockScroll
- useOnClickOutside
- useOnScreen

## Installation

Installation with npm

```bash
  npm install atleugim-hooks
```

Installation with yarn

```bash
  yarn add atleugim-hooks
```

Installation with pnpm

```bash
  pnpm add atleugim-hooks
```

## Usage/Examples

- ### useCookie

```jsx
import { useCookie } from "atleugim-hooks";

const App = () => {
  const { value, updateCookie, deleteCookie } = useCookie("ssid", null);

  return (
    <div>
      <p>Cookie value: {value}</p>
      <div>
        <button onClick={() => updateCookie("atleugim")}>
          Update cookie value
        </button>
        <button onClick={() => deleteCookie()}>Delete cookie</button>
      </div>
    </div>
  );
};

export default App;
```

- ### useDebounce

```jsx
import { useDebounce } from "atleugim-hooks";

const App = () => {
  const [value, setValue] = useState();
  const debouncedValue = useDebounce(value, 1000);

  return (
    <div>
      <p>State value: {value}</p>
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <p>Debounced value: {debouncedValue}</p>
      </div>
    </div>
  );
};

export default App;
```

- ### useLocalStorage

```jsx
import { useLocalStorage } from "atleugim-hooks";

const App = () => {
  const { value, updateKey, deleteKey } = useLocalStorage("cart");

  return (
    <div>
      <p>LocalStorage value: {value}</p>
      <div>
        <input type="text" onChange={(e) => updateKey(e.target.value)} />
        <button onClick={() => deleteKey()}>Delete key</button>
      </div>
    </div>
  );
};

export default App;
```

- ### useLockScroll

```jsx
import { useLockScroll } from "atleugim-hooks";

const App = () => {
  const { lock, unlock } = useLockScroll();

  return (
    <div
      style={{
        height: "200vh",
      }}
    >
      <button onClick={() => lock()}>Lock Scroll</button>
      <button onClick={() => unlock()}>Unlock Scroll</button>
    </div>
  );
};

export default App;
```

- ### useOnClickOutside

```jsx
import { useOnClickOutside } from "atleugim-hooks";

const App = () => {
  const ref = useRef(null);
  const [outside, setOutside] = useState(false);

  useOnClickOutside(ref, () => setOutside(true));

  return (
    <div>
      <p ref={ref} onClick={() => setOutside(false)}>
        isClickOutside: {outside ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default App;
```

- ### useOnScreen

```jsx
import { useOnScreen } from "atleugim-hooks";

const App = () => {
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref, 200);

  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundColor: isOnScreen ? "green" : "red",
        }}
      ></div>
      <p ref={ref}>isOnScreen: {isOnScreen ? "Yes" : "No"}</p>
    </div>
  );
};

export default App;
```

## Authors

- [@atleugim](https://github.com/atleugim)
