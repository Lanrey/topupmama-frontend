import React, { useState, } from "react";
import Header from "../../components/Header";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-query";
import { get } from "../../utils/api";
const Book = (props) => {
  const [book, setBook] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    isLoading,
  } = useQuery("fetchBook", () => {
    get(`/books/${props.match.params.id}`).then((res) => {
      setBook(res.data.data.book.book);
      setComments(res.data.data.comments);
      setLoading(false)
    })
  }
  );
  return (
    <div className="Books__page ">
      <Header />

      <div className="py-8" />
      <main className="py-16 w-full ">
        <main className="boxed__container top__wrapper block md:flex justify-between rounded-lg items-center">
          <main className="py-6">
            <p className="name capitalize">Hey there,</p>
            <p className="others">Here is more information about your selected book</p>
          </main>
        </main>

        <main className="boxed__container rounded-xl mx-">
          {loading || isLoading ? "Loading..." : ""}
        </main>

        <main className="">
          {!loading ? (
            <main className=" mx-4 rounded-xl w-full flex flex-wrap boxed__container top__wrapper ">
              {book &&
                <main className="flex flex-wrap w-full">
                  <main className="w-full md:w-1/2  p-4">
                    <main
                      className=" flex items-end w-full text-white p-6 mx-2 rounded-2xl shadow-lg"
                    >
                      <main className="flex  items-center justify-between w-full">
                        <main className="w-full">
                          <p className="text-black text-2xl">{book.name}</p>

                          <main className="flex w-full justify-between my-4">
                            <p className="text-black text-md">{book && book.authors && book.authors[0]} {book.authors.length > 0 ? "and co" : ''}</p>
                            <p className="text-black">{book.numberOfPages} pages</p>
                          </main>
                          <main className="flex w-full justify-between my-4">
                            <p className="text-black text-md">{book.country}</p>
                            <p className="text-black text-md">{book.isbn}</p>
                          </main>
                          <main className="flex  w-full justify-between my-4">
                            <p className="bg-blue-500 text-white text-xs rounded-full px-4 py-2 ">{book.publisher}</p>
                            <p className="bg-green-500 text-white text-xs rounded-full px-4 py-2 ">{book.mediaType}</p>


                          </main>
                          <p className=" text-black"><i class="fas fa-comment mr-2"></i>{comments.length}</p>
                        </main>

                      </main>
                    </main>
                  </main>

                  <main className="w-full md:w-1/2  p-4">
                    <main
                      className=" w-full text-white mx-2 rounded-2xl shadow-lg"
                    >
                      {comments.map((comment, index) => (
                        <main key={index} className="w-full border-b p-4">
                          <main
                            className=" flex items-end w-full text-white mx-2 "
                          >
                            <main className="w-full">
                              <p className="text-black text-md">{comment.text}</p>
                              <span className="text-black">{comment.createdAt} | {comment.ipAddress}</span>
                            </main>
                          </main>
                        </main>
                      ))}
                    </main>
                  </main>
                </main>
              }
            </main>
          ) : (
            ""
          )}
        </main>
      </main>
    </div>
  );
};

export default withRouter(Book);
