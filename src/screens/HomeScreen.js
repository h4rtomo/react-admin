//import liraries
import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions } from "react-native-web";
import $ from "jquery";
import ReactPaginate from "react-paginate";

const CommentList = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.first_name}</td>
      <td>{props.data.email}</td>
    </tr>
  );
};
const HomeScreen = () => {
  const [user, setUser] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    getData(0);
    console.log(1);
  }, []);

  async function getData(currentPage, search = null) {
    var params = {
      per_page: 10,
      page: currentPage + 1,
    };
    params.search = search;

    console.log(params);
    $.ajax({
      url: "https://reqres.in/api/users",
      data: params,
      dataType: "json",
      type: "GET",

      success: (res) => {
        console.log(res);
        setUser(res.data);
        setPageCount(res.total_pages);
        setCurrentPage(res.page - 1);
      },

      error: (xhr, err) => {
        console.log("error", JSON.stringify(xhr)); // eslint-disable-line
      },
    });
  }

  function handlePageClick(data) {
    console.log(data);
    let selected = data.selected;
    getData(selected, $("#searchT").val());
  }
  function _handleKeyDown(e) {
    if (e.key === "Enter") {
      console.log($("#searchT").val());
      getData(0, $("#searchT").val());
    }
  }

  function clickTHead() {
    console.log(1);
    $(".theader");
  }
  return (
    <>
      <div className="row">
        <div className="col col-md-9"></div>
        <div className="col col-md-3">
          <input
            id="searchT"
            className="form-control form-control-sm"
            placeholder="Search"
            onKeyDown={(e) => _handleKeyDown(e)}
          />
        </div>
      </div>

      <table className="table">
        <thead>
          <tr id="rowheader">
            <td className="theader sortable asc" onClick={() => clickTHead()}>
              ID
            </td>
            <td className="theader sortable">Name</td>
            <td className="theader">Email</td>
          </tr>
        </thead>
        <tbody>
          {user.map(function (item, index) {
            return <CommentList key={index} data={item} />;
          })}
        </tbody>
      </table>
      {pageCount > 0 ? (
        <nav aria-label="Page navigation example">
          <ReactPaginate
            forcePage={currentPage}
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(data) => handlePageClick(data)}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </nav>
      ) : null}
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default HomeScreen;
