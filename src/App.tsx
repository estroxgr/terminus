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
        output = ''
        break;
      case "hello":
        output = "HelloWorld";
        break;
      case "date":
        output = new Date().toLocaleString();
        break;
      case "clear":
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
    </>
  )
}

export default App
