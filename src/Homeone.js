import React, { useEffect, useState } from "react";

const Homeone = () => {
  const [filters, setFilters] = useState({
    selectedCate: [],
    selectedCity: [],
    selectedType: [],
    selectedActive: [],
  });

  const dataList = [
    {
      id: 1,
      name: "foo",
      category: "one",
      type: "A",
      action: "TRUE",
      city: "dallas",
    },

    {
      id: 2,
      name: "bar",
      category: "two",
      type: "B",
      action: "FALSE",
      city: "dallas",
    },
    {
      id: 3,
      name: "jim",
      category: "two",
      type: "B",
      action: "TRUE",
      city: "san francisco",
    },
    {
      id: 4,
      name: "jane",
      category: "two",
      type: "B",
      action: "FALSE",
      city: "denver",
    },
    {
      id: 5,
      name: "lee",
      category: "three",
      type: "C",
      action: "FALSE",
      city: "america",
    },
    {
      id: 6,
      name: "yexh",
      category: "three",
      type: "D",
      action: "FALSE",
      city: "america",
    },
    {
      id: 7,
      name: "alxe",
      category: "four",
      type: "D",
      action: "FALSE",
      city: "JAPAN",
    },
    {
      id: 8,
      name: "pepper",
      category: "four",
      type: "E",
      action: "TRUE",
      city: "JAPAN",
    },
    {
      id: 9,
      name: "blue",
      category: "five",
      type: "E",
      action: "TRUE",
      city: "xyz",
    },
    {
      id: 10,
      name: "blue",
      category: "five",
      type: "E",
      action: "FALSE",
      city: "xyz",
    },
  ];

  //   const filterDataFuncation = (dataList, filters) => {
  //     return dataList.filter((item) => {
  //       if (
  //         !filters ||
  //         Object.values(filters).every((filter) => !filter || filter.length === 0)
  //       ) {
  //         return true;
  //       }

  //       const conditions = [];

  //       if (filters.selectedCate && filters.selectedCate.length > 0) {
  //         conditions.push(filters.selectedCate.includes(item.catagory));
  //       }

  //       if (filters.selectedCity && filters.selectedCity.length > 0) {
  //         conditions.push(filters.selectedCity.includes(item.city));
  //       }

  //       if (filters.selectedType && filters.selectedType.length > 0) {
  //         conditions.push(filters.selectedType.includes(item.type));
  //       }

  //       if (filters.selectedActive && filters.selectedActive.length > 0) {
  //         conditions.push(filters.selectedActive.includes(item.action));
  //       }

  //       if (conditions.length === 0) {
  //         return true;
  //       }

  //       return conditions.every((condition) => condition);
  //     });
  //   };
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);
  //   useEffect(() => {
  //     let filteredData = filterDataFuncation(dataList, filters);
  //     const searchVal = searchText.toLowerCase().trim();
  //     if (searchText !== "") {
  //       filteredData = dataList.filter((item) => {
  //         if (item.name.toLowerCase().includes(searchVal.toLowerCase())) {
  //           return item;
  //         }
  //       });
  //     }
  //     setData(filteredData);
  //   }, [filters, searchText]);
  useEffect(() => {
    const filteredData = dataList.filter((item) => {
      if (
        (!filters ||
          Object.values(filters).every(
            (filter) => !filter || filter.length === 0
          )) &&
        (searchText === "" ||
          item.name.toLowerCase().includes(searchText.toLowerCase()))
      ) {
        return true;
      }

      const conditions = [];

      if (filters.selectedCate && filters.selectedCate.length > 0) {
        conditions.push(filters.selectedCate.includes(item.category));
      }

      if (filters.selectedCity && filters.selectedCity.length > 0) {
        conditions.push(filters.selectedCity.includes(item.city));
      }

      if (filters.selectedType && filters.selectedType.length > 0) {
        conditions.push(filters.selectedType.includes(item.type));
      }

      if (filters.selectedActive && filters.selectedActive.length > 0) {
        conditions.push(filters.selectedActive.includes(item.action));
      }

      return (
        conditions.every((condition) => condition) &&
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
    });

    setData(filteredData);
  }, [filters, searchText]);

  const handleChange = (value, item, type) => {
    if (!item) {
      setSearchText(value);
    }
    if (type === "city") {
      let selectedCityCopy = [...filters.selectedCity];
      if (selectedCityCopy.includes(item.city)) {
        setFilters({
          ...filters,
          selectedCity: selectedCityCopy.filter((data) => data !== item.city),
        });
      } else {
        console.log("object");
        setFilters({
          ...filters,
          selectedCity: [...filters.selectedCity, item.city],
        });
      }
    }
    if (type === "category") {
      let selectedCateCopy = [...filters.selectedCate];
      if (selectedCateCopy.includes(item.category)) {
        setFilters({
          ...filters,
          selectedCate: selectedCateCopy.filter(
            (data) => data !== item.category
          ),
        });
      } else {
        setFilters({
          ...filters,
          selectedCate: [...filters.selectedCate, item.category],
        });
      }
    }
    if (type === "type") {
      let selectedTypeCopy = [...filters.selectedType];
      if (selectedTypeCopy.includes(item.type)) {
        setFilters({
          ...filters,
          selectedType: selectedTypeCopy.filter((data) => data !== item.type),
        });
      } else {
        setFilters({
          ...filters,
          selectedType: [...filters.selectedType, item.type],
        });
      }
    }
    if (type === "action") {
      let selectedActiveCopy = [...filters.selectedActive];
      if (selectedActiveCopy.includes(item.action)) {
        setFilters({
          ...filters,
          selectedActive: selectedActiveCopy.filter(
            (data) => data !== item.action
          ),
        });
      } else {
        setFilters({
          ...filters,
          selectedActive: [...filters.selectedActive, item.action],
        });
      }
    }
  };

  //   const cityfilter = dataList.map(({ city }) => city);
  //   const filteredcity = dataList.filter(
  //     ({ city }, index) => !cityfilter.includes(city, index + 1)
  //   );
  //   const catagoryfilter = dataList.map(({ catagory }) => catagory);
  //   const filteredcatagory = dataList.filter(
  //     ({ catagory }, index) => !catagoryfilter.includes(catagory, index + 1)
  //   );
  //   const actionfilter = dataList.map(({ action }) => action);
  //   const filteredaction = dataList.filter(
  //     ({ action }, index) => !actionfilter.includes(action, index + 1)
  //   );
  //   const typefilter = dataList.map(({ type }) => type);
  //   const filteredtype = dataList.filter(
  //     ({ type }, index) => !typefilter.includes(type, index + 1)
  //   );

  function filterUniqueValues(dataList, property) {
    const filter = dataList.map((item) => item[property]);
    return dataList.filter(
      (item, index) => !filter.includes(item[property], index + 1)
    );
  }
  const filteredCity = filterUniqueValues(dataList, "city");
  const filteredCategory = filterUniqueValues(dataList, "category");
  const filteredAction = filterUniqueValues(dataList, "action");
  const filteredType = filterUniqueValues(dataList, "type");
  return (
    <div>
      <>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">catagory</th>
                <th scope="col">type</th>
                <th scope="col">city</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.type}</td>
                  <td>{item.city}</td>
                  <td>{item.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
          Search:
          <input
            style={{ marginLeft: 5 }}
            type="text"
            placeholder="Type to search..."
            value={searchText}
            onChange={(e) => handleChange(e.target.value, null, "search")}
          />
        </div>
        <div className="d-flex ">
          <div>
            <h1>city</h1>
            {filteredCity.map((item) => (
              <>
                <div className="d-flex">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      checked={filters.selectedCity.includes[item.city]}
                      onChange={(e) => handleChange(e, item, "city")}
                    />
                    <label
                      className="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      {item.city}
                    </label>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="ms-4">
            <h1>catagory</h1>
            {filteredCategory.map((item) => (
              <>
                <div className="d-flex">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      checked={filters.selectedCate.includes[item.category]}
                      onChange={(e) => handleChange(e, item, "category")}
                    />
                    <label
                      className="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      {item.category}
                    </label>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="ms-4">
            <h1>action</h1>
            {filteredAction.map((item) => (
              <>
                <div className="d-flex">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      checked={filters.selectedActive.includes[item.action]}
                      onChange={(e) => handleChange(e, item, "action")}
                    />
                    <label
                      className="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      {item.action}
                    </label>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="ms-4">
            <h1>type</h1>
            {filteredType.map((item) => (
              <>
                <div className="d-flex">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      checked={filters.selectedType.includes[item.type]}
                      onChange={(e) => handleChange(e, item, "type")}
                    />
                    <label
                      className="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      {item.type}
                    </label>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Homeone;
