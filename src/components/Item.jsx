import React, { Component } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { HiOutlineArrowLeft } from "react-icons/hi";

class Item extends Component {
  constructor(props) {
    super(props);
    const { id, email, userName } = this.props.item;
    this.state = {
      id,
      email,
      userName,
    };
  }

  removeRowItem = () => {
    this.props.removeItem(this.props.item.id);
  };

  update = (e) => {
    e.preventDefault();
    this.props.editHandler(this.state);
  };
  render() {
    const { isEdit, setIsEdit } = this.props;
    return (
      <>
        <div className="item">
          <div className="itemTexts">
            <div className="itemImg">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="user"
                width="40px"
              />
            </div>
            <div className="itemText">
              <h6>{this.props.item.email}</h6>
              <p>{this.props.item.userName}</p>
            </div>
          </div>
          <div className="editIconDiv">
            <FiEdit className="editIcon" onClick={(e) => setIsEdit(true)} />
          </div>
          <div className="deleteIconDiv">
            <RiDeleteBin6Line
              className="deleteIcon"
              onClick={this.removeRowItem}
            />
          </div>
        </div>

        {isEdit ? (
          <>
            <div
              className="editDivParent"
              onClick={(e) => setIsEdit(false)}
            ></div>
            <div className="editDivChild">
              <span>
                <HiOutlineArrowLeft className="editCloseIcon" />
              </span>
              <h2>Edit Items</h2>
              <form className="crudForm2" onSubmit={this.update}>
                <p>
                  <label htmlFor="addListEmail2">Add Email</label>
                  <input
                    type="text"
                    id="addListEmail2"
                    name="email2"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </p>
                <p>
                  <label htmlFor="addListUser2">Add Username</label>
                  <input
                    type="text"
                    id="addListUser2"
                    name="user2"
                    value={this.state.userName}
                    onChange={(e) =>
                      this.setState({ userName: e.target.value })
                    }
                  />
                </p>
                <button type="submit">Edit</button>
              </form>
            </div>
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Item;
