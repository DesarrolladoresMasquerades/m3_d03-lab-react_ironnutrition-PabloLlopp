import { Form, Input, Button } from 'antd';
import { useState } from 'react';

export default function AddFoodForm(props) {

    const [allFood, setNewFood] = useState({
        name: "",
        image: "",
        calories: 0,
        servings: 0
    })

    function createNewFood(event) {
        const inputName = event.target.name;
        const value = event.target.value;
        setNewFood({...allFood, [inputName]: value})
    }

    function submitFood(event) {
        event.preventDefault();
        props.addFood(allFood);
        setNewFood({
            name: "",
            image: "",
            calories: 0,
            servings: 0
        })
    }

    return (
        <div className='formAddFood'>

        <h2>Add your food to the list</h2>
            <Form name="basic"
            labelCol={{ span: 4 }}
            initialValues={{ remember: true }}
            autoComplete="on">
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input the food name!' }]}
                >
                <Input value={allFood.name} name="name" type="text" onChange={createNewFood} />
                </Form.Item>

                <Form.Item
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: 'Please set an image!' }]}
                >
                <Input value={allFood.image} name="image" type="text" onChange={createNewFood} />
                </Form.Item>

                <Form.Item
                    label="Calories"
                    name="calories"
                    rules={[{ required: true, message: 'Please input the food calories!' }]}
                >
                <Input value={allFood.calories} name="calories" type="text" onChange={createNewFood} />
                </Form.Item>

                <Form.Item
                    label="Servings"
                    name="servings"
                    rules={[{ required: true, message: 'Please input the food servings!' }]}
                >
                <Input value={allFood.servings} name="servings" type="text" onChange={createNewFood} />
                </Form.Item>
                
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={submitFood}>
                    Add Food
                    </Button>
                </Form.Item>
                
            </Form>
        </div>
    )
}