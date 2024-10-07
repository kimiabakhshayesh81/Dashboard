import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./WidgetSm.css";
import { NewMembers } from "../../datas";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle"> New Join Members</span>
      <ul className="widgetSmList">
        {NewMembers.map((user) => (
          <li className="widgetSmListItem">
            <img src={user.img} className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.username}</span>
              <span className="widgetSmUserTitle">{user.title}</span>
            </div>
            <button className="widgetSmBtn">
              <VisibilityIcon className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
