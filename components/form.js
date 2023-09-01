import { Button, View } from "react-native";
import addDocumentToFirestore from "../firebase/util";

const handleClick = (buttonId) =>{
    const data = {"date": new Date()};
    console.log("in handleclick");
    var a = 0;
    if(buttonId == 0){
        a = addDocumentToFirestore("meals", data);
    }
    else if(buttonId == 1){
        a = addDocumentToFirestore("snacks", data);
    }
    else{
        a = addDocumentToFirestore("guests", data);
    }
    console.log("done",a);
}

const Form = () => {
    return (
        <View>
            <Button
                title="+1 Meal"
                color="#841584"
                onPress={() => handleClick(0)}
            />
            <Button
                title="+1 Snack/Drink"
                color="#841584"
                onPress={() => handleClick(1)}
            />
            <Button
                title = "+1 Guest"
                color="#841584"
                onPress={() => handleClick(2)}
            />
        </View>
    );
}

export default Form;