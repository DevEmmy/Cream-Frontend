import React, { useState, useEffect } from "react";
import block from "../Components/Home/images/block.png";
import { List, Overview, Post } from "./ProfileStat.style";
import {
  FaLongArrowAltUp,
  FaCalendarMinus,
  FaChevronDown,
} from "react-icons/fa";
import S2 from "../Components/Home/images/S2.jpg";
import S1 from "../Components/Home/images/S1.jpg";
import { FaMapMarker } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { useGetUserDetails } from "../application/hooks/queryhooks";
import useContextAPI from "../Components/ContextAPI/ContextAPI";

export default function ProfileStat() {
  const mainData = useContextAPI();

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <StatContainer>
      <div className="accountType">
        <p>Account Type : *Free</p>
      </div>

      <div className="data">
        <div className="overview">
          <h3>Overview</h3>
        </div>

        <div className="info">
          <p className="top">Page Views</p>
          <div className="value">
            <h2>{mainData.userData.pageViews.value}</h2>
            <p>from {mainData.userData.pageViews.users.length} users</p>
          </div>
        </div>

        <div className="info">
          <p className="top">Listing Saves</p>
          <div className="value">
            <h2>{mainData.userData.totalSaved.value}</h2>
            <p>from {mainData.userData.totalSaved.users.length} users</p>
          </div>
        </div>
      </div>

      {/* <Line data={data} /> */}
    </StatContainer>
  );
}

const StatContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  .accountType {
    p {
      color: #737373;
      font-size: 12px;
    }
  }

  .data {
    display: grid;
    grid-template-columns: 1.5fr 2fr 2fr;
    gap: 10px;
  }

  .info {
    background: rgba(242, 242, 242, 0.5);
    border-radius: 8px 0px 0px 8px;
    padding: 20px;

    p.top {
      font-size: 14px;
      font-weight: 700;
    }

    .value {
      display: flex;
      align-items: baseline;
      justify-content: baseline;
      gap: 5px;

      h2 {
        color: blue;
        font-size: 30px;
        padding: 0;
        font-weight: 800;
      }

      p {
        font-size: 15px;
      }
    }
  }
`;
