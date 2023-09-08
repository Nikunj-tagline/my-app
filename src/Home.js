import React, { useState } from "react";

const Home = () => {
  const data = [
    {
      id: 1,
      name: "foo",
      city: "dallas",
      category: "one",
      type: "A",
      active: "FALSE",
    },
    {
      id: 2,
      name: "bar",
      city: "dallas",
      category: "two",
      type: "B",
      active: "FALSE",
    },
    {
      id: 3,
      name: "jim",
      city: "san francisco",
      category: "one",
      type: "B",
      active: "TRUE",
    },
    {
      id: 4,
      name: "jane",
      city: "denver",
      category: "two",
      type: "C",
      active: "FALSE",
    },
    {
      id: 5,
      name: "lee",
      city: "abc",
      category: "two",
      type: "C",
      active: "FALSE",
    },
    {
      id: 6,
      name: "yexh",
      city: "america",
      category: "three",
      type: "D",
      active: "FALSE",
    },
    {
      id: 7,
      name: "alxe",
      city: "JAPAN",
      category: "three",
      type: "D",
      active: "TRUE",
    },
  ];

  const [filterdata, setFilterdata] = useState(data);
  const [searchVal, setSearchVal] = useState("");

  function handleSearchClick() {
    if (searchVal === "") {
      setFilterdata(data);
      return;
    }
    const filterBySearch = filterdata?.filter((item) => {
      if (item.name.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    setFilterdata(filterBySearch);
  }
  const datacity = data.map(({ city }) => city);
  const filtered = data.filter(
    ({ city }, index) => !datacity.includes(city, index + 1)
  );
  const datacate = data.map(({ category }) => category);
  const categfiltered = data.filter(
    ({ category }, index) => !datacate.includes(category, index + 1)
  );
  const idstype = data.map(({ type }) => type);
  const typefiltered = data.filter(
    ({ type }, index) => !idstype.includes(type, index + 1)
  );
  const dataaction = data.map(({ active }) => active);
  const actionfiltered = data.filter(
    ({ active }, index) => !dataaction.includes(active, index + 1)
  );

  const handleFilterChange = (e, index) => {
    if (e.target.checked) {
      const filetrdatas = filterdata.filter((item) => {
        return item.city === index.city;
      });
      setFilterdata((prevState) => {
        console.log("prevState", prevState);
        return filetrdatas;
      });
    } else {
      setFilterdata(data);
    }
  };
  const handleFiltercatagory = (e, index) => {
    if (e.target.checked) {
      const filetrdatas = filterdata.filter((item) => {
        return item.category === index.category;
      });
      setFilterdata(filetrdatas);
    } else {
      setFilterdata(data);
    }
  };
  const handleFiltertype = (e, index) => {
    if (e.target.checked) {
      const filetrdatas = filterdata.filter((item) => {
        return item.type === index.type;
      });
      setFilterdata(filetrdatas);
    } else {
      setFilterdata(data);
    }
  };
  const handleFilteractive = (e, index) => {
    if (e.target.checked) {
      const filetrdatas = filterdata.filter((item) => {
        return item.active === index.active;
      });
      setFilterdata(filetrdatas);
    } else {
      setFilterdata(data);
    }
  };

  return (
    <>
      <div className="d-flex">
        <div>
          <h1>city</h1>
          <div className="form-check form-switch">
            {filtered.map((item, index) => (
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item.city}
                  id="flexSwitchCheckDefault"
                  onChange={(e) => {
                    handleFilterChange(e, item);
                  }}
                />
                <label
                  className="form-check-label"
                  for="flexSwitchCheckDefault"
                >
                  {item.city}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="form-check form-switch ms-4">
          <h1>category</h1>

          {categfiltered.map((item, index) => (
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                value={item.category}
                id="flexSwitchCheckDefault"
                onChange={(e) => handleFiltercatagory(e, item)}
              />
              <label className="form-check-label" for="flexSwitchCheckDefault">
                {item.category}
              </label>
            </div>
          ))}
        </div>
        <div className="form-check form-switch ms-4">
          <h1>type</h1>

          {typefiltered.map((item, index) => (
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                value={item.type}
                id="flexSwitchCheckDefault"
                onChange={(e) => handleFiltertype(e, item)}
              />
              <label className="form-check-label" for="flexSwitchCheckDefault">
                {item.type}
              </label>
            </div>
          ))}
        </div>
        <div className="form-check form-switch ms-4">
          <h1>active</h1>

          {actionfiltered.map((item, index) => (
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                value={item.active}
                id="flexSwitchCheckDefault"
                onChange={(e) => handleFilteractive(e, item)}
              />
              <label className="form-check-label" for="flexSwitchCheckDefault">
                {item.active}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-5 ms-4">
          <input
            className="form-control"
            type="text"
            placeholder="name"
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button onClick={handleSearchClick}>search</button>
        </div>
      </div>
      <div className="center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">category</th>
              <th scope="col">type</th>
              <th scope="col">active</th>
            </tr>
          </thead>
          <tbody>
            {filterdata &&
              filterdata.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.city}</td>
                  <td>{item.category}</td>
                  <td>{item.type}</td>
                  <td>{item.active}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
