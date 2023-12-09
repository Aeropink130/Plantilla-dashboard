/* eslint-disable */


import { Box, Grid, Table } from '@mui/material'
import SimpleBlogCard from 'examples/Cards/BlogCards/SimpleBlogCard'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import React from 'react'
import team2 from 'assets/images/team-2.jpg'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import homedecor1 from 'assets/images/home-decor-1.jpg'
import DefaultInfoCard from 'examples/Cards/InfoCards/DefaultInfoCard'
import MDBox from 'components/MDBox'
import DataTable from 'examples/Tables/DataTable'
import pruebaTableData from 'layouts/prueba/data/pruebaTableData'
import Footer from 'examples/Footer'

function prueba() {

    const { columns, rows } = pruebaTableData();

    return (
        <DashboardLayout >
            <DashboardNavbar />
            <MDBox display={"flex"}>
                <SimpleBlogCard
                    image={null}
                    title="Prueba"
                    description="Esta es una descripción de prueba"
                    action="#"
                />
                <DefaultInfoCard
                    color="info"
                    icon="boy"
                    title="Prueba"
                    description="Esta es una descripción de prueba"
                    value="Prueba"
                />
                <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                />
            </MDBox>
            <Footer />
        </DashboardLayout>
    )
}

export default prueba