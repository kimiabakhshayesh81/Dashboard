import React from "react";
import "./WidgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton" + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Last TransActions</h3>

      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Costumer</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="download.png" className="widgetLgImg" />
            <span className="widgetLgName">Kimia</span>
          </td>
          <td className="widgetLgDate">2 May 2024</td>
          <td className="widgetLgAmount">$119.95</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="download.png" className="widgetLgImg" />
            <span className="widgetLgName">Kasra</span>
          </td>
          <td className="widgetLgDate">10 Jun 2023</td>
          <td className="widgetLgAmount">$140.95</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="download.png" className="widgetLgImg" />
            <span className="widgetLgName">Taha</span>
          </td>
          <td className="widgetLgDate">5 Aug 2024</td>
          <td className="widgetLgAmount">$70.05</td>
          <td className="widgetLgStatus">
            <Button type="Pendding" />
          </td>
        </tr>
      </table>
    </div>
  );
}
