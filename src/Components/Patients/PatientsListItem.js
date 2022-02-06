import React from "react";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
// import { removePatient } from "./patientsSlice" ;

const PatientsListItem = ({ name, surname, region, id }) => {
    // const dispatch = useDispatch();

    return (
        <tr id={id}>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{region}</td>
        </tr>
    );
};

export default PatientsListItem;