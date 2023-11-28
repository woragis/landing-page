import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleTheme } from "../../redux/Theme";

const ThemeSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.themes.isDarkMode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <div>
      <label htmlFor='theme'>Dark Mode</label>
      <input type='checkbox' name='theme' checked={isDarkMode} onChange={handleThemeToggle} />
    </div>
  );
};

export default ThemeSwitcher;
