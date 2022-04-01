import { React, useEffect, useState } from "react";
import { useSelector } from 'react-redux';

function RowView(props) {

    const { rowItem, rowIndex, updateList } = props;

    const listObject = useSelector((state) => state.listObject.list);
    
    const [index] = useState(rowIndex)

    const [ rowName, setRowName ] = useState(rowItem?.name);
    const [ rowAge, setRowAge ] = useState(rowItem?.age);
    const [ rowEmail, setRowEmail ] = useState(rowItem?.email);

  const updateName = (e) => {  
      const value = e?.target?.value;
      setRowName(value);
      listObject[index].name = value;
      let updateArray = [];
      updateArray = [...listObject]
      updateList(updateArray);
  }

  const updateAge = (e) => {  
    const value = e?.target?.value;
    setRowAge(value);
    listObject[index].age = value;
    let updateArray = [];
    updateArray = [...listObject]
      updateList(updateArray);
 }

 const updateEmail = (e) => {  
    const value = e?.target?.value;
    setRowEmail(value);
    listObject[index].email = value;
    let updateArray = [];
    updateArray = [...listObject]
    updateList(updateArray);
 }

 useEffect(() => {
    setRowAge(rowItem?.age)
 }, [rowItem?.age]);

 useEffect(() => {
    setRowEmail(rowItem?.email)
 }, [rowItem?.email]);

 useEffect(() => {
    setRowName(rowItem?.name)
 }, [rowItem?.name]);

return (
    <>
      <tr key={index}>
        <td><input type="text" id="name" name="fname" placeholder="Enter Name" value={rowName} onChange={(e) => updateName(e)}/></td>
        <td><input type="text" id="age" placeholder="Enter Age" value={rowAge} onChange={(e) => updateAge(e)} /></td>
        <td><input type="email" id="email" placeholder="Enter Email" value={rowEmail} onChange={(e) => updateEmail(e)} /></td>
      </tr>
    </>
);
}

export default RowView;