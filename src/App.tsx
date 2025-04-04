import { useState, useRef, useEffect } from "react"
// components
import Terminal from "./components/Terminal"
import { Command } from "./types"

function App() {

  const [history, setHistory] = useState<Command[]>([
    { input: "", output: '' }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);


  const [isMax, setIsMax] = useState(false)


  const toggleSize = () => {
    setIsMax(!isMax)
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);


  const handleCommand = (cmd: string) => {
    let output = "";

    switch (cmd.toLowerCase()) {
      case "help":
        output = `

        - help: Show available commands
        - cls: Clear the terminal
        - whoami: Show developer name
        - 🗓 date: Show current date and time
        `
        break;
      case "hello":
        output = "🌟 HelloWorld";
        break;
      case "date":
        output = new Date().toLocaleString();
        break;

        case "whoami":
          output = "👨🏻‍💻 My name is Alexandros Anastasiadis";
          break;
      case "cls":
        setHistory([{ input: "", output: '' }]);
        return;
      default:
        output = `Unknow command: "${cmd}". Try 'help' for available commands`;
    }

    setHistory([...history, { input: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    handleCommand(input);
    setInput("");
  };



  return (
    <>
      <div className="desktop">
        <Terminal title="Terminus" isMax={isMax} resize={toggleSize}>
          <div className="history">
            {history.map((item, index) => (
              <div key={index} className="p-43">

                <div className="ml-4 text-white">{item.output}</div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <span className="text-green-300 p-43">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="text-green-300 p-43"
              autoFocus
            />
          </form>
        </Terminal>

          {/* project details  */}
        <div className="details">
          <div className="appname">Hi i'm Draggable ✋</div>
      
          <div className="source">
            Find repository on <a href="https://github.com/estroxgr/terminus">GitHub</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
