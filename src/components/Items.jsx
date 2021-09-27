import React, { Component } from "react";
import Item from "./Item";
class Items extends Component {
  render() {
    const returnItem = this.props.items.map((item) => {
      return (
        <Item
          item={item}
          key={item.id}
          removeItem={this.props.removeItem}
          editHandler={this.props.editHandler}
          isEdit={this.props.isEdit}
          setIsEdit={this.props.setIsEdit}
          email={this.props.email}
          userName={this.props.userName}
        />
      );
    });
    return <div className="items">{returnItem}</div>;
  }
}

export default Items;
