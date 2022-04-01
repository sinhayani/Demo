import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setListObject } from '../src/appStore/actionCreators/listObject';
import  ListView  from '../src/ListView';


function Container() {

    const dispatch = useDispatch();
    const listObject = useSelector((state) => state.listObject.list);

    const [ isRender, setIsRender] = useState(true);

    useEffect(() => {
        let list = [];
        let item ;
        let i;

        // const list = [
        //     { name: 'Test1', age: 21, email: 'test1@test.com'},
        //     { name: 'Test2', age: 22, email: 'test2@test.com'},
        //     { name: 'Test3', age: 23, email: 'test3@test.com'},
        //     { name: 'Test4', age: 24, email: 'test4@test.com'},
        //     { name: 'Test5', age: 25, email: 'test5@test.com'},
        //     { name: 'Test6', age: 26, email: 'test6@test.com'},
        //     { name: 'Test7', age: 27, email: 'test8@test.com'},
        //     { name: 'Test9', age: 28, email: 'test9@test.com'},
        //     { name: 'Test10', age: 29, email: 'tes104@test.com'},
        //     { name: 'Test5', age: 30, email: 'test5@test.com'},
        //     { name: 'Test1', age: 21, email: 'test1@test.com'},
        //     { name: 'Test2', age: 22, email: 'test2@test.com'},
        //     { name: 'Test3', age: 23, email: 'test3@test.com'},
        //     { name: 'Test4', age: 24, email: 'test4@test.com'},
        //     { name: 'Test5', age: 25, email: 'test5@test.com'},
        //     { name: 'Test6', age: 26, email: 'test6@test.com'},
        //     { name: 'Test7', age: 27, email: 'test8@test.com'},
        //     { name: 'Test9', age: 28, email: 'test9@test.com'},
        //     { name: 'Test10', age: 29, email: 'tes104@test.com'},
        //     { name: 'Test5', age: 30, email: 'test5@test.com'},
        // ]
        for(i =0 ; i < 10000 ; i++) {
            item = {
                name: `Test_${i}`,
                age: `${i}`,
                email: `test_${i}@test.com`
            }
            list.push(item);
        }
        dispatch(setListObject(list));
    }, []);

   
    useEffect(() => {
        setIsRender(true);
    }, [listObject]);

    return (
        <>
            { isRender && <ListView /> }
        </>
    );
}

export default Container;