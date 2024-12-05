import { useSelector } from "react-redux";

const Terminal = () => {
    const output = useSelector((state) => state.terminal.output);

    return (
        <div className="terminal bg-black text-white p-4 rounded h-40 overflow-y-scroll">
            <pre>{output}</pre>
        </div>
    );
};

export default Terminal;
