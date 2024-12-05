import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/slices/editorSlice";

const LanguageSelector = () => {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.editor.language);

    return (
        <select
            value={language}
            onChange={(e) => dispatch(setLanguage(e.target.value))}
            className="language-selector border p-2"
        >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
        </select>
    );
};

export default LanguageSelector;
