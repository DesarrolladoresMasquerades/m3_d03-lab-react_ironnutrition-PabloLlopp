import {  Input, Space } from 'antd';
import { useState } from 'react';

export default function Searching(props) {

    const [searchedFood, setSearchedFood] = useState("")

    const { Search } = Input;

    function onSearch(event) {
        const value = event.target.value;
        setSearchedFood(value);
        props.foodSearch(value);
    }

    return (
        <div>
            <Space direction="vertical">
                <Search placeholder="Search your meal here" name="search" value={searchedFood} onChange={onSearch} enterButton />
            </Space>
        </div>
    )
}