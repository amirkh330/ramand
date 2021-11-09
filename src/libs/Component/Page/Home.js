import Layout from "../../Layout/Layout";
import React, { useState } from "react";
import { Button, Input, message, Modal, Table } from "antd";
// import list from "../../../Asset/list.json";
import {list} from "../../../Asset/list.js";
import { EditOutlined } from "@ant-design/icons";
import logo from "../../../Image/manu.svg";


function Home() {
  let [edit, setEdit] = useState(false);
  let [data, setData] = useState({});
  let [search, setSearch] = useState("");
  let [dataTable, setdataTable] = useState(list);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Edit",
      width: "10%",
      render: (item) => {
        return (
          <Button icon={<EditOutlined />} onClick={() => _renderEdit(item)} />
        );
      },
    },
  ];

  const _renderClose = () => {
    setEdit(false);
    setData("");
  };

  const _renderEdit = (item) => {
    setData(item);
    setEdit(true);
  };

  const _renderSubmit = () => {
    list[data.key - 1] = data;
    _renderClose();
  };

  const _renderSearch = () => {
    if (!search) {
      return message.error("Please type player name");
    }

    let filter = list.filter((item) => {
      return item.firstName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
      ||
      item.lastName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    });

    setdataTable(filter);
  };

  const _renderReset = () => {
    setdataTable(list);
    setSearch("");
  };

  return (
    <Layout>
      <div className="container pt-5">
        <div className={"row justify-content-beetween py-3"}>
          <div className="col-md-6 col-12 d-flex align-items-center py-md-0 py-2">
            <img src={logo} width={50} height={50} />
            <h3 className={"mx-2"}>Manchester United Teams</h3>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-md-end align-items-center py-2">
            <Input
              placeholder={"Please Type Name Of Player"}
              className={"mx-1 search-bar  radius"}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <Button onClick={_renderSearch} type={"primary radius"}>
              Search
            </Button>
            {search && (
              <Button onClick={_renderReset} className={"radius ml-1 "}>
                Reset
              </Button>
            )}
          </div>
        </div>
        <Table
          dataSource={[...dataTable]}
          columns={columns}
          pagination={{
            position: ["bottomCenter"],
            pageSize: 5,
            hideOnSinglePage: true,
          }}
        />
      </div>

      <Modal
        title={"Edit Player  "}
        visible={edit}
        onCancel={_renderClose}
        onOk={_renderSubmit}
      >
        <div className={"p-3"}>
          <h5>First Name</h5>
          <Input
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
        </div>
        <div className={"p-3"}>
          <h5>Last Name</h5>
          <Input
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
        </div>
        <div className={"p-3"}>
          <h5>Age</h5>
          <Input
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
          />
        </div>
      </Modal>
    </Layout>
  );
}

export default Home;
