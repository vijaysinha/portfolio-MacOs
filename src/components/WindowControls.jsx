import useWindowsStore from "#store/Windows";

const WindowControls = ({target}) => {
    const {closeWindow} =  useWindowsStore()
  return (
    <div id="window-controls">
        <div className="close" onClick={()=> closeWindow(target)}></div>
        <div className="maximize"></div>
        <div className="minimize"></div>

    </div>
  )
}

export default WindowControls