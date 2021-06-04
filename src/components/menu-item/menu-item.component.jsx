import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, number }) => {
  const [state, setState] = React.useState(0);
  const [text, setText] = React.useState("");
  const amount = () => {
    setState(state + 1);
  };

  const offline = () => {
    axios
      .put(`/api/requests/${requestParam.id}/approve/offline`, {})
      .then((response) => {
        setText(response.data);
        console.log("response", response);
        // dispatch(getAdminPurchaseRequests());
        dispatch(setActiveRequest(response.data));
        dispatch(getAdminPurchaseRequests());
      })
      .catch((error) => {
        // onFail()
        console.log(error, "error");
      });
    NavigationService.navigate("AdminPanelScreen");
  };

  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <button className="button" onClick={amount}>
          {number}
        </button>
        <span className="subtitle">{state}</span>
      </div>
    </div>
  );
};

export default MenuItem;
