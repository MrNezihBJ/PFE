<List.Section style={{backgroundColor:"white"}}>

<View style={{backgroundColor:"white"}}>  

  <List.Accordion
    title="Choisir un role"
    left={props => <FontAwesome5 {...props} name="calendar-alt" size={20} color="orange" />}>

    <TouchableOpacity>
    <List.Item 
    title="Chef d'equipe"
    left={props => <FontAwesome5 {...props} name="calendar-alt" size={17} color="green" />} 
    />
    </TouchableOpacity>

    <TouchableOpacity>
    <List.Item title="Intervenant"
    left={props => <FontAwesome5 {...props} name="calendar-alt" size={17} color="red" />}  />
    </TouchableOpacity>

    <TouchableOpacity>
    <List.Item 
    title="Client"
    left={props => <FontAwesome5 {...props} name="calendar-alt" size={17} color="green" />} 
    />
    </TouchableOpacity>

  </List.Accordion>

</View>

</List.Section>