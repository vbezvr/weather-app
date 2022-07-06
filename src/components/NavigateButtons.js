
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { changeViewMode, viewModeFilter } from "../features/reducer/actions";

export { NavigateButtons };

function ButtonItem({name}) {
  const viewMode = useSelector((state) => state.viewModeTab);
  const dispatch = useDispatch();
  const tabName = name.toUpperCase();
  function getClassName() {
    return viewMode === tabName ? `${name}-btn button active` : `${name}-btn button`;
  }

  return (
    <div className={getClassName()} onClick={() => dispatch(changeViewMode(viewModeFilter[tabName]))}>
      <span className="content">{name}</span>
    </div>
  );
}


function NavigateButtons() {
  const buttons = ["now", "details", "forecast"];
  const buttonsList = buttons.map((elem, index) => (
    <ButtonItem key={index} name={elem} />
  ));


  return (
    <div className="button-display">
      {buttonsList}
    </div>
  );
}
