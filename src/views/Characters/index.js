import React, { useState } from "react";
import Header from "../../components/Header";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-query";
import { get, } from "../../utils/api";
import ReactPaginate from "react-paginate";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [gender,] = useState("");
  const [loading, setLoading] = useState(true);

  const {
    refetch: refetchData,
  } = useQuery("fetchCharacters", () => {
    get(`/characters?page=${activePage}&gender=${gender}`).then((res) => {
      setCharacters(res.data.data.characters);
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

  return (
    <div className="Books__page ">
      <Header />

      <div className="py-8" />
      <main className="py-16 w-full ">
        <main className="boxed__container top__wrapper block md:flex justify-between rounded-lg items-center">
          <main className="py-6">
            <p className="name capitalize">Welcome,</p>
            <p className="others">Please find below some characters from our collection</p>
          </main>
          {/* <main>
            <form>
              <select onChange={(e) => {
                console.log({ e })
                setGender(e.target.value)
                refetchData()
              }} value={gender}>
                <option disabled value=''>Filter by Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </form>
          </main> */}
        </main>
        <div className="my-12" />
        {/* <p className="text-black">{gender}</p> */}
        <main className="boxed__container rounded-xl mx-">
          {loading ? "Loading..." : ""}
        </main>

        <main className="">
          {!loading ? (
            <main className=" mx-4 rounded-xl w-full flex flex-wrap boxed__container top__wrapper ">
              {characters &&
                characters.map((character, index) => (
                  <main key={index} className="w-full md:w-1/3 p-4">
                    <main
                      className=" flex items-end w-full text-white p-6 mx-2 rounded-2xl shadow-lg"
                    >
                      <main className="flex  items-center justify-between w-full">
                        <main className="w-full">
                          <p className="text-black text-2xl">{character.name}</p>

                          <main className="flex w-full justify-between my-4">
                            <p className="text-black text-md">{character.gender}</p>
                            <p className="text-black">{character.culture} </p>
                          </main>

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
                pageCount={10}
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

export default withRouter(Characters);
