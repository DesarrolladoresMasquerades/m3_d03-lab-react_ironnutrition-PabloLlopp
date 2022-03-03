import { Card, Col, Button } from "antd";
import { useState } from "react";

export default function FoodBox(props) {

    return (
        <div>
            <Col>
                <Card
                    title={props.food.name}
                    style={{ width: 230, height: 300, margin: 10 }}
                >
                    <img src={props.food.image} height={60} alt={props.food.name}/>
                    <p>Calories: {props.food.calories}</p>
                    <p>Servings: {props.food.servings}</p>
                    <p>
                        <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
                    </p>
                    <Button type="primary" onClick={()=> props.deleteButton(props.food)}> Delete </Button>
                </Card>
            </Col>
        </div>
    )
}