import { React, useEffect, useState } from "react";
import {useDispatch, useSelector } from 'react-redux';
import { setListObject } from '../src/appStore/actionCreators/listObject';
import RowView from './RowView';

function ListView() {

    const dispatch = useDispatch();
    const listObject = useSelector((state) => state.listObject.list);

    const [ listItems, setListItems ] = useState(listObject);
    
    function updateListInStore(list) {
        dispatch(setListObject(list));
        setListItems(list);
    }

    const sortByAge = () => {
        listObject.sort((a, b) => {
            return a.age - b.age;
        });
        let updateArray = [];
        updateArray = [...listObject]
        dispatch(setListObject(updateArray));
        setListItems(updateArray);
    }

    const sortByName = () => {
        listObject.sort((a, b) => {
            let aName = a.name;
            let bName = b.name;
        
            if (aName < bName) {
                return -1;
            }
            if (aName > bName) {
                return 1;
            }
            return 0;
        });
        let updateArray = [];
        updateArray = [...listObject]
        dispatch(setListObject(updateArray));
        setListItems(updateArray);
    }

    const sortByEmail = () => {
        listObject.sort((a, b) => {
            let aEmail = a.email;
            let bEmail = b.email;
        
            if (aEmail < bEmail) {
                return -1;
            }
            if (aEmail > bEmail) {
                return 1;
            }
            return 0;
        });
        let updateArray = [];
        updateArray = [...listObject]
        dispatch(setListObject(updateArray));
        setListItems(updateArray);
    }

    useEffect(() => {
        setListItems(listObject)
    }, [listObject]);

  console.log("listObject: ", listObject)

return (
    <>
   
    <div className="ts-container">
        <div className="fixed-ctas-wrapper">
          <div className="fixed-cta"><button onClick={sortByName} >Sort By Name</button></div>
          <div className="fixed-cta"><button onClick={sortByAge} >Sort By Age</button></div>
          <div className="fixed-cta"><button onClick={sortByEmail} >Sort By Email</button></div>
        </div>
        <table>
            
            <thead>
                <tr className="head">
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    listItems && listItems.length > 0 && listItems.map((item, index) => {
                        return (
                        <>
                            <RowView key={index.toString()} rowItem={item} rowIndex={index} updateList={updateListInStore}/>
                        </>
                        );
                    })
                }
            </tbody>
        </table>
      </div>
    </>

);
}

export default ListView;