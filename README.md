## Terminus

Draggable terminal component in React + TypeScript.


### Preview

<img width="350px" style="border-radius:22px;" src="https://raw.githubusercontent.com/estroxgr/terminus/refs/heads/main/preview.png">


### Available Commands

| Command   | Desc    | Returns       |
| ---    | ---   | ---     |
| **help** | Prints available commands | string |
| **cls** | Clear the screen | void |
| **whoami** | Prints author name | string |
| **date** | Prints local date and time | string |


### Feature Improvements

- Save terminal new location when stop dragged.
- Update terminal settings via commands.
- More styles or font selectors.

### Special thanks to ChatGPT

Because i'm noob in TypeScript , i was struggling with Draggable **nodeRef** type for 5 days. 

Specifically ChatGPT helps me to implement the following interface Props.

```js

interface TermProps {
    title: string;
    isMax: boolean;
    children: React.ReactNode;
    resize: VoidFunction;
}

 const dragRef = useRef<HTMLDivElement | null>(null)

```



### Contribute

😉 Feel free to change and improve this project.
