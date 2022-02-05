# React Course TypeScript Props

## Chapter 1 Defining props for components

```typescript
    App.tsx

    import Header from './components/Header';

    function App() {
    return (
        <div>
        <Header title="Dashboard"/>
        </div>
    );
    }

    export default App;
```

```typescript
    Header.tsx

    interface HeaderProps {
    title: string;
    }
    export default function Header({ title }: HeaderProps) {
        return <>
            <div>{title}</div>
        </>
    }
```

## Chapter 2 Optional props

```typescript
    App.tsx

    import Header from './components/Header';

    function App() {
    return (
        <div>
        <Header title="Dashboard"/>
        </div>
    );
    }

    export default App;
```

or

```typescript
    App.tsx

    import Header from './components/Header';

    function App() {
    return (
        <div>
        <Header title="Dashboard" optionalText="Optional Text" />
        </div>
    );
    }

    export default App;
```

```typescript
    Header.tsx

    interface HeaderProps {
    title: string;
    optionalText?: string
    }
    export default function Header({ title, optionalText }: HeaderProps) {
        return <>
            <div>{title}</div>
            {optionalText && <div>{optionalText}</div>}
        </>
    }   
```

## Chapter 3 Default props

```typescript
    App.tsx

    import Header from './components/Header';

    function App() {
    return (
        <div>
        <Header title="Dashboard"/>
        </div>
    );
    }

    export default App;
```

or

```typescript
    App.tsx

    import Header from './components/Header';

    function App() {
    return (
        <div>
        <Header title="Dashboard" optionalText="Optional Text" />
        </div>
    );
    }

    export default App;
```

```typescript
    Header.tsx

    interface HeaderProps {
    title: string;
    optionalText?: string
    }
    export default function Header({ title, optionalText = "Default Props" }: HeaderProps) {
        return <>
            <div>{title}</div>
            {optionalText && <div>{optionalText}</div>}
        </>
    }   
```

## Differences Between Type Aliases and Interfaces

[Type Aliases or Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)