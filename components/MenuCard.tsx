import { Pane, Card, Heading, majorScale } from "evergreen-ui";

export default function MenuCard( {college, food} ) {
    return (  
        <Card 
        backgroundColor="white"
        padding="32px" marginX={majorScale(2)}
        marginY={majorScale(2)} minWidth={256}
        flex="1 0 0">
        <Heading is="h3" size={700} marginBottom={majorScale(1)}>{college}</Heading>
        <Pane>
          <b>Main Entree: </b>
          {food.mainEntree}
        </Pane>
        <Pane paddingTop = "10px">
          <b>Vegetarian + Vegan Entree: </b>
          {food.vegan}
        </Pane>
        <Pane paddingTop = "10px">
          <b>Soups: </b>
          {food.soups}
        </Pane>
        <Pane paddingTop = "10px">
          <b>Salad Bar: </b>
          {food.saladBar}
        </Pane>
        </Card>
    )
}