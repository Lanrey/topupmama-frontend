import React, { useState } from "react";
import Header from "../../components/Header";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-query";
import { get, } from "../../utils/api";
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Books = () => {
  const history = useHistory();
  const [books, setBooks] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(true);

  const {
    refetch: refetchData,
  } = useQuery("fetchBooks", () => {
    get(`/books?page=${activePage}`).then((res) => {
      setBooks(res.data.data.books);
      setLoading(false)
    })
  }
  );

  const handlePageClick = (event) => {
    setLoading(true)
    setActivePage(event.selected + 1)
    setTimeout(() => {
      refetchData()
    }, 400);

  };


  const handleClick = (route) => {
    history.push(route);
  };
  return (
    <div className="Books__page ">
      <Header />

      <div className="py-8" />
      <main className="py-16 w-full ">
        <main className="boxed__container top__wrapper block md:flex justify-between rounded-lg items-center">
          <main className="py-6">
            <p className="name capitalize">Welcome,</p>
            <p className="others">Please find below some books from our collection</p>
          </main>
        </main>
        <div className="my-12" />
        <main className="boxed__container rounded-xl mx-">
          {loading ? "Loading..." : ""}
        </main>

        <main className="">
          {!loading ? (
            <main className=" mx-4 rounded-xl w-full flex flex-wrap boxed__container top__wrapper ">
              {books &&
                books.map((book, index) => (
                  <main key={index} className="w-full md:w-1/3 p-4">
                    <main
                      onClick={() => {
                        handleClick(`/books/${/[^/]*$/.exec(book.url)[0]}`);
                      }}
                      className=" flex items-end w-full text-white p-6 mx-2 rounded-2xl shadow-lg"
                    >
                      <main className="flex  items-center justify-between w-full">
                        <main className="w-full">
                          <p className="text-black text-2xl">{book.name}</p>

                          <main className="flex w-full justify-between my-4">
                            <p className="text-black text-md">{book.authors[0]} {book.authors.length > 0 ? "and co" : ''}</p>
                            <p className="text-black">{book.numberOfPages} pages</p>
                          </main>
                          <main className="flex  w-full justify-between my-4">
                            <p className="bg-blue-500 text-white text-xs rounded-full px-4 py-2 ">{book.publisher}</p>
                            <p className="bg-green-500 text-white text-xs rounded-full px-4 py-2 ">{book.mediaType}</p>

                          </main>
                          <p className=" text-black"><i class="fas fa-comment mr-2"></i>{book.count}</p>
                        </main>

                      </main>
                    </main>
                  </main>
                ))}
            </main>
          ) : (
            ""
          )}
          <main className="boxed__container  w-full justify-between flex">
            {!loading ? (
              <ReactPaginate
                previousLabel="<"
                nextLabel=">"
                breakLabel="..."
                breakClassName="inline mx-2 border px-2 pagination__bg"
                previousClassName="inline mx-2 border w-12 px-2 pagination__bg"
                activeClassName="bg-blue-300"
                nextClassName="inline mx-2 border px-2 pagination__bg"
                pageCount={2}
                forcePage={activePage - 1}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                pageClassName="inline mx-2 border px-2 pagination__bg"
                onPageChange={handlePageClick}
                containerClassName="="
              />) : (
              ""
            )}
          </main>
        </main>
      </main>
    </div>
  );
};

export default withRouter(Books);
