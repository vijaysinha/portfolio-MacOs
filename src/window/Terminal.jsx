import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { techStack } from "#constants";
import { Check, Flag } from "lucide-react";
import {WindowControls} from "#components";
const Terminal = () => {
  return (
    <>
      <div id="window-header">
        {/* Control Buttons */}
        <WindowControls target={'terminal'}/>
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@vijay %</span>
          show tech stack
        </p>
        <div className="label">
          <p className="w-32">Category</p>
          <p>Technology</p>
        </div>
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{category}</h3>
              {items.map((item, i) => (
                <ul key={i}>
                  {item}
                  {i < items.length - 1 ? ", " : ""}
                </ul>
              ))}
            </li>
          ))}
        </ul>
        <div className="footnote">
          <p>
            <Check size={20} /> 5 of 5 Stack Loaded Successfully 100%
          </p>
          <p className="text-black">
            <Flag size={15} fill="black" />
            Render Time 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;
