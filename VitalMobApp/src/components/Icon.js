import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Icon(props) {
    return (
        <FontAwesome
            name={props.name}
            size={props.size}
            color={props.color ? props.color : "#000"}
            style={{
                backgroundColor: props.bColor ? props.bColor : '#FFF',
                borderRadius: props.size/2,
                padding: props.size/2,
                maxWidth: props.size*2,
                ...props.style
            }}
        />
    );
};