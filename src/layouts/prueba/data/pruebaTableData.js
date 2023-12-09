/* eslint-disable */

/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function data() {
    const [rowData, setrowData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8090/employees").then((response) => {
            setrowData(response.data);
        });
    }, []);

    const getImageSource = (imageName) => {
        // Agrega lógica aquí para determinar la imagen según el nombre (imageName)
        if (imageName === "team2") {
            return team2;
        } else if (imageName === "team3") {
            return team3;
        } else if (imageName === "team4") {
            return team4;
        } else {
            // Devuelve una imagen predeterminada o maneja el caso según sea necesario
            return team2; // Cambia esto según tus necesidades
        }
    };

    const Author = ({ image, name, email }) => (
        <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDAvatar src={getImageSource(image)} name={name} size="sm" />
            <MDBox ml={2} lineHeight={1}>
                <MDTypography display="block" variant="button" fontWeight="medium">
                    {name}
                </MDTypography>
                <MDTypography variant="caption">{email}</MDTypography>
            </MDBox>
        </MDBox>
    );

    const Job = ({ title, description }) => (
        <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
                {title}
            </MDTypography>
            <MDTypography variant="caption">{description}</MDTypography>
        </MDBox>
    );

    return {
        columns: [
            { Header: "author", accessor: "author", width: "45%", align: "left" },
            { Header: "function", accessor: "function", align: "left" },
            { Header: "status", accessor: "status", align: "center" },
            { Header: "employed", accessor: "employed", align: "center" },
            { Header: "action", accessor: "action", align: "center" },
        ],
        rows: rowData.map((dataItem) => (
            {
                author: <Author image={dataItem.image} name={dataItem.name} email={dataItem.email} />,
                function: <Job title={dataItem.jobTitle} description={dataItem.jobDescription} />,
                status: (
                    <MDBox ml={-1}>
                        <MDBadge badgeContent={dataItem.status} color={dataItem.status === "online" ? "success" : "dark"} variant="gradient" size="sm" />
                    </MDBox>
                ),
                employed: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        {dataItem.employedDate}
                    </MDTypography>
                ),
                action: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        Edit
                    </MDTypography>
                ),
            })),
    };
}
