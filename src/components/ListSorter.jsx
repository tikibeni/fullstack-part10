import { Picker } from "@react-native-picker/picker";

const ListSorter = ({ sortValue, setSortValue }) => {
    return (
        <Picker
            selectedValue={sortValue}
            onValueChange={(itemValue) =>
                setSortValue(itemValue)
            }>
            <Picker.Item label="Latest repositories" value="CREATED_AT" />
            <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE_DESC" />
            <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE_ASC" />
        </Picker>
    )
}

export default ListSorter
