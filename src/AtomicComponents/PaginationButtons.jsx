import {
  ChevronLeft,
  ChevronDoubleLeft,
  ChevronRight,
  ChevronDoubleRight,
} from "heroicons-react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const PaginationButtons = ({
  range,
  pagination,
  page,
  setPage,
  totalData,
  width,
  height,
  color,
  background,
  fontSize,
  borderRadius,
}) => {
  const [totalPage, setTotalPage] = useState(0);
  const [buttonRange, setButtonRange] = useState(range);
  let pageValue = 0;
  const PAGINATION = pagination;
  const [flipRight, setFlipRight] = useState(false);
  const [flipLeft, setFlipLeft] = useState(false);

  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [previous, setPrevious] = useState(false);
  const [next, setNext] = useState(false);
  console.log("buton range: ", buttonRange);
  useEffect(() => {
    resetPage(page);
  }, []);

  useEffect(() => {
    setButtonRange(resetButtonRange(buttonRange, totalPage));
  }, [flipRight, flipLeft, totalPage]);

  const resetPage = async (page) => {
    setPage(page);
    let totalListing = totalData;

    if (totalListing !== 0) {
      if (totalListing % PAGINATION > 0) {
        pageValue = Math.floor(totalListing / PAGINATION) + 1;
      } else if (totalListing % PAGINATION === 0) {
        pageValue = totalListing / PAGINATION;
      }
    } else {
      pageValue = totalListing;
    }
    setTotalPage(pageValue);
  };

  const resetButtonRange = (buttonRange, totalPage) => {
    // if (buttonRange) {
    //   // If a range is provided, use it
    //   return buttonRange;
    // }

    let mockButtonRange = buttonRange;
    if (totalPage > buttonRange.length && (flipRight || flipLeft)) {
      //mockButtonRange = [];
      if (flipRight) {
        mockButtonRange = [];
        for (var n = 0; n < buttonRange.length; n++) {
          mockButtonRange.push(buttonRange[n] + 1);
        }
        setFlipRight(false);
      } else if (flipLeft) {
        mockButtonRange = [];
        for (var n = 0; n < buttonRange.length; n++) {
          mockButtonRange.push(buttonRange[n] - 1);
        }
        setFlipLeft(false);
      }
    } else if (totalPage < buttonRange.length) {
      for (var m = 0; m < buttonRange.length; m++) {
        if (totalPage === m + 1) {
          mockButtonRange = [];
          for (var n = 0; n < m + 1; n++) {
            mockButtonRange.push(buttonRange[n]);
          }
          break;
        }
      }
    } else if (totalPage === buttonRange.length) {
      mockButtonRange = buttonRange;
    }
    return mockButtonRange;
  };

  useEffect(() => {
    if (totalPage === 0) {
      setTotalPage(pageValue);
    }
    if (page > 1 && page <= buttonRange.length) {
      setNext(true);
      setEnd(true);
      setPrevious(true);
      setStart(true);
    } else if (page === 1) {
      setPrevious(false);
      setStart(false);
    } else if (page > buttonRange.length && page <= totalPage) {
      setStart(true);
      setPrevious(true);
    }
    if (totalPage > buttonRange.length) {
      setNext(true);
      setEnd(true);
    }
    if (page === totalPage) {
      setNext(false);
      setEnd(false);
    }
  }, [page, totalPage]);

  // STYLED COMPONENT
  const Pagination = styled.div`
    width: contain;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5em;
    font-size: ${fontSize ? fontSize : ""};

    .button {
      border-radius: ${borderRadius ? borderRadius : "5px"};
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${background};
      color: ${color ? color : "white"};
      width: ${width ? width : "2em"};
      height: ${height ? height : "2em"};
      cursor: pointer;
    }
    .disable {
      border-radius: ${borderRadius ? borderRadius : "5px"};
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(180, 180, 180);
      color: white;
      width: ${width ? width : "2em"};
      height: ${height ? height : "2em"};
      cursor: not-allowed;
    }
    .unselect {
      border-radius: ${borderRadius ? borderRadius : "5px"};
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${width ? width : "2em"};
      height: ${height ? height : "2em"};
      cursor: pointer;
      transition: 0.3s;
    }
    .unselect:hover {
      background: ${background};
      color: ${color ? color : "white"};
    }
  `;

  return (
    <>
      <Pagination>
        <div
          className={start ? "button" : "disable"}
          onClick={() => {
            if (start) {
              let mockButtonRange = [];
              resetPage(1);
              for (var n = 0; n < buttonRange.length; n++) {
                mockButtonRange.push(buttonRange[n]);
                setButtonRange(mockButtonRange);
              }
            }
          }}
        >
          <ChevronDoubleLeft />
        </div>
        <div
          className={previous ? "button" : "disable"}
          onClick={() => {
            if (page === buttonRange[0] && previous) {
              setFlipLeft(true);
            }
            if (previous) {
              resetPage(page - 1);
            }
          }}
        >
          <ChevronLeft />
        </div>
        {totalPage !== 0 && (
          <>
            {buttonRange.map((item, i) => {
              return (
                <>
                  <div
                    className={page === buttonRange[i] ? "button" : "unselect"}
                    onClick={() => {
                      resetPage(buttonRange[i]);
                    }}
                  >
                    {item}
                  </div>
                </>
              );
            })}
          </>
        )}

        <div
          className={next ? "button" : "disable"}
          onClick={() => {
            if (page === buttonRange[buttonRange.length - 1] && next) {
              setFlipRight(true);
            }
            if (next) {
              resetPage(page + 1);
            }
          }}
        >
          <ChevronRight />
        </div>

        <div
          className={end ? "button" : "disable"}
          onClick={() => {
            if (end) {
              let mockButtonRange = [];
              let count = buttonRange.length;
              resetPage(totalPage + 1);
              setFlipRight(true);
              for (var n = 0; n < buttonRange.length; n++) {
                count -= 1;
                mockButtonRange.push(totalPage - count);
                setButtonRange(mockButtonRange);
              }
            }
          }}
        >
          <ChevronDoubleRight />
        </div>
      </Pagination>
    </>
  );
};

export default PaginationButtons;
