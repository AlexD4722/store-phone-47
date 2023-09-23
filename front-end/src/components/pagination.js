import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import '../styles/pagination.scss';
function PaginationPage(props) {
    console.log("data>>>>>>>>>>",props.data)
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = props.data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(props.data.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    return (
        <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item >{5}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
        </Pagination>
    );
}

export default PaginationPage;